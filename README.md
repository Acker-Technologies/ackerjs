<p align="center">
  <img src="../logo.png" alt="AckerJS Logo" width="200"/>
</p>

# AckerJS

A lightweight, modular JavaScript framework for developers with full TypeScript support. AckerJS provides essential utilities for DOM manipulation, HTTP requests, and data formatting - all in a tree-shakable package.

## Features

- 🚀 **Lightweight** - Small bundle size with zero dependencies
- 📦 **Modular** - Import only what you need for optimal tree-shaking
- 💪 **TypeScript** - Full type safety with comprehensive JSDoc comments
- 🎯 **Developer-friendly** - Clean, intuitive API with clear error messages
- ⚡ **Modern** - Built with ES2020+ features

## Installation

```bash
npm install ackerjs
```

## Usage

### Import Everything

```typescript
import { DOM, HTTP, Format } from 'ackerjs';

// Use DOM helpers
const element = DOM.select('#app');
DOM.append(element, DOM.create('div', { className: 'container' }));

// Use HTTP utilities
const data = await HTTP.fetchJSON('https://api.example.com/data');
await HTTP.postJSON('https://api.example.com/save', { name: 'John' });

// Use formatting utilities
const formatted = Format.formatDate(new Date());
const capitalized = Format.capitalize('hello world');
```

### Tree-Shakable Module Imports

For optimal bundle size, import specific modules:

```typescript
import * as DOM from 'ackerjs/dom';
import * as HTTP from 'ackerjs/http';
import * as Format from 'ackerjs/format';
```

## API Reference

### DOM Helpers (`ackerjs/dom`)

#### `select(selector: string): HTMLElement | null`
Select a single DOM element using a CSS selector.

```typescript
const element = DOM.select('#my-element');
```

#### `selectAll(selector: string): HTMLElement[]`
Select all matching DOM elements.

```typescript
const elements = DOM.selectAll('.item');
```

#### `create(tag: string, props?: Record<string, any>): HTMLElement`
Create a new DOM element with optional properties.

```typescript
const div = DOM.create('div', {
  className: 'container',
  id: 'main',
  textContent: 'Hello World'
});
```

#### `append(parent: HTMLElement, child: HTMLElement): void`
Append a child element to a parent.

```typescript
DOM.append(container, newElement);
```

#### `remove(element: HTMLElement): void`
Remove an element from the DOM.

```typescript
DOM.remove(element);
```

#### `addClass(element: HTMLElement, ...classes: string[]): void`
Add one or more CSS classes to an element.

```typescript
DOM.addClass(element, 'active', 'highlighted');
```

#### `removeClass(element: HTMLElement, ...classes: string[]): void`
Remove one or more CSS classes from an element.

```typescript
DOM.removeClass(element, 'active');
```

#### `toggleClass(element: HTMLElement, className: string): void`
Toggle a CSS class on an element.

```typescript
DOM.toggleClass(element, 'visible');
```

#### `on(element: HTMLElement, event: string, handler: EventListener): void`
Add an event listener to an element.

```typescript
DOM.on(button, 'click', (e) => console.log('Clicked!'));
```

#### `off(element: HTMLElement, event: string, handler: EventListener): void`
Remove an event listener from an element.

```typescript
DOM.off(button, 'click', clickHandler);
```

### HTTP Utilities (`ackerjs/http`)

#### `fetchJSON<T>(url: string, options?: RequestInit): Promise<T>`
Fetch JSON data with automatic error handling and parsing.

```typescript
interface User {
  id: number;
  name: string;
}

const user = await HTTP.fetchJSON<User>('https://api.example.com/user/1');
```

#### `postJSON<T>(url: string, data: any, options?: RequestInit): Promise<T>`
Send a POST request with JSON data.

```typescript
const response = await HTTP.postJSON('/api/users', {
  name: 'John Doe',
  email: 'john@example.com'
});
```

#### `putJSON<T>(url: string, data: any, options?: RequestInit): Promise<T>`
Send a PUT request with JSON data.

```typescript
const updated = await HTTP.putJSON('/api/users/1', { name: 'Jane Doe' });
```

#### `deleteJSON<T>(url: string, options?: RequestInit): Promise<T>`
Send a DELETE request.

```typescript
await HTTP.deleteJSON('/api/users/1');
```

#### `get<T>(url: string, options?: RequestInit): Promise<T>`
Generic GET request wrapper.

```typescript
const data = await HTTP.get<MyType>('https://api.example.com/data');
```

### Formatting Utilities (`ackerjs/format`)

#### `formatDate(date: Date, locale?: string): string`
Format a date using the browser's locale or a specified locale.

```typescript
Format.formatDate(new Date()); // "11/16/2025"
Format.formatDate(new Date(), 'en-GB'); // "16/11/2025"
```

#### `formatDateTime(date: Date, locale?: string): string`
Format a date and time.

```typescript
Format.formatDateTime(new Date()); // "11/16/2025, 2:30:00 PM"
```

#### `formatTime(date: Date, locale?: string): string`
Format just the time portion.

```typescript
Format.formatTime(new Date()); // "2:30:00 PM"
```

#### `capitalize(str: string): string`
Capitalize the first letter of a string.

```typescript
Format.capitalize('hello world'); // "Hello world"
```

#### `capitalizeWords(str: string): string`
Capitalize the first letter of each word.

```typescript
Format.capitalizeWords('hello world'); // "Hello World"
```

#### `truncate(str: string, length: number, suffix?: string): string`
Truncate a string to a specified length.

```typescript
Format.truncate('Hello World', 5); // "Hello..."
Format.truncate('Hello World', 5, '…'); // "Hello…"
```

#### `formatNumber(num: number, decimals?: number, locale?: string): string`
Format a number with optional decimal places.

```typescript
Format.formatNumber(1234.5678, 2); // "1,234.57"
```

#### `formatCurrency(amount: number, currency?: string, locale?: string): string`
Format a number as currency.

```typescript
Format.formatCurrency(1234.56); // "$1,234.56"
Format.formatCurrency(1234.56, 'EUR', 'de-DE'); // "1.234,56 €"
```

#### `slugify(str: string): string`
Convert a string to a URL-friendly slug.

```typescript
Format.slugify('Hello World!'); // "hello-world"
```

#### `camelCase(str: string): string`
Convert a string to camelCase.

```typescript
Format.camelCase('hello-world'); // "helloWorld"
```

#### `kebabCase(str: string): string`
Convert a string to kebab-case.

```typescript
Format.kebabCase('helloWorld'); // "hello-world"
```

## Development

### Build

```bash
npm run build
```

### Watch Mode

```bash
npm run watch
```

## License

MIT © Acker Technologies

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
