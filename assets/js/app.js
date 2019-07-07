var shopping_list = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

shopping_list.push('fruit loops');

shopping_list[4] = 'fair trade coffee';

shopping_list.splice(2, 2, 'rice', 'beans');

var shopping_cart = [];

var last_item = shopping_list.pop();
shopping_cart.push(last_item);

var first_item = shopping_list.shift();
shopping_cart.push(first_item);

while(shopping_list.length > 0){
	var item = shopping_list.pop();
	shopping_cart.push(item);
}

shopping_cart.sort().reverse();

console.log(shopping_cart.toString());
