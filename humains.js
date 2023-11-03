document.addEventListener("DOMContentLoaded", function () {
// Get a reference for the scroll to fixed background element
const bgimg_1 = document.querySelector(".bgimg-1");
const left1Element = document.querySelector(".left1");

const scrollPositionTobgimg_1 = 1900; 
const scrollPositionToChange_left1 = 1900; 


window.addEventListener("scroll", () => {
  const scrollPositionbgimg_1 = window.scrollY;
  const scrollPosition_left1 = window.scrollY;


  if (scrollPositionbgimg_1 >= scrollPositionTobgimg_1) {
    bgimg_1.style.backgroundAttachment = "fixed";
    bgimg_1.style.top = "0"; 
  } else {
    bgimg_1.style.backgroundAttachment = "scroll";
  }

  // left1 johnnette-text
  if (scrollPosition_left1 >= scrollPositionToChange_left1) {
    left1Element.style.position = "fixed";
    left1Element.style.top = "40px";
  } else {
    left1Element.style.position = "relative";
  }
});

// Get a reference to the .left2 element
const left2Element = document.querySelector(".left2");
const scrollPositionToChange2 = 2900; // Change this value as needed

window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  if (scrollPosition >= scrollPositionToChange2) {
    // Change the position to 'fixed'
    left2Element.style.position = "fixed";
    left2Element.style.top = "30px";
    //left2Element.style.left='250px'
  } else {
    left2Element.style.position = "relative";
  }
});

});
// for bgimg-3 we have this js code

// chatgpt example

// document.addEventListener("DOMContentLoaded", function () {
//     // Get a reference to the element you want to change
//     const elementToChange = document.querySelector(".element");
  
//     // Calculate the scroll position at which you want to change the position
//     const scrollPositionToChange = 500; // Change this value as needed
  
//     // Add a scroll event listener
//     window.addEventListener("scroll", () => {
//       // Get the current scroll position
//       const scrollPosition = window.scrollY;
  
//       if (scrollPosition >= scrollPositionToChange) {
//         // Change the position to 'fixed'
//         elementToChange.style.position = "fixed";
//         elementToChange.style.top = "50px";
//       } else {
//         // Revert to 'relative' when scrolling up
//         elementToChange.style.position = "relative";
//       }
//     });
//   });
  