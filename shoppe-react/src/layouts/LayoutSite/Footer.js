const Footer = () => {
    return (

        <footer className="footer">
            <div className="grid wide footer__content">
                <div className="row">
                    <div className="col l-2-4 c-6">
                        <div className="footer__heading">Chăm sóc khách hàng</div>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href className="footer-item__link">Trung tâm trợ giúp</a>
                            </li>
                            <li className="footer-item">
                                <a href className="footer-item__link">Shopee</a>
                            </li>
                            <li className="footer-item">
                                <a href className="footer-item__link">Hướng dẫn mua hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 c-6">
                        <div className="footer__heading">Giới thiệu</div>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href className="footer-item__link">Giới thiệu</a>
                            </li>
                            <li className="footer-item">
                                <a href className="footer-item__link">Tuyển dụng</a>
                            </li>
                            <li className="footer-item">
                                <a href className="footer-item__link">Điều khoản</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4  c-6">
                        <div className="footer__heading">Danh mục</div>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href className="footer-item__link">Quần áo</a>
                            </li>
                            <li className="footer-item">
                                <a href className="footer-item__link">Mũ</a>
                            </li>
                            <li className="footer-item">
                                <a href className="footer-item__link">Nón</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4  c-6">
                        <div className="footer__heading">Theo dõi chúng tôi</div>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <a href className="footer-item__link">
                                    <i className="footer-item__icon fab fa-facebook" />
                                    Facebook
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href className="footer-item__link">
                                    <i className="footer-item__icon fab fa-instagram" />
                                    Instagram
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href className="footer-item__link">
                                    <i className="footer-item__icon fab fa-twitter-square" />
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-8 c-12">
                        <div className="footer__heading">Vào cửa hàng trên ứng dụng</div>
                        <div className="footer__download">
                            <img src={require('../../Images/a5e589e8e118e937dc660f224b9a1472.png')} alt="Download QR" className="footer__download-qr" />
                            <div className="footer__download-apps">
                                <a href className="footer__download-app-link">
                                    <img src={require('../../Images/google_play.png')} alt="Google play" className="footer__download-app-img" />
                                </a>
                                <a href className="footer__download-app-link">
                                    <img src={require('../../Images/app_store.png')} alt="App store" className="footer__download-app-img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="grid wide">
                    <p className="footer__text">© 2020 - Bản quyền thuộc về Shopee</p>
                </div>
            </div>
        </footer>


    );
}

export default Footer;
