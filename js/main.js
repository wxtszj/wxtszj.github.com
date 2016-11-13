
function rnd(n,m){
    return Math.floor(Math.random()*(m-n)+n)
}

    var oHead = document.getElementById('head');
    var oAva = document.getElementById('ava');
    var aBody = document.getElementById('body');
    var oWorld = document.querySelector('.world');
    var oResume = document.querySelector('.resume');
    var aNext = document.querySelector('.Next');
    var aBox = document.querySelector('.box');
    var oAvat = document.querySelector('.avat');
    var oPson = document.getElementById('opuss');

    var oBox = document.querySelector('#box');
    var oBack = document.querySelector('.back');

    var oBasic =document.getElementById('basic');
    var oSikll =document.getElementById('skill');

var oXdm = document.querySelector('.xdm');
    var docY = document.documentElement.clientHeight;
    var docW = document.documentElement.clientWidth;
$('#wxt').css({top:docY+20,backgroundSize:100+'%'});
$('.wxtt').css({backgroundSize:100+'%'})
$('.opus_son').css({backgroundSize:105+'%',width:docW});
    oPson.offsetWidth=docW+'px';
    oPson.offsetHeight=docY-150+'px';
    oHead.style.background = 'rgba(224, 228, 165, 0.3)';

    aBody.style.height = docY + 'px';
    oResume.style.opacity = 1;

    oAva.style.opacity = 1;
var oSp = document.querySelectorAll('.sp');

$('.btn').each(function(i){

    $(this).click(function(){
        $('.res li').each(function(i){
           $(this).css({display:'none',width:0});

        })
        $('.res').each(function(i){
            $(this).css({display:'block'});
        })
       $('.res').eq(0).click(function(){
           $('world').css({color:'rgba(70, 120, 53, 0.56)'})
       })
        $('.res:eq('+0+') li').css({background:'rgba(70, 120, 53, 0.56)'})
        $('.res:eq('+1+') li').css({background:'rgba(19, 120, 30, 0.51)'})
        $('.res:eq('+2+') li').css({background:'rgba(45, 144, 21, 0.56)'})
        $('.res:eq('+i+') li').css({display:'block'});
        $('.res:eq('+i+') li').each(function(i){
            $(this).animate({width:240+(i*20),paddingLeft:20},300,'linear');
        })

    })
})


    aNext.onclick = function (ev) {
       $('#wxt').animate({top:0},500,'linear',function(){
            oAva.style.borderRadius = 30 + '%';
            oAva.style.WebkitBoxShadow = '0 0 6px 2px #fff';
            oAvat.style.borderRadius = 30 + '%';
            aBody.background='none';

        });
        $('.res').css({display:'none'});
        $('.res1').css({display:'none'});
        oWorld.style.color = '#fff';

        $('.back').css({opacity:1});
        var docY = document.documentElement.clientHeight;
        var docW = document.documentElement.clientWidth;
        ev.cancelBubble = true;
    };

(function(obj){
    var oBox=document.getElementById(obj);
    var oPrev=oBox.children[0];
    var oNext=oBox.children[1];
    var oUl=oBox.children[2];
    var oOl=oBox.children[3];
    var aLi=oUl.children;
    var aBtn=oOl.children;
    var n = 0;
    var timer =null;
    oUl.innerHTML+=oUl.innerHTML;
    oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
    for(var i=0;i<aLi.length;i++){
        aLi[i].style.background='rgba('+rnd(40,90)+','+rnd(90,255)+',255,0.6)';
        aLi[5].style.background='rgba(124, 122, 255, 0.66)';
        aLi[0].style.background='rgba(124, 122, 255, 0.66)';
    }
    oBox.onmouseover=function(){
        oPrev.style.display='block';
        oNext.style.display='block';
    };
    oBox.onmouseout=function(){
        oPrev.style.display='none';
        oNext.style.display='none';
    };

    for(var i =0; i<aBtn.length;i++){
        (function(index){
            aBtn[i].onclick=function(){

                //Math.floor(n/aBtn.length)
                //跑了几轮
                //Math.floor(n/aBtn.length)*aBtn.length+index  当前的位置
                if((n%5==4 || n%5==-1)&&index==0){
                    n++;
                }
                if(n%5==0&&index==aBtn.length-1){
                    n--;
                }
                n=Math.floor(n/aBtn.length)*aBtn.length+index;
                tab();
            };
        })(i);
    }
    function tab(){
        for(var i=0;i<aBtn.length;i++){
            aBtn[i].className=''
        }
        aBtn[(n%5+5)%5].className='active';
//                oUl.style.left=-n*aLi[0].offsetWidth+'px';
        startmove(oUl,-n*aLi[0].offsetWidth);

    }
    oPrev.onclick=function(){
        n--;
        tab();
    };
    oNext.onclick=function(){
        n++;
        tab();

    };
    var left = 0;
    var w = oUl.offsetWidth/2;
    function startmove(obj,target){
        clearInterval(timer);
        var start = left;
        var dis = target-start;
        var count = Math.floor(500/30);
        var i = 0;
        timer=setInterval(function(){
            i++;
            var a = i/count;
            var cur = start+dis*a*a*a;
            left=cur;
            obj.style.left=(left%w-w)%w+'px';
            if(i==count){
                clearInterval(timer)
            }
        },30)
    }
})('box');


