let Smarttv = (props) => {
    return (
        <>
        
        <div className="parentBlock">
            <div id='imageBlock'>
            <div className='img'><img src={props.src} width='200px' alt="Smart Android TV "/>
            </div>
                <input type='checkbox' className='checkBox'></input>
                <label>Add to Compare</label>
            </div>
            <div className="detailsBlock">
                <h3 className="tv-title">
                    {props.tvname}
                </h3>
                <div className="rating">
                <span className="ratingNum">{props.ratingNum} ★</span>
                <span className="ratingsCount">{props.ratingsCount} Ratings & {props.reviewsCount} Reviews</span>
                </div>
                <ul className="tv-info">
                <li>Operating System: {props.osname}</li>
                <li>{props.quality}</li>
                <li>Launch Year: {props.launchyear}</li>
                <li>1 Year {props.warranty}</li>
                </ul>
            </div>
            <div id='priceBlock'>
                <div className="tv-price">
                    <span className="price">₹{props.newprice}</span>
                    <span className='assuredLogo'><img height="21" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" alt='assured'/></span>
                    <span className="oldprice">₹{props.oldprice}</span>
                    <span className="discount">{props.discount}% off</span>
                    <p>Free delivery</p>
                    <p className="hotdeal">Hot Deal</p>
                    <p>Upto <b>₹3,100</b> Off on Exchange</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Smarttv;