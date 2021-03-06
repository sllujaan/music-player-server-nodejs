const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;


const { _file } = require('./business/files/file')
const { TEMP_DIR_URL, TEMP_CONVERT_PATH_FFMPEG, MANIFESTS_PATH } = require('./business/assets')
const { _audio } = require('./manifest/converter')


var init = async () => {
    //steps to convert files and generate manifests
    //1. list of all files.
    //2. ckeck if menifest already exists. if not go to next step.
    //3. empty ffmpeg output folder (for error free program).
    //4. compress all files using ffmpeg. If a file is already compressed do not compress it agin.
    //5. generate manifest. it will gerneate .mpd + .mp4 files.
    //6. delete compressed files generated by ffmpg.
    //4. failed conversions and manifests--



    //array
    var FAILED_CONVERSIONS = [];
    var FAILED_MANIFESTS = [];
    var FAILED_DIR_CREATIONS = [];


    //implementation of the above steps--
    //1. list of all files.
    const _list = await _file.readDir(TEMP_DIR_URL);
    console.log(_list)

    //const _list = ['Alan Walker-The Spectre.mp3', 'Walker/Alan Walker-The Spectre.mp3']

    //2. ckeck if menifest already exists. if not go to next step.
    var promises = [];
    promises =  _list.map(path => {
        return _audio.isManifestExists(path + '_64kbps.mpd').catch(err => err);
    })

    const data = await Promise.all(promises)
    console.log(data)


    //3. empty ffmpeg output folder (for error free program).
    // const emptied = await _audio.deleteTempDirFiles().catch(err => console.log('ERROR => ', err))
    // //if(!emptied) return;
    // console.log('ffmpeg folder emptied.')


    //4. creating empty directories for file that are in directories.
    console.log('\n\nCreating directories.....');
    // promises = [];
    // promises = _list.map(name => {
    //     const dir = path.parse(name).dir
    //     if(dir && dir !== '/') return _audio.createDir(TEMP_CONVERT_PATH_FFMPEG, path.dirname(dir)).catch(err => {FAILED_DIR_CREATIONS.push(err)});
    // })

    // const dirResponse = await Promise.all(promises)
    // if(FAILED_DIR_CREATIONS.length > 0) {
    //     // console.log(FAILED_DIR_CREATIONS)
    //     // console.log('\n\n')
    //     console.log(`${FAILED_DIR_CREATIONS.length} directories creation failed.`);
    // }
    // else {console.log('All directories created successfully.');}

    const dirCloneSuccess = await _audio._cloneDirsTo_ffmpeg().catch(err => {console.log('Some direcotires creation failed! LOG => ', err);})
    if(dirCloneSuccess) console.log('All directories cloned successfully.\n\n');


    //5. compress all files using ffmpeg. If a file is already compressed do not compress it agin.
    console.log('----files conversion [make sure you deleted all files in ffmeg output folder]----')
    console.log('converting files.....')
    // promises = [];
    // promises = data.map((isManifest, index) => {
    //     if(isManifest === false) {
    //         //console.log(_list[index])
    //         //convert files in asyncronously
    //         return _audio.convertFile(DIR_URL+_list[index], '64k', TEMP_CONVERT_PATH_FFMPEG + _list[index] + '_64kbps')
    //         .catch(err => {FAILED_CONVERSIONS.push(err)})
    //     }
    // })

    // const converterResponse = await Promise.all(promises)

    //converting files in sequence order------
    var processedFiles = 0;
    for(const index of data.keys()) {
        const isManifest = data[index];
        if(isManifest === false) {
            await _audio.convertFile(TEMP_DIR_URL+_list[index], '64k', TEMP_CONVERT_PATH_FFMPEG + _list[index] + '_64kbps')
            .catch(err => {FAILED_CONVERSIONS.push(err)})
            console.log(`processed Files => ${processedFiles+=1}`);
        }
    }

    //console.log(FAILED_CONVERSIONS)
    //console.log('\n\n')

    if(FAILED_CONVERSIONS.length > 0) {
        console.log(FAILED_CONVERSIONS, '\n\n');
        console.log(`${FAILED_CONVERSIONS.length} convertion/s failed.`)
    }
    else {console.log('All convertions performed successfully.')}


    //2. compress all files using ffmpeg. If a file is already compressed do not compress it agin.
    // const input = TEMP_CONVERT_PATH_FFMPEG  + _list[0] + '_64k.mp4';
    // const quality = '64k';
    // const output = MANIFESTS_PATH + _list[0] + `_${quality}`;
    console.log('\n\ngenerating manifests.....')
    // promises = [];
    // promises = _list.map(name => {

    //     const input = TEMP_CONVERT_PATH_FFMPEG + name + '_64kbps.mp4';
    //     const quality = '64kbps';
    //     const output = MANIFESTS_PATH + name + `_${quality}`;

    //     //3. generate manifest. it will gerneate .mpd + .mp4 files.
    //     _audio.gererateManifest(input, output).catch(err => {FAILED_MANIFESTS.push(err.message)})

    // })

    // const manifestsResponse = await Promise.all(promises)

    var processedManifests = 0;
    //generating manifests sequantially--
    for(const index of _list.keys()) {
        const name = _list[index];
        const input = TEMP_CONVERT_PATH_FFMPEG + name + '_64kbps.mp4';
        const quality = '64kbps';
        const output = MANIFESTS_PATH + name + `_${quality}`;

        //check if file exists in ffmpeg folder.
        if(!_audio._isFile(input)) continue;

        await _audio.gererateManifest(input, output).catch(err => {FAILED_MANIFESTS.push(err.message)})
        console.log(`processed Files => ${processedManifests+=1}`);
    }
    
    if(FAILED_MANIFESTS.length > 0) {
        console.log(FAILED_MANIFESTS, '\n\n')
        console.log(`${FAILED_MANIFESTS.length} manifests failed to be generated!`)
    }
    else {console.log('manifests generated successfully.')}
    
    
}

init()






app.listen(PORT, _ => {
    console.log(`App listening on port http://localhost:${PORT}`);
    console.log('Press Ctrl+C to quit.');
  });