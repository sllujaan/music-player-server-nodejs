/**
 *
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const fs = require('fs');
const { NEW_DIR_URL, LIST_PATH } = require('./business/assets');
const { _file } = require('./business/files/file');
const { resolve } = require('path');






const getList = async () => {
    return new Promise(async (resolve, reject) => {
        var tempList = [];
        //reading the directory and getting files names
        const _list = await _file.readDir(NEW_DIR_URL); //returns an array
        if(_list && _list.length === 0) reject("directory is empty.");
        //reading tag for each file        
        tempList = await getTags(_list);
        //save list to list.txt file
        ListResponse = await saveListToFile(LIST_PATH, JSON.stringify(tempList)).catch(err=>reject(err));
        resolve(ListResponse);
    })
}


/**
 * reads the tag of files and strores in an array
 * @param {Array} pathList 
 * @returns {Prom} An array of tags.
 */
const getTags = async (pathList) => {
    var tempList = [];
    for(const name of pathList ) {
        const tag = await _file.readTag(NEW_DIR_URL, name);
        if(tag && Object.keys(tag).length > 0) tempList.push(tag);
    }
    return tempList;
}

/**
 * saves the list in text file.
 * @param {string} savePath 
 * @param {string} listArray 
 */
const saveListToFile = (savePath, listArray) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(savePath, listArray, (err) => {
            if(err) return reject(`Failed To save the list in file => ${savePath}`);
            return resolve("List saved sucessfully.");
        })
    })
    
}

/**
 * read list from the given file.
 * @param {string} filePath 
 */
const readListFromFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if(err) return reject(`Failed To read the list from file => ${filePath}`);
            return resolve(JSON.parse(data));
        })
    })
    
}




console.log('generating list.....');
getList()
.then(list => {
    console.log(list);
})
.catch(err => {
    console.log(err);
})

