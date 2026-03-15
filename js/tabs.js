// ここからコードを書いてください
export function setupTabs() {
  const hometab = document.querySelector('[data-tab="home"]');
  const convtab = document.querySelector('[data-tab="converter"]');
  const home = document.getElementById('home');
  const conv = document.getElementById('converter');

  if (!hometab || !convtab || !home || !conv) return;

  hometab.addEventListener("click", (e) => {
    e.preventDefault();
    conv.classList.add("hidden");
    home.classList.remove("hidden");
  });
  convtab.addEventListener("click", (e) => {
    e.preventDefault();
    home.classList.add("hidden");
    conv.classList.remove("hidden");
  });
}
