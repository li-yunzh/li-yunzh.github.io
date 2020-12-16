function myDOMReady(fn){
    //判断如果支持addEc=ventListener（非IE--IE支持的是attachEvent）则绑定DOMContentLoaded事件
    if(document.addEventListener){
        document.addEventListener("DOMContentLoaded",fn,false);
    }else{
        IEContenLoaded(fn);
    }

    //IE下模拟DOMContentLoaded
    function IEContenLoaded(fn){
        var done = false;
        //只执行一次用户的回调函数init
        var init = function(){
            if(!done){
                done = true;
                fn();
            }
        }

        (function(){
            try{
                //DOM树未创建完之前调用doScroll会抛出错误
                window.document.documentElement.doScroll("left");
            }catch(error){
                //延迟再执行，arguments.callee调用自己
                setTimeout(argument.callee,1);
                return;
            }
            //没有错误表示DOM树创建完毕，执行用户回调
            init();
        })();
        
        //监听document的加载状态
        window.document.onreadystatechange = function(){
            //如果用户是在DOMReady之后调用的函数立即执行用户回调
            if(window.document.readyState == 'complete'){
                window.document.onreadystatechange=null;
                init();
            }
        }
    }
}

