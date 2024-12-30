module.exports = {

"[project]/apps/web/app/state/authSlice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "authSlice": (()=>authSlice),
    "default": (()=>__TURBOPACK__default__export__),
    "login": (()=>login),
    "logout": (()=>logout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$5$2e$0_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@reduxjs+toolkit@2.5.0_react-redux@9.2.0_@types+react@19.0.1_react@19.0.0_redux@5.0.1__react@19.0.0/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
"use client";
;
const initialState = {
    isAuthenticated: false,
    token: null,
    error: null
};
const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$5$2e$0_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/login", async (credentials, { rejectWithValue })=>{
    const { username, password } = credentials;
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (username === "admin" && password === "password") {
                resolve({
                    token: "fake-jwt-token"
                });
            } else {
                reject(rejectWithValue("Invalid username or password"));
            }
        }, 1000);
    });
});
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$5$2e$0_react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_react$40$19$2e$0$2e$0_redux$40$5$2e$0$2e$1_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "auth",
    initialState,
    reducers: {
        logout (state) {
            state.isAuthenticated = false;
            state.token = null;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(login.fulfilled, (state, action)=>{
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.error = null;
        }).addCase(login.rejected, (state, action)=>{
            state.error = action.payload;
        });
    }
});
const { logout } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice.reducer;
}}),
"[project]/apps/web/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=app_eff688._.js.map