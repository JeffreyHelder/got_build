(() => {
  console.log('link successful');

  // variable stack -> get the shields / sigils first
  const sigils = document.querySelectorAll('.sigilContainer'),
        lightBox = document.querySelector('.lightbox'),
        closeButton = document.querySelector('.close-lightbox'),
        houseVideo = document.querySelector('.house-video'),
        bannerImages = document.querySelector("#houseImages"),
        houseName = document.querySelector("#house-name"),
        houseInfo = document.querySelector(".house-info");
        // houseData is a multidimensional array
        // when you click on a shield, the dataset.offset property is a 0 through 5 that's pointing at the main index of the houseData array (stark, baratheon, lannister etc). so the syntax becomes houseData[offset][0] for the house name, and houseData[offset][1] for the house data. Each gets assigned to the h1 and the paragraph tag

  let   video = document.querySelector(".house-video"),
        controls = document.querySelector(".video-controls"),
        playPause = document.querySelector(".play-pause"),
        playPauseIcon = document.querySelector("#plause"),
        mute = document.querySelector(".mute"),
        volIcon = document.querySelector("#volume"),
        fullScreen = document.querySelector(".full"),
        progressBar = document.querySelector("#progress-bar"),
        volBar = document.querySelector("#vol");

  const houseData = [
      // houseData[0][0] is "stark", houseData[0][1] is the house data, houseData[0][2] is video src
      ["stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`,`video/House-Stark.mp4`],

      // houseData[1][0] is "baratheon", houseData[1][1] is the house data, houseData[1][2] is video src
      ["baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.`,`video/House-Baratheon.mp4`],

      // houseData[2][0] is "lannister", houseData[2][1] is the house data, houseData[2][2] is video src
      ["lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.

      The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.`,`video/House-Lannister.mp4`],

      // houseData[3][0] is "tully", houseData[3][1] is the house data, houseData[3][2] is video src
      ["tully", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."`,`video/House-Tully.mp4`],

      // houseData[4][0] is "greyjoy", houseData[4][1] is the house data, houseData[4][2] is video src
      ["greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.
      House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.`,`video/House-Greyjoy.mp4`],

      // houseData[5][0] is "arryn", houseData[5][1] is the house data, houseData[5][2] is video src
      ["arryn", `House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.`,`video/House-Arryn.mp4`],

      // houseData[6][0] is "frey", houseData[6][1] is the house data, houseData[6][2] is video src
      ["frey", `House Frey of the Twins was the Great House of the Riverlands, having gained their position for their treachery against their former liege lords, House Tully, who were stripped of all their lands and titles for their rebellion against the Iron Throne; House Tully had supported the independence movement for the Kingdom of the North. The current head of the house is unknown following the assassinations of Lord Walder Frey and two of his sons, Lothar Frey and Walder Rivers, by the vengeful Arya Stark. This is made more complex by the subsequent assassination of all the male Freys soon after.`,`video/House-Frey.mp4`],

      // houseData[7][0] is "targaryen", houseData[7][1] is the house data, houseData[7][2] is video src
      ["targaryen", `House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor.`,`video/House-Targaryen.mp4`],

      // houseData[8][0] is "tyrell", houseData[8][1] is the house data, houseData[8][2] is video src
      ["tyrell",`House Tyrell of Highgarden is one of the Great Houses of the Seven Kingdoms, being Lords Paramount of the Mander and the liege lords of the Reach. A large, wealthy house, its wealth is only surpassed among the Great Houses by House Lannister, and the Tyrells can field the greatest armies. Additionally, if they call the ships of the Redwyne fleet, the lords of the Shield Islands, and the coastal lords, they can command a navy that equals if not surpasses the royal fleet of King's Landing.`,`video/House-Tyrell.mp4`],
    ];

  function popLightBox() {
    // makes the lightbox show up
    lightBox.classList.add('show-lightbox');

    houseVideo.play();
  }

  function closeLightBox(event) {
    event.preventDefault();
    // makes the lightbox close
    lightBox.classList.remove('show-lightbox');
    houseVideo.currentTime = 0; // rewinds the video
    houseVideo.pause();
  }

  function animateBanners() {
    // offset that can multiply to animate the banners to the left and make the active one show up

    let offset = 600,
        multiplier = this.dataset.offset;
        // the data-offset custom data attribute on each of the sigils
    console.log((offset * multiplier) + "px");

    // moves the banners to the left
    bannerImages.style.right = `${offset * multiplier + "px"}`;

    // change the house name, data, vid on the page at the same time
    // houseName.textContent = "House " + houseData[multiplier];
    houseName.textContent = `House ${houseData[multiplier][0]}`;
    houseInfo.textContent = houseData[multiplier][1];
    houseVideo.src = houseData[multiplier][2];

    bannerImages.addEventListener("transitionend", (popLightBox));
  }

  // FUNCTIONS FOR CUSTOM VIDEO CONTROLLER
  function plause() {
    if (video.paused) {
      video.play();
      playPauseIcon.src = ("images/pause.png");;
    } else {
      video.pause();
      playPauseIcon.src = ("images/play.png");
    };
 };

 function sound() {
   if (video.muted == false) {
    video.muted = true;
    volIcon.src = ("images/mute.png");
 } else {
    video.muted = false;
    volIcon.src = ("images/volume.png");
  };
};

function volumeCont() {
  video.volume = (volBar.value/10);
};

function expand() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
  video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  };
};

function updateProgress() {
  progress = (100/video.duration) * video.currentTime;
  progressBar.value = progress;
}

 function skip() {
  time = video.duration * (progressBar.value/100);
  video.currentTime = time;
};


  sigils.forEach(sigil => sigil.addEventListener("click", animateBanners));

  closeButton.addEventListener("click", closeLightBox);
  houseVideo.addEventListener('ended', closeLightBox);

  // EVENTS FOR VIDEO CONTROLLER
  playPause.addEventListener('click', plause);
  mute.addEventListener('click', sound);
  volBar.addEventListener('change', volumeCont);
  fullScreen.addEventListener('click', expand);
  video.addEventListener('timeupdate', updateProgress);
  progressBar.addEventListener('change', skip);
  video.addEventListener('click', plause);

})();
