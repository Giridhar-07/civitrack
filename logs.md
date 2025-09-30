2025-09-30T15:23:52.630412084Z ==> Downloading cache...
2025-09-30T15:23:52.631946038Z ==> Cloning from https://github.com/Giridhar-07/civitrack
2025-09-30T15:23:53.641252114Z ==> Checking out commit 7b11deaa656036a3a9751bfbcd3209ac72f11585 in branch dev
2025-09-30T15:24:04.978312053Z ==> Transferred 111MB in 7s. Extraction took 3s.
2025-09-30T15:24:30.986537972Z ==> Using Node.js version 22.16.0 (default)
2025-09-30T15:24:31.010194013Z ==> Docs on specifying a Node.js version: https://render.com/docs/node-version
2025-09-30T15:24:31.074023495Z ==> Running build command 'NODE_ENV=development npm install && npm run build'...
2025-09-30T15:24:32.360802202Z 
2025-09-30T15:24:32.360831673Z up to date, audited 841 packages in 1s
2025-09-30T15:24:32.360837343Z 
2025-09-30T15:24:32.360848273Z 89 packages are looking for funding
2025-09-30T15:24:32.360853593Z   run `npm fund` for details
2025-09-30T15:24:32.361993869Z 
2025-09-30T15:24:32.362004509Z found 0 vulnerabilities
2025-09-30T15:24:32.530092078Z 
2025-09-30T15:24:32.530114889Z > civitrack-backend@1.0.0 build
2025-09-30T15:24:32.530119259Z > tsc
2025-09-30T15:24:32.530122949Z 
2025-09-30T15:24:41.906116331Z ==> Uploading build...
2025-09-30T15:24:49.301794827Z ==> Uploaded in 4.6s. Compression took 2.8s
2025-09-30T15:24:49.320297351Z ==> Build successful 🎉
2025-09-30T15:24:52.677247153Z ==> Deploying...
2025-09-30T15:25:20.073640676Z   'http://localhost:3001',
2025-09-30T15:25:20.073644566Z   'http://127.0.0.1:3001',
2025-09-30T15:25:20.073649447Z   'https://civitrack-dev.netlify.app'
2025-09-30T15:25:20.073653436Z ]
2025-09-30T15:25:20.587343915Z Redis is explicitly disabled via DISABLE_REDIS environment variable
2025-09-30T15:25:24.436108866Z Database connection has been established successfully.
2025-09-30T15:25:24.437548092Z Server running on port 10000
2025-09-30T15:25:24.437691034Z Environment: production
2025-09-30T15:25:24.437915138Z Render deployment: true
2025-09-30T15:25:24.437929739Z WebSocket server initialized
2025-09-30T15:25:24.437934089Z Performance monitoring enabled
2025-09-30T15:25:25.338081734Z info: request {"duration":5,"ip":"::1","method":"HEAD","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T15:25:25.336Z","url":"/","userAgent":"Go-http-client/1.1"}
2025-09-30T15:25:34.109265564Z ==> Your service is live 🎉
2025-09-30T15:25:34.141656031Z ==> 
2025-09-30T15:25:34.170149589Z ==> ///////////////////////////////////////////////////////////
2025-09-30T15:25:34.199123746Z ==> 
2025-09-30T15:25:34.228811814Z ==> Available at your primary URL https://civitrack.onrender.com
2025-09-30T15:25:34.257635481Z ==> 
2025-09-30T15:25:34.287185779Z ==> ///////////////////////////////////////////////////////////
2025-09-30T15:25:35.412131257Z info: request {"duration":3,"ip":"10.229.12.1","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T15:25:35.411Z","url":"/","userAgent":"Go-http-client/2.0"}
2025-09-30T15:25:51.075294876Z Email configuration error details: Error: Connection timeout
2025-09-30T15:25:51.075325537Z     at SMTPConnection._formatError (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:809:19)
2025-09-30T15:25:51.075334127Z     at SMTPConnection._onError (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:795:20)
2025-09-30T15:25:51.075370938Z     at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:237:22)
2025-09-30T15:25:51.075375818Z     at listOnTimeout (node:internal/timers:588:17)
2025-09-30T15:25:51.075379347Z     at process.processTimers (node:internal/timers:523:7) {
2025-09-30T15:25:51.075383348Z   code: 'ETIMEDOUT',
2025-09-30T15:25:51.075386898Z   command: 'CONN'
2025-09-30T15:25:51.075390458Z }
2025-09-30T15:30:29.492659274Z ==> Detected service running on port 10000
2025-09-30T15:30:29.635713938Z ==> Docs on specifying a port: https://render.com/docs/web-services#port-binding
2025-09-30T15:32:36.375780741Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T15:32:36.375815682Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T15:32:36.375840072Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T15:32:36.375843412Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T15:32:36.375845772Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T15:32:36.375848192Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T15:32:36.375850682Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T15:32:36.375853982Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T15:32:36.375856562Z   status: 404,
2025-09-30T15:32:36.375860112Z   statusText: 'Not Found',
2025-09-30T15:32:36.375862563Z   errorDetails: undefined
2025-09-30T15:32:36.375864723Z }
2025-09-30T15:32:36.471640682Z info: request {"duration":694,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":200,"timestamp":"2025-09-30T15:32:36.471Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T15:32:37.672263532Z warn: request {"duration":1930,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T15:32:37.671Z","url":"/api/issues","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T15:32:37.94503819Z warn: request {"duration":1668,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-09-30T15:32:37.944Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T15:32:38.061103215Z info: request {"duration":3,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-09-30T15:32:38.060Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T16:54:25.089476248Z ==> Running 'npm start'
2025-09-30T16:54:26.184794976Z 
2025-09-30T16:54:26.184823608Z > civitrack-backend@1.0.0 start
2025-09-30T16:54:26.184829258Z > node dist/index.js
2025-09-30T16:54:26.184831718Z 
2025-09-30T16:54:28.787560168Z [dotenv@17.2.2] injecting env (0) from .env -- tip: 📡 auto-backup env with Radar: https://dotenvx.com/radar
2025-09-30T16:54:29.981956363Z Email Config Status:
2025-09-30T16:54:29.981982834Z   EMAIL_HOST: smtp.gmail.com
2025-09-30T16:54:29.981995315Z   EMAIL_PORT: 587
2025-09-30T16:54:29.982004565Z   EMAIL_USER: noreplycivitrack@gmail.com
2025-09-30T16:54:29.982115402Z   EMAIL_FROM: CiviTrack <noreply@civitrack.com>
2025-09-30T16:54:29.982138444Z   APP_URL: https://civitrack-dev.netlify.app
2025-09-30T16:54:31.185511042Z Express trust proxy enabled for serverless environment
2025-09-30T16:54:31.188428989Z Allowed CORS origins: [
2025-09-30T16:54:31.18844728Z   'http://localhost:3000',
2025-09-30T16:54:31.188452021Z   'http://127.0.0.1:3000',
2025-09-30T16:54:31.188456441Z   'http://localhost:5173',
2025-09-30T16:54:31.188460681Z   'http://127.0.0.1:5173',
2025-09-30T16:54:31.188464641Z   'http://localhost:3001',
2025-09-30T16:54:31.188468602Z   'http://127.0.0.1:3001',
2025-09-30T16:54:31.188472862Z   'https://civitrack-dev.netlify.app'
2025-09-30T16:54:31.188477132Z ]
2025-09-30T16:54:31.887315981Z Redis is explicitly disabled via DISABLE_REDIS environment variable
2025-09-30T16:54:35.178636807Z Database connection has been established successfully.
2025-09-30T16:54:35.178667809Z Server running on port 10000
2025-09-30T16:54:35.17867314Z Environment: production
2025-09-30T16:54:35.17867748Z Render deployment: true
2025-09-30T16:54:35.17868164Z WebSocket server initialized
2025-09-30T16:54:35.17868591Z Performance monitoring enabled
2025-09-30T16:54:39.686828798Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T16:54:39.68686454Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T16:54:39.68687022Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T16:54:39.68687433Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T16:54:39.686878441Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T16:54:39.686882391Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T16:54:39.686886271Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T16:54:39.686891071Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T16:54:39.686894992Z   status: 404,
2025-09-30T16:54:39.686899362Z   statusText: 'Not Found',
2025-09-30T16:54:39.686903292Z   errorDetails: undefined
2025-09-30T16:54:39.686907012Z }
2025-09-30T16:54:39.784495539Z info: request {"duration":500,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:54:39.783Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:40.08454343Z info: request {"duration":792,"ip":"10.229.191.1","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:54:40.084Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:40.588490803Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T16:54:40.588514374Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T16:54:40.588517664Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T16:54:40.588520965Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T16:54:40.588523625Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T16:54:40.588526775Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T16:54:40.588529495Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T16:54:40.588533025Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T16:54:40.588535806Z   status: 404,
2025-09-30T16:54:40.588539736Z   statusText: 'Not Found',
2025-09-30T16:54:40.588542326Z   errorDetails: undefined
2025-09-30T16:54:40.588544546Z }
2025-09-30T16:54:40.682642571Z info: request {"duration":797,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:40.682Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:40.683833333Z warn: request {"duration":1478,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:40.683Z","url":"/api/issues/nearby?latitude=16.83158437389119&longitude=75.73951597279715&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:40.982149449Z warn: request {"duration":1443,"ip":"10.229.12.1","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:40.981Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:41.097740947Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T16:54:41.097760108Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T16:54:41.097763008Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T16:54:41.097765379Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T16:54:41.097777549Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T16:54:41.097779879Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T16:54:41.097782269Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T16:54:41.0977851Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T16:54:41.09778772Z   status: 404,
2025-09-30T16:54:41.09779026Z   statusText: 'Not Found',
2025-09-30T16:54:41.09779255Z   errorDetails: undefined
2025-09-30T16:54:41.09779492Z }
2025-09-30T16:54:41.098745568Z info: request {"duration":97,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:54:41.098Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:41.273408027Z warn: request {"duration":1887,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:41.273Z","url":"/api/issues/nearby?latitude=16.83411832231644&longitude=75.72961807250978&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:41.285268526Z info: request {"duration":901,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:41.284Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:41.329718431Z warn: request {"duration":1140,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:41.329Z","url":"/api/issues/nearby?latitude=16.83411832231644&longitude=75.72961807250978&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:41.445781308Z info: request {"duration":960,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:41.445Z","url":"/api/issues/nearby?latitude=16.83158437389119&longitude=75.73951597279715&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:41.866440771Z Static file request: GET /uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png
2025-09-30T16:54:41.870267373Z info: request {"duration":4,"ip":"10.229.170.66","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T16:54:41.870Z","url":"/uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:44.777483469Z info: request {"duration":3,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:44.777Z","url":"/api/issues/nearby?latitude=16.83411832231644&longitude=75.72961807250978&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:45.309475504Z Static file request: GET /uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png
2025-09-30T16:54:45.310853738Z info: request {"duration":1,"ip":"10.229.170.66","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T16:54:45.310Z","url":"/uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:01.99361069Z Email configuration error details: Error: Connection timeout
2025-09-30T16:55:01.993628551Z     at SMTPConnection._formatError (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:809:19)
2025-09-30T16:55:01.993632082Z     at SMTPConnection._onError (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:795:20)
2025-09-30T16:55:01.993635262Z     at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:237:22)
2025-09-30T16:55:01.993638132Z     at listOnTimeout (node:internal/timers:588:17)
2025-09-30T16:55:01.993640922Z     at process.processTimers (node:internal/timers:523:7) {
2025-09-30T16:55:01.993644062Z   code: 'ETIMEDOUT',
2025-09-30T16:55:01.993646912Z   command: 'CONN'
2025-09-30T16:55:01.993649712Z }
2025-09-30T16:55:04.368278103Z info: request {"duration":2,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:55:04.366Z","url":"/api/issues/nearby?latitude=16.83411832231644&longitude=75.72961807250978&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:06.338801813Z info: request {"duration":140,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:55:06.338Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:06.338864937Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T16:55:06.338872548Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T16:55:06.338877628Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T16:55:06.338881818Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T16:55:06.338935122Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T16:55:06.338940632Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T16:55:06.338944732Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T16:55:06.338949153Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T16:55:06.338953213Z   status: 404,
2025-09-30T16:55:06.338958213Z   statusText: 'Not Found',
2025-09-30T16:55:06.338962423Z   errorDetails: undefined
2025-09-30T16:55:06.338966414Z }
2025-09-30T16:55:07.408612165Z warn: request {"duration":1485,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:55:07.408Z","url":"/api/issues/nearby?latitude=16.846769400695802&longitude=75.71193695068361&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:08.002652356Z Static file request: GET /uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png
2025-09-30T16:55:08.003775134Z info: request {"duration":1,"ip":"10.229.170.66","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T16:55:08.003Z","url":"/uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:13.317256203Z info: request {"duration":333,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:55:13.316Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:13.889466694Z info: request {"duration":437,"ip":"10.229.12.1","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:55:13.887Z","url":"/api/issues?page=1&limit=9","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:13.98173277Z Static file request: GET /uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png
2025-09-30T16:55:13.982962765Z info: request {"duration":94,"ip":"10.229.170.66","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T16:55:13.982Z","url":"/uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:14.083723778Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T16:55:14.08374089Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T16:55:14.08374566Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T16:55:14.083769461Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T16:55:14.083773442Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T16:55:14.083777122Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T16:55:14.083780862Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T16:55:14.083784972Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T16:55:14.083788673Z   status: 404,
2025-09-30T16:55:14.083792773Z   statusText: 'Not Found',
2025-09-30T16:55:14.083796413Z   errorDetails: undefined
2025-09-30T16:55:14.083799993Z }
2025-09-30T16:55:14.083817664Z info: request {"duration":591,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:55:14.083Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:20.527723995Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T16:55:20.527752147Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T16:55:20.527756077Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T16:55:20.527758858Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T16:55:20.527761928Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T16:55:20.527764468Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T16:55:20.527767038Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T16:55:20.527770288Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T16:55:20.527772808Z   status: 404,
2025-09-30T16:55:20.527775788Z   statusText: 'Not Found',
2025-09-30T16:55:20.527778309Z   errorDetails: undefined
2025-09-30T16:55:20.527780869Z }
2025-09-30T16:55:20.528602299Z info: request {"duration":108,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:55:20.528Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:26.786079255Z Attempting to send password reset email to: clown7g7@gmail.com
2025-09-30T16:55:53.454166788Z Skipping duplicate email send within window for clown7g7@gmail.com|CiviTrack - Password Reset Request
2025-09-30T16:55:53.45420089Z Attempting to send password reset email to: clown7g7@gmail.com
2025-09-30T16:55:53.45420606Z Password reset email sent successfully: undefined
2025-09-30T16:55:53.45420956Z warn: request {"duration":1306,"ip":"10.229.12.1","method":"POST","route":"/request-password-reset","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:55:53.453Z","url":"/api/auth/request-password-reset","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:56.972650603Z Email send transient error (attempt 1). Retrying in 2433ms... ETIMEDOUT
2025-09-30T16:55:59.40596265Z Skipping duplicate email send within window for clown7g7@gmail.com|CiviTrack - Password Reset Request
2025-09-30T16:55:59.406062386Z Password reset email sent successfully: undefined
2025-09-30T16:55:59.406916918Z warn: request {"duration":32853,"ip":"10.229.170.66","method":"POST","route":"/request-password-reset","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:55:59.406Z","url":"/api/auth/request-password-reset","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:40.588517664Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T16:54:40.588520965Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T16:54:40.588523625Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T16:54:40.588526775Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T16:54:40.588529495Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T16:54:40.588533025Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T16:54:40.588535806Z   status: 404,
2025-09-30T16:54:40.588539736Z   statusText: 'Not Found',
2025-09-30T16:54:40.588542326Z   errorDetails: undefined
2025-09-30T16:54:40.588544546Z }
2025-09-30T16:54:40.682642571Z info: request {"duration":797,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:40.682Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:40.683833333Z warn: request {"duration":1478,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:40.683Z","url":"/api/issues/nearby?latitude=16.83158437389119&longitude=75.73951597279715&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:40.982149449Z warn: request {"duration":1443,"ip":"10.229.12.1","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:40.981Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:41.097740947Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T16:54:41.097760108Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T16:54:41.097763008Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T16:54:41.097765379Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T16:54:41.097777549Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T16:54:41.097779879Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T16:54:41.097782269Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T16:54:41.0977851Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T16:54:41.09778772Z   status: 404,
2025-09-30T16:54:41.09779026Z   statusText: 'Not Found',
2025-09-30T16:54:41.09779255Z   errorDetails: undefined
2025-09-30T16:54:41.09779492Z }
2025-09-30T16:54:41.098745568Z info: request {"duration":97,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:54:41.098Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:41.273408027Z warn: request {"duration":1887,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:41.273Z","url":"/api/issues/nearby?latitude=16.83411832231644&longitude=75.72961807250978&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:41.285268526Z info: request {"duration":901,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:41.284Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:41.329718431Z warn: request {"duration":1140,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:41.329Z","url":"/api/issues/nearby?latitude=16.83411832231644&longitude=75.72961807250978&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:41.445781308Z info: request {"duration":960,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:41.445Z","url":"/api/issues/nearby?latitude=16.83158437389119&longitude=75.73951597279715&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:41.866440771Z Static file request: GET /uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png
2025-09-30T16:54:41.870267373Z info: request {"duration":4,"ip":"10.229.170.66","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T16:54:41.870Z","url":"/uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:44.777483469Z info: request {"duration":3,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:54:44.777Z","url":"/api/issues/nearby?latitude=16.83411832231644&longitude=75.72961807250978&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:54:45.309475504Z Static file request: GET /uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png
2025-09-30T16:54:45.310853738Z info: request {"duration":1,"ip":"10.229.170.66","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T16:54:45.310Z","url":"/uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:01.99361069Z Email configuration error details: Error: Connection timeout
2025-09-30T16:55:01.993628551Z     at SMTPConnection._formatError (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:809:19)
2025-09-30T16:55:01.993632082Z     at SMTPConnection._onError (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:795:20)
2025-09-30T16:55:01.993635262Z     at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:237:22)
2025-09-30T16:55:01.993638132Z     at listOnTimeout (node:internal/timers:588:17)
2025-09-30T16:55:01.993640922Z     at process.processTimers (node:internal/timers:523:7) {
2025-09-30T16:55:01.993644062Z   code: 'ETIMEDOUT',
2025-09-30T16:55:01.993646912Z   command: 'CONN'
2025-09-30T16:55:01.993649712Z }
2025-09-30T16:55:04.368278103Z info: request {"duration":2,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:55:04.366Z","url":"/api/issues/nearby?latitude=16.83411832231644&longitude=75.72961807250978&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:06.338801813Z info: request {"duration":140,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:55:06.338Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:06.338864937Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T16:55:06.338872548Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T16:55:06.338877628Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T16:55:06.338881818Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T16:55:06.338935122Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T16:55:06.338940632Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T16:55:06.338944732Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T16:55:06.338949153Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T16:55:06.338953213Z   status: 404,
2025-09-30T16:55:06.338958213Z   statusText: 'Not Found',
2025-09-30T16:55:06.338962423Z   errorDetails: undefined
2025-09-30T16:55:06.338966414Z }
2025-09-30T16:55:07.408612165Z warn: request {"duration":1485,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:55:07.408Z","url":"/api/issues/nearby?latitude=16.846769400695802&longitude=75.71193695068361&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:08.002652356Z Static file request: GET /uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png
2025-09-30T16:55:08.003775134Z info: request {"duration":1,"ip":"10.229.170.66","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T16:55:08.003Z","url":"/uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:13.317256203Z info: request {"duration":333,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:55:13.316Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:13.889466694Z info: request {"duration":437,"ip":"10.229.12.1","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:55:13.887Z","url":"/api/issues?page=1&limit=9","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:13.98173277Z Static file request: GET /uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png
2025-09-30T16:55:13.982962765Z info: request {"duration":94,"ip":"10.229.170.66","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T16:55:13.982Z","url":"/uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:14.083723778Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T16:55:14.08374089Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T16:55:14.08374566Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T16:55:14.083769461Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T16:55:14.083773442Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T16:55:14.083777122Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T16:55:14.083780862Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T16:55:14.083784972Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T16:55:14.083788673Z   status: 404,
2025-09-30T16:55:14.083792773Z   statusText: 'Not Found',
2025-09-30T16:55:14.083796413Z   errorDetails: undefined
2025-09-30T16:55:14.083799993Z }
2025-09-30T16:55:14.083817664Z info: request {"duration":591,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:55:14.083Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:20.527723995Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T16:55:20.527752147Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T16:55:20.527756077Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T16:55:20.527758858Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T16:55:20.527761928Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T16:55:20.527764468Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T16:55:20.527767038Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T16:55:20.527770288Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T16:55:20.527772808Z   status: 404,
2025-09-30T16:55:20.527775788Z   statusText: 'Not Found',
2025-09-30T16:55:20.527778309Z   errorDetails: undefined
2025-09-30T16:55:20.527780869Z }
2025-09-30T16:55:20.528602299Z info: request {"duration":108,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T16:55:20.528Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:26.786079255Z Attempting to send password reset email to: clown7g7@gmail.com
2025-09-30T16:55:53.454166788Z Skipping duplicate email send within window for clown7g7@gmail.com|CiviTrack - Password Reset Request
2025-09-30T16:55:53.45420089Z Attempting to send password reset email to: clown7g7@gmail.com
2025-09-30T16:55:53.45420606Z Password reset email sent successfully: undefined
2025-09-30T16:55:53.45420956Z warn: request {"duration":1306,"ip":"10.229.12.1","method":"POST","route":"/request-password-reset","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:55:53.453Z","url":"/api/auth/request-password-reset","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T16:55:56.972650603Z Email send transient error (attempt 1). Retrying in 2433ms... ETIMEDOUT
2025-09-30T16:55:59.40596265Z Skipping duplicate email send within window for clown7g7@gmail.com|CiviTrack - Password Reset Request
2025-09-30T16:55:59.406062386Z Password reset email sent successfully: undefined
2025-09-30T16:55:59.406916918Z warn: request {"duration":32853,"ip":"10.229.170.66","method":"POST","route":"/request-password-reset","service":"performance-monitor","status":200,"timestamp":"2025-09-30T16:55:59.406Z","url":"/api/auth/request-password-reset","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T17:04:00.781238947Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T17:04:00.781273329Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T17:04:00.781277329Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T17:04:00.78127981Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T17:04:00.7812823Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T17:04:00.78128464Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T17:04:00.78128737Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T17:04:00.78129047Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T17:04:00.78129315Z   status: 404,
2025-09-30T17:04:00.781296111Z   statusText: 'Not Found',
2025-09-30T17:04:00.781298561Z   errorDetails: undefined
2025-09-30T17:04:00.781300941Z }
2025-09-30T17:04:00.78194017Z info: request {"duration":135,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T17:04:00.781Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T17:04:02.470397757Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T17:04:02.470415307Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T17:04:02.470418978Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T17:04:02.470421728Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T17:04:02.470424028Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T17:04:02.470426288Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T17:04:02.470428658Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T17:04:02.470431568Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T17:04:02.470433959Z   status: 404,
2025-09-30T17:04:02.470437499Z   statusText: 'Not Found',
2025-09-30T17:04:02.470439899Z   errorDetails: undefined
2025-09-30T17:04:02.470442169Z }
2025-09-30T17:04:02.470975822Z info: request {"duration":84,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T17:04:02.470Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T17:04:32.136926081Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T17:04:32.136967804Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T17:04:32.136972575Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T17:04:32.136975604Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T17:04:32.136978595Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T17:04:32.136981465Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T17:04:32.136983875Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T17:04:32.136986905Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T17:04:32.136989616Z   status: 404,
2025-09-30T17:04:32.136993026Z   statusText: 'Not Found',
2025-09-30T17:04:32.136995456Z   errorDetails: undefined
2025-09-30T17:04:32.136997136Z }
2025-09-30T17:04:32.137654276Z info: request {"duration":119,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T17:04:32.137Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T17:04:34.052524383Z warn: request {"duration":1738,"ip":"10.229.191.1","method":"POST","route":"/register","service":"performance-monitor","status":400,"timestamp":"2025-09-30T17:04:34.052Z","url":"/api/auth/register","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}