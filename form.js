function fun(){
    let a=document.getElementById('pass').value;
    let b=document.getElementById('confirm').value;
    if(a==""){
        document.getElementById('message').innerText="please type something (> _ <)"
        return false;
    }
    if(a.length<5){
        document.getElementById('message').innerText="please type more than 5 value"
        return false;
    }
    if(a.length>20){
        document.getElementById('message').innerText="please type between 5 to 20 value"
        return false;
    }
    if(a!=b){
        document.getElementById('msg').innerText='password not match' ;
        return false;
    }
    
}