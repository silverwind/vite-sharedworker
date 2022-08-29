if (window.SharedWorker) {
  const worker = new window.SharedWorker(new URL('worker.js', import.meta.url));
}
