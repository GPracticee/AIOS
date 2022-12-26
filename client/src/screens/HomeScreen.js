import React, { useEffect, useReducer } from 'react'
// import data from '../data';
import '../App.css';
import axios from "axios"
import logger from "use-reducer-logger"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from '../Component/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../Component/LoadingBox';
import MessageBox from '../Component/MessageBox';


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

const HomeScreen = () => {
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: ""
    })
    // const [products,setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' })
            try {
                const result = await axios.get('/api/products');
                dispatch({ type: "FETCH_SUCCESS", payload: result.data })
            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err.message });

            }
            // setProducts(result.data)
        };
        fetchData()
    }, [])
    return (
        <>
        <Helmet>
            <title>AIOS</title>
        </Helmet>
            <h1>Fearured products</h1>
            <div className="products">
                {loading ? (
                    <LoadingBox />
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <Row>
                     { products.map(product => (
                        <Col key={product.slug}>
                       <Product product = {product}></Product>
                        </Col>
                        ))}
                   </Row>
                )
                }
               
            </div>
        </>
    )
}

export default HomeScreen