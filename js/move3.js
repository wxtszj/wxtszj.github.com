/**
 * Created by Administrator on 2016/9/7.
 */


//运动加减速度框架。。。。。
function getStyle(obj,name){
    return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];
}
function move(obj,json,duration,easing,complete){
    clearInterval(obj.timer);
    //{width:300,height:300}

    //{width:0,height:0}
    var start={};
    //dis {width:300,height:300 }
    var dis={};
    for(var name in json){
        start[name] = parseFloat(getStyle(obj,name));
        dis[name] = json[name]-start[name];
    }
    //�ܴ���
    var count = Math.floor(duration/30);
    //��ǰ���˼���
    var n =0;
    obj.timer=setInterval(function(){
        n++;
        for(var name in json){
            switch (easing){
                case 'linear':
                    var a = n/count;
                    var cur = dis[name]*a;
                    break;
                case 'ease-in':
                    var a = n/count;
                    var cur = dis[name]*a*a*a;
                    break;
                case 'ease-out':
                    var a = 1-n/count;
                    var cur = dis[name]*(1-a*a*a);
                    break;
            }

            if(name=='opacity'){
                obj.style.opacity=start[name]+cur;
                obj.style.filter='alpha(opacity:'+(start[name]+cur)*100+')';
            }else{
                obj.style[name]=start[name]+cur+'px';
            }
        }
        if(n==count){
//                        alert('������');
            clearInterval(obj.timer);
            complete && complete();
        }
    },30);
}