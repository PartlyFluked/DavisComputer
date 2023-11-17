'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import Image from 'next/image'
import shutdown_icon_up from './shutdown-icon-up.png'
import shutdown_icon_down from './shutdown-icon-down.png'
import shutdown_icon_click from './shutdown-icon-click.png'

export default function ShutdownIcon() {
    const router = useRouter()
    const pathname = usePathname()

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const handleClick = () => {
        setIsClicked(!isClicked);
        router.push('/shutdown', { scroll: false })
    };

    const preventDragHandler = (e: any) => {
        e.preventDefault();
    }

    return pathname === '/shutdown' ? (<></>) : (
        <div style={{
            position: 'absolute',
            width: '6vh',
            height: '6vh',
            marginLeft: '2vw',
            marginBottom: isClicked ? '1.8vh' : '2vh'
        }}>
            <Image
                src={isClicked ? shutdown_icon_click : (isHovered ? shutdown_icon_down : shutdown_icon_up)}
                alt=""
                fill={true}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                onMouseDown={handleClick}
                onMouseUp={handleClick}
                onDragStart={preventDragHandler}
            />
        </div>
    )
}