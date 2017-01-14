// JavaScript Document

     
/***********************************************
* Ultimate Fade-In Slideshow (v1.51): © Dynamic Drive (http://www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for this script and 100s more.
***********************************************/
 
var fadeimages=new Array()
//SET IMAGE PATHS. Extend or contract array as needed
fadeimages[0]=["assets/images/slideshow/home/doug-007_sm.jpg", "", ""] 
fadeimages[1]=["assets/images/slideshow/home/doug-010_sm.jpg", "", ""] 
fadeimages[2]=["assets/images/slideshow/home/100_1087_sm.jpg", "", ""] 
fadeimages[3]=["assets/images/slideshow/home/100_1223_sm.jpg", "", ""] 
fadeimages[4]=["assets/images/slideshow/home/100_1235_sm.jpg", "", ""] 
fadeimages[5]=["assets/images/slideshow/home/100_1243_sm.jpg", "", ""] 
fadeimages[6]=["assets/images/slideshow/home/100_1254b.jpg", "", ""] 
fadeimages[7]=["assets/images/slideshow/home/100_1255b.jpg", "", ""] 
fadeimages[8]=["assets/images/slideshow/home/100_1260_sm.jpg", "", ""] 
fadeimages[9]=["assets/images/slideshow/home/100_1262b.jpg", "", ""] 
fadeimages[10]=["assets/images/slideshow/home/100_1287_sm.jpg", "", ""] 
fadeimages[11]=["assets/images/slideshow/home/100_1289b.jpg", "", ""] 
fadeimages[12]=["assets/images/slideshow/home/100_1305b.jpg", "", ""] 

var fadeimages2=new Array() 
//SET IMAGE PATHS. Extend or contract array as needed
fadeimages2[0]=["assets/images/slideshow/details/100_0586_sm.jpg", "", ""] 
fadeimages2[1]=["assets/images/slideshow/details/100_0591_sm.jpg", "", ""] 
fadeimages2[2]=["assets/images/slideshow/details/100_1212b.jpg", "", ""] 
fadeimages2[3]=["assets/images/slideshow/details/100_1346b.jpg", "", ""]
fadeimages2[4]=["assets/images/slideshow/details/parlor_sm.jpg", "", ""] 
fadeimages2[5]=["assets/images/slideshow/details/Intimate-Dining.jpg", "", ""] 
fadeimages2[6]=["assets/images/slideshow/details/view-from-the-porch_sm.jpg", "", ""] 
fadeimages2[7]=["assets/images/slideshow/details/100_1216_sm.jpg", "", ""] 
fadeimages2[8]=["assets/images/slideshow/details/100_1320b.jpg", "", ""] 
fadeimages2[9]=["assets/images/slideshow/details/100_0491.jpg", "", ""]
fadeimages2[10]=["assets/images/slideshow/details/100_1355b.jpg", "", ""] 
fadeimages2[11]=["assets/images/slideshow/details/100_1361b.jpg", "", ""]
fadeimages2[12]=["assets/images/slideshow/details/100_1198.jpg", "", ""]

var fadeimages3=new Array() 
//SET IMAGE PATHS. Extend or contract array as needed
fadeimages3[0]=["assets/images/slideshow/captain/100_1331b.jpg", "", ""] 
fadeimages3[1]=["assets/images/slideshow/captain/100_1332b.jpg", "", ""] 
fadeimages3[2]=["assets/images/slideshow/captain/100_1367a.jpg", "", ""] 
fadeimages3[3]=["assets/images/slideshow/captain/100_1335b.jpg", "", ""] 
fadeimages3[4]=["assets/images/slideshow/captain/100_1371.jpg", "", ""] 

var fadeimages4=new Array() 
//SET IMAGE PATHS. Extend or contract array as needed
fadeimages4[0]=["assets/images/slideshow/ogden/100_1338b.jpg", "", ""] 
fadeimages4[1]=["assets/images/slideshow/ogden/100_1339b.jpg", "", ""] 
fadeimages4[2]=["assets/images/slideshow/ogden/100_1340b.jpg", "", ""] 

var fadeimages5=new Array() 
//SET IMAGE PATHS. Extend or contract array as needed
fadeimages5[0]=["assets/images/slideshow/violet/100_1380.jpg", "", ""] 
fadeimages5[1]=["assets/images/slideshow/violet/100_1381.jpg", "", ""] 
fadeimages5[2]=["assets/images/slideshow/violet/100_1383.jpg", "", ""] 

var fadebgcolor="white"

////NO need to edit beyond here/////////////
 
var fadearray=new Array() //array to cache fadeshow instances
var fadeclear=new Array() //array to cache corresponding clearinterval pointers
 
var dom=(document.getElementById) //modern dom browsers
var iebrowser=document.all
 
