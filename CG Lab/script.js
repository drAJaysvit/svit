const pros = document.querySelectorAll('.pro1');
const btns = document.querySelectorAll('.btn1')

const atag = document.querySelectorAll('.atag');
for (const ele in pros) {
    atag[ele].addEventListener('click',()=>{
    navigator.clipboard.writeText(pros[ele].textContent);
    alert("Copied : ")
})
}

for (const ele in pros) {
    btns[ele].addEventListener('click',()=>{
    navigator.clipboard.writeText(pros[ele].textContent);
    alert("Copied : " +pros[ele].textContent)
})
}

