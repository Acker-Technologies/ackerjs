/**
 * HTTP Utilities
 * Provides fetch wrappers with built-in error handling and JSON parsing
 */
/**
 * Custom HTTP error class
 */
export class HTTPError extends Error {
    constructor(message, status, statusText, url) {
        super(message);
        this.status = status;
        this.statusText = statusText;
        this.url = url;
        this.name = 'HTTPError';
    }
}
/**
 * Default error handler for HTTP requests
 * @param response - Fetch Response object
 * @throws HTTPError if response is not ok
 */
async function handleResponse(response) {
    if (!response.ok) {
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        try {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const errorData = await response.json();
                errorMessage = errorData.message || errorData.error || errorMessage;
            }
            else {
                const errorText = await response.text();
                if (errorText) {
                    errorMessage = errorText;
                }
            }
        }
        catch {
            // Use default error message if parsing fails
        }
        throw new HTTPError(errorMessage, response.status, response.statusText, response.url);
    }
}
/**
 * Fetch JSON data from a URL with automatic error handling
 * @param url - URL to fetch from
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON data
 * @throws HTTPError if request fails
 * @example
 * const data = await fetchJSON<User>('https://api.example.com/user/1');
 */
export async function fetchJSON(url, options) {
    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
        });
        await handleResponse(response);
        // Handle 204 No Content
        if (response.status === 204) {
            return undefined;
        }
        return await response.json();
    }
    catch (error) {
        if (error instanceof HTTPError) {
            throw error;
        }
        console.error('[AckerJS HTTP] Fetch error:', error);
        throw new Error(`Failed to fetch from ${url}: ${error.message}`);
    }
}
/**
 * Send a POST request with JSON data
 * @param url - URL to post to
 * @param data - Data to send (will be JSON stringified)
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON response
 * @throws HTTPError if request fails
 * @example
 * const result = await postJSON('/api/users', { name: 'John', email: 'john@example.com' });
 */
export async function postJSON(url, data, options) {
    return fetchJSON(url, {
        ...options,
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    });
}
/**
 * Send a PUT request with JSON data
 * @param url - URL to put to
 * @param data - Data to send (will be JSON stringified)
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON response
 * @throws HTTPError if request fails
 * @example
 * const updated = await putJSON('/api/users/1', { name: 'Jane Doe' });
 */
export async function putJSON(url, data, options) {
    return fetchJSON(url, {
        ...options,
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    });
}
/**
 * Send a PATCH request with JSON data
 * @param url - URL to patch
 * @param data - Data to send (will be JSON stringified)
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON response
 * @throws HTTPError if request fails
 * @example
 * const updated = await patchJSON('/api/users/1', { email: 'newemail@example.com' });
 */
export async function patchJSON(url, data, options) {
    return fetchJSON(url, {
        ...options,
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    });
}
/**
 * Send a DELETE request
 * @param url - URL to delete
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON response
 * @throws HTTPError if request fails
 * @example
 * await deleteJSON('/api/users/1');
 */
export async function deleteJSON(url, options) {
    return fetchJSON(url, {
        ...options,
        method: 'DELETE',
    });
}
/**
 * Generic GET request wrapper (alias for fetchJSON)
 * @param url - URL to fetch from
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON data
 * @throws HTTPError if request fails
 * @example
 * const data = await get<MyType>('https://api.example.com/data');
 */
export async function get(url, options) {
    return fetchJSON(url, { ...options, method: 'GET' });
}
/**
 * Generic POST request wrapper (alias for postJSON)
 * @param url - URL to post to
 * @param data - Data to send
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON response
 * @example
 * const result = await post('/api/data', { key: 'value' });
 */
export async function post(url, data, options) {
    return postJSON(url, data, options);
}
/**
 * Generic PUT request wrapper (alias for putJSON)
 * @param url - URL to put to
 * @param data - Data to send
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON response
 * @example
 * const result = await put('/api/data/1', { key: 'value' });
 */
export async function put(url, data, options) {
    return putJSON(url, data, options);
}
/**
 * Generic PATCH request wrapper (alias for patchJSON)
 * @param url - URL to patch
 * @param data - Data to send
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON response
 * @example
 * const result = await patch('/api/data/1', { key: 'newValue' });
 */
export async function patch(url, data, options) {
    return patchJSON(url, data, options);
}
/**
 * Generic DELETE request wrapper (alias for deleteJSON)
 * @param url - URL to delete
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON response
 * @example
 * await del('/api/data/1');
 */
export async function del(url, options) {
    return deleteJSON(url, options);
}
/**
 * Create a configured fetch function with default options
 * @param baseURL - Base URL to prepend to all requests
 * @param defaultOptions - Default fetch options to merge with each request
 * @returns Configured fetch function
 * @example
 * const api = createFetch('https://api.example.com', {
 *   headers: { 'Authorization': 'Bearer token' }
 * });
 * const data = await api.get('/users');
 */
export function createFetch(baseURL, defaultOptions) {
    const mergeURL = (url) => {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        const base = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;
        const path = url.startsWith('/') ? url : `/${url}`;
        return `${base}${path}`;
    };
    const mergeOptions = (options) => ({
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultOptions?.headers,
            ...options?.headers,
        },
    });
    return {
        get: (url, options) => get(mergeURL(url), mergeOptions(options)),
        post: (url, data, options) => post(mergeURL(url), data, mergeOptions(options)),
        put: (url, data, options) => put(mergeURL(url), data, mergeOptions(options)),
        patch: (url, data, options) => patch(mergeURL(url), data, mergeOptions(options)),
        delete: (url, options) => del(mergeURL(url), mergeOptions(options)),
        fetchJSON: (url, options) => fetchJSON(mergeURL(url), mergeOptions(options)),
    };
}
/**
 * Build a URL with query parameters
 * @param baseURL - Base URL
 * @param params - Object containing query parameters
 * @returns URL string with encoded query parameters
 * @example
 * const url = buildURL('https://api.example.com/search', { q: 'test', limit: 10 });
 * // Returns: 'https://api.example.com/search?q=test&limit=10'
 */
export function buildURL(baseURL, params) {
    const url = new URL(baseURL);
    Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            if (Array.isArray(value)) {
                value.forEach(v => url.searchParams.append(key, String(v)));
            }
            else {
                url.searchParams.append(key, String(value));
            }
        }
    });
    return url.toString();
}
/**
 * Parse query parameters from a URL string
 * @param url - URL string to parse
 * @returns Object containing parsed query parameters
 * @example
 * const params = parseURL('https://api.example.com/search?q=test&limit=10');
 * // Returns: { q: 'test', limit: '10' }
 */
export function parseURL(url) {
    try {
        const urlObj = new URL(url);
        const params = {};
        urlObj.searchParams.forEach((value, key) => {
            params[key] = value;
        });
        return params;
    }
    catch (error) {
        console.error('[AckerJS HTTP] Invalid URL for parsing:', url);
        return {};
    }
}
//# sourceMappingURL=index.js.map