function fadeshow(theimages, fadewidth, fadeheight, borderwidth, delay, pause, displayorder){
this.pausecheck=pause
this.mouseovercheck=0
this.delay=delay
this.degree=10 //initial opacity degree (10%)
this.curimageindex=0
this.nextimageindex=1
fadearray[fadearray.length]=this
this.slideshowid=fadearray.length-1
this.canvasbase="canvas"+this.slideshowid
this.curcanvas=this.canvasbase+"_0"
if (typeof displayorder!="undefined")
theimages.sort(function() {return 0.5 - Math.random();}) //thanks to Mike (aka Mwinter) :)
this.theimages=theimages
this.imageborder=parseInt(borderwidth)
this.postimages=new Array() //preload images
for (p=0;p<theimages.length;p++){
this.postimages[p]=new Image()
this.postimages[p].src=theimages[p][0]
}
 
var fadewidth=fadewidth+this.imageborder*2
var fadeheight=fadeheight+this.imageborder*2
 
if (iebrowser&&dom||dom) //if IE5+ or modern browsers (ie: Firefox)
document.write('<div id="master'+this.slideshowid+'" style="position:relative;width:'+fadewidth+'px;height:'+fadeheight+'px;overflow:hidden;"><div id="'+this.canvasbase+'_0" style="position:absolute;width:'+fadewidth+'px;height:'+fadeheight+'px;top:0;left:0;filter:progid:DXImageTransform.Microsoft.alpha(opacity=10);opacity:0.1;-moz-opacity:0.1;-khtml-opacity:0.1;background-color:'+fadebgcolor+'"></div><div id="'+this.canvasbase+'_1" style="position:absolute;width:'+fadewidth+'px;height:'+fadeheight+'px;top:0;left:0;filter:progid:DXImageTransform.Microsoft.alpha(opacity=10);opacity:0.1;-moz-opacity:0.1;-khtml-opacity:0.1;background-color:'+fadebgcolor+'"></div></div>')
else
document.write('<div><img name="defaultslide'+this.slideshowid+'" src="'+this.postimages[0].src+'"></div>')
 
if (iebrowser&&dom||dom) //if IE5+ or modern browsers such as Firefox
this.startit()
else{
this.curimageindex++
setInterval("fadearray["+this.slideshowid+"].rotateimage()", this.delay)
}
}

function fadepic(obj){
if (obj.degree<100){
obj.degree+=10
if (obj.tempobj.filters&&obj.tempobj.filters[0]){
if (typeof obj.tempobj.filters[0].opacity=="number") //if IE6+
obj.tempobj.filters[0].opacity=obj.degree
else //else if IE5.5-
obj.tempobj.style.filter="alpha(opacity="+obj.degree+")"
}
else if (obj.tempobj.style.MozOpacity)
obj.tempobj.style.MozOpacity=obj.degree/101
else if (obj.tempobj.style.KhtmlOpacity)
obj.tempobj.style.KhtmlOpacity=obj.degree/100
else if (obj.tempobj.style.opacity&&!obj.tempobj.filters)
obj.tempobj.style.opacity=obj.degree/101
}
else{
clearInterval(fadeclear[obj.slideshowid])
obj.nextcanvas=(obj.curcanvas==obj.canvasbase+"_0")? obj.canvasbase+"_0" : obj.canvasbase+"_1"
obj.tempobj=iebrowser? iebrowser[obj.nextcanvas] : document.getElementById(obj.nextcanvas)
obj.populateslide(obj.tempobj, obj.nextimageindex)
obj.nextimageindex=(obj.nextimageindex<obj.postimages.length-1)? obj.nextimageindex+1 : 0
setTimeout("fadearray["+obj.slideshowid+"].rotateimage()", obj.delay)
}
}
 
fadeshow.prototype.populateslide=function(picobj, picindex){
var slideHTML=""
if (this.theimages[picindex][1]!="") //if associated link exists for image
slideHTML='<a href="'+this.theimages[picindex][1]+'" target="'+this.theimages[picindex][2]+'">'
slideHTML+='<img src="'+this.postimages[picindex].src+'" border="'+this.imageborder+'px">'
if (this.theimages[picindex][1]!="") //if associated link exists for image
slideHTML+='</a>'
picobj.innerHTML=slideHTML
}
 
 
fadeshow.prototype.rotateimage=function(){
if (this.pausecheck==1) //if pause onMouseover enabled, cache object
var cacheobj=this
if (this.mouseovercheck==1)
setTimeout(function(){cacheobj.rotateimage()}, 100)
else if (iebrowser&&dom||dom){
this.resetit()
var crossobj=this.tempobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
crossobj.style.zIndex++
fadeclear[this.slideshowid]=setInterval("fadepic(fadearray["+this.slideshowid+"])",50)
this.curcanvas=(this.curcanvas==this.canvasbase+"_0")? this.canvasbase+"_1" : this.canvasbase+"_0"
}
else{
var ns4imgobj=document.images['defaultslide'+this.slideshowid]
ns4imgobj.src=this.postimages[this.curimageindex].src
}
this.curimageindex=(this.curimageindex<this.postimages.length-1)? this.curimageindex+1 : 0
}
 
fadeshow.prototype.resetit=function(){
this.degree=10
var crossobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
if (crossobj.filters&&crossobj.filters[0]){
if (typeof crossobj.filters[0].opacity=="number") //if IE6+
crossobj.filters(0).opacity=this.degree
else //else if IE5.5-
crossobj.style.filter="alpha(opacity="+this.degree+")"
}
else if (crossobj.style.MozOpacity)
crossobj.style.MozOpacity=this.degree/101
else if (crossobj.style.KhtmlOpacity)
crossobj.style.KhtmlOpacity=this.degree/100
else if (crossobj.style.opacity&&!crossobj.filters)
crossobj.style.opacity=this.degree/101
}
 
 
fadeshow.prototype.startit=function(){
var crossobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
this.populateslide(crossobj, this.curimageindex)
if (this.pausecheck==1){ //IF SLIDESHOW SHOULD PAUSE ONMOUSEOVER
var cacheobj=this
var crossobjcontainer=iebrowser? iebrowser["master"+this.slideshowid] : document.getElementById("master"+this.slideshowid)
crossobjcontainer.onmouseover=function(){cacheobj.mouseovercheck=1}
crossobjcontainer.onmouseout=function(){cacheobj.mouseovercheck=0}
}
this.rotateimage()
}
