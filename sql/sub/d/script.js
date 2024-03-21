

const pros = document.querySelectorAll('.pro1');
const btns = document.querySelectorAll('.btn1')


for (const ele in pros) {
    btns[ele].addEventListener('click',()=>{
    navigator.clipboard.writeText(pros[ele].textContent);
    alert("Copied : " +pros[ele].textContent)
})
}

const cpyall = document.querySelector('.cpy-all');

cpyall.addEventListener('click',()=>{
    let content = "";
    for(let ele in pros){
        content = content + pros[ele].textContent + "\n\n";
    }
    navigator.clipboard.writeText(content);
    alert("Copied all");
})