class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    return (this.stackControl.length === this.MAX_SIZE) ? false : true;
  }

  isEmpty() {
    // ... your code goes here
    return (!this.stackControl.length) ? true:false;
  }

  push(item) {
    // ... your code goes here
    const canPush=this.canPush();
    if(canPush===true){
      this.stackControl.push(item);
      return this.stackControl;
    }else{
      throw new Error('STACK_OVERFLOW');
    }
  }

  pop() {
    // ... your code goes here
    const isEmpty=this.isEmpty();
    if(isEmpty===false){
     return this.stackControl.pop();
    } else {
      throw new Error('STACK_UNDERFLOW');
    }
  }

  display() {
    // ... your code goes here
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
