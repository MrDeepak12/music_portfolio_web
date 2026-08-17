
var music = document.getElementById("audio");
var soundtrack = document.getElementById("soundtrack");
var play = document.getElementById("play");
var musicpause = document.getElementById("pause");
var forward = document.getElementById("forward");
var previous = document.getElementById("previous");
let musicList = document.querySelectorAll(".musicList p");

var preloader = document.getElementById("preloader");
var mainpage = document.getElementById("home");
var body = document.querySelector("body");
window.addEventListener("load",
    function (){
          body.style.overflowY = "hidden";
        // preloader.style.display = "flex";
        setTimeout(function(){
           
            preloader.style.display = "none";
           body.style.overflowY = "auto";
            
             typeText();
        },2000);
        
    }
);

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
         soundtrack.style.animation = "none";
      soundtrack.offsetHeight;
     soundtrack.style.animation = "rotate 10s linear infinite";
    hightlightsong();

    
    


    


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
        soundtrack.style.animation = "none";
      soundtrack.offsetHeight;
     soundtrack.style.animation = "rotate 10s linear infinite";
    hightlightsong();
};
function thodider(){
    music.src = songs[0];
    music.play();
      musicpause.style.display = "flex";
      play.style.display= "none";
      soundtrack.style.animation = "none";
      soundtrack.offsetHeight;
     soundtrack.style.animation = "rotate 10s linear infinite";
     currentsong =0;
     hightlightsong();
    

      
}
function tunekya(){
    music.src = songs[1];
    music.play();
      musicpause.style.display = "flex";
      play.style.display= "none";
          soundtrack.style.animation = "none";
      soundtrack.offsetHeight;
     soundtrack.style.animation = "rotate 10s linear infinite";
    currentsong = 1;
    hightlightsong();

      
}
function bahara(){
    music.src = songs[2];
    music.play();
      musicpause.style.display = "flex";
      play.style.display= "none";
        soundtrack.style.animation = "none";
      soundtrack.offsetHeight;
     soundtrack.style.animation = "rotate 10s linear infinite";
   currentsong = 2;
   hightlightsong();

}
function bahara1(){
    music.src = songs[2];
    music.play();
      musicpause.style.display = "flex";
      play.style.display= "none";
        soundtrack.style.animation = "none";
      soundtrack.offsetHeight;
     soundtrack.style.animation = "rotate 10s linear infinite";
     currentsong = 3;
     hightlightsong();
    
}
       
function chasni(){
    music.src = songs[4];
    music.play();
      musicpause.style.display = "flex";
      play.style.display= "none";
        soundtrack.style.animation = "none";
      soundtrack.offsetHeight;
     soundtrack.style.animation = "rotate 10s linear infinite";
     currentsong = 4;
     hightlightsong();
 

}
function tumJoAaye(){
    music.src = songs[5];
    music.play();
      musicpause.style.display = "flex";
      play.style.display= "none";
      soundtrack.style.animation = "none";
      soundtrack.offsetHeight;
     soundtrack.style.animation = "rotate 10s linear infinite";
     currentsong= 5;
     hightlightsong();
   
}
musicList.forEach((play,index)=> {
    play.style.color = "black"
});
music.src = songs[currentsong];
musicList[currentsong].style.color = "red";

function hightlightsong(){
    musicList.forEach((p,index)=>{
       p.style.color = (index ===currentsong)? "red" : "black";
    });
}
music.addEventListener("ended",
    function(){
        currentsong++ ;
        if(currentsong>=songs.length){
            currentsong=0;
        }
        music.src = songs[currentsong];
        music.play();
        hightlightsong();
    }
);