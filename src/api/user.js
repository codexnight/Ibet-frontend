'use-client'
import request from "../utils/axios";
import { useEffect, useState } from "react";

export const login = async (data) => {
  return await request({ method: "POST", url: "/user/login", data: JSON.stringify(data)});
};

export const signup = async (data) => {
  return await request ({method: "POST", url: "/user/signup", data:JSON.stringify(data)});
}

export const getOpenDuels = async () => {
  return await request({method: "POST", url:"/open/duels"});
}

export const getWinners =  (params) => {
  return request({ method: "GET", url: "/winners", params });
};

export const getCustomCategories = (params) => {
  return request({ method: "GET", url: "/games-custom-categories", params });
};

export const launchGame = (remoteId) => {
  return request({ method: "GET", url: `/account/game-launch/${remoteId}` });
};

export const getXbFrame = () => {
  return request({ method: "GET", url: "/xb-frame?locale=en" });
};

export const getBcFrame = () => {
  return request({ method: "GET", url: "/bc-frame?locale=en" });
};

export const getMe = () => {
  return request({ method: "GET", url: "/account/me" });
};

export const getXbHistory = () => {
  return request({ method: "GET", url: "/xb-frame-history" });
};

export const getBcHistory = () => {
  return request({ method: "GET", url: "/bc-frame-history" });
};

export const getBigBanners = () => {
  return request({ method: "GET", url: "/big-banners-new?lang=he" });
};

export const changePassword = (data) => {
  return request({ method: "PUT", url: "/account/update-password", data });
};

export const getDepositPaymentMethods = () => {
  return request({ method: "GET", url: "/account/my-deposit-paysys-v2" });
};

export const getWithdrawPaymentMethods = () => {
  return request({ method: "GET", url: "/account/my-withdraw-paysys-v2" });
};

export const checkNickname = (data) => {
  return request({ method: "POST", url: "/check-nickname", data });
};

export const tranferFunds = (data) => {
  return request({ method: "POST", url: "/account/transfer-funds", data });
};

export const checkPromoCode = (data) => {
  return request({ method: "POST", url: "/check-affnickname", data });
};

export const transferFromPoker = (data) => {
  return request({ method: "POST", url: "/account/transfer-from-poker", data });
};

export const withdrawHistory = () => {
  return request({
    method: "GET",
    url: "/account/my-withdraws?limit=150&offset=0",
  });
};

export const checkCardPayment = () => {
  return request({
    method: "GET",
    url: "/account/check-card-payment-availability",
  });
};

export const checkPhone = (data) => {
  return request({ method: "POST", url: "/check-phone", data });
};

export const register = (data) => {
  return request({ method: "POST", url: "/user", data });
};

export const validation = (data) => {
  return request({ method: "POST", url: "/validation", data });
};

export const depositWithCash = (data) => {
  return request({ method: "POST", url: "/account/paysys-v2/cash", data });
};

export const depositWithUSDT = (data) => {
  return request({ method: "POST", url: "/account/paysys-v2/usdt", data });
};

export const depositWithEtherium = (data) => {
  return request({ method: "POST", url: "/account/paysys-v2/etherium", data });
};

export const depositWithBitcoin = (data) => {
  return request({ method: "POST", url: "/account/paysys-v2/bitcoin", data });
};

export const depositWithPaypal = (data) => {
  return request({ method: "POST", url: "/account/paysys-v2/paypal", data });
};

export const depositWithBit = (data) => {
  return request({ method: "POST", url: "/account/paysys-v2/bit", data });
};

export const depositWithCards = (data) => {
  return request({
    method: "POST",
    url: "/account/card-payment",
    data,
  });
};

export const depositWithPaybox = (data) => {
  return request({ method: "POST", url: "/account/paysys-v2/paybox", data });
};

export const depositWithBank = (data) => {
  return request({
    method: "POST",
    url: "/account/paysys-v2/bankDirect",
    data,
  });
};

export const depositWithATM = (data) => {
  return request({
    method: "POST",
    url: "/account/paysys-v2/bank-atm",
    data,
  });
};

export const depositWithMezuman = (data) => {
  return request({
    method: "POST",
    url: "/account/paysys-v2/mezuman",
    data,
  });
};

export const getPaymentData = (params) => {
  return request({
    method: "GET",
    url: "/account/paysys-v2/check-payment-data",
    params,
  });
};

export const getEtheriumAddress = (data) => {
  return request({ method: "GET", url: "/account/paysys-v2/etherium", data });
};

export const getBitcoinAddress = (data) => {
  return request({ method: "GET", url: "/account/paysys-v2/bitcoin", data });
};

export const getUSDTAddress = (data) => {
  return request({ method: "GET", url: "/account/paysys-v2/usdt", data });
};

export const checkPaymentData = (params) => {
  return request({
    method: "GET",
    url: "/account/paysys-v2/check-payment-data",
    params,
  });
};

export const confirmOrder = (data) => {
  return request({
    method: "PUT",
    url: "/account/paysys-v2/order-pay-confirm",
    data,
  });
};

export const getPaymentInfo = (params) => {
  return request({
    method: "GET",
    url: "/account/paysys-v2/order-status",
    params,
  });
};

export const getContacts = (params) => {
  return request({ method: "GET", url: "/contacts", params });
};

export const createWithDraw = (paysys, data) => {
  return request({
    method: "POST",
    url: `/account/withdraw/${paysys}`,
    data,
  });
};
