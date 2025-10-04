2025-10-04T16:32:02.424123914Z     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
2025-10-04T16:32:02.424128254Z     at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
2025-10-04T16:32:02.424132584Z     at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
2025-10-04T16:32:02.424137014Z     at async /opt/render/project/src/backend/dist/services/geminiService.js:165:36
2025-10-04T16:32:02.424141244Z     at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:176:20)
2025-10-04T16:32:02.424146284Z     at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
2025-10-04T16:32:02.424150574Z   status: 404,
2025-10-04T16:32:02.424155634Z   statusText: 'Not Found',
2025-10-04T16:32:02.424159985Z   errorDetails: undefined
2025-10-04T16:32:02.424164125Z }
2025-10-04T16:32:02.425116737Z info: request {"duration":239,"ip":"10.229.12.1","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-10-04T16:32:02.424Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0"}
2025-10-04T16:32:03.453192047Z warn: request {"duration":2050,"ip":"10.229.191.1","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-10-04T16:32:03.452Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0"}
2025-10-04T16:32:03.45875533Z warn: request {"duration":1654,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-10-04T16:32:03.458Z","url":"/api/issues/nearby?latitude=40.7128&longitude=-74.006&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0"}
2025-10-04T16:32:03.515111546Z info: request {"duration":910,"ip":"10.229.12.1","method":"GET","route":"/nearby","service":"performance-monitor","status":200,"timestamp":"2025-10-04T16:32:03.514Z","url":"/api/issues/nearby?latitude=16.831464845630737&longitude=75.73954550867053&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0"}
2025-10-04T16:32:09.647877871Z Attempting to send password reset email to: giridharmalagi7@gmail.com
2025-10-04T16:32:09.656897347Z info: request {"duration":198,"ip":"10.229.170.66","method":"POST","route":"/request-password-reset","service":"performance-monitor","status":200,"timestamp":"2025-10-04T16:32:09.655Z","url":"/api/auth/request-password-reset","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0"}
2025-10-04T16:32:10.565020802Z Brevo API: sending email {
2025-10-04T16:32:10.565043493Z   subject: 'CiviTrack - Password Reset Request',
2025-10-04T16:32:10.565048353Z   to: [ { email: 'giridharmalagi7@gmail.com' } ]
2025-10-04T16:32:10.565052143Z }
2025-10-04T16:32:11.271720868Z Brevo API send failed; evaluating retry/fallback: BREVO_API_ERROR 401: {"message":"Key not found","code":"unauthorized"}
2025-10-04T16:32:11.271736708Z 
2025-10-04T16:32:11.272184569Z [2025-10-04 16:32:11] DEBUG Sending mail using SMTP (pool)/6.10.1[client:6.10.1]
2025-10-04T16:32:11.275899547Z [2025-10-04 16:32:11] INFO  [#1] Created new pool resource #1
2025-10-04T16:32:11.276049611Z [2025-10-04 16:32:11] DEBUG [#1] Assigned message <72fd1058-4a19-ab08-cafd-d61209ab90a5@civitrack.com> to #1 (1)
2025-10-04T16:32:11.276657265Z [2025-10-04 16:32:11] DEBUG [90NbqGUk9t0] Resolved smtp-relay.brevo.com as 1.179.119.1 [cache hit]
2025-10-04T16:32:21.279235521Z [2025-10-04 16:32:21] ERROR [90NbqGUk9t0] Connection timeout
2025-10-04T16:32:21.279360844Z [2025-10-04 16:32:21] ERROR [#1] Pool Error for #1: Connection timeout
2025-10-04T16:32:21.27961771Z [2025-10-04 16:32:21] ERROR Send Error: Connection timeout
2025-10-04T16:32:21.280229084Z [2025-10-04 16:32:21] DEBUG [90NbqGUk9t0] Closing connection to the server using "destroy"
2025-10-04T16:32:21.280502321Z [2025-10-04 16:32:21] INFO  [#1] Connection #1 was closed
2025-10-04T16:32:21.280667195Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #0: 10.716s
2025-10-04T16:32:21.280911281Z Email send transient error (attempt 1). Retrying in 3431ms... ETIMEDOUT
2025-10-04T16:32:24.714909042Z Brevo API: sending email {
2025-10-04T16:32:24.714941013Z   subject: 'CiviTrack - Password Reset Request',
2025-10-04T16:32:24.714946353Z   to: [ { email: 'giridharmalagi7@gmail.com' } ]
2025-10-04T16:32:24.714966763Z }
2025-10-04T16:32:25.398233949Z Brevo API send failed; evaluating retry/fallback: BREVO_API_ERROR 401: {"message":"Key not found","code":"unauthorized"}
2025-10-04T16:32:25.39827549Z 
2025-10-04T16:32:25.398295521Z [2025-10-04 16:32:25] DEBUG Sending mail using SMTP (pool)/6.10.1[client:6.10.1]
2025-10-04T16:32:25.398300161Z [2025-10-04 16:32:25] INFO  [#2] Created new pool resource #2
2025-10-04T16:32:25.398391533Z [2025-10-04 16:32:25] DEBUG [#2] Assigned message <0c4b18ef-f6a9-2eca-22f6-746f3205fdde@civitrack.com> to #2 (1)
2025-10-04T16:32:25.398590028Z [2025-10-04 16:32:25] DEBUG [n0988X4L36s] Resolved smtp-relay.brevo.com as 1.179.119.1 [cache hit]
2025-10-04T16:32:35.403531109Z [2025-10-04 16:32:35] ERROR [n0988X4L36s] Connection timeout
2025-10-04T16:32:35.403596331Z [2025-10-04 16:32:35] ERROR [#2] Pool Error for #2: Connection timeout
2025-10-04T16:32:35.403642462Z [2025-10-04 16:32:35] ERROR Send Error: Connection timeout
2025-10-04T16:32:35.403744214Z [2025-10-04 16:32:35] DEBUG [n0988X4L36s] Closing connection to the server using "destroy"
2025-10-04T16:32:35.403896148Z [2025-10-04 16:32:35] INFO  [#2] Connection #2 was closed
2025-10-04T16:32:35.40398943Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #1: 10.690s
2025-10-04T16:32:35.404055782Z Email send transient error (attempt 2). Retrying in 6249ms... ETIMEDOUT
2025-10-04T16:32:41.653910074Z Brevo API: sending email {
2025-10-04T16:32:41.653935415Z   subject: 'CiviTrack - Password Reset Request',
2025-10-04T16:32:41.653941065Z   to: [ { email: 'giridharmalagi7@gmail.com' } ]
2025-10-04T16:32:41.653945245Z }
2025-10-04T16:32:42.21237225Z Brevo API send failed; evaluating retry/fallback: BREVO_API_ERROR 401: {"message":"Key not found","code":"unauthorized"}
2025-10-04T16:32:42.21239591Z 
2025-10-04T16:32:42.212415181Z [2025-10-04 16:32:42] DEBUG Sending mail using SMTP (pool)/6.10.1[client:6.10.1]
2025-10-04T16:32:42.213049726Z [2025-10-04 16:32:42] INFO  [#3] Created new pool resource #3
2025-10-04T16:32:42.213104047Z [2025-10-04 16:32:42] DEBUG [#3] Assigned message <4be19dad-ec13-00fd-bfb9-3f49d9b4e788@civitrack.com> to #3 (1)
2025-10-04T16:32:42.213341323Z [2025-10-04 16:32:42] DEBUG [6zdEzVcD96U] Resolved smtp-relay.brevo.com as 1.179.119.1 [cache hit]
2025-10-04T16:32:52.214230428Z [2025-10-04 16:32:52] ERROR [6zdEzVcD96U] Connection timeout
2025-10-04T16:32:52.214284589Z [2025-10-04 16:32:52] ERROR [#3] Pool Error for #3: Connection timeout
2025-10-04T16:32:52.214369662Z [2025-10-04 16:32:52] ERROR Send Error: Connection timeout
2025-10-04T16:32:52.214442573Z [2025-10-04 16:32:52] DEBUG [6zdEzVcD96U] Closing connection to the server using "destroy"
2025-10-04T16:32:52.214587787Z [2025-10-04 16:32:52] INFO  [#3] Connection #3 was closed
2025-10-04T16:32:52.214684329Z Email send attempt for giridharmalagi7@gmail.com|CiviTrack - Password Reset Request #2: 10.561s
2025-10-04T16:32:52.21473303Z Email send transient error (attempt 3). Retrying in 12136ms... ETIMEDOUT
2025-10-04T16:33:04.354265695Z Brevo API: sending email {
2025-10-04T16:33:04.354295255Z   subject: 'CiviTrack - Password Reset Request',
2025-10-04T16:33:04.354299695Z   to: [ { email: 'giridharmalagi7@gmail.com' } ]
2025-10-04T16:33:04.354303165Z }
2025-10-04T16:33:04.887843036Z Brevo API send failed; evaluating retry/fallback: BREVO_API_ERROR 401: {"message":"Key not found","code":"unauthorized"}
2025-10-04T16:33:04.887866937Z 
2025-10-04T16:33:04.887924988Z [2025-10-04 16:33:04] DEBUG Sending mail using SMTP (pool)/6.10.1[client:6.10.1]
2025-10-04T16:33:04.888484211Z [2025-10-04 16:33:04] INFO  [#4] Created new pool resource #4
2025-10-04T16:33:04.888544503Z [2025-10-04 16:33:04] DEBUG [#4] Assigned message <7cce8ba9-0f05-17ce-7e2b-c6a07bc405cf@civitrack.com> to #4 (1)
2025-10-04T16:33:04.888756448Z [2025-10-04 16:33:04] DEBUG [OuwikrBd3Yo] Resolved smtp-relay.brevo.com as 1.179.119.1 [cache hit]