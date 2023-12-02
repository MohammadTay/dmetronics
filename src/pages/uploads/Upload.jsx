import React, { useState } from 'react';
import './Upload.css';
import upload from '../../utils/upload'
import newRequest from '../../utils/Request'

function Upload() {
    const [data, setData] = useState({
        Name: "",
        Description: "",
        Price: ""
    });
    const [file, setFile] = useState("")
    const [option, setOption] = useState("")


    const handleChange = (e) => {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    console.log(option);
    console.log(file);
    console.log(upload);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = await upload(file)
        console.log(url);
        try {
            await newRequest.post(`/${option}`, {
                ...data,
                Image: url,
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="upload-page">
            <h1>Upload Page</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <label>
                    <select onChange={(e) => setOption(e.target.value)}>
                        <option value="softwares">softwares</option>
                        <option value="hardwares">hardwares</option>
                        <option value="wirings">wirings</option>
                        <option value="pinouts">pinouts</option>
                        <option value="tutorials">tutorials</option>

                    </select>
                </label>
                <label>
                    Name:
                    <input
                        type="text"
                        name="Name"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="Description"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Image:
                    <input
                        type="file"
                        name="image"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </label>

                <label>
                    price:
                    <input
                        type="text"
                        name="Price"
                        onChange={handleChange}
                    />
                </label>



                <button type="submit">uppload</button>
            </form>
        </div>
    );
}

export default Upload;
