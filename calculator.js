let num=""
ptag=document.querySelectorAll("p")[0]
 
   function calculator(val){

         if(val==="="){

            let result=eval(num)

            num=result

            return ptag.innerText=num
        }else if (val==="clear"){
             num=""
            return ptag.innerText=""
            
        }
        else{
           
                num+=val

            return ptag.innerText=num

            }
   }