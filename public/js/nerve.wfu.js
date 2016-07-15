/**
 * Created by zengxm on 2016/7/14.
 */
var N=(function() {
    return {
        /**
         * 用于接收 服务器返回的Result对象
         * @param url   请求地址
         * @param data  请求数据
         * @param callBack  回调函数
         * @param method    get 或者 post ，默认是post
         */
        ajaxResult:function(url, data, callBack, method){
            method = method||"post";
            $.ajax({
                url: url,
                type: method,
                data: data,
                dataType: 'json',
                beforeSend:function(){
                },
                success: function (d) {
                    if (d.error===false|| d.success===true) {
                        if(callBack) callBack(d);
                    }  else {
                        N.error(d.message);
                    }
                }
            });
        },
        /**
         * 加载数据
         * @param url
         * @param data
         * @param callBack
         */
        loadData:function(url,data,callBack,method){
            method = method || 'get';
            $.ajax({
                url: url,
                type: method,
                data: data,
                beforeSend:function(){
                },
                success: function (d) {
                    if(callBack) callBack(d);
                }
            });
        }
    }
})();