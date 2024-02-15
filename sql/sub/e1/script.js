

const pros = document.querySelectorAll('.pro1');
const btns = document.querySelectorAll('.btn1')


for (const ele in pros) {
    btns[ele].addEventListener('click',()=>{
    navigator.clipboard.writeText(pros[ele].textContent);
    alert("Copied : " +pros[ele].textContent)
})
}

// btn1.addEventListener('click',()=>{
//     navigator.clipboard.writeText(pro1.textContent);
//     alert("Copied")
// })

// const pro2 = document.querySelector('.pro2');
// const btn2 = document.querySelector('.btn2')

// btn2.addEventListener('click',()=>{
//     navigator.clipboard.writeText(pro2.textContent);
//     alert("Copied")
// })

// const pro3 = document.querySelector('.pro3');
// const btn3 = document.querySelector('.btn3')

// btn3.addEventListener('click',()=>{
//     navigator.clipboard.writeText(pro3.textContent);
//     alert("Copied")
// })