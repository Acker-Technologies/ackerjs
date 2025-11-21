/**
 * HTTP Utilities
 * Provides fetch wrappers with built-in error handling and JSON parsing
 */
/**
 * Custom HTTP error class
 */
export declare class HTTPError extends Error {
    status: number;
    statusText: string;
    url: string;
    constructor(message: string, status: number, statusText: string, url: string);
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
export declare function fetchJSON<T = any>(url: string, options?: RequestInit): Promise<T>;
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
export declare function postJSON<T = any>(url: string, data: any, options?: RequestInit): Promise<T>;
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
export declare function putJSON<T = any>(url: string, data: any, options?: RequestInit): Promise<T>;
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
export declare function patchJSON<T = any>(url: string, data: any, options?: RequestInit): Promise<T>;
/**
 * Send a DELETE request
 * @param url - URL to delete
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON response
 * @throws HTTPError if request fails
 * @example
 * await deleteJSON('/api/users/1');
 */
export declare function deleteJSON<T = any>(url: string, options?: RequestInit): Promise<T>;
/**
 * Generic GET request wrapper (alias for fetchJSON)
 * @param url - URL to fetch from
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON data
 * @throws HTTPError if request fails
 * @example
 * const data = await get<MyType>('https://api.example.com/data');
 */
export declare function get<T = any>(url: string, options?: RequestInit): Promise<T>;
/**
 * Generic POST request wrapper (alias for postJSON)
 * @param url - URL to post to
 * @param data - Data to send
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON response
 * @example
 * const result = await post('/api/data', { key: 'value' });
 */
export declare function post<T = any>(url: string, data: any, options?: RequestInit): Promise<T>;
/**
 * Generic PUT request wrapper (alias for putJSON)
 * @param url - URL to put to
 * @param data - Data to send
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON response
 * @example
 * const result = await put('/api/data/1', { key: 'value' });
 */
export declare function put<T = any>(url: string, data: any, options?: RequestInit): Promise<T>;
/**
 * Generic PATCH request wrapper (alias for patchJSON)
 * @param url - URL to patch
 * @param data - Data to send
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON response
 * @example
 * const result = await patch('/api/data/1', { key: 'newValue' });
 */
export declare function patch<T = any>(url: string, data: any, options?: RequestInit): Promise<T>;
/**
 * Generic DELETE request wrapper (alias for deleteJSON)
 * @param url - URL to delete
 * @param options - Optional fetch options
 * @returns Promise resolving to parsed JSON response
 * @example
 * await del('/api/data/1');
 */
export declare function del<T = any>(url: string, options?: RequestInit): Promise<T>;
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
export declare function createFetch(baseURL: string, defaultOptions?: RequestInit): {
    get: <T = any>(url: string, options?: RequestInit) => Promise<T>;
    post: <T = any>(url: string, data: any, options?: RequestInit) => Promise<T>;
    put: <T = any>(url: string, data: any, options?: RequestInit) => Promise<T>;
    patch: <T = any>(url: string, data: any, options?: RequestInit) => Promise<T>;
    delete: <T = any>(url: string, options?: RequestInit) => Promise<T>;
    fetchJSON: <T = any>(url: string, options?: RequestInit) => Promise<T>;
};
/**
 * Build a URL with query parameters
 * @param baseURL - Base URL
 * @param params - Object containing query parameters
 * @returns URL string with encoded query parameters
 * @example
 * const url = buildURL('https://api.example.com/search', { q: 'test', limit: 10 });
 * // Returns: 'https://api.example.com/search?q=test&limit=10'
 */
export declare function buildURL(baseURL: string, params: Record<string, any>): string;
/**
 * Parse query parameters from a URL string
 * @param url - URL string to parse
 * @returns Object containing parsed query parameters
 * @example
 * const params = parseURL('https://api.example.com/search?q=test&limit=10');
 * // Returns: { q: 'test', limit: '10' }
 */
export declare function parseURL(url: string): Record<string, string>;
//# sourceMappingURL=index.d.ts.map