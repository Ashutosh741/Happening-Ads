import React from 'react'
import '../CSS/Magician.css'
const Magician = () => {
  return (
	<>
	<section className='current_location'>
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1304888706713!2d77.37621617522548!3d28.625850984384606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea93b1d2451d%3A0x54c52749ecbb612b!2sMobile%20App%20Development%20Company%20%7C%20Frantic%20Infotech!5e0!3m2!1sen!2sin!4v1693656989545!5m2!1sen!2sin" width="100%" height="450" style = {{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	</section>
<section className="magicians-content lazyloaded" data-bg="https://lh3.googleusercontent.com/HbbwBVTP5di7nuhHcfsQ78XB4WE81wEmKLlOyhCkgTG00KhFmzqDeVVo_EXowoIdL-35SutKitCja_IFUPKBPRuP4afwbA6ZbVOs6wn8=w700" style={{backgroundImage: "url(&quot;https://lh3.googleusercontent.com/HbbwBVTP5di7nuhHcfsQ78XB4WE81wEmKLlOyhCkgTG00KhFmzqDeVVo_EXowoIdL-35SutKitCja_IFUPKBPRuP4afwbA6ZbVOs6wn8=w700&quot)"}}>
			<img className="magic_logo lazy err-handled ls-is-cached lazyloaded" src="http://localhost:3000/static/media/HAPPENING-ADS-LOGO%201.f9717e4fe20aa5217b3b.png" data-src="https://static.magicpin.com/samara/static/images/magicians-logo.svg" alt="magicians logo" title="magicians logo" onerror="this.alt='';recordBrokenImages(this,false,1);"/>
			<p className="magic_description">Join our community to earn higher cashback, cool goodies, and party invites.</p>
			<button className='btn apply border-none'>APPLY NOW</button>
            
</section>
</>
  )
}

export default Magician
