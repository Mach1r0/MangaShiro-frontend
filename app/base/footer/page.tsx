import React from 'react'
import Style from './footer.module.css'

export default function Footer() {
  return (
  <main>
    <div className={Style['container-all']}>
      <a href="/about">
        About us 
      </a> 
      
      <a href="/about">
        Follow Us 
      </a> 

      <a href="/terms">
        Terms 
      </a>
    </div>
  </main>
  )
}
