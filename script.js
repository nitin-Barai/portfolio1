(function($){
  var typed =  new Typed ('span.txt-rotate',{
      strings: ["I'm a GIS Developer and  GIS Data Analyst", " I'm a Cyber Forensic Specialist"],
      typeSpeed: 80,
      backSpeed: 100,
      fade(function($){
  var typed =  new Typed ('span.txt-rotate',{
      strings: ["I'm a GIS Developer and  GIS Data Analyst", " I'm a Cyber Forensic Specialist"],
      typeSpeed: 80,
      backSpeed: 100,
      fadeout: false,
      smartBackspace: true,
      loop: true,
  })
})(jQuery);

$(document).ready(function(){
  $('.projects-wrapper').isotope({
    filter:'*',
    layoutMode: 'masonry'
  });
  $('.list-filter a').click(function(){
    var selector = $(this).attr('data-filter');
    $('.list-filter a').removeclass('active');
    $(this).addclass('active');
    $('.projects-wrapper').isotope({
      filter: selector
    });
    return false;

  });
  $('.popup-image').magnificPopup({
    type:'image',
    closeOnContentClick: true,
    gallary: {
      enabled:true,
      navigateByImgClick:true
    }
    
  });
  
});out: false,
      smartBackspace: true,
      loop: true,
  })
})(jQuery);

$(document).ready(function(){
  $('.projects-wrapper').isotope({
    filter:'*',
    layoutMode: 'masonry'
  });
  $('.list-filter a').click(function(){
    var selector = $(this).attr('data-filter');
    $('.list-filter a').removeclass('active');
    $(this).addclass('active');
    $('.projects-wrapper').isotope({
      filter: selector
    });
    return false;

  });
  $('.popup-image').magnificPopup({
    type:'image',
    closeOnContentClick: true,
    gallary: {
      enabled:true,
      navigateByImgClick:true
    }
    
  });
  
});
