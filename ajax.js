// by Herpang
//一个简单更新的ajax
//发送成功和失败的的回调函数需要自己写，
function ajax(options){
	//创建一个XHR对象
	function creatXHR(){
	if(window.XMLHttpRequest){
		return XMLHttpRequest();
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
		before = options.before || function(){} //请求发送之前的执行函数
	function setDate(data){ //很多时候发送的数据会涉及到中文或者某些标点符号，我们要进行一些编码
		//判断传入的数据是字符串还是object,然后进行相应的编码
		if(typeof data ==='string'){

		}else if(typeof data ==='object'){

		}
		if(type ==='get' || dataType==='jsonp'){

		}
		
	}
	var xhr = creatXHR();
	//这个函数是监听xhr对象的状态的函数
	xhr.onreadystatechange = function () {
		if(xhr.readyState === 4 && xhr.status === 200){ //这里其实应该判断的再准确点
			success(xhr.responseText);
		}else{
			error(xhr.readyState,xhr.status);
		}
	}
	xhr.open(type,url,async);
	xhr.send(data);
}
