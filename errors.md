2025-09-11T17:11:55.958226138Z     at async Promise.all (index 1)
2025-09-11T17:11:55.958228498Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:11:55.982996046Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:55.983013157Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:55.996281599Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:56.01046995Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:56.025951138Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:56.025971108Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:56.059275582Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:56.059305863Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:56.059309963Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:56.059312693Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:11:56.086179184Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:56.086199204Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:56.097571798Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:56.685012254Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:56.685027895Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:56.685043495Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:56.685046775Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:56.685049035Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:56.685051855Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:56.685054015Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:11:56.685057115Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:11:56.685059755Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:11:56.685074596Z     at async Promise.all (index 0)
2025-09-11T17:11:56.685077126Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:11:56.685079436Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:56.685081706Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:56.685084176Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:56.685086606Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:11:56.685089086Z   original: TimeoutError: Operation timeout
2025-09-11T17:11:56.685091676Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:56.685094316Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:56.685096956Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:56.685099166Z }
2025-09-11T17:11:56.685118387Z error: undefined {"duration":30330,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:11:56.684Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:56.890053023Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:56.890073943Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:56.890076793Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:56.890078563Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:56.890080743Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:56.890082923Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:56.890084714Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:11:56.890087094Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:11:56.890088844Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:11:56.890091164Z     at async Promise.all (index 0)
2025-09-11T17:11:56.890093064Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:11:56.890094754Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:56.890096424Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:56.890098094Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:56.890099844Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:11:56.890101534Z   original: TimeoutError: Operation timeout
2025-09-11T17:11:56.890103364Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:56.890105124Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:56.890106854Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:56.890108734Z }
2025-09-11T17:11:57.084853431Z error: undefined {"duration":30721,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:11:57.084Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:57.090718251Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:57.090739062Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:57.090743042Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:57.090745682Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:57.090748232Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:57.090751142Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:57.090753712Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:11:57.090756952Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:11:57.090759562Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:11:57.090762852Z     at async Promise.all (index 0)
2025-09-11T17:11:57.090765422Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:11:57.090768042Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:57.090770772Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:57.090773442Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:57.090776122Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:11:57.090778513Z   original: TimeoutError: Operation timeout
2025-09-11T17:11:57.090780942Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:57.090783533Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:57.090785873Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:57.090788533Z }
2025-09-11T17:11:57.090909595Z error: undefined {"duration":30717,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:11:57.090Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:57.09309172Z error: undefined {"duration":54304,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:11:57.092Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:57.0935711Z error: undefined {"duration":54305,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:11:57.093Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:57.094115731Z error: undefined {"duration":54304,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:11:57.094Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:57.096835137Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:57.096847037Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:57.096850807Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:57.096853497Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:57.096855957Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:57.096867838Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:57.096870818Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:11:57.096874788Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:11:57.096877108Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:11:57.096880208Z     at async Promise.all (index 0)
2025-09-11T17:11:57.096882458Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:11:57.096884698Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:57.096887068Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:57.096889258Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:57.096891408Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:11:57.096893598Z   original: TimeoutError: Operation timeout
2025-09-11T17:11:57.096895818Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:57.096898028Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:57.096900228Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:57.096902438Z }
2025-09-11T17:11:57.284636391Z error: undefined {"duration":30853,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:11:57.284Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:57.285110451Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:57.285123471Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:57.285126861Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:57.285129311Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:57.285131562Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:57.285134271Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:57.285136491Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:11:57.285151802Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:11:57.285154362Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:11:57.285156912Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:11:57.285159692Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:57.285161982Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:57.285164572Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:57.285166882Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:11:57.285169002Z   original: TimeoutError: Operation timeout
2025-09-11T17:11:57.285171222Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:57.285173462Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:57.285175592Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:57.285177852Z }
2025-09-11T17:11:57.285427108Z error: undefined {"duration":54492,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:11:57.285Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:57.285713883Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:57.285722623Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:57.285725784Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:57.285728144Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:57.285730514Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:57.285733324Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:57.285748224Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:11:57.285751784Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:11:57.285754044Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:11:57.285756764Z     at async Promise.all (index 0)
2025-09-11T17:11:57.285759104Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:11:57.285761394Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:57.285763654Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:57.285766104Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:57.285768375Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:11:57.285770704Z   original: TimeoutError: Operation timeout
2025-09-11T17:11:57.285772915Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:57.285775115Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:57.285785405Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:57.285818065Z }
2025-09-11T17:11:57.285929108Z error: undefined {"duration":30841,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:11:57.285Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:57.287059091Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:57.287069401Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:57.287072811Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:57.289203505Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:57.289206425Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:57.289215545Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:57.295640087Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:57.486937303Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:57.486981684Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:57.486986374Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:57.486988914Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:57.486991394Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:57.486994745Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:57.486997325Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:11:57.586385624Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:57.586425605Z error: undefined {"duration":54330,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:11:57.586Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:57.586426875Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:57.586439255Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:57.586442275Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:57.586444706Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:57.586447826Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:57.785273487Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:57.785297217Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:57.785301267Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:57.785303897Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:57.785307047Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:57.785310527Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:57.785312757Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:11:57.785315427Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:11:57.785317677Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:11:57.785320188Z     at async Promise.all (index 0)
2025-09-11T17:11:57.785326897Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:11:57.785330068Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:57.785332808Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:57.785335678Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:57.785338378Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:11:57.785341018Z   original: TimeoutError: Operation timeout
2025-09-11T17:11:57.785343558Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:57.785346388Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:57.785348718Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:57.785351178Z }
2025-09-11T17:11:57.91310539Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:57.91313146Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:57.913135301Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:57.913137981Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:11:57.913141211Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:11:57.913144001Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:11:57.913146851Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:11:57.913149801Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:57.913152341Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:57.913155221Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:57.913158511Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:11:57.913161151Z   original: TimeoutError: Operation timeout
2025-09-11T17:11:57.913163831Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:57.913166361Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:57.913168661Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:57.913171041Z }
2025-09-11T17:11:57.91357585Z error: undefined {"duration":54584,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:11:57.913Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:57.936122283Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:57.936167853Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:58.110189625Z error: undefined {"duration":54774,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:11:58.110Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:58.110863959Z error: undefined {"duration":54774,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:11:58.110Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:58.111373339Z error: undefined {"duration":54773,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:11:58.111Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:58.271479815Z error: undefined {"duration":54906,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:11:58.271Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:58.272380754Z error: undefined {"duration":54834,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:11:58.272Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:58.320503081Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:58.320531312Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:58.320536692Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:58.320540902Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:58.320543772Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:58.320546982Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:58.320550233Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:11:58.320555323Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:11:58.320558263Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:11:58.320561863Z     at async Promise.all (index 0)
2025-09-11T17:11:58.320565003Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:11:58.320568033Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:58.320571153Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:58.320574033Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:58.320576733Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:11:58.320579493Z   original: TimeoutError: Operation timeout
2025-09-11T17:11:58.320582183Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:58.320585133Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:58.320588113Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:58.320590783Z }
2025-09-11T17:11:58.320779937Z error: undefined {"duration":30001,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:11:58.320Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:58.325267919Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:58.32529523Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:58.32529873Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:58.32530132Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:58.32530376Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:58.32530698Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:58.32530941Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:11:58.32531233Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:11:58.3253149Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:11:58.340038353Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:58.345823071Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:58.36380501Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:58.384491685Z error: undefined {"duration":30021,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:11:58.384Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:58.386403274Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:58.386417494Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:58.386421254Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:58.386424185Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:58.386426985Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:58.433404149Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:58.433419629Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:58.491648914Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:58.491694035Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:58.491697205Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:58.491699165Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:11:58.491702105Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:11:58.491703895Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:11:58.554264779Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:58.5542821Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:58.55428497Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:58.55428717Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:11:58.55428946Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:11:58.55430509Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:11:58.55430725Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:11:58.588552293Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:58.588577743Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:58.649076605Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:58.649104626Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:58.649108656Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:58.649111546Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:11:58.649114706Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:11:58.649118706Z     at async Promise.all (index 1)
2025-09-11T17:11:58.649121696Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:11:58.735352016Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:58.735367376Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:58.735371066Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:58.735373706Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:11:58.735377106Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:11:58.735380807Z     at async Promise.all (index 1)
2025-09-11T17:11:58.735383807Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:11:58.735398337Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:11:58.735400247Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:11:58.735401957Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:58.817297688Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:58.817319998Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:58.817322878Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:58.817324918Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:11:58.817327178Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:11:58.817329018Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:11:58.817330658Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:11:58.817333118Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:58.817334869Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:58.817337049Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:58.817338799Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:11:58.817340459Z   original: TimeoutError: Operation timeout
2025-09-11T17:11:58.817342179Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:58.817343939Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:58.817345679Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:58.817347429Z }
2025-09-11T17:11:58.817745527Z error: undefined {"duration":55073,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:11:58.817Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:58.818429891Z error: undefined {"duration":55291,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:11:58.818Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:58.909578102Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:58.909607442Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:58.909612432Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:58.909616132Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:11:58.909620332Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:11:58.909625283Z     at async Promise.all (index 1)
2025-09-11T17:11:59.03860931Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:59.038636421Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:59.038640391Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:59.038643501Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:11:59.038646781Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:11:59.038649381Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:11:59.038670721Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:11:59.094352164Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:59.094382665Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:59.094387985Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:59.130801302Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:59.130826393Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:59.130830473Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:59.130833173Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:59.229516298Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:59.229532498Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:59.229536869Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:59.229539789Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:11:59.229543299Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:11:59.229546879Z     at async Promise.all (index 1)
2025-09-11T17:11:59.229549779Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:11:59.229552469Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:11:59.229555069Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:11:59.229557849Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:59.229560729Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:59.229563659Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:59.229565359Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:11:59.318405362Z error: undefined {"duration":55423,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:11:59.318Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:59.402860376Z error: undefined {"duration":55501,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:11:59.402Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:59.403285405Z error: undefined {"duration":55407,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:11:59.403Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:59.404133762Z error: undefined {"duration":55390,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:11:59.404Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:59.450535134Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:59.450555845Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:59.450559845Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:59.450562655Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:11:59.450565925Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:11:59.450569165Z     at async Promise.all (index 1)
2025-09-11T17:11:59.450571775Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:11:59.450574545Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:11:59.450577205Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:11:59.450579965Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:59.450583066Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:59.450586006Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:59.450587766Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:11:59.450590106Z   original: TimeoutError: Operation timeout
2025-09-11T17:11:59.450592976Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:59.467580094Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:59.485062603Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:59.52489314Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:59.524911591Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:59.524915351Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:59.524918181Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:11:59.524921491Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:11:59.800806513Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:59.800844334Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:59.800848554Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:59.800851244Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:59.800854154Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:59.800865685Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:59.800869345Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:11:59.800872955Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:11:59.800875785Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:11:59.800879275Z     at async Promise.all (index 0)
2025-09-11T17:11:59.800881745Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:11:59.800887675Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:59.800890455Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:59.800893305Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:59.800896045Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:11:59.800898945Z   original: TimeoutError: Operation timeout
2025-09-11T17:11:59.800901805Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:59.800904745Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:59.800907505Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:59.800910065Z }
2025-09-11T17:11:59.801215062Z error: undefined {"duration":30001,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:11:59.800Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:59.832550705Z error: undefined {"duration":55660,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:11:59.832Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:11:59.887292658Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:11:59.88736507Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:11:59.88736903Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:11:59.88737166Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:11:59.88737412Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:11:59.88737695Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:11:59.88737948Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:11:59.88738252Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:11:59.887388271Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:11:59.887391511Z     at async Promise.all (index 0)
2025-09-11T17:11:59.88739416Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:11:59.887396731Z   parent: TimeoutError: Operation timeout
2025-09-11T17:11:59.887399161Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:11:59.887401861Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:11:59.887404461Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:11:59.887406931Z   original: TimeoutError: Operation timeout
2025-09-11T17:11:59.887409221Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:00.085712021Z error: undefined {"duration":55695,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:00.085Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:00.107868636Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:00.107890196Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:00.107892916Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:00.107894776Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:00.107896646Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:00.107898746Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:00.107900486Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:00.107902656Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:00.107904466Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:00.107906446Z     at async Promise.all (index 0)
2025-09-11T17:12:00.107908246Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:00.107909917Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:00.107911997Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:00.107929327Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:00.107932327Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:00.107934997Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:00.107937617Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:00.107940597Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:00.107943197Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:00.107945687Z }
2025-09-11T17:12:00.108267114Z error: undefined {"duration":30003,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:00.108Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:00.109908767Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:00.109923858Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:00.109927488Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:00.109930288Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:00.218412704Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:00.218443795Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:00.218449035Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:00.218452495Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:00.354536308Z error: undefined {"duration":55947,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:00.354Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:00.354970597Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:00.354982157Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:00.354985917Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:00.354988677Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:00.354991577Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:00.354994577Z     at async Promise.all (index 1)
2025-09-11T17:12:00.354997158Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:00.355000098Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:00.355002698Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:00.355005788Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:00.355009618Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:00.355011718Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:00.355013408Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:00.365252778Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:00.384548834Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:00.384564775Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:00.409332133Z error: undefined {"duration":56000,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:00.409Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:00.426056906Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:00.426075327Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:00.426079247Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:00.426085167Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:00.447230261Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:00.491800635Z error: undefined {"duration":56078,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:00.491Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:00.49835659Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:00.49837345Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:00.49837801Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:00.4983815Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:00.548853916Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:00.548882887Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:00.548886247Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:00.548888147Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:00.548890737Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:00.548892937Z     at async Promise.all (index 1)
2025-09-11T17:12:00.548894647Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:00.658245601Z error: undefined {"duration":56212,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:00.658Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:00.703531661Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:00.703552851Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:00.703555842Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:00.703558142Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:00.703560551Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:00.703574472Z     at async Promise.all (index 1)
2025-09-11T17:12:00.703576422Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:00.703578242Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:00.703579972Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:00.703582052Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:00.703583832Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:00.703586042Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:00.703587852Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:00.703590382Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:00.703593352Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:00.825135277Z error: undefined {"duration":56268,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:00.824Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:00.884681339Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:00.884706429Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:00.88470986Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:00.8847125Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:00.88471575Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:00.88471817Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:00.88472088Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:00.88472396Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:00.88472647Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:00.88474302Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:00.88474563Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:00.88474818Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:00.88475052Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:00.88475305Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:00.88475527Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:00.88475773Z }
2025-09-11T17:12:00.884932404Z error: undefined {"duration":56280,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:00.884Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:00.89546279Z error: undefined {"duration":56302,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:00.895Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:01.017196239Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:01.017220929Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:01.017224589Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:01.017227359Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:01.017230469Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:01.017233739Z     at async Promise.all (index 1)
2025-09-11T17:12:01.017236529Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:01.017239449Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:01.017241969Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:01.017244569Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:01.057357813Z error: undefined {"duration":56388,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:01.057Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:01.126564403Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:01.126591664Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:01.126595714Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:01.126598684Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:01.126602334Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:01.126605734Z     at async Promise.all (index 1)
2025-09-11T17:12:01.126608604Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:01.126611264Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:01.126613914Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:01.126616345Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:01.218353077Z error: undefined {"duration":56389,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:01.218Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:01.324923715Z error: undefined {"duration":56460,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:01.324Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:01.380692819Z error: undefined {"duration":56474,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:01.380Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:01.382153829Z error: undefined {"duration":56460,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:01.382Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:01.543737486Z error: undefined {"duration":56578,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:01.543Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:01.658011201Z error: undefined {"duration":56697,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:01.657Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:01.993086618Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:01.993129259Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:01.993134619Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:01.993142569Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:01.993147559Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:01.993152509Z     at async Promise.all (index 1)
2025-09-11T17:12:01.993156549Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:01.993160739Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:01.993164799Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:01.99316882Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:01.99317295Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:01.99317751Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:01.99318167Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:01.99318587Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:01.99319019Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:01.9931944Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:01.99319851Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:01.99320285Z }
2025-09-11T17:12:01.993461896Z error: undefined {"duration":30001,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:01.993Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:01.994627169Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:01.9946393Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:01.99464462Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:01.99464899Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:01.994669621Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:01.994676881Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:01.994695211Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:01.994700491Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:01.994720862Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:01.994724522Z     at async Promise.all (index 0)
2025-09-11T17:12:01.994726922Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:01.994729292Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:01.994731642Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:01.994733992Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:01.994736252Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:01.994738702Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:01.994741032Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:01.994743512Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:01.994746382Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:01.994748722Z }
2025-09-11T17:12:01.994965727Z error: undefined {"duration":30002,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:01.994Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:01.995355075Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:01.995362684Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:01.995366125Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:01.995368575Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:01.995371065Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:01.995373895Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:01.995376685Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:01.995379505Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:01.995382255Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:01.995385255Z     at async Promise.all (index 0)
2025-09-11T17:12:01.995388025Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:01.995390385Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:01.995392955Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:01.995395335Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:01.995397725Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:01.995399995Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:01.995402615Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:01.995404905Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:01.995407396Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:01.995419736Z }
2025-09-11T17:12:01.9956125Z error: undefined {"duration":30002,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:01.995Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:01.995910736Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:01.995928636Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:01.995932366Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:01.995935246Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:01.995937926Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:01.995940967Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:01.995943856Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:01.995947056Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:01.995949647Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:01.995952727Z     at async Promise.all (index 0)
2025-09-11T17:12:01.995955947Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:01.995958357Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:01.995960037Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:01.995961717Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:01.995963407Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:01.995965187Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:01.995966867Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:01.995968557Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:01.995970237Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:01.995971947Z }
2025-09-11T17:12:01.996162301Z error: undefined {"duration":30002,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:01.996Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:02.089916795Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:02.089946606Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:02.089951306Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:02.089955166Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:02.089958646Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:02.089963006Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:02.089965316Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:02.089967956Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:02.089970766Z     at async Promise.all (index 1)
2025-09-11T17:12:02.089973006Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:02.089975106Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31) {
2025-09-11T17:12:02.089977166Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:02.089979477Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:02.089981577Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:02.189573431Z error: undefined {"duration":57221,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:02.189Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:02.324730724Z error: undefined {"duration":57271,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:02.324Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:02.351023494Z error: undefined {"duration":57292,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:02.350Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:02.37418999Z error: undefined {"duration":57313,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:02.373Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:02.439814817Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:02.439837397Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:02.439840707Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:02.439843307Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:02.439845487Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:02.439848047Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:02.439850237Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:02.439852737Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:02.439854827Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:02.439857387Z     at async Promise.all (index 0)
2025-09-11T17:12:02.439859618Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:02.439861727Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:02.439863827Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:02.439865938Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:02.439868068Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:02.439870128Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:02.439872218Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:02.439874338Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:02.439876568Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:02.439878668Z }
2025-09-11T17:12:02.440126613Z error: undefined {"duration":30001,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:02.439Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:02.545975265Z error: undefined {"duration":57484,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:02.545Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:02.657724209Z error: undefined {"duration":57595,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:02.657Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:02.670890959Z error: undefined {"duration":57607,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:02.670Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:02.675932163Z error: undefined {"duration":57603,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:02.675Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:02.676734939Z error: undefined {"duration":57524,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:02.676Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:02.714151757Z error: undefined {"duration":57526,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:02.713Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:02.905815291Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:02.905841451Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:02.905845751Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:02.905848882Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:02.905852002Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:02.905855342Z     at async Promise.all (index 1)
2025-09-11T17:12:02.905857872Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:02.905860352Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:02.905863172Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:02.905865672Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:02.905868182Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:02.905871592Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:02.905874112Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:02.905876632Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:02.905879072Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:02.905897112Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:02.905903123Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:02.905906003Z }
2025-09-11T17:12:02.906186349Z error: undefined {"duration":30002,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:02.906Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:02.907292801Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:02.907306501Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:02.907310432Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:02.907313281Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:02.907315712Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:02.907318912Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:02.907321652Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:02.907325342Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:02.907327952Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:02.907330892Z     at async Promise.all (index 0)
2025-09-11T17:12:02.907333582Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:02.907359162Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:02.907362902Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:02.907365953Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:02.907368773Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:02.907371393Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:02.907374093Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:02.907376713Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:02.907379353Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:02.907381923Z }
2025-09-11T17:12:02.907568227Z error: undefined {"duration":30002,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:02.907Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:02.907940944Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:02.907954765Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:02.907958395Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:02.907961075Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:02.907974515Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:02.907978165Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:02.907981115Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:02.907984225Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:02.907986865Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:02.985716841Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:02.985741221Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:02.985744951Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:02.987740062Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:02.99102196Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:03.087198824Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:03.087236344Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:03.087240604Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:03.087242945Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:03.087245534Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:03.087248474Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:03.087250605Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:03.087253275Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:03.087255395Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:03.087257985Z     at async Promise.all (index 0)
2025-09-11T17:12:03.087260435Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:03.087262525Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:03.087264825Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:03.087267015Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:03.161050259Z error: undefined {"duration":57924,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:03.160Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:03.190262959Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:03.190287749Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:03.190292249Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:03.19029502Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:03.190298369Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:03.190301909Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:03.388245252Z error: undefined {"duration":58105,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:03.388Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:03.481438245Z error: undefined {"duration":58184,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:03.480Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:03.484313044Z error: undefined {"duration":58145,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:03.484Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:03.485871056Z error: undefined {"duration":58008,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:03.485Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:03.489514561Z error: undefined {"duration":58109,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:03.489Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:03.610018304Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:03.610045124Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:03.610049675Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:03.610052105Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:03.610054515Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:03.610058495Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:03.610061065Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:03.610064715Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:03.610067185Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:03.610070705Z     at async Promise.all (index 0)
2025-09-11T17:12:03.610073295Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:03.610075845Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:03.610078725Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:03.610081445Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:03.610083975Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:03.610086525Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:03.610089035Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:03.610091465Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:03.610093885Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:03.610096016Z }
2025-09-11T17:12:03.610240399Z error: undefined {"duration":30001,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:03.610Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:03.803934934Z error: undefined {"duration":58262,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:03.803Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:03.807111309Z error: undefined {"duration":58095,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:03.806Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:03.809628931Z error: undefined {"duration":57914,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:03.809Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:03.822422083Z error: undefined {"duration":57897,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:03.822Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:03.893922121Z error: undefined {"duration":57947,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:03.893Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:04.106518454Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:04.106538225Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:04.106541985Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:04.106544875Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:04.106547595Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:04.106550715Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:04.106553155Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:04.106556115Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:04.106558805Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:04.106562035Z     at async Promise.all (index 0)
2025-09-11T17:12:04.106564695Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:04.106567195Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:04.106569705Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:04.106572195Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:04.106574775Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:04.106593086Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:04.106595806Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:04.106598516Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:04.106601046Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:04.106604166Z }
2025-09-11T17:12:04.107029204Z error: undefined {"duration":30001,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:04.106Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:04.108716739Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:04.108726699Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:04.108729269Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:04.108731019Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:04.10873313Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:04.10873531Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:04.10873725Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:04.10873934Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:04.10874112Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:04.10874334Z     at async Promise.all (index 0)
2025-09-11T17:12:04.1087451Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:04.10874682Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:04.10874858Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:04.10875036Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:04.10875217Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:04.10875387Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:04.10875556Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:04.10875723Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:04.10875911Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:04.10876083Z }
2025-09-11T17:12:04.108976024Z error: undefined {"duration":30002,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:04.108Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:04.10926228Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:04.10926867Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:04.109283441Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:04.109285991Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:04.109288451Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:04.109291001Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:04.109293641Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:04.109296421Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:04.109298771Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:04.109301491Z     at async Promise.all (index 0)
2025-09-11T17:12:04.109304171Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:04.109306571Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:04.109308881Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:04.109311251Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:04.109313681Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:04.109316102Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:04.109318622Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:04.109321062Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:04.109324272Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:04.187477656Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:04.187512296Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:04.187516876Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:04.187520647Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:04.187524277Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:04.187528427Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:04.187531517Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:04.187535877Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:04.285083309Z error: undefined {"duration":30093,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:04.284Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:04.285470517Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:04.285476847Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:04.285480327Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:04.285483097Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:04.285485707Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:04.285489347Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:04.285492127Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:04.285495617Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:04.285498318Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:04.285501927Z     at async Promise.all (index 0)
2025-09-11T17:12:04.285504758Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:04.285507578Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:04.285510298Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:04.390734187Z error: undefined {"duration":30094,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:04.387Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:04.390736847Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:04.390765208Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:04.390768288Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:04.390770958Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:04.390773398Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:04.390776408Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:04.485618485Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:04.485670706Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:04.485677576Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:04.485680586Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:04.485684536Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:04.485687466Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:04.485690516Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:04.485693816Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:04.485696536Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:04.520152423Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:04.528022895Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:04.587373323Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:04.587397304Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:04.587400624Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:04.587402574Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:04.587404894Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:04.587406634Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:04.648562509Z error: undefined {"duration":58660,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:04.648Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:04.810041093Z error: undefined {"duration":58803,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:04.809Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:04.823422278Z error: undefined {"duration":58816,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:04.823Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:04.908596806Z error: undefined {"duration":58900,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:04.908Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:04.909086196Z error: undefined {"duration":58899,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:04.908Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:04.91851433Z error: undefined {"duration":58908,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:04.918Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:05.00331353Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:05.003348121Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:05.003353241Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:05.003356831Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:05.003360201Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:05.003363901Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:05.003366891Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:05.003370691Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:05.003373791Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:05.003377951Z     at async Promise.all (index 0)
2025-09-11T17:12:05.003381501Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:05.003384721Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:05.003388041Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:05.003411542Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:05.003415142Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:05.003418762Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:05.003422392Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:05.003425552Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:05.003428392Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:05.003431482Z }
2025-09-11T17:12:05.00378278Z error: undefined {"duration":30001,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:05.003Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:05.00430755Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:05.004314451Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:05.00431756Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:05.004319981Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:05.004322781Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:05.004325161Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:05.004327641Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:05.004331131Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:05.004333861Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:05.004337491Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:05.004339851Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:05.004342001Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:05.004344151Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:05.004346191Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:05.004348651Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:05.017215185Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:05.070183412Z error: undefined {"duration":59057,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:05.069Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:05.080511004Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:05.080535635Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:05.080539245Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:05.080541935Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:05.080544435Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:05.080547465Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:05.119640837Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:05.119683418Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:05.119691139Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:05.181330113Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:05.181359244Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:05.181362724Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:05.181365364Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:05.181368644Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:05.181371525Z     at async Promise.all (index 1)
2025-09-11T17:12:05.181374254Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:05.181376714Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:05.188851918Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:05.222514379Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:05.22256469Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:05.289732268Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:05.289760839Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:05.289779539Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:05.28978315Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:05.28978599Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:05.28978951Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:05.28979217Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:05.313553217Z error: undefined {"duration":59294,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:05.313Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:05.38236416Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:05.3823833Z error: undefined {"duration":30002,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:05.381Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:05.38238589Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:05.382406091Z error: undefined {"duration":30002,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:05.382Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:05.382415231Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:05.382418951Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:05.382422351Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:05.382425521Z     at async Promise.all (index 1)
2025-09-11T17:12:05.382428201Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:05.382430781Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:05.382433341Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:05.382436121Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:05.382438781Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:05.474756836Z error: undefined {"duration":59388,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:05.474Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:05.55484573Z error: undefined {"duration":59463,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:05.554Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:05.555976813Z error: undefined {"duration":59411,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:05.555Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:05.619890054Z error: undefined {"duration":59461,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:05.619Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:05.716500437Z error: undefined {"duration":59458,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:05.716Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:05.797577941Z error: undefined {"duration":59466,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:05.797Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:05.834314345Z error: undefined {"duration":59493,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:05.833Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:05.878095724Z error: undefined {"duration":59332,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:05.877Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:05.87936623Z error: undefined {"duration":59332,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:05.879Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:06.163764067Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:06.163782777Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:06.163786497Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:06.163789228Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:06.163791988Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:06.163795278Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:06.163797768Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:06.163800808Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:06.163803148Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:06.163806048Z     at async Promise.all (index 0)
2025-09-11T17:12:06.163808708Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:06.163811158Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:06.163813528Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:06.163815988Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:06.163818568Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:06.163821378Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:06.163824038Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:06.163826418Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:06.163828908Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:06.163831118Z }
2025-09-11T17:12:06.164171365Z error: undefined {"duration":30001,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:06.164Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:06.165702457Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:06.165712317Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:06.165715917Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:06.165730777Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:06.165733808Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:06.165736697Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:06.165739718Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:06.165742558Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:06.165745078Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:06.165748098Z     at async Promise.all (index 0)
2025-09-11T17:12:06.165750818Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:06.165753068Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:06.165755588Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:06.165757948Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:06.165760338Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:06.165762698Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:06.165765068Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:06.165767498Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:06.165770038Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:06.165772628Z }
2025-09-11T17:12:06.165963382Z error: undefined {"duration":30001,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:06.165Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:06.166246478Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:06.166252038Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:06.166255358Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:06.166257898Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:06.166260848Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:06.166263858Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:06.166266528Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:06.166272559Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:06.166275139Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:06.166278279Z     at async Promise.all (index 0)
2025-09-11T17:12:06.166280919Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:06.166283239Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:06.166285869Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:06.166295709Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:06.166298309Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:06.166300659Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:06.166303239Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:06.166305619Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:06.166308129Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:06.166310489Z }
2025-09-11T17:12:06.166472323Z error: undefined {"duration":30002,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:06.166Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:06.17071753Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:06.17073283Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:06.17073621Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:06.17073936Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:06.17074276Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:06.17074591Z     at async Promise.all (index 1)
2025-09-11T17:12:06.1707486Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:06.170751311Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:06.17075436Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:06.281955653Z error: undefined {"duration":59611,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:06.281Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:06.285510756Z error: undefined {"duration":59624,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:06.285Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:06.28716082Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:06.28718393Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:06.293764845Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:06.407130552Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:06.407156012Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:06.407159812Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:06.407162543Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:06.407165463Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:06.407168803Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:06.407171643Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:06.407174773Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:06.407191843Z     at async Promise.all (index 1)
2025-09-11T17:12:06.407194773Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:06.407197233Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31) {
2025-09-11T17:12:06.407199903Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:06.407202813Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:06.407205644Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:06.407208333Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:06.407210793Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:06.412767628Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:06.605542654Z error: undefined {"duration":59882,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:06.605Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:06.618435039Z error: undefined {"duration":59899,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:06.618Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:06.709374125Z error: undefined {"duration":59972,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:06.709Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:06.710012318Z error: undefined {"duration":59821,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:06.709Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:06.785050558Z error: undefined {"duration":59892,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:06.784Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:06.871086534Z error: undefined {"duration":59874,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:06.870Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:06.893946373Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:06.893972704Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:06.893978084Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:06.893982154Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:06.893986554Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:06.893990824Z     at async Promise.all (index 1)
2025-09-11T17:12:06.893994634Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:06.893998775Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:06.894002435Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:06.894006355Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:06.894010035Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:06.894014245Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:06.894017915Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:06.894021615Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:06.894025405Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:06.894029195Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:06.894032945Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:06.894036785Z }
2025-09-11T17:12:06.89428537Z error: undefined {"duration":30002,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:06.894Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:06.894531855Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:06.894540586Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:06.894545276Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:06.894549766Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:06.894555336Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:06.894559336Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:06.894578406Z     at async Promise.all (index 0)
2025-09-11T17:12:06.894581016Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:06.894583256Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:06.894585327Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:06.894587516Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:06.894589607Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:06.894592097Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:06.894626997Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:06.894630157Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:06.894632488Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:06.894634677Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:06.894637017Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:06.894639298Z }
2025-09-11T17:12:06.89477561Z error: undefined {"duration":30000,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:06.894Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:06.895178169Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:06.895191529Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:06.895194919Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:06.895197259Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:06.895199509Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:06.895202269Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:06.895204579Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:07.08137365Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.081402571Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:07.081406911Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:07.081409461Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:07.081412131Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:07.081417891Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:07.081420531Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:07.081423561Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:07.081427211Z     at async Promise.all (index 1)
2025-09-11T17:12:07.081429941Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:07.081432951Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31) {
2025-09-11T17:12:07.081435591Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:07.081438162Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:07.081441011Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:07.081443571Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:07.185765643Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.185783373Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:07.185786173Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:07.185787963Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:07.185789813Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:07.185792023Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:07.185793753Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:07.289071373Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.289097504Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:07.289101064Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:07.289103893Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:07.289106064Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:07.289108644Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:07.289110704Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:07.289113554Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:07.289116234Z     at async Promise.all (index 1)
2025-09-11T17:12:07.289118514Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:07.289120944Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31) {
2025-09-11T17:12:07.289123414Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:07.289125504Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:07.289127634Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:07.360926118Z error: undefined {"duration":60323,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:07.360Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:07.389379522Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.389399072Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:07.389402022Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:07.389404192Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:07.497906839Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.497918159Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:07.497920909Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:07.497922749Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:07.497924509Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:07.49792681Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:07.49792859Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:07.497930739Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:07.497932599Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:07.49793485Z     at async Promise.all (index 0)
2025-09-11T17:12:07.49793706Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:07.49794823Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:07.49795108Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:07.49795388Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:07.49795676Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:07.56419535Z error: undefined {"duration":60332,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:07.563Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:07.564530877Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.599504254Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.599529965Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:07.599534545Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:07.609420198Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.615502432Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:07.674063934Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.674079715Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:07.674084225Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:07.674087145Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:07.674089535Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:07.696521545Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.696543156Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:07.696546896Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:07.696549886Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:07.715813111Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:07.785581933Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.785603884Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:07.785608284Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:07.785612354Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:07.785616904Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:07.785621254Z     at async Promise.all (index 1)
2025-09-11T17:12:07.788063624Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.797736753Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.805068533Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.8906475Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:07.89068924Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:07.890692861Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:07.890694841Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:07.890696591Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:07.890699031Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:07.890704241Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:07.890706771Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:07.890708551Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:07.890710761Z     at async Promise.all (index 0)
2025-09-11T17:12:07.890712661Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:07.890714471Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:07.890716251Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:07.890718031Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:07.890719761Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:07.890721711Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:07.890723461Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:07.890725171Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:07.890726941Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:07.890728711Z }
2025-09-11T17:12:08.089153634Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:08.089190574Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:08.089194505Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:08.089197115Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:08.089199465Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:08.089202295Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:08.089204815Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:08.089207665Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:08.089210865Z     at async Promise.all (index 1)
2025-09-11T17:12:08.089213515Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:08.089216375Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31) {
2025-09-11T17:12:08.089218955Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:08.089221735Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:08.089224585Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:08.197571589Z error: undefined {"duration":30007,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:08.194Z","url":"/api/issues/nearby?latitude=16.8323725&longitude=75.73933149999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:08.197725222Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:08.199333175Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:08.199337515Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:08.199340105Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:08.199342555Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:08.199345375Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:08.29411998Z error: undefined {"duration":60309,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:08.293Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:08.320518152Z error: undefined {"duration":60332,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:08.320Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:08.360207947Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:08.360229397Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:08.360235468Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:08.360239948Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:08.360255238Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:08.360258358Z     at async Promise.all (index 1)
2025-09-11T17:12:08.360270968Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:08.360273918Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:08.360276408Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:08.360278848Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:08.360281368Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:08.360284218Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:08.486947908Z error: undefined {"duration":60345,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:08.486Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:08.494644246Z error: undefined {"duration":60340,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:08.494Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:08.523879866Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:08.523894086Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:08.523897007Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:08.523899516Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:08.523901927Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:08.523904187Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:08.523906387Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:08.523922327Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:08.523924807Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:08.523927207Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:08.523929417Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:08.523931657Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:08.523933877Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:08.523936077Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:08.523938197Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:08.549710806Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:08.549727726Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:08.549730947Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:08.588247597Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:08.588270678Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:08.588273408Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:08.634826123Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:08.634849324Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:08.634853524Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:08.634856044Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:08.634859644Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:08.634862914Z     at async Promise.all (index 1)
2025-09-11T17:12:08.634865724Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:08.817481592Z error: undefined {"duration":60285,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:08.817Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:08.819132716Z error: undefined {"duration":60137,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:08.819Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:08.819697678Z error: undefined {"duration":60301,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:08.819Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:08.932813689Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:08.93284493Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:08.93284976Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:08.9328531Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:08.93286421Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:08.9328685Z     at async Promise.all (index 1)
2025-09-11T17:12:08.93287191Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:08.932894831Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:08.932898531Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:08.932901711Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:08.932906081Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:08.932909681Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:08.932912471Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:08.932918941Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:08.932921581Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:08.932924251Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:08.932926711Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:08.932929162Z }
2025-09-11T17:12:08.933224197Z error: undefined {"duration":30002,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:08.933Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:08.93382606Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:08.93384179Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:08.93384585Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:08.93385206Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:08.93385534Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:08.933859141Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:08.93386217Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:08.933865691Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:08.933868181Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:08.933871861Z     at async Promise.all (index 0)
2025-09-11T17:12:08.933874801Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:09.018793214Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:09.018839605Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:09.018844025Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:09.018846985Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:09.086146086Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:09.086174757Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:09.086179227Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:09.086182077Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:09.086185447Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:09.086188647Z     at async Promise.all (index 1)
2025-09-11T17:12:09.086191407Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:09.152744853Z error: undefined {"duration":60321,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:09.152Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:09.192507929Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:09.19253476Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:09.19253979Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:09.19254264Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:09.19254642Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:09.19254955Z     at async Promise.all (index 1)
2025-09-11T17:12:09.19255243Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:09.19255527Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:09.19255768Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:09.19256022Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:09.1925632Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:09.23932554Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:09.23934732Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:09.308942429Z error: undefined {"duration":60315,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:09.308Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:09.418545868Z error: undefined {"duration":60290,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:09.418Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:09.454381824Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:09.454449645Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:09.454455275Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:09.454458625Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:09.454461685Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:09.454465575Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:09.454487326Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:09.454492466Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:09.454512346Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:09.454516596Z     at async Promise.all (index 0)
2025-09-11T17:12:09.454519907Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:09.454523456Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:09.454526807Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:09.454529967Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:09.454533097Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:09.454536077Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:09.454539167Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:09.454542047Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:09.454545077Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:09.454547937Z }
2025-09-11T17:12:09.463890959Z }
2025-09-11T17:12:09.575263675Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:09.575284915Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:09.575288435Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:09.575291075Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:09.575293755Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:09.575296655Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:09.575299326Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:09.575302175Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:09.575304775Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:09.575308026Z     at async Promise.all (index 0)
2025-09-11T17:12:09.575310926Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:09.575313526Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:09.575316456Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:09.575319006Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:09.575321456Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:09.628197731Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:09.716381141Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:09.716424612Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:09.716429152Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:09.716432522Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:09.716435142Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:09.716438632Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:09.716441712Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:09.716444882Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:09.716447642Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:09.716450663Z     at async Promise.all (index 0)
2025-09-11T17:12:09.716453032Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:09.716455352Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:09.819405065Z error: undefined {"duration":59930,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:09.818Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:09.873157509Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:09.873183169Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:09.873186839Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:09.873189539Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:09.873192149Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:09.87319508Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:09.873197569Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:09.87320054Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:09.8732031Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:09.87320594Z     at async Promise.all (index 0)
2025-09-11T17:12:09.87320826Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:09.87322888Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:09.87323169Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:09.87323403Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:09.87323627Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:09.87323867Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:09.87324119Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:09.87324349Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:09.87324573Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:09.873248281Z }
2025-09-11T17:12:09.873825942Z error: undefined {"duration":30002,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:09.873Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:09.957386727Z error: undefined {"duration":60067,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:09.957Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:09.981521323Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:09.981538233Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:09.981541693Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:09.981544643Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:09.981547793Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:10.103149379Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:10.10317668Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:10.1031807Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:10.10318342Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:10.10318629Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:10.10318846Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:10.10319077Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:10.152341319Z error: undefined {"duration":60167,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:10.152Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:10.208497741Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:10.208525112Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:10.208529252Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:10.208534732Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:10.208538102Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:10.208540902Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:10.208544322Z     at async Promise.all (index 0)
2025-09-11T17:12:10.208547062Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:10.208549582Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:10.208552182Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:10.280906057Z error: undefined {"duration":60191,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:10.280Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:10.388782391Z error: undefined {"duration":30002,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:10.388Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:10.388821612Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:10.388834443Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:10.388838712Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:10.388841133Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:10.388843483Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:10.388846133Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:10.388848903Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:10.388853623Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:10.388871663Z     at async Promise.all (index 1)
2025-09-11T17:12:10.388876463Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:10.388879424Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31) {
2025-09-11T17:12:10.388882113Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:10.388884764Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:10.388887233Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:10.388889514Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:10.388891684Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:10.388894034Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:10.388896144Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:10.436147174Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:10.436202525Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:10.436706575Z error: undefined {"duration":30000,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:10.436Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:10.487054368Z error: undefined {"duration":60299,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:10.485Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:13.294971518Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:13.294974348Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:13.294976988Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:13.294979918Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:13.294982868Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:13.294985418Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:13.294987978Z }
2025-09-11T17:12:13.29553144Z error: undefined {"duration":30001,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:13.295Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:13.353817966Z error: undefined {"duration":60101,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:13.353Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:13.379767658Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:13.379786389Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:13.379790339Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:13.379792789Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:13.379794969Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:13.379798119Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:13.379800239Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:13.379802929Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:13.379804959Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:13.379808329Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:13.379810999Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:13.379813239Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:13.379815429Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:13.379817529Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:13.379819589Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:13.379821719Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:13.379823879Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:13.37982593Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:13.37983874Z }
2025-09-11T17:12:13.379901831Z error: undefined {"duration":60013,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:13.379Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:13.380165966Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:13.380171987Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:13.380174767Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:13.380177057Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:13.380179737Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:13.380203607Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:13.380206617Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:13.380209327Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:13.380211458Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:13.380214318Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:13.380216398Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:13.380218618Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:13.380220878Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:13.380222948Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:13.380225108Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:13.380227128Z }
2025-09-11T17:12:13.380239258Z error: undefined {"duration":60011,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:13.380Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:13.398508063Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:13.398521843Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:13.398525403Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:13.398527883Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:13.398530323Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:13.398532434Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:13.398534463Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:13.398536814Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:13.398574874Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:13.398578564Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:13.398580815Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:13.822310231Z error: undefined {"duration":60088,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:13.822Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:13.840590796Z error: undefined {"duration":60105,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:13.840Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:14.00106939Z error: undefined {"duration":60132,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:14.000Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:14.162314569Z error: undefined {"duration":60130,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:14.162Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:14.325802165Z error: undefined {"duration":60043,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:14.323Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:14.492376613Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:14.492401944Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:14.492405674Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:14.492408414Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:14.492413534Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:14.492417824Z     at async Promise.all (index 1)
2025-09-11T17:12:14.492420385Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:14.492423005Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:14.492425574Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:14.492428354Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:14.492430975Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:14.492434065Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:14.492436885Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:14.492439615Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:14.492442215Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:14.492444935Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:14.492447505Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:14.492450155Z }
2025-09-11T17:12:14.492505496Z error: undefined {"duration":30002,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:14.492Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:14.577829587Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:14.577844948Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:14.577848548Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:14.577851528Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:14.577855158Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:14.577857888Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:14.577860298Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:14.577863298Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:14.577865768Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:14.577868698Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:14.577871138Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:14.577873828Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:14.577883928Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:14.577886579Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:14.577889039Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:14.577891709Z }
2025-09-11T17:12:14.578367008Z error: undefined {"duration":60090,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:14.578Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:14.660388212Z error: undefined {"duration":60296,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:14.659Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:14.745191502Z error: undefined {"duration":60164,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:14.744Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:14.786560441Z error: undefined {"duration":60204,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:14.786Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:14.80742905Z error: undefined {"duration":60062,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:14.807Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:14.816164229Z error: undefined {"duration":60127,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:14.815Z","url":"/api/issues/nearby?latitude=16.8323725&longitude=75.73933149999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:14.827062933Z error: undefined {"duration":59965,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:14.826Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:14.907726928Z error: undefined {"duration":59879,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:14.907Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:14.948160118Z error: undefined {"duration":59859,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:14.947Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:14.969335293Z error: undefined {"duration":59757,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:14.969Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.394681462Z error: undefined {"duration":60124,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:15.394Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.479806679Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:15.47982469Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:15.47982846Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:15.47983162Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:15.47983651Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:15.4798404Z     at async Promise.all (index 1)
2025-09-11T17:12:15.47984341Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:15.47984617Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:15.47984904Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:15.47985175Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:15.47985442Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:15.479858331Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:15.479861161Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:15.479863921Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:15.479866731Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:15.479869341Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:15.479872161Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:15.479874701Z }
2025-09-11T17:12:15.480277479Z error: undefined {"duration":30002,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:15.480Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.48082297Z Get issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:15.480832311Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:15.480854131Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:15.480863141Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:15.480866401Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:15.480869081Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:15.480872271Z     at async Promise.all (index 0)
2025-09-11T17:12:15.480875071Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:15.480877632Z     at async getIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:125:41) {
2025-09-11T17:12:15.480880452Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:15.480883261Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:15.480886352Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:15.480889322Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:15.480891992Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:15.480894502Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:15.480897212Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:15.480899722Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:15.480902342Z }
2025-09-11T17:12:15.481238049Z error: undefined {"duration":30001,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:15.481Z","url":"/api/issues","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.483882153Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:15.483893343Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:15.483896783Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:15.483899503Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:15.483901894Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:15.483904743Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:15.483907423Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:15.483910634Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:15.483913424Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:15.483916244Z     at async Promise.all (index 0)
2025-09-11T17:12:15.483921204Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:15.483923794Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:15.483926124Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:15.483928474Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:15.483930934Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:15.483940804Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:15.483943434Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:15.483945994Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:15.483948344Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:15.483950764Z }
2025-09-11T17:12:15.484306392Z error: undefined {"duration":30002,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:15.484Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.484620788Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:15.484625698Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:15.484628058Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:15.484629918Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:15.484631649Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:15.484633878Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:15.484635649Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:15.484638189Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:15.484640859Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:15.484644119Z     at async Promise.all (index 0)
2025-09-11T17:12:15.484646769Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:15.484649379Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:15.484667479Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:15.484674709Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:15.48467765Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:15.484680239Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:15.48468299Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:15.484685639Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:15.48468814Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:15.4846907Z }
2025-09-11T17:12:15.484954465Z error: undefined {"duration":30001,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:15.484Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.486511717Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:15.486522257Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:15.486532017Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:15.486535197Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:15.486537848Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:15.486540828Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:15.486544088Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:15.486547308Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:15.486550088Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:15.486553418Z     at async Promise.all (index 0)
2025-09-11T17:12:15.486556608Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:15.486559278Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:15.486562198Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:15.486564928Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:15.486567568Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:15.486570228Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:15.486573328Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:15.486575849Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:15.486577569Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:15.486579249Z }
2025-09-11T17:12:15.488062669Z error: undefined {"duration":30003,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:15.486Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.488069319Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:15.488073569Z error: undefined {"duration":30002,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:15.487Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.488080489Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:15.488083489Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:15.488085979Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:15.488088309Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:15.488091269Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:15.48809376Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:15.48809674Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:15.488099189Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:15.4881097Z     at async Promise.all (index 0)
2025-09-11T17:12:15.48811275Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:15.48811524Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:15.48811795Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:15.48812045Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:15.48812277Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:15.48812552Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:15.48812831Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:15.48813091Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:15.48813357Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:15.48813622Z }
2025-09-11T17:12:15.490510849Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:15.490520559Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:15.692428803Z error: undefined {"duration":60172,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:15.692Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.718695482Z error: undefined {"duration":60044,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:15.718Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.756427637Z error: undefined {"duration":59869,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:15.756Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.77656339Z error: undefined {"duration":59695,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:15.776Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.8262463Z error: undefined {"duration":59733,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:15.826Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.859020452Z error: undefined {"duration":59688,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:15.858Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.885092028Z error: undefined {"duration":59577,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:15.884Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.918303429Z error: undefined {"duration":59432,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:15.917Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.938185767Z error: undefined {"duration":59202,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:15.938Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:15.994669246Z error: undefined {"duration":59008,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:15.994Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:16.025890637Z error: undefined {"duration":58977,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:16.025Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:16.046649513Z error: undefined {"duration":58965,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:16.046Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.018953149Z error: undefined {"duration":59903,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:17.018Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.181171778Z error: undefined {"duration":59919,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:17.180Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.575253296Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:17.575292197Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:17.575296597Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:17.575299167Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:17.575301537Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.575304667Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:17.575306947Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:17.575310018Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:17.575312407Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:17.575315298Z     at async Promise.all (index 0)
2025-09-11T17:12:17.575317618Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:17.575319918Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:17.575322128Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.575324598Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.575326898Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:17.575329328Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:17.575335068Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.575337478Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.575339808Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.575342338Z }
2025-09-11T17:12:17.576216966Z error: undefined {"duration":30001,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:17.575Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.576713136Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:17.576724987Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:17.576731147Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:17.576733837Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:17.576736397Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.576739457Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:17.576742177Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:17.576745207Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:17.576747657Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:17.576984542Z     at async Promise.all (index 0)
2025-09-11T17:12:17.576988452Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:17.576990822Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:17.576993282Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.576995902Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.576998372Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:17.577001152Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:17.577003472Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.577005722Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.577008142Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.577010522Z }
2025-09-11T17:12:17.577303299Z error: undefined {"duration":30001,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:17.576Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.577752718Z error: undefined {"duration":30001,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:17.577Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.577773668Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:17.577778988Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:17.577782368Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:17.577785208Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:17.577788278Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:17.577790918Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:17.577794078Z     at async Promise.all (index 0)
2025-09-11T17:12:17.577796618Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:17.577799158Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:17.577801329Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:17.577803429Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:17.577805949Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.577809309Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.577812459Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:17.577815179Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:17.577817659Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.577831959Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.577835049Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.577837749Z }
2025-09-11T17:12:17.578466022Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:17.578472592Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:17.578475762Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:17.578477963Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:17.578480412Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.578483083Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:17.578485343Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:17.578488253Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:17.578490503Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:17.578493293Z     at async Promise.all (index 0)
2025-09-11T17:12:17.578508413Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:17.578510913Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:17.578513203Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.578515583Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.578517813Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:17.578520203Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:17.578522403Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.578524753Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.578527053Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.578529473Z }
2025-09-11T17:12:17.580037904Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:17.580048475Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:17.580051995Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:17.580054405Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:17.580056745Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.580059405Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:17.580061795Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:17.580064595Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:17.580066895Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:17.580069505Z     at async Promise.all (index 0)
2025-09-11T17:12:17.580071765Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:17.580091856Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:17.580094476Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.580096886Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.580099136Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:17.580101666Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:17.580104146Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.580109466Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.580111876Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.580114136Z }
2025-09-11T17:12:17.580158137Z error: undefined {"duration":30002,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:17.579Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.580600686Z error: undefined {"duration":30002,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:17.580Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.582066746Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:17.582075056Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:17.582078256Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:17.582080517Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:17.582082846Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.582085846Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:17.582088217Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:17.582090877Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:17.582093287Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:17.582095947Z     at async Promise.all (index 0)
2025-09-11T17:12:17.582098227Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:17.582100387Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:17.582102647Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.582104747Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.582106957Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:17.582150538Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:17.582153248Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.582156118Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.582165598Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.582168338Z }
2025-09-11T17:12:17.582418263Z error: undefined {"duration":30003,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:17.582Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.582885383Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:17.582893373Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:17.582896243Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:17.582898553Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:17.582900773Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.582903373Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:17.582905703Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:17.582908234Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:17.582910694Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:17.582913034Z     at async Promise.all (index 0)
2025-09-11T17:12:17.582915483Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:17.582917674Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:17.582919894Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.582924264Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.582926874Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:17.582966135Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:17.582969275Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.582971775Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.582974145Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.582976525Z }
2025-09-11T17:12:17.583407634Z error: undefined {"duration":30003,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:17.583Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.583937175Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:17.583946225Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:17.583949265Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:17.583951775Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:17.583954265Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.583957045Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:17.583966285Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:17.583969615Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:17.583972015Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:17.583974725Z     at async Promise.all (index 0)
2025-09-11T17:12:17.583977095Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:17.584004216Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:17.584006766Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.584009096Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.584011536Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:17.584013916Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:17.584016226Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.584018726Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.584021216Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.584023406Z }
2025-09-11T17:12:17.584231461Z error: undefined {"duration":30001,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:17.584Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.624242172Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:17.624267472Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:17.624271072Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:17.624273322Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:17.624276112Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:17.624278203Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:17.624292093Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:17.624295623Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:17.624298383Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.624301773Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.624304533Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:17.624307033Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:17.624309843Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:17.624312643Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:17.624315393Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:17.624331473Z }
2025-09-11T17:12:17.625000557Z error: undefined {"duration":59998,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:17.624Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.83171993Z error: undefined {"duration":60204,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:17.831Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.856885197Z error: undefined {"duration":60220,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:17.856Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.857579071Z error: undefined {"duration":59871,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:17.857Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.863995932Z error: undefined {"duration":59570,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:17.863Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.873909946Z error: undefined {"duration":59388,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:17.873Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:17.993750366Z error: undefined {"duration":59507,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:17.993Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:18.01980941Z error: undefined {"duration":59529,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:18.019Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:18.022876023Z error: undefined {"duration":59533,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:18.022Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:18.039322931Z error: undefined {"duration":59547,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:18.039Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:18.377141214Z error: undefined {"duration":59884,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:18.376Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:18.590179417Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:18.590206037Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:18.590209357Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:18.590211717Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:18.590213727Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:18.590216307Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:18.590218528Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:18.590221228Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:18.590223408Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:18.590226028Z     at async Promise.all (index 0)
2025-09-11T17:12:18.590228438Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:18.590230468Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:18.590232488Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:18.590234528Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:18.590236648Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:18.590238938Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:18.590241098Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:18.590243428Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:18.590248048Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:18.590250158Z }
2025-09-11T17:12:18.590607576Z error: undefined {"duration":30001,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:18.590Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:18.629126176Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:18.629145336Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:18.629149216Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:18.629151596Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:18.629166647Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:18.629169307Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:18.629172747Z     at async Promise.all (index 0)
2025-09-11T17:12:18.629174977Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:18.629177317Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:18.629179537Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:18.629181797Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:18.629184717Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:18.629188107Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:18.629190937Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:18.629193297Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:18.629195517Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:18.629197608Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:18.629199708Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:18.629201968Z }
2025-09-11T17:12:18.629476163Z error: undefined {"duration":30002,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:18.629Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:18.629962863Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:18.629975363Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:18.629979464Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:18.629982144Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:18.629984804Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:18.629988044Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:18.629990914Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:18.629994594Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:18.629996444Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:18.629998614Z     at async Promise.all (index 0)
2025-09-11T17:12:18.630000394Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:18.630002234Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:18.630003884Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:18.630005534Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:18.630014144Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:18.630015944Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:18.630018344Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:18.630020084Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:18.630021804Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:18.630023474Z }
2025-09-11T17:12:18.630264109Z error: undefined {"duration":30001,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:18.630Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:18.631718999Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:18.631732029Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:18.631734949Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:18.6317368Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:18.631738529Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:18.631740869Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:18.63174268Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:18.63174528Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:18.63174727Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:18.6317498Z     at async Promise.all (index 0)
2025-09-11T17:12:18.63175159Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:18.63175328Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:18.63175495Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:18.63175663Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:18.63175829Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:18.63176Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:18.63176167Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:18.63176342Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:18.63176513Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:18.63176683Z }
2025-09-11T17:12:18.631948794Z error: undefined {"duration":30002,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:18.631Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:18.632287131Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:18.632293891Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:18.632330362Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:18.632333622Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:18.632336342Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:18.632339322Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:18.632342322Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:18.632345282Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:18.632348022Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:18.632350712Z     at async Promise.all (index 0)
2025-09-11T17:12:18.632353482Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:18.632356212Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:18.632358952Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:18.632361352Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:18.632364032Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:18.904811674Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:18.904837745Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:18.904841315Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:18.904843745Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:18.904846395Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:18.904848445Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:18.904850595Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:18.904853125Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:18.904868875Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:18.904872535Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:18.904874655Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:18.904876845Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:18.904878895Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:18.904880966Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:18.904883035Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:18.904885715Z }
2025-09-11T17:12:18.905282554Z error: undefined {"duration":59981,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:18.905Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:18.929125113Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:18.929148973Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:18.929152424Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:18.929166494Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:18.929169504Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:18.929171894Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:18.929173964Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:18.929176904Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:18.929179054Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:18.929181664Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:18.929184014Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:18.929186144Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:18.929188164Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:18.929190185Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:18.929192174Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:18.929194365Z }
2025-09-11T17:12:18.929508391Z error: undefined {"duration":59994,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:18.929Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:18.971195236Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:19.151560518Z error: undefined {"duration":60214,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:19.151Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:19.166702839Z error: undefined {"duration":60226,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:19.166Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:19.189581689Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:19.189605399Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:19.189609199Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:19.189611489Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:19.189613819Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:19.189616519Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:19.189618719Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:19.189621079Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:19.189623259Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:19.189687911Z     at async Promise.all (index 0)
2025-09-11T17:12:19.189695641Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:19.189698241Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:19.189700901Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:19.189703391Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:19.189705701Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:19.189708261Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:19.189710551Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:19.189713061Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:19.189715431Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:19.266850924Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:19.266873685Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:19.266876915Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:19.266879265Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:19.266881285Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:19.266895585Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:19.266898785Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:19.329263436Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:19.329279746Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:19.329283156Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:19.329286016Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:19.329289546Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:19.329292656Z     at async Promise.all (index 1)
2025-09-11T17:12:19.329295536Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:19.38748664Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:19.387501611Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:19.387505391Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:19.387508211Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:19.387510901Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:19.387513631Z     at async Promise.all (index 1)
2025-09-11T17:12:19.387515861Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:19.434385883Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:19.434411264Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:19.434414884Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:19.434417414Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:19.48587719Z error: undefined {"duration":30052,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:19.485Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:19.487691277Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:19.487707157Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:19.488379811Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:19.557136492Z error: undefined {"duration":60318,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:19.556Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:19.651430418Z error: undefined {"duration":60062,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:19.651Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:19.718678948Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:19.718702838Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:19.718707329Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:19.718710409Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:19.718713578Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:19.718734319Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:19.718738589Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:19.718741659Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:19.718744099Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:19.718746889Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:19.718749269Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:19.718751739Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:19.71875449Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:19.71875701Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:19.71875963Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:19.71876221Z }
2025-09-11T17:12:19.719182808Z error: undefined {"duration":60096,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:19.719Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:19.771858229Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:19.77187397Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:19.77187742Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:19.77187973Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:19.77188247Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:19.7718851Z     at async Promise.all (index 1)
2025-09-11T17:12:19.77188732Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:19.77190424Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:19.77190807Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:19.7719117Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:19.77191509Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:19.971941306Z error: undefined {"duration":60312,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:19.971Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:19.97261036Z error: undefined {"duration":60126,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:19.972Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:20.196601547Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.196604777Z error: undefined {"duration":30002,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:20.196Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:20.196626057Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.196630417Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:20.196633197Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:20.196636017Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:20.196639138Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:20.196642178Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:20.196645698Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:20.196648658Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:20.196667688Z     at async Promise.all (index 0)
2025-09-11T17:12:20.196673908Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:20.196676588Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:20.196692008Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:20.196695119Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:20.196697659Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:20.196700499Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:20.196703499Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:20.196706319Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:20.196708829Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:20.196711559Z }
2025-09-11T17:12:20.197852832Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.197863913Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.197867123Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:20.197869443Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:20.197871713Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:20.197874413Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:20.197876683Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:20.197890803Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:20.197893523Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:20.197896403Z     at async Promise.all (index 0)
2025-09-11T17:12:20.197898703Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:20.197900823Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:20.197902933Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:20.197905064Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:20.197907224Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:20.197909944Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:20.197912114Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:20.197914244Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:20.197916404Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:20.197918524Z }
2025-09-11T17:12:20.226410338Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.289027684Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.289052414Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.289067544Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:20.289070204Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:20.289073084Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:20.289075895Z     at async Promise.all (index 1)
2025-09-11T17:12:20.289078395Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:20.389344573Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.389366373Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.389370273Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:20.389373873Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:20.389377323Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:20.389380133Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:20.389382793Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:20.389398194Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:20.389401104Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:20.389403884Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:20.389406334Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:20.389409084Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:20.389411684Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:20.389414554Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:20.500918052Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.500939573Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.500943213Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:20.500945433Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:20.500947663Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:20.500950273Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:20.500952453Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:20.500955163Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:20.584963537Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.584987168Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.584991068Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:20.584993518Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:20.584996028Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:20.584998888Z     at async Promise.all (index 1)
2025-09-11T17:12:20.585001048Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:20.649297418Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.649319628Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.649323558Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:20.649326168Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:20.649329508Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:20.649332369Z     at async Promise.all (index 1)
2025-09-11T17:12:20.649334798Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:20.685362898Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.685376618Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.685379648Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:20.707238817Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.707254137Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.725792198Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.725814648Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.735791993Z Get issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.785518473Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.785542344Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.785545874Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:20.785548964Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:20.785552184Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:20.785555184Z     at async Promise.all (index 1)
2025-09-11T17:12:20.785557924Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:20.838746336Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.838774257Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.838779407Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:20.838782957Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:20.884793561Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.884815582Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.884819202Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:20.886862254Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.907763142Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.907785763Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.919548975Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.98511124Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:20.985138341Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:20.98514241Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:20.985145541Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:20.985148351Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:20.985151521Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:20.985154401Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:21.002057828Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:21.015061925Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:21.015094015Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:21.048905819Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:21.04892757Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:21.04893174Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:21.04893453Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:21.064112271Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:21.064225904Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:21.064231674Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:21.09864702Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:21.21168871Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:21.211715531Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:21.211719891Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:21.211722631Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:21.211726241Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:21.211728731Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:21.211731281Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:21.211734441Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:21.211736841Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:21.211739941Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:21.211742511Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:21.211744831Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:21.211762402Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:21.258909369Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:21.25893735Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:21.25894234Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:21.25894618Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:21.345044837Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:21.345067677Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:21.345070828Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:21.345073578Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:21.345098068Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:21.345101148Z     at async Promise.all (index 1)
2025-09-11T17:12:21.345103638Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:21.345105958Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:21.399388312Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:21.399411843Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:21.399415963Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:21.399419233Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:21.399422653Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:21.399425353Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:21.399443133Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:21.524120192Z error: undefined {"duration":60287,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:21.523Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:21.69062226Z error: undefined {"duration":60268,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:21.690Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:21.749343265Z error: undefined {"duration":60211,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:21.749Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.035377115Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:22.035404256Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:22.035410426Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:22.035413286Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:22.035416276Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:22.035418596Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:22.035421596Z     at async Promise.all (index 0)
2025-09-11T17:12:22.035424066Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:22.035426316Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:22.035428536Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:22.035430757Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:22.035432937Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:22.035435757Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:22.035438117Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:22.035454037Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:22.035456667Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:22.035458857Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:22.035461167Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:22.035463427Z }
2025-09-11T17:12:22.035936507Z error: undefined {"duration":30000,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:22.035Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.036630831Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:22.036639351Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:22.036642911Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:22.036645351Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:22.036647782Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:22.036650391Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:22.036690822Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:22.036700132Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:22.036703052Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:22.036706573Z     at async Promise.all (index 0)
2025-09-11T17:12:22.036709383Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:22.036712023Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:22.036714633Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:22.036717073Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:22.036719343Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:22.036721823Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:22.036724143Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:22.036726593Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:22.036729083Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:22.036731763Z }
2025-09-11T17:12:22.036886886Z error: undefined {"duration":30001,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:22.036Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.038127202Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:22.038138992Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:22.038151172Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:22.038154522Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:22.038157112Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:22.038160572Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:22.038163602Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:22.038181633Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:22.038184733Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:22.038188113Z     at async Promise.all (index 0)
2025-09-11T17:12:22.038190983Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:22.038193573Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:22.038196013Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:22.038198863Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:22.038201313Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:22.038203973Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:22.038206413Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:22.038209133Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:22.038211914Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:22.038214383Z }
2025-09-11T17:12:22.03851639Z error: undefined {"duration":30001,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:22.038Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.090802173Z error: undefined {"duration":60116,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:22.089Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.090826713Z error: undefined {"duration":60116,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:22.090Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.237871581Z error: undefined {"duration":60138,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:22.237Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.255068464Z error: undefined {"duration":60135,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:22.254Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.364891938Z error: undefined {"duration":60115,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:22.364Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.432837083Z error: undefined {"duration":30000,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:22.431Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.432871843Z error: undefined {"duration":30001,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:22.432Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.432889074Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:22.432893214Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:22.432895864Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:22.432898444Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:22.432901264Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:22.432904364Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:22.432907274Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:22.432910274Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:22.432912534Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:22.432915114Z     at async Promise.all (index 0)
2025-09-11T17:12:22.432917255Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:22.432919675Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:22.432921695Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:22.432923715Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:22.432926025Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:22.432928145Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:22.432930225Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:22.432932325Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:22.432934425Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:22.432936485Z }
2025-09-11T17:12:22.432938685Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:22.432940985Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:22.432953835Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:22.432956215Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:22.432958505Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:22.432960955Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:22.432963325Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:22.432965636Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:22.432967905Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:22.438164462Z error: undefined {"duration":60185,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:22.437Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.464054243Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:22.464078394Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:22.469348762Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:22.476705443Z error: undefined {"duration":30003,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:22.475Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.480280467Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:22.493710282Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:22.507866943Z error: undefined {"duration":60001,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:22.505Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.517615823Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:22.532715903Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:22.532736123Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:22.66705555Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:22.66707212Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:22.66707577Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:22.66707809Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:22.66708095Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:22.66708312Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:22.66708548Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:22.667099711Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:22.667103051Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:22.667107741Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:22.667111191Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:22.667114991Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:22.667132061Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:22.710986131Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:22.711006552Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:22.711010102Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:22.711012482Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:22.711015382Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:22.74990409Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:22.749926701Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:22.749931511Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:22.749935191Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:22.820462978Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:22.820488259Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:22.820492319Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:22.820495049Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:22.820497589Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:22.820500719Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:22.820503799Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:22.820507259Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:22.820509869Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:22.820512979Z     at async Promise.all (index 0)
2025-09-11T17:12:22.820515899Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:22.82051827Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:22.820520659Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:22.82052334Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:22.82052611Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:22.82052866Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:22.82053478Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:22.82053737Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:22.82054003Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:22.82054244Z }
2025-09-11T17:12:22.820888547Z error: undefined {"duration":30001,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:22.820Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:22.826465901Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:23.063338233Z error: undefined {"duration":60194,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:23.063Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:23.093997212Z error: undefined {"duration":60223,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:23.093Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:23.208523163Z error: undefined {"duration":60218,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:23.208Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:23.22493741Z error: undefined {"duration":60067,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:23.224Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:23.255767272Z error: undefined {"duration":59847,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:23.255Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:23.279259325Z error: undefined {"duration":59797,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:23.279Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:23.386205069Z error: undefined {"duration":59738,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:23.385Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:23.531120624Z error: undefined {"duration":59805,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:23.530Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:23.531640885Z error: undefined {"duration":59733,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:23.531Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:23.54746891Z error: undefined {"duration":59742,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:23.547Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:23.708829531Z error: undefined {"duration":59724,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:23.708Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:23.741648715Z error: undefined {"duration":59754,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:23.741Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:24.260197267Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:24.260228978Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:24.260234778Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:24.260239358Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:24.260243498Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.260248328Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:24.260252488Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:24.260256839Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:24.260261629Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:24.260266879Z     at async Promise.all (index 0)
2025-09-11T17:12:24.260271559Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:24.260275809Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:24.260280339Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.260284639Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.260288809Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:24.260291859Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:24.260294789Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.26029762Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.26030058Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.26031431Z }
2025-09-11T17:12:24.260577405Z error: undefined {"duration":30001,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:24.260Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:24.261113056Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:24.261126317Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:24.261130497Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:24.261133706Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:24.261136397Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.261139757Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:24.261142187Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:24.261145317Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:24.261147997Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:24.261151267Z     at async Promise.all (index 0)
2025-09-11T17:12:24.261154087Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:24.261157087Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:24.261159927Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.261162917Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.261165877Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:24.261168647Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:24.261171367Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.261174307Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.261177027Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.261179838Z }
2025-09-11T17:12:24.261345831Z error: undefined {"duration":30000,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:24.261Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:24.269902146Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:24.269912657Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:24.269915887Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:24.269918187Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:24.269920357Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.269922967Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:24.269934767Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:24.269938147Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:24.269940317Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:24.269942997Z     at async Promise.all (index 0)
2025-09-11T17:12:24.269945237Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:24.269947347Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:24.269949447Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.269951567Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.269953758Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:24.269958758Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:24.269961288Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.269963378Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.269965538Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.269967668Z }
2025-09-11T17:12:24.270194103Z error: undefined {"duration":30001,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:24.270Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:24.283686389Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:24.2837006Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:24.28370509Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:24.28370836Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:24.28371202Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:24.28371878Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:24.28372231Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:24.28372651Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:24.28373026Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.283734581Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.283738901Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:24.28374227Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:24.283745681Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.283748841Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.283752121Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.283755341Z }
2025-09-11T17:12:24.283985155Z error: undefined {"duration":60118,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:24.283Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:24.285393404Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:24.285405395Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:24.285409015Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:24.285412005Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:24.285414595Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.285417835Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:24.285420655Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:24.285424255Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:24.285427525Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:24.285430675Z     at async Promise.all (index 0)
2025-09-11T17:12:24.285433265Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:24.285436125Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:24.285438856Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.285441285Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.285443836Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:24.285446505Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:24.285449276Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.285452236Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.285455286Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.285458106Z }
2025-09-11T17:12:24.285609869Z error: undefined {"duration":30001,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:24.285Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:24.293421879Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:24.29343418Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:24.293438369Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:24.29344195Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:24.29344599Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:24.29345007Z     at async Promise.all (index 1)
2025-09-11T17:12:24.29345372Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:24.29346878Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:24.29347245Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:24.29347607Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:24.29347956Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.293483521Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.29348705Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:24.293490301Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:24.293493931Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.293497581Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.293501341Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.293504771Z }
2025-09-11T17:12:24.309592261Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:24.309611052Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:24.318196098Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:24.326925537Z error: undefined {"duration":30001,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:24.326Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:24.500612382Z error: undefined {"duration":59999,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:24.500Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:24.514991137Z error: undefined {"duration":59999,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:24.514Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:24.732034541Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:24.732053842Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:24.732057252Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:24.732059722Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:24.732061952Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.732065052Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:24.732079242Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:24.732082132Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:24.732084712Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:24.732087482Z     at async Promise.all (index 0)
2025-09-11T17:12:24.732089632Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:24.732091812Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:24.732093912Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.732096143Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.732098233Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:24.732100313Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:24.732102753Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.732104853Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.732106973Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.732109153Z }
2025-09-11T17:12:24.732388029Z error: undefined {"duration":30002,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:24.732Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:24.7680497Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:24.768071631Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:24.768075621Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:24.768079221Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:24.768082591Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:24.768085221Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:193:28)
2025-09-11T17:12:24.768087871Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:24.768090931Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:24.768093641Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.768096601Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.768099122Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:24.768102151Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:24.768105011Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.768107872Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.768110752Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.768113562Z }
2025-09-11T17:12:24.768420878Z error: undefined {"duration":59987,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:24.768Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:24.78655404Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:24.78657249Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:24.786576451Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:24.786580441Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:24.786584251Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.786588251Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:24.802954717Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:24.928546735Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:24.928566365Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:24.928570395Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:24.928573075Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:24.928575965Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:24.928579495Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:24.928582455Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:24.928585995Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:24.928588895Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:24.928592285Z     at async Promise.all (index 0)
2025-09-11T17:12:24.928595235Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:24.928597936Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:24.928600816Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.928603665Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:24.928606436Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:24.928609626Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:24.928612656Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:24.928615446Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:25.018419229Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:25.01843816Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:25.018441949Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:25.018444789Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:25.089852595Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:25.089878356Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:25.089881676Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:25.089884076Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:25.089886666Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:25.089888936Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:25.089891636Z     at async Promise.all (index 0)
2025-09-11T17:12:25.130645802Z error: undefined {"duration":60241,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:25.130Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:25.189789976Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:25.189817477Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:25.189821717Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:25.189824347Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:25.189827617Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:25.189830807Z     at async Promise.all (index 1)
2025-09-11T17:12:25.189833527Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:25.189836147Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:25.189838467Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:25.285727855Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:25.285755686Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:25.285760366Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:25.285763176Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:25.285765666Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:25.285768736Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:25.285772226Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:25.285775976Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:25.285782876Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:25.285786376Z     at async Promise.all (index 0)
2025-09-11T17:12:25.285789127Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:25.285792176Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:25.285795087Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:25.285797596Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:25.361945559Z error: undefined {"duration":60258,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:25.361Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:25.467615448Z error: undefined {"duration":60268,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:25.467Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:25.471770914Z error: undefined {"duration":60198,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:25.471Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:25.496063382Z error: undefined {"duration":60111,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:25.495Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:25.526774442Z error: undefined {"duration":60079,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:25.526Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:25.76538205Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:25.7654097Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:25.76541709Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:25.76542044Z     at async PostgresQueryInterface.select (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)
2025-09-11T17:12:25.76542386Z     at async Issue.findAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1140:21)
2025-09-11T17:12:25.76542734Z     at async Promise.all (index 1)
2025-09-11T17:12:25.76543056Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27)
2025-09-11T17:12:25.7654333Z     at async result (/opt/render/project/src/backend/dist/controllers/issueController.js:181:31)
2025-09-11T17:12:25.765435661Z     at async getNearbyIssues (/opt/render/project/src/backend/dist/controllers/issueController.js:227:28) {
2025-09-11T17:12:25.765438011Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:25.765441101Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:25.765444801Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:25.765447551Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:25.765450081Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:25.765452771Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:25.765455211Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:25.765457771Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:25.765460971Z }
2025-09-11T17:12:25.76588268Z error: undefined {"duration":30001,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:25.765Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:25.766291208Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:25.766299318Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:25.766316779Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:25.766319289Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:25.766321589Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:25.766324729Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:25.766327229Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:25.766330279Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:25.766332709Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:25.766335679Z     at async Promise.all (index 0)
2025-09-11T17:12:25.766337989Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:25.766340309Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:25.766342529Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:25.766344869Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:25.766347259Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:25.766349599Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:25.76635193Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:25.76635705Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:25.76635942Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:25.76636175Z }
2025-09-11T17:12:25.766634525Z error: undefined {"duration":30001,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:25.766Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:25.767158406Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:25.767172766Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:25.767175956Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:25.767178427Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:25.767180996Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:25.767183867Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:25.767186697Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:25.767189827Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:25.767192507Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:25.767195627Z     at async Promise.all (index 0)
2025-09-11T17:12:25.767198357Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:25.767200637Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:25.767226057Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:25.767229228Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:25.767231517Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:25.767234178Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:25.767236808Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:25.767239418Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:25.767241678Z       at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:25.767244048Z }
2025-09-11T17:12:25.767450452Z error: undefined {"duration":30001,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":500,"timestamp":"2025-09-11T17:12:25.767Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:25.768907122Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:25.768916202Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:25.768918512Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:25.768920292Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:26.052260067Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:26.052299318Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:26.061387905Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:26.061423135Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:26.085769395Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:26.085795226Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:26.120649321Z error: undefined {"duration":60252,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:26.120Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:26.254382156Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:26.254409336Z     at ConnectionManager.getConnection (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:206:15)
2025-09-11T17:12:26.254414176Z     at runNextTicks (node:internal/process/task_queues:65:5)
2025-09-11T17:12:26.254417767Z     at listOnTimeout (node:internal/timers:549:9)
2025-09-11T17:12:26.254421247Z     at process.processTimers (node:internal/timers:523:7)
2025-09-11T17:12:26.254425327Z     at async /opt/render/project/src/backend/node_modules/sequelize/lib/sequelize.js:305:26
2025-09-11T17:12:26.254428797Z     at async PostgresQueryInterface.rawSelect (/opt/render/project/src/backend/node_modules/sequelize/lib/dialects/abstract/query-interface.js:434:18)
2025-09-11T17:12:26.254433437Z     at async Issue.aggregate (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1277:19)
2025-09-11T17:12:26.254437117Z     at async Issue.count (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1306:20)
2025-09-11T17:12:26.254439767Z     at async Promise.all (index 0)
2025-09-11T17:12:26.254442027Z     at async Issue.findAndCountAll (/opt/render/project/src/backend/node_modules/sequelize/lib/model.js:1322:27) {
2025-09-11T17:12:26.254444197Z   parent: TimeoutError: Operation timeout
2025-09-11T17:12:26.254446477Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:26.254448617Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:26.254450877Z       at process.processTimers (node:internal/timers:523:7),
2025-09-11T17:12:26.254452937Z   original: TimeoutError: Operation timeout
2025-09-11T17:12:26.254455077Z       at Timeout.<anonymous> (/opt/render/project/src/backend/node_modules/sequelize-pool/lib/Deferred.js:17:25)
2025-09-11T17:12:26.254474248Z       at listOnTimeout (node:internal/timers:588:17)
2025-09-11T17:12:26.285847872Z Get nearby issues error: ConnectionAcquireTimeoutError [SequelizeConnectionAcquireTimeoutError]: Operation timeout
2025-09-11T17:12:26.359718228Z error: undefined {"duration":60294,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:26.359Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:26.46410176Z error: undefined {"duration":60122,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:26.463Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:26.476181858Z error: undefined {"duration":60073,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:26.476Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:26.49677223Z error: undefined {"duration":60068,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:26.496Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:26.658836097Z error: undefined {"duration":59519,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:26.658Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:26.693215202Z error: undefined {"duration":59593,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:26.693Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:27.149345264Z error: undefined {"duration":59465,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:27.149Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:27.307268265Z error: undefined {"duration":59475,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:27.307Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:27.318452105Z error: undefined {"duration":59480,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:27.318Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:27.359244982Z error: undefined {"duration":59200,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:27.359Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:27.793376222Z error: undefined {"duration":59542,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:27.793Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:27.896366836Z error: undefined {"duration":59610,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:27.896Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:27.92144668Z error: undefined {"duration":59632,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:27.921Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:27.955201553Z error: undefined {"duration":59661,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:27.955Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:28.261831067Z error: undefined {"duration":59827,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:28.261Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:28.280462279Z error: undefined {"duration":59794,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:28.280Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:28.381557714Z error: undefined {"duration":59784,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:28.381Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:28.496753658Z error: undefined {"duration":59703,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:28.496Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:28.58503678Z error: undefined {"duration":59653,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:28.584Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:28.692141008Z error: undefined {"duration":59657,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:28.691Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:28.706214857Z error: undefined {"duration":59618,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:28.706Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:28.867739072Z error: undefined {"duration":59441,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:28.867Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:28.908241723Z error: undefined {"duration":59469,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:28.907Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:28.92999358Z error: undefined {"duration":59427,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:28.929Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.002380815Z error: undefined {"duration":59428,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.002Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.025424338Z error: undefined {"duration":59362,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.025Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.191588759Z error: undefined {"duration":59450,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.191Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.351634903Z error: undefined {"duration":59489,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.351Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.415944663Z error: undefined {"duration":59456,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.415Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.507712467Z error: undefined {"duration":59416,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.507Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.512895843Z error: undefined {"duration":59416,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.512Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.524055562Z error: undefined {"duration":59193,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.523Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.55367745Z error: undefined {"duration":59138,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.553Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.577828786Z error: undefined {"duration":58934,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.577Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.675070661Z error: undefined {"duration":58809,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.674Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.675559411Z error: undefined {"duration":58858,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.675Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.691039419Z error: undefined {"duration":58796,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.690Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.716696436Z error: undefined {"duration":58646,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.716Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.740102896Z error: undefined {"duration":58553,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.739Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.837319831Z error: undefined {"duration":57950,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.837Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.844194143Z error: undefined {"duration":57954,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.843Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.857872043Z error: undefined {"duration":57871,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.857Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.878624719Z error: undefined {"duration":57890,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.878Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.902461888Z error: undefined {"duration":57913,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.902Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:29.99899959Z error: undefined {"duration":58010,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:29.998Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.012733482Z error: undefined {"duration":58023,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.012Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.024549284Z error: undefined {"duration":58033,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.024Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.040051702Z error: undefined {"duration":58048,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.039Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.064883552Z error: undefined {"duration":57979,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.064Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.160943664Z error: undefined {"duration":57892,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.160Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.181188539Z error: undefined {"duration":57767,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.181Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.191110473Z error: undefined {"duration":57771,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.190Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.201518116Z error: undefined {"duration":57317,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.201Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.227097321Z error: undefined {"duration":57339,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.226Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.322917048Z error: undefined {"duration":57426,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.322Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.350011184Z error: undefined {"duration":57448,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.349Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.357431946Z error: undefined {"duration":57278,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.357Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.362610372Z error: undefined {"duration":57178,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.362Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.389253539Z error: undefined {"duration":57201,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.389Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.484998744Z error: undefined {"duration":56887,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.484Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.519531333Z error: undefined {"duration":56912,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.518Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.524786951Z error: undefined {"duration":56915,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.523Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.524948514Z error: undefined {"duration":56437,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.524Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.55201249Z error: undefined {"duration":56462,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.551Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.646694063Z error: undefined {"duration":56555,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.646Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.686907688Z error: undefined {"duration":56500,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.686Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.68745513Z error: undefined {"duration":56584,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.687Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.689856829Z error: undefined {"duration":56584,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.689Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.714106367Z error: undefined {"duration":56420,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.713Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.808482154Z error: undefined {"duration":56278,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.808Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.848581966Z error: undefined {"duration":55863,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.848Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.855939768Z error: undefined {"duration":55862,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.855Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.856673693Z error: undefined {"duration":55857,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.856Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.876065281Z error: undefined {"duration":55797,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.875Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:30.971114991Z error: undefined {"duration":55691,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:30.970Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.01049943Z error: undefined {"duration":55392,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.010Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.023361984Z error: undefined {"duration":54932,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.023Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.024509317Z error: undefined {"duration":55246,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.024Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.03826023Z error: undefined {"duration":54942,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.038Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.132070805Z error: undefined {"duration":55033,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.131Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.172016045Z error: undefined {"duration":55070,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.171Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.189854321Z error: undefined {"duration":55085,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.189Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.192284201Z error: undefined {"duration":55002,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.192Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.200111661Z error: undefined {"duration":54914,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.199Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.29360073Z error: undefined {"duration":54889,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.293Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.333606271Z error: undefined {"duration":54594,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.333Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.356749836Z error: undefined {"duration":54485,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.356Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.36036812Z error: undefined {"duration":54488,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.360Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.361473543Z error: undefined {"duration":54476,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.361Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.455744538Z error: undefined {"duration":54377,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.455Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.495431172Z error: undefined {"duration":54209,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.495Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.523810815Z error: undefined {"duration":54225,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.523Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.524510119Z error: undefined {"duration":54001,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.524Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.528226415Z error: undefined {"duration":54044,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.528Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.617309784Z error: undefined {"duration":53946,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.617Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.656878286Z error: undefined {"duration":53961,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.656Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.687616577Z error: undefined {"duration":53798,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.686Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.690015126Z error: undefined {"duration":53805,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.689Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.697314836Z error: undefined {"duration":53611,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.697Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.779010702Z error: undefined {"duration":53592,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.778Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.818325969Z error: undefined {"duration":53513,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.818Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.849607971Z error: undefined {"duration":53375,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.849Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.856514743Z error: undefined {"duration":53344,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.856Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.865397866Z error: undefined {"duration":53018,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.865Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.940739242Z error: undefined {"duration":53011,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.940Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:31.98009178Z error: undefined {"duration":52995,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:31.979Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.012325421Z error: undefined {"duration":52825,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.012Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.023572432Z error: undefined {"duration":52623,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.023Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.034110858Z error: undefined {"duration":52632,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.033Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.102576483Z error: undefined {"duration":52653,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.102Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.142049104Z error: undefined {"duration":52613,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.141Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.174673083Z error: undefined {"duration":52589,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.174Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.1901411Z error: undefined {"duration":52413,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.189Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.202914103Z error: undefined {"duration":52266,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.202Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.264295093Z error: undefined {"duration":52605,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.264Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.303213271Z error: undefined {"duration":52205,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.303Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.336914443Z error: undefined {"duration":52133,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.336Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.356514655Z error: undefined {"duration":52070,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.356Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.371479612Z error: undefined {"duration":51937,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.371Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.425801047Z error: undefined {"duration":51041,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.425Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.465107014Z error: undefined {"duration":50972,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.464Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.499072561Z error: undefined {"duration":51006,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.498Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.522800228Z error: undefined {"duration":50625,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.522Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.539694255Z error: undefined {"duration":50641,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.539Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.587587218Z error: undefined {"duration":50688,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.587Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.626882454Z error: undefined {"duration":50727,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.626Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.664010326Z error: undefined {"duration":50678,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.663Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.69246946Z error: undefined {"duration":50703,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.691Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.708626412Z error: undefined {"duration":50324,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.708Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.749430959Z error: undefined {"duration":50364,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.749Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.788574893Z error: undefined {"duration":50401,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.788Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.826685315Z error: undefined {"duration":50332,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.826Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.859633881Z error: undefined {"duration":50261,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.858Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.900064851Z error: undefined {"duration":50301,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.899Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.913826293Z error: undefined {"duration":50315,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.913Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.951112649Z error: undefined {"duration":50259,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.949Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:32.988830373Z error: undefined {"duration":50298,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:32.988Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.025774861Z error: undefined {"duration":50332,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.025Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.069737663Z error: undefined {"duration":50374,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.068Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.074821738Z error: undefined {"duration":50379,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.074Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.111808417Z error: undefined {"duration":50327,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.111Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.153306199Z error: undefined {"duration":50362,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.152Z","url":"/api/issues/nearby?latitude=16.8323725&longitude=75.73933149999999&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.192713137Z error: undefined {"duration":50401,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.192Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.23671059Z error: undefined {"duration":50444,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.236Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.23717505Z error: undefined {"duration":50446,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.237Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.27373615Z error: undefined {"duration":50480,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.273Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.315854875Z error: undefined {"duration":50520,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.314Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.359245315Z error: undefined {"duration":50565,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.359Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.398126803Z error: undefined {"duration":50602,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.397Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.405404622Z error: undefined {"duration":50520,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.405Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.434735824Z error: undefined {"duration":50433,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.434Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.476976161Z error: undefined {"duration":50468,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.476Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.526200832Z error: undefined {"duration":50366,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.526Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.559831792Z error: undefined {"duration":50351,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.559Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.573611825Z error: undefined {"duration":50247,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.573Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.596342421Z error: undefined {"duration":50222,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.596Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.638972656Z error: undefined {"duration":50025,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.638Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.692959284Z error: undefined {"duration":49829,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.692Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.721427908Z error: undefined {"duration":49738,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.721Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.741829377Z error: undefined {"duration":49753,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.741Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.760793516Z error: undefined {"duration":49680,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.757Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.801237486Z error: undefined {"duration":49667,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.801Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.860169776Z error: undefined {"duration":49671,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.859Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.88278064Z error: undefined {"duration":49691,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.882Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.910279044Z error: undefined {"duration":49482,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.910Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.919241008Z error: undefined {"duration":49483,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.919Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:33.963460766Z error: undefined {"duration":49476,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:33.963Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.027048741Z error: undefined {"duration":49539,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.026Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.044706233Z error: undefined {"duration":48666,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.044Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.078773453Z error: undefined {"duration":48679,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.078Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.080358705Z error: undefined {"duration":48670,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.080Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.125666715Z error: undefined {"duration":48714,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.125Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.193860385Z error: undefined {"duration":48780,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.193Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.206567245Z error: undefined {"duration":48793,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.206Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.242291929Z error: undefined {"duration":48776,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.242Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.246594497Z error: undefined {"duration":48781,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.246Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.287968196Z error: undefined {"duration":48811,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.287Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.360455844Z error: undefined {"duration":47124,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.360Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.368107471Z error: undefined {"duration":47129,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.367Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.403583939Z error: undefined {"duration":47161,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.403Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.41483514Z error: undefined {"duration":47167,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.414Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.450569943Z error: undefined {"duration":47202,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.450Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.527735537Z error: undefined {"duration":47278,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.527Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.529246098Z error: undefined {"duration":47279,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.529Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.565067713Z error: undefined {"duration":47312,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.564Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.583076793Z error: undefined {"duration":47330,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.582Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.612980757Z error: undefined {"duration":47359,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.612Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.691500878Z error: undefined {"duration":47435,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.691Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.694480789Z error: undefined {"duration":47439,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.694Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.726556077Z error: undefined {"duration":47470,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.726Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.751422138Z error: undefined {"duration":47494,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.751Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.774606384Z error: undefined {"duration":47486,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.774Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.853151036Z error: undefined {"duration":47563,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.852Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.861028648Z error: undefined {"duration":47299,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.860Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.888174474Z error: undefined {"duration":47326,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.887Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.920058519Z error: undefined {"duration":47356,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.919Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:34.936827263Z error: undefined {"duration":47372,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:34.936Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.014868715Z error: undefined {"duration":47447,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.014Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.027676808Z error: undefined {"duration":47459,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.027Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.049912404Z error: undefined {"duration":47480,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.049Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.088571287Z error: undefined {"duration":47518,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.088Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.098808598Z error: undefined {"duration":47527,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.098Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.176925181Z error: undefined {"duration":46607,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.176Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.195944761Z error: undefined {"duration":46620,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.194Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.215986193Z error: undefined {"duration":46636,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.215Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.257544835Z error: undefined {"duration":46677,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.257Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.261703181Z error: undefined {"duration":46680,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.260Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.338252252Z error: undefined {"duration":46753,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.338Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.361134301Z error: undefined {"duration":46774,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.360Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.377180361Z error: undefined {"duration":46790,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.376Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.423219186Z error: undefined {"duration":46834,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.423Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.425456612Z error: undefined {"duration":46838,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.425Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.499738546Z error: undefined {"duration":46802,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.499Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.527491456Z error: undefined {"duration":46681,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.527Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.53840707Z error: undefined {"duration":46687,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.538Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.589046929Z error: undefined {"duration":46709,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.588Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.59443454Z error: undefined {"duration":46711,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.594Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.661769892Z error: undefined {"duration":46484,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.661Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.694120196Z error: undefined {"duration":46509,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.693Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.6996944Z error: undefined {"duration":46380,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.699Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.750892901Z error: undefined {"duration":46278,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.750Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.762413257Z error: undefined {"duration":46155,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.762Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.823284267Z error: undefined {"duration":46111,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.823Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.860532971Z error: undefined {"duration":46147,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.860Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.861052012Z error: undefined {"duration":45846,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.860Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.913500568Z error: undefined {"duration":45880,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.913Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.930890365Z error: undefined {"duration":45745,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.930Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:35.984982615Z error: undefined {"duration":45796,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:35.984Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.023030526Z error: undefined {"duration":45830,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.022Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.026745452Z error: undefined {"duration":45837,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.026Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.075311839Z error: undefined {"duration":45780,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.075Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.099408564Z error: undefined {"duration":45612,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.099Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.14646671Z error: undefined {"duration":45653,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.146Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.184549471Z error: undefined {"duration":45564,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.184Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.193361262Z error: undefined {"duration":45409,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.193Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.237357345Z error: undefined {"duration":45265,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.237Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.267591356Z error: undefined {"duration":45081,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.267Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.308116437Z error: undefined {"duration":45116,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.307Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.345864072Z error: undefined {"duration":45077,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.345Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.359639465Z error: undefined {"duration":44849,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.359Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.399491612Z error: undefined {"duration":44888,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.399Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.436081374Z error: undefined {"duration":44838,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.435Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.469979149Z error: undefined {"duration":44564,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.469Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.507623762Z error: undefined {"duration":44591,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.507Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.526637062Z error: undefined {"duration":44568,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.526Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.562007928Z error: undefined {"duration":44589,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.561Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.604831117Z error: undefined {"duration":44573,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.604Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.631483714Z error: undefined {"duration":44350,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.631Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.669318021Z error: undefined {"duration":44311,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.669Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.693111779Z error: undefined {"duration":44265,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.692Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.724325689Z error: undefined {"duration":44295,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.724Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.77308088Z error: undefined {"duration":44174,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.772Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.792780284Z error: undefined {"duration":44148,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.792Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.83106904Z error: undefined {"duration":44083,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.830Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.859983484Z error: undefined {"duration":44047,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.859Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.886953057Z error: undefined {"duration":43966,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.886Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.941530047Z error: undefined {"duration":43903,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.941Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.954092735Z error: undefined {"duration":43194,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.953Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:36.992510474Z error: undefined {"duration":43230,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:36.992Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.026800667Z error: undefined {"duration":42952,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.026Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.048974522Z error: undefined {"duration":42972,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.048Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.110498425Z error: undefined {"duration":42960,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.110Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.115859245Z error: undefined {"duration":42934,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.115Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.154486038Z error: undefined {"duration":42972,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.154Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.19356396Z error: undefined {"duration":43005,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.193Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.211170881Z error: undefined {"duration":43019,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.210Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.278276939Z error: undefined {"duration":43057,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.278Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.278768169Z error: undefined {"duration":43085,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.278Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.315644296Z error: undefined {"duration":43080,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.315Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.360010156Z error: undefined {"duration":43122,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.359Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.372977302Z error: undefined {"duration":43134,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.372Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.439974097Z error: undefined {"duration":42793,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.439Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.447022602Z error: undefined {"duration":42789,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.446Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.477401075Z error: undefined {"duration":42792,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.477Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.526745658Z error: undefined {"duration":42836,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.526Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.535191012Z error: undefined {"duration":42826,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.535Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.601762218Z error: undefined {"duration":42873,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.601Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.615702274Z error: undefined {"duration":42694,"ip":"10.229.92.67","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.615Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.639052573Z error: undefined {"duration":42716,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.638Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.693215805Z error: undefined {"duration":42678,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.693Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.696839119Z error: undefined {"duration":42611,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.696Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.763241322Z error: undefined {"duration":42668,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.763Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.783852165Z error: undefined {"duration":42167,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.783Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.800050608Z error: undefined {"duration":42149,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.799Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.859433656Z error: undefined {"duration":42120,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.859Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.860054089Z error: undefined {"duration":42178,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.859Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.924947191Z error: undefined {"duration":42072,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.924Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.952307642Z error: undefined {"duration":42099,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.952Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:37.961330647Z error: undefined {"duration":41913,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:37.961Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.02185423Z error: undefined {"duration":41972,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.021Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.026311291Z error: undefined {"duration":41879,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.026Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.086811023Z error: undefined {"duration":41883,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.086Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.121162428Z error: undefined {"duration":40622,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.120Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.122614618Z error: undefined {"duration":40535,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.122Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.184388056Z error: undefined {"duration":40592,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.184Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.193966762Z error: undefined {"duration":40596,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.193Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.248134794Z error: undefined {"duration":40556,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.247Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.284378738Z error: undefined {"duration":40588,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.284Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.288782038Z error: undefined {"duration":40594,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.288Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.346613215Z error: undefined {"duration":40649,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.346Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.35954165Z error: undefined {"duration":40563,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.359Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.409630828Z error: undefined {"duration":40612,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.409Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.445930783Z error: undefined {"duration":40300,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.445Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.457150704Z error: undefined {"duration":40231,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.456Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.508932426Z error: undefined {"duration":40282,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.508Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.525942515Z error: undefined {"duration":40298,"ip":"10.229.92.193","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.525Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.57146679Z error: undefined {"duration":40337,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.571Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.607451728Z error: undefined {"duration":40369,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.607Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.62555866Z error: undefined {"duration":40310,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.625Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.671063624Z error: undefined {"duration":40145,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.670Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.692749529Z error: undefined {"duration":40131,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.692Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.739745243Z error: undefined {"duration":40164,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.736Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.769491834Z error: undefined {"duration":40179,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.769Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.794274803Z error: undefined {"duration":40105,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.794Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.833554989Z error: undefined {"duration":39951,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.833Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.859607294Z error: undefined {"duration":39825,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.859Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.898303718Z error: undefined {"duration":39813,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.898Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.931009829Z error: undefined {"duration":39452,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.930Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.962810682Z error: undefined {"duration":39482,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.962Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:38.995739768Z error: undefined {"duration":39167,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:38.995Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:39.026102541Z error: undefined {"duration":39182,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:39.025Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:39.059944185Z error: undefined {"duration":39155,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:39.059Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:39.092409872Z error: undefined {"duration":39105,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:39.092Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}
2025-09-11T17:12:39.131134056Z error: undefined {"duration":39128,"ip":"10.229.98.4","method":"GET","service":"performance-monitor","status":200,"timestamp":"2025-09-11T17:12:39.130Z","url":"/api/issues/nearby?latitude=40.71278477995827&longitude=-74.00596618652345&radius=10","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"}