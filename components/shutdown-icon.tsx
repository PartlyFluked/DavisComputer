'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import Image from './Image'
import shutdown_icon_up from './shutdown-icon-up.png'
import shutdown_icon_down from './shutdown-icon-down.png'
import shutdown_icon_click from './shutdown-icon-click.png'

export default function ShutdownIcon() {
    const router = useRouter()
    const pathname = usePathname()

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseDown = () => {
        setIsClicked(true);
    };

    const handleMouseUp = () => {
        setIsClicked(false);
        router.push('/shutdown', { scroll: false })
    };

    const preventDragHandler = (e: any) => {
        e.preventDefault();
    }

    return pathname === '/shutdown' ? (<></>) : (
        <div style={{
            position: 'absolute',
            width: '6dvh',
            height: '6dvh',
            marginLeft: '2dvw',
            marginTop: isClicked ? '93.2dvh' : '93dvh'
        }}>
            <Image
                src={isClicked ? shutdown_icon_click : (isHovered ? shutdown_icon_down : shutdown_icon_up)}
                alt=""
                fill={true}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onDragStart={preventDragHandler}
                style={{
                    zIndex: 10
                }}
            />
        </div>
    )
}