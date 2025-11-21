/**
 * Component System for AckerJS
 * Allows creating reusable custom elements with attribute-based props
 */
export type RenderFunction = (props: Record<string, string>) => string | HTMLElement;
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
export declare function component(tagName: string, render: RenderFunction, observedAttributes?: string[]): void;
//# sourceMappingURL=component.d.ts.map