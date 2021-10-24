import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {Pagination} from 'semantic-ui-react'
import './table.css';

const Table = () => {

    const [tableDetails, setTableDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const [apiUrl, setApiUrl] = useState('https://swapi.co/api/people/');


    const onChange = (e, pageInfo) => {
        setActivePage(pageInfo.activePage);
      setApiUrl('https://swapi.co/api/people/?page=' + pageInfo.activePage.toString());
    };

    const fetchBlogs = async() => {
            setLoading(true);
            const res = await axios.get(`https://swapi.dev/api/people/?page=${activePage}`);
            setTableDetails(res.data.results);
    };

    useEffect(() => {fetchBlogs()},[activePage]);
    
    if (!loading){
        return <h4>Loading...</h4>;
    }

    return (
        <div>
        <div className="tableContainer" >
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Birth Year</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Eye Color</th>
                    </tr>
                </thead>
                <tbody>
                        {tableDetails.map(item => 
                        <tr key={item.name}>
                        <td data-label="Name">{item.name}</td>
                        <td data-label="Gender">{item.gender}</td>
                        <td data-label="Birth Year">{item.birth_year}</td>
                        <td data-label="Height">{item.height}</td>
                        <td data-label="Mass">{item.mass}</td>
                        <td data-label="Eye Color">{item.eye_color}</td>
                        </tr>
                        )}
                </tbody>
            </table>

        <div className='d-none d-sm-block' style={{display:'flex', alignItems:'center',justifyContent:'center',marginTop:'22px'}}>
            <Pagination 
        activePage={activePage}
        onPageChange={onChange}
        totalPages={9}
       
        />
        </div>
            
        </div>
        </div>
    )
}

export default Table;
