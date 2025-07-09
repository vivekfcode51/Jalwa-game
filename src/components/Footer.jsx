
import { Link, useLocation } from "react-router-dom"
import diamond from "../assets/usaAsset/footer/home-diamond.png"
// import footerBg from "../assets/usaAsset/homeScreen/footerBg.png"
import home_color from "../assets/usaAsset/footer/promotion.png"
import activity_color from "../assets/usaAsset/footer/activity_color.png"
import wallet_color_bg from "../assets/usaAsset/footer/wallet_color_bg.png"
import account_color from "../assets/usaAsset/footer/account_color.png"
import homeLight from "../assets/usaAsset/footer/homeLight.png"
import activityLight from "../assets/usaAsset/footer/Activity.png"
import walletLight from "../assets/usaAsset/footer/wallet.png"
import accountLight from "../assets/usaAsset/footer/Account.png"
function Footer() {
  const location = useLocation()
  return (
    <div className="z-40 relative grid grid-cols-5 pt-4 items-center h-[5rem] xsm:h-[4rem] bg-[#05012b] border border-t-customlightBlue"
      style={{
        // backgroundImage: `url(${footerBg})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <Link to="/" className="z-40 col-span-1 mb-[0.79rem] flex flex-col items-center">
        <img src={location.pathname === "/" ? home_color : homeLight} className="w-6 h-6 " alt="" />
        <p className={`text-xs ${location.pathname === "/"?"bg-gradient-to-r from-[#43b5ec] to-[#759fde]":"bg-gradient-to-r from-[#759fde] to-[#759fde]"} bg-gradient-to-r from-[#43b5ec] to-[#759fde] bg-clip-text text-transparent`}>
    Promotion
  </p>
      </Link>
      <Link to="/activity" className="z-40 col-span-1 mb-[0.79rem] flex flex-col items-center">
        <img src={location.pathname === "/activity" ? activity_color : activityLight} className="w-6 h-6 " alt="" />
        <p className={`text-xs ${location.pathname === "/activity"?"bg-gradient-to-r from-[#9dc3d7] to-[#759fde]":"bg-gradient-to-r from-[#759fde] to-[#759fde]"} bg-gradient-to-r from-[#43b5ec] to-[#759fde] bg-clip-text text-transparent`}>
          Activity</p>
      </Link>
     
      <Link to="/promotion" className="z-40 col-span-1 flex flex-col items-center">
        <div className="flex items-center justify-center h-16 w-16 xsm:h-14 xsm:w-14">
          <img src={diamond} className="h-[4rem] w-[4.28rem] mb-[44px]" alt="diamond not found" />
        </div>
        {/* <p className={`text-xs ${location.pathname === "/promotion"?"bg-gradient-to-r from-[#43b5ec] to-[#759fde]":"bg-gradient-to-r from-[#759fde] to-[#759fde]"} bg-gradient-to-r from-[#43b5ec] to-[#759fde] bg-clip-text text-transparent`}>
          Promotion</p> */}
      </Link>
      <Link to="/wallet" className="z-40 col-span-1 mb-[0.79rem] flex flex-col items-center">
        <img src={location.pathname === "/wallet" ? wallet_color_bg : walletLight} className="w-6 h-6 " alt="" />
        <p className={`text-xs ${location.pathname === "/wallet"?"bg-gradient-to-r from-[#43b5ec] to-[#759fde]":"bg-gradient-to-r from-[#759fde] to-[#759fde]"} bg-gradient-to-r from-[#43b5ec] to-[#759fde] bg-clip-text text-transparent`}>
          Wallet</p>
      </Link>
      <Link to="/profile" className="z-40 col-span-1 mb-[0.79rem] flex flex-col items-center">
        <img src={location.pathname === "/profile" ? account_color : accountLight} className="w-6 h-6 " alt="" />
        <p className={`text-xs ${location.pathname === "/profile"?"bg-gradient-to-r from-[#43b5ec] to-[#759fde]":"bg-gradient-to-r from-[#759fde] to-[#759fde]"} bg-gradient-to-r from-[#43b5ec] to-[#759fde] bg-clip-text text-transparent`}>
          Account</p>
      </Link>
    </div>
  )
}

export default Footer