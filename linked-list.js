/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

    push(val) {
      // create a new node and tell that tail now refrences new node
        const newNode = new Node(val);
        if(this.head){   // if it is the first head
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        else{   // if it is not the first head
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

  /** unshift(val): add new value to start of list. */

    unshift(val) {
        const newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
            // this.tail = newNode;
        }
        if(this.length === 0){
            this.tail = this.head;
        }
        this.length++;
    }

  /** pop(): return & remove last item. */

  pop() {
      let temporary_head = this.head;
    if(!this.head) {
        throw new Error("List is empty");
    }else if(this.length === 1){
        this.head = null;
        this.tail = null;
        this.length--;
        return temporary_head.val
      }
      while(temporary_head.next !== this.tail){
          temporary_head = temporary_head.next;
      }
      this.tail = temporary_head;
      this.length--;
      return temporary_head.next.val;

  }

  /** shift(): return & remove first item. */

  shift() {
      let currnet_nod= this.head;
      if(!this.head){
          throw new Error("List is empty");
      } else if(this.length === 1){
          this.head = null;
          this.tail = null;
          this.length--;
          return currnet_nod.val;
      }
      this.head = currnet_nod.next;
      this.length--;
      return currnet_nod.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
      let current_nod = this.head;
      while(idx){
          current_nod = current_nod.next;
          idx--;
      }
      if(!current_nod){
          throw new Error("Not a valid index");
      }
      return current_nod.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
      let current_nod = this.head;
      while(idx){
          current_nod = current_nod.next;
          idx--;
      }
      if(!current_nod){
          throw new Error('Not a valid index');
      }
      current_nod.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
      let current_nod = this.head;
      let count = 0;

      while(current_nod !== null && count != idx){
          count += 1;
          current_nod = current_nod.next;
      }
      return current_nod;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
		if (idx < 0 || idx >= this.length) throw new Error('Invalid Index');
		if (idx === 0) return this.shift();
		if (idx === this.length - 1) return this.pop();

		const before = this.getAt(idx - 1);
		const removedNode = this.getAt(idx);
		before.next = removedNode.next;
		removedNode.next = null;

		this.length--;
		return removedNode;
  }

  /** average(): return an average of all values in the list */

  average() {
		let currNode = this.head;
		let total = 0,
			count = 0;

		if (!currNode) {
			return 0;
		}

		while (currNode) {
			total += currNode.val;
			count += 1;
			currNode = currNode.next;
		}

		return total / count;
	}
}

module.exports = LinkedList;


// const newN = new Node('a');
// console.log(newN.val);
// console.log(newN.next); 
// console.log(newN.Node); 