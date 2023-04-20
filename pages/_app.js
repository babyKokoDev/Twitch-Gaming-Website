import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function App({ session, Component, pageProps }) {
  return (
    <>
    <SessionProvider session={session}>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
    </>
  ) 
}
