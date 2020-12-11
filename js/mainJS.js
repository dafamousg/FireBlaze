


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