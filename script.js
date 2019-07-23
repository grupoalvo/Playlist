/*
  Shows the playlist
*/
document.getElementsByClassName('show-playlist')[0].addEventListener('click', function(){
  document.getElementById('white-player-playlist-container').classList.remove('slide-out-top');
  document.getElementById('white-player-playlist-container').classList.add('slide-in-top');
  document.getElementById('white-player-playlist-container').style.display = "block";
});

/*
  Hides the playlist
*/
document.getElementsByClassName('close-playlist')[0].addEventListener('click', function(){
  document.getElementById('white-player-playlist-container').classList.remove('slide-in-top');
  document.getElementById('white-player-playlist-container').classList.add('slide-out-top');
  document.getElementById('white-player-playlist-container').style.display = "none";
});

Amplitude.init({
  "songs": [
    {
      "name": "First Snow",
      "artist": "Emancipator",
      "album": "Soon It Will Be Cold Enough",
      "url": "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
      "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
    }
  ],
  "playlists": {
    "emancipator": {
      songs: [
        {
          "name": "First Snow",
          "artist": "Emancipator",
          "album": "Soon It Will Be Cold Enough",
          "url": "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
          "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
        },
        {
          "name": "Dusk To Dawn",
          "artist": "Emancipator",
          "album": "Dusk To Dawn",
          "url": "https://521dimensions.com/song/DuskToDawn-Emancipator.mp3",
          "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg"
        },
        {
          "name": "Anthem",
          "artist": "Emancipator",
          "album": "Soon It Will Be Cold Enough",
          "url": "https://521dimensions.com/song/Anthem-Emancipator.mp3",
          "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
        }
      ]
    },
    "trip_hop": {
      songs: [
        {
          "name": "Capítulo I",
          "artist": "Código de Trânsito Brasileiro",
          "album": "CTB",
          "url": "https://res.cloudinary.com/thay01/video/upload/v1563287942/Audio/Cap01_ayjwz3.mp3",
          "cover_art_url": "https://res.cloudinary.com/thay01/image/upload/v1563827037/Images%20App/001_ceuz2c.jpg"
        },
        {
          "name": "Capítulo II - Seção I",
          "artist": "Código de Trânsito Brasileiro",
          "album": "CTB",
          "url": "https://res.cloudinary.com/thay01/video/upload/v1563287942/Audio/Cap02s1_dxwdat.mp3",
          "cover_art_url": "https://res.cloudinary.com/thay01/image/upload/v1563845795/Images%20App/002_iqzsbv.jpg"
        },
        {
          "name": "Capítulo II - Seção II",
          "artist": "Código de Trânsito Brasileiro",
          "album": "CTB",
          "url": "https://res.cloudinary.com/thay01/video/upload/v1563288054/Audio/Cap02s2_vc2u5a.mp3",
          "cover_art_url": "https://res.cloudinary.com/thay01/image/upload/v1563846594/Images%20App/005_gyhawn.jpg"
        },
        {
          "name": "Capítulo III",
          "artist": "Código de Trânsito Brasileiro",
          "album": "CTB",
          "url": "https://res.cloudinary.com/thay01/video/upload/v1563375085/Audio/Cap03_d29vhx.mp3",
          "cover_art_url": "https://res.cloudinary.com/thay01/image/upload/v1563846597/Images%20App/004_bzvjc8.jpg"
        },
        {
          "name": "Capítulo III - A",
          "artist": "Código de Trânsito Brasileiro",
          "album": "CTB",
          "url": "https://res.cloudinary.com/thay01/video/upload/v1563376355/Audio/Cap03a_h2v1jo.mp3",
          "cover_art_url": "https://res.cloudinary.com/thay01/image/upload/v1563846600/Images%20App/003_wmgmrf.jpg"
        },
        {
          "name": "Vorel",
          "artist": "Russian Circles",
          "album": "Guidance",
          "url": "https://521dimensions.com/song/Vorel-RussianCircles.mp3",
          "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/guidance.jpg"
        },
        {
          "name": "Intro / Sweet Glory",
          "artist": "Jimkata",
          "album": "Die Digital",
          "url": "https://521dimensions.com/song/IntroSweetGlory-Jimkata.mp3",
          "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/die-digital.jpg"
        },
        {
          "name": "Offcut #6",
          "artist": "Little People",
          "album": "We Are But Hunks of Wood Remixes",
          "url": "https://521dimensions.com/song/Offcut6-LittlePeople.mp3",
          "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg"
        }
      ]
    }
  }
});