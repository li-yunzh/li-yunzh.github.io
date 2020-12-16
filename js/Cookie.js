
//001.cookie相关函数
function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}  
function delAllCookie(){    
    var myDate=new Date();    
    myDate.setTime(-1000);//设置时间    
    var data=document.cookie;    
    var dataArray=data.split("; ");    
    for(var i=0;i<dataArray.length;i++){    
         var varName=dataArray[i].split("=");    
         document.cookie=varName[0]+"=''; expires="+myDate.toGMTString();    
    }                      
}

//002.ajax函数
function Ajax(type, url, data, success, failed){
     // 创建ajax对象
     var xhr = null;
     if(window.XMLHttpRequest){
         xhr = new XMLHttpRequest();
     } else {
         xhr = new ActiveXObject('Microsoft.XMLHTTP')
     }
  
     var type = type.toUpperCase();
     // 用于清除缓存
     var random = Math.random();
  
     if(typeof data == 'object'){
         var str = '';
         for(var key in data){
             str += key+'='+data[key]+'&';
         }
         data = str.replace(/&$/, '');
     }
  
     if(type == 'GET'){
         if(data){
             xhr.open('GET', url + '?' + data, true);
         } else {
             xhr.open('GET', url + '?t=' + random, true);
         }
         xhr.send();
  
     } else if(type == 'POST'){
         xhr.open('POST', url, true);
         // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
         xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
         xhr.send(data);
     }
  
     // 处理返回数据
     xhr.onreadystatechange = function(){
         if(xhr.readyState == 4){
             if(xhr.status == 200){
                 success(xhr.responseText);
             } else {
                 if(failed){
                     failed(xhr.status);
                 }
             }
         }
     }
 }
 // // 测试调用
 // var sendData = {name:'asher',sex:'male'};
 // Ajax('get', 'data/data.html', sendData, function(data){
 //     console.log(data);
 // }, function(error){
 //     console.log(error);
 // });

 //003.杂函数cound
 function count(o){
    var t = typeof o;
    if(t == 'string'){
    return o.length;
    }else if(t == 'object'){
    var n = 0;
    for(var i in o){
    n++;
    }
    return n;
    }
    return false;
}


