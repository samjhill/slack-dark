document.addEventListener('DOMContentLoaded', function() {
 $.ajax({
   url: 'https://cdn.rawgit.com/laCour/slack-night-mode/master/css/raw/black.css',
   success: function(css) {
     $("<style></style>").appendTo('head').html(css);
     $("<style></style>").appendTo('head').html('#reply_container.upload_in_threads .inline_message_input_container {background: padding-box #545454}');
     $("<style></style>").appendTo('head').html('.p-channel_sidebar {background: #363636 !important}');
   }
 });
});
