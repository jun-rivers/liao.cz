
window.onload = function() {

  var ROWS = 100,
      COLS = 100,
      NUM_PARTICLES = ( ROWS * COLS ),
      THICKNESS = Math.pow( 200, 2 ),
      SPACING = 3,
      RADIUS = 150,
      MARGIN = 300,
      OFFSET = 100,
      COLOR = 255,
      DRAG = 0.5,
      EASE = 0.1,
      
      /*
      
      used for sine approximation, but Math.sin in Chrome is still fast enough :)http://jsperf.com/math-sin-vs-sine-approximation

      B = 4 / Math.PI,
      C = -4 / Math.pow( Math.PI, 2 ),
      P = 0.225,

      */

      bounds,
      container,
      particle,
      pmatrix,
      canvas,
      link_life,
      link_work,
      link,
      // mouse,
      ctx,
      tog,
      man,
      dx, dy,
      mx, my,
      d, f, t,
      a, b,
      i, n,
      w, h,
      p, s,
      r, c
      ;

  particle = {
    vx: 0,
    vy: 0,
    x: 0,
    y: 0
  };

  window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  function init() {
    if ( window.mobilecheck() ) {
      // alert('this is mobile.');
      // EASE = EASE * 5;
      document.getElementsByTagName("html").className += " mobile";
      NUM_PARTICLES /= 8;
      // OFFSET /= 2;
    } else {
      // alert('this is not mobile.');
    }

    container = document.getElementById( 'container' );
    canvas = document.createElement( 'canvas' );
    
    ctx = canvas.getContext( '2d' );
    man = false;
    tog = true;
    
    pmatrix = [];
    
    w = canvas.width = window.innerWidth; //RADIUS + MARGIN * 2;
    h = canvas.height = window.innerHeight; //RADIUS + MARGIN * 2;

    if ( window.innerWidth < window.innerHeight ) {
      RADIUS = window.innerWidth/3;
    } else {
      RADIUS = window.innerHeight/3;
    }
    
    container.style.marginLeft = Math.round( w * -0.5 ) + 'px';
    container.style.marginTop = Math.round( h * -0.5 ) + 'px';

    link_work = document.getElementById( 'work' );
    link_life = document.getElementById( 'life' );
    
    for ( i = 0; i < NUM_PARTICLES; i++ ) {
      
      p = Object.create( particle );
      p.x = p.ox = w/2 + RADIUS*Math.cos(2*Math.PI*i/NUM_PARTICLES);//MARGIN + SPACING * ( i % COLS );
      p.y = p.oy = h/2 + RADIUS*Math.sin(2*Math.PI*i/NUM_PARTICLES);//MARGIN + SPACING * Math.floor( i / COLS );
      
      pmatrix[i] = p;
    }

    var movements = function(e) {
      e.preventDefault();
      bounds = container.getBoundingClientRect();
      if (e.clientX) {
        mx = e.clientX - bounds.left;
        my = e.clientY - bounds.top;
      } else if (e.changedTouches[0].clientX) {
        mx = e.changedTouches[0].clientX - bounds.left;
        my = e.changedTouches[0].clientY - bounds.top;
      }

      // man = true;
      if ( Math.pow((mx - w/2),2) + Math.pow((my - h/2),2) < Math.pow((RADIUS+OFFSET), 2)) {
        if (link_work != document.activeElement) {
          link_work.focus();
          link = link_work;
          console.log(bounds.left);
          console.log(bounds.top);
        }
      } else {
        if (link_life != document.activeElement) {
          link_life.focus();
          link = link_life;
          // link_life.parentNode.style.left = (mx+bounds.left)+'px';
          // link_life.parentNode.style.top = (my+bounds.top)+'px';
        }
      }
    };

    var noinput = function() {
      mx = my = 0;
    };

    container.addEventListener( 'mousemove', movements );
    container.addEventListener( 'touchmove', movements );
    container.addEventListener( 'touchend', noinput );

    container.appendChild( canvas );
  }

  function step() {

    if ( tog = !tog ) {

      // if ( !man ) {

      //   t = +new Date() * 0.001;
      //   mx = w * 0.5 + ( Math.cos( t * 2.1 ) * Math.cos( t * 0.9 ) * w * 0.45 );
      //   my = h * 0.5 + ( Math.sin( t * 3.2 ) * Math.tan( Math.sin( t * 0.8 ) ) * h * 0.45 );
      // }
        
      for ( i = 0; i < NUM_PARTICLES; i++ ) {
        
        p = pmatrix[i];
        
        d = ( dx = mx - p.x ) * dx + ( dy = my - p.y ) * dy;
        f = THICKNESS / d;

        if ( d < THICKNESS ) {
          t = Math.atan2( dy, dx );
          p.vx -= f * Math.cos(t);
          p.vy -= f * Math.sin(t);
        }

        p.x += ( p.vx *= DRAG ) + (p.ox - p.x) * EASE;
        p.y += ( p.vy *= DRAG ) + (p.oy - p.y) * EASE;

      }

    } else {

      b = ( a = ctx.createImageData( w, h ) ).data;

      for ( i = 0; i < NUM_PARTICLES; i++ ) {

        p = pmatrix[i];
        b[n = ( ~~p.x + ( ~~p.y * w ) ) * 4] = b[n+1] = b[n+2] = COLOR, b[n+3] = 255;
      }

      ctx.putImageData( a, 0, 0 );
    }

    requestAnimationFrame( step );
  }

  init();
  step();

  // click links, can do transition here if I want.
  document.body.onclick=function() {
    if (link) {

      container.style.opacity = 0;
      link.click();
    }
  };

  // no scroll
  document.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, false);
};