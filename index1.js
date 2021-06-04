function exampleswitch()
{
    var ch=prompt("Please enter choice(1.ADD 2.SUB 3.MUL)");
    ch=parseInt(ch);
   if(ch>=1 && ch<=3)
   {
       var a=prompt("Enter a=");
       var b=prompt("Enter b=");
       a=parseInt(a);
       b=parseInt(b);
   }
   switch(ch)
   {
       case 1:res = a+b;
       alert("Sum= "+res);
       default:alert("NOT a valid choice");
               break;
       case 2:res = a-b;
               alert("Diff= "+res);
       case 3:res = a*b;
       alert("Product= "+res);
   }
   console.log(res);
}