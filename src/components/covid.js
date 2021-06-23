import React,{useEffect,useState} from 'react'
import './covid.css';

const Covid = () => {
    const [data,setData] = useState([]);

const getCovidData = async () =>{
    try {
        const res = await  fetch('https://api.covid19india.org/data.json');
        // console.log(res);
        const actualData = await res.json(); // yeh ek promise return karega isliye yaha purr await likha.
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
    }catch(err) {
        console.log(err);

    }
}

useEffect(() => {
   getCovidData();
}, [])






    return (
        <>
        <section>
            <h1 className = 'heading_style'>  🔴 Live  </h1>
            <h2 className = 'heading_style'>COVID-19 CORONAVIRUS TRACKER </h2>

            <ul>
                <li className ='card' >
                    <div className = 'card__main' >
                        <div className = 'card__inner'>
                            <p className = 'card__name'><span>TOTAL</span>COUNTRY</p>
                            <p className = 'card__total card__small'>INDIA</p>
                        </div>
                    </div>

                </li>
                <li className ='card color2'>
                    <div className = 'card__main'>
                        <div className = 'card__inner'>
                            <p className = 'card__name'><span>TOTAL</span>RECOVERED</p>
                            <p className = 'card__total card__small'>{data.recovered}</p>
                        </div>
                    </div>

                </li>
                <li className ='card color3'>
                    <div className = 'card__main'>
                        <div className = 'card__inner'>
                            <p className = 'card__name'><span>TOTAL</span>CONFIRMED</p>
                            <p className = 'card__total card__small'>{data.confirmed}</p>
                        </div>
                    </div>

                </li>
                <li className ='card color4'>
                    <div className = 'card__main'>
                        <div className = 'card__inner'>
                            <p className = 'card__name'><span>TOTAL</span>DEATH</p>
                            <p className = 'card__total card__small'>{data.deaths}</p>
                        </div>
                    </div>

                </li>
                <li className ='card color5'>
                    <div className = 'card__main'>
                        <div className = 'card__inner'>
                            <p className = 'card__name'><span>TOTAL</span>ACTIVE</p>
                            <p className = 'card__total card__small'>{data.active}</p>
                        </div>
                    </div>

                </li>
                <li className ='card color6'>
                    <div className = 'card__main'>
                        <div className = 'card__inner'>
                            <p className = 'card__name'><span>LAST</span>UPDATED</p>
                            <p className = 'card__total card__small'>{data.lastupdatedtime}</p>
                        </div>
                    </div>

                </li>
            </ul>
            </section>
        </>
    )
}

export default Covid
