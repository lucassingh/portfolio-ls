'use client';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function CustomCursor2({ isActive }) {
    const mouse = useRef({ x: 0, y: 0 });
    const delayedMouse = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);
    const size = isActive ? 400 : 30;
    const circles = useRef([]);

    const colors = [
        "#baf701",
        "#94c101",
        "#e2ff70",
        '#a8d401',
        "#d4ff9f",
    ]

    const moveCircles = (x, y) => {
        if (circles.current.length < 1) return;
        circles.current.forEach((circle, i) => {
            gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 })
        })
    }

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;

        mouse.current = {
            x: clientX,
            y: clientY
        }
    }

    const animate = () => {
        const { x, y } = delayedMouse.current;

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.075),
            y: lerp(y, mouse.current.y, 0.075)
        }

        moveCircles(delayedMouse.current.x, delayedMouse.current.y);

        rafId.current = window.requestAnimationFrame(animate);
    }

    useEffect(() => {
        animate();
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.cancelAnimationFrame(rafId.current)
        }
    }, [isActive])

    return (
        <div className='relative h-auto'>
            {
                [...Array(4)].map((_, i) => {
                    const delay = 0.01;
                    return (
                        <div
                            style={{
                                backgroundColor: colors[i],
                                width: size,
                                height: size,
                                filter: `blur(${isActive ? 20 : 2}px)`,
                                transition: `transform ${(4 - i) * delay}s linear, height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`

                            }}
                            className='custom-cursor2 top-0 left-0 fixed rounded-full mix-blend-difference'
                            key={i}
                            ref={ref => circles.current[i] = ref}
                        />)
                })
            }
        </div>
    )
}