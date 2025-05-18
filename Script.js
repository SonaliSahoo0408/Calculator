const numberArray = document.querySelectorAll('.number-button');
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');
const p =document.querySelector('p');
const operationArray = document.querySelectorAll('.operation');
const modulousButton = document.querySelector('.modulous');


p.innerText=0;
let result=0;
let value1 = 0;


//Gettting first value
const getFirstNum =() =>{
  p.innerText=0;
  value1 = 0;
  numberArray.forEach((number)=>{
  number.addEventListener('click',()=>{
    if(number.innerText !== '=')
      value1= value1 + (number.innerText);
      p.innerText=Number(value1);
      // console.log(Number(value1))
  })
})
}

  getFirstNum();

// Getting 2nd Value
let value2=0;
const getNumber = () =>{
  // value1=0;
  value2=0;
  numberArray.forEach((number)=>{
  number.addEventListener('click',()=>{
    if(number.innerText !== '=')
      value2= value2 + (number.innerText);
      p.innerText = Number(value2);
  })
})
}


//starting operation for +,-,*,/,% 
const operation = (num1,num2,operator) =>{
  let result;
  if(operator === '+') {
    result = Number(num1) + Number(num2);
    // console.log(Number(num1) + Number(num2));
  }
  else if(operator === '-') {
    result = Number(num1) - Number(num2);
    // console.log(Number(num1) - Number(num2));
  }
  else if(operator === '*') {
    result = Number(num1) * Number(num2);
    // console.log(Number(num1) * Number(num2));
  }
  else if(operator === '/') {
    result = Number(num1) / Number(num2);
    // console.log(Number(num1) / Number(num2));
  }
  else if(operator === '%') {
    console.log('num1 = '+num1);
    console.log('num2 = '+num2);
    p.innerText = Number(num1) % Number(num2);
    // console.log(result);
    // p.innerText = result;
    // console.log(Number(num1) % Number(num2));
  }
  else if(operator === 'Exp') {
    result = Number(num1) **  Number(num2);
    // console.log(Number(num1) % Number(num2));
  }
  return result;
  
}


operationArray.forEach((action)=>{
  action.addEventListener('click',()=>{
    // console.log(value1)
    let num1 = value1;
    value1 = '';
    
    // Calling fucntion to create 2nd value
    // getNumber();
    if(action.innerText === '%')
    {
      val1 = p.innerText;
    }
    const equalButton = document.querySelector('.equal');
    equalButton.addEventListener('click',()=>{
      let num2 = value1;
      console.log(num1);
      console.log(num2);

      if(action.innerText === '%')
      {
        operation(val1,p.innerText,'%');
      }
      else{
        if(result === 0){
          result = operation(num1,num2,action.innerText);
        }
        else{
          result = operation(result,num2,action.innerText);
        }
        if(action.innerText !== '%'){
          p.innerText = result;
          console.log(result)
        }
      }
      // console.log(result)
      
        
      value1='';
      value2='';


    deleteButton.addEventListener('click',()=>{
      window.location.reload();
      // value1=0;
      // value2=0;
      // p.innerText=0;
      // result=0;
  })
      
    })    
  })  
})


clearButton.addEventListener('click',()=>{
  window.location.reload();
  p.innerText=0;
  value1=0;
  value2=0;
})


deleteButton.addEventListener('click',()=>{
  // console.log(p.innerText)
  if(p.innerText !== '0')
    p.innerText = p.innerText.split('').slice(0,-1).join('');
  if(p.innerText === '')
    p.innerText=0;
  // console.log(p.innerText)
  value1= Number(p.innerText);
  // value2=0;
})

// modulousButton.addEventListener('click',()=>{
//   let a = Number(p.innerText);

//   p.innerText = a % Number(p.innerText);
// })
