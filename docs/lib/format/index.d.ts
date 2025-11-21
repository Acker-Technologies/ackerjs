/**
 * Formatting Utilities
 * Provides common helpers for formatting strings, numbers, and dates
 */
/**
 * Format a date using the browser's locale or a specified locale
 * @param date - Date object to format
 * @param locale - Optional locale string (e.g., 'en-US', 'en-GB')
 * @returns Formatted date string
 * @example
 * formatDate(new Date()); // "11/16/2025"
 * formatDate(new Date(), 'en-GB'); // "16/11/2025"
 */
export declare function formatDate(date: Date, locale?: string): string;
/**
 * Format a date and time using the browser's locale or a specified locale
 * @param date - Date object to format
 * @param locale - Optional locale string
 * @returns Formatted date and time string
 * @example
 * formatDateTime(new Date()); // "11/16/2025, 2:30:00 PM"
 */
export declare function formatDateTime(date: Date, locale?: string): string;
/**
 * Format just the time portion of a date
 * @param date - Date object to format
 * @param locale - Optional locale string
 * @returns Formatted time string
 * @example
 * formatTime(new Date()); // "2:30:00 PM"
 */
export declare function formatTime(date: Date, locale?: string): string;
/**
 * Format a date with custom options
 * @param date - Date object to format
 * @param options - Intl.DateTimeFormatOptions
 * @param locale - Optional locale string
 * @returns Formatted date string
 * @example
 * formatDateCustom(new Date(), { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
 * // "Saturday, November 16, 2025"
 */
export declare function formatDateCustom(date: Date, options: Intl.DateTimeFormatOptions, locale?: string): string;
/**
 * Format a relative time (e.g., "2 hours ago", "in 3 days")
 * @param date - Date object to format
 * @param locale - Optional locale string
 * @returns Relative time string
 * @example
 * formatRelativeTime(new Date(Date.now() - 3600000)); // "1 hour ago"
 */
export declare function formatRelativeTime(date: Date, locale?: string): string;
/**
 * Capitalize the first letter of a string
 * @param str - String to capitalize
 * @returns Capitalized string
 * @example
 * capitalize('hello world'); // "Hello world"
 */
export declare function capitalize(str: string): string;
/**
 * Capitalize the first letter of each word
 * @param str - String to capitalize
 * @returns String with each word capitalized
 * @example
 * capitalizeWords('hello world'); // "Hello World"
 */
export declare function capitalizeWords(str: string): string;
/**
 * Convert a string to uppercase
 * @param str - String to convert
 * @returns Uppercase string
 * @example
 * uppercase('hello'); // "HELLO"
 */
export declare function uppercase(str: string): string;
/**
 * Convert a string to lowercase
 * @param str - String to convert
 * @returns Lowercase string
 * @example
 * lowercase('HELLO'); // "hello"
 */
export declare function lowercase(str: string): string;
/**
 * Truncate a string to a specified length
 * @param str - String to truncate
 * @param length - Maximum length
 * @param suffix - Optional suffix to append (default: '...')
 * @returns Truncated string
 * @example
 * truncate('Hello World', 5); // "Hello..."
 * truncate('Hello World', 5, '…'); // "Hello…"
 */
export declare function truncate(str: string, length: number, suffix?: string): string;
/**
 * Trim whitespace from both ends of a string
 * @param str - String to trim
 * @returns Trimmed string
 * @example
 * trim('  hello  '); // "hello"
 */
export declare function trim(str: string): string;
/**
 * Pad a string to a specified length with a character
 * @param str - String to pad
 * @param length - Target length
 * @param char - Character to pad with (default: ' ')
 * @param start - Pad at start if true, end if false (default: true)
 * @returns Padded string
 * @example
 * pad('5', 3, '0'); // "005"
 * pad('5', 3, '0', false); // "500"
 */
export declare function pad(str: string, length: number, char?: string, start?: boolean): string;
/**
 * Format a number with optional decimal places and locale
 * @param num - Number to format
 * @param decimals - Optional number of decimal places
 * @param locale - Optional locale string
 * @returns Formatted number string
 * @example
 * formatNumber(1234.5678, 2); // "1,234.57"
 */
export declare function formatNumber(num: number, decimals?: number, locale?: string): string;
/**
 * Format a number as currency
 * @param amount - Amount to format
 * @param currency - Currency code (default: 'USD')
 * @param locale - Optional locale string
 * @returns Formatted currency string
 * @example
 * formatCurrency(1234.56); // "$1,234.56"
 * formatCurrency(1234.56, 'EUR', 'de-DE'); // "1.234,56 €"
 */
