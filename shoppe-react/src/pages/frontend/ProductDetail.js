const ProductDetail = () => {
    return (
        <div id="product-info-container">
            <div className="grid wide">
                {/* Product slide & content */}
                <div className="row sm-gutter product">
                    <div className="col l-5 c-12">
                        <div className="product-slide">
                            <img src={require('../../Images/ao1mattruoc.png')} className="product__img" />
                            <div className="product__cards product__cards-mobile">
                                <button className="product__cards-btn product__cards-btn--prev" style={{ display: 'none' }}>
                                    <i className="fas fa-chevron-left" />
                                </button>
                                <button className="product__cards-btn product__cards-btn--next" style={{ display: 'block' }}>
                                    <i className="fas fa-chevron-right" />
                                </button>
                                <div className="product__cards-container">
                                    <div className="product__card-wrapper">
                                        <div className="product__card">
                                            <img src={require('../../Images/ao1mattruoc.png')} className="product__card-img" />
                                        </div>
                                    </div>
                                    <div className="product__card-wrapper">
                                        <div className="product__card">
                                            <img className="product__card-img" />
                                        </div>
                                    </div>
                                    <div className="product__card-wrapper">
                                        <div className="product__card">
                                            <img className="product__card-img" />
                                        </div>
                                    </div>
                                    <div className="product__card-wrapper">
                                        <div className="product__card">
                                            <img className="product__card-img" />
                                        </div>
                                    </div>
                                    <div className="product__card-wrapper">
                                        <div className="product__card">
                                            <img  className="product__card-img" />
                                        </div>
                                    </div>
                                    <div className="product__card-wrapper">
                                        <div className="product__card">
                                            <img className="product__card-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product__actions hide-on-mobile-tablet">
                                <div className="product__sharing-icons hide-on-mobile-tablet">
                                    <div className="text">Chia sẻ:</div>
                                    <a href="#" className="product__action-icon messenger">
                                        <i className="fab fa-facebook-messenger" />
                                    </a>
                                    <a href="#" className="product__action-icon facebook">
                                        <i className="fab fa-facebook" />
                                    </a>
                                    <a href="#" className="product__action-icon google">
                                        <i className="fab fa-google-plus" />
                                    </a>
                                    <a href="#" className="product__action-icon pinterest">
                                        <i className="fab fa-pinterest" />
                                    </a>
                                    <a href="#" className="product__action-icon twitter">
                                        <i className="fab fa-twitter-square" />
                                    </a>
                                </div>
                                <div className="product__liking">
                                    <i className="product__action-icon product__action-icon--liking far fa-heart" />
                                    <a className="text">Đã thích (2,1k)</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-7 c-12">
                        <div className="product-content">
                            <div className="product__title">
                                <div className="label-loving">
                                    Yêu Thích
                                </div>
                                <span>[KHAI TRƯƠNG 149K-219K] Chuỗi Balo, Túi xách Minecraft được giảm giá đặc biệt nhân
                                    ngày mở bán</span>
                            </div>
                            <div className="product__status">
                                <div className="product__status-rating">
                                    <div className="product__status-rating-point underscore">4.9</div>
                                    <div className="product__status-rating-stars">
                                        <i className="product__status-rating-star fas fa-star" />
                                        <i className="product__status-rating-star fas fa-star" />
                                        <i className="product__status-rating-star fas fa-star" />
                                        <i className="product__status-rating-star fas fa-star" />
                                        <i className="product__status-rating-star fas fa-star" />
                                    </div>
                                </div>
                                <div className="product__status-reviewing hide-on-mobile">
                                    <span className="product__status-reviewing-qnt underscore">78</span>
                                    <span className="product__status-text pr-text">Đánh Giá</span>
                                </div>
                                <div className="product__status-sold">
                                    <span className="product__status-sold-qnt">251</span>
                                    <span className="product__status-text pr-text">Đã Bán</span>
                                </div>
                                <div className="product__liking">
                                    <i className="product__action-icon product__action-icon--liking far fa-heart" />
                                    <a className="text hide-on-mobile">Đã thích (2,1k)</a>
                                </div>
                            </div>
                            <div className="product__price">
                                <div className="product__price-main">
                                    <span className="product__price-old">₫396.000</span>
                                    <div className="product__price-current">
                                        <span className="product__price-new">₫219.000</span>
                                        <span className="product__price-label bgr-orange">33% GIẢM</span>
                                    </div>
                                </div>
                                <div className="product__price-slogan hide-on-mobile-tablet">
                                    <i className="product__price-icon-tag fas fa-tags" />
                                    <span className="product__price-slogan-text">Ở đâu rẻ hơn, Minecraft Shop hoàn
                                        tiền</span>
                                    <i className="product__price-icon-question far fa-question-circle" />
                                </div>
                            </div>
                            <div className="product__info">
                                <div className="product__codes hide-on-mobile-tablet">
                                    <label className="product__codes-label width-label">Mã Giảm Giá Của Shop</label>
                                    <div className="product__codes-wrapper">
                                        <div className="product__code">Giảm ₫3k</div>
                                        <div className="product__code">Giảm ₫5k</div>
                                        <div className="product__code">Giảm ₫8k</div>
                                    </div>
                                </div>
                                <div className="product__combo hide-on-mobile-tablet">
                                    <label className="product__combo-label width-label">Combo Khuyến Mãi</label>
                                    <div className="product__combo-note">Mua 2 &amp; giảm 5%</div>
                                </div>
                                <div className="product__shipping">
                                    <label className="product__shipping-label width-label">Vận Chuyển</label>
                                    <div className="product__shipping-wrapper">
                                        <div className="product__shipping-free">
                                            <div className="product__shipping-free-icon-wrapper">
                                                <i className="product__shipping-free-icon fas fa-truck-loading" />
                                            </div>
                                            <div className="product__shipping-free-wrapper">
                                                <div className="product__shipping-free-title">Miễn Phí Vận Chuyển</div>
                                                <div className="product__shipping-free-note">Miễn Phí Vận Chuyển khi đơn đạt
                                                    giá trị tối thiểu</div>
                                            </div>
                                        </div>
                                        <div className="product__shipping-to">
                                            <i className="product__shipping-to-icon-truck fas fa-truck" />
                                            <div className="product__shipping-to-wrapper">
                                                <div className="product__shipping-to-destination">
                                                    <label className="product__shipping-to-label">Vận Chuyển Tới</label>
                                                    <div className="product__shipping-to-cities">
                                                        <span className="product__shipping-to-city">Huyện Ba Vì, Hà
                                                            Nội</span>
                                                        <i className="product__shipping-to-icon fas fa-chevron-down" />
                                                    </div>
                                                </div>
                                                <div className="product__shipping-to-fee">
                                                    <label className="product__shipping-to-label">Phí Vận Chuyển</label>
                                                    <div className="product__shipping-to-fee-wrapper">
                                                        <div className="product__shipping-to-fees">₫10.500</div>
                                                        <i className="product__shipping-to-icon fas fa-chevron-down" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__options">
                                    <label className="product__options-label width-label">Chọn loại hàng</label>
                                    <div className="product__options-items-wrapper">
                                        <div className="product__options-items">
                                        </div>
                                        <div className="product__options-items-error-message">Vui lòng chọn Phân loại hàng
                                        </div>
                                    </div>
                                </div>
                                <div className="product__qnt hide-on-mobile">
                                    <label className="product__qnt-label width-label">Số Lượng</label>
                                    <div className="shop__qnt-btns">
                                        <button className="shop__qnt-btn shop__qnt-btn--dec">
                                            <i className="shop__qnt-btn-icon fas fa-minus" />
                                        </button>
                                        <input className="shop__qnt-input" type="text" defaultValue={1} />
                                        <button className="shop__qnt-btn shop__qnt-btn--inc">
                                            <i className="shop__qnt-btn-icon fas fa-plus" />
                                        </button>
                                    </div>
                                    <div className="product__qnt-note">
                                        <span className="product__qnt-note-num">1100</span>
                                        sản phẩm có sẵn
                                    </div>
                                </div>
                                <div className="product-btns-main">
                                    <button className="product-btn-main product-btn-main__msg clear-btn hide-on-tablet">
                                        <i className="product-btn-main__msg-icon far fa-comment-dots" />
                                    </button>
                                    <button className="product-btn-main product-btn-main__adding">
                                        <i className="product-btn-main__adding-icon fas fa-cart-plus" />
                                        <span className="product-btn-main__text product-btn-main__adding-text hide-on-mobile">Thêm
                                            Vào Giỏ Hàng</span>
                                    </button>
                                    <button onclick="document.location.href=this.getAttribute('href');" href="product-cart.html" className="product-btn-main product-btn-main__buying">
                                        <span className="product-btn-main__text product-btn-main__buying-text">Mua
                                            Ngay</span>
                                    </button>
                                </div>
                            </div>
                            <div className="product__guarantee-container">
                                <a href="*" className="product__guarantee">
                                    <div className="product__guarantee-wrapper">
                                        <span>
                                            <i className="product__guarantee-icon fas fa-clipboard-check" />
                                        </span>
                                        <div className="product__guarantee-text">Minecraft Shop Đảm Bảo</div>
                                    </div>
                                    <span className="product__guarantee-note">3 Ngày Trả Hàng / Hoàn Tiền</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid wide">
                {/* Product combo cards */}
                <div className="products-combo">
                    <div className="products-combo-header">
                        <div className="products-combo__title">
                            <span className="products-combo__text">Combo khuyến mãi</span>
                            <div className="products-combo__note">Mua 2 &amp; giảm 5%</div>
                        </div>
                        <a href="#" className="products-combo__see-more hide-on-mobile">
                            <span>Xem thêm</span>
                            <i className="fas fa-chevron-right" />
                        </a>
                    </div>
                    <div className="products-combo-container">
                        <div className="products-combo__cards">
                        </div>
                        <div className="products-combo__checkout hide-on-mobile">
                            <div className="products-combo__checkout-wrapper">
                                <div className="products-combo__checkout-total">
                                    <span className="products-combo__checkout-label">Tổng cộng</span>
                                    <span className="products-combo__checkout-total-old">₫0</span>
                                    <span className="products-combo__checkout-total-current">₫0</span>
                                </div>
                                <div className="products-combo__checkout-save">
                                    <div className="products-combo__checkout-label">Tiết kiệm</div>
                                    <span className="products-combo__checkout-save-price">₫0</span>
                                </div>
                            </div>
                            <button className="products-combo__checkout-btn">
                                <i className="fas fa-cart-plus" />
                                <span className="products-combo__checkout-btn-text hide-on-tablet">Bấm để mua khuyến
                                    mãi</span>
                                <span className="products-combo__checkout-btn-text products-combo__checkout-btn-tablet">Mua
                                    khuyến mãi</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid wide">
                {/* Product shop */}
                <div className="row sm-gutter product-shop">
                    <div className="product-shop__contact">
                        <a href="#" className="product-shop__contact-img-link">
                            <div className="product-shop__contact-avatar-wrapper">
                                <img className="product-shop__contact-avatar" src={require('../../Images/shop_manager.png')} />
                            </div>
                            <span className="label-loving">Yêu Thích</span>
                        </a>
                        <div className="product-shop__contact-container">
                            <div className="product-shop__contact-info">
                                <div className="product-shop__contact-name">toykids</div>
                                <div className="product-shop__contact-online-time">Online 28 Phút Trước</div>
                            </div>
                            <div className="product-shop__contact-main">
                                <button className="product-shop__contact-btn product-shop__contact-message-btn hide-on-mobile">
                                    <i className="product-shop__contact-icon far fa-comment-alt" />
                                    <span className="product-shop__contact-message-text">Chat Ngay</span>
                                </button>
                                <a href="#" className="product-shop__contact-btn product-shop__contact-viewing">
                                    <i className="product-shop__contact-icon fas fa-store" />
                                    <div className="product-shop__contact-viewing-text">Xem Shop</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="product-shop__side hide-on-mobile-tablet" >
                        <div className="product-shop__side-container">
                            <div className="product-shop__side-wrapper">
                                <label className="product-shop__side-label">Đánh giá</label>
                                <div className="product-shop__side-qnt">220</div>
                            </div>
                            <a href="#" className="product-shop__side-wrapper">
                                <label className="product-shop__side-label">Sản phẩm</label>
                                <div href="#" className="product-shop__side-qnt product-shop__side-qnt--link">12</div>
                            </a>
                        </div>
                        <div className="product-shop__side-container">
                            <div className="product-shop__side-wrapper">
                                <label className="product-shop__side-label">Tỉ Lệ Phản Hồi</label>
                                <div className="product-shop__side-qnt">95%</div>
                            </div>
                            <div className="product-shop__side-wrapper">
                                <label className="product-shop__side-label">Thời Gian Phản Hồi</label>
                                <div className="product-shop__side-qnt">trong vài phút</div>
                            </div>
                        </div>
                        <div className="product-shop__side-container">
                            <div className="product-shop__side-wrapper">
                                <label className="product-shop__side-label">Tham gia</label>
                                <div className="product-shop__side-qnt">6 tháng trước</div>
                            </div>
                            <div className="product-shop__side-wrapper">
                                <label className="product-shop__side-label">Người theo dõi</label>
                                <div className="product-shop__side-qnt">1.5k</div>
                            </div>
                        </div>
                    </div>
                    {/* Product shop slide on mobile */}
                    <div className="product-shop__side-mobile">
                        <div className="product-shop__side-wrapper">
                            <label className="product-shop__side-label">Đánh giá</label>
                            <div className="product-shop__side-qnt">220</div>
                        </div>
                        <a href="#" className="product-shop__side-wrapper">
                            <label className="product-shop__side-label">Sản phẩm</label>
                            <div href="#" className="product-shop__side-qnt product-shop__side-qnt--link">12</div>
                        </a>
                        <div className="product-shop__side-wrapper">
                            <label className="product-shop__side-label">Tỉ Lệ Phản Hồi</label>
                            <div className="product-shop__side-qnt">95%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid wide">
                <div className="row sm-gutter product-content__side" style={{ paddingBottom: 25 }}>
                    {/* Product left content */}
                    <div className="product-content--left">
                        {/* Product details */}
                        <div className="product-details">
                            <div className="product-detail">
                                <div className="product-detail__title">Chi tiết sản phẩm</div>
                                <div className="product-details__wrapper">
                                    <div className="product-detail__wrapper">
                                        <span className="product-detail__label">Danh Mục</span>
                                        <div className="product-detail__links">
                                            <a className="product-detail__link" href="/">
                                                <span>Minecraft Shop</span>
                                            </a>
                                            <svg className="product-detail__icon" enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0}>
                                                <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                                                </path>
                                            </svg>
                                            <a className="product-detail__link" href="/">
                                                <span>Phụ kiện</span>
                                            </a>
                                            <svg className="product-detail__icon" enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0}>
                                                <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z">
                                                </path>
                                            </svg>
                                            <a className="product-detail__link" href="/">
                                                <span>Balo</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-detail__wrapper">
                                        <span className="product-detail__label">Thương hiệu</span>
                                        <a className="product-detail__link" href="/">
                                            <span>No brand</span>
                                        </a>
                                    </div>
                                    <div className="product-detail__wrapper">
                                        <span className="product-detail__label">Chất liệu</span>
                                        <span className="product-detail__text">Vải</span>
                                    </div>
                                    <div className="product-detail__wrapper">
                                        <span className="product-detail__label">Xuất xứ</span>
                                        <span className="product-detail__text">Mỹ</span>
                                    </div>
                                    <div className="product-detail__wrapper">
                                        <span className="product-detail__label">Kho hàng</span>
                                        <span className="product-detail__text">1911</span>
                                    </div>
                                    <div className="product-detail__wrapper">
                                        <span className="product-detail__label">Gửi từ</span>
                                        <span className="product-detail__text">Quận Hoàng Mai, Hà Nội</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-description">
                                <div className="product-description__title">Mô tả sản phẩm</div>
                                <span className="product-description__content">🎉 Balo Minecraft creeper backpack là mẫu ba
                                    lô siêu hot mới ra mắt năm 2017. Chất liệu: 100% polyester 🎉
                                    *** Kích thước: 43x30x14cm ***
                                    🌼 Sản xuất bởi J!NX
                                    🌼 Hàng chính hãng USA<span className="dots"> ...</span><span className="text-more hidden">
                                        🌼 Ba lô được thiết kế dựa trên hoa văn của creeper, với màu xanh làm chủ đạo,
                                        bên
                                        ngoài là màu xanh nền cỏ của creeper.
                                        🌼 Ngăn chính gồm các hoa văn in mặt của creeper màu ghi, nhìn xa giống như một
                                        hang
                                        đá vậy
                                        🌼 Ngăn phụ bên ngoài in hình TNT giống như khối thuốc nổ chứa trong người con
                                        creeper ^^
                                        🌼 Phần phía lưng cũng có hình creeper được may vào lớp đệm, mỗi khóa kéo đều là
                                        một
                                        khuôn mặt của creeper
                                        🌼 Trọng lượng của ba lô rất nhẹ chỉ hơn 300g</span></span>
                                <button className="read-more-btn clear-btn">
                                    <span className="read-more-btn__text">Xem thêm</span>
                                    <span className="read-more-btn__icon--down">
                                        <i className="read-more-btn__icon fas fa-angle-down" />
                                    </span>
                                    <span className="read-more-btn__icon--up hidden">
                                        <i className="read-more-btn__icon fas fa-angle-up" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        {/* Product reviews */}
                        <div className="product-reviews">
                            <div className="product-reviews__header">ĐÁNH GIÁ SẢN PHẨM</div>
                            {/* Stars on mobile */}
                            <div className="product-reviews__rating-mobile">
                                <div className="product-reviews__rating-stars product-reviews__rating-stars-mobile">
                                    <i className="product-reviews__rating-star fas fa-star" />
                                    <i className="product-reviews__rating-star fas fa-star" />
                                    <i className="product-reviews__rating-star fas fa-star" />
                                    <i className="product-reviews__rating-star fas fa-star" />
                                    <i className="product-reviews__rating-star fas fa-star" />
                                </div>
                                <div className="product-reviews__rating-score-wrapper">
                                    <span className="product-reviews__rating-score">4.9</span><span className="product-reviews__rating-score-out-of">/5</span>
                                </div>
                                <div className="product-reviews__total">(44 đánh giá)</div>
                            </div>
                            <div className="product-reviews__container hide-on-mobile">
                                <div className="product-reviews__rating">
                                    <div className="product-reviews__rating-score-wrapper">
                                        <span className="product-reviews__rating-score">4.9</span>
                                        <span className="product-reviews__rating-score-out-of"> trên 5 </span>
                                    </div>
                                    <div className="product-reviews__rating-stars">
                                        <i className="product-reviews__rating-star fas fa-star" />
                                        <i className="product-reviews__rating-star fas fa-star" />
                                        <i className="product-reviews__rating-star fas fa-star" />
                                        <i className="product-reviews__rating-star fas fa-star" />
                                        <i className="product-reviews__rating-star fas fa-star" />
                                    </div>
                                </div>
                                <div className="product-reviews__filters">
                                    <div className="product-reviews__filter product-reviews__filter--active">tất cả</div>
                                    <div className="product-reviews__filter">5 Sao (0)</div>
                                    <div className="product-reviews__filter">4 Sao (0)</div>
                                    <div className="product-reviews__filter">3 Sao (0)</div>
                                    <div className="product-reviews__filter">2 Sao (0)</div>
                                    <div className="product-reviews__filter">1 Sao (0)</div>
                                    <div className="product-reviews__filter product-reviews__filter--comment">Có Bình luận
                                        (0)</div>
                                    <div className="product-reviews__filter product-reviews__filter--photo">Có hình ảnh /
                                        video (0)</div>
                                </div>
                            </div>
                            <div className="product-reviews__comments">
                                <div className="product-reviews__comment">Rất tiếc, hiện chưa có bình luận nào</div>
                            </div>
                        </div>
                    </div>
                    <div className="product-content--right hide-on-mobile-tablet">
                        {/* Product vouchers */}
                        <div className="product-vouchers hide-on-mobile">
                            <div className="product-vouchers__header">Mã giảm giá của Shop</div>
                            <div className="product-vouchers__list">
                                <div className="product-vouchers__item">
                                    <div className="product-vouchers__item-wrapper">
                                        <div className="product-vouchers__item-title">Giảm ₫3k Đơn Tối Thiểu ₫89k</div>
                                        <div className="product-vouchers__item-expiry">HSD:31-03-2021</div>
                                    </div>
                                    <div className="product-vouchers__btn-wrapper">
                                        <button className="product-vouchers__btn-save">Lưu</button>
                                        <div className="product-vouchers__border-dashed" />
                                    </div>
                                    <div className="product-vouchers__border-circle">
                                        <div className="product-vouchers__border-circle-edge" />
                                    </div>
                                </div>
                                <div className="product-vouchers__item">
                                    <div className="product-vouchers__item-wrapper">
                                        <div className="product-vouchers__item-title">Giảm ₫3k Đơn Tối Thiểu ₫89k</div>
                                        <div className="product-vouchers__item-expiry">HSD:31-03-2021</div>
                                    </div>
                                    <div className="product-vouchers__btn-wrapper">
                                        <button className="product-vouchers__btn-save">Lưu</button>
                                        <div className="product-vouchers__border-dashed" />
                                    </div>
                                    <div className="product-vouchers__border-circle">
                                        <div className="product-vouchers__border-circle-edge" />
                                    </div>
                                </div>
                                <div className="product-vouchers__item">
                                    <div className="product-vouchers__item-wrapper">
                                        <div className="product-vouchers__item-title">Giảm ₫3k Đơn Tối Thiểu ₫89k</div>
                                        <div className="product-vouchers__item-expiry">HSD:31-03-2021</div>
                                    </div>
                                    <div className="product-vouchers__btn-wrapper">
                                        <button className="product-vouchers__btn-save">Lưu</button>
                                        <div className="product-vouchers__border-dashed" />
                                    </div>
                                    <div className="product-vouchers__border-circle">
                                        <div className="product-vouchers__border-circle-edge" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product hot sales */}
                        <div className="product-hot-sales hide-on-mobile-tablet">
                            <div className="product-hot-sales__header">Top Sản Phẩm Bán Chạy</div>
                            <a href="#" className="product-hot-sales__link">
                                <div>
                                    <img className="product-hot-sales__item-img" src={require('../../Images/ao2mattruoc.png')} />
                                </div>
                                <div className="product-hot-sales__item-wrapper">
                                    <div className="product-hot-sales__item-name">Sách hướng dẫn chơi Minecraft Dungeons bìa
                                        cứng</div>
                                    <div className="product-hot-sales__item-price">₫219.000</div>
                                </div>
                            </a>
                            <a href="#" className="product-hot-sales__link">
                                <div>
                                    <img className="product-hot-sales__item-img" src={require('../../Images/ao3mattruoc.png')} />
                                </div>
                                <div className="product-hot-sales__item-wrapper">
                                    <div className="product-hot-sales__item-name">Áo thun ngắn Steve và Alex sinh tồn</div>
                                    <div className="product-hot-sales__item-price">₫125.900</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductDetail;