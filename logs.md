2025-09-30T18:44:40.011018739Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T18:44:40.011052131Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T18:44:40.011057321Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T18:44:40.011061052Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T18:44:40.011065052Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T18:44:40.011068742Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T18:44:40.011072192Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T18:44:40.011076393Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T18:44:40.011080123Z   status: 404,
2025-09-30T18:44:40.011084313Z   statusText: 'Not Found',
2025-09-30T18:44:40.011087793Z   errorDetails: undefined
2025-09-30T18:44:40.011091274Z }
2025-09-30T18:44:40.011392205Z info: request {"duration":129,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T18:44:40.011Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T18:44:42.754805104Z info: request {"duration":78,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T18:44:42.753Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T18:44:42.754810675Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T18:44:42.754838697Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T18:44:42.754844897Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T18:44:42.754849208Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T18:44:42.754853298Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T18:44:42.754857248Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T18:44:42.754861539Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T18:44:42.75488255Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T18:44:42.75488586Z   status: 404,
2025-09-30T18:44:42.75488902Z   statusText: 'Not Found',
2025-09-30T18:44:42.754891641Z   errorDetails: undefined
2025-09-30T18:44:42.754894121Z }
2025-09-30T18:44:50.00963755Z Attempting to send password reset email to: clown7g7@gmail.com
2025-09-30T18:45:15.665470854Z Attempting to send password reset email to: clown7g7@gmail.com
2025-09-30T18:45:15.666803557Z Password reset email sent successfully: undefined
2025-09-30T18:45:15.666823558Z warn: request {"duration":1323,"ip":"10.229.191.1","method":"POST","route":"/request-password-reset","service":"performance-monitor","status":200,"timestamp":"2025-09-30T18:45:15.666Z","url":"/api/auth/request-password-reset","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T18:45:15.666882312Z Skipping duplicate email send within window for clown7g7@gmail.com|CiviTrack - Password Reset Request
2025-09-30T18:45:20.19307246Z Email send transient error (attempt 1). Retrying in 2348ms... ETIMEDOUT
2025-09-30T18:45:22.542781066Z Skipping duplicate email send within window for clown7g7@gmail.com|CiviTrack - Password Reset Request
2025-09-30T18:45:22.542804418Z Password reset email sent successfully: undefined
2025-09-30T18:45:22.543509457Z warn: request {"duration":33933,"ip":"10.229.170.66","method":"POST","route":"/request-password-reset","service":"performance-monitor","status":200,"timestamp":"2025-09-30T18:45:22.543Z","url":"/api/auth/request-password-reset","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:00:33.638223117Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:00:33.638246478Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:00:33.638251039Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:00:33.638255129Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:00:33.638258829Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:00:33.638262939Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:00:33.63827797Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:00:33.638283861Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:00:33.638287621Z   status: 404,
2025-09-30T19:00:33.638291691Z   statusText: 'Not Found',
2025-09-30T19:00:33.638295571Z   errorDetails: undefined
2025-09-30T19:00:33.638299392Z }
2025-09-30T19:00:33.639193274Z info: request {"duration":143,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:00:33.638Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:00:34.834499967Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:00:34.834521978Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:00:34.834538779Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:00:34.834542019Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:00:34.83454464Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:00:34.83454686Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:00:34.83454924Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:00:34.83455347Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:00:34.83455648Z   status: 404,
2025-09-30T19:00:34.834560661Z   statusText: 'Not Found',
2025-09-30T19:00:34.834563561Z   errorDetails: undefined
2025-09-30T19:00:34.834566221Z }
2025-09-30T19:00:34.835317393Z info: request {"duration":91,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:00:34.835Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:01:05.44654722Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:01:05.446586623Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:01:05.446592123Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:01:05.446596494Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:01:05.446600514Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:01:05.446604704Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:01:05.446609205Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:01:05.446614125Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:01:05.446618415Z   status: 404,
2025-09-30T19:01:05.446623566Z   statusText: 'Not Found',
2025-09-30T19:01:05.446628116Z   errorDetails: undefined
2025-09-30T19:01:05.446631066Z }
2025-09-30T19:01:05.447722032Z info: request {"duration":133,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:01:05.447Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:01:30.637819212Z warn: request {"duration":1735,"ip":"10.229.12.1","method":"POST","route":"/register","service":"performance-monitor","status":409,"timestamp":"2025-09-30T19:01:30.637Z","url":"/api/auth/register","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:01:34.87761579Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:01:34.877695785Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:01:34.877703476Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:01:34.877707256Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:01:34.877711356Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:01:34.877714897Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:01:34.877718357Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:01:34.877722517Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:01:34.877726307Z   status: 404,
2025-09-30T19:01:34.877730318Z   statusText: 'Not Found',
2025-09-30T19:01:34.877734148Z   errorDetails: undefined
2025-09-30T19:01:34.877737788Z }
2025-09-30T19:01:34.878465399Z info: request {"duration":127,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:01:34.878Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:02:05.084072011Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:02:05.084106293Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:02:05.084111743Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:02:05.084116094Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:02:05.084120064Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:02:05.084124204Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:02:05.084127904Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:02:05.084132805Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:02:05.084136625Z   status: 404,
2025-09-30T19:02:05.084142215Z   statusText: 'Not Found',
2025-09-30T19:02:05.084160437Z   errorDetails: undefined
2025-09-30T19:02:05.084163027Z }
2025-09-30T19:02:05.085810691Z info: request {"duration":126,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:02:05.085Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:02:10.312448733Z warn: request {"duration":1314,"ip":"10.229.170.66","method":"POST","route":"/register","service":"performance-monitor","status":409,"timestamp":"2025-09-30T19:02:10.312Z","url":"/api/auth/register","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:02:35.741893369Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:02:35.741931491Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:02:35.741936472Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:02:35.741940322Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:02:35.741944032Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:02:35.741947692Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:02:35.741951593Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:02:35.741956703Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:02:35.741961124Z   status: 404,
2025-09-30T19:02:35.741965764Z   statusText: 'Not Found',
2025-09-30T19:02:35.741969284Z   errorDetails: undefined
2025-09-30T19:02:35.741972764Z }
2025-09-30T19:02:35.742642411Z info: request {"duration":113,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:02:35.742Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:03:05.872628599Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:03:05.872736237Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:03:05.872744037Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:03:05.872748947Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:03:05.872753518Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:03:05.872758668Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:03:05.872774509Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:03:05.872800311Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:03:05.872803401Z   status: 404,
2025-09-30T19:03:05.872806481Z   statusText: 'Not Found',
2025-09-30T19:03:05.872809231Z   errorDetails: undefined
2025-09-30T19:03:05.872811912Z }
2025-09-30T19:03:05.873481948Z info: request {"duration":138,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:03:05.873Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:03:36.266950211Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:03:36.266974923Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:03:36.266980253Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:03:36.266984193Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:03:36.266988324Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:03:36.266992324Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:03:36.266996845Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:03:36.267003985Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:03:36.267008065Z   status: 404,
2025-09-30T19:03:36.267012786Z   statusText: 'Not Found',
2025-09-30T19:03:36.267016876Z   errorDetails: undefined
2025-09-30T19:03:36.267020506Z }
2025-09-30T19:03:36.26780585Z info: request {"duration":128,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:03:36.267Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:04:06.918925315Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:04:06.918968908Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:04:06.918975628Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:04:06.918979749Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:04:06.918983839Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:04:06.918988199Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:04:06.91900602Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:04:06.919009571Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:04:06.919012321Z   status: 404,
2025-09-30T19:04:06.919015611Z   statusText: 'Not Found',
2025-09-30T19:04:06.919018301Z   errorDetails: undefined
2025-09-30T19:04:06.919020971Z }
2025-09-30T19:04:06.919847709Z info: request {"duration":114,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:04:06.919Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:04:35.822703138Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:04:35.822740441Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:04:35.822746431Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:04:35.822750471Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:04:35.822755042Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:04:35.822759192Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:04:35.822763472Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:04:35.822768892Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:04:35.822772833Z   status: 404,
2025-09-30T19:04:35.822776163Z   statusText: 'Not Found',
2025-09-30T19:04:35.822778963Z   errorDetails: undefined
2025-09-30T19:04:35.822781683Z }
2025-09-30T19:04:35.823465561Z info: request {"duration":101,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:04:35.823Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:05:06.247496231Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:05:06.248450418Z info: request {"duration":118,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:05:06.248Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:05:06.249832624Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:05:06.249841404Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:05:06.249845404Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:05:06.249850185Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:05:06.249888187Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:05:06.249893288Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:05:06.249896278Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:05:06.249898058Z   status: 404,
2025-09-30T19:05:06.249900588Z   statusText: 'Not Found',
2025-09-30T19:05:06.249902348Z   errorDetails: undefined
2025-09-30T19:05:06.249904018Z }
2025-09-30T19:05:31.629798176Z info: request {"duration":1,"ip":"10.229.170.66","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T19:05:31.629Z","url":"/api/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:05:32.313104639Z info: request {"duration":0,"ip":"10.229.170.66","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-30T19:05:32.312Z","url":"/api/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:05:33.398263118Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:05:33.39828731Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:05:33.39829535Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:05:33.398319022Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:05:33.398336503Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:05:33.398341283Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:05:33.398345754Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:05:33.398349484Z     at async getStatus (/opt/render/project/src/backend/dist/controllers/statusController.js:17:27) {
2025-09-30T19:05:33.398352484Z   status: 404,
2025-09-30T19:05:33.398355915Z   statusText: 'Not Found',
2025-09-30T19:05:33.398358905Z   errorDetails: undefined
2025-09-30T19:05:33.398361715Z }
2025-09-30T19:05:34.832960639Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:05:34.832982451Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:05:34.832987431Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:05:34.833003602Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:05:34.833006282Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:05:34.833008532Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:05:34.833010813Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:05:34.833013503Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:05:34.833015653Z   status: 404,
2025-09-30T19:05:34.833018623Z   statusText: 'Not Found',
2025-09-30T19:05:34.833020753Z   errorDetails: undefined
2025-09-30T19:05:34.833022793Z }
2025-09-30T19:05:34.834111189Z info: request {"duration":79,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:05:34.833Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:05:51.107097793Z error: request {"duration":31338,"ip":"10.229.12.1","method":"GET","route":"/api/health","service":"performance-monitor","status":503,"timestamp":"2025-09-30T19:05:51.106Z","url":"/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:06:03.400694704Z warn: request {"duration":30433,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T19:06:03.400Z","url":"/api/status","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:06:04.871181217Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:06:04.871209589Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:06:04.87122939Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:06:04.871235391Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:06:04.871239961Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:06:04.871244442Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:06:04.871248532Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:06:04.871253572Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:06:04.871257822Z   status: 404,
2025-09-30T19:06:04.871262543Z   statusText: 'Not Found',
2025-09-30T19:06:04.871266613Z   errorDetails: undefined
2025-09-30T19:06:04.871270863Z }
2025-09-30T19:06:04.871809341Z info: request {"duration":125,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:06:04.871Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:06:09.510864244Z info: request {"duration":1,"ip":"10.229.170.66","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-30T19:06:09.510Z","url":"/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:06:10.770695515Z info: request {"duration":547,"ip":"10.229.12.1","method":"POST","route":"/login","service":"performance-monitor","status":403,"timestamp":"2025-09-30T19:06:10.770Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:06:16.360207935Z error: request {"duration":31331,"ip":"10.229.170.66","method":"GET","route":"/health","service":"performance-monitor","status":503,"timestamp":"2025-09-30T19:06:16.359Z","url":"/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:06:27.185981056Z error: request {"duration":30167,"ip":"10.229.12.1","method":"GET","route":"/api/health","service":"performance-monitor","status":503,"timestamp":"2025-09-30T19:06:27.185Z","url":"/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:06:34.864154906Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:06:34.864194848Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:06:34.864201449Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:06:34.864206179Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:06:34.8642105Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:06:34.86421463Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:06:34.86421885Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:06:34.864223501Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:06:34.864227921Z   status: 404,
2025-09-30T19:06:34.864232571Z   statusText: 'Not Found',
2025-09-30T19:06:34.864237442Z   errorDetails: undefined
2025-09-30T19:06:34.864241682Z }
2025-09-30T19:06:34.864903718Z info: request {"duration":125,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:06:34.864Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:06:37.30226147Z Attempting to send verification email to: giridharmalagi7@gmail.com
2025-09-30T19:07:03.279222725Z Attempting to send verification email to: giridharmalagi7@gmail.com
2025-09-30T19:07:03.279284999Z Skipping duplicate email send within window for giridharmalagi7@gmail.com|CiviTrack - Verify Your Email
2025-09-30T19:07:03.280296519Z Verification email sent successfully: undefined
2025-09-30T19:07:03.280339992Z warn: request {"duration":1321,"ip":"10.229.191.1","method":"POST","route":"/resend-verification","service":"performance-monitor","status":200,"timestamp":"2025-09-30T19:07:03.279Z","url":"/api/auth/resend-verification","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:07:04.880627252Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:07:04.880652284Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:07:04.880696487Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:07:04.880699447Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:07:04.880702107Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:07:04.880704927Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:07:04.880707508Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:07:04.880710668Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:07:04.880713388Z   status: 404,
2025-09-30T19:07:04.880716438Z   statusText: 'Not Found',
2025-09-30T19:07:04.880719399Z   errorDetails: undefined
2025-09-30T19:07:04.880721369Z }
2025-09-30T19:07:04.880964905Z info: request {"duration":148,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:07:04.880Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:07:07.320542731Z Email send transient error (attempt 1). Retrying in 2457ms... ETIMEDOUT
2025-09-30T19:07:09.765098501Z Skipping duplicate email send within window for giridharmalagi7@gmail.com|CiviTrack - Verify Your Email
2025-09-30T19:07:09.765132254Z Verification email sent successfully: undefined
2025-09-30T19:07:09.766452835Z warn: request {"duration":33783,"ip":"10.229.170.66","method":"POST","route":"/resend-verification","service":"performance-monitor","status":200,"timestamp":"2025-09-30T19:07:09.765Z","url":"/api/auth/resend-verification","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:07:36.050595884Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:07:36.050628156Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:07:36.050633366Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:07:36.050637336Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:07:36.050677399Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:07:36.05068326Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:07:36.05068575Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:07:36.05068887Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:07:36.0506917Z   status: 404,
2025-09-30T19:07:36.050697431Z   statusText: 'Not Found',
2025-09-30T19:07:36.050699891Z   errorDetails: undefined
2025-09-30T19:07:36.050702111Z }
2025-09-30T19:07:36.05169379Z info: request {"duration":142,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:07:36.051Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:08:05.904088919Z info: request {"duration":112,"ip":"10.229.191.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:08:05.900Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-30T19:08:05.904136463Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:08:05.904143093Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:08:05.904147913Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:08:05.904151524Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:08:05.904155384Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:08:05.904159214Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:08:05.904162984Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:08:05.904167274Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:08:05.904171135Z   status: 404,
2025-09-30T19:08:05.904175685Z   statusText: 'Not Found',
2025-09-30T19:08:05.904179426Z   errorDetails: undefined
2025-09-30T19:08:05.904183126Z }
2025-09-30T19:09:01.926527216Z Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [404 Not Found] models/gemini-1.5-flash is not found for API version v1beta, or is not supported for generateContent. Call ListModels to see the list of available models and their supported methods.
2025-09-30T19:09:01.9271567Z     at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
2025-09-30T19:09:01.92716732Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-09-30T19:09:01.927185702Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-09-30T19:09:01.927221684Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-09-30T19:09:01.927228245Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:154:36
2025-09-30T19:09:01.927231025Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:161:20)
2025-09-30T19:09:01.927234335Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-09-30T19:09:01.927236875Z   status: 404,
2025-09-30T19:09:01.927240445Z   statusText: 'Not Found',
2025-09-30T19:09:01.927243215Z   errorDetails: undefined
2025-09-30T19:09:01.927246206Z }
2025-09-30T19:09:01.927293049Z info: request {"duration":123,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-30T19:09:01.927Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}