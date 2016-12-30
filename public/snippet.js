window.onload=function(){
  document.body.addEventListener('click', function() {
    $(".gallery").show();
    $(".footnote").show();
    $("#img0").fadeOut(3000);
  }, true);

  $('img').each(function(){
    $(this).attr('src', $(this).attr('delayedsrc'));
  });
}
