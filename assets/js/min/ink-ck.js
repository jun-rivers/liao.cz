window.onload=function(){function e(){for(window.mobilecheck()&&(document.getElementsByTagName("html").className+=" mobile",i/=8),w=document.getElementById("container"),v=document.createElement("canvas"),k=v.getContext("2d"),M=!1,x=!0,u=[],H=v.width=window.innerWidth,W=v.height=window.innerHeight,m=window.innerWidth<window.innerHeight?window.innerWidth/3:window.innerHeight/3,w.style.marginLeft=Math.round(H*-.5)+"px",w.style.marginTop=Math.round(W*-.5)+"px",f=document.getElementById("work"),b=document.getElementById("life"),X=0;i>X;X++)A=Object.create(g),A.x=A.ox=H/2+m*Math.cos(2*Math.PI*X/i),A.y=A.oy=W/2+m*Math.sin(2*Math.PI*X/i),u[X]=A;var e=function(e){e.preventDefault(),h=w.getBoundingClientRect(),e.clientX?(I=e.clientX-h.left,j=e.clientY-h.top):e.changedTouches[0].clientX&&(I=e.changedTouches[0].clientX-h.left,j=e.changedTouches[0].clientY-h.top),Math.pow(I-H/2,2)+Math.pow(j-W/2,2)<Math.pow(m+r,2)?f!=document.activeElement&&(f.focus(),y=f,console.log(h.left),console.log(h.top)):b!=document.activeElement&&(b.focus(),y=b)},t=function(){I=j=0};w.addEventListener("mousemove",e),w.addEventListener("touchmove",e),w.addEventListener("touchend",t),w.appendChild(v)}function t(){if(x=!x)for(X=0;i>X;X++)A=u[X],q=(E=I-A.x)*E+(z=j-A.y)*z,B=a/q,a>q&&(L=Math.atan2(z,E),A.vx-=B*Math.cos(L),A.vy-=B*Math.sin(L)),A.x+=(A.vx*=s)+(A.ox-A.x)*p,A.y+=(A.vy*=s)+(A.oy-A.y)*p;else{for(D=(T=k.createImageData(H,W)).data,X=0;i>X;X++)A=u[X],D[C=4*(~~A.x+~~A.y*H)]=D[C+1]=D[C+2]=l,D[C+3]=255;k.putImageData(T,0,0)}requestAnimationFrame(t)}var o=100,n=100,i=o*n,a=Math.pow(200,2),c=3,m=150,d=300,r=100,l=255,s=.5,p=.1,h,w,g,u,v,b,f,y,k,x,M,E,z,I,j,q,B,L,T,D,X,C,H,W,A,N,P,Y;g={vx:0,vy:0,x:0,y:0},window.mobilecheck=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},e(),t(),document.body.onclick=function(){y&&(w.style.opacity=0,y.click())},document.addEventListener("touchmove",function(e){e.preventDefault()},!1)};