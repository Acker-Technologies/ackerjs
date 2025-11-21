/**
 * Component System for AckerJS
 * Allows creating reusable custom elements with attribute-based props
 */
/**
 * Define a new reusable component
 * @param tagName - The custom element tag name (must contain a hyphen)
 * @param render - Function that returns HTML string or HTMLElement based on props
 * @param observedAttributes - Array of attribute names to observe for changes
 * @example
 * component('user-card', (props) => {
 *   return `<div class="card"><h3>${props.name}</h3></div>`;
 * }, ['name']);
 */
export function component(tagName, render, observedAttributes = []) {
    if (!tagName.includes('-')) {
        console.error(`[AckerJS Component] Invalid tag name: ${tagName}. Custom elements must contain a hyphen.`);
        return;
    }
    if (customElements.get(tagName)) {
        console.warn(`[AckerJS Component] Component ${tagName} is already defined.`);
        return;
    }
    class AckerComponent extends HTMLElement {
        static get observedAttributes() {
            return observedAttributes;
        }
        constructor() {
            super();
        }
        connectedCallback() {
            this.render();
        }
        attributeChangedCallback(_name, oldValue, newValue) {
            if (oldValue !== newValue) {
                this.render();
            }
        }
        getProps() {
            const props = {};
            // Get all attributes
            Array.from(this.attributes).forEach(attr => {
                props[attr.name] = attr.value;
            });
            return props;
        }
        render() {
            const props = this.getProps();
            const content = render(props);
            // Clear current content
            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }
            // Render new content
            if (typeof content === 'string') {
                this.innerHTML = content;
            }
            else if (content instanceof HTMLElement) {
                this.appendChild(content);
            }
        }
    }
    try {
        customElements.define(tagName, AckerComponent);
    }
    catch (error) {
        console.error(`[AckerJS Component] Failed to define component ${tagName}`, error);
    }
}
//# sourceMappingURL=component.js.map