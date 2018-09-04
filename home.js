
//1.当网页缩放时，把根元素html标签的
//文字大小改变，当根文字大小变了，那么
//所有用了rem单位的 值，都会改变
 function rem(){
	var html = document.documentElement;
	var w = html.offsetWidth;
	if(w >=320 && w < 992){
		html.style.fontSize = 100/750*w + "px";
	}
}
rem();
window.onresize = rem;
