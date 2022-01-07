import Cookies from 'js-cookie'; // Will extract the XSRF-TOKEN cookie value

export async function csrfFetch(url, options = {}) {
    // Default options.method to 'GET' if no method
    options.method = options.method || 'GET';

    // Deafult options.headers to an empty object if no headers
    options.headers = options.headers || {};

    // If any method other than a 'GET' > Set the "Content-Type" header to
    //  "application/json" + "XSRF-TOKEN" header to the value of the
    //  "XSRF-TOKEN" cookie
    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] =
            options.headers['Content-Type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
    };

    // Call the default window's fetch
    const res = await window.fetch(url, options);

    if (res.status >= 400) throw res; // res = error

    return res;
};

// Call restoreCSRF() to get the "XSRF-TOKEN" cookie (ONLY for development)
export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
};