oBack.onclick=function(){
    $('#wxt').animate({top:docY+20},500,'linear');
        $('.back').css({opacity:0});

        aBody.style.background = '#787878';
        oAva.style.borderRadius = 50 + '%';
        oAvat.style.borderRadius = 50 + '%';
        oAva.style.WebkitBoxShadow = '0 0 6px 2px #2f2f2f';

};

$('.poster').each(function(i){
    $(this).click(function(){
        $('.poster').each(function(i){
            $(this).css({display:'none'});
        });
        $('.poster h3').each(function(i){
            $(this).css({display:'none'});
        })

        $(this).css({display:'block'});
        $(this).animate({width:docW,height:docY-150,margin:0},300,'linear');
        $(this).children('div').css({opacity:1})
        $(this).children('.sp').css({display:'block'});

    })
})
for(var i=0;i<oSp.length;i++){
    oSp[i].index=i;
    oSp[i].onclick=function(ev){
        $(oSp[this.index].parentNode).animate({width:300,height:250,marginLeft:246,marginTop:70},300,'linear',function(){
            $('#box').css({opacity:0});
            $('.xdm').css({opacity:0});
            $('.poster').each(function(i){
                $(this).css({display:'block'});
            })
            $('.sp').css({display:'none'});
        });
        $('.poster h3').each(function(i){
            $(this).css({display:'block'});
        })

        ev.cancelBubble = true;
    }
}

//$('.poster h3').each(function(i){
//    $(this).css({backgroundImage:"url('img/o"+i+".png')"});
//})
var bOk =false;
document.onmousewheel=function(ev){
if(bOk)return;
    bOk=true;

    if(ev.wheelDelta==(-120)){

        $('#wxt').animate({top:0},500,'linear',function(){

            oAva.style.borderRadius = 30 + '%';
            oAva.style.WebkitBoxShadow = '0 0 6px 2px #fff';
            oAvat.style.borderRadius = 30 + '%';

        });
        $('.res').css({display:'none'});
        $('.res1').css({display:'none'});
        oWorld.style.color = '#fff';

        $('.back').css({opacity:1});
    }else if(ev.wheelDelta==120){
        $('#wxt').animate({top:docY+20},500,'linear',function(){

            $('.back').css({opacity:0});

        });

        oAva.style.borderRadius = 50 + '%';
        oAvat.style.borderRadius = 50 + '%';
        oAva.style.WebkitBoxShadow = '0 0 6px 2px #2f2f2f';

    }
    setTimeout(function(){
        bOk=false;
    },800)

}
var y=0;
var x=0;
oXdm.onmousedown = function(ev){
    var disX = ev.pageX-y;
    var disY = ev.pageY-x;
    document.onmousemove = function(ev){x = ev.pageY-disY;
        y = ev.pageX-disX;

        oXdm.style.WebkitTransform = 'perspective(800px) rotateY('+y/5+'deg) rotateX('+-(x/5)+'deg)';
    };
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
    };
    return false;
};

