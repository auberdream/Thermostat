function Thermostat() {
  this.temperature = 20;
  this.isPowersaving = true;
};

const MAXTEMP = 32;
const MINTEMP = 10;
const PSMAXTEMP = 25;
const MIN_LOW_USAGE = 18;
const MAX_MED_USAGE = 25;

Thermostat.prototype.reset = function() {
  this.temperature = 20
};

Thermostat.prototype.up = function() {
  if (this._isOverMaxTemp()) {
    throw new Error(`maximum temperature is ${MAXTEMP}`)
  }
  if (this._isOverPSMaxTemp()) {
    throw new Error(`maximum temperature is ${PSMAXTEMP} in powersave mode`)
  }
    ++this.temperature
};

Thermostat.prototype.down = function() {
  if (this._isUnderMinTemp()) {
    throw new Error(`minimum temperature is ${MINTEMP}`)
  }
    --this.temperature
};

Thermostat.prototype.modeSwitch = function() {
  !this.isPowersaving ? this.isPowersaving = true : this.isPowersaving = false;
};

Thermostat.prototype.usage = function() {
  if (this._isLowUsage()) {
    return("low-usage")
  }
  if (this._isMediumUsage()) {
    return("medium-usage")
  }
  return("high-usage")
};

Thermostat.prototype._isUnderMinTemp = function() {
  return ((this.temperature - 1) < MINTEMP);
};

Thermostat.prototype._isOverMaxTemp = function() {
  return (this.temperature + 1 > MAXTEMP);
};

Thermostat.prototype._isOverPSMaxTemp = function() {
  return this.isPowersaving && (this.temperature + 1 > PSMAXTEMP);
};

Thermostat.prototype._isLowUsage = function() {
  return (this.temperature < MIN_LOW_USAGE);
};

Thermostat.prototype._isMediumUsage = function() {
  return (this.temperature >= MIN_LOW_USAGE && this.temperature < MAX_MED_USAGE)
};
