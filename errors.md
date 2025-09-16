Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [503 Service Unavailable] The model is overloaded. Please try again later.
    at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
    at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
    at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
    at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
  status: 503,
  statusText: 'Service Unavailable',
  errorDetails: undefined
}
info: request {"duration":193,"ip":"10.229.92.67","method":"GET","route":"/health","service":"performance-monitor","status":200,"timestamp":"2025-09-13T11:36:52.735Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [503 Service Unavailable] The model is overloaded. Please try again later.
    at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
    at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
    at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
    at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
  status: 503,
  statusText: 'Service Unavailable',
  errorDetails: undefined
}
info: request {"duration":177,"ip":"10.229.98.4","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-13T11:37:22.748Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":438,"ip":"10.229.92.193","method":"GET","route":"/health","service":"performance-monitor","status":200,"timestamp":"2025-09-13T11:38:27.418Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":364,"ip":"10.229.92.67","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-13T11:41:22.838Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":386,"ip":"10.229.92.67","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-13T11:41:53.031Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":374,"ip":"10.229.92.193","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-13T11:42:24.554Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
warn: request {"duration":1976,"ip":"10.229.92.193","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-13T11:43:28.551Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":385,"ip":"10.229.98.4","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-13T11:51:40.664Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":586,"ip":"10.229.98.4","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-13T11:51:46.125Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
warn: request {"duration":1355,"ip":"10.229.92.193","method":"GET","route":"/api/health","service":"performance-monitor","status":503,"timestamp":"2025-09-13T11:51:56.475Z","url":"/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":1,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-13T11:51:57.636Z","url":"/api/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":1,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-13T11:51:58.248Z","url":"/api/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":1,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-13T11:51:58.876Z","url":"/api/status","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":168,"ip":"10.229.98.4","method":"GET","route":"/health","service":"performance-monitor","status":503,"timestamp":"2025-09-13T11:51:59.671Z","url":"/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":167,"ip":"10.229.92.193","method":"GET","route":"/api/health","service":"performance-monitor","status":503,"timestamp":"2025-09-13T11:52:00.552Z","url":"/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":6,"ip":"10.229.92.193","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-13T11:52:01.175Z","url":"/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":717,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:02.513Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":715,"ip":"10.229.92.67","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:03.865Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":715,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:05.246Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":717,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:06.701Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":713,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:08.565Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:10.235Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:12.053Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":718,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:14.370Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:16.483Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.67","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:18.798Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":713,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:21.711Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
warn: request {"duration":7807,"ip":"10.229.92.193","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-13T11:52:22.831Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":167,"ip":"10.229.98.4","method":"GET","route":"/api/health","service":"performance-monitor","status":503,"timestamp":"2025-09-13T11:52:30.834Z","url":"/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":0,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-13T11:52:31.466Z","url":"/api/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":1,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-13T11:52:32.096Z","url":"/api/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":1,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-13T11:52:33.127Z","url":"/api/status","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":168,"ip":"10.229.92.67","method":"GET","route":"/health","service":"performance-monitor","status":503,"timestamp":"2025-09-13T11:52:34.462Z","url":"/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":168,"ip":"10.229.98.4","method":"GET","route":"/api/health","service":"performance-monitor","status":503,"timestamp":"2025-09-13T11:52:35.504Z","url":"/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":1,"ip":"10.229.92.67","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-13T11:52:36.629Z","url":"/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":713,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:38.199Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":716,"ip":"10.229.92.67","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:40.168Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":713,"ip":"10.229.92.67","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:42.038Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":715,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:44.636Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":366,"ip":"10.229.98.4","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-13T11:52:46.170Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":713,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:47.467Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:50.941Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:53.142Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.92.67","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:55.157Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":718,"ip":"10.229.92.67","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:52:58.465Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":723,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:53:01.173Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'admin@example.com';`,
  parameters: {}
}
info: request {"duration":714,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:53:04.472Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":583,"ip":"10.229.98.4","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-13T11:53:16.044Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":338,"ip":"10.229.92.193","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-13T11:53:45.360Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
warn: request {"duration":1328,"ip":"10.229.98.4","method":"GET","route":"/api/health","service":"performance-monitor","status":503,"timestamp":"2025-09-13T11:53:45.859Z","url":"/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":1,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-13T11:53:46.461Z","url":"/api/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":1,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-13T11:53:47.117Z","url":"/api/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":1,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":404,"timestamp":"2025-09-13T11:53:47.819Z","url":"/api/status","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":164,"ip":"10.229.98.4","method":"GET","route":"/health","service":"performance-monitor","status":503,"timestamp":"2025-09-13T11:53:48.604Z","url":"/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":164,"ip":"10.229.92.193","method":"GET","route":"/api/health","service":"performance-monitor","status":503,"timestamp":"2025-09-13T11:53:49.487Z","url":"/api/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":0,"ip":"10.229.92.67","method":"GET","route":"/","service":"performance-monitor","status":200,"timestamp":"2025-09-13T11:53:50.114Z","url":"/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
  parameters: {}
}
info: request {"duration":704,"ip":"10.229.92.67","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:53:51.428Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
  parameters: {}
}
info: request {"duration":704,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:53:52.767Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
  parameters: {}
}
info: request {"duration":703,"ip":"10.229.92.67","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:53:54.117Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
  parameters: {}
}
info: request {"duration":703,"ip":"10.229.92.193","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:53:55.611Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
  parameters: {}
}
info: request {"duration":702,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:53:57.442Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
  parameters: {}
}
info: request {"duration":703,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:53:59.145Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
  parameters: {}
}
info: request {"duration":712,"ip":"10.229.92.67","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:54:00.959Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
  parameters: {}
}
info: request {"duration":703,"ip":"10.229.92.67","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:54:03.551Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
info: request {"duration":703,"ip":"10.229.98.4","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:54:06.152Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
  parameters: {}
}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
  parameters: {}
}
info: request {"duration":704,"ip":"10.229.92.67","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:54:09.526Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Login error: Error
    at Query.run (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/postgres/query.js:50:25)
    at /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:315:28
    at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
    at async User.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
    at async User.findOne (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1240:12)
    at async login (/opt/render/project/src/backend/dist/controllers/authController.js:79:22) {
  name: 'SequelizeDatabaseError',
  parent: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  original: error: column "failedLoginAttempts" does not exist
      at Parser.parseErrorMessage (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:285:98)
      at Parser.handlePacket (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:122:29)
      at Parser.parse (/opt/render/project/src/backend/node_modules/pg-protocol/dist/parser.js:35:38)
      at TLSSocket.<anonymous> (/opt/render/project/src/backend/node_modules/pg-protocol/dist/index.js:11:42)
      at TLSSocket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at TLSWrap.onStreamRead (node:internal/stream_base_commons:189:23) {
    length: 120,
    severity: 'ERROR',
    code: '42703',
    detail: undefined,
    hint: undefined,
    position: '209',
    internalPosition: undefined,
    internalQuery: undefined,
    where: undefined,
    schema: undefined,
    table: undefined,
    column: undefined,
    dataType: undefined,
    constraint: undefined,
    file: 'parse_relation.c',
    line: '3716',
    routine: 'errorMissingColumn',
    sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
    parameters: undefined
  },
  sql: `SELECT "id", "username", "name", "email", "password", "role", "profileImage", "isAdmin", "isEmailVerified", "emailVerificationToken", "emailVerificationExpires", "resetPasswordToken", "resetPasswordExpires", "failedLoginAttempts", "lastFailedLoginAt", "lockoutUntil", "createdAt", "updatedAt" FROM "users" AS "User" WHERE "User"."email" = 'test1@gmail.com';`,
  parameters: {}
}
info: request {"duration":703,"ip":"10.229.92.67","method":"POST","route":"/login","service":"performance-monitor","status":500,"timestamp":"2025-09-13T11:54:12.261Z","url":"/api/auth/login","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Gemini service validation failed: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent: [503 Service Unavailable] The model is overloaded. Please try again later.
    at handleResponseNotOk (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:434:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async makeRequest (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:403:9)
    at async generateContent (/opt/render/project/src/backend/node_modules/@google/generative-ai/dist/index.js:867:22)
    at async GeminiService.validateService (/opt/render/project/src/backend/dist/services/geminiService.js:149:32)
    at async validateService (/opt/render/project/src/backend/dist/controllers/aiController.js:44:20) {
  status: 503,
  statusText: 'Service Unavailable',
  errorDetails: undefined
}
info: request {"duration":175,"ip":"10.229.98.4","method":"GET","route":"/health","service":"performance-monitor","status":200,"timestamp":"2025-09-13T11:54:15.630Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":338,"ip":"10.229.92.193","method":"GET","route":"/health","service":"performance-monitor","status":200,"timestamp":"2025-09-13T11:54:45.866Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":367,"ip":"10.229.98.4","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-13T11:55:27.055Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
info: request {"duration":385,"ip":"10.229.92.193","method":"GET","route":"/health","service":"performance-monitor","status":304,"timestamp":"2025-09-13T11:56:27.415Z","url":"/api/ai/health","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
Need better ways to 