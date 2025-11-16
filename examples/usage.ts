/**
 * AckerJS Usage Examples
 * 
 * This file demonstrates various ways to use AckerJS in your projects.
 * 
 * Import methods (choose one):
 * 
 * // Method 1: Import all modules
 * import { DOM, HTTP, Format } from 'ackerjs';
 * 
 * // Method 2: Import specific modules for better tree-shaking
 * import * as DOM from 'ackerjs/dom';
 * import * as HTTP from 'ackerjs/http';
 * import * as Format from 'ackerjs/format';
 * 
 * // Method 3: Import specific functions
 * import { select, create, append, fetchJSON, postJSON, formatDate, capitalize } from 'ackerjs';
 */

// For this example, we use Method 1
import { DOM, HTTP, Format } from 'ackerjs';


// ============================================================================
// DOM EXAMPLES
// ============================================================================

// Select elements
const appElement = DOM.select('#app');
const menuItems = DOM.selectAll('.menu-item');

// Create elements with properties
const container = DOM.create('div', {
  className: 'container',
  id: 'main-container',
  style: { padding: '20px', margin: '0 auto' },
  dataset: { theme: 'dark', version: '1.0' }
});

// Create a button with event listener
const button = DOM.create('button', {
  textContent: 'Click me!',
  className: 'btn btn-primary',
  onclick: () => console.log('Button clicked!')
});

// Append elements
DOM.append(container, button);
DOM.append(appElement, container);

// Manipulate classes
DOM.addClass(button, 'active', 'highlighted');
DOM.removeClass(button, 'highlighted');
DOM.toggleClass(button, 'active');

// Check if element has class
if (DOM.hasClass(button, 'active')) {
  console.log('Button is active');
}

// Event handling
const handleClick = (e) => {
  console.log('Clicked!', e);
};
DOM.on(button, 'click', handleClick);
DOM.off(button, 'click', handleClick); // Remove listener

// Attributes
DOM.setAttributes(button, {
  'aria-label': 'Submit',
  'data-action': 'submit'
});
const action = DOM.getAttribute(button, 'data-action');

// Styles
DOM.setStyles(button, {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px'
});

// Other DOM utilities
DOM.empty(container); // Remove all children
const cloned = DOM.clone(button); // Clone element
const closest = DOM.closest(button, '.container'); // Find ancestor


// ============================================================================
// HTTP EXAMPLES
// ============================================================================

// Simple GET request
async function fetchUserData() {
  try {
    const user = await HTTP.fetchJSON('https://api.example.com/user/1');
    console.log(user);
  } catch (error) {
    console.error('Failed to fetch user:', error);
  }
}

// POST request
async function createUser() {
  try {
    const newUser = await HTTP.postJSON('https://api.example.com/users', {
      name: 'John Doe',
      email: 'john@example.com',
      age: 30
    });
    console.log('Created user:', newUser);
  } catch (error) {
    console.error('Failed to create user:', error);
  }
}

// PUT request
async function updateUser(id) {
  try {
    const updated = await HTTP.putJSON(`https://api.example.com/users/${id}`, {
      name: 'Jane Doe',
      email: 'jane@example.com'
    });
    console.log('Updated user:', updated);
  } catch (error) {
    console.error('Failed to update user:', error);
  }
}

// DELETE request
async function deleteUser(id) {
  try {
    await HTTP.deleteJSON(`https://api.example.com/users/${id}`);
    console.log('User deleted');
  } catch (error) {
    console.error('Failed to delete user:', error);
  }
}

// Using typed responses
interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchTypedUser(id: number): Promise<User> {
  return await HTTP.fetchJSON<User>(`https://api.example.com/users/${id}`);
}

// Create a configured API client
const api = HTTP.createFetch('https://api.example.com', {
  headers: {
    'Authorization': 'Bearer your-token-here',
    'X-App-Version': '1.0.0'
  }
});

// Use the configured client
async function useConfiguredAPI() {
  const users = await api.get('/users');
  const newUser = await api.post('/users', { name: 'Alice' });
  const updated = await api.put('/users/1', { name: 'Alice Smith' });
  await api.delete('/users/1');
}

// Build URLs with query parameters
const searchURL = HTTP.buildURL('https://api.example.com/search', {
  q: 'javascript',
  limit: 10,
  sort: 'date'
});
// Result: https://api.example.com/search?q=javascript&limit=10&sort=date

// Parse URL parameters
const params = HTTP.parseURL('https://example.com?page=1&size=20');
// Result: { page: '1', size: '20' }


// ============================================================================
// FORMAT EXAMPLES
// ============================================================================

// Date formatting
const now = new Date();
console.log(Format.formatDate(now)); // "11/16/2025"
console.log(Format.formatDateTime(now)); // "11/16/2025, 2:30:00 PM"
console.log(Format.formatTime(now)); // "2:30:00 PM"

