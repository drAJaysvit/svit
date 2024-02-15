const pros = document.querySelectorAll('.pro1');
const btns = document.querySelectorAll('.btn1')


for (const ele in pros) {
    btns[ele].addEventListener('click',()=>{
    navigator.clipboard.writeText(pros[ele].textContent);
    alert("Copied : " +pros[ele].textContent)
})
}