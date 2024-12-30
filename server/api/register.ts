import { defineEventHandler, readBody } from 'h3';

interface RegisterResponse {
    token: string;
    user: {
        id: string;
        contacts: string[];
        info: Record<string, any>;
    };
}

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const body = await readBody(event);

    const apiUrl: string = `${config.apiBase}/${config.apiVersion}/register`;

    try {
        // Call the external API
        const response = await $fetch<RegisterResponse>(apiUrl, {
            method: 'POST',
            body,
        });

        // Ensure valid response
        if (!response.token || !response.user) {
            throw new Error('Invalid response from external API');
        }

        return {
            token: response.token,
            user: {
                id: response.user.id,
                contacts: response.user.contacts,
                info: response.user.info,
            },
        };
    } catch (error: any) {
        throw createError({
            statusCode: error?.response?.status || 400,
            statusMessage: error?.data?.message || 'Registration failed',
        });
    }
});
