import React, { useState } from 'react';
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { FiX } from 'react-icons/fi';
import './Styles.css';

const AddContact = ({ onAdd, onCancel }) => {
    const history=useNavigate();
    const [name, setName] = useState('');
    const [number, setNumber] = useState(null);

    

    const handleSubmit = async(e) => {

        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/home",{
                name,number
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("contact already exists")
                }
                else if(res.data==="notexist"){
                    history("/home",{state:{id:name}, state:{id:number}})
                }
            })
            .catch(e=>{
                // alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

        if (name.trim() === '') return;
        if (number.trim() === '') return;
        const newContact = {
            id: Date.now().toString(),
            name: name.trim(),
            number: number.trim(),
        };
        onAdd(newContact);
        setName('');
        setNumber('');
    };

    return (
        <div className=''>
            <div className="cross-box">
                <h2>Add Contact</h2>
                <button className="close-button" onClick={onCancel}>
                    <FiX /> {/* Display the cross icon */}
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Enter Phone number"
                /> {' '}
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddContact;
