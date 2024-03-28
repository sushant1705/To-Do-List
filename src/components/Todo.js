import React,{useState,useEffect} from 'react'
import './style.css'

const Todo = () => {


// get Local Data
const getLocalData = () =>{
    const list = localStorage.getItem("TODO_Data")
    if(list){
        return JSON.parse(list);
    }
    else{
        return[];
    }
}

const[inputData,SetInputData]= useState("");
const[item,Setitem]= useState(getLocalData());
const[edit,Setedit]= useState();
const[toggle,Settoggle]= useState(false);

const newInputData={
    id :new Date().getTime().toString(),
    name :inputData,
}

// function to add item in the array
const add = () =>{
    if(!inputData){
        alert('Add Item First')
    }
    else if(inputData && toggle){
        Setitem(
            item.map((currEle)=>{
                if(currEle.id===edit){
                    return{...currEle,name:inputData}
                }
                else{
                    return currEle;
                }
            })
        )
        Setedit("")
        SetInputData([]);
        Settoggle(false);
    }

    // stop duplicate
    // if(inputData){
    //     item.map((currEle) =>{
    //         if(inputData===currEle.name){
    //             SetInputData("");
    //             return alert("Item Already Exists")
    //         }
            
    //             return currEle
            
            
    //     })  
    // }
    else{
        Setitem([...item, newInputData])
        SetInputData("");
    }
}

// edit Item
const editItem =(itemid)=>{
const editedItem = item.find((currEle) =>{
    return currEle.id === itemid
})
Setedit(itemid)
SetInputData(editedItem.name);
Settoggle(true);
}


// function to delete item in the array and update list
const deleteItem = (itemid) =>{
    const updatedList  = item.filter((currEle) =>{
        return currEle.id !== itemid;
    })
    Setitem(updatedList);
}



// function to delete list
const deleteList = () =>{
    Setitem([]);
}

//store local storage
// JSON.stringify is used because string is needed to set locsl data
useEffect(() => {
    localStorage.setItem("TODO_Data", JSON.stringify(item))
}, [item]);


  return (
    <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src='../images/logo.png' alt='todo_logo'></img>
                    <figcaption>Add Your List Here✌</figcaption>
                </figure>
                <div className='addItems'>
                    <input type = 'text' placeholder='✍ Add Items' className='form-control' value={inputData} onChange={(event)=>{SetInputData(event.target.value)}}/>
                    {toggle?(<i className="far fa-edit add-btn" onClick={add}></i>):(<i className="fa fa-plus add-btn" onClick={add}></i>)}                    
                </div>
                <div className='showItems'>
                {item.map((currEle,index)=>{
                    return( 
                    <div className='eachItem' key={currEle.id}>
                        <h3>{currEle.name}</h3>
                        <div className='todo-btn'>
                            <i className="far fa-edit add-btn"  onClick={()=>editItem(currEle.id)}></i>
                            <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(currEle.id)}></i>
                        </div>
                    </div>
                    )
                })}
                </div>
                <div className='showItems'>
                    <button className='btn effect04' data-sm-link-text="Remove All" onClick={deleteList}>
                        <span>CHECK LIST</span>
                    </button>

                </div>

            </div>

        </div>
    </>
  )
}

export default Todo