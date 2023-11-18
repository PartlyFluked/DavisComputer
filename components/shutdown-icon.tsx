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
            width: '6vh',
            height: '6vh',
            marginLeft: '2vw',
            marginTop: isClicked ? '93.2vh' : '93vh'
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
            />
        </div>
    )
}