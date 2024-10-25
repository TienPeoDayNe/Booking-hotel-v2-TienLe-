import React from 'react';
import { FaRegUserCircle, FaLock, FaCreditCard, FaRegEye, FaRegBell, FaUsers } from 'react-icons/fa';
import { MdOutlinePrivacyTip } from "react-icons/md";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PersonalSettings = () => {
    return (
        <>
            <Header />
            <div className="flex justify-center p-6 mt-24">
                <div className="w-1/5 border border-gray-300 rounded-md">
                    <ul className="space-y-2">
                        <li className="flex items-center py-2 px-4">
                            <FaRegUserCircle className="text-xl mr-2" />
                            <a href="/account/personal" className="text-blue-500">Thông tin cá nhân</a>
                        </li>
                        <div className="border-t border-gray-300" />
                        <li className="flex items-center py-2 px-4">
                            <FaRegEye className="text-xl mr-2" />
                            <a href="/account/preferences" className="text-blue-500">Cài đặt chung</a>
                        </li>
                        <div className="border-t border-gray-300" />
                        <li className="flex items-center py-2 px-4">
                            <FaLock className="text-xl mr-2" />
                            <a href="/account/security" className="text-blue-500">Cài đặt bảo mật</a>
                        </li>
                        <div className="border-t border-gray-300" />
                        <li className="flex items-center py-2 px-4">
                            <FaCreditCard className="text-xl mr-2" />
                            <a href="/account/payment" className="text-blue-500">Phương thức thanh toán</a>
                        </li>
                        <div className="border-t border-gray-300" />
                        <li className="flex items-center py-2 px-4">
                            <MdOutlinePrivacyTip className="text-xl mr-2" />
                            <a href="#" className="text-blue-500">Cài đặt quyền riêng tư</a>
                        </li>
                        <div className="border-t border-gray-300" />
                        <li className="flex items-center py-2 px-4">
                            <FaRegBell className="text-xl mr-2" />
                            <a href="#" className="text-blue-500">Cài đặt email</a>
                        </li>
                        <div className="border-t border-gray-300" />
                        <li className="flex items-center py-2 px-4">
                            <FaUsers className="text-xl mr-2" />
                            <a href="#" className="text-blue-500">Người đi cùng</a>
                        </li>
                    </ul>
                </div>
                {/* Chưa điền thì màu chữ nhạt 
            Điền rồi thì màu chữ đậm */}
                <div className="flex-1 rounded-lg p-4 ml-10 max-w-2xl">
                    <h2 className="text-2xl font-bold mb-2">Thông tin cá nhân</h2>
                    <h4 className="mb-3">Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra sao.</h4>
                    <div className="border-t border-gray-300 mb-4" />
                    <div className="mb-4">
                        <p className="font-semibold">Tên người dùng:</p>
                        <div className="flex items-center justify-between">
                            <p></p>
                            <button className="text-blue-600">Chỉnh sửa</button>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 mb-4" />
                    <div className="mb-4">
                        <p className="font-semibold">Họ:</p>
                        <div className="flex items-center justify-between">
                            <p>Điền họ vào đây</p>
                            <button className="text-blue-600">Chỉnh sửa</button>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 mb-4" />
                    <div className="mb-4">
                        <p className="font-semibold">Tên:</p>
                        <div className="flex items-center justify-between">
                            <p>Điền tên vào đây</p>
                            <button className="text-blue-600">Chỉnh sửa</button>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 mb-4" />
                    <div className="mb-4">
                        <p className="font-semibold">Địa chỉ email:</p>
                        <div className="flex items-center justify-between">
                            <p>ductuanht2706@gmail.com <span className="text-green-600">(Xác thực)</span></p>
                            <button className="text-blue-600">Chỉnh sửa</button>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 mb-4" />
                    <div className="mb-4">
                        <p className="font-semibold">Số điện thoại:</p>
                        <div className="flex items-center justify-between">
                            <p>Thêm số điện thoại của bạn</p>
                            <button className="text-blue-600">Chỉnh sửa</button>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 mb-4" />
                    <div className="mb-4">
                        <p className="font-semibold">Mật khẩu:</p>
                        <div className="flex items-center justify-between">
                            <p>Thay đổi mật khẩu</p>
                            <button className="text-blue-600">Chỉnh sửa</button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default PersonalSettings;
