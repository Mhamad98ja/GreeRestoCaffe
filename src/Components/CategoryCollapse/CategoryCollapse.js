import React from 'react'
import Item from '../Item/Item'
import fooddDataList from '../../DataList/fooddDataList'
import coldDrinksDataList from '../../DataList/coldDrinksDataList'
import hotDrinksDataList from '../../DataList/hotDrinksDataList'
import shishaDataList from '../../DataList/shishaDataList'
import snacksDataList from '../../DataList/snacksDataList'
import '../CategoryCollapse/CategoryCollapse.css'

const CategoryCollapse = (props) => {
return (
    <div className='d-flex justify-content-center'>
    <div className='content'>
        <p class="d-inline-flex gap-1">
    <a class="btn btn-primary" data-bs-toggle="collapse" href={"#"+props.link} role="button" aria-expanded="false" aria-controls={props.link}>{props.link}</a>
    </p>
    <div class="row">
    <div class="col">
        <div class="collapse multi-collapse" id={props.link}>
            <div class="card card-body ">
                {props.link==="Sandwiches"?(<div className='row justify-content-end'>
                    <div className='col-4'>Sandwich</div>
                    <div className='col-4'>Platter</div>
                </div>):(<></>)}
                
            {props.link==="Sandwiches" ? <div className='card-food'>
                {props.link==="Sandwiches"?fooddDataList.map((item, index) => ( 
        <Item key ={index} name={item.name} price={item.price} price2={item.price2}/>
            )):""}
            </div>:""}

            {props.link==="ColdDrinks" ? <div className='card-cold'>
                {props.link==="ColdDrinks"?coldDrinksDataList.map((item, index) => ( 
        <Item key ={index} name={item.name} price={item.price} price2={item.price2}/>
            )):""}
            </div>:""}

            {props.link==="HotDrinks" ? <div className='card-hot'>
                {props.link==="HotDrinks"?hotDrinksDataList.map((item, index) => ( 
        <Item key ={index} name={item.name} price={item.price} price2={item.price2}/>
            )):""}
            </div>:""}

            {props.link==="Shisha" ? <div className='card-shisha'>
                {props.link==="Shisha"?shishaDataList.map((item, index) => ( 
        <Item key ={index} name={item.name} price={item.price} price2={item.price2}/>
            )):""}
            </div>:""}

            {props.link==="Snacks" ? <div className='card-snack'>
                {props.link==="Snacks"?snacksDataList.map((item, index) => ( 
        <Item key ={index} name={item.name} price={item.price} price2={item.price2}/>
            )):""}
            </div>:""}
        </div>
        </div>
    </div>
</div>
    </div></div>
)
}

export default CategoryCollapse