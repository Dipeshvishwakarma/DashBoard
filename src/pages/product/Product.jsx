import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import "./product.css";
import { productData } from '../../dummyData';
import { Publish } from '@mui/icons-material';

const Product = () => {
  return (
    <div className='product'>
        <div className="productTitleContaine">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="data:image/jpeg;base64,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" alt="" className="productInfoImg" />
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <div className="productInfoKey">id:</div>
                        <div className="productInfoValue">123</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">Sales:</div>
                        <div className="productInfoValue">5123</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">active:</div>
                        <div className="productInfoValue">yes</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">in stock:</div>
                        <div className="productInfoValue">no</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form  className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder='Apple Airpod'/>
                    <label>In Stock</label>
                    <select name='inStock' id='inStock'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name='active' id='active'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDxISEBMVEhATEhAQDxASDxAQEBAPFxIWFxURFRMYHSggGBonGxYTITEhJSkrLi46Fx81ODMuNygtLi0BCgoKDQ0NDg0NDy0ZFRkrLTcrLTctLS0rNysrNy0rKy0rKysrKy0rKysrLSsrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcEBQgDAgH/xABGEAABAwICBgYFCQYEBwAAAAABAAIDBBEFIQYSMUFRYQcTIjJxgRRSkaGzIzNCYnJ0scHwNYKSsrTRJUNjZAgkg6KjwuH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AKNREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFs9HsAqK+cQUsZkec3HYyNu973nJreZ5DaQF54FhEtbUxU0ABlldqtubNaACXPcdzQ0EnkCuksAwqDDKdtLSi5yM0xAD5pLZvdy22buHmSEV0e6G6OBodiErqmXfFE50VO02F26w7b8759nwUvp9EMKY0NZQQEAWBfH1jvNzySfNbemgvm43KzGRN4Koitd0f4ROO3RMYdzoXSQkeTHAHzBUKx/oRjILsPqSHboaoZHkJWDLwLT4q4jAvl0SDknH9Hqqgk6urhdE431SbFjwLXLHi7XDMbCtWuvcTw+OoidDURtmhd3o5BceIO1p4EZjcqJ6ROjJ9EH1NHrS0Yzew5zUw+t67Prbt/ElVwiIoCIiAiIgIiICycPoJaiRsUEb5ZXZNZG0vcfIbuakegmg0+KSXHyVM02lqCLi/qMH0ne4b9wPQejGjtNh0XVUcYBIAlmNjLKRvkfv35ZAXyAQVRo70JzvAfXzNp25HqY7TTeBdfUafDWU5w7oqwqIAejvncPpzzyXJ5tjLW+5TyKn3uzKzY4lUQifo8w57dU0MIH1RIx38TXA+9RXH+hilkBNK59O+2TS4zQ+x3bHjrHw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" alt="" className="productUploadImg" />
                         <label for="file">
                             <Publish/>
                         </label>
                         <input type="file" name="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Product