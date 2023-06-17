const calculatetemp = function(){
    // console.log("hello");
    const temp = document.getElementById('temp').value;
    console.log(temp)

    const type = document.getElementById('type');
    
    const value = type.options[type.selectedIndex].value;
    console.log(value);
    
    let result;

    const cTof = (c)=>{
        let f = Math.round(( c * 9 / 5 ) + 32);
        return f
    }
    const fToc = (f)=>{
        let c = Math.round(( f-32)*5/9);
        return c
    }
       if(value == 'c'){
        result = cTof(temp);
        document.getElementById('ans').value = result +"\u00B0F"; 
    }
    else{
        result = fToc(temp);
        document.getElementById('ans').value = result + "\u00B0C";
    }

}

