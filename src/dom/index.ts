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
export function select(selector: string): HTMLElement | null {
  try {
    return document.querySelector<HTMLElement>(selector);
  } catch (error) {
    console.error(`[AckerJS DOM] Invalid selector: ${selector}`, error);
    return null;
  }
}

/**
 * Select all DOM elements matching a CSS selector
 * @param selector - CSS selector string
 * @returns Array of matching HTMLElements
 * @example
 * const items = selectAll('.item');
 */
export function selectAll(selector: string): HTMLElement[] {
  try {
    return Array.from(document.querySelectorAll<HTMLElement>(selector));
  } catch (error) {
    console.error(`[AckerJS DOM] Invalid selector: ${selector}`, error);
    return [];
  }
}

/**
 * Create a new DOM element with optional properties
 * @param tag - HTML tag name
 * @param props - Optional object containing element properties
 * @returns Newly created HTMLElement
 * @example
 * const div = create('div', { className: 'container', id: 'main' });
 */
export function create(tag: string, props?: Record<string, any>): HTMLElement {
  try {
    const element = document.createElement(tag);

    if (props) {
      Object.entries(props).forEach(([key, value]) => {
        if (key === 'style' && typeof value === 'object') {
          Object.assign(element.style, value);
        } else if (key === 'dataset' && typeof value === 'object') {
          Object.entries(value).forEach(([dataKey, dataValue]) => {
            element.dataset[dataKey] = String(dataValue);
          });
        } else if (key.startsWith('on') && typeof value === 'function') {
          const eventName = key.substring(2).toLowerCase();
          element.addEventListener(eventName, value);
        } else {
          (element as any)[key] = value;
        }
      });
    }

    return element;
  } catch (error) {
    console.error(`[AckerJS DOM] Error creating element: ${tag}`, error);
    throw error;
  }
}

/**
 * Append a child element to a parent element
 * @param parent - Parent HTMLElement
 * @param child - Child HTMLElement to append
 * @example
 * append(container, newElement);
 */
export function append(parent: HTMLElement, child: HTMLElement): void {
  if (!parent || !child) {
    console.error('[AckerJS DOM] Invalid parent or child element for append');
    return;
  }

  try {
    parent.appendChild(child);
  } catch (error) {
    console.error('[AckerJS DOM] Error appending child', error);
  }
}

/**
 * Remove an element from the DOM
 * @param element - HTMLElement to remove
 * @example
 * remove(element);
 */
export function remove(element: HTMLElement): void {
  if (!element) {
    console.error('[AckerJS DOM] Invalid element for removal');
    return;
  }

  try {
    element.remove();
  } catch (error) {
    console.error('[AckerJS DOM] Error removing element', error);
  }
}

/**
 * Add one or more CSS classes to an element
 * @param element - Target HTMLElement
 * @param classes - Class names to add
 * @example
 * addClass(element, 'active', 'highlighted');
 */
export function addClass(element: HTMLElement, ...classes: string[]): void {
  if (!element) {
    console.error('[AckerJS DOM] Invalid element for addClass');
    return;
  }

  try {
    element.classList.add(...classes);
  } catch (error) {
    console.error('[AckerJS DOM] Error adding classes', error);
  }
}

/**
 * Remove one or more CSS classes from an element
 * @param element - Target HTMLElement
 * @param classes - Class names to remove
 * @example
 * removeClass(element, 'active');
 */
export function removeClass(element: HTMLElement, ...classes: string[]): void {
  if (!element) {
    console.error('[AckerJS DOM] Invalid element for removeClass');
    return;
  }

  try {
    element.classList.remove(...classes);
  } catch (error) {
    console.error('[AckerJS DOM] Error removing classes', error);
  }
}

/**
 * Toggle a CSS class on an element
 * @param element - Target HTMLElement
 * @param className - Class name to toggle
 * @returns True if class was added, false if removed
 * @example
 * toggleClass(element, 'visible');
 */
export function toggleClass(element: HTMLElement, className: string): boolean {
  if (!element) {
    console.error('[AckerJS DOM] Invalid element for toggleClass');
    return false;
  }

  try {
    return element.classList.toggle(className);
  } catch (error) {
    console.error('[AckerJS DOM] Error toggling class', error);
    return false;
  }
}

/**
 * Check if an element has a specific CSS class
 * @param element - Target HTMLElement
 * @param className - Class name to check
 * @returns True if element has the class
 * @example
 * if (hasClass(element, 'active')) { ... }
 */
export function hasClass(element: HTMLElement, className: string): boolean {
  if (!element) {
    console.error('[AckerJS DOM] Invalid element for hasClass');
    return false;
  }

  return element.classList.contains(className);
}

/**
 * Add an event listener to an element
 * @param element - Target HTMLElement
 * @param event - Event name (without 'on' prefix)
 * @param handler - Event handler function
 * @param options - Optional event listener options
 * @example
 * on(button, 'click', (e) => console.log('Clicked!'));
 */
export function on(
  element: HTMLElement,
  event: string,
  handler: EventListener,
  options?: boolean | AddEventListenerOptions
): void {
  if (!element || !handler) {
    console.error('[AckerJS DOM] Invalid element or handler for event listener');
    return;
  }

  try {
    element.addEventListener(event, handler, options);
  } catch (error) {
    console.error(`[AckerJS DOM] Error adding event listener: ${event}`, error);
  }
}

