import { useEffect, useState } from 'react';

export default function AddressComponent() {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    async function fetchAddress() {
      try {
        const latitude = 52.2232104;
        const longitude = 6.8792922;

        const res = await fetch(
          `https://api.neshan.org/v5/reverse?lat=${latitude}&lng=${longitude}`,
          {
            headers: {
              'Api-Key': 'service.e33c8ab521f74cfba7b4474980e1b491',
            },
          }
        );

        if (!res.ok) throw new Error('Failed getting address');

        const data = await res.json();
        setAddress(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAddress();
  }, []);

  return (
    <div>
      <h2>Address:</h2>
      <pre>{JSON.stringify(address, null, 2)}</pre>
    </div>
  );
}
