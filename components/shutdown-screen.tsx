'use client'

import Image from './Image'
import shutdown from './safe-to-shutdown.png'

export default function ShutdownScreen() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100dvw',
            height: '100dvh'
        }}>
            <Image
                src={shutdown}
                alt=""
                style={{ pointerEvents: 'none' }}
            />
        </div>
    )
}