(function(){
    var oTz = document.getElementById('tz');
    var iSpeedX = 0;
    var iSpeedY = 0;
    var lastX = 0;
    var lastY = 0;
    var left = 0;
    var top = 0;

    oTz.onmousedown = function(ev){
        clearInterval(oTz.timer);
        var oEvent = ev||event;
        var disX = oEvent.clientX-oTz.offsetLeft;
        var disY = oEvent.clientY-oTz.offsetTop;
        document.onmousemove = function(ev){
            var oEvent = ev||event;
            left = oEvent.clientX-disX;
            top = oEvent.clientY-disY;
            if(left<0){
                left = 0;
            }else if(left>document.documentElement.clientWidth-oTz.offsetWidth){
                left = document.documentElement.clientWidth-oTz.offsetWidth;
            }
            if(top<0){
                top = 0;
            }else if(top>document.documentElement.clientHeight-oTz.offsetHeight+150){
                top = document.documentElement.clientHeight-oTz.offsetHeight+150;
            }
            oTz.style.left = left+'px';
            oTz.style.top = top+'px';


            iSpeedX = oEvent.clientX-lastX;
            iSpeedY = oEvent.clientY-lastY;
            lastX = oEvent.clientX;
            lastY = oEvent.clientY;

        };
        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;

            move(oTz);

            oTz.releaseCapture&&oTz.releaseCapture();
        };
        oTz.setCapture&&oTz.setCapture();
        return false;
    };

    function move(obj){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            iSpeedY+=3;

            left+=iSpeedX;
            top+=iSpeedY;

            if(top>document.documentElement.clientHeight-150-obj.offsetHeight){
                top=document.documentElement.clientHeight-150-obj.offsetHeight;
                iSpeedY*=-0.85;
                iSpeedX*=0.85;
            }
            if(top<0){
                top = 0;
                iSpeedY*=-0.85;
                iSpeedX*=0.85;
            }
            if(left>document.documentElement.clientWidth-obj.offsetWidth){
                left=document.documentElement.clientWidth-obj.offsetWidth;
                iSpeedX*=-0.85;
                iSpeedY*=0.85;
            }
            if(left<0){
                left = 0;
                iSpeedX*=-0.85;
                iSpeedY*=0.85;
            }

            if(Math.abs(iSpeedX)<1)iSpeedX=0;
            if(Math.abs(iSpeedY)<1)iSpeedY=0;

            obj.style.left = left+'px';
            obj.style.top = top+'px';
            console.log(left);
            if(iSpeedX==0&&iSpeedY==0&&Math.round(top)==document.documentElement.clientHeight-obj.offsetHeight){
                clearInterval(obj.timer);
            }
        },30);
    }

})()
;
    var oC = document.getElementById('c1');
    oC.width = document.documentElement.clientWidth;
    oC.height = document.documentElement.clientHeight-150;
    var gd = oC.getContext('2d');
    var N = 5;
    var aPoint = [];
    for(var i=0;i<N;i++){
        aPoint.push({
            x:rnd(0,oC.width),
            y:rnd(0,oC.height),
            iSpeedX:rnd(-10,10),
            iSpeedY:rnd(-10,10)
        });
    }

    var COUNT = 20;
    var aOldPoint = [];



    //运动、画点
    setInterval(function(){
        gd.clearRect(0,0,oC.width,oC.height);

        //运动
        for(var i=0;i<aPoint.length;i++){

            if(aPoint[i].x<0){
                aPoint[i].iSpeedX*=-1;
            }
            if(aPoint[i].y<0){
                aPoint[i].iSpeedY*=-1;
            }
            if(aPoint[i].x>oC.width){
                aPoint[i].iSpeedX*=-1;
            }
            if(aPoint[i].y>oC.height){
                aPoint[i].iSpeedY*=-1;
            }



            aPoint[i].x+=aPoint[i].iSpeedX;
            aPoint[i].y+=aPoint[i].iSpeedY;
        }


        //画点
        for(var i=0;i<aPoint.length;i++){
            drawPoint(aPoint[i]);
        }

        //连线
        gd.beginPath();
        gd.moveTo(aPoint[0].x,aPoint[0].y);
        for(var i=1;i<aPoint.length;i++){
            gd.lineTo(aPoint[i].x,aPoint[i].y);
        }
        gd.closePath();
        gd.strokeStyle = '#fff';
        gd.stroke();


        var arr = [];
        for(var i=0;i<aPoint.length;i++){
            arr.push({
                x:aPoint[i].x,
                y:aPoint[i].y,
                iSpeedX:aPoint[i].iSpeedX,
                iSpeedY:aPoint[i].iSpeedY
            });
        }
        aOldPoint.push(arr);
        if(aOldPoint.length>COUNT){
            aOldPoint.shift();
        }
        //画老点
        gd.beginPath();
        for(var i=0;i<aOldPoint.length;i++){
            gd.moveTo(aOldPoint[i][0].x,aOldPoint[i][0].y);
            for(var j=1;j<aOldPoint[i].length;j++){
                gd.lineTo(aOldPoint[i][j].x,aOldPoint[i][j].y);
            }
            gd.closePath();
            gd.strokeStyle = 'rgba(0,0,2,'+(i/aOldPoint.length/3)+')';
            gd.stroke();
        }
    },16);

    function drawPoint(oPoint){
        gd.beginPath();
        gd.fillStyle = '#ccc';
        gd.fillRect(oPoint.x,oPoint.y,1,1);
    }


