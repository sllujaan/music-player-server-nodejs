const fs = require('fs');
const { LIST_PATH } = require('../business/assets');

const list = [
    {
      musicName: 'Alan Walker-The Spectre.mp3',
      musicPath: '/Alan Walker-The Spectre.mp3',
      title: 'Spectre',
      artist: '',
      album: 'Walker',
      year: '2020',
      genre: '(17)',
      imageUrl: 'cover/Alan Walker-The Spectre.mp3.jpg'
    },
    {
      musicName: 'on_my_way.mp3',
      musicPath: '/on_my_way.mp3',
      imageUrl: 'cover/on_my_way.mp3.jpg'
    },
    {
      musicName: '01_Welcome_To_New_York.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/01_Welcome_To_New_York.mp3',
      title: 'Welcome To New York',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '02_Blank_Space.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/02_Blank_Space.mp3',
      title: 'Blank Space',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '03_Style.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/03_Style.mp3',
      title: 'Style',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '04_Out_Of_The_Woods.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/04_Out_Of_The_Woods.mp3',
      title: 'Out Of The Woods',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '05_All_You_Had_To_Do_Was_Stay.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg',
      title: 'All You Had To Do Was Stay',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '06_Shake_It_Off.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/06_Shake_It_Off.mp3',
      title: 'Shake It Off',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '07_I_Wish_You_Would.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/07_I_Wish_You_Would.mp3',
      title: 'I Wish You Would',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '08_Bad_Blood.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/08_Bad_Blood.mp3',
      title: 'Bad Blood',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '09_Wildest_Dreams.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/09_Wildest_Dreams.mp3',
      title: 'Wildest Dreams',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '10_How_You_Get_The_Girl.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/10_How_You_Get_The_Girl.mp3',
      title: 'How You Get The Girl',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '11_This_Love.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/11_This_Love.mp3',
      title: 'This Love',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '12_I_Know_Places.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/12_I_Know_Places.mp3',
      title: 'I Know Places',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '13_Clean.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/13_Clean.mp3',
      title: 'Clean',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '14_Wonderland.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/14_Wonderland.mp3',
      title: 'Wonderland',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '15_You_Are_In_Love.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/15_You_Are_In_Love.mp3',
      title: 'You Are In Love',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '16_New_Romantics.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/16_New_Romantics.mp3',
      title: 'New Romantics',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '17_I_Know_Places_-_Voice_Memos.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/17_I_Know_Places_-_Voice_Memos.mp3',
      title: 'I Know Places - Voice Memos',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '18_I_Wish_You_Would_-_Voice_Memos.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/18_I_Wish_You_Would_-_Voice_Memos.mp3',
      title: 'I Wish You Would - Voice Memos',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '19_Blank_Space_-_Voice_Memos.mp3',
      musicPath: '/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/19_Blank_Space_-_Voice_Memos.mp3',
      title: 'Blank Space - Voice Memos',
      artist: 'Taylor Swift',
      album: '1989 (Deluxe)',
      year: '2014',
      genre: 'Country & Folk',
      imageUrl: 'cover/Taylor_Swift_-_1989_(Deluxe)__[ChattChitto_RG]/1989 (Deluxe)/1989 (Deluxe).jpg'
    },
    {
      musicName: '01_-_I_Forgot_That_You_Existed.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/01_-_I_Forgot_That_You_Existed.mp3',
      title: 'I Forgot That You Existed',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '02_-_Cruel_Summer.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/02_-_Cruel_Summer.mp3',
      title: 'Cruel Summer',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '03_-_Lover.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/03_-_Lover.mp3',
      title: 'Lover',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '04_-_The_Man.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/04_-_The_Man.mp3',
      title: 'The Man',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '05_-_The_Archer.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/05_-_The_Archer.mp3',
      title: 'The Archer',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '06_-_I_Think_He_Knows.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/06_-_I_Think_He_Knows.mp3',
      title: 'I Think He Knows',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '07_-_Miss_Americana_&_The_Heartbreak_Prince.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/07_-_Miss_Americana_&_The_Heartbreak_Prince.mp3',
      title: 'Miss Americana & The Heartbreak Prince',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '08_-_Paper_Rings.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/08_-_Paper_Rings.mp3',
      title: 'Paper Rings',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '09_-_Cornelia_Street.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/09_-_Cornelia_Street.mp3',
      title: 'Cornelia Street',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '10_-_Death_By_A_Thousand_Cuts.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/10_-_Death_By_A_Thousand_Cuts.mp3',
      title: 'Death By A Thousand Cuts',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '11_-_London_Boy.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/11_-_London_Boy.mp3',
      title: 'London Boy',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '12_-_Soon_You’ll_Get_Better_(feat._Dixie_Chicks).mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/12_-_Soon_You’ll_Get_Better_(feat._Dixie_Chicks).mp3',
      title: 'Soon You’ll Get Better (feat. Dixie Chicks)',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '13_-_False_God.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/13_-_False_God.mp3',
      title: 'False God',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '14_-_You_Need_To_Calm_Down.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/14_-_You_Need_To_Calm_Down.mp3',
      title: 'You Need To Calm Down',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '15_-_Afterglow.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/15_-_Afterglow.mp3',
      title: 'Afterglow',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '16_-_ME!_feat._Brendon_Urie_of_Panic_At_The_.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/16_-_ME!_feat._Brendon_Urie_of_Panic_At_The_.mp3',
      title: 'ME! (feat. Brendon Urie of Panic! At The Disco)',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '17_-_It’s_Nice_To_Have_A_Friend.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/17_-_It’s_Nice_To_Have_A_Friend.mp3',
      title: 'It’s Nice To Have A Friend',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '18_-_Daylight.mp3',
      musicPath: '/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/18_-_Daylight.mp3',
      title: 'Daylight',
      artist: 'Taylor Swift',
      album: 'Lover',
      year: '2019',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Lover_(2019)_Mp3_(320kbps)_[Hunter]/Taylor Swift - Lover (2019)/Taylor Swift - Lover (2019).jpg'
    },
    {
      musicName: '10_King_Of_My_Heart.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/10_King_Of_My_Heart.mp3',
      title: 'King Of My Heart',
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: '(13)',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    },
    {
      musicName: '11_Dancing_With_Our_Hands_Tied.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/11_Dancing_With_Our_Hands_Tied.mp3',
      title: 'Dancing With Our Hands Tied',
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    },
    {
      musicName: '12_Dress.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/12_Dress.mp3',
      title: 'Dress',
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    },
    {
      musicName: '13_This_Is_Why_We_Cant_Have_Nice_Things.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/13_This_Is_Why_We_Cant_Have_Nice_Things.mp3',
      title: 'Dancing With Our Hands Tied',
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    },
    {
      musicName: '14_Call_It_What_You_Want.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/14_Call_It_What_You_Want.mp3',
      title: 'Call It What You Want',
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    },
    {
      musicName: '15_New_Years_Day.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/15_New_Years_Day.mp3',
      title: "New Year's Day",
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: '(13)',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    },
    {
      musicName: '1__Ready_For_It_.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/1__Ready_For_It_.mp3',
      title: '...Ready For It?',
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    },
    {
      musicName: '2_End_Game.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/2_End_Game.mp3',
      title: 'End Game',
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: '(13)',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    },
    {
      musicName: '3_I_Did_Something_Bad.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/3_I_Did_Something_Bad.mp3',
      title: 'I Did Something Bad',
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    },
    {
      musicName: '4_Dont_Blame_Me.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/4_Dont_Blame_Me.mp3',
      title: "Don't Blame Me",
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: '(13)',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    },
    {
      musicName: '5_Delicate.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/5_Delicate.mp3',
      title: 'Delicate',
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    },
    {
      musicName: '6_Look_What_You_Made_Me_Do.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/6_Look_What_You_Made_Me_Do.mp3',
      title: 'Look What You Made Me Do',
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    },
    {
      musicName: '7_So_It_Goes.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/7_So_It_Goes.mp3',
      title: 'So It Goes...',
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: '(13)',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    },
    {
      musicName: '8_Gorgeous.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/8_Gorgeous.mp3',
      title: 'Gorgeous',
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: 'Pop',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    },
    {
      musicName: '9_Getaway_Car.mp3',
      musicPath: '/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/9_Getaway_Car.mp3',
      title: 'Getaway Car',
      artist: 'Taylor Swift',
      album: 'Reputation',
      year: '2017',
      genre: '(13)',
      imageUrl: 'cover/Taylor_Swift_-_Reputation_(2017)_(Mp3_320kbps)_[Hunter]/Taylor_Swift_-_Reputation_(2017).jpg'
    }
  ]




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

saveListToFile(LIST_PATH, JSON.stringify(list))
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log('ERROR:: => ', err);
})