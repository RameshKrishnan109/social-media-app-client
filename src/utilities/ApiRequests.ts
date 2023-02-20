const apiBaseUrl = "http://localhost:5000";

export const apiRequest = {

    async get(url: string) {
        try {
            const res = await fetch(`${apiBaseUrl}${url}`);
            const data = await res.json();
            return data;
        } catch (error) {
            return error;
        }
    },

    async post<T>(url: string, body: {}) {
        try {
            const res = await fetch(`${apiBaseUrl}${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })
            const data = await res.json() as T;
            return data;
        } catch (error) {
            return error;
        }
    }
}