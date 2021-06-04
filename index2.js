function exampleloop()
{  
     n=parseInt(prompt("Enter the val of n= "));


     for(i=1;i<=n*3;i+=3)
     {
         document.write(i + "<br>");
     }
}
// if n=5--->5 8 9 8 5
// if n=4--->4 6 6 4
function exampleloop1()
{  
     n=parseInt(prompt("Enter the val of n= "));

       var i,j;

     for(i=1,j=n;i<=n;i++,j--)
     {
         document.write(i*j + "<br>");
     }
}
function exampleloop2()
{  
     n=parseInt(prompt("Enter the val of n= "));
     for(i=1;i<=n;i++)
     {
         for(j=1;j<=n;j++)
         {
             if(i==1 || i==n ||j==1 || i==j || i+j==n+1)
                document.write(1 + " ");
             else
             document.write(0 + " ");    
         }
         document.write("<br>");
     }
    }   

   function exampleloop3()
   {
       n=parseInt(prompt("Enter the val of n= "));
       i=1;
       while(i<=n)
       {
           document.write(Math.pow(2,i-1) + " ");
           i++;
       }
   } 
   function exampleloop3()
   {
       n=parseInt(prompt("Enter the val of n= "));
       i=1;
       while(i<=n)
       {
           document.write(Math.pow(2,i-1) + " ");
           i++;
       }
    }
    function exampleloop4()
   {
       n=parseInt(prompt("Enter the val of n= "));
       for(i=n;i>=1;i--)
       {
           for(j=n;j>=i;j--)
           {
               document.write(j +" ");
           }
           document.write("<br>");
       }
    } 
    function exampleloop5()
   {
       n=parseInt(prompt("Enter the val of n= "));
       i=1;
       do
       {
          document.write(i + " ");
          i++;
       } while(i<=n);
   } 
    function exampleloop6()
   {
       n=parseInt(prompt("Enter the val of n= "));
       for(i=1;i>=n;i++)
       {
           for(j=1;j<=i;j++)
           {
            document.write(j +" ");
           }
           document.write("<br>");
       }
    }    
