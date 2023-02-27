class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // ... your code goes here
    return (this.queueControl.length === this.MAX_SIZE) ? false : true;
  }

  isEmpty() {
    // ... your code goes here
    return (!this.queueControl.length) ? true:false;
  }

  enqueue(item) {
    // ... your code goes here
    const canEnqueue=this.canEnqueue();
    if(canEnqueue===true){
      this.queueControl.push(item);
      return this.queueControl;
    }else{
      throw new Error('QUEUE_OVERFLOW');
    }
  }

  dequeue() {
    // ... your code goes here
    const isEmpty=this.isEmpty();
    if(isEmpty===false){
     return this.queueControl.shift();
    } else {
      throw new Error('QUEUE_UNDERFLOW');
    }
  }

  display() {
    // ... your code goes here
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
