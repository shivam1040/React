import { useParams, Link } from "react-router-dom"

function ProductDetailPage(){
    //query part of the url when it gets routed here
    const params = useParams()

    return <>
    <h1>Product Detail</h1>
    <p>{params.productId}</p>
    {/* this means one step back when used absolute path it goes back by root parent path and when used relative it goes by immediate parent path */}
    <p><Link to={".."} relative="path">Back</Link></p>
    </>
}

export default ProductDetailPage