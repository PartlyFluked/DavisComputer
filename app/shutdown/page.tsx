import Image from 'next/image'
import shutdown from './safe-to-shutdown.png'

export default function Shutdown() {
  return (
    <main>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
      }}>
        <Image
          src={shutdown}
          alt=""
          style={{ pointerEvents: 'none' }}
        />
      </div>
    </main>
  )
}
