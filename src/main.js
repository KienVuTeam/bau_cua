// alert("aaa")
let napDiv =document.querySelector("#nap")
console.log(napDiv);
// Chuyển đối tượng div từ trên xuống dưới
function moveDown() {
    napDiv.classList.add("moving");
    setTimeout(()=>{
        napDiv.classList.remove("moving")
    }, 5000);
    }
    moveDown();
    //load finish 
    document.addEventListener('DOMContentLoaded', function () {
    })

