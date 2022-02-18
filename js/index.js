$("a[href^='#']").click(function(e){
    let aHref = $(e.target).attr("href");
    let offsetHref = $(aHref).offset().top;
    $("body,html").animate({scrollTop:offsetHref} ,2000)
})
$(".close").click(function(){
    $(".icon").animate({left:'10'} , 800)
    $(".nav").hide(800);
})
$(".icon").click(function(){
    $(".icon").animate({left:'300'} , 800)
    $(".nav").show(800);
})
$(".one").click(function(){
    $(".one1").slideToggle(700);
    $(".two2").slideUp(700);
    $(".three3").slideUp(700);
    $(".four4").slideUp(700);
})
$(".two").click(function(){
    $(".two2").slideToggle(700);
    $(".one1").slideUp(700);
    $(".three3").slideUp(700);
    $(".four4").slideUp(700);
})
$(".three").click(function(){
    $(".three3").slideToggle(700);
    $(".one1").slideUp(700);
    $(".two2").slideUp(700);
    $(".four4").slideUp(1000);
})
$(".four").click(function(){
    $(".four4").slideToggle(700);
    $(".one1").slideUp(700);
    $(".two2").slideUp(700);
    $(".three3").slideUp(700);
})
$("document").ready(function(){
    $(".t").fadeOut(500 , function(){
        $(".loading").fadeOut(500)
        $("body").css("overflow-y" , "auto")
    })
})
let countDownDate = new Date("Dec 28,2022 23:59:59").getTime() ;
let counter = setInterval(() => {
        let countNowDate = new Date().getTime();
        let deffr = countDownDate - countNowDate ;
    
        let days = Math.floor( deffr / ( 1000 * 60 * 60 * 24 ));
        let hours = Math.floor(deffr % ( 1000 * 60 * 60 * 24 ) / ( 1000 * 60 * 60 ));
        let min = Math.floor(deffr % ( 1000 * 60 * 60 ) / ( 1000 * 60 ));
        let sec =Math.floor(deffr % ( 1000 * 60 ) / 1000 );

        document.querySelector(".days").innerHTML = days ;
        document.querySelector(".hours").innerHTML = hours ;
        document.querySelector(".min").innerHTML = min ;
        document.querySelector(".seconds").innerHTML = sec ;
},1000); 
$(function(){
    let max =100;
    $("textarea").keyup(function(){      
        let length=$(this).val().length;
        let character = max - length;    
        console.log(character)
        if(character<=0)
        {
          $("#char").text("your available character finished");    
        }
        else
        {     
        $("#char").text(character +" Characyer Reamining ");
        }
        
    })
});
$(window).scroll(function(){
    let wscroll =$(window).scrollTop();
    if(wscroll > 100)
    {
        $(".bttn").css("display" , "flex")
    } 
    else
    {
        $(".bttn").css("display" ,"none")
    }  
})
$(".bttn").click(function(){
    $("html,body").animate({scrollTop :"0"} ,2000)
})

let slid= $('.cardd').offset().top;
$(window).scroll(()=>{
    let wScroll = $(window).scrollTop();
    if(wScroll>slid)
    {
        $("#carouselExampleControls").animate({width:'100%'}, 1000);
    }
})

let slids= $('#duration').offset().top;
$(window).scroll(()=>{
    let wScroll = $(window).scrollTop();
    if(wScroll>slids)
    {
        $(".a").show(1000 ,()=>{
            $(".a").show(1000 ,()=>{
                $(".a").show(1000 ,()=>{
                    $("a").show(1000);
                })
            })
        })
    }
})
