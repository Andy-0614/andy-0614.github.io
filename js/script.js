var text = document.getElementById("typing")
const data_en = 'An information science student with a passion for coding. '.split('')
const data_zh = '一個喜歡coding的資訊科學生'.split('')
let index = 0
var key=0
function touch(){
    text = document.getElementById("typing")
    if(key==1){
        if(text.innerHTML[0]=="一"){
            text.innerHTML=""
            key=0;
            writing_en(index)
        }else if(text.innerHTML[0]=="A"){
            text.innerHTML=""
            key=0;
            writing_zh(index)
        }
    }
}

function writing_en(index) {
    if (index < data_en.length) {
        text.innerHTML += data_en[index]
        setTimeout(writing_en.bind(this), 50, ++index)
    }else{
        key=1;
    }
}
function writing_zh(index) {
    if (index < data_zh.length) {
        text.innerHTML += data_zh[index]
        setTimeout(writing_zh.bind(this), 100, ++index)
    }else{
        key=1;
    }
}

writing_en(index)