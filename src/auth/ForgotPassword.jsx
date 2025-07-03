import { MdKeyboardArrowDown, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Loader from '../reusable_component/Loader/Loader';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import loginPhone from "../assets/usaAsset/phone1.png"
import phoneUsa from "../assets/usaAsset/phone1.png"
import passwordUsa from "../assets/usaAsset/password1.png"
import verification from "../assets/usaAsset/verification1.png"
import { useState } from 'react';

function ForgotPassword() {
    const [loading, setLoading] = useState(false);
    const [checkAgreement, setCheckAgreement] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [allInputs, setAllInputs] = useState({
        mobile: "",
        otp: "",
        userid: "",
        email: "",
        password: "",
        password_confirmation: "",
        referral_code: "",
    });
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <>
            {loading && <Loader setLoading={setLoading} loading={loading} />}
            <section className="w-full flex flex-col items-start dark:text-[#E3EFFF]">
                <div className="w-full bg-gradient-to-b from-[#7AFEC3] to-[#02AFB6]">
                    <div className=" text-[#E3EFFF] pb-5">
                        <h1 className="text-sm px-5 font-bold mt-2">Forgot password</h1>
                        <p className="text-[10px] px-5 my-2">Please retrieve/change your password through your mobile phone number or email </p>
                    </div>
                </div>
                <div className="bg-[#05012B] px-5 flex flex-col h-full w-full  items-center justify-center mx-auto lg:py-0">
                    <div className="flex  flex-col items-center justify-center w-full py-2 border-b-2 mx-5 text-[#00ECBE] border-[#00ECBE]" >
                        <div>
                            <img className='w-6 h-6' src={loginPhone} alt="sd" />
                        </div>
                        <div className="text-sm mt-2"> phone reset </div>
                    </div>
                    <div className="w-full h-full bg-[#05012b] text-[#E3EFFF]">
                        <form className="space-y-4 w-full md:space-y-6 my-5" action="#">
                            <div className="w-full">
                                <div className=' flex items-center py-2 gap-2'>
                                    <div>
                                        <img className='w-6 h-6' src={phoneUsa} alt="sd" />
                                    </div>
                                    <label htmlFor="mobile" className=" text-sm text-[#E3EFFF] font-[400]">Phone number</label>
                                </div>
                                <div className='flex items-center w-full gap-1'>
                                    <p className='bg-customdarkBluej w-[30%] text-[#E3EFFF] p-2.5 flex items-center rounded-md'>+91 <MdKeyboardArrowDown size={20} />
                                    </p>
                                    <input
                                        value={allInputs.mobile}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            // Allow only numbers (0-9)
                                            if (/^\d*$/.test(value)) {
                                            setAllInputs({
                                                ...allInputs,
                                                mobile: value,
                                            });
                                            }
                                        }}
                                        type="text"
                                        name="mobile"
                                        id="mobile"
                                        placeholder="Enter your phone number"
                                        className={`col-span-[60%] bg-customdarkBluej text-[14px] focus:border-[1px] border-customlightBlue rounded-md outline-none w-full pl-3 p-2.5 text-[#E3EFFF]placeholder:text-[#E3EFFF] text-[#E3EFFF]`}
                                    />

                                </div>
                            </div>

                            <div className="relative">
                                <div className='flex items-center py-2 gap-2'>
                                    <div>
                                        <img className='w-6 h-6' src={passwordUsa} alt="sd" />
                                    </div>
                                    <label htmlFor="password" className="text-sm text-[#E3EFFF] font-[400]">A new Password</label>
                                </div>
                                <input
                                    onChange={(e) => {
                                        setAllInputs({
                                            ...allInputs,
                                            password: e.target.value,
                                        });
                                    }}
                                    type={passwordVisible ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    placeholder="A new Password"
                                    className="bg-customdarkBluej focus:border-[1px] text-[14px] border-customlightBlue rounded-md outline-none w-full pl-3 p-2.5 placeholder:text-[#E3EFFF] text-[#E3EFFF] "
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 top-10 pr-3 flex items-center text-[#E3EFFF] opacity-25"
                                >
                                    {passwordVisible ? <MdVisibilityOff size={20} /> : <MdVisibility className='dark:text-[#E3EFFF] opacity-65' size={20} />}
                                </button>
                            </div>
                            <div className="relative">
                                <div className='flex items-center py-2 gap-2'>
                                    <div>
                                        <img className='w-6 h-6' src={passwordUsa} alt="sd" />
                                    </div>
                                    <label htmlFor="password_confirmation" className="text-sm text-[#E3EFFF] font-[400]">Confirm Password</label>
                                </div>
                                <input
                                    onChange={(e) => {
                                        setAllInputs({
                                            ...allInputs,
                                            password_confirmation: e.target.value,
                                        });
                                    }}
                                    type={passwordVisible ? 'text' : 'password'}
                                    name="password_confirmation"
                                    id="password_confirmation"
                                    placeholder="Confirm new password"
                                    className="bg-customdarkBluej focus:border-[1px] text-[14px] border-customlightBlue rounded-md outline-none w-full pl-3 p-2.5 placeholder:text-[#E3EFFF] text-[#E3EFFF]"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 top-10 pr-3 flex items-center dark:text-[#E3EFFF] opacity-35"
                                >
                                    {passwordVisible ? <MdVisibilityOff size={20} /> : <MdVisibility className='dark:text-[#E3EFFF] opacity-65' size={20} />}
                                </button>
                            </div>
                            <div className="">
                                <div className="flex items-center gap-2 py-2">
                                    <div>
                                        <img className='w-6 h-6' src={verification} alt="sd" />
                                    </div>
                                    <label htmlFor="referral_code" className="text-sm text-[#E3EFFF] font-[400]"> Verification Code</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type="text"
                                        name="confirmation_code"
                                        id="confirmation_code"
                                        placeholder="Please enter the confirmation code"
                                        value={allInputs.referral_code}
                                        onChange={(e) => setAllInputs({ ...allInputs, referral_code: e.target.value })}
                                        className="bg-customdarkBluej focus:border-[1px] text-[14px] border-customlightBlue rounded-md outline-none w-full pl-3 p-2.5 text-[#E3EFFF]placeholder:text-[#E3EFFF] text-[#E3EFFF]"
                                    />
                                    <button type="submit" className="px-7 py-1.5 text-xsm rounded-full border-none bg-gradient-to-b from-[#7AFEC3] to-[#02AFB6] text-black shadow-lg flex items-center justify-center">Send</button>
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <div onClick={() => setCheckAgreement(!checkAgreement)} className={`flex items-center cursor-pointer rounded-full ${checkAgreement ? "text-[#00ECBE] bg-white " : "text-[#E3EFFF]"}`}>
                                    {checkAgreement ? (
                                        <FaCheckCircle size={20} />
                                    ) : (
                                        <FaRegCircle size={20} />
                                    )}
                                </div>
                                <label htmlFor="agree" className="text-[#E3EFFF] ml-2 text-xs sm:text-base md:text-xs">I have read and agree </label>
                                <a href="/aboutus/risk" className="ml-2 text-rose-500 underline text-xs sm:text-base md:text-xs">[Privacy Agreement]</a>
                            </div>
                            <div className='flex flex-col w-full font-[400] items-center justify-center'>
                                <button type="submit" className="w-[90%] text-black font-bold text-[18px] tracking-[0.20333rem] py-2.5 rounded-full border-none bg-gradient-to-b from-[#7AFEC3] to-[#02AFB6] shadow-lg flex items-center justify-center">Reset</button>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgotPassword