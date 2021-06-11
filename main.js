$(function(){
  $('.searchText').keyup(function(){
    const searchText = $(".searchText").val();
    $('#searchList li').each(function(){
      const targetText = $(this).text();
      if (targetText.indexOf(searchText) != -1) {
        $(this).removeClass("hidden");
      
      } else {
        $(this).addClass("hidden");
      }
    });
  });
});