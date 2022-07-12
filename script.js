/* let container = document.querySelector('.container');
let out = document.querySelector('#out');


        function getAttr() {
            let num1 = document.querySelector('.num1').value;
            let num2 = document.querySelector('.num2').value;

            num1 = parseInt(num1);
            num2 = parseInt(num2);
        }

        function calc() {
            container.addEventListener('click', (e) => {
                target = e.target;
            switch (target.getAttribute('class')) {
                case 'btn1':
                    getAttr();
                out.textContent =  `Ваш результат: ${num1 * num2}`;
                    break;
                case 'btn2':
                    out.textContent = `Ваш результат: ${num1 + num2}`;
                    break;
                case 'btn3':
                    out.textContent =  `Ваш результат: ${num1 - num2}`;
                    break;
            }
        
            if (isNaN(num1, num2)) {
              out.textContent = 'Введите цифру!';
            }
                
            })
        }
        calc();
         */












        let  out = document.querySelector('#out');
        let container = document.querySelector('.container');
       
        function getAttr() {
           num1 = document.querySelector('.num1').value;
           num2 = document.querySelector('.num2').value;
       
           num1 = parseInt(num1); 
          num2 = parseInt(num2); // Если в выражение будут содержаться буквы все они будут игнорироваться
        }
       
       
       
       function calc() {
           container.addEventListener('click', (e) => {
               target = e.target;
           switch (target.getAttribute('class')) {
               case 'btn1':
                   getAttr();
               out.textContent =  `Ваш результат: ${num1 * num2}`;
                   break;
                   
               case 'btn2':
                getAttr();
                   out.textContent = `Ваш результат: ${num1 + num2}`;
                   break;
               case 'btn3':
                getAttr();
                   out.textContent =  `Ваш результат: ${num1 - num2}`;
                   break;
           } 
            
           })
        
       }
       calc();






















/* 
if (target.getAttribute('class') === 'btn1') {
    getAttr()
    return  out.textContent = num1 * num2;
} if (target.getAttribute('class') === 'btn2') {
    getAttr()
    return  out.innerHTML = num1 + num2;
}
if (target.getAttribute('class') === 'btn3') {
    getAttr()
    return  out.innerHTML = num1 - num2;
} 
 */






/* 
btn1.addEventListener('click', getSum); */
/* btn2.addEventListener('click', getSum);
btn3.addEventListener('click', getSum); */



/* function plus() {
    getAttr();
    out.innerHTML = num1 + num2;
} */


/* if (btn1.getAttribute('class') === 'btn1') {
    
    getAttr()
    return  out.innerHTML = num1 * num2;
    
  }

   if (btn2.getAttribute('class') === 'btn2') {
      
      getAttr()
      return    out.innerHTML = num1 +  num2;
    
  }

  
  if (btn3.getAttribute('class') === 'btn3') {
      getAttr()
      return    out.innerHTML = num1 -  num2;
  } */
/* 

  let  out = document.querySelector('#out');
  let container = document.querySelector('.container');
 
  function getAttr() {
     num1 = document.querySelector('.num1').value;
     num2 = document.querySelector('.num2').value;
 
     num1 = parseInt(num1); 
    num2 = parseInt(num2); // Если в выражение будут содержаться буквы все они будут игнорироваться
 
  }
 
 
 
 function calc() {
     container.addEventListener('click', (e) => {
         target = e.target;
     switch (target.getAttribute('class')) {
         case 'btn1':
             getAttr();
         out.textContent =  `Ваш результат: ${num1 * num2}`;
             break;
         case 'btn2':
             out.textContent = `Ваш результат: ${num1 + num2}`;
             break;
         case 'btn3':
             out.textContent =  `Ваш результат: ${num1 - num2}`;
             break;
     }
 
     if (isNaN(num1, num2)) {
         out.textContent = 'Введите цифру!';
     }
         
     })
 }
 calc();
  */