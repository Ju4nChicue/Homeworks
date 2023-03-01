import { useState } from 'react';
import './App.css'
import { FirstApp, Counter, GifExpert, GifGrid, Counter2, Fetch_component, BreakingBad } from './'

const Home = () =>{

    const components = [<FirstApp />, <Counter value={0} />, <GifExpert />, <GifGrid category={"algo"} />, <Counter2 value={0}/>, <Fetch_component />, <BreakingBad />]

    const [page, setPage] = useState(0)

    const handleAdd = () => {
        if (page < components.length - 1){
            setPage( page + 1)
        }
    }

    const handleSubsstract = () => {
        if (page > 0){
            setPage ( page - 1)
        }
    }

    return (
        <>
            <div className='Select'>
                <h1>Challenge {page + 1}</h1>
                <button onClick={() => handleSubsstract()}> Anterior </button>
                <button onClick={() => handleAdd()}> Siguiente </button>
            </div>
            
            <div className='challenges'>
                {
                    components[page]
                }
            </div>
        </>
      )
}

export default Home