/**
 * Remove an event listener from an element
 * @param element - Target HTMLElement
 * @param event - Event name (without 'on' prefix)
 * @param handler - Event handler function to remove
 * @param options - Optional event listener options
 * @example
 * off(button, 'click', clickHandler);
 */
export function off(
  element: HTMLElement,
  event: string,
  handler: EventListener,
  options?: boolean | EventListenerOptions
): void {
  if (!element || !handler) {
    console.error('[AckerJS DOM] Invalid element or handler for removing event listener');
    return;
  }

  try {
    element.removeEventListener(event, handler, options);
  } catch (error) {
    console.error(`[AckerJS DOM] Error removing event listener: ${event}`, error);
  }
}

/**
 * Set attributes on an element
 * @param element - Target HTMLElement
 * @param attributes - Object containing attribute key-value pairs
 * @example
 * setAttributes(element, { 'data-id': '123', 'aria-label': 'Close' });
 */
export function setAttributes(element: HTMLElement, attributes: Record<string, string>): void {
  if (!element) {
    console.error('[AckerJS DOM] Invalid element for setAttributes');
    return;
  }

  try {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  } catch (error) {
    console.error('[AckerJS DOM] Error setting attributes', error);
  }
}

/**
 * Get the value of an attribute
 * @param element - Target HTMLElement
 * @param attribute - Attribute name
 * @returns Attribute value or null if not found
 * @example
 * const id = getAttribute(element, 'data-id');
 */
export function getAttribute(element: HTMLElement, attribute: string): string | null {
  if (!element) {
    console.error('[AckerJS DOM] Invalid element for getAttribute');
    return null;
  }

  return element.getAttribute(attribute);
}

/**
 * Remove an attribute from an element
 * @param element - Target HTMLElement
 * @param attribute - Attribute name to remove
 * @example
 * removeAttribute(element, 'disabled');
 */
export function removeAttribute(element: HTMLElement, attribute: string): void {
  if (!element) {
    console.error('[AckerJS DOM] Invalid element for removeAttribute');
    return;
  }

  try {
    element.removeAttribute(attribute);
  } catch (error) {
    console.error('[AckerJS DOM] Error removing attribute', error);
  }
}

/**
 * Set inline styles on an element
 * @param element - Target HTMLElement
 * @param styles - Object containing CSS property-value pairs
 * @example
 * setStyles(element, { color: 'red', fontSize: '16px' });
 */
export function setStyles(element: HTMLElement, styles: Partial<CSSStyleDeclaration>): void {
  if (!element) {
    console.error('[AckerJS DOM] Invalid element for setStyles');
    return;
  }

  try {
    Object.assign(element.style, styles);
  } catch (error) {
    console.error('[AckerJS DOM] Error setting styles', error);
  }
}

/**
 * Get the computed style of an element
 * @param element - Target HTMLElement
 * @returns CSSStyleDeclaration object
 * @example
 * const styles = getStyles(element);
 * console.log(styles.color);
 */
export function getStyles(element: HTMLElement): CSSStyleDeclaration {
  if (!element) {
    throw new Error('[AckerJS DOM] Invalid element for getStyles');
  }

  return window.getComputedStyle(element);
}

/**
 * Empty all child nodes from an element
 * @param element - Target HTMLElement
 * @example
 * empty(container);
 */
export function empty(element: HTMLElement): void {
  if (!element) {
    console.error('[AckerJS DOM] Invalid element for empty');
    return;
  }

  try {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  } catch (error) {
    console.error('[AckerJS DOM] Error emptying element', error);
  }
}

/**
 * Clone an element
 * @param element - Element to clone
 * @param deep - Whether to clone child nodes (default: true)
 * @returns Cloned HTMLElement
 * @example
 * const cloned = clone(element);
 */
export function clone(element: HTMLElement, deep: boolean = true): HTMLElement {
  if (!element) {
    throw new Error('[AckerJS DOM] Invalid element for clone');
  }

  return element.cloneNode(deep) as HTMLElement;
}

/**
 * Check if an element matches a selector
 * @param element - Target HTMLElement
 * @param selector - CSS selector string
 * @returns True if element matches selector
 * @example
 * if (matches(element, '.active')) { ... }
 */
export function matches(element: HTMLElement, selector: string): boolean {
  if (!element) {
    console.error('[AckerJS DOM] Invalid element for matches');
    return false;
  }

  try {
    return element.matches(selector);
  } catch (error) {
    console.error(`[AckerJS DOM] Invalid selector: ${selector}`, error);
    return false;
  }
}

/**
 * Find the closest ancestor matching a selector
 * @param element - Starting HTMLElement
 * @param selector - CSS selector string
 * @returns Closest matching ancestor or null
 * @example
 * const container = closest(element, '.container');
 */
export function closest(element: HTMLElement, selector: string): HTMLElement | null {
  if (!element) {
    console.error('[AckerJS DOM] Invalid element for closest');
    return null;
  }

  try {
    return element.closest<HTMLElement>(selector);
  } catch (error) {
    console.error(`[AckerJS DOM] Invalid selector: ${selector}`, error);
    return null;
  }
}
