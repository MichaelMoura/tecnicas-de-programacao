module.exports = function(a,b,op){
    if(op =='soma'){
        return a+b
    }else if(op =='sub'){
        return a-b
    }else if(op =='multi'){
        return a*b
    }else if(op =='div'){
        return a/b
    }else{
        return 'deu ruim ai, amigo'
    }
}