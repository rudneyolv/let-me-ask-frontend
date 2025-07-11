export interface BackendResponse {
	success: boolean;
	message?: string;
	errors?: string[];
	data?: unknown;
}
