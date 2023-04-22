This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

On WSL2, to expose the server on Local Network:

```bash
 netsh interface portproxy show v4tov4

 netsh interface portproxy add v4tov4 listenaddress=192.168.0.17 listenport=5000 connectaddress=$($(wsl hostname -I).Trim()) connectport=3000

 netsh advfirewall firewall add rule name="Allowing LAN connections" dir=in action=allow protocol=TCP localport=5000
```
