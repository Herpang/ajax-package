// by Herpang
//一个简单更新的ajax
//发送成功和失败的的回调函数需要自己写，
(function(window,undefined){
	function ajax(options){
		//创建一个XHR对象
		function creatXHR(){
		if(window.XMLHttpRequest){
			return XMLHttpRequest();
			}
		}
		function setData(){ //暂时只支持object的json化,后面会支持更多
			if(data){
				if(Object.prototype.toString.call(data) ==='[object Object]'){
					data = JSON.stringify(data);
				}
			}
		}
		//下面是处理下传入的参数
		var url = options.url || "", //请求的地址
			type = (options.type || "get").toLowerCase(),  //统一转换成小写，默认为get请求
			data = options.data || null, //默认为null
			contentType = options.contentType || "json", //请求内容的格式，默认为json格式
			dataType = options.dataType || "",//请求的类型，目前只支持jsonp类型
			async = options.async || "true",  //请求是同步还是异步，默认为异步
			timeOut = options.timeOut, //设置超时时间
			success = options.success || function(){}, //请求成功时的执行函数
			error = options.error || function(){}, //请求失败时的执行函数
			before = options.before || function(){}, //请求发送之前的执行函数
		    xhr = creatXHR();
		//这个函数是监听xhr对象的状态的函数
		xhr.onreadystatechange = function () {
			if(xhr.readyState === 4){ //这里其实应该判断的再准确点
				if(xhr.status === 200){
					success(xhr.responseText);
				}else{
					error(xhr.readyState,xhr.status);
				}
			}
		}
		xhr.open(type,url,async);
		if (type === "post" && !contentType) {
	              //若是post提交，则设置content-Type 为application/x-www-four-urlencoded
	              xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
	        } else if (contentType) {
	              xhr.setRequestHeader("Content-Type", contentType);
	    }
	    setData();
		xhr.send(type === "get" ? null : data); //判断要不要传入数据
}
})(window);



