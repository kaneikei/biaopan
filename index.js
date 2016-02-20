var canvas=document.querySelector("#canvas");
var ctx=canvas.getContext("2d");

// var x;
// var i=1;
// setInterval(function()
// {
// 	x=Math.PI/30 * i;
// 	drawclock();
// 	i++;
// },1000)
var drawclock=function()
{	
	var d=new Date();
	var sec=d.getSeconds();
	var hour=d.getHours();
	var minutes=d.getMinutes();
	ctx.clearRect(0,0,500,500);
	//保存一个干净的画布状态
	ctx.save();

	ctx.translate(250,250);//移动画布原点到中心

	ctx.save();//画最外层的表盘

	ctx.strokeStyle="#2af";
	ctx.lineWidth=8;
	ctx.beginPath();
	ctx.arc(0,0,200,0,Math.PI*2);
	ctx.stroke();

	ctx.restore();

	ctx.save();//用循环画刻度

	ctx.lineWidth=4;
	ctx.lineCap="round";
	for (var i = 1; i < 61 ; i++)
	{
		ctx.rotate(Math.PI/30);
		ctx.beginPath();
		if(i%5==0)
		{	ctx.lineWidth=6;
			ctx.moveTo(155,0)
		}
		else
		{	ctx.lineWidth=4;
			ctx.moveTo(173,0)
		}
		ctx.lineTo(184,0);
		ctx.stroke();
	}

	ctx.restore();

	ctx.save();//时针

	ctx.rotate(Math.PI*2*(hour*3600+minutes*60+sec)/(12*3600));
	ctx.strokeStyle="black";
	ctx.lineWidth=10;
	ctx.lineCap="round";
	ctx.beginPath();
	ctx.moveTo(0,15);
	ctx.lineTo(0,-90);
	ctx.stroke();

	ctx.restore();

	ctx.save();//分针

	ctx.rotate(Math.PI*2*(minutes*60+sec)/3600);
	ctx.strokeStyle="green";
	ctx.lineWidth=7;
	ctx.lineCap="round";
	ctx.beginPath();
	ctx.moveTo(0,15);
	ctx.lineTo(0,-140);
	ctx.stroke();

	ctx.restore();

	ctx.save();//秒针

	ctx.rotate(Math.PI/30*sec);console.log(Math.PI/30*sec)
	ctx.strokeStyle="red";
	ctx.lineWidth=3;
	ctx.lineCap="round";
	ctx.beginPath();
	ctx.moveTo(0,25);
	ctx.lineTo(0,-115);
	ctx.moveTo(10,-125);
	ctx.arc(0,-125,10,0,Math.PI*2);
	ctx.moveTo(0,-135);
	ctx.lineTo(0,-145);
	ctx.stroke();

	ctx.restore();

	ctx.save();//小圆

	ctx.beginPath();
	ctx.fillStyle="orange";
	ctx.arc(0,0,8,0,Math.PI*2);
	ctx.fill();

	ctx.restore();
	
	ctx.restore();//复原一开始干净的状态

	requestAnimationFrame(drawclock);
}
requestAnimationFrame(drawclock)


// var aa=function()
// {
// 	console.log(1);
// 	requestAnimationFrame(aa);
// }
// requestAnimationFrame(aa);//请求一个动画帧  这种动画方式 当当前窗口属于未激活状态时  动画帧数会明显降低


// document.onclick=function()
// {
// 	location.href=(canvas.toDataURL().replace("data:image/png","data:strem/octet"));//创建png图片 有兼容问题
// }

/*var link = document.createElement('a');
link.innerHTML = 'download image';

link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
}, false);

document.body.appendChild(link);*/