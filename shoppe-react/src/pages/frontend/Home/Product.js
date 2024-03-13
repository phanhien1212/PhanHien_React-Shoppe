const Product = () => {
    return (
        <div className="app__container">
            <div className="grid wide">
                <div className="row sm-gutter app__content">
                    <div className="col l-2 m-0 c-0">
                        <div className="category-pc">
                            <nav className="category">
                                <div className="category__heading-wrapper">
                                    <i className="category__heading-icon fas fa-th-large" />
                                    <div className="category__heading">Danh Mục</div>
                                </div>
                                {/* Content category items */}
                                <ul className="category-list">
                                    <li className="category-item category-item--active">
                                        <div className="category-item__icon">
                                            <i className="fas fa-caret-right" />
                                        </div>
                                        <a href="#" className="category-item__link">Sản phẩm</a>
                                    </li>
                                    <li className="category-item">
                                        <div className="category-item__icon">
                                            <i className="fas fa-caret-right" />
                                        </div>
                                        <a href="#" className="category-item__link">Deal hot</a>
                                    </li>
                                    <li className="category-item">
                                        <div className="category-item__icon">
                                            <i className="fas fa-caret-right" />
                                        </div>
                                        <a href="#" className="category-item__link">Top bán chạy</a>
                                    </li>
                                    <li className="category-item">
                                        <div className="category-item__icon">
                                            <i className="fas fa-caret-right" />
                                        </div>
                                        <a href="#" className="category-item__link">Hàng mới</a>
                                    </li>
                                    <li className="category-item">
                                        <div className="category-item__icon">
                                            <i className="fas fa-caret-right" />
                                        </div>
                                        <a href="#" className="category-item__link">Sản phẩm Hot</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col l-10 m-12 c-12">
                        <div className="home-filter hide-on-mobile-tablet">
                            <span className="home-filter__label">Sắp xếp theo</span>
                            <button className="home-filter__btn btn">Phổ biến</button>
                            <button className="home-filter__btn btn btn--primary">Mới nhất</button>
                            <button className="home-filter__btn btn">Bán chạy</button>
                            <div className="select-input">
                                <span className="select-input__label">Giá</span>
                                <i className="select-input__icon fas fa-angle-down" />
                                {/* List option */}
                                <ul className="select-input__list">
                                    <li className="select-input__item">
                                        Giá: Thấp đến cao
                                    </li>
                                    <li className="select-input__item">
                                        Giá: Cao đến thấp
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <nav className="mobile-category">
                            <ul className="mobile-category__list">
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">Hộp bút chì màu</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">Áo phông Skeleton</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">Bộ lắp ghép ngôi nhà bí ẩn</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">Xe chiến đấu Ender</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">Villager Lego</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">Lợn nhồi bông Pigy</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">Bóng ném in hình Alex</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">Bình giữ nhiệt mùa đông</a>
                                </li>
                                <li className="mobile-category__item">
                                    <a href className="mobile-category__link">Túi giữ ẩm cho gia đình</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="home-product">
                            <div className="row sm-gutter">
                                {/* Product item */}
                                <div className="col l-2-4  c-6">
                                    <a href="/product-detail" id={0} className="home-product-item">
                                        <img src={require('../../../Images/ao4mattruoc.png')} className="home-product-item__img" />
                                        <div className="home-product-item__name"> [KHAI TRƯƠNG 149K-219K] Chuỗi Balo, Túi
                                            xách Minecraft được giảm giá đặc biệt nhân ngày mở bán </div>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> đ1.500.000 </span>
                                            <span className="home-product-item__price-current"> đ1.200.000 </span>
                                        </div>
                                        <div className="home-product-item__action">
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                            <span className="home-product-item__sold"> 12 đã bán </span>
                                        </div>
                                        <div className="product-favourite">
                                            <i className="fas fa-check" />
                                            <span> Yêu thích </span>
                                        </div>
                                        <div className="product-sale-off">
                                            <span className="product-sale-off__percent"> 23% </span>
                                            <span className="product-sale-off__label"> GIẢM </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col l-2-4  c-6">
                                    <a href="product-info.html" id={0} className="home-product-item">
                                        <img src={require('../../../Images/ao1mattruoc.png')} className="home-product-item__img" />
                                        <div className="home-product-item__name"> [KHAI TRƯƠNG 149K-219K] Chuỗi Balo, Túi
                                            xách Minecraft được giảm giá đặc biệt nhân ngày mở bán </div>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> đ1.500.000 </span>
                                            <span className="home-product-item__price-current"> đ1.200.000 </span>
                                        </div>
                                        <div className="home-product-item__action">
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                            <span className="home-product-item__sold"> 12 đã bán </span>
                                        </div>
                                        <div className="product-favourite">
                                            <i className="fas fa-check" />
                                            <span> Yêu thích </span>
                                        </div>
                                        <div className="product-sale-off">
                                            <span className="product-sale-off__percent"> 23% </span>
                                            <span className="product-sale-off__label"> GIẢM </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col l-2-4  c-6">
                                    <a href="product-info.html" id={0} className="home-product-item">
                                        <img src={require('../../../Images/ao2mattruoc.png')} className="home-product-item__img" />
                                        <div className="home-product-item__name"> [KHAI TRƯƠNG 149K-219K] Chuỗi Balo, Túi
                                            xách Minecraft được giảm giá đặc biệt nhân ngày mở bán </div>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> đ1.500.000 </span>
                                            <span className="home-product-item__price-current"> đ1.200.000 </span>
                                        </div>
                                        <div className="home-product-item__action">
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                            <span className="home-product-item__sold"> 12 đã bán </span>
                                        </div>
                                        <div className="product-favourite">
                                            <i className="fas fa-check" />
                                            <span> Yêu thích </span>
                                        </div>
                                        <div className="product-sale-off">
                                            <span className="product-sale-off__percent"> 23% </span>
                                            <span className="product-sale-off__label"> GIẢM </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col l-2-4  c-6">
                                    <a href="product-info.html" id={0} className="home-product-item">
                                        <img src={require('../../../Images/ao3mattruoc.png')} className="home-product-item__img" />
                                        <div className="home-product-item__name"> [KHAI TRƯƠNG 149K-219K] Chuỗi Balo, Túi
                                            xách Minecraft được giảm giá đặc biệt nhân ngày mở bán </div>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> đ1.500.000 </span>
                                            <span className="home-product-item__price-current"> đ1.200.000 </span>
                                        </div>
                                        <div className="home-product-item__action">
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                            <span className="home-product-item__sold"> 12 đã bán </span>
                                        </div>
                                        <div className="product-favourite">
                                            <i className="fas fa-check" />
                                            <span> Yêu thích </span>
                                        </div>
                                        <div className="product-sale-off">
                                            <span className="product-sale-off__percent"> 23% </span>
                                            <span className="product-sale-off__label"> GIẢM </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col l-2-4  c-6">
                                    <a href="product-info.html" id={0} className="home-product-item">
                                        <img src={require('../../../Images/20231218091440.jpg')} className="home-product-item__img" />
                                        <div className="home-product-item__name"> [KHAI TRƯƠNG 149K-219K] Chuỗi Balo, Túi
                                            xách Minecraft được giảm giá đặc biệt nhân ngày mở bán </div>
                                        <div className="home-product-item__price">
                                            <span className="home-product-item__price-old"> đ1.500.000 </span>
                                            <span className="home-product-item__price-current"> đ1.200.000 </span>
                                        </div>
                                        <div className="home-product-item__action">
                                            <div className="home-product-item__rating">
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="home-product-item__star--gold fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                            <span className="home-product-item__sold"> 12 đã bán </span>
                                        </div>
                                        <div className="product-favourite">
                                            <i className="fas fa-check" />
                                            <span> Yêu thích </span>
                                        </div>
                                        <div className="product-sale-off">
                                            <span className="product-sale-off__percent"> 23% </span>
                                            <span className="product-sale-off__label"> GIẢM </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Product;