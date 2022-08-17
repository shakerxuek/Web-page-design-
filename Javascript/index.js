window.onload=function(){
    var nav =document.getElementById("navi");
    var navTop=nav.offsetTop;

    window.onscroll=function(){
        var backtop= document.documentElement.scrollTop||document.body.scrollTop;
        if(backtop>=navTop){
            nav.style.position="fixed";
            nav.style.top="0";
            nav.style.left="0";
            nav.style.zIndex="101";
        }else{
            nav.style.position="";
        }
    }
}