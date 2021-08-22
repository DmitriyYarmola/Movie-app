export interface Guest {
	sessionId: string | null
}

export interface GuestResponse {
	guest_session_id: string
	expires_at: string
	success: true
}
