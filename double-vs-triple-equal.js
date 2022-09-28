const first = 0;
const second = 'false';
if( first == second){//== only checks the value
    console.log('condition double equal true');
}
else {
    console.log('condition double equal false');
}

if(first === second){//checks the value as well as the type of the element
    console.log('condition triple true');
}
else{
    console.log('triple false');
}