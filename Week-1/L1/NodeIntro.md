## Introduction to Node.js
⇒ Node.js **is not a programming language or a framework**, but rather a JavaScript runtime environment that allows developers to run JavaScript outside a browser(ex: machine or servers).  
* Created by Ryan Dahl in 2009
* Built on the Chrome V8 JavaScript engine for speed and efficiency.
*  Node.js is a free, open-source, cross-platform.  
    * Open Source → that the source code is available for anyone to view, modify, and distribute. This allows developers to contribute to the project and improve it over time.
    * Cross-platform → Node.js can run on multiple operating systems without needing major changes.(ex: Windows, Linux, macOS)  

#### Why Node.js ?
1. Before Node.js, you needed different languages for frontend (JS) and backend (Python/Java) → Node.js enables **Full-Stack JavaScript**, allowing the same language to be used across the entire application.
2. Node.js uses **asynchronous** (non-blocking) programming. 
   * This means it can keep working while waiting for tasks like reading files or talking to a database. 
   * With asynchronous code, Node.js can handle many things at once-making it fast and efficient.

---

### Js runtime environment:
→ It refers to the **environment in which JavaScript code is executed.**   
In a browser, the runtime environment is provided by the browser itself, while in Node.js, it is provided by the Node.js runtime.  
* **In browsers:** JavaScript typically runs in the browser(like chrome or firefox) to handle tasks.  
* **With Node.js:** It allows JS to **run outside the browser, on the server.**
  * It provides tools to interact with the system, like:
    * File System (read/write files)
    * Network(handle HTTP requests)
    * Database(connect to databases like MongoDB or MySQL)
    
---

### REPL: (Read-Evaluate-Print-Loop)
1. **Read**: The REPL reads the user's input (a single or multiple lines of code) and convert it into a data structure that the JavaScript engine can understand.
2. **Eval(Evaluate)**: The converted input is evaluated(executed) by the JS engine. If the input is a valid expression , the REPL computes the result.
3. **Print**: The result of the evaluated expression is printed back to the user.
4. **Loop**: The process then loops back, waiting for the next input and continues until user exits.

**Example:**  

PS D:\Desktop\Web-Dev-3> node

Welcome to Node.js v25.2.1.
Type ".help" for more information.

1. > console.log("hey")  
hey  
undefined

2. > 89**2  
7921

(To exit, press Ctrl+C again or Ctrl+D or type .exit)

---
### What is HTTP?
→ HTTP (HyperText Transfer Protocol) is the foundation of web communication.  
* It defines how messages are formatted and transmitted between clients and servers. Every time you visit a website, HTTP is working.  

####  HTTP Request–Response Flow:

| Step | Phase | Key Actions & Components |
|:---:|:---|:---|
| **1** | **Client Request** | **Components:** Method (`GET`, `POST`, etc.), URL, Headers, and optional Body. |
| **2** | **Network** | **DNS Lookup:** Finds IP address. <br> **TCP/TLS Handshake:** Establishes secure connection. |
| **3** | **Server Processing** | **Node.js/Express:** Parses request, executes route handler, and interacts with DB/Files. |
| **4** | **Server Response** | **Components:** Status Code (`200 OK`, `404`), Headers, and Body (`JSON`, `HTML`). |
| **5** | **Client Rendering** | **Browser:** Parses HTML/CSS/JS and renders the final User Interface (UI). |

---

#### 💡 Detailed Breakdown

**1. Client sends HTTP Request**
*   **Method:** Action to be performed (`GET` to read, `POST` to create).
*   **URL:** The resource address (Endpoint).
*   **Headers:** Metadata (e.g., `Content-Type: application/json`, `Authorization`).
*   **Body:** Data being sent to the server (common in `POST`, `PUT`, `PATCH`).

**2. Network & Transport**
*   **DNS (Domain Name System):** Translates a domain name (e.g., `google.com`) to an IP address.
*   **TCP Handshake:** A process to ensure a reliable connection between client and server.

