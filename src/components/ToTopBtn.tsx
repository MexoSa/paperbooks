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
         {showTopBtn && <button className="to-top-btn" onClick={goToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg>
         </button>}
      </>

   )
}

export default ToTopBtn