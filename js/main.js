let nav = document.querySelector('.navItems')

document.querySelector("#openMenu").addEventListener("click", function(){
    nav.style.right = "0"
})

document.querySelector("#closeMenu").addEventListener("click", function(){
    nav.style.right = "-300px"
})

let backthisprojectbtn = document.querySelector("#backthisprojectbtn");
let closebackthisprojectModal = document.querySelector("#closemodal");
let backthisproject = document.getElementById("backthisproject2");

backthisprojectbtn.addEventListener("click", function(){
    backthisproject.style.display = "block"
    // alert("come");
})
closebackthisprojectModal.addEventListener("click", function(){
    backthisproject.style.display = "none"
})

