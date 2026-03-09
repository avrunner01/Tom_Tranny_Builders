import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ request }) => {
  // If MLS credentials are provided via environment, proxy the request.
  const MLS_API_URL = process.env.MLS_API_URL
  const MLS_API_KEY = process.env.MLS_API_KEY

  if (MLS_API_URL && MLS_API_KEY) {
    const url = new URL(MLS_API_URL)
    // forward query string
    url.search = new URL(request.url).search

    const resp = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${MLS_API_KEY}`,
      },
    })
    const text = await resp.text()
    return new Response(text, {
      status: resp.status,
      headers: { 'content-type': resp.headers.get('content-type') || 'application/json' },
    })
  }

  // Fallback: return sample listings for local development
  const sample = [
    {
      id: 1,
      title: 'Charming 3BR in Downtown',
      price: 450000,
      lat: 40.73061,
      lng: -73.935242,
      image: '/images/sample1.jpg',
      description: 'Beautifully updated home close to amenities.'
    },
    {
      id: 2,
      title: 'Spacious Suburban Home',
      price: 650000,
      lat: 40.741895,
      lng: -73.989308,
      image: '/images/sample2.jpg',
      description: 'Large yard and modern kitchen.'
    }
  ]

  return new Response(JSON.stringify(sample), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })
}
