import { useState } from "react"
import ProductCard from "../components/ProductCard";


const Search = () => {
 
const   addTocardHandler = {

}
  const [search, setSearch] = useState("");
  const [sort , setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(" ");
  const [Category , setCategory] = useState(" ");
 const isNextPage = true ;
 const isPrevPage = true ;
  const [page, setPage] = useState("");
  return (
    <div className="product-search-page">
      <aside>
        <h2> Filters </h2>

        <div> 
          <h4> SORT</h4>
          <select 
          value = {sort}
          onChange={(e => setSort(e.target.value ))}>
            <option value ="none"> None</option>
            <option value ="asc"> price (Low to High)</option>
            <option value ="dsc"> None</option>
            <option value ="none"> None</option>
          </select>
          
        </div>


        <div> 
          <h4> maxPrice :{maxPrice || "" }</h4>
          <input 
          type ="range"
          value = {maxPrice}
          min={100}
          max={1000}
          onChange={(e) => setMaxPrice(Number(e.target.value ))}>
            
          </input>
        
          
        </div>





        <div> 
          <h4> Category</h4>
          <select 
          value = {Category}
          onChange={(e => setCategory(e.target.value ))}>
            <option value =""> all</option>
            <option value =""> sample 1 </option>
            <option value =""> Sample 2 </option>
            
          </select>
          
        </div>
      </aside>
      <main> 
        <h1> products  </h1>
        <input type = " text" placeholder ="search by name ..." value = {search} onChange={(e => setSearch(e.target.value))}/> 
        <div className ="search-product-list">
             <ProductCard 
              productId =" adasdmef" 
              name = " Macbook"
              price = {234}
              stock = {345}
              handler = { addTocardHandler}
              photo = "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg"/>
        </div>

        <article> 
          <button disabled ={!isPrevPage} onClick={() => setPage((prev)=> prev - 1 )}> prev </button>
          <span> {page} of {4}</span>


          <button  disabled ={!isNextPage}onClick={() => setPage((prev)=> prev + 1 )}> prev </button>
          
        </article>
       
      </main>
      
    </div>
  )
}

export default Search
