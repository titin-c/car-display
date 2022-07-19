import React from 'react'

export const ZoneMap = () => {
  return (
    <div className='car-display-grid-item1 zone-map'>
            <div className='map'>
                <img src='./assets/img/mapa2.png' alt='mapa' />
            </div>
            <div className='zone-map-container'>
                <div className='zone-map-info'>
                    <div className='zone-map-oratge'>
                        <img src='.\assets\img\icons\icon-parcialmente-nublado.svg' alt='wave' width='28px' />
                        <span className='zone-map-oratge-grados'>28<span>ºC</span></span>
                        <div className='zone-map-oratge-desc'>Parcialmente nublado</div>
                    </div>
                    <div className='zone-map-fuel'>
                    <div className='zone-map-fuel-km'>
                        <span><svg xmlns="http://wwclassName='zone-map-fuel'w.w3.org/2000/svg" viewBox="0 0 22 22.04"><g id="Capa_2" data-name="Capa 2"><g id="mapa"><polygon className="cls-1" points="11.83 4.21 8.17 4.21 5.83 11.21 8.83 11.21 6.83 17.21 12.83 9.21 9.83 9.21 11.83 4.21"/><path className="cls-2" d="M16.3,21h4.6c.2,0,.43-.06.58,0s.45.32.46.49-.28.35-.47.47-.3,0-.45,0h-20c-.15,0-.33.05-.45,0A5.24,5.24,0,0,1,0,21.57c.19-.19.36-.45.59-.53a3.77,3.77,0,0,1,1,0V3A2.68,2.68,0,0,1,2.89.45,3.41,3.41,0,0,1,4.49,0c3,0,6,0,9,0a2.66,2.66,0,0,1,2.83,2.77A1.45,1.45,0,0,0,16.91,4c1.1.92,2.16,1.9,3.27,2.9,0,0,.13-.14.23-.15s.53-.09.64,0a.69.69,0,0,1,.08.63c-.38.39-.19.67,0,1a5.08,5.08,0,0,1-3.23,7.83,11.61,11.61,0,0,1-1.63.11V21ZM2.67,21H14.39c.89,0,.9,0,.9-.88V4.62c0-.63,0-1.26,0-1.89A1.68,1.68,0,0,0,13.51,1c-3,0-6.07,0-9.1,0A1.67,1.67,0,0,0,2.65,2.66a4.52,4.52,0,0,0,0,.52v17C2.63,20.43,2.65,20.67,2.67,21ZM20.1,8.73c-.31.38-.57.7-.84,1-.43.49-.74.46-1.06-.1-.41-.72-.83-1.43-1.18-2.18a1.44,1.44,0,0,1,0-1c.36-1,.34-1.06-.63-1.49a1.14,1.14,0,0,0-.05.24c0,3.21,0,6.41,0,9.61,0,.38.16.48.51.49a3.77,3.77,0,0,0,3.7-2.1A4,4,0,0,0,20.1,8.73Zm-1.82-2.3L18,6.57c-.29.85.49,1.32.74,2,.77-.69.77-.69.16-1.36C18.71,7,18.5,6.7,18.28,6.43Z"/></g></g></svg></span>
                        <span>15</span> 
                        Km
                    </div>
                    <div className='zone-map-cargar'>Cargar bateria</div>
                    <div className='zone-map-fuel-es'>E.S. La Torreta</div>
                    </div>
                </div>
                <div className='zone-map-direcction'>
                        <div>
                            <p  className="direccion">Calle  constitución, 1 - Valencia</p>
                            <p>
                                <span className='zone-map-direcction-km'>45Km.</span> 
                                <span className='zone-map-direcction-min'>42 min.</span>
                            </p>
                        </div>
                        <button className='btn-rounded'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16"><g id="Capa_2" data-name="Capa 2"><g id="mapa"><rect className="cls-1" width="18" height="2"/><rect className="cls-1" y="4.67" width="18" height="2"/><rect className="cls-1" y="9.33" width="18" height="2"/><rect className="cls-1" y="14" width="18" height="2"/></g></g></svg>
                            </span>
                        </button>
                    </div>
            </div>
        </div>
  )
}
