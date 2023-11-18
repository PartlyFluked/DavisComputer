import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './scanlines.scss'
import ShutdownIcon from '@/components/shutdown-icon'
import MonitorForeground from '@/components/monitor-foreground'
// import TransitionLayout from '@/components/transition-layout'

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
      <body className={inter.className} style={{ position: 'relative' }}>
        <MonitorForeground />
        <div className='scanlines'>
          {/* <TransitionLayout> */}
          <ShutdownIcon />
          {children}
          {/* </TransitionLayout> */}
        </div>
      </body>
    </html >
  )
}
