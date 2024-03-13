const Account = () => {
    return (
        <div className="app__container">
            <div className="grid wide">
                <div className="row sm-gutter app__content">
                    <div className="col l-2 m-0 c-0">
                        <div className="category-pc">
                            <nav className="category">
                                <div className="AmWkJQ">
                                    <a className="_1O4r+C" href="/user/account/profile">
                                        <div className="shopee-avatar">
                                            <img className="shopee-avatar__img" src="https://down-vn.img.susercontent.com/file/a2f5c23b58a9c5fcd53233ee88aaf225_tn" />
                                        </div>
                                    </a>
                                    <div className="miwGmI">
                                        <div className="mC1Llc">bzzlnmtm6_</div>
                                        <div>
                                            <a className="_78QHr1" href="/user/account/profile">
                                                <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 4 }}>
                                                    <path d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48" fill="#9B9B9B" fillRule="evenodd" />
                                                </svg>Sửa hồ sơ</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Content category items */}
                                <ul className="category-list" style={{ marginTop: 10, marginLeft: -5 }}>
                                    <li className="category-item " >
                                        <div className="category-ac-item__icon">
                                            <img style={{ width: 20 }} src="https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4"></img>
                                        </div>
                                        <a href="/account" style={{ marginLeft: 6 }} className="category-item__link">Tài khoản của tôi</a>

                                    </li>
                                    <li className="category-item">
                                        <div className="category-ac-item__icon ">
                                            <img style={{ width: 20 }} src="https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078"></img>
                                        </div>
                                        <a href="/order" style={{ marginLeft: 6 }} className="category-item__link">Đơn mua</a>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col l-10 m-12 c-12 my-account" style={{ backgroundColor: "white" }}>
                        <div className="">
                            <h4>Hồ sơ của tôi</h4>
                            <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                        </div>


                        <div className="infor-account">
                            <div className="RCnc9v">
                                <div className="HrBg9Q">
                                    <form>
                                        <table className="bQkdAY">
                                            <tbody><tr>
                                                <td className="f1ZOv_ F4ruY9">
                                                    <label>Tên đăng nhập</label>
                                                </td>
                                                <td className="o6L4e0">
                                                    <div>
                                                        <div className="NGoa5Z">
                                                            <input type="text" placeholder className="kKnR04" defaultValue="bzzlnmtm6_" />
                                                        </div>
                                                        <div className="JQaxZl">Tên Đăng nhập chỉ có thể thay đổi một lần.</div>
                                                    </div>
                                                </td>
                                            </tr>
                                                <tr>
                                                    <td className="f1ZOv_">
                                                        <label>Tên</label>
                                                    </td>
                                                    <td className="o6L4e0">
                                                        <div>
                                                            <div className="NGoa5Z">
                                                                <input type="text" placeholder className="kKnR04" defaultValue />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="f1ZOv_">
                                                        <label>Email</label>
                                                    </td>
                                                    <td className="o6L4e0">
                                                        <div className="e_Vt__">
                                                            <div className="PBfYlq">ph************@gmail.com</div>
                                                            <button className="clo49Q">Thay đổi</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="f1ZOv_">
                                                        <label>Số điện thoại</label>
                                                    </td>
                                                    <td className="o6L4e0">
                                                        <div className="e_Vt__">
                                                            <div className="PBfYlq">
                                                            </div>
                                                            <button className="clo49Q">Thêm</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="f1ZOv_">
                                                        <label>Giới tính</label>
                                                    </td>
                                                    <td className="o6L4e0">
                                                        <div className="prDHtK">
                                                            <div className="stardust-radio-group" role="radiogroup">
                                                                <div className="stardust-radio" tabIndex={0} role="radio" aria-checked="false">
                                                                    <div className="stardust-radio-button">
                                                                        <div className="stardust-radio-button__outer-circle">
                                                                            <div className="stardust-radio-button__inner-circle">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="stardust-radio__content">
                                                                        <div className="stardust-radio__label">Nam</div>
                                                                    </div>
                                                                </div>
                                                                <div className="stardust-radio" tabIndex={0} role="radio" aria-checked="false">
                                                                    <div className="stardust-radio-button">
                                                                        <div className="stardust-radio-button__outer-circle">
                                                                            <div className="stardust-radio-button__inner-circle">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="stardust-radio__content">
                                                                        <div className="stardust-radio__label">Nữ</div>
                                                                    </div>
                                                                </div>
                                                                <div className="stardust-radio" tabIndex={0} role="radio" aria-checked="false">
                                                                    <div className="stardust-radio-button">
                                                                        <div className="stardust-radio-button__outer-circle">
                                                                            <div className="stardust-radio-button__inner-circle">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="stardust-radio__content">
                                                                        <div className="stardust-radio__label">Khác</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="f1ZOv_">
                                                        <label>Ngày sinh</label>
                                                    </td>
                                                    <td className="o6L4e0">

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="f1ZOv_">
                                                        <label>
                                                        </label>
                                                    </td>
                                                    <td className="o6L4e0">
                                                        <button type="button" className="btn btn-solid-primary btn--m btn--inline" aria-disabled="false">Lưu</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                                <div className="nv7bOz">
                                    <div className="TJWfNh">
                                        <div className="nMPYiw" role="header">
                                            <div className="cW0oBM" style={{ backgroundImage: 'url("https://down-vn.img.susercontent.com/file/a2f5c23b58a9c5fcd53233ee88aaf225")' }}>
                                            </div>
                                        </div>
                                        <input className="XbWdh7" type="file" accept=".jpg,.jpeg,.png" />
                                        <button type="button" className="btn btn-light btn--m btn--inline">Chọn ảnh</button>
                                        <div className="T_8sqN">
                                            <div className="JIExfq">Dụng lượng file tối đa 1 MB</div>
                                            <div className="JIExfq">Định dạng:.JPEG, .PNG</div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Account;