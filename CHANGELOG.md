# Changelog

All notable changes to the AckerJS project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-16

### Added

#### DOM Module
- `select()` - Select single DOM element by CSS selector
- `selectAll()` - Select multiple DOM elements by CSS selector
- `create()` - Create DOM elements with properties
- `append()` - Append child elements
- `remove()` - Remove elements from DOM
- `addClass()` - Add CSS classes
- `removeClass()` - Remove CSS classes
- `toggleClass()` - Toggle CSS classes
- `hasClass()` - Check if element has class
- `on()` - Add event listeners
- `off()` - Remove event listeners
- `setAttributes()` - Set multiple attributes
- `getAttribute()` - Get attribute value
- `removeAttribute()` - Remove attribute
- `setStyles()` - Set inline styles
- `getStyles()` - Get computed styles
- `empty()` - Clear element children
- `clone()` - Clone elements
- `matches()` - Check if element matches selector
- `closest()` - Find closest ancestor matching selector

#### HTTP Module
- `fetchJSON()` - Fetch JSON with error handling
- `postJSON()` - POST request with JSON
- `putJSON()` - PUT request with JSON
- `patchJSON()` - PATCH request with JSON
- `deleteJSON()` - DELETE request
- `get()` - Generic GET wrapper
- `post()` - Generic POST wrapper
- `put()` - Generic PUT wrapper
- `patch()` - Generic PATCH wrapper
- `del()` - Generic DELETE wrapper
- `createFetch()` - Create configured fetch client
- `buildURL()` - Build URLs with query parameters
- `parseURL()` - Parse query parameters from URL
- `HTTPError` - Custom error class for HTTP errors

#### Format Module

**Date Formatting:**
- `formatDate()` - Format dates by locale
- `formatDateTime()` - Format date and time
- `formatTime()` - Format time only
- `formatDateCustom()` - Custom date formatting
- `formatRelativeTime()` - Relative time formatting (e.g., "2 hours ago")

**String Formatting:**
- `capitalize()` - Capitalize first letter
- `capitalizeWords()` - Capitalize each word
- `uppercase()` - Convert to uppercase
- `lowercase()` - Convert to lowercase
- `truncate()` - Truncate strings with suffix
- `trim()` - Trim whitespace
- `pad()` - Pad strings to length
- `reverse()` - Reverse string
- `wordCount()` - Count words in string

**Number Formatting:**
- `formatNumber()` - Format numbers with locale
- `formatCurrency()` - Format as currency
- `formatPercent()` - Format as percentage
- `formatBytes()` - Format bytes to human-readable size

**Case Conversion:**
- `camelCase()` - Convert to camelCase
- `pascalCase()` - Convert to PascalCase
- `kebabCase()` - Convert to kebab-case
- `snakeCase()` - Convert to snake_case
- `slugify()` - Create URL-friendly slugs

**String Utilities:**
- `escapeHTML()` - Escape HTML characters
- `unescapeHTML()` - Unescape HTML characters
- `randomString()` - Generate random strings
- `isEmail()` - Validate email format
- `isURL()` - Validate URL format
- `numbersOnly()` - Extract only numbers
- `lettersOnly()` - Extract only letters
- `alphanumericOnly()` - Extract only alphanumeric characters

#### Core Features
- Full TypeScript support with type declarations
- Zero dependencies (except TypeScript for development)
- Tree-shakable ES modules
- Comprehensive JSDoc documentation
- Clear error messages with namespace prefixes
- Modular architecture for optimal bundle size

### Package Configuration
- ES2020 target for modern browsers
- Source maps for debugging
- Declaration maps for IDE support
- NPM package with proper exports configuration
- MIT License

### Documentation
- Comprehensive README with API reference
- Getting Started guide
- Usage examples
- Interactive HTML example
- Full JSDoc comments on all functions

---

## Future Releases

### Planned for 1.1.0
- Plugin system for extensibility
- Additional validation utilities
- Performance optimizations
- Browser compatibility matrix

### Planned for 2.0.0
- Web Components utilities
- State management helpers
- Router module
- Enhanced TypeScript types with branded types

---

[1.0.0]: https://github.com/acker-technologies/ackerjs/releases/tag/v1.0.0