**3. Server Processing (Node.js specific)**
*   **Parsing:** The Node.js `http` module or `Express` parses raw data into `req` (Request) and `res` (Response) objects.
*   **Asynchronous I/O:** Node handles the request logic (e.g., database query) without blocking other incoming requests.

**4. Server sends HTTP Response**
*   **Status Codes:** 
    * `2xx` - Success (e.g., 200 OK)
    * `4xx` - Client Error (e.g., 404 Not Found)
    * `5xx` - Server Error (e.g., 500 Internal Server Error)
*   **Body:** The actual content (JSON, HTML, or images).

**5. Client receives and displays**
*   **Parsing:** The browser builds the DOM (Document Object Model).
*   **Rendering:** The browser's engine draws the page and executes client-side JavaScript.

#### HTTP Methods:

→ HTTP methods define what action the client wants the server to perform on a resource.

| Method | Purpose | Has Body? | Idempotent? | Example Use |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | Retrieve data | No | Yes | Fetch user list |
| **POST** | Create a new resource | Yes | No | Register a user |
| **PUT** | Replace entire resource | Yes | Yes | Update full profile |
| **PATCH** | Partially update a resource | Yes | Yes | Change only email |
| **DELETE** | Remove a resource | No | Yes | Delete a post |
| **HEAD** | Like GET but no response body | No | Yes | Check if file exists |
| **OPTIONS** | Describe available methods (CORS) | No | Yes | CORS preflight check |

### HTTP Status Codes:
* HTTP Status Codes are 3-digit numbers sent by the server to tell the client whether the request was successful or not.
* They're essential for error handling.

#### 📊 Status Code Categories:

| Range | Type | Meaning |
|:---|:---|:---|
| **1xx** | Informational | Request received; continuing process. |
| **2xx** | Success | Action successfully received and accepted. |
| **3xx** | Redirection | Further action needed to complete request. |
| **4xx** | Client Error | Request contains bad syntax or is invalid. |
| **5xx** | Server Error | Server failed to fulfill a valid request. |

#### 🛠️ Common Status Codes:

| Code | Status | Description |
|:---|:---|:---|
| **100** | Continue | Initial part of request received; client can continue. |
| **200** | OK | Request was successful. |
| **201** | Created | A new resource was successfully created. |
| **204** | No Content | Request successful, but no content to return. |
| **301** | Moved Permanently | Resource has permanently moved to a new URL. |
| **302** | Found (Temporary) | Resource is temporarily at a different URL. |
| **400** | Bad Request | Request is invalid or malformed. |
| **401** | Unauthorized | Authentication is required or has failed (Who are you?). |
| **403** | Forbidden | Server understands but refuses to authorize access (What can you do?). |
| **404** | Not Found | Requested resource could not be found. |
| **409** | Conflict | Request conflicts with current state of the server. |
| **429** | Too Many Requests | Client has sent too many requests (Rate Limiting). |
| **500** | Internal Server Error | Server encountered an unexpected condition. |
| **502** | Bad Gateway | Invalid response from an upstream server. |
| **503** | Service Unavailable | Server is overloaded or down for maintenance. |
| **504** | Gateway Timeout | Upstream server failed to send a timely response. |


#### HTTP Headers:
→ They are key-value pairs carrying metadata about the request or response. They tell the server and client extra information beyond just the data.

Imagine you are sending a courier parcel:  
The parcel contains your gift (the main data), but there is also a label attached with:
* Sender Name
* Receiver Address
* Fragile
* Weight

These labels don’t change the gift, but they tell the courier how to handle it.  
HTTP Headers work exactly like these labels. ⇒ They carry extra information about the request or response.

#### HTTP Headers Flow : 
**Request Headers (Client → Server)**  
* User-Agent → Identifies the browser  
* Authorization → Authentication/token  
* Accept → Data type the client wants  

**Response Headers (Server → Client)**
* Set-Cookie → Stores cookies  
* Cache-Control → Controls caching  
* Server → Server information  

---

#### → Running JavaScript with Node.js:  

````// hello.js
console.log('Hello, Node.js!');

