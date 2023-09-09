function content(n){
    con=document.getElementsByClassName('content')[n];
    if(con.style.height!='auto'){
        con.style.height='auto';
        con.style.padding='3.5dvh 2vw';
    }
    else{
        con.style.height='0';
        con.style.padding='0';
    }
}