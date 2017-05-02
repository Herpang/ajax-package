//草稿
function ajax(options){
	//创建一个XHR对象
	function creatXHR(){
	if(window.XMLHttpRequest){
		return XMLHttpRequest();
		}
	}
	function setData(){//很多时候发送的数据会涉及到中文或者某些标点符号，我们要进行一些编码
		//判断传入的数据是字符串还是object,然后进行相应的编码
	//输入的格式为a=1&b=2&c=3
	var arr = [],
		vdata, //暂存字符串解析
		name, //暂存键值对
		value;
	if(data){ //如果用户有输入数据的话
		if(typeof data = 'string'){ //如果是字符串
			data = data.split('&'); //以&为标识，返回一个数组，
			for(let i=0;i<data.length;i++){
				vdata = data[i].split('=');
				name = vdata[0];
				value = vdata[1];
				data[i] = encodeURIComponent(name)+':'+encodeURIComponent(value); //进行编码
			} //下面这句是因为encodeURIComponent不给+进行编码，所以我们用正则表达式手动来。
			data = data.join("&").replace("/%2B/g", "+");
		}else if(Object.prototype.toString.call(data) == '[object Object]'){ //typeof判断不了object的具体类型
			for(let nam in data){
				value = data[nam].toString(); 
				name = encodeURIComponent(nam);
				value = encodeURIComponent(value);
				arr.push(name+':'+value);
				}
			data = arr.join('&').replace("/%2B/g", "+");  //这里其实没看懂，为什么要用&分隔开，
		}
		if(type ==='get' || dataType==='jsonp'){
			 url += url.indexOf("?") > -1 ? (url.indexOf("=") > -1 ? "&" + data : data) : "?" + data;
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
	if (type === "post" && !contentType) {
              //若是post提交，则设置content-Type 为application/x-www-four-urlencoded
              xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        } else if (contentType) {
              xhr.setRequestHeader("Content-Type", contentType);
    }
    setData();
	xhr.send(type === "get" ? null : data); //判断要不要传入数据
}





var url = 'type=sendCode&phoneNumber=17718152782&name=test&age=23',
    Url = url.split('&');
for(let i=0;i<Url.length;i++){
	var name = Url[i].split('=')[0];
	var value = Url[i].split('=')[1];
	Url[i] = encodeURIComponent(name) + ":" + encodeURIComponent(value);
}
