export function onMount(callback: () => void): void {
  document.addEventListener("DOMContentLoaded", callback);
}
