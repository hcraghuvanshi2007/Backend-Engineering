### How Node.js Works??
#### What is Node.js Architecture?
Node.js uses a single-threaded, event-driven architecture that is designed to handle many connections at once, efficiently and without blocking the main thread.

This makes Node.js ideal for building scalable network applications, real-time apps, and APIs

#### Node.js Architecture Diagram

1. **Client Request Phase**

* Clients send requests to the Node.js server
* Each request is added to the Event Queue 

2. **Event Loop Phase**

* The Event Loop continuously checks the Event Queue
* Picks up requests one by one in a loop
3. **Request Processing**

* Simple (non-blocking) tasks are handled immediately by the main thread
* Complex/blocking tasks are offloaded to the Thread Pool
4. **Response Phase**

* When blocking tasks complete, their callbacks are placed in the Callback Queue
* Event Loop processes callbacks and sends responses

#### Why it is not good to use _multiple blocking operations_ in Node.js?

```bash
// Blocking code example

console.log('Start of blocking code');
const data = fs.readFileSync('myfile.txt', 'utf8'); // Blocks here
console.log('Blocking operation completed');

// Non-blocking code example

console.log('Start of non-blocking code');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
if (err) throw err;
console.log('Non-blocking operation completed');
});
console.log('This runs before the file is read');
```

* **Key Difference:** The first example blocks the entire process until the file is read, while the second example allows other operations to continue while the file is being read.

**Key Benefits:**
1. Handles many concurrent connections efficiently
2. Great for **I/O-bound applications**
3. Uses JavaScript on both client and server
4. Large ecosystem of packages (npm)
4. Large ecosystem of packages (npm)
### What is Event Loop?
The event loop is what makes Node.js non-blocking and efficient.
#### How the Event Loop Works?
Node.js follows these steps to handle operations:

1. Execute the main script (**synchronous** code)
2. Process any **microtasks** (Promises, process.nextTick)
3. Execute **timers** (setTimeout, setInterval)
4. Run **I/O callbacks** (file system, network operations)
5. Process **setImmediate** callbacks
6. Handle **close events** (like socket.on('close'))
yoooo
## Node.js Priority Order (Highest → Lowest)
1. Synchronous Code
2. `process.nextTick()`
3. Promise Microtasks
    * `.then()`
