```javascript
// pages/index.js

import { getServerSideProps } from 'next';

export default function Home({ data }) {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>Data from server: {data}</p> 
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from an external API or database 
  const data = await fetch('https://api.example.com/data').then(res => res.json());
  return { props: { data } };
}
```