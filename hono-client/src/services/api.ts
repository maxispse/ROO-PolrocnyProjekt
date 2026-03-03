const API_URL = "http://localhost:3000"

export async function getVideos() {
  const res = await fetch(`${API_URL}/videos`)
  return res.json()
}