import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './scanlines.scss'
import Image from 'next/image'
import monitor from './monitor-border.webp'
import ShutdownIcon from './shutdown-icon'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Davis.Computer',
  description: "Luke's personal website.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image
          src={monitor}
          alt=""
          fill={true}
          style={{
            zIndex: 20,
            pointerEvents: 'none'
          }}
        />
        <div className='scanlines' style={{ position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <ShutdownIcon />
          {children}
        </div>
      </body>
    </html >
  )
}
