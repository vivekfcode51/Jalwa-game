import { useEffect, useRef, useState } from "react";
import { handleGameContainerType } from "../../features/AllGamesContainerSlice";
import { useDispatch, useSelector } from "react-redux";
import AllGamesContainer from "../../reusable_component/AllGamesContainer";
import ImageCarousel from "../../reusable_component/ImageCarousel";
import { RiFireFill } from "react-icons/ri";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import bgActiveCategory from "../../assets/usaAsset/homeScreen/bgActiveCategory.png";
import gamecategoryLottery from "../../assets/usaAsset/homeScreen/gamecategoryLottery.png";
import gamecategoryminigames from "../../assets/usaAsset/homeScreen/gamecategoryminigames.png";
import gamecategorypopular from "../../assets/usaAsset/homeScreen/gamecategorypopular.png";
import gamecategoryslots from "../../assets/usaAsset/homeScreen/Mini games.png";
import gamecategoryfish from "../../assets/usaAsset/homeScreen/Hot Slots.png";
import gamecategorySports from "../../assets/usaAsset/homeScreen/Sports.png";
import gamecategoryCasino from "../../assets/usaAsset/homeScreen/Casino.png";
import gamecategorycasino from "../../assets/usaAsset/homeScreen/Slots.png";
import gamecategoryloby from "../../assets/usaAsset/homeScreen/Fishing.png";
import gamecategorypoker from "../../assets/usaAsset/homeScreen/gamecategorypoker.png";
import lotterycategorywingo from "../../assets/usaAsset/homeScreen/lotterycategorywingo.png";
import lotterycategorytrx from "../../assets/usaAsset/homeScreen/vendorlogo.png";
import person1 from "../../assets/usaAsset/homeScreen/person1.png";
import person2 from "../../assets/usaAsset/homeScreen/person2.png";
import person3 from "../../assets/usaAsset/homeScreen/person3.png";
import person4 from "../../assets/usaAsset/homeScreen/person4.png";
import person5 from "../../assets/usaAsset/homeScreen/person5.png";
import person6 from "../../assets/usaAsset/homeScreen/person6.png";
import person7 from "../../assets/usaAsset/homeScreen/person7.png";
import person8 from "../../assets/usaAsset/homeScreen/person8.png";
import person9 from "../../assets/usaAsset/homeScreen/person9.png";
import person10 from "../../assets/usaAsset/homeScreen/person10.png";
import person11 from "../../assets/usaAsset/homeScreen/person11.png";
import person12 from "../../assets/usaAsset/homeScreen/person12.png";
import person13 from "../../assets/usaAsset/homeScreen/person13.png";
import person14 from "../../assets/usaAsset/homeScreen/person14.png";
import person15 from "../../assets/usaAsset/homeScreen/person15.png";
import person16 from "../../assets/usaAsset/homeScreen/person16.png";
import person17 from "../../assets/usaAsset/homeScreen/person17.png";
import person18 from "../../assets/usaAsset/homeScreen/person18.png";
import person19 from "../../assets/usaAsset/homeScreen/person19.png";
import person20 from "../../assets/usaAsset/homeScreen/person20.png";
import DailyProfitRankStage from "../../assets/usaAsset/homeScreen/Stage1.png";
import rankbg1 from "../../assets/usaAsset/homeScreen/rankbg1.png";
import rankbg2 from "../../assets/usaAsset/homeScreen/rankbg2.png";
import rankbg3 from "../../assets/usaAsset/homeScreen/rankbg3.png";
import no1badge from "../../assets/usaAsset/homeScreen/no1badge.png";
import no2badge from "../../assets/usaAsset/homeScreen/no2badge.png";
import no3badge from "../../assets/usaAsset/homeScreen/no3badge.png";
import crownno1 from "../../assets/usaAsset/homeScreen/crownno1.png";
import crownno2 from "../../assets/usaAsset/homeScreen/crownno2.png";
import crownno3 from "../../assets/usaAsset/homeScreen/crownno3.png";
import popularbg from "../../assets/usaAsset/homeScreen/popularbg.png";
import lotterybg from "../../assets/usaAsset/homeScreen/lotterybg.png";
import slotbg from "../../assets/usaAsset/homeScreen/icon_bg1.png";
import casinobg from "../../assets/usaAsset/homeScreen/icon_bg2.png";
import fishbg from "../../assets/usaAsset/homeScreen/icon_bg2.png";
import sportsbg from "../../assets/usaAsset/homeScreen/icon_bg2.png";
import pokerbg from "../../assets/usaAsset/homeScreen/icon_bg2.png";
import orignal from "../../assets/usaAsset/homeScreen/icon_bg1.png";
import cup from "../../assets/usaAsset/homeScreen/cup.png";
import casinio1 from "../../assets/usaAsset/homeScreen/icon_bg2.png";
import sports1 from "../../assets/usaAsset/homeScreen/icon_bg2.png";
import lotteryicons from "../../assets/usaAsset/homeScreen/lotteryicons.png";
import casinoicon from "../../assets/usaAsset/homeScreen/Lottery.png";
import micphone from "../../assets/usaAsset/micphone.png";
import cashKing from "../../assets/usaAsset/homeScreen/cashKing.png";
import icon18 from "../../assets/usaAsset/homeScreen/icon_18.png";
import CStype3 from "../../assets/usaAsset/homeScreen/CStype3.png";
import { HiSpeakerWave } from "react-icons/hi2";
import apis from "../../utils/apis";
import axios from "axios";
import { toast } from "react-toastify";
import FirstDepositModal from "../../reusable_component/FirstDepositModal";
import Loader from "../../reusable_component/Loader/Loader";
import {
  updateUserWalletFromJili,
  updateUserWalletFromSpribe,
} from "../../reusable_component/gameApi";
const notes = [
  "🎉🎉🎉Welcome to the Gameon Games! Greetings, Gamers and Enthusiasts! the Gameon",
  "Please be sure to always use our official website for playing the games with the fol",
  "If your deposit is not received, Please send it directly to Gameon Games Self-service Ce",
];
function Home() {
  const [loading, setLoading] = useState(false);
  const [currentIndexWin, setCurrentIndexWin] = useState(0);
  const [firstDepsoitModal, setFirstDepsoitModal] = useState(
    localStorage.getItem("firstDepositModalValue") === "1"
  );
  const [noteValue, setNoteValue] = useState(notes[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [bannerData, setBannerData] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  const { gameName } = useSelector((state) => state.AllGamesContainer);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  // console.log("user id h",userId)
  const buttonRef = useRef(null);
  const fixedScrollHeight = 500;
  const handleLotteryContainer = () => {
    const height = "5rem";
    const gameName = "lottery";
    dispatch(handleGameContainerType({ height, gameName }));
  };
  const handleMiniGamesContainer = () => {
    const height = "5rem";
    const gameName = "minigames";
    dispatch(handleGameContainerType({ height, gameName }));
  };
  const handlePopularContainer = () => {
    const height = "5rem";
    const gameName = "popular";
    dispatch(handleGameContainerType({ height, gameName }));
  };
  const handleSlotsContainer = () => {
    const height = "5rem";
    const gameName = "slots";
    dispatch(handleGameContainerType({ height, gameName }));
  };
  const handleFishingContainer = () => {
    const height = "5rem";
    const gameName = "fishing";
    dispatch(handleGameContainerType({ height, gameName }));
  };
  const handleCasinoContainer = () => {
    const height = "5rem";
    const gameName = "casino";
    dispatch(handleGameContainerType({ height, gameName }));
  };
  const handleLobbyContainer = () => {
    const height = "5rem";
    const gameName = "lobby";
    dispatch(handleGameContainerType({ height, gameName }));
  };
  const handlePokerContainer = () => {
    const height = "5rem";
    const gameName = "poker";
    dispatch(handleGameContainerType({ height, gameName }));
  };

  const profileDetails = async () => {
    if (!userId) {
      return;
    }
    try {
      const res = await axios.get(`${profileApi}${userId}`);
      console.log("res profie", res);
      if (res?.data?.success === 200) {
        setMyDetails(res?.data?.data);
      }
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    if (userId) {
      profileDetails();
    }
  }, [userId]);

  const buttonData = [
    {
      // onClick: handlePopularContainer,
      onClick: () => handleSelect("popular", handlePopularContainer),
      key: "popular",
      bg: popularbg,
      icon: casinoicon,
      label: "Lottery",
    },
    {
      // onClick: handleLotteryContainer,
      onClick: () => handleSelect("lottery", handleLotteryContainer),
      key: "lottery",
      bg: lotterybg,
      icon: gamecategoryslots,
      label: "Mini games",
    },
    {
      onClick: () => handleSelect("casino", handleCasinoContainer),
      key: "casino",
      bg: slotbg,
      icon: gamecategoryfish,
      label: "Hot Slots",
    },
    {
      onClick: () => handleSelect("slots", handleSlotsContainer),
      key: "slots",
      bg: casinobg,
      icon: gamecategorycasino,
      label: "Slots",
    },
    {
      onClick: () => handleSelect("fishing", handleFishingContainer),
      key: "fishing",
      bg: fishbg,
      icon: gamecategoryloby,
      label: "Fishing",
    },
    {
      onClick: () => handleSelect("rummy", handlePokerContainer),
      key: "rummy",
      bg: sportsbg,
      icon: lotteryicons,
      label: "PVC",
    },
    {
      onClick: () => handleSelect("casinio1", handleMiniGamesContainer),
      key: "casinio1",
      bg: casinio1,
      icon: gamecategoryCasino,
      label: "casino",
    },
    {
      onClick: () => handleSelect("sports", handleLobbyContainer),
      key: "sports",
      bg: "sports",
      icon: gamecategorySports,
      label: "sports",
    },
    // {
    //   onClick: handleLobbyContainer,
    //   key: "sports",
    //   bg: pokerbg,
    //   icon: cup,
    //   label: "Fishing",
    // },
    // {
    //   onClick: handleMiniGamesContainer,
    //   key: "orignal",
    //   bg: orignal,
    //   icon: gamecategoryminigames,
    //   label: "PVC",
    // },
  ];
  const bannerDataHandler = async () => {
    setLoading(true);
    try {
      const res = await axios.get(apis.slider);
      // console.log("slider baar",apis.slider)
      if (res?.data?.status === 200) {
        setLoading(false);
        setBannerData(res?.data?.data);
      } else {
        setLoading(false);
        toast.error(res?.data?.message);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    bannerDataHandler();
  }, []);
  useEffect(() => {
    if (gameName && buttonRef.current) {
      const buttonPosition =
        buttonRef.current.getBoundingClientRect().top + window.scrollY;
      const positionToScroll = Math.max(buttonPosition - fixedScrollHeight, 0);
      window.scrollTo({
        top: positionToScroll,
        behavior: "smooth",
      });
    }
  }, [gameName]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % notes.length);
        setNoteValue(notes[(currentIndex + 1) % notes.length]);

        setAnimate(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, notes]);
  const winningData = [
    {
      id: 1,
      avatar: person1,
      gameImage: gamecategorycasino,
      name: "Mem***CQF",
      amount: "600.00",
    },
    {
      id: 2,
      avatar: person2,
      gameImage: lotterycategorywingo,
      name: "Mem***CDM",
      amount: "95.00",
    },
    {
      id: 3,
      avatar: person3,
      gameImage: lotterycategorytrx,
      name: "Mem***JVW",
      amount: "540.00",
    },
    {
      id: 4,
      avatar: person4,
      gameImage: gamecategorycasino,
      name: "Mem***QGS",
      amount: "170.00",
    },
    {
      id: 5,
      avatar: person5,
      gameImage: gamecategorycasino,
      name: "Mem***UUQ",
      amount: "600.00",
    },
    {
      id: 6,
      avatar: person6,
      gameImage: gamecategorycasino,
      name: "Mem***GTR",
      amount: "85.00",
    },
    {
      id: 7,
      avatar: person7,
      gameImage: lotterycategorywingo,
      name: "Mem***WTY",
      amount: "430.00",
    },
    {
      id: 8,
      avatar: person8,
      gameImage: gamecategorycasino,
      name: "Mem***HSD",
      amount: "190.00",
    },
    {
      id: 9,
      avatar: person9,
      gameImage: lotterycategorytrx,
      name: "Mem***JKL",
      amount: "310.00",
    },
    {
      id: 10,
      avatar: person10,
      gameImage: gamecategorycasino,
      name: "Mem***PQR",
      amount: "725.00",
    },
    {
      id: 11,
      avatar: person11,
      gameImage: gamecategorycasino,
      name: "Mem***XYZ",
      amount: "245.00",
    },
    {
      id: 12,
      avatar: person12,
      gameImage: lotterycategorywingo,
      name: "Mem***AAA",
      amount: "560.00",
    },
    {
      id: 13,
      avatar: person13,
      gameImage: lotterycategorytrx,
      name: "Mem***BBB",
      amount: "670.00",
    },
    {
      id: 14,
      avatar: person14,
      gameImage: gamecategorycasino,
      name: "Mem***CCC",
      amount: "380.00",
    },
    {
      id: 15,
      avatar: person15,
      gameImage: lotterycategorywingo,
      name: "Mem***DDD",
      amount: "290.00",
    },
    {
      id: 16,
      avatar: person16,
      gameImage: lotterycategorytrx,
      name: "Mem***EEE",
      amount: "820.00",
    },
    {
      id: 17,
      avatar: person17,
      gameImage: lotterycategorytrx,
      name: "Mem***FFF",
      amount: "430.00",
    },
    {
      id: 18,
      avatar: person18,
      gameImage: lotterycategorytrx,
      name: "Mem***GGG",
      amount: "600.00",
    },
    {
      id: 19,
      avatar: person19,
      gameImage: gamecategorycasino,
      name: "Mem***HHH",
      amount: "950.00",
    },
    {
      id: 20,
      avatar: person20,
      gameImage: gamecategorycasino,
      name: "Mem***III",
      amount: "110.00",
    },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndexWin((prevIndex) =>
        prevIndex + 1 >= winningData.length ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [winningData.length]);

  const visibleData = [
    ...winningData.slice(currentIndexWin, currentIndexWin + 5),
    ...(currentIndexWin + 5 > winningData.length
      ? winningData.slice(0, (currentIndexWin + 5) % winningData.length)
      : []),
  ].slice(0, 5);

  useEffect(() => {
    const userid = localStorage.getItem("userId");
    // console.log("userid",userid)
    const status = localStorage.getItem("firstDepositModalValue");
    if (status === "0" && userid) {
      setFirstDepsoitModal(true);
    } else {
      setFirstDepsoitModal(false);
    }
  }, []);
  // useEffect(() => {
  //     const updateWallet = async () => {

  //         const statusJili = localStorage.getItem("jilligamePlayed") || "0";
  //         const statusSpribe = localStorage.getItem("spribegamePlayed") || "0";
  //         if (statusJili === "1") {
  //             await updateUserWalletFromJili();
  //             localStorage.setItem("jilligamePlayed", "0");
  //         }
  //         if (statusSpribe === "1") {
  //             await updateUserWalletFromSpribe();
  //             localStorage.setItem("spribegamePlayed", "0");
  //         }
  //     };
  //     updateWallet();
  //     const handleVisibilityChange = () => {
  //         if (!document.hidden) {
  //             updateWallet();
  //         }
  //     };
  //     const handleStorageChange = (event) => {
  //         if (event.key === "jilligamePlayed" || event.key === "spribegamePlayed") {
  //             updateWallet();
  //         }
  //     };
  //     document.addEventListener("visibilitychange", handleVisibilityChange);
  //     window.addEventListener("storage", handleStorageChange);
  //     return () => {
  //         document.removeEventListener("visibilitychange", handleVisibilityChange);
  //         window.removeEventListener("storage", handleStorageChange);
  //     };
  // }, []);

  const handleSelect = (key, handler) => {
  setSelectedGame(key);
  handler(); // call the original handler
};


  return (
    <>
      {loading && <Loader setLoading={setLoading} loading={loading} />}
      {firstDepsoitModal && (
        <div className="relative z-50 font-roboto">
          <FirstDepositModal
            firstDepsoitModal={firstDepsoitModal}
            setFirstDepsoitModal={setFirstDepsoitModal}
            onClose={() => setFirstDepsoitModal(false)}
          />
        </div>
      )}
      <div className="mb-28 font-roboto w-full">
        {/* <NavLink to="/aviator">fdsfds</NavLink> */}
        <div className="rounded-xl px-3 mt-2">
          <ImageCarousel imagesData={bannerData} />
        </div>
        <div className="p-4 flex items-center justify-center w-full">
          <div className="px-3 flex shadow-lg justify-between w-full gap-1 items-center bg-gradient-to-b from-[#001C54] to-[#000C33]  p-1 rounded-full ">
            {/* <div className='shrink-0'> <img className='h-5 w-5' src={micphone} alt="ds" />             </div> */}
            <div className="shrink-0">
              <HiSpeakerWave className="h-5 w-5 text-[#00ECBE]" />
            </div>
            <div className="h-9 flex items-center overflow-hidden">
              <div
                className={`flex-1 font-bold xsm:flex-0 text-white w-[80%] xsm:w-[19rem] text-[12px] xsm:text-[8px] overflow-hidden text-ellipsis whitespace-normal break-words transition-transform duration-1000 ease-in-out ${
                  animate
                    ? "transform -translate-y-full"
                    : "transform translate-y-0"
                }`}
                style={{
                  transform: animate ? "translateY(-100%)" : "translateY(0)",
                }}
              >
                {noteValue}
              </div>
            </div>
            <div className="shrink-0 w-[20%] font-bold xsm:w-[22%] py-1 bg-gradient-to-b from-[#6fffc9] to-[#00b3bb] text-xs bg-customlightBlue flex gap-1 justify-center items-center  rounded-3xl">
              {/* <RiFireFill className='' /> */}
              Detail
            </div>
          </div>
        </div>
        <div>
          <div className=" w-full p-1 gap-2">
            {/* First Row - 2 Items */}
            {/* <div className="col-span-2 grid grid-cols-2 px-2 gap-3">
                            {buttonData?.slice(0, 2)?.map((item, i) => (
                                <button
                                    onClick={item.onClick}
                                    key={i}
                                    style={{
                                        backgroundImage: `url(${item?.bg})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                    }}
                                    className="h-[90px] w-[100%] flex items-center justify-center text-white rounded-xl shadow-lg overflow-hidden"
                                >
                                    <div className=" flex w-full  items-center justify-between ">
                                        <div className="w-1/2 flex items-center justify-center  ">
                                            <img src={item.icon} alt="" />
                                        </div>
                                        <div className="w-1/2 text-end pr-2 font-serif  font-bold">
                                            {item?.label}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div> */}

            {/* <div className="grid grid-cols-4 mt-2 mx-2 gap-2">
              {buttonData?.slice(2)?.map((item, i) => (
                <button
                  onClick={item.onClick}
                  key={i}
                  style={{
                    backgroundImage: `url(${item?.bg})`,
                    // backgroundPosition: "center",
                  }}
                  className="h-[70px] w-full flex  text-white text-[12px] rounded-lg shadow-lg  pr-2 pt-2 font-serif  font-bold"
                >
                  <div className=" flex w-full   justify-between ">
                    <img src={item.icon} alt="" />
                  </div>
                  {item?.label}
                </button>
              ))}
            </div> */}
            <div className="grid grid-cols-4 mt-4 mx-2 gap-y-4 gap-x-2">
              {buttonData.map((item, i) => {
                const isSelected = item.key === selectedGame;
                return (
                  <div key={i} className="flex flex-col items-center">
                    <button
                      onClick={item.onClick}
                      className="relative h-[80px] w-[80px] rounded-[20px] overflow-hidden"
                    >
                      {/* Background image */}
                      <img
                        src={isSelected ? slotbg : casinobg}
                        alt="bg"
                        className="absolute inset-0 w-full h-full object-fill"
                      />
                      {/* Foreground icon */}
                      <img
                        src={item.icon}
                        alt="icon"
                        className="relative z-10 w-[65px] h-[55px] mx-auto mt-[15px]"
                      />
                    </button>

                    <span
                      className={`mt-2 text-[13px] font-normal ${
                        isSelected ? "text-[#00ECBE]" : "text-[#6f80a4]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        <div className="overflow-y-scroll pl-3 pr-0.5 w-full mt-5 flex items-start justify-between hide-scrollbar">
          {/* <div className="w-[20%]">
                        {buttonData?.map((item, i) => {
                            return (
                                <button
                                    key={i}
                                    onClick={item.onClick}
                                    className="flex flex-col pt-1 w-[74.5px] mb-3 h-[69.5px] bg-cover bg-no-repeat  justify-between items-center rounded-md"
                                    style={{
                                        backgroundImage: `url(${gameName === item.key ? item.bg : ""})`,
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <img src={item.icon} className="w-12 h-10" alt="lotterycase not found" />
                                    <p className={`text-xs pb-1 font-semibold ${gameName === item.key ? "text-white" : "text-black"} `}>{item.label}</p>
                                </button>
                            )
                        })}
                    </div> */}
          <div className=" w-[100%]">
            <AllGamesContainer />
          </div>
        </div>
        {/* winnng info div */}
        <div className="p-3 text-white max-w-md mx-auto ">
          <h2 className="text-lg font-semibold mb-4">Winning information</h2>
          
         <div className="mt-3 p-4 rounded-xl border border-[#224ba2] bg-gradient-to-b from-[#001c54] to-[#000c33]">
          <div className="space-y-3 overflow-hidden">
            {visibleData
              .slice()
              .reverse()
              .map((data) => (
                <div
                  key={data.id}
                  className="flex items-start gap-3 bg-[#031847] px-3 py-2 rounded-lg shadow-md"
                >
                  {/* Game Image */}
                  <img
                    src={data.gameImage}
                    alt="Game"
                    className="w-[45px] h-[55px] rounded-lg object-cover"
                  />

                  {/* Right: Avatar + Text */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      <img
                        src={data.avatar}
                        alt="Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <p className="text-white text-sm font-medium">{data.name}</p>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Winning amount{" "}
                      <span className="text-[#00FF9C] px-1 font-semibold">
                        ₹{data.amount}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        </div>
        <div className="px-2">
                    <div className="h-4 flex items-center gap-2">
                        <div className="w-[3px] h-full bg-red"></div>
                        <p className="text-white text-lg font-semibold">Today&apos;s earnings chart</p>
                    </div>
                   <div className="mt-4 p-4 rounded-xl border border-[#224ba2] bg-gradient-to-b from-[#001c54] to-[#000c33]">
                     <div className="mt-10">
                        <div className="text-black flex items-end justify-around">
                        {/* rank 1 */}
                            <div className="-mb-[7rem] xs:-mb-[7.2rem] xsm:-mb-[7rem]  flex flex-col justify-center items-center w-[30%]">
                                <div className="object-fill -mb-2 flex items-center justify-center bg-cover w-16 h-16"
                                    style={{
                                        backgroundImage: `url(${rankbg2})`
                                    }}
                                >
                                    <div className="object-fill bg-cover w-14 h-14 rounded-full"
                                        style={{
                                            backgroundImage: `url(${person2})`
                                        }}
                                    >
                                        <img src={crownno2} className="-ml-5 -mt-7" alt="sd" />
                                    </div>
                                </div>
                                {/* <img className="w-16" src={no2badge} alt="ds" /> */}
                                <p className="text-xsm text-white font-bold z-10 mt-3">Mem***566</p>
                                <p className="text-xsm mt-1 xs:mt-2 font-bold z-10 rounded-full w-full py-1 text-center text-white">588,900.00</p>
                            </div>
                            {/* rank 1 */}
                            <div className="-mb-[5.6rem] xs:-mb-[6rem] xsm:-mb-[6rem] flex flex-col justify-center items-center w-[40%]">
                                <div className=" object-fill -mb-2 flex items-center justify-center bg-cover w-16 h-16"
                                    style={{
                                        backgroundImage: `url(${rankbg1})`
                                    }}
                                >
                                    <div className="object-fill z-30 bg-cover w-14 h-14 rounded-full"
                                        style={{
                                            backgroundImage: `url(${person1})`
                                        }}
                                    >
                                        <img src={crownno1} className=" -ml-5 -mt-7" alt="sd" />
                                    </div>
                                </div>
                                {/* <img className="z-30 w-16" src={no1badge} alt="ds" /> */}
                                <p className="text-xsm text-white z-30 font-bold mt-3">Mem***387</p>
                                <p className="text-xsm mt-2 font-bold z-30 rounded-full px-3 py-1 text-center text-white">2,853,503.00</p>
                            </div>
                            {/* rank 3 */}
                            <div className="-mb-[7rem] xs:-mb-[7.2rem] xsm:-mb-[7rem] flex flex-col justify-center items-center w-[30%]">
                                <div className="object-fill -mb-2 flex items-center justify-center bg-cover w-16 h-16"
                                    style={{
                                        backgroundImage: `url(${rankbg3})`
                                    }}
                                >
                                    <div className="object-fill bg-cover w-14 h-14 rounded-full"
                                        style={{
                                            backgroundImage: `url(${person3})`
                                        }}
                                    >
                                        <img src={crownno3} className="-ml-5 -mt-7" alt="sd" />
                                    </div>
                                </div>
                                {/* <img className="w-16" src={no3badge} alt="ds" /> */}
                                <p className="text-xsm text-white z-30 font-bold mt-3">Mem***453</p>
                                <p className="text-xsm mt-2 font-bold z-30 rounded-full w-full py-1 text-center text-white">240,438.00</p>
                            </div>
                        </div>
                        <img className="object-fill mt-3" src={DailyProfitRankStage} alt="sd" />
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center text-white gap-4">
                                <p>4</p>
                                <div className="flex items-center space-x-2 w-[35%]">
                                    <img
                                        src={person5}
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <p className="text-xsm font-semibold">Mem***879</p>
                                </div>
                            </div>
                            <p className="text-xsm mt-2 font-bold rounded-full px-7 py-1 text-center text-[#00e8c2]">₹80,066,113.68</p>
                        </div>
                        <div className="w-full flex items-center mt-2 justify-between">
                            <div className="flex items-center text-white gap-4">
                                <p>5</p>
                                <div className="flex items-center space-x-2 w-[35%]">
                                    <img
                                        src={person6}
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <p className="text-xsm font-semibold">Mem***113</p>
                                </div>
                            </div>
                            <p className="text-xsm mt-2 font-bold rounded-full px-7 py-1 text-center text-[#00e8c2]">₹58,589,260.31</p>
                        </div>
                         <div className="w-full flex items-center mt-2 justify-between">
                            <div className="flex items-center text-white gap-4">
                                <p>6</p>
                                <div className="flex items-center space-x-2 w-[35%]">
                                    <img
                                        src={person5}
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <p className="text-xsm font-semibold">Mem***113</p>
                                </div>
                            </div>
                            <p className="text-xsm mt-2 font-bold rounded-full px-7 py-1 text-center text-[#00e8c2]">₹46,700,528.00</p>
                        </div>
                         <div className="w-full flex items-center mt-2 justify-between">
                            <div className="flex items-center text-white gap-4">
                                <p>7</p>
                                <div className="flex items-center space-x-2 w-[35%]">
                                    <img
                                        src={person5}
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <p className="text-xsm font-semibold">Mem***113</p>
                                </div>
                            </div>
                            <p className="text-xsm mt-2 font-bold rounded-full px-7 py-1 text-center text-[#00e8c2]">₹37,802,520.00</p>
                        </div>
                         <div className="w-full flex items-center mt-2 justify-between">
                            <div className="flex items-center text-white gap-4">
                                <p>8</p>
                                <div className="flex items-center space-x-2 w-[35%]">
                                    <img
                                        src={person5}
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <p className="text-xsm font-semibold">Mem***113</p>
                                </div>
                            </div>
                            <p className="text-xsm mt-2 font-bold rounded-full px-7 py-1 text-center text-[#00e8c2]">₹25,702,358.08</p>
                        </div>
                         <div className="w-full flex items-center mt-2 justify-between">
                            <div className="flex items-center text-white gap-4">
                                <p>9</p>
                                <div className="flex items-center space-x-2 w-[35%]">
                                    <img
                                        src={person5}
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <p className="text-xsm font-semibold">Mem***113</p>
                                </div>
                            </div>
                            <p className="text-xsm mt-2 font-bold rounded-full px-7 py-1 text-center text-[#00e8c2]">₹19,445,160.00</p>
                        </div>
                         {/* <div className="w-full flex items-center mt-2 justify-between">
                            <div className="flex items-center text-white gap-4">
                                <p>10</p>
                                <div className="flex items-center space-x-2 w-[35%]">
                                    <img
                                        src={person5}
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <p className="text-xsm font-semibold">Mem***113</p>
                                </div>
                            </div>
                            <p className="text-xsm mt-2 font-bold rounded-full px-7 py-1 text-center text-[#00e8c2]">₹1,123,080.00</p>
                             <p className="text-xs font-semibold text-[#00e8c2]">₹1,123,080.00</p>
                        </div> */}

                    </div>
                   </div>
        </div>

                <div className="px-6 mt-10 text-[#6F80A4] font-serif text-[14px]">
                  {/* Logo + Icons */}
                  <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="w-[10rem] h-12">
                      <img src={cashKing} alt="cashking-logo" className="h-full object-contain" />
                    </div>

                    {/* +18 Icon */}
                    <div className="w-10 h-10 flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M69.5 35.3521C69.5 54.3935 54.0541 69.8302 35 69.8302C15.9459 69.8302 0.5 54.3935 0.5 35.3521C0.5 16.3107 15.9459 0.874023 35 0.874023C54.0541 0.874023 69.5 16.3107 69.5 35.3521Z"
                          stroke="url(#paint0_linear_10002_12677)"
                        />
                        <path
                          d="M26.794 37.2643H22.27V41.8923H18.058V37.2643H13.534V33.2863H18.058V28.6323H22.27V33.2863H26.794V37.2643ZM29.0282 29.5163V25.3823H36.2302V44.3623H31.6022V29.5163H29.0282ZM42.3916 34.1703C40.7622 33.3036 39.9476 31.943 39.9476 30.0883C39.9476 29.1523 40.1902 28.303 40.6756 27.5403C41.1609 26.7603 41.8976 26.145 42.8856 25.6943C43.8736 25.2263 45.0869 24.9923 46.5256 24.9923C47.9642 24.9923 49.1689 25.2263 50.1396 25.6943C51.1276 26.145 51.8642 26.7603 52.3496 27.5403C52.8349 28.303 53.0776 29.1523 53.0776 30.0883C53.0776 31.0243 52.8522 31.839 52.4016 32.5323C51.9682 33.2256 51.3789 33.7716 50.6336 34.1703C51.5696 34.621 52.2889 35.245 52.7916 36.0423C53.2942 36.8223 53.5456 37.741 53.5456 38.7983C53.5456 40.029 53.2336 41.095 52.6096 41.9963C51.9856 42.8803 51.1362 43.5563 50.0616 44.0243C49.0042 44.4923 47.8256 44.7263 46.5256 44.7263C45.2256 44.7263 44.0382 44.4923 42.9636 44.0243C41.9062 43.5563 41.0656 42.8803 40.4416 41.9963C39.8176 41.095 39.5056 40.029 39.5056 38.7983C39.5056 37.7236 39.7569 36.7963 40.2596 36.0163C40.7622 35.219 41.4729 34.6036 42.3916 34.1703ZM48.7616 30.7643C48.7616 30.0536 48.5536 29.5076 48.1376 29.1263C47.7389 28.7276 47.2016 28.5283 46.5256 28.5283C45.8496 28.5283 45.3036 28.7276 44.8876 29.1263C44.4889 29.525 44.2896 30.0796 44.2896 30.7903C44.2896 31.4663 44.4976 32.0036 44.9136 32.4023C45.3296 32.7836 45.8669 32.9743 46.5256 32.9743C47.1842 32.9743 47.7216 32.775 48.1376 32.3763C48.5536 31.9776 48.7616 31.4403 48.7616 30.7643ZM46.5256 36.0943C45.7109 36.0943 45.0522 36.3196 44.5496 36.7703C44.0469 37.2036 43.7956 37.8103 43.7956 38.5903C43.7956 39.3183 44.0382 39.9163 44.5236 40.3843C45.0262 40.8523 45.6936 41.0863 46.5256 41.0863C47.3576 41.0863 48.0076 40.8523 48.4756 40.3843C48.9609 39.9163 49.2036 39.3183 49.2036 38.5903C49.2036 37.8276 48.9522 37.221 48.4496 36.7703C47.9642 36.3196 47.3229 36.0943 46.5256 36.0943Z"
                          fill="#00ECBE"
                        />
                        <defs>
                          <linearGradient id="paint0_linear_10002_12677" x1="35" y1="0.374023" x2="35" y2="70.3302" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#75FAC2" />
                            <stop offset="1" stopColor="#06B2B6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Call Icon */}
                    <div className="w-10 h-10">
                      <img src={CStype3} alt="call" className="h-full w-full object-contain" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <ul className="mt-6 space-y-4 leading-relaxed text-[#6F80A4] text-[14px]">
                    {[
                      "The platform advocates fairness, justice, and openness. We mainly operate fair lottery, blockchain games, live casinos, and slot machine games.",
                      "cashkingbet works with more than 10,000 online live game dealers and slot games, all of which are verified fair games.",
                      "cashkingbet supports fast deposit and withdrawal, and looks forward to your visit.",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#E3EFFF] mt-[6px] text-[16px] leading-none">◆</span>
                        <p className="text-justify">{text}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Footer Note */}
                  <div className="mt-6 text-[14px] font-serif text-[#E3EFFF] ml-4">
                    <p>
                      Gambling can be addictive, please play rationally.
                    </p>
                    <p>
                      cashkingbet only accepts customers above the age of 18.
                    </p>
                  </div>
                </div>

        </div>
      </>
    );
  }

  export default Home;





// {/* <div className="px-4">
         
//           <div className="h-4 flex items-center gap-2">
//             <div className="w-[3px] h-full bg-red"></div>
//             <p className="text-white text-lg font-semibold">
//               Today's earnings chart
//             </p>
//           </div>

//           {/* Main Chart Card */}
//           <div className="mt-3 p-4 rounded-xl border border-[#224ba2] bg-gradient-to-b from-[#001c54] to-[#000c33]">
//             {/* Top 3 Rankers */}
//             <div className="mt-10 flex items-end justify-around">
//               {/* 2nd Rank */}
//               <div className="-mb-[7rem] flex flex-col justify-center items-center w-[30%] ">
//                 <div
//                   className="w-16 h-16 -mb-2 bg-cover flex items-center justify-center"
//                   style={{ backgroundImage: `url(${rankbg2})` }}
//                 >
//                   <div
//                     className="w-14 h-14 rounded-full bg-cover z-40"
//                     style={{ backgroundImage: `url(${person2})` }}
//                   >
//                     <img src={crownno2} className="-ml-5 -mt-7" alt="" />
//                   </div>
//                 </div>
//                 {/* <img src={no2badge} className="w-16" alt="" /> */}
//                 <p className="text-xs text-[#FFDE78] mt-9">He******ro</p>
//                 <p className="text-xs -mb-7  w-full py-1 text-center">
//                   ₹35,118,260.31
//                 </p>
//               </div>

//               {/* 1st Rank */}
//               <div className="-mb-[5.6rem] flex flex-col justify-center items-center w-[40%]">
//                 <div
//                   className="w-16 h-16 -mb-2 bg-cover flex items-center justify-center"
//                   style={{ backgroundImage: `url(${rankbg1})` }}
//                 >
//                   <div
//                     className="w-14 h-14 rounded-full bg-cover z-40"
//                     style={{ backgroundImage: `url(${person1})` }}
//                   >
//                     <img src={crownno1} className="-ml-5 -mt-7" alt="" />
//                   </div>
//                 </div>
//                 {/* <img src={no1badge} className="z-30 w-16" alt="" /> */}
//                 <p className="text-xs text-[#FFDE78] mt-3 z-30">
//                   Mem***SXA
//                 </p>
//                 <p className="text-xs mt-2 z-30 w-full text-center text-[#D6AC2A]">
//                   ₹71,589,000.00
//                 </p>
//               </div>

//               {/* 3rd Rank */}
//               <div className="-mb-[7rem] flex flex-col justify-center items-center w-[30%]">
//                 <div
//                   className="w-16 h-16 -mb-2 bg-cover flex items-center justify-center"
//                   style={{ backgroundImage: `url(${rankbg3})` }}
//                 >
//                   <div
//                     className="w-14 h-14 rounded-full bg-cover z-100"
//                     style={{ backgroundImage: `url(${person3})` }}
//                   >
//                     <img src={crownno3} className="-ml-5 -mt-7" alt="" />
//                   </div>
//                 </div>
//                 {/* <img src={no3badge} className="w-16" alt="" /> */}
//                 <p className="text-xs text-[#FF772A] mt-3">Mem***HAZ</p>
//                 <p className="text-xs mt-2 w-full py-1 text-center text-[#B75C36]">
//                   ₹22,489,206.60
//                 </p>
//               </div>
//             </div>

//             {/* Stage Line */}
//             <img
//               className="object-fill mt-3"
//               src={DailyProfitRankStage}
//               alt="stage"
//             />

//             {/* Bottom Ranked Cards */}
//             <div className="flex flex-col gap-2 mt-2 p-4">
//               <div className="w-full flex justify-between items-center rounded-md shadow p-2">
//                 <div className="flex items-center gap-4 text-white">
//                   <p>4</p>
//                   <div className="flex items-center space-x-2 w-[35%]">
//                     <img
//                       src={person5}
//                       className="w-10 h-10 rounded-full object-cover"
//                     />
//                     <p className="text-xs font-semibold">Mem***AIH</p>
//                   </div>
//                 </div>
//                 <p className="text-xs font-semibold text-[#00e8c2]">
//                   ₹14,917,560.00
//                 </p>
//               </div>

//               <div className="w-full flex justify-between items-center rounded-md shadow p-2">
//                 <div className="flex items-center gap-4 text-white">
//                   <p>7</p>
//                   <div className="flex items-center space-x-2 w-[35%]">
//                     <img
//                       src={person6}
//                       className="w-10 h-10 rounded-full object-cover"
//                     />
//                     <p className="text-xs font-semibold">Mem***BGX</p>
//                   </div>
//                 </div>
//                 <p className="text-xs font-semibold text-[#00e8c2]">
//                   ₹1,764,000.00
//                 </p>
//               </div>

//               <div className="w-full flex justify-between items-center rounded-md shadow p-2">
//                 <div className="flex items-center gap-4 text-white">
//                   <p>8</p>
//                   <div className="flex items-center space-x-2 w-[35%]">
//                     <img
//                       src={person7}
//                       className="w-10 h-10 rounded-full object-cover"
//                     />
//                     <p className="text-xs font-semibold">Mem***ABB</p>
//                   </div>
//                 </div>
//                 <p className="text-xs font-semibold text-[#00e8c2]">
//                   ₹1,764,000.00
//                 </p>
//               </div>

//               <div className="w-full flex justify-between items-center rounded-md shadow p-2">
//                 <div className="flex items-center gap-4 text-white">
//                   <p>9</p>
//                   <div className="flex items-center space-x-2 w-[35%]">
//                     <img
//                       src={person8}
//                       className="w-10 h-10 rounded-full object-cover"
//                     />
//                     <p className="text-xs font-semibold">Mem***IME</p>
//                   </div>
//                 </div>
//                 <p className="text-xs font-semibold text-[#00e8c2]">
//                   ₹1,176,000.00
//                 </p>
//               </div>

//               <div className="w-full flex justify-between items-center rounded-md shadow p-2">
//                 <div className="flex items-center gap-4 text-white">
//                   <p>10</p>
//                   <div className="flex items-center space-x-2 w-[35%]">
//                     <img
//                       src={person9}
//                       className="w-10 h-10 rounded-full object-cover"
//                     />
//                     <p className="text-xs font-semibold">Mem***CDV</p>
//                   </div>
//                 </div>
//                 <p className="text-xs font-semibold text-[#00e8c2]">
//                   ₹1,123,080.00
//                 </p>
//               </div>

//             </div>
//           </div>
//         </div> */}