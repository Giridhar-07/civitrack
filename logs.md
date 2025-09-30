2025-09-30T13:03:17.291550093Z ==> Uploaded in 4.2s. Compression took 2.5s
2025-09-30T13:03:17.329254829Z ==> Build successful 🎉
2025-09-30T13:03:22.690460064Z ==> Deploying...
2025-09-30T13:03:40.303341776Z ==> Running 'npm start'
2025-09-30T13:03:41.405003452Z 
2025-09-30T13:03:41.405037864Z > civitrack-backend@1.0.0 start
2025-09-30T13:03:41.405046365Z > node dist/index.js
2025-09-30T13:03:41.405049075Z 
2025-09-30T13:03:44.103107162Z [dotenv@17.2.2] injecting env (0) from .env -- tip: ⚙️  override existing env vars with { override: true }
2025-09-30T13:03:45.214194392Z Email Config Status:
2025-09-30T13:03:45.214223653Z   EMAIL_HOST: smtp.gmail.com
2025-09-30T13:03:45.214228134Z   EMAIL_PORT: 587
2025-09-30T13:03:45.214241814Z   EMAIL_USER: noreplycivitrack@gmail.com
2025-09-30T13:03:45.214254385Z   EMAIL_FROM: CiviTrack <noreply@civitrack.com>
2025-09-30T13:03:45.214265476Z   APP_URL: https://civitrack-dev.netlify.app
2025-09-30T13:03:46.603857941Z Express trust proxy enabled for serverless environment
2025-09-30T13:03:46.608142377Z Allowed CORS origins: [
2025-09-30T13:03:46.60819488Z   'http://localhost:3000',
2025-09-30T13:03:46.608200181Z   'http://127.0.0.1:3000',
2025-09-30T13:03:46.608204221Z   'http://localhost:5173',
2025-09-30T13:03:46.608208031Z   'http://127.0.0.1:5173',
2025-09-30T13:03:46.608211741Z   'http://localhost:3001',
2025-09-30T13:03:46.608215431Z   'http://127.0.0.1:3001',
2025-09-30T13:03:46.608220202Z   'https://civitrack-dev.netlify.app'
2025-09-30T13:03:46.608224052Z ]
2025-09-30T13:03:47.401339919Z Redis is explicitly disabled via DISABLE_REDIS environment variable
2025-09-30T13:03:51.052552858Z Database connection has been established successfully.
2025-09-30T13:03:51.053681046Z Server running on port 10000
2025-09-30T13:03:51.053696267Z Environment: production
2025-09-30T13:03:51.053706627Z Render deployment: true
2025-09-30T13:03:51.053711307Z WebSocket server initialized
2025-09-30T13:03:51.053741039Z Performance monitoring enabled
2025-09-30T13:03:51.472287055Z info: request {"duration":5,"ip":"::1","method":"HEAD","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T13:03:51.470Z","url":"/","userAgent":"Go-http-client/1.1"}
2025-09-30T13:03:53.397977862Z ==> Your service is live 🎉
2025-09-30T13:03:53.432449199Z ==> 
2025-09-30T13:03:53.468884656Z ==> ///////////////////////////////////////////////////////////
2025-09-30T13:03:53.502514873Z ==> 
2025-09-30T13:03:53.5381635Z ==> Available at your primary URL https://civitrack.onrender.com
2025-09-30T13:03:53.572444897Z ==> 
2025-09-30T13:03:53.604179094Z ==> ///////////////////////////////////////////////////////////
2025-09-30T13:03:55.256941261Z info: request {"duration":1,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T13:03:55.256Z","url":"/","userAgent":"Go-http-client/2.0"}
2025-09-30T13:04:17.509805475Z Email configuration error details: Error: Connection timeout
2025-09-30T13:04:17.509843097Z     at SMTPConnection._formatError (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:809:19)
2025-09-30T13:04:17.509849138Z     at SMTPConnection._onError (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:795:20)
2025-09-30T13:04:17.509853318Z     at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/nodemailer/lib/smtp-connection/index.js:237:22)
2025-09-30T13:04:17.509857278Z     at listOnTimeout (node:internal/timers:588:17)
2025-09-30T13:04:17.509860929Z     at process.processTimers (node:internal/timers:523:7) {
2025-09-30T13:04:17.509864979Z   code: 'ETIMEDOUT',
2025-09-30T13:04:17.509900671Z   command: 'CONN'
2025-09-30T13:04:17.509909452Z }
2025-09-30T13:05:44.704005008Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent: [404 Not Found] models/gemini-pro is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T13:05:44.704043791Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T13:05:44.704067002Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T13:05:44.704070452Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T13:05:44.704072922Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T13:05:44.704075533Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
2025-09-30T13:05:44.704078883Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T13:05:44.704081693Z   status: 404,
2025-09-30T13:05:44.704085283Z   statusText: 'Not Found',
2025-09-30T13:05:44.704087953Z   errorDetails: undefined
2025-09-30T13:05:44.704090493Z }
2025-09-30T13:05:44.705185699Z info: request {"duration":319,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":200,"timestamp":"2025-09-30T13:05:44.704Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T13:05:45.974423823Z warn: request {"duration":1577,"ip":"10.229.12.1","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T13:05:45.974Z","url":"/api/issues","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T13:05:46.346515817Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:05:46.346547939Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:05:46.346553659Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:05:46.34655871Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.34656337Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.34656779Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.34657295Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.346577161Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.346581201Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.346585021Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.346589621Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.347397269Z warn: request {"duration":1444,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:05:46.347Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T13:05:46.787505094Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:05:46.787548297Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:05:46.787553657Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:05:46.787557967Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.787562338Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.787583469Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.787586649Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.787589059Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.787591039Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.787593069Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.78759534Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:46.788360035Z info: request {"duration":331,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:05:46.788Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T13:05:47.428007182Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:05:47.428026074Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:05:47.428028434Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:05:47.428030294Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.428032014Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.428033694Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.428035484Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.428037114Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.428038804Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.428040484Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.428042295Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.428883785Z info: request {"duration":331,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:05:47.428Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T13:05:47.885221028Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:05:47.88524927Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:05:47.88525223Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:05:47.88525411Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.88525588Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.8852575Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.885259141Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.885260771Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.885262491Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.885277932Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.885281172Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:47.886016086Z info: request {"duration":332,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:05:47.885Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T13:05:48.360566017Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:05:48.360581688Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:05:48.360583928Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:05:48.360585798Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.360587548Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.360589248Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.360591028Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.360592928Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.360594588Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.360596278Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.360597938Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.361586117Z info: request {"duration":330,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:05:48.361Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T13:05:48.813123334Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:05:48.813148106Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:05:48.813151986Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:05:48.813155416Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.813158027Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.813160697Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.813163587Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.813166397Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.813169027Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.813171697Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.813174458Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:48.814443533Z info: request {"duration":330,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:05:48.814Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T13:05:49.273563863Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:05:49.273583855Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:05:49.273587095Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:05:49.273589795Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.273592425Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.273594975Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.273597515Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.273600016Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.273602365Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.273604906Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.273607476Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.274440426Z info: request {"duration":331,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:05:49.274Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T13:05:49.731939008Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:05:49.731957309Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:05:49.73196058Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:05:49.73196377Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.73196614Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.7319685Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.73197097Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.73197325Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.731975711Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.731978071Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.731980781Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:49.732925187Z info: request {"duration":330,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:05:49.732Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T13:05:50.249326827Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:05:50.249344518Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:05:50.249346838Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:05:50.249368809Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:50.249370699Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:50.24937233Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:50.249374099Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:50.24937583Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:50.24937755Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:50.24937939Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:50.24938105Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:05:50.250144866Z info: request {"duration":329,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:05:50.249Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-09-30T13:06:44.997893202Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent: [404 Not Found] models/gemini-pro is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T13:06:44.997920144Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T13:06:44.997924574Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T13:06:44.997927564Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T13:06:44.997930405Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T13:06:44.997933165Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
2025-09-30T13:06:44.997937895Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T13:06:44.997943025Z   status: 404,
2025-09-30T13:06:44.997948526Z   statusText: 'Not Found',
2025-09-30T13:06:44.997952976Z   errorDetails: undefined
2025-09-30T13:06:44.997957556Z }
2025-09-30T13:06:44.998707521Z info: request {"duration":116,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:06:44.998Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:46.383145664Z warn: request {"duration":1484,"ip":"10.229.12.1","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:06:46.377Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:46.686334835Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:46.686361027Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:46.686367137Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:46.686387818Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.686391459Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.686394349Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.686397309Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.686400219Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.68640301Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.68640598Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.68640858Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.687026487Z info: request {"duration":579,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:46.686Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:47.843017062Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:47.843038453Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:47.843041973Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:47.843044463Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843046783Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843061464Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843064314Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843066854Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843069875Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843072355Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843074885Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843228894Z info: request {"duration":331,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:47.842Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:49.471952412Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:49.471972833Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:49.471976063Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:49.471991144Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.471994364Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.471997115Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.472009336Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.472012216Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.472014836Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.472017536Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.472020106Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.473216997Z info: request {"duration":331,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:49.472Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:49.575283891Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:49.575304422Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:49.575307863Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:49.575310533Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.575313013Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.575315373Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.575317993Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.575320503Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.575323053Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.575325504Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.575328294Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.5760971Z info: request {"duration":401,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:49.575Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:50.583366486Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:50.583384807Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:50.583388097Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:50.583390867Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.583393487Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.583396057Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.583398738Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.583401438Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.583403878Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.583406318Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.583422159Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.584144442Z info: request {"duration":399,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:50.583Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:50.590560035Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:50.590574166Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:50.590577286Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:50.590580077Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.590582807Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.590585327Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.590587547Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.590590127Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.590592487Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.590594987Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.590597538Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.591034504Z info: request {"duration":330,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:50.590Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:51.704351761Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:51.704384503Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:51.704388913Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:51.704391533Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.704394363Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.704397014Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.704399614Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.704402494Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.704405014Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.704407854Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.704410335Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.705040882Z info: request {"duration":331,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:51.704Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:51.866867614Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:51.866913716Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:51.866917426Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:51.866918386Z info: request {"duration":402,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:51.864Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:51.866920386Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.866931397Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.866934217Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.866936598Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.866939108Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.866941288Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.866943628Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.866945938Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901835523Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:52.901867135Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:52.901870445Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:52.901918068Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901921988Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901925178Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901927579Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901930389Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901932899Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901935649Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901938479Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.902567567Z info: request {"duration":399,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:52.902Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:53.163263121Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:53.163293162Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:53.163311724Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:53.163315104Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163317794Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163320354Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163322834Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163325195Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163327515Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163330035Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163332715Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163909849Z info: request {"duration":330,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:53.163Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:54.136277322Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:54.136300013Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:54.136303123Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:54.136305803Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.136308413Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.136314944Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.136317544Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.136319954Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.136322594Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.136325225Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.136327685Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.137057128Z info: request {"duration":330,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:54.136Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:54.615485721Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:54.615511963Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:54.615515413Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:54.615517743Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.615520323Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.615522594Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.615539565Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.615542345Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.615544575Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.615546935Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.615549375Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.616327342Z info: request {"duration":333,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:54.615Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:44.997893202Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent: [404 Not Found] models/gemini-pro is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T13:06:44.997920144Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T13:06:44.997924574Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T13:06:44.997927564Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T13:06:44.997930405Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T13:06:44.997933165Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
2025-09-30T13:06:44.997937895Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T13:06:44.997943025Z   status: 404,
2025-09-30T13:06:44.997948526Z   statusText: 'Not Found',
2025-09-30T13:06:44.997952976Z   errorDetails: undefined
2025-09-30T13:06:44.997957556Z }
2025-09-30T13:06:44.998707521Z info: request {"duration":116,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:06:44.998Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:46.383145664Z warn: request {"duration":1484,"ip":"10.229.12.1","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:06:46.377Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:46.686334835Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:46.686361027Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:46.686367137Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:46.686387818Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.686391459Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.686394349Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.686397309Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.686400219Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.68640301Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.68640598Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.68640858Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:46.687026487Z info: request {"duration":579,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:46.686Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:47.843017062Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:47.843038453Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:47.843041973Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:47.843044463Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843046783Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843061464Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843064314Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843066854Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843069875Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843072355Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843074885Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:47.843228894Z info: request {"duration":331,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:47.842Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:49.471952412Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:49.471972833Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:49.471976063Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:49.471991144Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.471994364Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.471997115Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.472009336Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.472012216Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.472014836Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.472017536Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.472020106Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.473216997Z info: request {"duration":331,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:49.472Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:49.575283891Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:49.575304422Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:49.575307863Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:49.575310533Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.575313013Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.575315373Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.575317993Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.575320503Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.575323053Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.575325504Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.575328294Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:49.5760971Z info: request {"duration":401,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:49.575Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:50.583366486Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:50.583384807Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:50.583388097Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:50.583390867Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.583393487Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.583396057Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.583398738Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.583401438Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.583403878Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.583406318Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.583422159Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.584144442Z info: request {"duration":399,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:50.583Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:50.590560035Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:50.590574166Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:50.590577286Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:50.590580077Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.590582807Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.590585327Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.590587547Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.590590127Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.590592487Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.590594987Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.590597538Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:50.591034504Z info: request {"duration":330,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:50.590Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:51.704351761Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:51.704384503Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:51.704388913Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:51.704391533Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.704394363Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.704397014Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.704399614Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.704402494Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.704405014Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.704407854Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.704410335Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.705040882Z info: request {"duration":331,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:51.704Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:51.866867614Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:51.866913716Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:51.866917426Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:51.866918386Z info: request {"duration":402,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:51.864Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:51.866920386Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.866931397Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.866934217Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.866936598Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.866939108Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.866941288Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.866943628Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:51.866945938Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901835523Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:52.901867135Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:52.901870445Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:52.901918068Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901921988Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901925178Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901927579Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901930389Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901932899Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901935649Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.901938479Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:52.902567567Z info: request {"duration":399,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:52.902Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:53.163263121Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:53.163293162Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:53.163311724Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:53.163315104Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163317794Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163320354Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163322834Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163325195Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163327515Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163330035Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163332715Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:53.163909849Z info: request {"duration":330,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:53.163Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:54.136277322Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:54.136300013Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:54.136303123Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:54.136305803Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.136308413Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.136314944Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.136317544Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.136319954Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.136322594Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.136325225Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.136327685Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.137057128Z info: request {"duration":330,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:54.136Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:54.615485721Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:54.615511963Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:54.615515413Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:54.615517743Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.615520323Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.615522594Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.615539565Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.615542345Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.615544575Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.615546935Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.615549375Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:54.616327342Z info: request {"duration":333,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:54.615Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:55.691149781Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:55.691175252Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:55.691177642Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:55.691179522Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:55.691181343Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:55.691183243Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:55.691185223Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:55.691186913Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:55.691188573Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:55.691190303Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:55.691191953Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:55.691786019Z info: request {"duration":330,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:55.691Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:57.128517935Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:57.128549107Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:57.128551687Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:57.128553647Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.128555467Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.128557097Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.128562937Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.128564737Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.128566728Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.128581669Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.128583519Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.129216367Z info: request {"duration":330,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:57.129Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:57.901014694Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:57.901077478Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:57.901081029Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:57.901083549Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.901085749Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.901088539Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.901090789Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.901093249Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.901095799Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.90109797Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.90110028Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:57.902064457Z info: request {"duration":331,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:57.900Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:58.863689208Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:58.863705649Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:58.863708259Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:58.863710089Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:58.86371182Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:58.86371358Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:58.8637152Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:58.86371688Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:58.86371857Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:58.86372033Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:58.86372237Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:58.864310725Z info: request {"duration":331,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:58.864Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:06:59.608727879Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:06:59.608761521Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:06:59.608765001Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:06:59.608768011Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:59.608770551Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:59.608773251Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:59.608776531Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:59.608778962Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:59.608781522Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:59.608784012Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:59.608786292Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:06:59.609621932Z info: request {"duration":331,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:06:59.609Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:00.880498306Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:07:00.880519657Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:07:00.880522148Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:07:00.880524338Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:00.880526388Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:00.880528438Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:00.880530398Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:00.880532428Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:00.880534378Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:00.880536458Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:00.880538558Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:00.881171916Z info: request {"duration":330,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:07:00.881Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:01.339588985Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:07:01.339620887Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:07:01.339640638Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:07:01.339643758Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:01.339646798Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:01.339649899Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:01.339652789Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:01.339655389Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:01.339657669Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:01.339659979Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:01.339662319Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:01.340267805Z info: request {"duration":331,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:07:01.340Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:03.362656966Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:07:03.362696189Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:07:03.362700129Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:07:03.362702889Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.362705389Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.362707829Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.36271035Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.36271274Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.36271511Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.36271782Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.36272076Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.363510828Z info: request {"duration":331,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:07:03.363Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:03.436952012Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:07:03.436982004Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:07:03.436986064Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:07:03.436989484Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.436992535Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.437013306Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.437016796Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.437020006Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.437023726Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.437026786Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.437029967Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:03.437715658Z info: request {"duration":400,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:07:03.437Z","url":"/api/issues/nearby?latitude=16.83146859435566&longitude=75.73954235974159&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:06.476605136Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:07:06.476636958Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:07:06.476640578Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:07:06.476643199Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:06.476645769Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:06.476648309Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:06.476650819Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:06.476656959Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:06.4766599Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:06.47666261Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:06.47666588Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:07:06.477242585Z info: request {"duration":399,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:07:06.477Z","url":"/api/issues/nearby?latitude=16.837568700269692&longitude=75.72275161743165&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:12.690951027Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent: [404 Not Found] models/gemini-pro is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T13:07:12.690982139Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T13:07:12.690986149Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T13:07:12.69098878Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T13:07:12.69099165Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T13:07:12.69099425Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
2025-09-30T13:07:12.691013021Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T13:07:12.691015651Z   status: 404,
2025-09-30T13:07:12.691018622Z   statusText: 'Not Found',
2025-09-30T13:07:12.691020982Z   errorDetails: undefined
2025-09-30T13:07:12.691023312Z }
2025-09-30T13:07:12.69149858Z info: request {"duration":115,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:07:12.691Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:15.567518936Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent: [404 Not Found] models/gemini-pro is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T13:07:15.567547648Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T13:07:15.567553368Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T13:07:15.567557858Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T13:07:15.567562419Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T13:07:15.567566309Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
2025-09-30T13:07:15.567570979Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T13:07:15.567575819Z   status: 404,
2025-09-30T13:07:15.567580729Z   statusText: 'Not Found',
2025-09-30T13:07:15.56758534Z   errorDetails: undefined
2025-09-30T13:07:15.5675895Z }
2025-09-30T13:07:15.568180395Z info: request {"duration":94,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:07:15.567Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:15.658787565Z info: request {"duration":202,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:07:15.658Z","url":"/api/issues?page=1&limit=9","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:15.860147447Z info: request {"duration":382,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:07:15.859Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:16.201994425Z Static file request: GET /uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png
2025-09-30T13:07:16.203949142Z info: request {"duration":2,"ip":"10.229.12.1","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T13:07:16.203Z","url":"/uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:25.457472652Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent: [404 Not Found] models/gemini-pro is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T13:07:25.457518765Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T13:07:25.457522925Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T13:07:25.457525565Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T13:07:25.457527855Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T13:07:25.457530456Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
2025-09-30T13:07:25.457533476Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T13:07:25.457535906Z   status: 404,
2025-09-30T13:07:25.457538826Z   statusText: 'Not Found',
2025-09-30T13:07:25.457541116Z   errorDetails: undefined
2025-09-30T13:07:25.457543326Z }
2025-09-30T13:07:25.458163053Z info: request {"duration":109,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:07:25.457Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:51.390390636Z info: request {"duration":1,"ip":"10.229.191.1","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T13:07:51.390Z","url":"/api/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:52.335132071Z info: request {"duration":0,"ip":"10.229.170.66","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T13:07:52.334Z","url":"/api/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:53.01900763Z info: request {"duration":1,"ip":"10.229.12.1","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T13:07:53.017Z","url":"/api/status","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:07:55.958080333Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent: [404 Not Found] models/gemini-pro is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T13:07:55.958110375Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T13:07:55.958115565Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T13:07:55.958119236Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T13:07:55.958122736Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T13:07:55.958126496Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
2025-09-30T13:07:55.958146357Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T13:07:55.958148757Z   status: 404,
2025-09-30T13:07:55.958151727Z   statusText: 'Not Found',
2025-09-30T13:07:55.958153958Z   errorDetails: undefined
2025-09-30T13:07:55.958156028Z }
2025-09-30T13:07:55.958665758Z info: request {"duration":112,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:07:55.958Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:10.080490412Z error: request {"duration":31589,"ip":"10.229.12.1","method":"GET","route":"/api/health","service":"performance-monitor","status":503,"timestamp":"2025-09-30T13:08:10.080Z","url":"/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:18.418007574Z info: request {"duration":0,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T13:08:18.417Z","url":"/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:18.418007574Z info: request {"duration":0,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T13:08:18.417Z","url":"/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:19.60245133Z info: request {"duration":561,"ip":"10.229.12.1","method":"POST","route":"/login","service":"performance-monitor","status":200,"timestamp":"2025-09-30T13:08:19.602Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:24.005265896Z error: request {"duration":30198,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":503,"timestamp":"2025-09-30T13:08:24.005Z","url":"/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:24.233864704Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent: [404 Not Found] models/gemini-pro is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T13:08:24.233917567Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T13:08:24.233925617Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T13:08:24.233930198Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T13:08:24.233934318Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T13:08:24.233938728Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
2025-09-30T13:08:24.233946329Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T13:08:24.233950829Z   status: 404,
2025-09-30T13:08:24.233955619Z   statusText: 'Not Found',
2025-09-30T13:08:24.233959799Z   errorDetails: undefined
2025-09-30T13:08:24.23396377Z }
2025-09-30T13:08:24.234541194Z info: request {"duration":117,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:08:24.234Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:25.128673457Z info: request {"duration":398,"ip":"10.229.12.1","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-09-30T13:08:25.128Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:25.736638075Z Static file request: GET /uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png
2025-09-30T13:08:25.737603223Z info: request {"duration":1,"ip":"10.229.191.1","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T13:08:25.737Z","url":"/uploads/e030a1e0-99b7-4e9f-ab13-ee905929bfb4.png","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:26.919728481Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:08:26.919760733Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:08:26.919764923Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:08:26.919768093Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:26.919771313Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:26.919775054Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:26.919778694Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:26.919781184Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:26.919783234Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:26.919785414Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:26.919787994Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:26.920299505Z info: request {"duration":328,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:08:26.920Z","url":"/api/issues/nearby?latitude=16.831587633796566&longitude=75.73951323447663&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:27.914774489Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:08:27.914819592Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:08:27.914827602Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:08:27.914830963Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:27.914833953Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:27.914837583Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:27.914840833Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:27.914843823Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:27.914846754Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:27.914849744Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:27.914868715Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:27.915482792Z info: request {"duration":328,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:08:27.915Z","url":"/api/issues/nearby?latitude=16.831587633796566&longitude=75.73951323447663&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:29.0239152Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:08:29.023943641Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:08:29.023947352Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:08:29.023950352Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:29.023953202Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:29.023955962Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:29.023958782Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:29.023961522Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:29.023964373Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:29.023967843Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:29.023972623Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:29.024553788Z info: request {"duration":327,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:08:29.024Z","url":"/api/issues/nearby?latitude=16.831587633796566&longitude=75.73951323447663&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:30.267308266Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:08:30.267341377Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:08:30.267345948Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:08:30.267349868Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:30.267353628Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:30.267357628Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:30.267361358Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:30.267364929Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:30.267368539Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:30.267372609Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:30.267376419Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:30.267974065Z info: request {"duration":327,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:08:30.267Z","url":"/api/issues/nearby?latitude=16.831587633796566&longitude=75.73951323447663&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:31.43363666Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:08:31.433661082Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:08:31.433664692Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:08:31.433667672Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:31.433670182Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:31.433683783Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:31.433685583Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:31.433687333Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:31.433689003Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:31.433690713Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:31.433692934Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:31.434428777Z info: request {"duration":328,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:08:31.434Z","url":"/api/issues/nearby?latitude=16.831587633796566&longitude=75.73951323447663&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:33.022852283Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:08:33.022901686Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:08:33.022908427Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:08:33.022910947Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:33.022913217Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:33.022915487Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:33.022917827Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:33.022920217Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:33.022922437Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:33.022924608Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:33.022926858Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:33.023545195Z info: request {"duration":328,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:08:33.023Z","url":"/api/issues/nearby?latitude=16.831587633796566&longitude=75.73951323447663&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:34.436538396Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:08:34.436568298Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:08:34.436571658Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:08:34.436598Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:34.43660104Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:34.43660311Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:34.436605171Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:34.43660716Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:34.436609191Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:34.436611291Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:34.436613381Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:34.437235328Z info: request {"duration":326,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:08:34.437Z","url":"/api/issues/nearby?latitude=16.831587633796566&longitude=75.73951323447663&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:35.125846461Z info: request {"duration":0,"ip":"10.229.191.1","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T13:08:35.125Z","url":"/api/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:35.599463748Z info: request {"duration":1,"ip":"10.229.191.1","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T13:08:35.599Z","url":"/api/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:35.757255699Z info: request {"duration":0,"ip":"10.229.12.1","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T13:08:35.757Z","url":"/api/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:35.936970869Z error: request {"duration":30198,"ip":"10.229.170.66","method":"GET","route":"/api/health","service":"performance-monitor","status":503,"timestamp":"2025-09-30T13:08:35.936Z","url":"/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:35.986786203Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:08:35.986808424Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:08:35.986815074Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:08:35.986820985Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:35.986826665Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:35.986832556Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:35.986837666Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:35.986841466Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:35.986845096Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:35.986856707Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:35.986858987Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:35.987421221Z info: request {"duration":327,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:08:35.987Z","url":"/api/issues/nearby?latitude=16.831587633796566&longitude=75.73951323447663&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:36.239623039Z info: request {"duration":1,"ip":"10.229.191.1","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T13:08:36.239Z","url":"/api/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:36.497485244Z info: request {"duration":1,"ip":"10.229.191.1","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T13:08:36.497Z","url":"/api/status","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:36.964415452Z info: request {"duration":1,"ip":"10.229.191.1","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T13:08:36.964Z","url":"/api/status","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:37.79716083Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:08:37.797185382Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:08:37.797190062Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:08:37.797194102Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:37.797197912Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:37.797201683Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:37.797205373Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:37.797209583Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:37.797213263Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:37.797216934Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:37.797220594Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:37.797942927Z info: request {"duration":397,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:08:37.797Z","url":"/api/issues/nearby?latitude=16.831587633796566&longitude=75.73951323447663&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:40.794262151Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:08:40.794285072Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:08:40.794290182Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:08:40.794294633Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:40.794319394Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:40.794322804Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:40.794325424Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:40.794327924Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:40.794330355Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:40.794332745Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:40.794335395Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:40.79508394Z info: request {"duration":397,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:08:40.794Z","url":"/api/issues/nearby?latitude=16.831587633796566&longitude=75.73951323447663&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T13:08:43.468836644Z Get nearby issues error: TypeError: Cannot assign to read only property 'writeQueueSize' of object '#<TCP>'
2025-09-30T13:08:43.468855306Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:16)
2025-09-30T13:08:43.468858386Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:175:25)
2025-09-30T13:08:43.468860996Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:43.468863476Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:43.468866196Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:43.468869217Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:43.468902628Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:43.468905399Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:43.468907869Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:43.468910299Z     at _clone (/opt/render/project/src/backend/node_modules/clone/clone.js:162:18)
2025-09-30T13:08:43.469576569Z info: request {"duration":398,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":500,"timestamp":"2025-09-30T13:08:43.469Z","url":"/api/issues/nearby?latitude=16.831587633796566&longitude=75.73951323447663&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}