function mouseFollower() {
    let main = document.querySelector(".hero")
    let followMouse = document.querySelector(".follower")
    main.addEventListener("mousemove", function(dets){
        followMouse.style.left = dets.x + "px"
        followMouse.style.top = dets.y + "px"
    })
    main.addEventListener("mouseenter",function(){
        followMouse.style.opacity = 1
    })
    main.addEventListener("mouseleave",function(){
        followMouse.style.opacity = 0
    })

}
// mouseFollower()