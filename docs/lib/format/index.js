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
export function formatDate(date, locale) {
    try {
        return date.toLocaleDateString(locale);
    }
    catch (error) {
        console.error('[AckerJS Format] Error formatting date:', error);
        return date.toString();
    }
}
/**
 * Format a date and time using the browser's locale or a specified locale
 * @param date - Date object to format
 * @param locale - Optional locale string
 * @returns Formatted date and time string
 * @example
 * formatDateTime(new Date()); // "11/16/2025, 2:30:00 PM"
 */
export function formatDateTime(date, locale) {
    try {
        return date.toLocaleString(locale);
    }
    catch (error) {
        console.error('[AckerJS Format] Error formatting date time:', error);
        return date.toString();
    }
}
/**
 * Format just the time portion of a date
 * @param date - Date object to format
 * @param locale - Optional locale string
 * @returns Formatted time string
 * @example
 * formatTime(new Date()); // "2:30:00 PM"
 */
export function formatTime(date, locale) {
    try {
        return date.toLocaleTimeString(locale);
    }
    catch (error) {
        console.error('[AckerJS Format] Error formatting time:', error);
        return date.toString();
    }
}
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
export function formatDateCustom(date, options, locale) {
    try {
        return new Intl.DateTimeFormat(locale, options).format(date);
    }
    catch (error) {
        console.error('[AckerJS Format] Error formatting date with custom options:', error);
        return date.toString();
    }
}
/**
 * Format a relative time (e.g., "2 hours ago", "in 3 days")
 * @param date - Date object to format
 * @param locale - Optional locale string
 * @returns Relative time string
 * @example
 * formatRelativeTime(new Date(Date.now() - 3600000)); // "1 hour ago"
 */
export function formatRelativeTime(date, locale) {
    try {
        const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
        const now = Date.now();
        const diff = date.getTime() - now;
        const diffInSeconds = Math.round(diff / 1000);
        const diffInMinutes = Math.round(diffInSeconds / 60);
        const diffInHours = Math.round(diffInMinutes / 60);
        const diffInDays = Math.round(diffInHours / 24);
        const diffInMonths = Math.round(diffInDays / 30);
        const diffInYears = Math.round(diffInDays / 365);
        if (Math.abs(diffInYears) >= 1) {
            return rtf.format(diffInYears, 'year');
        }
        else if (Math.abs(diffInMonths) >= 1) {
            return rtf.format(diffInMonths, 'month');
        }
        else if (Math.abs(diffInDays) >= 1) {
            return rtf.format(diffInDays, 'day');
        }
        else if (Math.abs(diffInHours) >= 1) {
            return rtf.format(diffInHours, 'hour');
        }
        else if (Math.abs(diffInMinutes) >= 1) {
            return rtf.format(diffInMinutes, 'minute');
        }
        else {
            return rtf.format(diffInSeconds, 'second');
        }
    }
    catch (error) {
        console.error('[AckerJS Format] Error formatting relative time:', error);
        return date.toString();
    }
}
/**
 * Capitalize the first letter of a string
 * @param str - String to capitalize
 * @returns Capitalized string
 * @example
 * capitalize('hello world'); // "Hello world"
 */
export function capitalize(str) {
    if (!str)
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Capitalize the first letter of each word
 * @param str - String to capitalize
 * @returns String with each word capitalized
 * @example
 * capitalizeWords('hello world'); // "Hello World"
 */
export function capitalizeWords(str) {
    if (!str)
        return '';
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
/**
 * Convert a string to uppercase
 * @param str - String to convert
 * @returns Uppercase string
 * @example
 * uppercase('hello'); // "HELLO"
 */
export function uppercase(str) {
    return str.toUpperCase();
}
/**
 * Convert a string to lowercase
 * @param str - String to convert
 * @returns Lowercase string
 * @example
 * lowercase('HELLO'); // "hello"
 */
export function lowercase(str) {
    return str.toLowerCase();
}
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
export function truncate(str, length, suffix = '...') {
    if (!str || str.length <= length)
        return str;
    return str.slice(0, length) + suffix;
}
/**
 * Trim whitespace from both ends of a string
 * @param str - String to trim
 * @returns Trimmed string
 * @example
 * trim('  hello  '); // "hello"
 */
export function trim(str) {
    return str.trim();
}
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
export function pad(str, length, char = ' ', start = true) {
    const padLength = Math.max(0, length - str.length);
    const padding = char.repeat(padLength);
    return start ? padding + str : str + padding;
}
/**
 * Format a number with optional decimal places and locale
 * @param num - Number to format
 * @param decimals - Optional number of decimal places
 * @param locale - Optional locale string
 * @returns Formatted number string
 * @example
 * formatNumber(1234.5678, 2); // "1,234.57"
 */
export function formatNumber(num, decimals, locale) {
    try {
        const options = {};
        if (decimals !== undefined) {
            options.minimumFractionDigits = decimals;
            options.maximumFractionDigits = decimals;
        }
        return new Intl.NumberFormat(locale, options).format(num);
    }
    catch (error) {
        console.error('[AckerJS Format] Error formatting number:', error);
        return num.toString();
    }
}
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
export function formatCurrency(amount, currency = 'USD', locale) {
    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
        }).format(amount);
    }
    catch (error) {
        console.error('[AckerJS Format] Error formatting currency:', error);
        return amount.toString();
    }
}
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
export function formatPercent(value, decimals = 0, normalize = false, locale) {
    try {
        const normalizedValue = normalize ? value : value / 100;
        return new Intl.NumberFormat(locale, {
            style: 'percent',
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        }).format(normalizedValue);
    }
    catch (error) {
        console.error('[AckerJS Format] Error formatting percent:', error);
        return value.toString();
    }
}
/**
 * Format bytes to human-readable file size
 * @param bytes - Number of bytes
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted file size string
 * @example
 * formatBytes(1024); // "1.00 KB"
 * formatBytes(1048576); // "1.00 MB"
 */
