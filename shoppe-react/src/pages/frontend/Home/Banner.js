
const Banner = () => {
    return (
        <div className="app__banner">
            <div className="grid wide">
                <div className="row sm-gutter app__banner-content">
                    <div className="col l-8 m-12 c-12">
                        <div className="full-home-banners__main">
                            <div className="full-home-banners__main-inner">
                                <a href className="full-home-banners__main-item active">
                                    <img src="https://cf.shopee.vn/file/8da7a277ab0b311b9152070ac7e2c217_xxhdpi" alt />
                                </a>
                                <a href className="full-home-banners__main-item">
                                    <img src="https://cf.shopee.vn/file/cbd678911fdabb577ec97dcb7efd7141_xxhdpi" alt />
                                </a>
                                <a href className="full-home-banners__main-item">
                                    <img src="https://cf.shopee.vn/file/6da82e01627122bf22b8bcc014fc90af_xxhdpi" alt />
                                </a>
                                <a href className="full-home-banners__main-item">
                                    <img src="https://cf.shopee.vn/file/a2fbff9877089bcc52674d5a4215d9c7_xxhdpi" alt />
                                </a>
                            </div>
                            <div className="full-home-banners__main-controls">
                                <i className="carosel-btn-left fa-solid fa-angle-left" />
                                <i className="carosel-btn-right fa-solid fa-angle-right" />
                            </div>
                            <div className="full-home-banners__main-indicators">
                                <div className="full-home-bannders__main-dot active" />
                                <div className="full-home-bannders__main-dot" />
                                <div className="full-home-bannders__main-dot" />
                                <div className="full-home-bannders__main-dot" />
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-12">
                        <div className="row sm-gutter-tablet">
                            <a href="#" className="col l-12 m-6 full-home-banners__right-link">
                                <div className="full-home-banners__right-img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/7838079195aa34290179f39d1b496d69_xhdpi")' }}>
                                </div>
                            </a>
                            <a href="#" className="col l-12 m-6 full-home-banners__right-link">
                                <div className="full-home-banners__right-img" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/735586d941db9bb7dfe1afcde9179d15_xhdpi")' }}>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Banner;
