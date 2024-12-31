import { defineEventHandler, readBody } from 'h3';

interface LoginResponse {
    token: string;
    user: {
        id: string;
        contacts: string[];
        info: Record<string, any>;
    };
}

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(); // Access runtime configuration
    const body = await readBody(event); // Parse the request body

    // Build API URL dynamically using base URL and version
    const apiUrl: string = `${config.apiBase}/${config.apiVersion}/login`;

    // Make the API request with explicit type
    const response = await $fetch<LoginResponse>(apiUrl, {
        method: 'POST',
        body,
    });

    // Ensure only JSON-serializable fields are returned
    return {
        token: response.token,
        user: {
            id: response.user.id,
            contacts: response.user.contacts,
            info: response.user.info,
        },
    };
});
