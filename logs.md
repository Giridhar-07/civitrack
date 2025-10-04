2025-10-04T05:43:23.053219431Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-10-04T05:43:23.053225161Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-10-04T05:43:23.053229711Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-10-04T05:43:23.053233882Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-10-04T05:43:23.053238562Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:165:36
2025-10-04T05:43:23.053242812Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:176:20)
2025-10-04T05:43:23.053247702Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-10-04T05:43:23.053251883Z   status: 404,
2025-10-04T05:43:23.053268184Z   statusText: 'Not Found',
2025-10-04T05:43:23.053271124Z   errorDetails: undefined
2025-10-04T05:43:23.053273764Z }
2025-10-04T05:43:23.053339157Z info: request {"duration":112,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":200,"timestamp":"2025-10-04T05:43:23.053Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-10-04T05:43:24.580592826Z warn: request {"duration":1404,"ip":"10.229.12.1","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-10-04T05:43:24.580Z","url":"/api/issues","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-10-04T05:43:24.790675638Z warn: request {"duration":1183,"ip":"10.229.170.66","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-10-04T05:43:24.790Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-10-04T05:43:24.90470083Z info: request {"duration":1,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-10-04T05:43:24.904Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-10-04T05:43:25.804048712Z warn: request {"duration":2874,"ip":"10.229.170.66","method":"GET","route":"/api/health","service":"performance-monitor","status":503,"timestamp":"2025-10-04T05:43:25.802Z","url":"/api/health","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/131.0.6778.0 Safari/537.36"}
2025-10-04T05:44:11.015900024Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-10-04T05:44:11.015922346Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-10-04T05:44:11.015926646Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-10-04T05:44:11.015929726Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-10-04T05:44:11.015932936Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-10-04T05:44:11.015936006Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:165:36
2025-10-04T05:44:11.015938917Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:176:20)
2025-10-04T05:44:11.015942277Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-10-04T05:44:11.015945157Z   status: 404,
2025-10-04T05:44:11.015948437Z   statusText: 'Not Found',
2025-10-04T05:44:11.015951217Z   errorDetails: undefined
2025-10-04T05:44:11.015953977Z }
2025-10-04T05:44:11.01655789Z info: request {"duration":127,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-10-04T05:44:11.016Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-10-04T05:44:12.174988232Z warn: request {"duration":1325,"ip":"10.229.12.1","method":"GET","route":"/","service":"performance-monitor","status":304,"timestamp":"2025-10-04T05:44:12.174Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-10-04T05:44:12.493680645Z info: request {"duration":863,"ip":"10.229.191.1","method":"GET","route":"/nearby","service":"performance-monitor","status":304,"timestamp":"2025-10-04T05:44:12.493Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-10-04T05:44:12.511647178Z info: request {"duration":334,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-10-04T05:44:12.511Z","url":"/api/issues/nearby?latitude=16.831466420095204&longitude=75.73953321285276&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-10-04T05:44:12.804621218Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-10-04T05:44:12.804646749Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-10-04T05:44:12.80465195Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-10-04T05:44:12.80465509Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-10-04T05:44:12.804658Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-10-04T05:44:12.80466112Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:165:36
2025-10-04T05:44:12.80466394Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:176:20)
2025-10-04T05:44:12.804667191Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-10-04T05:44:12.804670321Z   status: 404,
2025-10-04T05:44:12.804673781Z   statusText: 'Not Found',
2025-10-04T05:44:12.804676521Z   errorDetails: undefined
2025-10-04T05:44:12.804678761Z }
2025-10-04T05:44:12.805300965Z info: request {"duration":81,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-10-04T05:44:12.805Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-10-04T05:44:19.465349945Z Attempting to send password reset email to: giridharmalagi7@gmail.com
2025-10-04T05:44:26.529046152Z ==> Detected service running on port 10000
2025-10-04T05:44:26.641043645Z ==> Docs on specifying a port: https://render.com/docs/web-services#port-binding
2025-10-04T05:44:29.642630466Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #0: 10.005s
2025-10-04T05:44:29.642655197Z Email send transient error (attempt 1). Retrying in 3126ms... ETIMEDOUT
2025-10-04T05:44:42.781167051Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #1: 10.010s
2025-10-04T05:44:42.781185612Z Email send transient error (attempt 2). Retrying in 6249ms... ETIMEDOUT
2025-10-04T05:44:46.103982168Z Attempting to send password reset email to: giridharmalagi7@gmail.com
2025-10-04T05:44:56.10536105Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #0: 10.002s
2025-10-04T05:44:56.105388661Z Email send transient error (attempt 1). Retrying in 3472ms... ETIMEDOUT
2025-10-04T05:44:59.0374888Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #2: 10.003s
2025-10-04T05:44:59.03767062Z Email send transient error (attempt 3). Retrying in 12218ms... ETIMEDOUT
2025-10-04T05:45:09.579975736Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #1: 10.002s
2025-10-04T05:45:09.580028699Z Email send transient error (attempt 2). Retrying in 6490ms... ETIMEDOUT
2025-10-04T05:45:12.548405697Z Attempting to send password reset email to: giridharmalagi7@gmail.com
2025-10-04T05:45:21.257140613Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #3: 10.001s
2025-10-04T05:45:21.257167284Z Email send transient error (attempt 4). Retrying in 24286ms... ETIMEDOUT
2025-10-04T05:45:22.550542564Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #0: 10.002s
2025-10-04T05:45:22.551936249Z Email send transient error (attempt 1). Retrying in 3093ms... ETIMEDOUT
2025-10-04T05:45:26.073285493Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #2: 10.001s
2025-10-04T05:45:26.07341452Z Email send transient error (attempt 3). Retrying in 12034ms... ETIMEDOUT
2025-10-04T05:45:35.645524Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #1: 10.002s
2025-10-04T05:45:35.645634806Z Email send transient error (attempt 2). Retrying in 6087ms... ETIMEDOUT
2025-10-04T05:45:38.619084188Z Attempting to send password reset email to: giridharmalagi7@gmail.com
2025-10-04T05:45:48.111590614Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #3: 10.003s
2025-10-04T05:45:48.111687809Z Email send transient error (attempt 4). Retrying in 24110ms... ETIMEDOUT
2025-10-04T05:45:48.620293509Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #0: 10.001s
2025-10-04T05:45:48.62031363Z Email send transient error (attempt 1). Retrying in 3090ms... ETIMEDOUT
2025-10-04T05:45:51.736119086Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #2: 10.001s
2025-10-04T05:45:51.736134087Z Email send transient error (attempt 3). Retrying in 12332ms... ETIMEDOUT
2025-10-04T05:45:58.215319048Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #4: 12.671s
2025-10-04T05:45:58.21534814Z Email send transient error (attempt 5). Retrying in 48348ms... ETIMEDOUT
2025-10-04T05:46:01.715443789Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #1: 10.003s
2025-10-04T05:46:01.71547956Z Email send transient error (attempt 2). Retrying in 6476ms... ETIMEDOUT
2025-10-04T05:46:04.087913698Z Attempting to send password reset email to: giridharmalagi7@gmail.com
2025-10-04T05:46:14.07157453Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #3: 10.003s
2025-10-04T05:46:14.071592991Z Email send transient error (attempt 4). Retrying in 24358ms... ETIMEDOUT
2025-10-04T05:46:14.089932705Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #0: 10.002s
2025-10-04T05:46:14.09002664Z Email send transient error (attempt 1). Retrying in 3245ms... ETIMEDOUT