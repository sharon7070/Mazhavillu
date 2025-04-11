
import React, { useState, useRef } from "react";
import "../../assets/css/Topselling.css";
import card_1 from "../../assets/images/card_1.png";
import card_2 from "../../assets/images/card_2.png";
import card_3 from "../../assets/images/card_3.png";
import card_4 from "../../assets/images/card_4.png";
import card_5 from "../../assets/images/card_5.png";

const TopSelling = () => {
    const carouselRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const products = [
        { img: card_1, alt: "topsellingcardoneimg" },
        { img: card_2, alt: "topsellingcardtwoimg" },
        { img: card_3, alt: "topsellingcardthreeimg" },
        { img: card_4, alt: "topsellingcardfourimg" },
        { img: card_5, alt: "topsellingcardfiveimg" },
        { img: card_5, alt: "topsellingcardsiximg" },
        { img: card_5, alt: "topsellingcardsiximg" },
        { img: card_5, alt: "topsellingcardsiximg" },
    ];

    const scroll = (direction) => {
        const container = carouselRef.current;
        const scrollAmount = 300;

        if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }

        setScrollPosition(container.scrollLeft);
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            setScrollPosition(carouselRef.current.scrollLeft);
        }
    };
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - carouselRef.current.offsetLeft;
        scrollLeft.current = carouselRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        carouselRef.current.scrollLeft = scrollLeft.current - walk;
    };

    return (

        <section className="top-selling-home mt-3 mb-3">
            <div className="container-fluid" id="top-selling" >
                <div className="mb-3">
                    <h4 className="top-sellinghead">Top Selling Products</h4>
                </div>

                <div
                    className="product-carousel-container"
                    ref={carouselRef}
                    onScroll={handleScroll}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }}
                >

                    {products.map((product, index) => (
                        <div className="product-card mt-0" key={index}>
                            <div className="card topcard">
                                <div className="cardimgdiv">
                                    <img className="topimg" src={product.img} alt={product.alt} />
                                    <div className="icons">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="wishlisttop bi bi-suit-heart-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="carttop bi bi-cart-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">KOTTHAS KITCHEN</h2>
                                    <h6 className="subheading">Chicken Masala (100g)</h6>
                                    <h5 className="card-text">
                                        4.8 <span className="star">★</span> (10k)
                                    </h5>
                                    <div className="row price row-2">
                                        <span className="col-6">
                                            ₹59.00
                                            <span>
                                                <b> ₹55.00</b>
                                            </span>
                                        </span>
                                        <div className="col-6 d-flex justify-content-end">
                                            <button className="btn topbtn">
                                                <b className="buynow">Buy Now</b>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>

    );
};

export default TopSelling;