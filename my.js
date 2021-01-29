function Kiemtraso(){
    let number = document.getElementById("number").value;
    if(number % 2==0){
        document.getElementById("result").innerHTML= "Số này là số chẵn";
    } else{
        document.getElementById("result").innerHTML= "Số này không phải là số chẵn"; 
    }
    
    
}
