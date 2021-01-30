
$(document).ready(function(){
  
  // slider 
  if(window.location.href.indexOf('index') > -1){
  
  $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 900
     
    });
  }
    
// post


var post=[
    {
        title:'prueba de titulo 1', 
        date: moment().format("MMMM Do YYYY"),
        content:'La Universidad Nacional Autónoma de México (abreviado como UNAM) es una universidad pública mexicana'
      },

      { title:'prueba de titulo 2', 
      date: moment().format("MMMM Do YYYY"),
      content:'La Universidad Nacional Autónoma de México (abreviado como UNAM) es una universidad pública mexicana'},
      { title:'prueba de titulo 3', 
      date: new Date(),
      content:'La Universidad Nacional Autónoma de México (abreviado como UNAM) es una universidad pública mexicana'},
      { title:'prueba de titulo 4', 
      date: new Date(),
      content:'La Universidad Nacional Autónoma de México (abreviado como UNAM) es una universidad pública mexicana'},
    ];
  
   console.log(posts);
  
        
   

//selector del tema
if(window.location.href.indexOf('index') > -1){
var theme = $("#theme");

$("#to-green").click(function(){
theme.attr("href","css/green.css");
});

$("#to-red").click(function(){
  theme.attr("href","css/red.css");
  });
  $("#to-blue").click(function(){
    theme.attr("href","css/blue.css");
    });
  }
      


    //acordeon
    if(window.location.href.indexOf('contenido') > -1){
$("#acordeon").accordion();  
    }





    });





