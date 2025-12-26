export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.neshan.org/v5/reverse?lat=${latitude}&lng=${longitude}`,
    {
      headers: {
        'Api-Key': 'service.e33c8ab521f74cfba7b4474980e1b491',
      },
    }
  );

  if (!res.ok) throw new Error('Failed getting address from Neshan');

  

  // تبدیل به JSON واقعی با decode کاراکترهای unicode
  const data = await res.json();

  return data;
}
