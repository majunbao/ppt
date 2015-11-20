var toPage = 1,      // 要去的页码,从1开始
    animationing = false,
    odom,
    maxPage = 3  //最大页码

function init(){
  $('.ppt').css({'width':$('.ppt .ppt-item').length+'00%'})
  $('.ppt .ppt-item').css('width',1/$('.ppt .ppt-item').length*100+'%')
  $('body').css({'overflow-x':'hidden'})
}

function next(){
  toPage++;
  if( toPage > maxPage){
    toPage = maxPage;
  }else{
    _animationPage(toPage)
  }
}
function prev(){
  toPage--;
  if(toPage > 0){
    _animationPage(toPage)
  }else{
    toPage = 1;
    
  }
}
function go(page){
  if(page > maxPage){
    _animationPage(maxPage)
  }else if(page < 1){
    _animationPage(1)
  }else{
    _animationPage(page)
  }
  toPage = page;
  animationing = false
}
function _animationPage(page){
  if(page>0){
    $('.ppt').animate({
      'margin-left': -(page-1)+('00%')
    })
    animationing = true;
  }
  
}
