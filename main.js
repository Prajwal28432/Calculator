
let display = document.getElementById('display');
let btn = Array.from(document.querySelectorAll('.btn'));
console.log(btn);

btn.map(button =>{
    button.addEventListener('click',function(e){
        switch(e.target.innerText){
            case "=":
                
                display.innerText = eval(display.innerText);
                break;
            case '←':
                if(display.innerText){
                display.innerText =display.innerText.slice(0,-1);
                }
                break;
            case 'C':
                display.innerText = "";
                break;
            
            default:
                display.innerText +=e.target.innerText;
                break; 
        }
     
    })
})