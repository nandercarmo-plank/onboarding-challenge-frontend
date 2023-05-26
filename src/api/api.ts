import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:80";

export const get = async <T>(path: string): Promise<T[]> => {
	const url = API_URL + (path.startsWith("/") ? path : "/" + path);

	try {
		const response: AxiosResponse<T[]> = await axios.get<T[]>(url);
		return response.data;
	} catch (error) {
		console.error(`Error while making GET request to ${url}: `, error);
		throw error;
	}
}

export const post = async <T>(path: string, createDto: T): Promise<boolean> => {
	const url = API_URL + (path.startsWith("/") ? path : "/" + path);

	try {
		await axios.post(url, createDto);
		return true;
	} catch (error) {
		console.error(`Error while making POST request to ${url}: `, error);
		return false;
	}
}

export const put = async <T>(path: string, id: number, updateDto: T): Promise<boolean> => {
	const url = API_URL + (path.startsWith("/") ? path : "/" + path);

	try {
		await axios.put(`${url}/${id}`, updateDto);
		return true;
	} catch (error) {
		console.error(`Error while making PUT request to ${url}: `, error);
		return false;
	}
}

export const del = async (path: string, id: number): Promise<boolean> => {
	const url = API_URL + (path.startsWith("/") ? path : "/" + path);

	try {
		await axios.delete(`${url}/${id}`);
		return true;
	} catch (error) {
		console.error(`Error while making DELETE request to ${url}: `, error);
		return false;
	}
}
