/**
 * DOM Helper Utilities
 * Provides simple, type-safe functions for DOM manipulation
 */
export { component } from './component.js';
/**
 * Select a single DOM element using a CSS selector
 * @param selector - CSS selector string
 * @returns The first matching HTMLElement or null if not found
 * @example
 * const element = select('#my-element');
 */
export declare function select(selector: string): HTMLElement | null;
/**
 * Select all DOM elements matching a CSS selector
 * @param selector - CSS selector string
 * @returns Array of matching HTMLElements
 * @example
 * const items = selectAll('.item');
 */
export declare function selectAll(selector: string): HTMLElement[];
/**
 * Create a new DOM element with optional properties
 * @param tag - HTML tag name
 * @param props - Optional object containing element properties
 * @returns Newly created HTMLElement
 * @example
 * const div = create('div', { className: 'container', id: 'main' });
 */
export declare function create(tag: string, props?: Record<string, any>): HTMLElement;
/**
 * Append a child element to a parent element
 * @param parent - Parent HTMLElement
 * @param child - Child HTMLElement to append
 * @example
 * append(container, newElement);
 */
export declare function append(parent: HTMLElement, child: HTMLElement): void;
/**
 * Remove an element from the DOM
 * @param element - HTMLElement to remove
 * @example
 * remove(element);
 */
export declare function remove(element: HTMLElement): void;
/**
 * Add one or more CSS classes to an element
 * @param element - Target HTMLElement
 * @param classes - Class names to add
 * @example
 * addClass(element, 'active', 'highlighted');
 */
export declare function addClass(element: HTMLElement, ...classes: string[]): void;
/**
 * Remove one or more CSS classes from an element
 * @param element - Target HTMLElement
 * @param classes - Class names to remove
 * @example
 * removeClass(element, 'active');
 */
export declare function removeClass(element: HTMLElement, ...classes: string[]): void;
/**
 * Toggle a CSS class on an element
 * @param element - Target HTMLElement
 * @param className - Class name to toggle
 * @returns True if class was added, false if removed
 * @example
 * toggleClass(element, 'visible');
 */
export declare function toggleClass(element: HTMLElement, className: string): boolean;
/**
 * Check if an element has a specific CSS class
 * @param element - Target HTMLElement
 * @param className - Class name to check
 * @returns True if element has the class
 * @example
 * if (hasClass(element, 'active')) { ... }
 */
export declare function hasClass(element: HTMLElement, className: string): boolean;
/**
 * Add an event listener to an element
 * @param element - Target HTMLElement
 * @param event - Event name (without 'on' prefix)
 * @param handler - Event handler function
 * @param options - Optional event listener options
 * @example
 * on(button, 'click', (e) => console.log('Clicked!'));
 */
export declare function on(element: HTMLElement, event: string, handler: EventListener, options?: boolean | AddEventListenerOptions): void;
/**
 * Remove an event listener from an element
 * @param element - Target HTMLElement
 * @param event - Event name (without 'on' prefix)
 * @param handler - Event handler function to remove
 * @param options - Optional event listener options
 * @example
 * off(button, 'click', clickHandler);
 */
export declare function off(element: HTMLElement, event: string, handler: EventListener, options?: boolean | EventListenerOptions): void;
/**
 * Set attributes on an element
 * @param element - Target HTMLElement
 * @param attributes - Object containing attribute key-value pairs
 * @example
 * setAttributes(element, { 'data-id': '123', 'aria-label': 'Close' });
 */
export declare function setAttributes(element: HTMLElement, attributes: Record<string, string>): void;
/**
 * Get the value of an attribute
 * @param element - Target HTMLElement
 * @param attribute - Attribute name
 * @returns Attribute value or null if not found
 * @example
 * const id = getAttribute(element, 'data-id');
 */
export declare function getAttribute(element: HTMLElement, attribute: string): string | null;
/**
 * Remove an attribute from an element
 * @param element - Target HTMLElement
 * @param attribute - Attribute name to remove
 * @example
 * removeAttribute(element, 'disabled');
 */
export declare function removeAttribute(element: HTMLElement, attribute: string): void;
/**
 * Set inline styles on an element
 * @param element - Target HTMLElement
 * @param styles - Object containing CSS property-value pairs
 * @example
 * setStyles(element, { color: 'red', fontSize: '16px' });
 */
export declare function setStyles(element: HTMLElement, styles: Partial<CSSStyleDeclaration>): void;
/**
 * Get the computed style of an element
 * @param element - Target HTMLElement
 * @returns CSSStyleDeclaration object
 * @example
 * const styles = getStyles(element);
 * console.log(styles.color);
 */
export declare function getStyles(element: HTMLElement): CSSStyleDeclaration;
/**
 * Empty all child nodes from an element
 * @param element - Target HTMLElement
 * @example
 * empty(container);
 */
export declare function empty(element: HTMLElement): void;
/**
 * Clone an element
 * @param element - Element to clone
 * @param deep - Whether to clone child nodes (default: true)
 * @returns Cloned HTMLElement
 * @example
 * const cloned = clone(element);
 */
export declare function clone(element: HTMLElement, deep?: boolean): HTMLElement;
/**
 * Check if an element matches a selector
 * @param element - Target HTMLElement
 * @param selector - CSS selector string
 * @returns True if element matches selector
 * @example
 * if (matches(element, '.active')) { ... }
 */
export declare function matches(element: HTMLElement, selector: string): boolean;
/**
 * Find the closest ancestor matching a selector
 * @param element - Starting HTMLElement
 * @param selector - CSS selector string
 * @returns Closest matching ancestor or null
 * @example
 * const container = closest(element, '.container');
 */
export declare function closest(element: HTMLElement, selector: string): HTMLElement | null;
//# sourceMappingURL=index.d.ts.map