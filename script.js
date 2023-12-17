function searching(){
    searchQuery=document.getElementById("searchQuery").value.toUpperCase();
    trr=document.getElementsByTagName("tr")

for(i=0;i<trr.length;i++){
    tdd=trr[i].getElementsByTagName("td")[0].innerHTML.toUpperCase();
    if(tdd)
    {
        if(tdd.indexOf(searchQuery)>=0){
            trr[i].style.display=''
        }
        else{
            trr[i].style.display='none'
        }    
    }
 
 }

}