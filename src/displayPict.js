import './App.css'
import picturesData from './arrayPictures'
export default function PicturesDisplay(){
    const items=picturesData.map((item)=>{
        return(<div className='photos'><img src={item.img}></img><h4>{item.title}</h4></div>)
    })
    return(
        <div className='item-pict'>
           {items} 
        </div>
    )
}