

var cars = ['toyota', 'honda', 'mazda', 'mitsubishi', 'tesla', 'lexus']
console.log('The first item is: ' + cars[0]);

console.log('The last item: ' + cars[cars.length - 1]);

cars[6] = 'mercedes-benz';
console.log(cars);

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}