// Using a variable
const name = 'Web Development II';
console.log(`Welcome to ${name}`);

// Simple function
function greet(studentName) {
return `Hello, ${studentName}! Ready to learn Node.js?`;
}

console.log(greet('Alice'));

// Run it:
// node hello.js
````
---

### What is NPM?  
**NPM (Node Package Manager)** is the world's largest _**software library**_ for JavaScript.  
It lets you install, manage, and share reusable code packages (libraries).  
There are 2M+ packages available  
**It helps developers:**

1. Install packages
2. Update packages
3. Remove packages
4. Share their own packages

**Simple Definition:**  
NPM is a tool used to install and manage JavaScript packages.

### Why NPM Matters ??

**Use Case :**  
Without npm, you'd code everything from scratch. npm gives you instant access to libraries solving every problem imaginable  

**Real-World Example :**  
* Express (50M+ downloads/week) = web server in one command.
* Mongoose = database toolkit.
* Axios = HTTP requests. All instantly available via npm
---
#### NPM Registry — What is it?
* The npm registry is a public online database of JavaScript packages.
* Located at: https://www.npmjs.com
* Anyone can publish a package to the registry.
* Packages can be: libraries, frameworks, CLI tools, utilities.
* Examples of popular packages:  

    | Package Name | Package Use Case |
    | :--- | :--- |
    | **Express** | Web framework (50M+ weekly downloads) |
    | **React** | UI library |
    | **nodemon** | Auto-restart development tool |
    | **mongoose** | MongoDB ODM |
    | **dotenv** | Environment variable loader |

---
#### → Did you know that JS behaves differently in the browser and in Node.js?
* ⇒ In chrome's console we can run window but not in node.js 
* ⇒ _**In Node.js, there is no window or document. Why?**_
  *  Because Node.js runs outside the browser-it doesn't deal with the DOM or browser-specific APIs.
* ⇒ Instead, Node.js has a **_global object_**. It's equivalent of the window in the browser but designed for a server-side environment.

---
### -> Global Object
The global object is an object that is automatically available everywhere in a JavaScript environment.

Think of it as:

    `The top-level object that contains things provided by the JavaScript runtime.`

For example, JavaScript provides functions/objects such as:  

````
setTimeout()
console
Math
JSON 
````
Some of these are accessible through the global object.

#### _1. Global Object in Browser:_
In a browser, the global object is:  

    window
For example:

    console.log(window);

You can access browser-global things through window:

    window.alert("Hello");
    
    window.setTimeout(() => {
    console.log("Hello");
    }, 1000);

And:

    console.log(window.document);

because the browser provides the DOM through window
#### _2. Global Object in Node.js:_

Node.js **doesn't use window**.

Instead, Node.js has:

    global

So:

    console.log(global);

will show Node's global object.

You can do:

    console.log(global.setTimeout);
    console.log(global.console);

Node provides things like:

    global
    ├── console
    ├── setTimeout
    ├── setInterval
    ├── clearTimeout
    ├── Buffer
    ├── process
    └── ...

So in Node:

    setTimeout(...)

is available directly, but conceptually it is also associated with the Node global environment.

You can write:

    global.setTimeout(() => {
    console.log("Hello");
    }, 1000);

but normally you simply write:

    setTimeout(() => {
    console.log("Hello");
    }, 1000);

### What is _globalThis_?
JavaScript runs in different environments:

    Browser       → window
    Node.js       → global
    Web Worker    → self

Instead of remembering different names, JavaScript provides a standard universal name:

    globalThis

So:

    console.log(globalThis);

works in modern browsers and Node.js.

Roughly:  

    Browser
        ↓
    globalThis == window

    Node.js
        ↓
    globalThis == global

Therefore:

    globalThis.console

works in both environments.

#### _-> global vs globalThis_

In Node.js:

    console.log(global === globalThis);

Output:

true

In a browser:

    console.log(window === globalThis);

Output:

true

So:

                 globalThis
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
      Browser               Node.js
          ↓                   ↓
       window               global

* _globalThis_ is the standard cross-environment way to refer to the global object.


