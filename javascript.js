function addli()
{  
    var list=document.getElementById("list");//parent
    var div = document.createElement("div");//apendchild1
    var check = document.createElement("input");//appendChild2
   var text=document.getElementById("input").value;//input of div
    var textnode=document.createTextNode(text);//innehtml div

//checkbox
    div.appendChild(check)
    check.type="checkbox"
    check.className="check";
    
    check.addEventListener('click',function(){
        if(check.checked==true)
        {
            div.style.textDecoration="line-through"
            div.style.color="red"
        }
        else
        {
            div.style.textDecoration="none";
            div.style.color="brown";
        }
    })
    
  //create new elemet li (list--parentname ,div--childname )
list.appendChild(div);
div.className="li";

list.insertBefore(div,list.childNodes[0]);

//add text (li child of list add inside text using textnode )
div.appendChild(textnode);





var edit=document.createElement("button");
var del=document.createElement("button");
var editbtn=document.createTextNode("Edit")
var delbtn=document.createTextNode("delete")





div.appendChild(edit);


edit.appendChild(editbtn);
edit.className="edit";


div.appendChild(del);

del.appendChild(delbtn);
del.className="del";
del.addEventListener('click',function(){
        list.removeChild(div);
        list.removeChild(del);
        list.removeChild(edit);
        list.removeChild(check)

    })  

    
}


    function time()
{
    var day= new Date()
var hours=day.getHours();
var minutes=day.getMinutes();

var s="AM";


if(hours==0)
{
    hours=12;
}
else if (hours>12)
{
 hours=hours-12;
 s="PM";
}
hours = (hours < 10) ? "0" + hours : hours;
minutes = (minutes < 10) ? "0" + minutes : minutes;

    document.getElementById("time").innerHTML=   hours+":"+minutes+""+s;
    setTimeout(digital, 1000);
    
}
window.onload=time;

