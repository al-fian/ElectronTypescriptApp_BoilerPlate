"use strict";
console.log('Hello from Renderer');
const coreCount = document.getElementById('cores');
//@ts-expect-error
coreCount === null || coreCount === void 0 ? void 0 : coreCount.innerText = `Core count: ${api.threads}`;
