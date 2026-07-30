export function getContent(el, mapping) {
  const content = {};
  for (const key in mapping) {
    const { $, type } = mapping[key];
    const node = el.querySelector($);
    if (!node) {
      content[key] = null;
      continue;
    }
    content[key] = type === 'html' ? node : node.innerText;
  }
  return content;
}