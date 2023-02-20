/*$(document).ready(function () {
    if ($(window).width() > 1025) {
      console.log("aqui");
      $('#large-video').attr('autoplay', 'autoplay');
    } else {
      $('#small-video').attr('autoplay', 'autoplay');
    }
  });

  var video = $('#id1');
  var width = $(window).width();
console.log (width);
  if (width < 1200) {
    console.log("opcion1");
      //It is a small screen
      video.append("<source src='b.mp4' type='video/mp4' >");
  } else {
    console.log("opcion2");
          //It is a big screen or desktop
      video.append("<source src='b.mp4' type='video/mp4' >");
  }
  

var video = $('<video />', {
    id: 'video',
    src: 'a.mp4',
    type: 'video/mp4',
    controls: true
});
video.appendTo($('#id2'));*/


window.onload = (event) => { myFunction( event ) };

function myFunction( event ){
 let myvid = document.getElementById("myvid");
 
 if ( screen.width > 800 ) { myvid.src = "../video/a.mp4"; }
 if ( screen.width <= 800 ) { myvid.src = "../video/b.mp4"; }
 
 myvid.load();
}
