import React from 'react'

function Subscribe(): React.ReactElement {
   return (
      <section className="subscribe section-margin">
         <h2 className='title'>Subscribe to Newsletter</h2>
         <p className='subtitle'>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
         <form>
            <input className='input' type="email" placeholder="Your email" required />
            <button className='button'>Subscribe</button>
         </form>
      </section>
   )
}

export default Subscribe