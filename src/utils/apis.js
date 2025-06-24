// const baseUrlTirangaWin = "https://root.tirangawin.club/";
// const configModalTirangaWin = `${baseUrlTirangaWin}api/`
// import REACT_APP_API_URL from ""
// export const baseUrlUsaWin =import.meta.env.VITE_API_URL;
export const baseUrlUsaWin = "https://root.jupitergames.world";
export const configModalUsaWin = `${baseUrlUsaWin}/api/`

const apis = {
  sendOtp: "https://otp.fctechteam.org/send_otp.php?mode=live&digit=4&mobile=",
  verifyOtp: "https://otp.fctechteam.org/verifyotp.php",
  createUserId: `${configModalUsaWin}otp-register`,
  register: `${configModalUsaWin}register`,
  login: `${configModalUsaWin}login`,
  profile: `${configModalUsaWin}profile?id=`,
  changePassword: `${configModalUsaWin}changePassword`,
  fundTransfer: `${configModalUsaWin}main_wallet_transfers`,

  //spin to wheel game urls
  spin_bet: `${configModalUsaWin}spin/bet`,
  spin_result: `${configModalUsaWin}spin/result`,
  spin_betHistory: `${configModalUsaWin}spin/bet_history`,
  // keno_multiplier: `${configModalUsaWin}keno_multiplier`,

  //keno game urls
  keno_bet: `${configModalUsaWin}keno-bet`,
  keno_result: `${configModalUsaWin}keno_result`,
  keno_betHistory: `${configModalUsaWin}keno-bet-history`,
  keno_multiplier: `${configModalUsaWin}keno_multiplier`,
  keno_win_amount: `${configModalUsaWin}keno-win-amount`,

  //plinko game urls
  plinko_bet: `${configModalUsaWin}plinko_bet`,
  plinko_index_list: `${configModalUsaWin}plinko_index_list?type=`,
  plinko_result: `${configModalUsaWin}plinko_result?userid=`,
  plinko_multiplier: `${configModalUsaWin}plinko_multiplier`,

  //heads n tails game urls
  headsntails_bet: `${configModalUsaWin}bets`,
  headsntails_history: `${configModalUsaWin}bet_history`,
  headsntails_result: `${configModalUsaWin}results?game_id=14&limit=8`,
  results_api_sno: `${configModalUsaWin}results?game_id=14&limit=1`,

  //wingo game urls
  wingo_bet: `${configModalUsaWin}bets`,
  wingo_my_history: `${configModalUsaWin}bet_history`,
  wingo_game_history: `${configModalUsaWin}results`,
  wingo_win_amount_announcement: `${configModalUsaWin}win-amount`,
  get_result_trx: `${configModalUsaWin}get_result`,

  // mines game urls
  mines_bet: `${configModalUsaWin}mine_bet`,
  mines_cashout: `${configModalUsaWin}mine_cashout`,
  mines_result: `${configModalUsaWin}mine_result?userid=`,
  mines_multiplier: `${configModalUsaWin}mine_multiplier`,

  // dragon tiger game urls
  dragon_bet: `${configModalUsaWin}dragon_bet`,
  dragonBet_history: `${configModalUsaWin}bet_history`,
  dragonResults: `${configModalUsaWin}results`,

  // dice game urls
  dice_bet: `${configModalUsaWin}dragon_bet`,
  dice_Bet_history: `${configModalUsaWin}bet_history`,
  dice_Results: `${configModalUsaWin}results`,
  dice_win_amount: `${configModalUsaWin}win-amount`,

  // red n black
  rednblack_bet: `${configModalUsaWin}dragon_bet`,
  rednblack_Bet_history: `${configModalUsaWin}bet_history`,
  rednblack_Results: `${configModalUsaWin}results`,
  rednblack_win_amount: `${configModalUsaWin}win-amount`,

  // seven up down
  sevenUpDown_bet: `${configModalUsaWin}dragon_bet`,
  sevenUpDown_Bet_history: `${configModalUsaWin}bet_history`,
  sevenUpDown_Results: `${configModalUsaWin}results`,
  sevenUpDown_win_amount: `${configModalUsaWin}win-amount`,
  // mini roulette 
  miniroullete_bet: `${configModalUsaWin}miniroullete-bet`,
  miniroulletebet_history: `${configModalUsaWin}miniroulletebet-history`,
  miniroullete_results: `${configModalUsaWin}miniroullete_results`,
  miniroulletewin_amount: `${configModalUsaWin}miniroulletewin-amount`,

  //  teenpatti
  teenPatti_bet: `${configModalUsaWin}teenPatti_bet`,
  teenPatti_Bet_history: `${configModalUsaWin}teenPattibethistory`,
  teenPatti_Results: `${configModalUsaWin}teenPatti-bet-result`,
  teenPatti_win_amount: `${configModalUsaWin}teen-patti-win-amt`,

  // jhand munda
  jhandiMunda_bet: `${configModalUsaWin}dragon_bet`,
  jhandiMunda_Bet_history: `${configModalUsaWin}bet_history`,
  jhandiMunda_Results: `${configModalUsaWin}results`,
  jhandiMunda_win_amount: `${configModalUsaWin}win-amount`,

  // high low 
  high_low_bet: `${configModalUsaWin}high_low_bet`,
  high_low_results: `${configModalUsaWin}high_low_results`,
  high_low_win_amount: `${configModalUsaWin}high_low_win_amount`,
  high_low_bet_history: `${configModalUsaWin}high_low_bet_history`,
  // jackpot low 
  jackpot_bet: `${configModalUsaWin}jackpot-bet`,
  jackpot_results: `${configModalUsaWin}jackpot_results`,
  jackpot_five_result: `${configModalUsaWin}jack_five_result`,
  jackpot_win_amount: `${configModalUsaWin}jackpot_win_amount`,
  jackpot_history: `${configModalUsaWin}jackpot_history`,

  // hot air balloon
  hotAirBalloon_bet: `${configModalUsaWin}balloon_bet`,
  hotAirBalloon_bet_history: `${configModalUsaWin}balloon_history`,
  hotAirBalloon_last_five_result: `${configModalUsaWin}hot_last_five_result`,
  hotAirBalloon_bet_cancel: `${configModalUsaWin}balloon_bet_cancle`,
  hotAirBalloon_cashout: `${configModalUsaWin}balloon-cashout`,

  // gameon lottery (blockchain lottery)
  gameon_lottery_bet: `${configModalUsaWin}blockchain-bets`,
  gameon_lottery_result_history: `${configModalUsaWin}lottery-result-history`,
  gameon_lottery_win_amount: `${configModalUsaWin}lottery-win-amount`,
  gameon_lottery_result: `${configModalUsaWin}lottery_result`,
  
  // triple chance
  tripleChance_bet: `${configModalUsaWin}triple_chance/bet`,
  tripleChance_result_history: `${configModalUsaWin}triple_chance/bet_history/?user_id=`,
  tripleChance_win_amount: `${configModalUsaWin}triplechance_win_amount/?user_id=`,
  tripleChance_result: `${configModalUsaWin}triple_chance/result/?user_id=`,
  //  lucky12_bet
  lucky12_bet: `${configModalUsaWin}lucky12/bet`,
  lucky12_bet_history: `${configModalUsaWin}lucky12/bet_history?user_id=`,
  lucky12_result: `${configModalUsaWin}lucky12/result?user_id=`,
  //  lucky16_bet
  lucky16_bet: `${configModalUsaWin}lucky16/bet`,
  lucky16_bet_history: `${configModalUsaWin}lucky16/bet_history?user_id=`,
  lucky16_result: `${configModalUsaWin}lucky16/result?user_id=`,
  //  fun target
  funTarget_bet: `${configModalUsaWin}fun_target_bet`,
  funTarget_bet_history: `${configModalUsaWin}fun_bet_history?user_id=`,
  funTarget_result: `${configModalUsaWin}fun_last_result`,
  funTarget_winAmount: `${configModalUsaWin}fun_win_amount?user_id=`,
  //titli kabooter 
  titli_bet: `${configModalUsaWin}titli-bet`,
  titli_bet_history: `${configModalUsaWin}titli-bet-history`,
  titli_getAmount: `${configModalUsaWin}getamount`,
  titli_winAmount: `${configModalUsaWin}titli-win-amount`,
  titli_result: `${configModalUsaWin}titli_result`,

  // general apis
  payin_deposit_payzaaar: `${configModalUsaWin}payzaaar`,
  payin_deposit: `${configModalUsaWin}payin`,
  payin_deposit_usdt: `${configModalUsaWin}usdt_payin`,
  payin_deposit_camlenio: `${configModalUsaWin}camlenio?user_id=`,
  depositHistory: `${configModalUsaWin}deposit_history`,
  addAccount: `${configModalUsaWin}add_account`,
  accountView: `${configModalUsaWin}Account_view`,
  payout_withdraw: `${configModalUsaWin}withdraw`,
  usdtpayout_withdraw: `${configModalUsaWin}usdtwithdraw`,
  withdrawHistory: `${configModalUsaWin}withdraw_history`,
  promotionData: `${configModalUsaWin}agency-promotion-data-`,
  subordinateData: `${configModalUsaWin}subordinate-data`,
  commisionDetails: `${configModalUsaWin}commission_details?userid=`,
  tier: `${configModalUsaWin}tier`,
  vipLevel: `${configModalUsaWin}vip_level?userid=`,
  vipLevelHistory: `${configModalUsaWin}vip_level_history?userid=`,
  vipLevelAddMoney: `${configModalUsaWin}add_money`,
  redeemGift: `${configModalUsaWin}gift_cart_apply`,
  redeemGiftList: `${configModalUsaWin}gift_redeem_list?userid=`,
  gameStatsHistory: `${configModalUsaWin}total_bet_details?userid=`,
  activityRewards: `${configModalUsaWin}activity_rewards?userid=`,
  activityRewardsClaim: `${configModalUsaWin}activity_rewards_claim`,
  activityRewardsHistory: `${configModalUsaWin}activity_rewards_history?user_id=`,
  attendanceList: `${configModalUsaWin}attendance_List?userid=`,
  attendanceHistory: `${configModalUsaWin}attendance_history?userid=`,
  attendanceClaim: `${configModalUsaWin}attendance_claim`,
  slider: `${configModalUsaWin}slider_image_view`,
  invitation_bonus_list: `${configModalUsaWin}invitation_bonus_list?userid=`,
  invitation_bonus_claim: `${configModalUsaWin}invitation_bonus_claim`,
  transaction_history_list: `${configModalUsaWin}transaction_history_list`,
  transaction_history: `${configModalUsaWin}transaction_history?userid=`,
  Invitation_records: `${configModalUsaWin}Invitation_records?userid=`,
  update_profile: `${configModalUsaWin}update_profile`,
  allAvatar: `${configModalUsaWin}image_all`,
  customer_service: `${configModalUsaWin}customer_service`,
  about_us: `${configModalUsaWin}about_us?type=`,
  newSubordinate: `${configModalUsaWin}new-subordinate?id=`,
  payModes: `${configModalUsaWin}pay_modes`,
  account_update: `${configModalUsaWin}account_update/`,
  country: `${configModalUsaWin}country`,
  betting_rebate_history: `${configModalUsaWin}betting_rebate_history?userid=`,
  add_usdt_account: `${configModalUsaWin}add_usdt_account`,
  usdt_account_view: `${configModalUsaWin}usdt_account_view?user_id=`,
  wingo_rules: `${configModalUsaWin}wingo_rules?type=`,
  getPaymentLimits: `${configModalUsaWin}getPaymentLimits`,
  all_game_list: `${configModalUsaWin}all_game_list`,
  get_game_url: `${configModalUsaWin}get_game_url`,
  all_game_list_spribe: `${configModalUsaWin}get_reseller_info`,
  get_game_url_spribe: `${configModalUsaWin}get_spribe_game_urls`,
  extra_first_deposit_bonus: `${configModalUsaWin}extra_first_deposit_bonus?userid=`,
  getBranchnameByIfsc: `${configModalUsaWin}get-ifsc-details?ifsc=`,
  trx_game_result: `${configModalUsaWin}trx/result`,
  update_jilli_wallet: `${configModalUsaWin}update_jilli_wallet`,
  update_jilli_to_user_wallet: `${configModalUsaWin}update_jilli_to_user_wallet`,
  update_spribe_wallet: `${configModalUsaWin}update_spribe_wallet`,
  update_spribe_to_user_wallet: `${configModalUsaWin}update_spribe_to_user_wallet`,
};

export default apis
