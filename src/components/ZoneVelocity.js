import React, { useState } from 'react';

import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { AlertLights } from './buttons/AlertLights';

export const ZoneVelocity = () => {

    const [velocityMax, setVelocityMax] = useState(90);

    if(velocityMax < 0){
        setVelocityMax( 0)
    }
    if(velocityMax > 220){
        setVelocityMax(220)
    }

    ChartJS.register(ArcElement);
    const velocidadData = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: '# of Votes',
                data: [60, 1, 39],
                backgroundColor: [
                    '#2FD6D6',
                    '#FE2C9A',
                    '#262F40'
                ],

                borderWidth: 0,
                hoverOffset: 0,
                rotation: 240,
                circumference: 240,
                cutout: 100
            },
        ],
    };
    const vhData = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: '# of Votes',
                data: [35, 5, 60],
                backgroundColor: [

                    '#262F40',
                    '#FE8E06',
                    '#2FD6D6',
                ],

                borderWidth: 0,
                hoverOffset: 0,
                rotation: 240,
                circumference: 240,
                cutout: '95%',
                clip: { left: false, top: 50, right: 50, bottom: 50 }
            },
        ],
        options: {
            tooltips: {
                 enabled: false
            }
        }
        
    };

  return (
    <>
        <div className='car-display-grid-item4'>
                <div className='zone-velocity-top'>
                    <div className='velocidad-max'>
                        <button 
                        className='btn-square'
                        onClick={() => setVelocityMax(velocityMax - 5)}
                        >
                            <img src="./assets/img/icons/icon-arrow-left.svg" width={30}  alt="more" />
                        </button>
                        <div className='velocidad-max-datas'>
                            <span  className='max'>MAX</span> 
                            <span className='data'>{velocityMax}</span>
                            <span className='kmh'>Km/h</span>
                        </div>
                        <button 
                        className='btn-square'
                        onClick={() => setVelocityMax(velocityMax + 5)}
                        >
                            <img src="./assets/img/icons/icon-arrow-right.svg" width={30}  alt="less" /></button>
                    </div>
                    <div className='velocity-graphics'>
                        <div className='velocity'>
                            <Doughnut data={velocidadData} />
                            <div className='velocidad-data'>86<span>Km/h</span></div>
                        </div>
                        <div className='vh'>
                            <Doughnut data={vhData} />
                            <div className='vh-data'>22<span>vh</span></div>
                        </div>
                    </div>

                </div>
                <div className='zone-velocity-bottom'>
                    <div className='graphic-avg'>
                        <div className='graphic-avg-linea'>

                            <img src='./assets/img/graphic-avg.svg' width={264} height={90}  alt="avg" />
                        </div>
                        <div className='graphic-avg-datas'>
                            <span className='avg'>Avg</span>
                            <span className='data'>20</span>
                            <span className='vh'>vh</span>
                        </div>
                    </div>
                    <div className='botones-marchas'>
                        <button>P</button>
                        <button>R</button>
                        <AlertLights />
                        <button>N</button>
                        <button>D</button>
                    </div>
                </div>
            </div>
    </>
  )
}
