import { useEffect } from "react"

const useDrag = (ref: any) => { useEffect(() => {
    let isDragging = false
    let dragStartX = 0  
    let scrollLeft = 0
    const container = ref.current

    if (!container) return

    const handleMouseDown = (e: MouseEvent) => {
        isDragging = true
        dragStartX = e.clientX
        scrollLeft = container.scrollLeft
    }

    const handleMouseUp = () => {
        isDragging = false
    }

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return
        const dx = e.clientX - dragStartX
        container.scrollLeft = scrollLeft - dx
    }

    container.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
        container.removeEventListener('mousedown', handleMouseDown)
        window.removeEventListener('mouseup', handleMouseUp)
        window.removeEventListener('mousemove', handleMouseMove)
    }
}, [])
}

export default useDrag