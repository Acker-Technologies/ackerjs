# AckerJS Quick Reference

## Installation
```bash
npm install ackerjs
```

## Import
```typescript
import { DOM, HTTP, Format } from 'ackerjs';
```

---

## DOM Module

### Selection
```typescript
DOM.select('#id')              // Get single element
DOM.selectAll('.class')        // Get multiple elements
```

### Creation
```typescript
DOM.create('div', {            // Create element with props
  className: 'container',
  textContent: 'Hello'
})
```

### Manipulation
```typescript
DOM.append(parent, child)      // Append child
DOM.remove(element)            // Remove element
DOM.empty(element)             // Clear children
DOM.clone(element)             // Clone element
```

### Classes
```typescript
DOM.addClass(el, 'active')     // Add class
DOM.removeClass(el, 'active')  // Remove class
DOM.toggleClass(el, 'active')  // Toggle class
DOM.hasClass(el, 'active')     // Check class
```

### Events
```typescript
DOM.on(el, 'click', handler)   // Add listener
DOM.off(el, 'click', handler)  // Remove listener
```

### Attributes
```typescript
DOM.setAttributes(el, {...})   // Set attributes
DOM.getAttribute(el, 'id')     // Get attribute
DOM.removeAttribute(el, 'id')  // Remove attribute
```

### Styles
```typescript
DOM.setStyles(el, {...})       // Set styles
DOM.getStyles(el)              // Get computed styles
```

---

## HTTP Module

### Requests
```typescript
HTTP.get(url)                  // GET request
HTTP.post(url, data)           // POST request
HTTP.put(url, data)            // PUT request
HTTP.patch(url, data)          // PATCH request
HTTP.del(url)                  // DELETE request
```

### JSON Methods
```typescript
HTTP.fetchJSON(url)            // Fetch JSON
HTTP.postJSON(url, data)       // POST JSON
HTTP.putJSON(url, data)        // PUT JSON
HTTP.patchJSON(url, data)      // PATCH JSON
HTTP.deleteJSON(url)           // DELETE JSON
```

### Typed Requests
```typescript
const user = await HTTP.fetchJSON<User>(url);
```

### Utilities
```typescript
HTTP.buildURL(base, params)    // Build URL with params
HTTP.parseURL(url)             // Parse query params
HTTP.createFetch(base, opts)   // Create API client
```

---

## Format Module

### Dates
```typescript
Format.formatDate(date)        // "11/16/2025"
Format.formatDateTime(date)    // "11/16/2025, 2:30 PM"
Format.formatTime(date)        // "2:30:00 PM"
Format.formatRelativeTime(d)   // "2 hours ago"
```

### Numbers
```typescript
Format.formatNumber(num, 2)    // "1,234.56"
Format.formatCurrency(num)     // "$1,234.56"
Format.formatPercent(0.75)     // "75%"
Format.formatBytes(bytes)      // "1.00 MB"
```

### Strings
```typescript
Format.capitalize(str)         // "Hello"
Format.capitalizeWords(str)    // "Hello World"
Format.truncate(str, 10)       // "Hello..."
Format.uppercase(str)          // "HELLO"
Format.lowercase(str)          // "hello"
Format.trim(str)               // Remove whitespace
Format.pad(str, len, char)     // Pad string
```

### Case Conversion
```typescript
Format.camelCase(str)          // "helloWorld"
Format.pascalCase(str)         // "HelloWorld"
Format.kebabCase(str)          // "hello-world"
Format.snakeCase(str)          // "hello_world"
Format.slugify(str)            // "hello-world"
```

### Validation
```typescript
Format.isEmail(str)            // true/false
Format.isURL(str)              // true/false
```

### Utilities
```typescript
Format.escapeHTML(str)         // Escape HTML
Format.unescapeHTML(str)       // Unescape HTML
Format.randomString(10)        // Random string
Format.numbersOnly(str)        // "123456"
Format.lettersOnly(str)        // "abcdef"
Format.alphanumericOnly(str)   // "abc123"
Format.reverse(str)            // Reverse string
Format.wordCount(str)          // Count words
```

---

## Error Handling

```typescript
try {
  const data = await HTTP.fetchJSON('/api/data');
  // Use data
} catch (error) {
  if (error instanceof HTTP.HTTPError) {
    console.error(error.status, error.message);
  }
}
```

---

## TypeScript Support

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// Typed responses
const user = await HTTP.fetchJSON<User>('/api/user');
user.name; // string (typed)

// Typed elements
const input = DOM.select('input'); // HTMLElement | null
```

---

## Tree-Shaking

```typescript
// Import only what you need
import { select, create } from 'ackerjs/dom';
import { fetchJSON } from 'ackerjs/http';
import { formatDate } from 'ackerjs/format';
```

---

## Complete Example

```typescript
import { DOM, HTTP, Format } from 'ackerjs';

async function loadUsers() {
  const container = DOM.select('#users');
  if (!container) return;

  try {
    const users = await HTTP.fetchJSON('/api/users');
    DOM.empty(container);

    users.forEach(user => {
      const card = DOM.create('div', {
        className: 'user-card'
      });

      const name = DOM.create('h3', {
        textContent: Format.capitalize(user.name)
      });

      DOM.append(card, name);
      DOM.append(container, card);
    });
  } catch (error) {
    console.error('Failed to load users:', error);
  }
}
```

---

## Resources

- 📖 Full Docs: `README.md`
- 🚀 Getting Started: `examples/GETTING_STARTED.md`
- 💡 Examples: `examples/usage.ts`
- 🎮 Demo: `example.html`
- 📝 Changelog: `CHANGELOG.md`

---

**AckerJS** - Lightweight, Modular, TypeScript-First 🚀
