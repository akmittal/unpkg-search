export const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
let hostUrl;
const isDev = process.env.NODE_ENV !== "production";
const isBrowser = typeof window !== "undefined";
if (isBrowser) {
  hostUrl = "/";
} else if (isDev) {
  hostUrl = "http://localhost:3000/";
} else {
  hostUrl = "https://www.unpkgsearch.com/";
}

export const host = hostUrl;
