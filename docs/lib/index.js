/**
 * AckerJS - A lightweight, modular JavaScript framework
 *
 * @packageDocumentation
 * AckerJS provides essential utilities for modern web development:
 * - DOM manipulation helpers
 * - HTTP request wrappers with error handling
 * - Formatting utilities for strings, numbers, and dates
 *
 * @example
 * ```typescript
 * // Import everything
 * import { DOM, HTTP, Format } from 'ackerjs';
 *
 * // Or import specific modules for better tree-shaking
 * import * as DOM from 'ackerjs/dom';
 * import * as HTTP from 'ackerjs/http';
 * import * as Format from 'ackerjs/format';
 * ```
 */
/**
 * DOM manipulation utilities
 * Functions for selecting, creating, and manipulating DOM elements
 */
export * as DOM from './dom/index.js';
/**
 * HTTP request utilities
 * Fetch wrappers with built-in error handling and JSON parsing
 */
export * as HTTP from './http/index.js';
/**
 * Formatting utilities
 * Helpers for formatting strings, numbers, and dates
 */
export * as Format from './format/index.js';
// Named exports for convenience
export { select, selectAll, create, append, remove, addClass, removeClass, toggleClass } from './dom/index.js';
export { component } from './dom/component.js';
export { fetchJSON, postJSON, putJSON, deleteJSON, get, post, put, del } from './http/index.js';
export { formatDate, formatDateTime, formatTime, capitalize, truncate, formatNumber, formatCurrency } from './format/index.js';
// Version information
export const VERSION = '1.0.0';
//# sourceMappingURL=index.js.map