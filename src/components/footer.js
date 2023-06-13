import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footermenu">
        <ul className='footerlist'>
          <li><Link href='/terms' className='footerlinks'>Terms and Conditions</Link></li>
          <li><Link href='/policy' className='footerlinks'>Privacy and Policies</Link></li>
        </ul>
      </div>
    </div>
  )
}
