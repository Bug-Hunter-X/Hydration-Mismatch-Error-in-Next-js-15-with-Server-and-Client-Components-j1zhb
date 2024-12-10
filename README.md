# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a hydration mismatch bug encountered in Next.js 15 when integrating server and client components.  The issue arises from inconsistencies between data fetched on the server and rendered on the client.  The solution involves carefully managing data fetching and ensuring that client-side rendering aligns with server-side rendering.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the hydration mismatch error in the browser's console.

## Solution

The solution is provided in `bugSolution.js` and involves using appropriate data fetching methods to maintain consistency between server and client rendering.