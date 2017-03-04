function plusBtn($param) {
   $param.each(function(index) {
    var a = $(this);
    var b = a.find(".amenities__category-container").innerHeight();
    if(b > 80){
        a.find(".amenities__category-btn").css('display','inline-block');
    }
    else{
      a.find(".amenities__category-btn").css('display','none');
    }
  });
}

function resultMargin($param) {
  console.log(123);
  var h = $param.innerHeight() + 113;
    $('.result').css('margin-top', h);
}

$( document ).ready(function() {
   plusBtn($('.amenities__category')); 
});

$( window ).resize(function() {
  plusBtn($('.amenities__category')); 
});

$('#map').on('click', function(){
    if($('#map').is('.tabs__item--active')){
      return false;
    }
    else{
      $('#map').addClass('tabs__item--active');
      $('#accommodations').removeClass('tabs__item--active');
      $('#results-list').removeClass('result__container--active');
      $('#results-map').addClass('map--active');
      return false;
    }
    return false;
 });

$('#accommodations').on('click', function(){
    if($('#accommodations').is('.tabs__item--active')){
      return false;
    }
    else{
      $('#accommodations').addClass('tabs__item--active');
      $('#map').removeClass('tabs__item--active');
      $('#results-list').addClass('result__container--active');
      $('#results-map').removeClass('map--active');
      return false;
    }
    return false;
 });

$('.amenities__category-btn').on('click', function(){
    var category = $(this).parents(".amenities__category");
    var content = $(this).parent(".amenities__category-title").next(".amenities__category-container");
    if(category.is(".amenities__category--open")){
      $(this).removeClass("amenities__category-btn--open");
      category.css('height','150px').removeClass('amenities__category--open');
    }
    else{
      var height = content.innerHeight() + 75;
      $(this).addClass("amenities__category-btn--open");
      category.addClass('amenities__category--open').css('height', height);
    }
    return false;
 });


$('.amenities__item input').change(function() {
      var id = $(this).attr('id');
       var text = $(this).next("label").text();
    if($(this).is(":checked")) {
       $(".tabs__amenities-container").append('<div class="tag" data="' + id  + '">' + text  + '<span class="tag__close"></span></div>');
    }
    else{
      $('.tabs__amenities-container .tag[data = ' + id +']').remove();
    }
    resultMargin($('.tabs__amenities-container')); 
});


$('.tabs__amenities-container').on('click', '.tag__close', function(){
    console.log(123);
    var id = $(this).parent().attr('data');
    $('.amenities__item input[id = ' + id +']').prop('checked',false);
    $(this).parent().remove();
    resultMargin($('.tabs__amenities-container')); 
 });


