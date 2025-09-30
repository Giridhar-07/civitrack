2025-09-30T13:16:39.698419067Z ==> Downloading cache...
2025-09-30T13:16:39.700500195Z ==> Cloning from https://github.com/Giridhar-07/civitrack
2025-09-30T13:16:40.532818932Z ==> Checking out commit 612cf5ce7cbbd731fab76ca83ee14d1d3ea3e548 in branch dev
2025-09-30T13:16:50.799690678Z ==> Transferred 111MB in 7s. Extraction took 3s.
2025-09-30T13:16:54.938510009Z ==> Using Node.js version 22.16.0 (default)
2025-09-30T13:16:54.962281416Z ==> Docs on specifying a Node.js version: https://render.com/docs/node-version
2025-09-30T13:16:55.025159197Z ==> Running build command 'NODE_ENV=development npm install && npm run build'...
2025-09-30T13:16:56.272330438Z 
2025-09-30T13:16:56.272354219Z up to date, audited 841 packages in 1s
2025-09-30T13:16:56.27235971Z 
2025-09-30T13:16:56.272376731Z 89 packages are looking for funding
2025-09-30T13:16:56.272379301Z   run `npm fund` for details
2025-09-30T13:16:56.274025386Z 
2025-09-30T13:16:56.274036777Z found 0 vulnerabilities
2025-09-30T13:16:56.441418644Z 
2025-09-30T13:16:56.441438146Z > civitrack-backend@1.0.0 build
2025-09-30T13:16:56.441442056Z > tsc
2025-09-30T13:16:56.441444256Z 
2025-09-30T13:17:13.891846669Z ==> Uploading build...
2025-09-30T13:17:20.681708283Z ==> Uploaded in 4.2s. Compression took 2.6s
2025-09-30T13:17:20.707613893Z ==> Build successful 🎉
2025-09-30T13:19:24.860988488Z ==> Deploying...
2025-09-30T13:19:40.91699101Z ==> Running 'npm start'
2025-09-30T13:19:42.021541239Z 
2025-09-30T13:19:42.02157434Z > civitrack-backend@1.0.0 start
2025-09-30T13:19:42.021580791Z > node dist/index.js
2025-09-30T13:19:42.021583501Z 
2025-09-30T13:19:44.509324157Z [dotenv@17.2.2] injecting env (0) from .env -- tip: ⚙️  suppress all logs with { quiet: true }
2025-09-30T13:19:45.518183998Z Email Config Status:
2025-09-30T13:19:45.518205789Z   EMAIL_HOST: smtp.gmail.com
2025-09-30T13:19:45.518215669Z   EMAIL_PORT: 587
2025-09-30T13:19:45.518218949Z   EMAIL_USER: noreplycivitrack@gmail.com
2025-09-30T13:19:45.518228149Z   EMAIL_FROM: CiviTrack <noreply@civitrack.com>
2025-09-30T13:19:45.518316121Z   APP_URL: https://civitrack-dev.netlify.app
2025-09-30T13:19:46.820752299Z Express trust proxy enabled for serverless environment
2025-09-30T13:19:46.907518483Z Allowed CORS origins: [
2025-09-30T13:19:46.907545914Z   'http://localhost:3000',
2025-09-30T13:19:46.907548844Z   'http://127.0.0.1:3000',
2025-09-30T13:19:46.907551014Z   'http://localhost:5173',
2025-09-30T13:19:46.907553384Z   'http://127.0.0.1:5173',
2025-09-30T13:19:46.907555364Z   'http://localhost:3001',
2025-09-30T13:19:46.907557404Z   'http://127.0.0.1:3001',
2025-09-30T13:19:46.907560024Z   'https://civitrack-dev.netlify.app'
2025-09-30T13:19:46.907562074Z ]
2025-09-30T13:19:47.512569238Z Redis is explicitly disabled via DISABLE_REDIS environment variable
2025-09-30T13:19:50.934413863Z Database connection has been established successfully.
2025-09-30T13:19:50.936005447Z Server running on port 10000
2025-09-30T13:19:50.936069128Z Environment: production
2025-09-30T13:19:50.936072839Z Render deployment: true
2025-09-30T13:19:50.936075828Z WebSocket server initialized
2025-09-30T13:19:50.936078479Z Performance monitoring enabled
2025-09-30T13:19:51.291031712Z info: request {"duration":5,"ip":"::1","method":"HEAD","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T13:19:51.289Z","url":"/","userAgent":"Go-http-client/1.1"}
2025-09-30T13:19:56.630304213Z ==> Your service is live 🎉
2025-09-30T13:19:56.666357963Z ==> 
2025-09-30T13:19:56.697137023Z ==> ///////////////////////////////////////////////////////////
2025-09-30T13:19:56.730003553Z ==> 
2025-09-30T13:19:56.760919783Z ==> Available at your primary URL https://civitrack.onrender.com
2025-09-30T13:19:56.790440482Z ==> 
2025-09-30T13:19:56.819671492Z ==> ///////////////////////////////////////////////////////////
2025-09-30T13:19:57.765108597Z Attempting to send password reset email to: clown7g7@gmail.com
2025-09-30T13:20:00.324235508Z info: request {"duration":1,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T13:20:00.323Z","url":"/","userAgent":"Go-http-client/2.0"}
2025-09-30T13:20:17.716387799Z Email configuration error details: Error: Connection timeout
2025-09-30T13:20:17.716409689Z     at SMTPConnection._formatError (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:809:19)
2025-09-30T13:20:17.716415939Z     at SMTPConnection._onError (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:795:20)
2025-09-30T13:20:17.716420259Z     at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:237:22)
2025-09-30T13:20:17.71642459Z     at listOnTimeout (node:internal/timers:588:17)
2025-09-30T13:20:17.7164288Z     at process.processTimers (node:internal/timers:523:7) {
2025-09-30T13:20:17.71643337Z   code: 'ETIMEDOUT',
2025-09-30T13:20:17.71643729Z   command: 'CONN'
2025-09-30T13:20:17.71644105Z }
2025-09-30T13:20:24.978622515Z Attempting to send password reset email to: clown7g7@gmail.com
2025-09-30T13:20:27.942615847Z Email sending attempt 1 failed, retrying in 3000ms...
2025-09-30T13:20:51.367421041Z Attempting to send password reset email to: clown7g7@gmail.com
2025-09-30T13:20:55.148237017Z Email sending attempt 1 failed, retrying in 3000ms...
2025-09-30T13:21:00.945065129Z Email sending attempt 2 failed, retrying in 6000ms...
2025-09-30T13:21:17.169476642Z Attempting to send password reset email to: clown7g7@gmail.com
2025-09-30T13:21:19.309748655Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent: [404 Not Found] models/gemini-1.0-pro is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T13:21:19.309768816Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T13:21:19.309772196Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T13:21:19.309774936Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T13:21:19.309777986Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T13:21:19.309780956Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
2025-09-30T13:21:19.309784746Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T13:21:19.31028582Z   status: 404,
2025-09-30T13:21:19.31029216Z   statusText: 'Not Found',
2025-09-30T13:21:19.31029527Z   errorDetails: undefined
2025-09-30T13:21:19.31029792Z }
2025-09-30T13:21:19.310988549Z info: request {"duration":229,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:21:19.310Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:21.536089185Z Email sending attempt 1 failed, retrying in 3000ms...
2025-09-30T13:21:21.699147026Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent: [404 Not Found] models/gemini-1.0-pro is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T13:21:21.699167417Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T13:21:21.699173557Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T13:21:21.699178387Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T13:21:21.699183007Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T13:21:21.699187507Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
2025-09-30T13:21:21.699192847Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T13:21:21.699197337Z   status: 404,
2025-09-30T13:21:21.699202368Z   statusText: 'Not Found',
2025-09-30T13:21:21.699206628Z   errorDetails: undefined
2025-09-30T13:21:21.699210608Z }
2025-09-30T13:21:21.699966078Z info: request {"duration":74,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:21:21.699Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:22.462538997Z info: request {"duration":350,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:21:22.462Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:23.37842197Z Static file request: GET /uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png
2025-09-30T13:21:23.380504547Z info: request {"duration":2,"ip":"10.229.12.1","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T13:21:23.380Z","url":"/uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:25.08922603Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:21:25.089255711Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:21:25.089258801Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:21:25.089261142Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:25.089263291Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:25.089265522Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:25.089267652Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:25.089270032Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:25.089272392Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:25.089275332Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:25.089277632Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:25.090197837Z info: request {"duration":339,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:21:25.089Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:26.036312651Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:21:26.036331541Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:21:26.036334592Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:21:26.036337261Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:26.036339332Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:26.036341402Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:26.036343432Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:26.036345422Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:26.036347772Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:26.036349772Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:26.036351872Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:26.037309128Z info: request {"duration":332,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:21:26.036Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:27.080685125Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:21:27.080728436Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:21:27.080733977Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:21:27.080736477Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:27.080738957Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:27.080741267Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:27.080743717Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:27.080746197Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:27.080748607Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:27.080751007Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:27.080753757Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:27.08232381Z info: request {"duration":332,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:21:27.081Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:28.153336547Z Email sending attempt 2 failed, retrying in 6000ms...
2025-09-30T13:21:28.204339648Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:21:28.204365879Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:21:28.204368229Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:21:28.204370419Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:28.204372169Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:28.2043739Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:28.204375709Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:28.2043776Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:28.204379529Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:28.20438162Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:28.20438336Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:28.205372157Z info: request {"duration":332,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:21:28.205Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:30.344056189Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:21:30.344075229Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:21:30.344078789Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:21:30.344081599Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:30.344084359Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:30.34408675Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:30.344089519Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:30.344092219Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:30.34409458Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:30.34409705Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:30.34409934Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:30.344653105Z info: request {"duration":332,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:21:30.344Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:32.367117273Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:21:32.367154514Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:21:32.367158004Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:21:32.367160614Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:32.367162844Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:32.367165064Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:32.367167224Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:32.367169294Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:32.367171344Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:32.367173384Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:32.367175454Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:32.367828452Z info: request {"duration":332,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:21:32.367Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:34.378326851Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:21:34.378351481Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:21:34.378353692Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:21:34.378368392Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:34.378370332Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:34.378372102Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:34.378373812Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:34.378375552Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:34.378377202Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:34.378378842Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:34.378380622Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:34.379211005Z info: request {"duration":331,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:21:34.378Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:36.364733678Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:21:36.364762639Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:21:36.364765289Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:21:36.364767409Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:36.364769149Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:36.364770949Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:36.364772599Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:36.364774379Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:36.364776009Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:36.364777629Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:36.364784799Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:36.365357935Z info: request {"duration":332,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:21:36.365Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:36.946750545Z Email sending attempt 3 failed, retrying in 12000ms...
2025-09-30T13:21:38.343268069Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:21:38.343292819Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:21:38.343295099Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:21:38.343296839Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:38.34329894Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:38.34330068Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:38.34331543Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:38.34331747Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:38.34331919Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:38.34332085Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:38.34332254Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:38.343952917Z info: request {"duration":332,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:21:38.343Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:40.372482763Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:21:40.372495403Z info: request {"duration":335,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:21:40.371Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:40.372512734Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:21:40.372515654Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:21:40.372518844Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:40.372521314Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:40.372523994Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:40.372526434Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:40.372528844Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:40.372531364Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:40.372533984Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:40.372539005Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:41.264804999Z Attempting to send password reset email to: clown7g7@gmail.com
2025-09-30T13:21:43.360348457Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:21:43.360385818Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:21:43.360389658Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:21:43.360392658Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:43.360395348Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:43.360397928Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:43.360400518Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:43.360403108Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:43.360406008Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:43.360422359Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:43.360425579Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:43.36157779Z info: request {"duration":332,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:21:43.361Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:47.336399573Z Email sending attempt 1 failed, retrying in 3000ms...
2025-09-30T13:21:52.146745381Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent: [404 Not Found] models/gemini-1.0-pro is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T13:21:52.146765852Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T13:21:52.146769292Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T13:21:52.146771932Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T13:21:52.146774052Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T13:21:52.146776132Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
2025-09-30T13:21:52.146779062Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T13:21:52.146781232Z   status: 404,
2025-09-30T13:21:52.146783922Z   statusText: 'Not Found',
2025-09-30T13:21:52.146786062Z   errorDetails: undefined
2025-09-30T13:21:52.146788162Z }
2025-09-30T13:21:52.147455691Z info: request {"duration":103,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:21:52.147Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:54.539345576Z Email sending attempt 2 failed, retrying in 6000ms...
2025-09-30T13:21:56.362995772Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:21:56.363017433Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:21:56.363022393Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:21:56.363027233Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:56.363031603Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:56.363035783Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:56.363040063Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:56.363044264Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:56.363048633Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:56.363052814Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:56.363066964Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:56.363327351Z info: request {"duration":332,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:21:56.363Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:57.35323257Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:21:57.353266122Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:21:57.353270002Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:21:57.353273242Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:57.353275692Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:57.353278382Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:57.353280982Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:57.353283562Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:57.353286002Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:57.353288432Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:57.353291342Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:57.3539273Z info: request {"duration":331,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:21:57.353Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:21:59.345954484Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:21:59.345982535Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:21:59.345985845Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:21:59.345988865Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:59.345991765Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:59.345994336Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:59.345997225Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:59.345999776Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:59.346002416Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:59.346004846Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:59.346007676Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:21:59.346853809Z info: request {"duration":332,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:21:59.346Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:22:01.386463932Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:22:01.386496783Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:22:01.386502263Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:22:01.386506553Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:01.386510423Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:01.386514264Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:01.386518233Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:01.386521844Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:01.386525464Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:01.386529054Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:01.386532724Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:01.387100549Z info: request {"duration":337,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:22:01.386Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:22:03.324559905Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:22:03.324590956Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:22:03.324596336Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:22:03.324600616Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:03.324604606Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:03.324608506Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:03.324612246Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:03.324616477Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:03.324620447Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:03.324624467Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:03.324628377Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:03.325240834Z info: request {"duration":331,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:22:03.325Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:22:04.155367442Z Email sending attempt 3 failed, retrying in 12000ms...
2025-09-30T13:22:05.350125713Z info: request {"duration":338,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:22:05.347Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:22:05.350132513Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:22:05.350158013Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:22:05.350160593Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:22:05.350162874Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:05.350164934Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:05.350166883Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:05.350168904Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:05.350170984Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:05.350173034Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:05.350175034Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:05.350177084Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:07.347934957Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:22:07.347962428Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:22:07.347964968Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:22:07.347969618Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:07.347971798Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:07.347973858Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:07.347975958Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:07.347978069Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:07.347980158Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:07.347982189Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:07.347984249Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:07.348630736Z info: request {"duration":332,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:22:07.348Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:22:07.934766237Z Attempting to send password reset email to: clown7g7@gmail.com
2025-09-30T13:22:09.37187628Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:22:09.372008954Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:22:09.372013064Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:22:09.372016214Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:09.372019184Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:09.372029524Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:09.372032354Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:09.372035134Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:09.372037614Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:09.372040225Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:09.372043145Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:09.373064063Z info: request {"duration":332,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:22:09.372Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:22:11.346522559Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:22:11.346544329Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:22:11.34654832Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:22:11.346551Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:11.34655366Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:11.34655624Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:11.3465587Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:11.34656165Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:11.34656418Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:11.34656666Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:11.3465693Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:11.347356612Z info: request {"duration":332,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:22:11.347Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:22:11.43281092Z Email sending attempt 1 failed, retrying in 3000ms...
2025-09-30T13:22:13.369062474Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:22:13.369081895Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:22:13.369084815Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:22:13.369087185Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:13.369089485Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:13.369091715Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:13.369093985Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:13.369096265Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:13.369108405Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:13.369110776Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:13.369113106Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:13.369574948Z info: request {"duration":332,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:22:13.369Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:22:16.376902894Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:22:16.376920944Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:22:16.376923824Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:22:16.376926245Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:16.376928865Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:16.376931265Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:16.376933985Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:16.376936465Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:16.376939005Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:16.376941885Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:16.376944455Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:22:16.3774993Z info: request {"duration":331,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:22:16.377Z","url":"/api/issues/nearby?latitude=16.83238875&longitude=75.73934949999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:22:18.950273302Z Email sending attempt 4 failed, retrying in 24000ms...
2025-09-30T13:22:20.33768051Z Email sending attempt 2 failed, retrying in 6000ms...
2025-09-30T13:22:22.129797792Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent: [404 Not Found] models/gemini-1.0-pro is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T13:22:22.129818433Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T13:22:22.129823673Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T13:22:22.129827903Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T13:22:22.129832163Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T13:22:22.129870014Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
2025-09-30T13:22:22.129875694Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T13:22:22.129891415Z   status: 404,
2025-09-30T13:22:22.129894825Z   statusText: 'Not Found',
2025-09-30T13:22:22.129897295Z   errorDetails: undefined