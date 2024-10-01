let m= prompt("enter a number m:")
   let n=prompt("enter a number n:")
   function soc(m,n){
       if(m>n)
       {
           return 0;
       }
       let sum=0;
       for (let i=m;i<=n;i++){
           sum+=i*i*i;
       }
            return sum;
   }
   console.log(soc(m,n));