'use client'

import Image from 'next/image'
import monitor from './monitor-border.webp'

export default function MonitorForeground() {
    return (
        <div>
            <Image
                src={monitor}
                alt=""
                fill={true}
                style={{
                    zIndex: 20,
                    pointerEvents: 'none'
                }}
            />
        </div>
    )
}