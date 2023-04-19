var dishes = ['Italian Pasta', 'Rice with veggies', 'Chicken with potatoes', 'Vegetarian Pizza']
var price=[9.55,8.65,15.55,6.45]
function lemon(flag) {
    if (flag) {
        for(let i=0;i<=dishes.length;i++){
            console.log(dishes[i],'Prices(inc. tax):',price[i]+(price[i]*0.2));
        }
    }
    else{
        for(let i=0;i<=dishes.length;i++){
            console.log(dishes[i],'Prices(inc. tax):',price[i]);
        }
    }
}
lemon(false);