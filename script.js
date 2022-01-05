var btn_register1 = document.getElementById("btn_register1");
var container = document.getElementById("container");
var btn_married = document.getElementById("btn_married");
var btn_single = document.getElementById("btn_single");
var married = document.getElementById("married");
var married_name = document.getElementById("married_name");
var dara_farzand = document.getElementById("dara_farzand");
var dara = document.getElementById("dara");
var my_list = document.getElementById("my_list");
var btn_register2 = document.getElementById("btn_register2")


btn_register1.onclick = function(){
    container.style.display="block";
}

btn_mode.onclick= function () {
    container.style.background = "linear-gradient( 90deg ,#101b37 , #e41376 , #01c8ee )";
    container.style.backgroundSize = "350%"
    btn_mode.style.display = "none"
    btn_mode2.style.display = "block"
}

btn_mode2.onclick= function () {
    container.style.background = "linear-gradient( 90deg ,#fa7199 , #f5ce62 , #e43603)";
    container.style.backgroundSize = "350%"
    btn_mode2.style.display = "none"
    btn_mode.style.display = "block"
}

btn_married.onclick = function (){
    married.style.display = "inline"
    married_name.style.display = "inline"
    container.style.height="auto" ;
    dara.style.display = "block"
    dara_farzand.style.display = "inline"
}

btn_single.onclick = function (){
    married.style.display = "none"
    married_name.style.display = "none"
    dara.style.display = "none"
    dara_farzand.style.display = "none"
    container.style.height="auto";
   
}

dara_farzand.onclick = function (){
    farzand.style.display = "block"
    btn_p.style.display = "inline"
    btn_s.style.display = "inline"
    container.style.height="auto" ;

}

function bache_jadid(){
    var input = document.createElement("INPUT");
    input.type='text';
    input.style.width="300px";
    input.style.height="25px";
    input.type='text';
    input.style.border = "none";
    input.style.width="300px";
    input.style.height="30px";
    input.style.borderRadius ="30px";
    input.style.backgroundColor="#ddc1c6";
    input.style.boxShadow ="inset -4px -4px 4px #fff,inset  4px 4px 4px  rgba(0,0,0,0.3)";
    input.style.marginBottom ="5px";
    input.style.marginTop ="10px";
    var bache =document.createElement("LI");
    my_list.appendChild(bache);
    bache.appendChild(input);
    container.style.height="auto" ;

}

function remove_jadid(){
    my_list.removeChild(my_list.childNodes[0]);
    container.style.height="auto" ;
  
}

btn_register.onclick = function(){
    container.style.display = "none"
}

