console.log('Hello from Renderer');

const coreCount = document.getElementById('cores');

//@ts-expect-error
coreCount?.innerText = `Core count: ${api.threads}`;