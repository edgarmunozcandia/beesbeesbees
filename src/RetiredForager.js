var RetiredForagerBee = function() {
  RetiredForagerBee.call(this);
  this.age = 40;
  this.job = "gamble";
  this.canFly = "false";
  this.color = "grey";
  RetiredForager.prototype.forage = function ("I am too old, let me play cards instead"){
};
RetiredForager.prototype.gamble = function () {
  this.treasureChest.push(treasure);
};
};
RetiredForager.prototype = Object.create(Bee.prototype);
RetiredForager.prototype.constructor = RetiredForager;
