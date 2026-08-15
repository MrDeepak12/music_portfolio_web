
var music = document.getElementById("audio");
var soundtrack = document.getElementById("soundtrack");
var play = document.getElementById("play");
var musicpause = document.getElementById("pause");
var forward = document.getElementById("forward");
var previous = document.getElementById("previous");
let songs = [
    "thodi-der-mp3free.org.mp3",
    "ye-tu-ne-kya-kiya-mp3free.org.mp3",
    "ytmp3free.cc_bahara-slowed-and-reverb-dd4lofi-lofi-music-youtubemp3free.org.mp3",
    "ytmp3free.cc_bahara-slowed-and-reverb-dd4lofi-lofi-music-youtubemp3free.org.mp3",
    "ytmp3free.cc_chashni-slowedreverb-lyrics-salman-katrina-youtubemp3free.org.mp3",
    "ytmp3free.cc_tum-jo-aaye-slowed-reverb-rahat-fateh-ali-khan-tulsi-kumar-lofi-love-song-youtubemp3free.org.mp3",
];
let currentsong = 0;
 play.onclick =function() {
       
        music.play();
        
       musicpause.style.display = "flex";
       play.style.display = "none";
        soundtrack.style.animation = "rotate 10s linear infinite";
       soundtrack.style.animationPlayState = "running";

       
       };

musicpause.onclick = function(){
    music.pause();
    play.style.display= "flex";
    musicpause.style.display ="none";
    soundtrack.style.animationPlayState = "paused";

    
};
forward.onclick  = function(){
    currentsong++;
    if(currentsong>=songs.length){
        currentsong =0 ;
    }
    music.src = songs[currentsong];
    music.play();
     musicpause.style.display = "flex";
      play.style.display= "none";
};
previous.onclick  = function(){
    currentsong--;
    if(currentsong<0){
        currentsong = songs.length -1;
    }
    music.src = songs[currentsong];
    music.play();
     musicpause.style.display = "flex";
      play.style.display= "none";
};