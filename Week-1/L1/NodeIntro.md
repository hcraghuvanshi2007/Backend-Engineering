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

#### 🔄 HTTP Request–Response Flow

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
