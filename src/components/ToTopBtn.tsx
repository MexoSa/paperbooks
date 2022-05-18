import React, { useEffect, useState } from 'react'

const ToTopBtn = () => {
   const [showTopBtn, setShowTopBtn] = useState(false)

   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.scrollY > 400 && document.documentElement.clientWidth > 1350) {
            setShowTopBtn(true)
         } else {
            setShowTopBtn(false)
         }
      })
   }, [])

   const goToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      })
   }

   return (
      <>
         {showTopBtn && <button className="to-top-btn button" onClick={goToTop}>↑</button>}
      </>

   )
}

export default ToTopBtn