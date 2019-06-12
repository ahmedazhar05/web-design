$(document).ready(function() {

  //social tabs function
  $('ul#icons li').mouseover(function() {
    $(this).width(175 + 'px');
    var imgclass = $(this).attr('class');
    var changeimg = 'https://srv-file1.gofile.io/download/UykhsP/' + imgclass;
    var wd;
    if (imgclass === 'fb') {
      wd = 138;
    }
    if (imgclass === 'tw') {
      wd = 114;
    }
    if (imgclass === 'gp') {
      wd = 100;
    }
    if (imgclass === 'yt') {
      wd = 90;
    }
    $('.' + imgclass + ' img').attr('src', changeimg + '-text.png').height(28 + 'px').width(wd + 'px');
  });
  $('ul#icons li').mouseout(function() {
    $(this).width(50 + 'px');
    var imgclass = $(this).attr('class');
    var changeimg = 'https://srv-file1.gofile.io/download/UykhsP/' + imgclass;
    if (imgclass === 'yt') {
      wd = 44;
    } else {
      wd = 30;
    }
    $('.' + imgclass + ' img').attr('src', changeimg + '-icon.png').height(30 + 'px').width(wd + 'px');
  });


  //this function is used to 'activate' the clicked-page-tabs and disable 'activate' from the rest of the page-tabs
  $('#nav li').on('click', function() {
    $(this).addClass('activetab').siblings().removeClass()
  });


  //this function is used to change the body content
  var rels;
  $('#nav li').on('click', function() {
    rels = $(this).attr('rel');
    if (rels != 'github') {
      rels = 'https://jsbin.com/' + rels;
      $('iframe').removeAttr("srcdoc");
    } else {
      rels = 'https://github.com/ahmedazhar05';
      $('iframe').attr("srcdoc", "<h1>Checkout my GitHub</h1>link : <a target='_blank' href='https://github.com/ahmedazhar05'>https://github.com/ahmedazhar05</a>");
    }
    $('iframe').attr('src', rels);
  });





  //(****!!! WHEN WINDOWS IS SUDDENLY MAXIMISED THEN THERE IS A PROBLEM !!!****)





  //rels = 'home'; //as default
  //var content = $('body#'+rels+'_body');
  //var contentheight;

  var windowheight = window.innerHeight;
  $(window).on('resize', function() { //onresize
    windowheight = window.innerHeight;
    //contentheight = $(content).height();	//1582+'px';
    var x = 230;
    if (window.innerWidth <= 650) {
      x = 386;
    };
    $('iframe').css('height', windowheight - x + 'px');
  });

  $(window).on('load', function() { //onload
    windowheight = window.innerHeight;
    //contentheight = $(content).height();	//1582+'px';
    var x = 230;
    if (window.innerWidth <= 650) {
      x = 386;
    };
    $('iframe').css('height', windowheight - x + 'px');
  });



  //this function is used to configure the width of the objects/elements according to the 1st screen size
  var width = window.innerWidth;

  //on window load, adjust the width immediately to the newly resized screen.
  $(window).on('load', function() { //onload
    width = window.innerWidth;

    if (width < 1000) {
      if (width > 650) {
        $('#nav li').width((width / 4 - 2) + 'px'); //width of the page-tabs
        $('#main').width(width - 62 + 'px');
        $('ul').height('52px');
        //$('#center').width(width+'px');//main centered body		//$('#header').width(width+'px');
      };
      if (width <= 650) //to adjust the width of the page-tabs when screen size is less than equal to 650px
      {
        //$('#nav li').remove('style', 'float');...........(not-needed !!!)
        $('#nav li').width((width - 2) + 'px');
        $('ul').height('208px');
        $('body').remove('style', 'background');
        $('#main').width(width - 62 + 'px');
        //$('#center').width(width+'px');//main centered body
        //$('#header').width(width+'px');
      };
    };
    if (width >= 1000) {
      $('#center').width('1000px'); //main centered body
    }
  });

  //on window resize, adjust the width immediately to the newly resized screen.
  $(window).on('resize', function() { //onresize
    width = window.innerWidth;

    if (width < 1000) {
      if (width > 650) {
        $('#header').width(width - (50 * 2) + 'px');
        $('#nav li').width((width / 4 - 2) + 'px'); //width of the page-tabs
        $('#main').width(width - 62 + 'px');
        $('#center').width(width + 'px'); //main centered body
        $('ul').height('52px');
      };
      if (width <= 650) //to adjust the width of the page-tabs when screen size is less than equal to 650px
      {
        //$('#nav li').remove('style', 'float');...........(not-needed !!!)
        $('#nav li').width((width - 2) + 'px');
        $('ul').height('208px');
        $('body').remove('style', 'background');
        $('#main').width(width - 62 + 'px');
        $('#center').width(width + 'px'); //main centered body
        $('#header').width(width - (50 * 2) + 'px');
      };
    };
    if (width >= 1000) {
      $('#center').width('1000px'); //main centered body
    }
  });

  //this function is used to change the background of the page
  var i = 0;
  $('button.changebg').on('click', function() {
    $('body').css('background-image', "url('https://srv-file1.gofile.io/download/UykhsP/background" + (i + 1) + ".jpg')");
    i++;
    if (i >= 4) {
      i = 0;
    }
  });
});
