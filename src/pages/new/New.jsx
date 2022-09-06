import React,{useState} from 'react'
import "../new/New.scss"
import Navbar from "../../components/Navbar/Navabar"
import Sidebar from "../../components/Sidebar/Sidebar"
import {DriveFolderUploadOutlined} from "@mui/icons-material"

const New = ({inputs, title}) => {

  const [file, setFile] = useState("");
  console.log(file);
  return (
    <div className="new">
      <Sidebar/>
      <div className='new__container'>
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunLJG8Tol7W_XP4NtQMMrXNjZTu7GRFKW_zt5lDQMPOthpElIgqkMPOdxLJ4r2TCdT3E&usqp=CAU"} alt="userimageicon" />
          </div>
          <div className="right">
            <form >
            <div className="form__input">
                <label htmlFor='file' className='file__input'>
                 Upload Image:<DriveFolderUploadOutlined className='icon' />
                </label>
                <input type="file" id='file' style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
              </div>
              {
                inputs.map((item)=>{
                  return(
                    <div className="form__input" key={item.id}>
                        <label>{item.label}</label>
                        <input type={item.type} placeholder={item.placeholder}/>
                    </div>
                  )
                })
              }
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default New