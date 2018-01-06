//const Grub = require('./Grub')
var Bee = function() {
 Grub.call(this);
 this.age = 5;
 this.color = 'yellow';
 this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
console.log(Bee.prototype)
Bee.prototype.constructor = Bee

var bee = new Bee();
//console.log(bee.constructor);