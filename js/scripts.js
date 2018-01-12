$(document).ready(function() {
  $("form#add").submit(function(event) {
    var end = $("select#end").val();
    var path = $("select#path").val();

    if (end === 'front' && path === 'webd') {
      $('#css').show();
    }
    if (end === 'front' && path === 'mobile') {
      $('#css').show();
    }
    if (end === 'back' && path === 'webd') {
      $('#csharp').show();
    }
    if (end === 'back' && path === 'mobile') {
      $('#java').show();
    }
  event.preventDefault();
});
});
