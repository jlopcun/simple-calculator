const keys = document.getElementById('keys');
const screen = document.getElementById('screen');
let hasOperator = false;
let hasRaix = false;
let hasSqua = false;
keys.addEventListener('click',(e)=>{
    let operations = {
        number:()=>screen.textContent +=e.target.textContent,
        operator:()=>{
            if(hasOperator===e.target.textContent || hasOperator===false){
                screen.textContent+=e.target.textContent;
            }
           
        },
        raix:()=>{
            for(let i=0;i<=screen.textContent.length;i++){

                if(hasRaix===false && !screen.textContent.includes('√')){
                    screen.textContent+=e.target.textContent;
                    hasRaix=true;
                    break;
                }
               hasRaix=false;
            }
        },
        squa:()=>{
            for(let i=0;i<=screen.textContent.length;i++){

                if(hasSqua===false && !screen.textContent.includes('²')){
                    screen.textContent+=e.target.textContent;
                    hasSqua=true;
                    break;
                }
               hasSqua=false;
            }
        },
        remover:()=>screen.textContent = '',
        removeone:()=>screen.textContent = screen.textContent.slice(0,screen.textContent.length-1),
        result:()=>{
            
            let screenValues = screen.textContent.trim().split(`${hasOperator}`);
            screenValues.forEach(el=>{
                if(el.includes('√')){
                    screenValues[screenValues.indexOf(el)]=Math.sqrt(Number(el.slice(1,el.length)))
                    
                }
                else if(el.includes('²')){
                    screenValues[screenValues.indexOf(el)]=Number(el.slice(0,el.length-1))*Number(el.slice(0,el.length-1));
                }
                
            })
            if(hasOperator!==false){
            let operaType = {
                '+':()=> screen.textContent=screenValues.reduce((total,actual)=>Number(total)+Number(actual)),
                '-':()=> screen.textContent=screenValues.reduce((total,actual)=>Number(total)-Number(actual)),
                '*':()=> screen.textContent=screenValues.reduce((total,actual)=>Number(total)*Number(actual)),
                '/':()=> screen.textContent=screenValues.reduce((total,actual)=>Number(total)/Number(actual))
            }
            operaType[hasOperator]();
            }
            else{
                screen.textContent = screenValues[0];
            }
        },
    }
    let dataClicked = e.target.dataset;
    for(data in dataClicked){
        operations[data]();
        break;
    }
    let operatores = '+-*/';
    let content = screen.textContent.trim();
    for(let i=0;i<=screen.textContent.length;i++){

        if(operatores.indexOf(content[i]) !==-1){
            hasOperator = content[i];
           
            break;
        }
        hasOperator=false;
    }
})


const darklight = document.getElementById('darklight');

darklight.addEventListener('click',(e)=>{
    if(e.target.classList[2]==='fa-moon'){
       e.target.className='darklight fas fa-sun';
       document.documentElement.style.setProperty('--bodybg','#fff');
    }
    else{
        e.target.className='darklight fas fa-moon';
        document.documentElement.style.setProperty('--bodybg','#333');
    }
})