export declare function formatCurrency(amount: number, currency?: string, locale?: string): string;
/**
 * Format a number as a percentage
 * @param value - Value to format (0-1 or 0-100 depending on normalize)
 * @param decimals - Number of decimal places (default: 0)
 * @param normalize - Whether to treat value as 0-1 and multiply by 100 (default: false)
 * @param locale - Optional locale string
 * @returns Formatted percentage string
 * @example
 * formatPercent(0.5, 0, true); // "50%"
 * formatPercent(50, 2); // "50.00%"
 */
export declare function formatPercent(value: number, decimals?: number, normalize?: boolean, locale?: string): string;
/**
 * Format bytes to human-readable file size
 * @param bytes - Number of bytes
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted file size string
 * @example
 * formatBytes(1024); // "1.00 KB"
 * formatBytes(1048576); // "1.00 MB"
 */
export declare function formatBytes(bytes: number, decimals?: number): string;
/**
 * Convert a string to a URL-friendly slug
 * @param str - String to slugify
 * @returns Slugified string
 * @example
 * slugify('Hello World!'); // "hello-world"
 * slugify('This is a Test 123'); // "this-is-a-test-123"
 */
export declare function slugify(str: string): string;
/**
 * Convert a string to camelCase
 * @param str - String to convert
 * @returns camelCase string
 * @example
 * camelCase('hello-world'); // "helloWorld"
 * camelCase('Hello World'); // "helloWorld"
 */
export declare function camelCase(str: string): string;
/**
 * Convert a string to PascalCase
 * @param str - String to convert
 * @returns PascalCase string
 * @example
 * pascalCase('hello-world'); // "HelloWorld"
 * pascalCase('hello world'); // "HelloWorld"
 */
export declare function pascalCase(str: string): string;
/**
 * Convert a string to kebab-case
 * @param str - String to convert
 * @returns kebab-case string
 * @example
 * kebabCase('helloWorld'); // "hello-world"
 * kebabCase('HelloWorld'); // "hello-world"
 */
export declare function kebabCase(str: string): string;
/**
 * Convert a string to snake_case
 * @param str - String to convert
 * @returns snake_case string
 * @example
 * snakeCase('helloWorld'); // "hello_world"
 * snakeCase('HelloWorld'); // "hello_world"
 */
export declare function snakeCase(str: string): string;
/**
 * Reverse a string
 * @param str - String to reverse
 * @returns Reversed string
 * @example
 * reverse('hello'); // "olleh"
 */
export declare function reverse(str: string): string;
/**
 * Count the number of words in a string
 * @param str - String to count words in
 * @returns Number of words
 * @example
 * wordCount('Hello world'); // 2
 */
export declare function wordCount(str: string): number;
/**
 * Escape HTML special characters
 * @param str - String to escape
 * @returns Escaped string
 * @example
 * escapeHTML('<div>Test</div>'); // "&lt;div&gt;Test&lt;/div&gt;"
 */
export declare function escapeHTML(str: string): string;
/**
 * Unescape HTML special characters
 * @param str - String to unescape
 * @returns Unescaped string
 * @example
 * unescapeHTML('&lt;div&gt;Test&lt;/div&gt;'); // "<div>Test</div>"
 */
export declare function unescapeHTML(str: string): string;
/**
 * Generate a random string of specified length
 * @param length - Length of the string to generate
 * @param chars - Characters to use (default: alphanumeric)
 * @returns Random string
 * @example
 * randomString(10); // "aB3xY7qM2z"
 */
export declare function randomString(length: number, chars?: string): string;
/**
 * Check if a string is a valid email address
 * @param email - String to validate
 * @returns True if valid email format
 * @example
 * isEmail('test@example.com'); // true
 * isEmail('invalid-email'); // false
 */
export declare function isEmail(email: string): boolean;
/**
 * Check if a string is a valid URL
 * @param url - String to validate
 * @returns True if valid URL format
 * @example
 * isURL('https://example.com'); // true
 * isURL('not a url'); // false
 */
export declare function isURL(url: string): boolean;
/**
 * Remove all non-numeric characters from a string
 * @param str - String to clean
 * @returns String with only numeric characters
 * @example
 * numbersOnly('abc123def456'); // "123456"
 */
export declare function numbersOnly(str: string): string;
/**
 * Remove all non-alphabetic characters from a string
 * @param str - String to clean
 * @returns String with only alphabetic characters
 * @example
 * lettersOnly('abc123def456'); // "abcdef"
 */
export declare function lettersOnly(str: string): string;
/**
 * Remove all non-alphanumeric characters from a string
 * @param str - String to clean
 * @returns String with only alphanumeric characters
 * @example
 * alphanumericOnly('abc-123_def!456'); // "abc123def456"
 */
export declare function alphanumericOnly(str: string): string;
//# sourceMappingURL=index.d.ts.map