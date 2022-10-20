import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext, useState } from 'react';
import { ProductContext } from '../../../Pages/Products/productProvider';

function ProductModal({ show, handleClose }) {
  const Context = useContext(ProductContext);
  const {products} = Context.state
  const [product,setProduct] = useState({
    id:products.length+1,
    url:"",
    type:"",
    description:"",
    price:""
  })
  const {type,url,description,price} = product;
  const handleChange = (e)=>{
    setProduct({...product,[e.target.name]:e.target.value})
  }
  const submitForm = (e)=>{
    console.log(product)
    products.push(product)
    console.log(products)
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Type</Form.Label>
            <Form.Control type="text" placeholder="Enter product type" name='type' value={type} onChange={(e)=>handleChange(e)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Image URL</Form.Label>
            <Form.Control type="text" placeholder="Enter url" name='url' value={url} onChange={(e)=>handleChange(e)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Product Description</Form.Label>
            <Form.Control type="text" placeholder="Enter description" name='description' value={description} onChange={(e)=>handleChange(e)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="number" placeholder="Enter price" name='price' value={price} onChange={(e)=>handleChange(e)}/>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary"  onClick={(e)=>submitForm(e)}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;