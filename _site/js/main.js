$(document).ready(function() {
  function filterPath(string) {
    return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  $('a[href*=#]').each(function() {
    if ( filterPath(location.pathname) == filterPath(this.pathname)
      && location.hostname == this.hostname
      && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
    var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
    if ($target) {
     var targetOffset = $target.offset().top;
     $(this).click(function() {
       $('html, body').animate({scrollTop: targetOffset}, 2000);
       return false;
     });
   }
 }
});

  var o = {
    init: function(){
      this.diagram();
    },
    random: function(l, u){
      return Math.floor((Math.random()*(u-l+1))+l);
    },
    diagram: function(){
      var r = Raphael('diagram', 600, 600),
      rad = 73,
      defaultText = 'Skills',
      speed = 250;

      r.circle(300, 300, 85).attr({ stroke: 'none', fill: '#193340' });

      var title = r.text(300, 300, defaultText).attr({
        font: '20px Arial',
        fill: '#fff'
      }).toFront();

      r.customAttributes.arc = function(value, color, rad){
        var v = 3.6*value,
        alpha = v == 360 ? 359.99 : v,
        random = o.random(91, 240),
        a = (random-alpha) * Math.PI/180,
        b = random * Math.PI/180,
        sx = 300 + rad * Math.cos(b),
        sy = 300 - rad * Math.sin(b),
        x = 300 + rad * Math.cos(a),
        y = 300 - rad * Math.sin(a),
        path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
        return { path: path, stroke: color }
      }

      $('.get').find('.arc').each(function(i){
        var t = $(this),
        color = t.find('.color').val(),
        value = t.find('.percent').val(),
        text = t.find('.text').text();

        rad += 30;
        var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 26 });

        z.mouseover(function(){
          this.animate({ 'stroke-width': 50, opacity: .75 }, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
                  this.toFront();
                title.stop().animate({ opacity: 0 }, speed, '>', function(){
                  this.attr({ text: text + '\n' + value + '%' }).animate({ opacity: 1 }, speed, '<');
                });
              }).mouseout(function(){
                this.stop().animate({ 'stroke-width': 26, opacity: 1 }, speed*4, 'elastic');
                title.stop().animate({ opacity: 0 }, speed, '>', function(){
                  title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
                });
              });
            });

}
};

$(function() {
  o.init();
});

});