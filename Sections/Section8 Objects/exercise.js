// StopWatch

function Stopwatch(){

    let startTime =0;
    let endTime = 0;
    let duration = 0;
    let running = 0;

    this.start = function(){
        if(running)
            throw new Error('Stopwatch is running already!');

        startTime = new Date();
        running = true;
    };
    this.stop = function(){
        if(!running)
            throw new Error('Stopwatch wasnt running!');

        endTime = new Date();
        running = false;

        const second = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += second;

    };
    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    Object.defineProperty(this, 'duration', {
        get:function(){
            return duration;
        }
    });
}