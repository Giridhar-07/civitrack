==> Available at your primary URL https://civitrack.onrender.com
==> 
==> ///////////////////////////////////////////////////////////
Email configuration error details: Error: Connection timeout
    at SMTPConnection._formatError (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:809:19)
    at SMTPConnection._onError (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:795:20)
    at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:237:22)
    at listOnTimeout (node:internal/timers:588:17)
    at process.processTimers (node:internal/timers:523:7) {
  code: 'ETIMEDOUT',
  command: 'CONN'
}
info: request {"duration":1,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T12:43:46.836Z","url":"/","userAgent":"Go-http-client/2.0"}
Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
    at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
    at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
    at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
    at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
  status: 404,
  statusText: 'Not Found',
  errorDetails: undefined
}
info: request {"duration":346,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":200,"timestamp":"2025-09-30T12:43:55.684Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
warn: request {"duration":1536,"ip":"10.229.191.1","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T12:43:56.881Z","url":"/api/issues","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
warn: request {"duration":1243,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:43:57.124Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":334,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:43:57.575Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":330,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:43:58.013Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":329,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:43:58.631Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":331,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:43:59.074Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":330,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:43:59.525Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":329,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:44:00.002Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":329,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:44:00.452Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":331,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:44:00.981Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}

Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":330,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:46:50.063Z","url":"/api/issues/nearby?latitude=16.838883113426654&longitude=75.7112503051758&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":329,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:46:51.346Z","url":"/api/issues/nearby?latitude=16.838883113426654&longitude=75.7112503051758&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
    at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
    at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
    at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
    at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
  status: 404,
  statusText: 'Not Found',
  errorDetails: undefined
}
info: request {"duration":110,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T12:46:51.486Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":335,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T12:46:51.714Z","url":"/api/issues?page=1&limit=9","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Static file request: GET /uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png
info: request {"duration":2,"ip":"10.229.170.66","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T12:46:52.129Z","url":"/uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":330,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-09-30T12:46:52.185Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":329,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:46:52.746Z","url":"/api/issues/nearby?latitude=16.838883113426654&longitude=75.7112503051758&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":327,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:46:54.299Z","url":"/api/issues/nearby?latitude=16.838883113426654&longitude=75.7112503051758&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":329,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:46:56.048Z","url":"/api/issues/nearby?latitude=16.838883113426654&longitude=75.7112503051758&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:46:58.061Z","url":"/api/issues/nearby?latitude=16.838883113426654&longitude=75.7112503051758&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":328,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:00.282Z","url":"/api/issues/nearby?latitude=16.838883113426654&longitude=75.7112503051758&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
    at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
    at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
    at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
    at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
  status: 404,
  statusText: 'Not Found',
  errorDetails: undefined
}
info: request {"duration":114,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T12:47:08.538Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":166,"ip":"10.229.191.1","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-09-30T12:47:08.599Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
    at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
    at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
    at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
    at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
  status: 404,
  statusText: 'Not Found',
  errorDetails: undefined
}
info: request {"duration":107,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T12:47:15.615Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":167,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-09-30T12:47:15.671Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":329,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:17.339Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":328,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:18.327Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":329,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:18.929Z","url":"/api/issues/nearby?latitude=16.831675460763794&longitude=75.73948667590895&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":328,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:19.588Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:19.906Z","url":"/api/issues/nearby?latitude=16.831675460763794&longitude=75.73948667590895&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:20.892Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":328,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:20.905Z","url":"/api/issues/nearby?latitude=16.831675460763794&longitude=75.73948667590895&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":330,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:21.598Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":329,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:21.977Z","url":"/api/issues/nearby?latitude=16.831675460763794&longitude=75.73948667590895&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":327,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:22.046Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:22.648Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:23.264Z","url":"/api/issues/nearby?latitude=16.831675460763794&longitude=75.73948667590895&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":329,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:23.360Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":327,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:23.658Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":329,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:24.562Z","url":"/api/issues/nearby?latitude=16.831675460763794&longitude=75.73948667590895&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":330,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:24.764Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":444,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:24.884Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":329,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:25.932Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":465,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:26.246Z","url":"/api/issues/nearby?latitude=16.831675460763794&longitude=75.73948667590895&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:27.395Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:27.397Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":328,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:28.390Z","url":"/api/issues/nearby?latitude=16.831675460763794&longitude=75.73948667590895&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":328,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:29.397Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":328,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:29.399Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":345,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:30.424Z","url":"/api/issues/nearby?latitude=16.831675460763794&longitude=75.73948667590895&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:31.408Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:31.410Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":327,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:32.518Z","url":"/api/issues/nearby?latitude=16.831675460763794&longitude=75.73948667590895&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:33.436Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":329,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:34.393Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
info: request {"duration":328,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:35.405Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":329,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:35.408Z","url":"/api/issues/nearby?latitude=16.831675460763794&longitude=75.73948667590895&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:38.452Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
    at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
    at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
    at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
    at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
  status: 404,
  statusText: 'Not Found',
  errorDetails: undefined
}
info: request {"duration":124,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T12:47:45.625Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":327,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:52.416Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":327,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:53.408Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":327,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:55.402Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:57.396Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:47:59.402Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":327,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:48:01.405Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:48:03.454Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":328,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:48:05.408Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":327,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:48:07.369Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:48:09.389Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:48:12.380Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
    at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
    at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
    at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
    at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
  status: 404,
  statusText: 'Not Found',
  errorDetails: undefined
}
info: request {"duration":122,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T12:48:16.207Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":329,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:48:22.405Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":333,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:48:23.405Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":326,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:48:25.395Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
    at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
info: request {"duration":330,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T12:48:27.391Z","url":"/api/issues/nearby?latitude=16.834775542012125&longitude=75.71880340576173&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>' 

info: request {"duration":110,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T12:48:50.804Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Attempting to send password reset email to: clown7g7@gmail.com
Email sending attempt 1 failed, retrying in 1000ms...
Attempting to send password reset email to: clown7g7@gmail.com
Email sending attempt 2 failed, retrying in 2000ms...
Email sending attempt 1 failed, retrying in 1000ms...
Email sending attempt 3 failed, retrying in 4000ms...
Attempting to send password reset email to: clown7g7@gmail.com
Email sending attempt 2 failed, retrying in 2000ms...
Error sending password reset email: Error: Email sending timeout
    at Timeout._onTimeout (/opt/render/project/src/backend/dist/utils/email.js:91:37)
    at listOnTimeout (node:internal/timers:588:17)
    at process.processTimers (node:internal/timers:523:7)
Password reset request error: Error: Failed to send password reset email
    at sendPasswordResetEmail (/opt/render/project/src/backend/dist/utils/email.js:203:19)
    at async requestPasswordReset (/opt/render/project/src/backend/dist/controllers/authController.js:563:9)
warn: request {"duration":67391,"ip":"10.229.191.1","method":"POST","route":"/request-password-reset","service":"performance-monitor","status":200,"timestamp":"2025-09-30T12:50:05.753Z","url":"/api/auth/request-password-reset","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Email sending attempt 1 failed, retrying in 1000ms...
Email sending attempt 3 failed, retrying in 4000ms...
Attempting to send password reset email to: clown7g7@gmail.com
Email sending attempt 2 failed, retrying in 2000ms...