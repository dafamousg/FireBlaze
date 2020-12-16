
//https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=UCdl8T8PPHJf141WYCXJK1Lg

var key = '&key=AIzaSyC8S4eoB4ncNKj-aF9FAMzn2xLhsCqfjIA';
var url = 'https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=UCdl8T8PPHJf141WYCXJK1Lg'+key;

var logoImg;

fetch(url)
  .then(response => response.json())
  .then(data => {
      data.items;
      for (const i of data.items) {
          logoImg = i.brandingSettings.image.bannerExternalUrl;
      }
      document.getElementById("logo").style.backgroundImage = "url('"+logoImg +"')";
  })




function toNavFunc() {
    var x = document.getElementById("topNav");
    if (x.className === "navMenu") {
        console.log("navMenu" + x.className)
      x.className += " responsive";
    } else {
        console.log("Not navMenu" + x.className);
      x.className = "navMenu";
    }
  }