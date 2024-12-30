(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[project]_apps_2c007b._.js", {

"[project]/apps/backend/src/mocks/handlers.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "handlers": (()=>handlers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$msw$40$2$2e$7$2e$0_$40$types$2b$node$40$20$2e$17$2e$10_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$msw$2f$lib$2f$core$2f$http$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/msw@2.7.0_@types+node@20.17.10_typescript@5.7.2/node_modules/msw/lib/core/http.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$msw$40$2$2e$7$2e$0_$40$types$2b$node$40$20$2e$17$2e$10_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$msw$2f$lib$2f$core$2f$HttpResponse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/msw@2.7.0_@types+node@20.17.10_typescript@5.7.2/node_modules/msw/lib/core/HttpResponse.mjs [app-client] (ecmascript)");
;
let tasks = [
    {
        id: "1",
        title: "Tarea 1",
        description: "Descripción 1",
        status: "todo"
    },
    {
        id: "2",
        title: "Tarea 2",
        description: "Descripción 2",
        status: "done"
    }
];
const handlers = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$msw$40$2$2e$7$2e$0_$40$types$2b$node$40$20$2e$17$2e$10_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$msw$2f$lib$2f$core$2f$http$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"].get("/api/tasks", ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$msw$40$2$2e$7$2e$0_$40$types$2b$node$40$20$2e$17$2e$10_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$msw$2f$lib$2f$core$2f$HttpResponse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpResponse"].json(tasks, {
            status: 200
        });
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$msw$40$2$2e$7$2e$0_$40$types$2b$node$40$20$2e$17$2e$10_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$msw$2f$lib$2f$core$2f$http$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"].post("/api/tasks", async ({ request })=>{
        const newTask = await request.json();
        const taskWithId = {
            id: Date.now().toString(),
            ...newTask
        };
        tasks.push(taskWithId);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$msw$40$2$2e$7$2e$0_$40$types$2b$node$40$20$2e$17$2e$10_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$msw$2f$lib$2f$core$2f$HttpResponse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpResponse"].json(taskWithId, {
            status: 201
        });
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$msw$40$2$2e$7$2e$0_$40$types$2b$node$40$20$2e$17$2e$10_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$msw$2f$lib$2f$core$2f$http$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"].put("/api/tasks/:id", async ({ request, params })=>{
        const updatedTask = await request.json();
        tasks = tasks.map((task)=>task.id === params.id ? {
                ...task,
                ...updatedTask
            } : task);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$msw$40$2$2e$7$2e$0_$40$types$2b$node$40$20$2e$17$2e$10_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$msw$2f$lib$2f$core$2f$HttpResponse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpResponse"].json(updatedTask, {
            status: 200
        });
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$msw$40$2$2e$7$2e$0_$40$types$2b$node$40$20$2e$17$2e$10_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$msw$2f$lib$2f$core$2f$http$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"].delete("/api/tasks/:id", ({ params })=>{
        tasks = tasks.filter((task)=>task.id !== params.id);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$msw$40$2$2e$7$2e$0_$40$types$2b$node$40$20$2e$17$2e$10_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$msw$2f$lib$2f$core$2f$HttpResponse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpResponse"](null, {
            status: 204
        });
    })
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/backend/src/mocks/browser.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "worker": (()=>worker)
});
(()=>{
    const e = new Error("Cannot find module 'msw/node'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$src$2f$mocks$2f$handlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/backend/src/mocks/handlers.ts [app-client] (ecmascript)");
;
;
const worker = setupServer(...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$src$2f$mocks$2f$handlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handlers"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/app/msw.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$src$2f$mocks$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/backend/src/mocks/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$backend$2f$src$2f$mocks$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["worker"].start({
        onUnhandledRequest: "warn" // Opcional: muestra advertencias para solicitudes no manejadas
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=%5Bproject%5D_apps_2c007b._.js.map