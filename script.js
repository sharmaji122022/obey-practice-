


var t= gsap.timeline()

t.from(".line p",{
    y:150,
    stagger:0.3,
    duration:0.6,
    delay:0.5
})

t.from("#line1-part1", {
    opacity:0,  
    onStart:function(){
        var timer = document.querySelector(".line #line1-part1 pre")
        var grow = 0
        setInterval(function(){
        if(grow<100){  grow++ 
           timer.innerHTML = grow++
        }else{
            timer.innerHTML = grow
        }},45)
    }
})
t.to(".line span",{
    animationName: "NOW" ,
    opacity:1
})
t.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:3
})
t.to("#loader",{
    display:"none"
})
t.from("#page1",{
    delay:0.2,
    y:1600,
    duration:0.5,
  ease:Power4,
    opacity:0,
})
