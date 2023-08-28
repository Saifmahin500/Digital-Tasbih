const subhanAllahDisplay = document.getElementById('subhanAllahDisplay')
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn')
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn')

const AlhamdulilahDisplay = document.getElementById('AlhamdulilahDisplay')
const AlhamdulilahIncrimentBtn = document.getElementById('AlhamdulilahIncrimentBtn')
const AlhamdulilahDecrimentBtn = document.getElementById('AlhamdulilahDecrimentBtn')

const AllahuakberDisplay = document.getElementById('AllahuakberDisplay')
const AllahuakberIncrimentBtn = document.getElementById('AllahuakberIncrimentBtn')
const AllahuakberDecrimentBtn = document.getElementById('AllahuakberDecrimentBtn')

const resetBtn = document.getElementById('resetBtn')

let subhanAllahInitialValue = 0;
let AlhamdulilahInitialValue = 0;
let AllahuakberInitialValue = 0;

// this is subhanallah part
subhanAllahIncrimentBtn.addEventListener('click' , function(){
    if (subhanAllahInitialValue === 33) {
        return alert ('You count 33 times Subhan Allah. please count another one. ')
        
    }
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

subhanAllahDecrimentBtn.addEventListener('click' , function(){
    if (subhanAllahInitialValue === 0) {
        return alert('you cant added negative value ')
        
    }
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

// this is alhamduliah part

AlhamdulilahIncrimentBtn.addEventListener('click' , function(){
    if (AlhamdulilahInitialValue === 33) {
        return alert ('You count 33 times Alhamdulilah. please count another one. ')
        
    }
    AlhamdulilahInitialValue += 1;
    AlhamdulilahDisplay.innerText = AlhamdulilahInitialValue;
})

AlhamdulilahDecrimentBtn.addEventListener('click' , function(){
    if (AlhamdulilahInitialValue === 0) {
        return alert('you cant added negative value ')
        
    }
    AlhamdulilahInitialValue -= 1;
    AlhamdulilahDisplay.innerText =  AlhamdulilahInitialValue;
})
// this is allahuakbar part

AllahuakberIncrimentBtn.addEventListener('click' , function(){
    if (AllahuakberInitialValue === 34) {
        return alert ('congratulation!! You count 100 times all jikir. May Allah forgive you. ')
        
    }
    AllahuakberInitialValue += 1;
    AllahuakberDisplay.innerText = AllahuakberInitialValue;
})

AllahuakberDecrimentBtn.addEventListener('click' , function(){
    if (AllahuakberInitialValue === 0) {
        return alert('you cant added negative value ')
        
    }
    AllahuakberInitialValue -= 1;
    AllahuakberDisplay.innerText =  AllahuakberInitialValue;
})

resetBtn.addEventListener('click', function(){
    subhanAllahDisplay.innerText = 0;
    AlhamdulilahDisplay.innerText = 0;
    AllahuakberDisplay.innerText =0;
    subhanAllahInitialValue = 0;
    AlhamdulilahInitialValue = 0;
    AllahuakberInitialValue = 0;
})
