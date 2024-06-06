"use strict";

function doScrollDown(){
  document.getElementById("scroll-marker").scrollIntoView({behavior: "smooth"});
}

function doRedirect(url){ //used for making the paragraphs link to the project display pages as well bc for some reason z-index and animtions do NOT mix
  window.open(url, '_self');
}