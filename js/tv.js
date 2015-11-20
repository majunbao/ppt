$(function(){
  init();

  $('.ppt-nav > a').on('click',function(){
    if($(this).hasClass('prev')){
      prev()
    }else if($(this).hasClass('next')){
      next()
    }
  })

})