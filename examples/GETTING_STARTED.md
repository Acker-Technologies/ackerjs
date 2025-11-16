# Getting Started with AckerJS

This guide will help you get started with AckerJS in just a few minutes.

## Installation

```bash
npm install ackerjs
```

## Quick Start

### 1. Import AckerJS

You can import AckerJS in several ways depending on your needs:

```typescript
// Option 1: Import all modules
import { DOM, HTTP, Format } from 'ackerjs';

// Option 2: Import specific modules (better for tree-shaking)
import * as DOM from 'ackerjs/dom';
import * as HTTP from 'ackerjs/http';
import * as Format from 'ackerjs/format';

// Option 3: Import specific functions
import { select, create, fetchJSON, formatDate } from 'ackerjs';
```

### 2. DOM Manipulation

```typescript
import { DOM } from 'ackerjs';

// Select elements
const app = DOM.select('#app');
const buttons = DOM.selectAll('.btn');

// Create elements
const container = DOM.create('div', {
  className: 'container',
  textContent: 'Hello, AckerJS!'
});

// Append to DOM
DOM.append(app, container);

// Add event listeners
DOM.on(container, 'click', () => {
  console.log('Container clicked!');
});
```

### 3. HTTP Requests

```typescript
import { HTTP } from 'ackerjs';

// Fetch data
async function loadUsers() {
  try {
    const users = await HTTP.fetchJSON('/api/users');
    console.log(users);
  } catch (error) {
    console.error('Failed to load users:', error);
  }
}

// Post data
async function createUser(userData) {
  const newUser = await HTTP.postJSON('/api/users', userData);
  return newUser;
}

// Using TypeScript types
interface User {
  id: number;
  name: string;
  email: string;
}

const user = await HTTP.fetchJSON<User>('/api/users/1');
```

### 4. Formatting Utilities

```typescript
import { Format } from 'ackerjs';

// Format dates
const date = Format.formatDate(new Date()); // "11/16/2025"
const dateTime = Format.formatDateTime(new Date()); // "11/16/2025, 2:30:00 PM"

// Format numbers
const number = Format.formatNumber(1234567.89, 2); // "1,234,567.89"
const currency = Format.formatCurrency(1234.56); // "$1,234.56"
const bytes = Format.formatBytes(1048576); // "1.00 MB"

// Format strings
const capitalized = Format.capitalize('hello world'); // "Hello world"
const slug = Format.slugify('Hello World!'); // "hello-world"
const camel = Format.camelCase('hello-world'); // "helloWorld"
```

## Complete Example

Here's a complete example that uses all three modules:

```typescript
import { DOM, HTTP, Format } from 'ackerjs';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

async function loadAndDisplayTodos() {
  // Select container
  const container = DOM.select('#todos');
  if (!container) return;

  // Show loading state
  container.innerHTML = 'Loading...';

  try {
    // Fetch todos from API
    const todos = await HTTP.fetchJSON<Todo[]>('/api/todos');

    // Clear container
    DOM.empty(container);

    // Create and append todo items
    todos.forEach(todo => {
      const todoItem = DOM.create('div', {
        className: todo.completed ? 'todo completed' : 'todo',
        dataset: { todoId: todo.id.toString() }
      });

      const title = DOM.create('h3', {
        textContent: Format.capitalize(todo.title)
      });

      const date = DOM.create('span', {
        className: 'date',
        textContent: Format.formatDate(new Date(todo.createdAt))
      });

      const toggleBtn = DOM.create('button', {
        textContent: todo.completed ? 'Undo' : 'Complete',
        onclick: () => toggleTodo(todo.id)
      });

      DOM.append(todoItem, title);
      DOM.append(todoItem, date);
      DOM.append(todoItem, toggleBtn);
      DOM.append(container, todoItem);
    });
  } catch (error) {
    container.innerHTML = 'Failed to load todos';
    console.error(error);
  }
}

async function toggleTodo(id: number) {
  try {
    await HTTP.patchJSON(`/api/todos/${id}`, {
      completed: true
    });
    // Reload todos
    await loadAndDisplayTodos();
  } catch (error) {
    console.error('Failed to toggle todo:', error);
  }
}

// Initialize app
loadAndDisplayTodos();
```

## Next Steps

- Check out the [full API documentation](../README.md)
- Explore the [interactive example](../example.html)
- View more [usage examples](./usage.ts)

## Building for Production

AckerJS is built with tree-shaking in mind. Import only what you need:

```typescript
// Only imports DOM utilities
import { select, create, append } from 'ackerjs/dom';

// Your build tool will only bundle the DOM module
```

This ensures your final bundle is as small as possible.

## TypeScript Support

AckerJS is written in TypeScript and includes full type definitions. Your IDE will provide autocompletion and type checking out of the box.

```typescript
import { DOM } from 'ackerjs';

// TypeScript knows this returns HTMLElement | null
const element = DOM.select('#app');

// Type-safe API responses
interface User {
  id: number;
  name: string;
}

const user = await HTTP.fetchJSON<User>('/api/user/1');
// user.name is typed as string
```
