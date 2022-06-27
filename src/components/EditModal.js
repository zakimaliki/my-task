import React from 'react'
import Button from "./Button"
import "../styles/EditModal.css"

class EditModal extends React.Component{

  render(){
    const { edit  , close,closeDel , data, dataDel , change , update, hapus, del } = this.props;
    const delById = id => {
      del(id)
    }
    if(edit) {
      return(
        <div className="modal-container">
          <div className="modal-box">
            <h3>Edit task</h3>
            <div className="input">
              <input type="text" value={data.title} onChange={change} />
            </div>
            <div className="btn-group">
              <Button text="ok" variant="primary" action={update}/>
              <Button text="cancel" variant="warning" action={close}/>
            </div>
          </div>
        </div>
      )
    }else if(hapus){
      return(
        <div className="modal-container">
          <div className="modal-box">
            <h3>Delete task</h3>
            <div className="btn-group">
              <Button text="ok" variant="primary" action={() =>  delById(dataDel.id)}/>
              <Button text="cancel" variant="warning" action={closeDel}/>
            </div>
          </div>
        </div>
      )
    }
    else {
      return null
    }
  }
}

export default EditModal
