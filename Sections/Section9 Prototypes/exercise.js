//change stopwatch instance into prototype property

function Stopwatch(){
    let startTime = 0;
    let endTime = 0;
    let running = 0;
    let duration = 0;

    Object.defineProperty(this, 'duration', {
        get: function(){ return duration; },
        set: function(value){ duration = value}
    });

    Object.defineProperty(this, 'startTime', {
        get: function(){ return startTime; }
    });

    Object.defineProperty(this, 'endTime', {
        get: function(){ return endTime; }
    });

    Object.defineProperty(this, 'running', {
        get: function(){ return running; }
    });
}



Stopwatch.prototype.start = function(){
    if(this.running)
        throw new Error('Stopwatch is already started');
    
    this.startTime = new Date();
    this.running = true;
}

Stopwatch.prototype.stop = function(){
    if(!this.running)
        throw new Error('Stopwatch not running!');
    
    this.running = false;
    this.endTime = new Date();
    
    const second = (startTime.getTime() - endTime.getTime()) / 1000;
    this.duration +=  second;
}

Stopwatch.prototype.reset = function(){
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
}

// this course provlem that you can modify your objs outside
// thats why we use abstrct function to solve this problem