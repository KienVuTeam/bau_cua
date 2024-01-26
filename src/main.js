// alert("aaa")
var box1 =document.getElementById("box1");
var box2 =document.getElementById("box2");
var box3 =document.getElementById("box3");
function refresh(){
    _index=0;
    _index++;
}
let urlImgBau ="./assets/image/bau.jpg";
let urlImgCua ="./assets/image/cua.jpg";
let urlImgTom ="./assets/image/tom.jpg";
let urlImgCa ="./assets/image/ca.jpg";
let urlImgGa ="./assets/image/ga.jpg";
let urlImgNai ="./assets/image/nai.jpg";
function clearAllClasses(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.className = ""; // Xóa tất cả các lớp
    }
}
//   
let napDiv =document.querySelector("#nap")
console.log(napDiv);
// Chuyển đối tượng div từ trên xuống dưới
function moveDown() {
    napDiv.classList.add("moving");
    setTimeout(()=>{
        napDiv.classList.remove("moving")
    }, 1500);
    }
    //load finish 
document.addEventListener('DOMContentLoaded', function () {
    box1.classList.add("img-bau");
    box2.classList.add("img-bau");
    box3.classList.add("img-bau");
    })
function xoc(e){
    // document.getElementById("box1").classList.remove("")
    _index=0;
    _index++;
    clearAllClasses("box1");
    clearAllClasses("box2");
    clearAllClasses("box3");
    moveDown();
    gieo3SucSac();
}    
//function random 1-6
function randomOneNumber (number){
    let randomNumber = Math.floor(Math.random() * number)+1;
    console.log("random: "+randomNumber);
    return randomNumber;
}
var arrSucSac =[];
async function gieo3SucSac(){
    /*
    1 bau 
    2 cau 
    3 tom 
    4 ca 
    5 nai
    6 ga
    */
    let ss1 = randomOneNumber(6);
    let ss2 = randomOneNumber(6);
    let ss3 = randomOneNumber(6);
    console.log(ss1+ ' - ' +ss2+" - "+ss3);
    arrSucSac = [];
    arrSucSac.push(ss1);
    arrSucSac.push(ss2);
    arrSucSac.push(ss3);
    //
    await mapSucSac(arrSucSac);
}


async function mapSucSac(arr){
    
    // debugger 
    let _ss1 = arr[0];
    let _ss2 = arr[1];
    let _ss3 = arr[2];
    let _length = arr.length;
    for(let i = 1; i<= _length; i++){
        // _index++;
        console.log(i);
        
        function map( _index){
            refresh();
            switch (_index) {
                case 1:
                    map2(box1,_ss1);
                    // box1.classList.add('img-bau')
                    break;
                case 2:
                    map2(box2, _ss2);
                    // box2.classList.add("img-bau")
                    break;    
                case 3:
                    map2(box3, _ss3);
                    // box3.classList.add("img-bau")            
                    break;
                default:
                    break;
            }
        }
        function map2(_boxMap,_dataMap){
            

            let ran = randomOneNumber(999);
            refresh();
            switch (_dataMap) {
                case 1:
                    _boxMap.classList.remove('img-bau')
                    _boxMap.classList.add('img-bau')
                    _boxMap.style.backgroundImage= `urlImgBau?id=${ran}`;
                    break;
                case 2:
                    _boxMap.classList.remove('img-cua')
                    _boxMap.classList.add('img-cua')
                    _boxMap.style.backgroundImage= `urlImgCua?id=${ran}`;
                    break;
                case 3:
                    _boxMap.classList.remove('img-tom')
                    _boxMap.classList.add('img-tom')
                    _boxMap.style.backgroundImage= `urlImgTom?id=${ran}`;
                    break;
                case 4:
                    _boxMap.classList.remove('img-ca')
                    _boxMap.classList.add('img-ca')
                    _boxMap.style.backgroundImage= `urlImgCa?id=${ran}`;
                    break;
                case 5:
                    _boxMap.classList.remove('img-ga')
                    _boxMap.classList.add('img-ga')
                    _boxMap.style.backgroundImage= `urlImgGa?id=${ran}`;
                    break;
                case 6:
                    _boxMap.classList.remove('img-nai')
                    _boxMap.classList.add('img-nai')
                    _boxMap.style.backgroundImage= `urlImgNai?id=${ran}`;
                    break;
                default:
                    break;
            }
        }
        await map(i);
    };
    // var map =
    
}

