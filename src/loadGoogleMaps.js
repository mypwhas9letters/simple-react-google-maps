import $S from 'scriptjs'
const baseUrl = `https://maps.googleapis.com/maps/api/js?key=`;

export default async (apiKey) => await ($S(`${baseUrl}${apiKey}`))
