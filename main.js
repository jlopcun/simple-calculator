const keys = document.getElementById('keys');
const screen = document.getElementById('screen');
let hasOperator = false;

keys.addEventListener('click',(e)=>{
    let operations = {
        number:()=>screen.textContent +=e.target.textContent,
        operator:()=>{
            if(hasOperator===e.target.textContent || hasOperator===false){
                screen.textContent+=e.target.textContent;
            };
        },
        remover:()=>screen.textContent = '',
        removeone:()=>screen.textContent = screen.textContent.slice(0,screen.textContent.length-1),
        result:()=>{
            if(hasOperator!==false){
                let screenValues = screen.textContent.trim().split(`${hasOperator}`);
               
            let operaType = {
                '+':()=> screen.textContent=screenValues.reduce((total,actual)=>Number(total)+Number(actual)),
                '-':()=> screen.textContent=screenValues.reduce((total,actual)=>Number(total)-Number(actual)),
                '*':()=> screen.textContent=screenValues.reduce((total,actual)=>Number(total)*Number(actual)),
                '/':()=> screen.textContent=screenValues.reduce((total,actual)=>Number(total)/Number(actual))
            }
            operaType[hasOperator]();
            }
            
        },
    }
    let dataClicked = e.target.dataset;
    for(data in dataClicked){
        operations['value'] = e.target.textContent;
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