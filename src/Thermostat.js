function Thermostat() {
  this.temperature = 20;
  // this.MAXTEMP = 32;
  // this.MINTEMP = 10;
  // this.PSMAXTEMP = 25;
  this.isPowersaving = true;
};

const MAXTEMP = 32;
const MINTEMP = 10;
const PSMAXTEMP = 25;

Thermostat.prototype.reset = function() {
  this.temperature = 20
};


Thermostat.prototype.up = function() {
  if (this.temperature + 1 > this.MAXTEMP) {
    throw new Error(`maximum temperature is ${this.MAXTEMP}`)
  }
  if (this.isPowersaving && (this.temperature + 1 > this.PSMAXTEMP)) {
    throw new Error(`maximum temperature is ${this.PSMAXTEMP} in powersave mode`)
  }
    ++this.temperature
};

Thermostat.prototype.down = function() {
  if (this._isUnderMinTemp()) {
    throw new Error(`minimum temperature is ${this.MINTEMP}`)
  }
    --this.temperature
};

Thermostat.prototype.modeSwitch = function() {
  !this.isPowersaving ? this.isPowersaving = true : this.isPowersaving = false;
};

Thermostat.prototype._isUnderMinTemp = function() {
  return ((this.temperature - 1) < this.MINTEMP)
};

Thermostat.prototype.usage = function() {
  if (this.temperature < 18) {
    return("low-usage")
  }
  if (this.temperature >= 18 && this.temperature < 25) {
    return("medium-usage")
  }
  return("high-usage")
};
