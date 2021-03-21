const formatNumber = (number) => {
    if(number !== undefined){
        let rupiah = '';		
        let angkarev = number.toString().split('').reverse().join('');
        for(let i = 0; i < angkarev.length; i++) 
        if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
        return rupiah.split('',rupiah.length-1).reverse().join('');
    }
}

export {
    formatNumber,
}