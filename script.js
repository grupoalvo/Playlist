
/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for( var i = 0; i < bandcampLinks.length; i++ ){
	bandcampLinks[i].addEventListener('click', function(e){
		e.stopPropagation();
	});
}


let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#00A0FF';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}

		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	"songs": [
		{
			"name": "Capítulo I",
			"artist": "CTB",
			"album": "",
			"url": "https://res.cloudinary.com/thay01/video/upload/v1563287942/Audio/Cap01_ayjwz3.mp3",
			"cover_art_url": "https://res.cloudinary.com/thay01/image/upload/v1563827037/Images%20App/001_ceuz2c.jpg"
		},
		{
			"name": "Capítulo II - Seção I",
			"artist": "CTB",
			"album": "",
			"url": "https://res.cloudinary.com/thay01/video/upload/v1563287942/Audio/Cap02s1_dxwdat.mp3",
			"cover_art_url": "https://res.cloudinary.com/thay01/image/upload/v1563845795/Images%20App/002_iqzsbv.jpg"
		},
		{
			"name": "Capítulo II - Seção II",
			"artist": "CTB",
			"album": "",
			"url": "https://res.cloudinary.com/thay01/video/upload/v1563288054/Audio/Cap02s2_vc2u5a.mp3",
			"cover_art_url": "https://res.cloudinary.com/thay01/image/upload/v1563846594/Images%20App/005_gyhawn.jpg"
		},
		{
			"name": "Capítulo III",
			"artist": "CTB",
			"album": "",
			"url": "https://res.cloudinary.com/thay01/video/upload/v1563375085/Audio/Cap03_d29vhx.mp3",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"
		},
		{
			"name": "Capítulo III - A",
			"artist": "CTB",
			"album": "",
			"url": "https://res.cloudinary.com/thay01/video/upload/v1563376355/Audio/Cap03a_h2v1jo.mp3",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
		},
		{
			"name": "Capítulo IV",
			"artist": "CTB",
			"album": "",
			"url": "https://res.cloudinary.com/thay01/video/upload/v1563378701/Audio/Cap04_c2ltyx.mp3",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/key.jpg"
		},
		{
			"name": "Capítulo V",
			"artist": "CTB",
			"album": "",
			"url": "https://res.cloudinary.com/thay01/video/upload/v1563378853/Audio/Cap05_zuv3uh.mp3",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/guidance.jpg"
		},
		{
			"name": "Capítulo VI",
			"artist": "CTB",
			"album": "",
			"url": "https://res.cloudinary.com/thay01/video/upload/v1563380032/Audio/Cap06_x5mcwo.mp3",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/die-digital.jpg"
		},
		{
			"name": "Capítulo VII",
			"artist": "CTB",
			"album": "",
			"url": "https://res.cloudinary.com/thay01/video/upload/v1563380050/Audio/Cap07_exwtat.mp3",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg"
		},
		{
			"name": "Capítulo VIII",
			"artist": "CTB",
			"album": "",
			"url": "https://res.cloudinary.com/thay01/video/upload/v1563381368/Audio/Cap08_q4a0eg.mp3",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg"
		},
		{
			"name": "Anthem",
			"artist": "Emancipator",
			"album": "Soon It Will Be Cold Enough",
			"url": "https://521dimensions.com/song/Anthem-Emancipator.mp3",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
		}
	],
  "callbacks": {
        'play': function(){
            document.getElementById('album-art').style.visibility = 'hidden';
            document.getElementById('large-visualization').style.visibility = 'visible';
        },

        'pause': function(){
            document.getElementById('album-art').style.visibility = 'visible';
            document.getElementById('large-visualization').style.visibility = 'hidden';
        }
    },
  waveforms: {
    sample_rate: 50
  }
});
document.getElementById('large-visualization').style.height = document.getElementById('album-art').offsetWidth + 'px';
