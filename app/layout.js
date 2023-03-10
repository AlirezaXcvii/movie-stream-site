import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-zinc-900 text-zinc-200'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
