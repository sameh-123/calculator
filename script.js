const up=document.querySelector('.up');
const down=document.querySelector('.down');
let tobe=[];
let clr=true,sign='';
function calc(a,b){
    let ans;
    if(sign=='+')ans=a+b;
    if(sign=='-')ans=a-b;
    if(sign=='x')ans=a*b;
    if(sign=='÷')ans=a/b;
    return ans;
}
function dowork(e){
    const get=e.target.value;
    if(get=='AC'){
        tobe=[];
        up.textContent='';
        down.textContent='';
        sign='';
        clr=true;
        return;
    }
    if(e.target.value==undefined||!clr)return;
    if(get=='='){
        clr=false;
        let disp=tobe.join('');
        up.textContent=disp;
        let values=disp.split(sign);
        let answer=calc(values[0],values[1]);
        down.textContent=answer;
    }
    else if(get=='del'){
        let poped=tobe.pop();
        if(poped=='+'||poped=='-'||poped=='x'||poped=='÷')sign='';
        let disp=tobe.join('');
        down.textContent=disp;
    }
    else{
        if(get=='+'||get=='-'||get=='x'||get=='÷'){
            if(sign!=''){
                alert('no more than one operation allowed till now!')
                return;
            }
            sign=get;
        }
        tobe.push(get);
        let disp=tobe.join('');
        down.textContent=disp;
    }
    console.log(e.target.value);
}















window.addEventListener('click',dowork);