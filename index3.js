function array()
{
    var a = [10,20,30,"Anil","Divakar",99.7];
    document.write("Nuber of elements ="+ a.length +"<br>");
    document.write("METHOD 1 <br><br>");
    for(i=0;i<a.length;i++)
    {
        document.write(a[i] + " "); 
    }
    document.write("<br>METHOD 2 <br><br>");
    for(var i in a)
    {
        document.write(a[i] + " ");
    }
    document.write("<br>METHOD 3 <br><br>");
    a.forEach(fun1);
    function fun1(item,index)
    {
    document.write(index + ": "+ item + "<br>");
    }
    document.write("METHOD 4 <br><br>");
    i=2;
    for(;i<a.length;i++)
    {
    document.write(" "+ a[i]);
    }
}  
    function array2()
    {
        var a=[1,2,3];
        a.push(11);
        a.push("apple");
        a.push(66.7);
        document.write(a);
        a.pop();
        document.write("<br><br>");
        document.write(a);
        document.write("<br><br>");
        x=a.toString();
        document.write(x= " "+ typeof(x));

        document.write("<br><br>");
        y=a.join("$$$");
        document.write(y);

        document.write("<br><br>");
        x= a.shift();
        document.write("x= " + x + " array= "+ a);
        
        document.write("<br><br>");
        x= a.unshift("Ruby");
        document.write("x= " + x + " array= "+ a);
    }