// Custom date formatting
const customDate = Format.formatDateCustom(now, {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
// Result: "Saturday, November 16, 2025"

// Relative time
const yesterday = new Date(Date.now() - 86400000);
console.log(Format.formatRelativeTime(yesterday)); // "yesterday"

// String formatting
console.log(Format.capitalize('hello world')); // "Hello world"
console.log(Format.capitalizeWords('hello world')); // "Hello World"
console.log(Format.truncate('This is a long text', 10)); // "This is a..."
console.log(Format.uppercase('hello')); // "HELLO"
console.log(Format.lowercase('HELLO')); // "hello"

// Number formatting
console.log(Format.formatNumber(1234567.89, 2)); // "1,234,567.89"
console.log(Format.formatCurrency(1234.56)); // "$1,234.56"
console.log(Format.formatCurrency(1234.56, 'EUR', 'de-DE')); // "1.234,56 €"
console.log(Format.formatPercent(0.75, 2, true)); // "75.00%"
console.log(Format.formatBytes(1048576)); // "1.00 MB"

// Case conversion
console.log(Format.camelCase('hello-world')); // "helloWorld"
console.log(Format.pascalCase('hello-world')); // "HelloWorld"
console.log(Format.kebabCase('helloWorld')); // "hello-world"
console.log(Format.snakeCase('helloWorld')); // "hello_world"
console.log(Format.slugify('Hello World!')); // "hello-world"

// String utilities
console.log(Format.pad('5', 3, '0')); // "005"
console.log(Format.reverse('hello')); // "olleh"
console.log(Format.wordCount('Hello world from AckerJS')); // 4

// HTML escaping
console.log(Format.escapeHTML('<div>Test</div>')); // "&lt;div&gt;Test&lt;/div&gt;"
console.log(Format.unescapeHTML('&lt;div&gt;Test&lt;/div&gt;')); // "<div>Test</div>"

// Validation
console.log(Format.isEmail('test@example.com')); // true
console.log(Format.isURL('https://example.com')); // true

// String cleaning
console.log(Format.numbersOnly('abc123def456')); // "123456"
console.log(Format.lettersOnly('abc123def456')); // "abcdef"
console.log(Format.alphanumericOnly('abc-123_def')); // "abc123def"

// Random string generation
const randomId = Format.randomString(10);
console.log(randomId); // e.g., "aB3xY7qM2z"


// ============================================================================
// PRACTICAL EXAMPLES
// ============================================================================

// Example 1: Build a simple form handler
async function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = DOM.closest(event.target, 'form');
  const submitBtn = DOM.select('button[type="submit"]', form);
  
  // Disable button during submission
  DOM.setAttributes(submitBtn, { disabled: 'true' });
  submitBtn.textContent = 'Submitting...';
  
  try {
    const formData = {
      name: Format.trim(form.name.value),
      email: Format.lowercase(Format.trim(form.email.value))
    };
    
    // Validate
    if (!Format.isEmail(formData.email)) {
      throw new Error('Invalid email address');
    }
    
    // Submit
    const response = await HTTP.postJSON('/api/submit', formData);
    
    // Show success message
    const message = DOM.create('div', {
      className: 'alert alert-success',
      textContent: 'Form submitted successfully!'
    });
    DOM.append(form.parentElement, message);
    
  } catch (error) {
    console.error('Form submission failed:', error);
    alert('Submission failed: ' + error.message);
  } finally {
    // Re-enable button
    DOM.removeAttribute(submitBtn, 'disabled');
    submitBtn.textContent = 'Submit';
  }
}

// Example 2: Build a dynamic list with filtering
async function buildUserList() {
  const container = DOM.select('#user-list');
  DOM.empty(container);
  
  try {
    const users = await HTTP.fetchJSON<User[]>('/api/users');
    
    users.forEach(user => {
      const userCard = DOM.create('div', {
        className: 'user-card',
        dataset: { userId: user.id.toString() }
      });
      
      const name = DOM.create('h3', {
        textContent: Format.capitalizeWords(user.name)
      });
      
      const email = DOM.create('p', {
        textContent: Format.lowercase(user.email),
        className: 'email'
      });
      
      DOM.append(userCard, name);
      DOM.append(userCard, email);
      DOM.append(container, userCard);
    });
  } catch (error) {
    console.error('Failed to load users:', error);
  }
}

// Example 3: Format and display data
function displayStats(data: any) {
  const statsContainer = DOM.select('#stats');
  DOM.empty(statsContainer);
  
  const stats = [
    {
      label: 'Total Users',
      value: Format.formatNumber(data.totalUsers)
    },
    {
      label: 'Revenue',
      value: Format.formatCurrency(data.revenue)
    },
    {
      label: 'Storage Used',
      value: Format.formatBytes(data.storageBytes)
    },
    {
      label: 'Last Updated',
      value: Format.formatRelativeTime(new Date(data.lastUpdated))
    }
  ];
  
  stats.forEach(stat => {
    const statCard = DOM.create('div', {
      className: 'stat-card'
    });
    
    const label = DOM.create('div', {
      className: 'stat-label',
      textContent: stat.label
    });
    
    const value = DOM.create('div', {
      className: 'stat-value',
      textContent: stat.value
    });
    
    DOM.append(statCard, label);
    DOM.append(statCard, value);
    DOM.append(statsContainer, statCard);
  });
}

export { fetchUserData, createUser, buildUserList, displayStats };
