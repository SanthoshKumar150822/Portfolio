<script type="text/javascript">
  $(window).scroll(function(){
  var scroll = $(window).scrollTop(),
  dh = $(document).height(),
  wh = $(window).height();
  scrollPerceent = (scroll/(dh-wh))*100;
  $('#progressbar').css('height', scrollPercent + %);
  })
</script>