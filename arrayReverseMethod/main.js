Array.prototype.reverse = function() {
    for(var i = 0; i < this.length;)
      this.push(this.splice(this.length - ++i, 1)[0]);
    return this;
  };

