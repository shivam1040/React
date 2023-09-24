import { Link } from "react-router-dom"

const product=[{id: "1", title: "1"}, {id: "2", title: "2"}]

function ProductPage(){
    return <>
            <h1>Product Page</h1>
            <ul>
                {/* we can add relative attrib to this tag to set if the path is relative or abosulte or remove / from to attrib to make the path relative*/}
                {product.map(p=><li key={p.id}><Link to={`/product/${p.id}`}>{p.title}</Link></li>)}
            </ul>
           </>
}

export default ProductPage