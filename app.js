document.getElementById("bt1").addEventListener("click",data);
function data(){
    var number=document.getElementById("num").value;
    const xhr=new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload=function(){
        if(this.status === 200){
            const jokes=JSON.parse(this.responseText);
            console.log(jokes);     
            if(jokes.type=="success"){
                let output='';
                jokes.value.forEach(function(jok){
                    output +=  `<li>${jok.joke}</li>`  //joke from console
                })
                document.getElementById("jo").innerHTML=`<h4>${output}</h4>`;//div id
            }
        }
}       
xhr.send();
}