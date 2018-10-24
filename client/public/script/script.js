// require("dotenv").config();
//requires
// const idkeys = require('./keys');
//
console.log("connected");
let wallpaper = document.querySelector('body');
// $().hide();
$(document).ready(function () {
  console.log("ready!");
  $('#contentPage').append(firstLoad);
});
//
$('#home').on('click', () => {
  removeAll ();
  $('#contentPage').append(firstLoad);
  wallpaper.style.setProperty('--bgColor',"white");
  wallpaper.style.setProperty('--allText', 'black');
});
//
$('#about').on('click', () => {
  removeAll ();
  $('#contentPage').append(section1);
  wallpaper.style.setProperty('--bgColor', 'linear-gradient(to right, #b2fefa, #0ed2f7)');
  wallpaper.style.setProperty('--allText', 'black');
  console.log('about pressed')
});
//
$('#skills').on('click', () => {
  removeAll ();
  $('#contentPage').append(section2);
    wallpaper.style.setProperty('--bgColor', 'linear-gradient(to bottom, #fc4a1a, #f7b733)');
  wallpaper.style.setProperty('--allText', 'White');
});
//
$('#projects').on('click', () => {
  removeAll ();
  $('#contentPage').append(section3);
    wallpaper.style.setProperty('--bgColor', 'linear-gradient(to bottom, #4776e6, #8e54e9)');
  wallpaper.style.setProperty('--allText', 'black');
});
// $('#education').on('click', () => {
//   removeAll ();
//   $('#contentPage').append(section4);
//     wallpaper.style.setProperty('--bgColor', 'linear-gradient(to right, #b2fefa, #0ed2f7)');
//   wallpaper.style.setProperty('--allText', 'black');
// });
//
// $('#experance').on('click', () => {
//   removeAll ();
//   $('#contentPage').append(section5);
//     wallpaper.style.setProperty('--bgColor', 'linear-gradient(to right, #b2fefa, #0ed2f7)');
//   wallpaper.style.setProperty('--allText', 'black');
// });
//
$('#contact').on('click', () => {
  removeAll ();
  $('#contentPage').append(section6);
    wallpaper.style.setProperty('--bgColor', 'linear-gradient(to bottom, #5433ff, #20bdff, #a5fecb)');
  wallpaper.style.setProperty('--allText', 'black');

});

const removeAll = () =>{
  $('#introPage').remove();
  $('#aboutPage').remove();
  $('#skillPage').remove();
  $('#projPage').remove();
  $('#eduPage').remove();
  $('#expPage').remove();
  $('#contactPage').remove();
}
// Contact for behavior
// Input Lock
$('textarea').blur(function () {
  $('#contactPage textarea').each(function () {
      $this = $(this);
      if ( this.value != '' ) {
        $this.addClass('focused');
        $('textarea + label + span').css({'opacity': 1});
      }
      else {
        $this.removeClass('focused');
        $('textarea + label + span').css({'opacity': 0});
      }
  });
});

$('#contactPage .field:first-child input').blur(function () {
  $('#contactPage .field:first-child input').each(function () {
      $this = $(this);
      if ( this.value != '' ) {
        $this.addClass('focused');
        $('.field:first-child input + label + span').css({'opacity': 1});
      }
      else {
        $this.removeClass('focused');
        $('.field:first-child input + label + span').css({'opacity': 0});
      }
  });
});

$('#contactPage .field:nth-child(2) input').blur(function () {
  $('#contactPage .field:nth-child(2) input').each(function () {
      $this = $(this);
      if ( this.value != '' ) {
        $this.addClass('focused');
        $('.field:nth-child(2) input + label + span').css({'opacity': 1});
      }
      else {
        $this.removeClass('focused');
        $('.field:nth-child(2) input + label + span').css({'opacity': 0});
      }
  });
});


