function  weirddivisionwhithfor(n){
    if (n%3===0){
    return "julia" }
        if (n%5===0){
        return "james" }
        if (n%3===0 && n%5===0){
            return "juliajames"
        }else{
            return n
        }
        

        function iterateandlogWithfor(n){
    var msg=""
    for(var i=0;i<n;i++){
        if(i%2===0){
            console.log(msg=i+" is even")
        }
        else{
            console.log(msg=i+" is odd")
        }
    }
}
function iterateandlogWithwhile(n){
    var msg=""
    var i=0
    while(i<n){
        if(i%2===0){
            console.log(msg=i+" is even")
            i++
        }
        else{
            console.log(msg=i+" is odd")
            i++
        }
    }
}
