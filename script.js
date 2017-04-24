$(document).ready(function() {

  function fadeListBack (el) {
    $(el).mouseout(function() {
      $(el).fadeTo("fast",1);
    })
  }

  function hoverList (el) {
    $(el).mouseenter(function (){
      $(el).fadeTo('fast',0.25);
    });
    fadeListBack(el);
  }

  hoverList($('#home'));
  hoverList($('#about'));
  hoverList($('#portfolio'));
  hoverList($('#resume'));


  function whenCLicked (el) {
    $(el).click(function () {
      $(el).css("background-color","red");
      $(el).text("Clicked!");
    })};

    whenCLicked($("#home"));
    whenCLicked($("#about"));
    whenCLicked($("#portfolio"));
    whenCLicked($("#resume"));





    // $("#about").click(function() {
    //   $("#about").css("background-color","red");
    //   $("#about").text("clicked");
    // });
    //



    // function hoverIn (el) {
    //   el.fadeTo('slow',1);
    // }
    //
    // function hoverOut (el) {
    //   console.log("hello");
    //   el.fadeTo('slow',0.25);
    // }
    //
    // $("#home").hover(hoverOut($("#home")));
    // $("#home").mouseout(hoverIn($("#home")));

  })
