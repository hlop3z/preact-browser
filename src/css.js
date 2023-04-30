const prefixCSS = "gui-design";

export default function injectCSS(props) {
  /**
   * Inject replaceable CSS.
   * @param {string} id
   * @param {string} code
   */
  const ID = props.id;
  const stringTemplate = props.code;

  function getStyle(id) {
    /**
     * Add replaceable CSS.
     * @param {string} styleID
     * @param {string} styleString
     */
    const found = window.document.querySelectorAll(`[${prefixCSS}="${id}"]`);
    if (found.length > 0) {
      return found[0];
    } else {
      const style = window.document.createElement("style");
      style.setAttribute(prefixCSS, id);
      window.document.head.append(style);
      return style;
    }
  }

  function removeSpace(text) {
    /**
     * Clean CSS Code.
     * @param {string} text
     */
    return text
      .replace(/\s\s+/g, " ")
      .replace(/\r?\n|\r/g, "")
      .trim();
  }

  const elem = getStyle(ID);
  elem.textContent = removeSpace(stringTemplate);
}
