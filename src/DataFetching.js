import {useState, useEffect} from 'react';
import './DataFetching.css'

function DataFetching(){


    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe").then((res)=>{
          return res.json();
       }).then((data)=>  setData(data)) 
    },[]);

    return(
        <>
        <h1>About Castle in the Sky</h1>
        <div className='all'>
        
        <div  className='firstList'>
                <ul>
                    <li className="list1">Title:</li>
                    <li className="list1">Description:</li>
                    <li className="list1">Director:</li>
                    <li className="list1">Producer:</li>
                    <li className="list1">Relese Date:</li>
                </ul>
            </div>
            <div key={data.id} className='secondList'>
                <ul>
                    <li className='list2'>{data.title}</li>
                    <li className='list2'>{data.description}</li>
                    <li className='list2'>{data.director}</li>
                    <li className='list2'>{data.producer}</li>                     
                    <li className='list2'>{data.release_date}</li> 
                </ul>
            </div>
        </div>
        </>
    )
}

export default DataFetching;