export function formatBytes(bytes, decimals = 2) {
    if (bytes === 0)
        return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
}
/**
 * Convert a string to a URL-friendly slug
 * @param str - String to slugify
 * @returns Slugified string
 * @example
 * slugify('Hello World!'); // "hello-world"
 * slugify('This is a Test 123'); // "this-is-a-test-123"
 */
export function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
/**
 * Convert a string to camelCase
 * @param str - String to convert
 * @returns camelCase string
 * @example
 * camelCase('hello-world'); // "helloWorld"
 * camelCase('Hello World'); // "helloWorld"
 */
export function camelCase(str) {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
}
/**
 * Convert a string to PascalCase
 * @param str - String to convert
 * @returns PascalCase string
 * @example
 * pascalCase('hello-world'); // "HelloWorld"
 * pascalCase('hello world'); // "HelloWorld"
 */
export function pascalCase(str) {
    const camel = camelCase(str);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
}
/**
 * Convert a string to kebab-case
 * @param str - String to convert
 * @returns kebab-case string
 * @example
 * kebabCase('helloWorld'); // "hello-world"
 * kebabCase('HelloWorld'); // "hello-world"
 */
export function kebabCase(str) {
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}
/**
 * Convert a string to snake_case
 * @param str - String to convert
 * @returns snake_case string
 * @example
 * snakeCase('helloWorld'); // "hello_world"
 * snakeCase('HelloWorld'); // "hello_world"
 */
export function snakeCase(str) {
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
        .replace(/[\s-]+/g, '_')
        .toLowerCase();
}
/**
 * Reverse a string
 * @param str - String to reverse
 * @returns Reversed string
 * @example
 * reverse('hello'); // "olleh"
 */
export function reverse(str) {
    return str.split('').reverse().join('');
}
/**
 * Count the number of words in a string
 * @param str - String to count words in
 * @returns Number of words
 * @example
 * wordCount('Hello world'); // 2
 */
export function wordCount(str) {
    return str.trim().split(/\s+/).filter(Boolean).length;
}
/**
 * Escape HTML special characters
 * @param str - String to escape
 * @returns Escaped string
 * @example
 * escapeHTML('<div>Test</div>'); // "&lt;div&gt;Test&lt;/div&gt;"
 */
export function escapeHTML(str) {
    const htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    };
    return str.replace(/[&<>"']/g, char => htmlEscapes[char]);
}
/**
 * Unescape HTML special characters
 * @param str - String to unescape
 * @returns Unescaped string
 * @example
 * unescapeHTML('&lt;div&gt;Test&lt;/div&gt;'); // "<div>Test</div>"
 */
export function unescapeHTML(str) {
    const htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
    };
    return str.replace(/&(?:amp|lt|gt|quot|#39);/g, entity => htmlUnescapes[entity]);
}
/**
 * Generate a random string of specified length
 * @param length - Length of the string to generate
 * @param chars - Characters to use (default: alphanumeric)
 * @returns Random string
 * @example
 * randomString(10); // "aB3xY7qM2z"
 */
export function randomString(length, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
/**
 * Check if a string is a valid email address
 * @param email - String to validate
 * @returns True if valid email format
 * @example
 * isEmail('test@example.com'); // true
 * isEmail('invalid-email'); // false
 */
export function isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
/**
 * Check if a string is a valid URL
 * @param url - String to validate
 * @returns True if valid URL format
 * @example
 * isURL('https://example.com'); // true
 * isURL('not a url'); // false
 */
export function isURL(url) {
    try {
        new URL(url);
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Remove all non-numeric characters from a string
 * @param str - String to clean
 * @returns String with only numeric characters
 * @example
 * numbersOnly('abc123def456'); // "123456"
 */
export function numbersOnly(str) {
    return str.replace(/\D/g, '');
}
/**
 * Remove all non-alphabetic characters from a string
 * @param str - String to clean
 * @returns String with only alphabetic characters
 * @example
 * lettersOnly('abc123def456'); // "abcdef"
 */
export function lettersOnly(str) {
    return str.replace(/[^a-zA-Z]/g, '');
}
/**
 * Remove all non-alphanumeric characters from a string
 * @param str - String to clean
 * @returns String with only alphanumeric characters
 * @example
 * alphanumericOnly('abc-123_def!456'); // "abc123def456"
 */
export function alphanumericOnly(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}
//# sourceMappingURL=index.js.map