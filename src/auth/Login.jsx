import {
  MdKeyboardArrowDown,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apis from "../utils/apis";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../reusable_component/Loader/Loader";
import phoneUsa from "../assets/usaAsset/phone1.png";
import passwordUsa from "../assets/usaAsset/password1.png";
import tikki from "../assets/usaAsset/tikki.png";
import cutomerService from "../assets/usaAsset/custoservice1.png";
import email_tab from "../assets/usaAsset/email_tab1.png";
import email_tab_color from "../assets/usaAsset/email_tab.png";
import phoneDesable from "../assets/usaAsset/phone.png";
import { FaCheck } from "react-icons/fa";
const loginEndpoint = apis?.login;

function Login() {
  const [loading, setLoading] = useState(false);
  const [togglelogin, settogglelogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [countryCodeData, setCountryCodeData] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [checkAgreement, setCheckAgreement] = useState(false);
  const [formData, setFormData] = useState({ mobile: "", password: "" });
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggle = () => {
    setToggleLogin(!togglelogin);
  };

  const MyProfileFn = async (userid) => {
    try {
      const response = await axios.get(`${apis.profile}${userid}`);
      if (response?.data?.success === 423) {
        toast.error("Blocked by admin");
      } else {
        localStorage.setItem("userId", userid);
        setLoading(false);
        toast.success("Login successful!");
        navigate("/");
      }
    } catch (e) {
      // console.error(e);
      setLoading(false);
      toast.error("Blocked by admin");
    }
  };

  const generateToken = () =>
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = generateToken();
    try {
      const payload = {
        identity: !togglelogin ? formData.mobile : formData.email,
        country_code: selectedCountryCode,
        password: formData.password,
        login_token: token,
      };
      console.log("payload",payload)
      const response = await axios.post(loginEndpoint, payload);
      console.log("resresrers111",response)
      if (response?.data?.status === 200 || response?.data?.status === "200") {
        localStorage.setItem("login_token", token);
        await MyProfileFn(response?.data?.id);
      } else {
        toast.error(response?.data?.message);
        setLoading(false);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      setLoading(false);
      console.log("Error:", err);
    }
  };

  const countryCodeHandler = async () => {
    try {
      const res = await axios.post(apis.country);
      console.log("reshhh", res)
      if (res?.data?.status === "success") {
        setCountryCodeData(res?.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleSelectCountry = (code) => {
    setSelectedCountryCode(code);
    setIsModalOpen(false);
  };

  useEffect(() => {
    countryCodeHandler();
  }, []);
  return (
    <>
      {loading && <Loader setLoading={setLoading} loading={loading} />}
      <section className="h-[100vh] font-inter w-full flex  flex-col items-start dark:text-white">
        <div className="bg-[#011341] w-full pb-5 pt-2">
          <h1 className="text-sm font-semibold font-inter px-6 mt-2">Log in</h1>
          <p className="text-[9px] px-6 mt-2">
            Please login with your phone number or email{" "}
          </p>
          <p className="text-[9px] px-6">
            If you forget your password,please contact customer service{" "}
          </p>
        </div>
        <div className="bg-[#05012b] flex flex-col w-full items-center justify-center px-5 lg:py-0">
          <div className=" w-full  text-white">
            <div className="flex w-full items-center justify-center">
              <div
                onClick={() => settogglelogin(false)}
                className={`flex  flex-col items-center justify-center w-full py-2 border-b-[1px] text-redLight 
              ${
                togglelogin === false
                  ? "border-[#00ECBE]"
                  : "border-customdarkBlue"
              } `}
              >
                <div onClick={handleToggle}>
                  <img
                    className="w-6 h-6"
                    src={togglelogin === false ? phoneUsa : phoneDesable}
                    alt="sd"
                  />
                </div>

                <div
                  className={`text-sm mt-2 ${
                    togglelogin === false
                      ? "text-[#00ECBE]"
                      : "text-[#92A8E3]"
                  }`}
                >
                  phone number
                </div>
              </div>
              <div
                onClick={() => settogglelogin(true)}
                className={`flex  flex-col items-center justify-center w-full py-2 border-b-[1px] 
               ${
                 togglelogin === true
                   ? "border-[#00ECBE] "
                   : "border-customdarkBlue"
               } `}
              >
                <div>
                  <img
                    className="w-6 h-6"
                    src={togglelogin === true ? email_tab : email_tab_color}
                    alt="sd"
                  />
                </div>

                <div
                  className={`text-sm mt-2 ${
                    togglelogin === true
                      ? "text-[#00ECBE]"
                      : "text-[#92A8E3]"
                  }`}
                >
                  Email Login
                </div>
              </div>
            </div>
            <div>
              <form
                className="space-y-4 md:space-y-6 mt-3 "
                onSubmit={handleLogin}
              >
                {togglelogin ? (
                  <div className="">
                    <div className=" flex items-center gap-2 py-2 ">
                      <div>
                        <img className="w-6 h-6" src={email_tab} alt="sd" />
                      </div>
                      <label
                        htmlFor="mobile"
                        className=" text-sm text-white font-medium"
                      >
                        Mail{" "}
                      </label>
                    </div>
                    <div className="relative flex items-center gap-2 ju">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Please enter the email"
                        className="col-span-[60%] bg-[#011341] text-[14px] border-[1px] border-transparent focus:border-customlightBlue rounded-md outline-none w-full pl-3 p-3 placeholder:text-gray text-white transition-all duration-200 ease-in-out"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div className="">
                    <div className=" flex items-center gap-2 py-2 ">
                      <div>
                        <img className="w-6 h-6" src={phoneUsa} alt="sd" />
                      </div>
                      <label
                        htmlFor="mobile"
                        className=" text-sm text-white font-medium"
                      >
                        Phone number
                      </label>
                    </div>
                    <div className="relative flex items-center gap-2 ju">
                      <p
                        className="bg-[#011341] w-[30%] text-white opacity-55 p-3 flex items-center justify-center rounded-md cursor-pointer"
                        onClick={() => setIsModalOpen(!isModalOpen)}
                      >
                        {selectedCountryCode} <MdKeyboardArrowDown size={20} />
                      </p>
                      {isModalOpen && (
                        <div className="absolute left-0 top-12 h-48 overflow-auto w-full bg-[#011341] shadow-lg border rounded-md z-10">
                          {countryCodeData
                            ?.sort((a, b) =>
                              a.phone_code === "+91"
                                ? -1
                                : b.phone_code === "+91"
                                ? 1
                                : 0
                            )
                            .map((item, i) => (
                              <p
                                key={i}
                                className={`p-2 cursor-pointer text-blackLight ${
                                  selectedCountryCode === item?.phone_code
                                    ? "bg-red text-white"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleSelectCountry(item?.phone_code)
                                }
                              >
                                {item?.phone_code} - {item?.name}
                              </p>
                            ))}
                        </div>
                      )}
                      <input
                        type="text"
                        name="mobile"
                        id="mobile"
                        placeholder="Please enter the phone number"
                        className="col-span-[60%] bg-[#011341] text-[14px] focus:border-[0.5px] border-customlightBlue rounded-md outline-none w-full pl-3 p-3 placeholder:text-gray text-white"
                        value={formData.mobile}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d{0,10}$/.test(value)) {
                            handleInputChange(e); // only allow up to 10 digits
                          }
                        }}
                        inputMode="numeric"
                        maxLength={10}
                        required
                      />
                    </div>
                  </div>
                )}
                <div className="relative">
                  <div className="flex items-center py-2 gap-2">
                    <div>
                      <img className="w-6 h-6" src={passwordUsa} alt="sd" />
                    </div>
                    <label
                      htmlFor="password"
                      className="text-sm text-white font-medium"
                    >
                      {" "}
                      Password
                    </label>
                  </div>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-[#011341] mt-2 border-[1px] border-transparent focus:border-customlightBlue text-[14px] rounded-md outline-none w-full pl-3 p-3 placeholder:text-gray text-white transition-all duration-200 ease-in-out"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 top-12 pr-3 flex items-center text-white opacity-80"
                  >
                    {passwordVisible ? (
                      <MdVisibilityOff size={20} />
                    ) : (
                      <MdVisibility
                        className="dark:text-white opacity-65"
                        size={20}
                      />
                    )}
                  </button>
                </div>

                <div className="flex items-center mt-4">
                  <div
                    onClick={() => setCheckAgreement(!checkAgreement)}
                    className={`w-5 h-5 flex items-center justify-center cursor-pointer rounded-full transition-all duration-200 ${
                      checkAgreement
                        ? "bg-[#00ECBE] text-white"
                        : "border border-[#c8c9cc] text-transparent"
                    }`}
                  >
                    <FaCheck size={10} />
                  </div>

                  {/* ✅ Static Label */}
                  <label
                    htmlFor="agree"
                    className="ml-2 text-[#92A8E3] opacity-50 text-xs sm:text-sm select-none"
                  >
                    Remember password
                  </label>
                </div>

                <div className="flex flex-col font-bold items-center justify-center">
                  <button
                    type="submit"
                    className="w-[90%] font-semibold tracking-[0.20333rem] py-1.5
                  rounded-full border-none bg-[#3D4863] shadow-lg flex items-center justify-center text-blue-300"
                  >
                    Log in
                  </button>
                  <button className="w-[90%] border border-[#00ECBE] mt-5 tracking-[2px] rounded-full p-1.5">
                    {" "}
                    <Link
                      to="/register"
                      className="font-semibold text-sm hover:underline text-[#00ECBE] tracking-[0.20333rem] "
                    >
                      Register
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-2 w-full text-white text-xsm mt-10">
            <Link
              to="/forgotPassword"
              className="col-span-1 flex flex-col items-center justify-center"
            >
              <img
                className="w-8 h-9 text-[#00ECBE]"
                src={passwordUsa}
                alt="sd"
              />
              <p>Forgot Password</p>
            </Link>
            <Link
              to="/customerservices"
              className="col-span-1 flex flex-col items-center justify-center"
            >
              <img className="w-11 h-10" src={cutomerService} alt="sd" />
              <p>Customer Service</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
