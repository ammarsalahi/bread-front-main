import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      price: 0,
      qty: 0,
      serviceid: 0,
      provider: 0,
      deliverprice: 0,
      eachprice: 0,
      title: "",
      themeName: "",
      userName: "",
      mobileNumber: 0,
      mobileCode: 0,
      nationalCode: 0,
      isLoggedIn: false,
      token: null,
      balance: 0,
      selected_bread_type: "",
      selected_bread: "",
      selected_day: "",
      selected_day_name: "",
      selected_daytime: "",
      selected_bread_shop: "",
      selected_bread_shop_name: "",
      selected_hour: "",
      selected_post: "",
      selected_address_id: 0,
      selected_address: "",
      selected_qty: 0,
      updateAll: (
        newPrice,
        newQty,
        newServiceid,
        newProvider,
        newTitle,
        newThemeName
      ) =>
        set({
          price: newPrice,
          qty: newQty,
          serviceid: newServiceid,
          provider: newProvider,
          title: newTitle,
          themeName: newThemeName,
        }),
      createOrder: (newUserName, newMobile) =>
        set({
          userName: newUserName,
          mobileNumber: newMobile,
        }),
      updateOrder: (newNationalCode, newMobileCode) =>
        set({
          nationalCode: newNationalCode,
          mobileCode: newMobileCode,
        }),
      removeToken: () =>
        set({
          token: null,
          isLoggedIn: false,
        }),
      addToken: (newToken, newmobileCode, newBalance) =>
        set({
          token: newToken,
          isLoggedIn: true,
          mobileCode: newmobileCode,
          balance: newBalance,
        }),
      addMobile: (newMobile) =>
        set({
          mobileNumber: newMobile,
        }),
      setBalance: (newBalance) =>
        set({
          balance: newBalance,
        }),

      new_deliverprice: (newdeliverprice) =>
        set({
          deliverprice: newdeliverprice,
        }),
      new_eachprice: (neweachprice) =>
        set({
          eachprice: neweachprice,
        }),
      new_nationalCode: (x) =>
        set({
          nationalCode: x,
        }),

      new_name: (x) =>
        set({
          userName: x,
        }),

      new_selected_bread_type: (newselected_bread_type) =>
        set({
          selected_bread_type: newselected_bread_type,
        }),
      new_selected_bread: (newselected_bread) =>
        set({
          selected_bread: newselected_bread,
        }),
      new_selected_bread_shop: (newselected_bread_shop) =>
        set({
          selected_bread_shop: newselected_bread_shop,
        }),
      new_selected_bread_shop_name: (newselected_bread_shop_name) =>
        set({
          selected_bread_shop_name: newselected_bread_shop_name,
        }),

      new_selected_daytime: (newselected_daytime) =>
        set({
          selected_daytime: newselected_daytime,
        }),
      new_selected_day: (newselected_day) =>
        set({
          selected_day: newselected_day,
        }),
      new_selected_day_name: (newselected_day_name) =>
        set({
          selected_day_name: newselected_day_name,
        }),
      new_selected_hour: (newselected_hour) =>
        set({
          selected_hour: newselected_hour,
        }),
      new_selected_address_id: (newselected_address_id) =>
        set({
          selected_address_id: newselected_address_id,
        }),
      new_selected_address: (newselected_address) =>
        set({
          selected_address: newselected_address,
        }),

      new_selected_qty: (newselected_qty) =>
        set({
          selected_qty: newselected_qty,
        }),
      new_selected_post: (newselected_post) =>
        set({
          selected_post: newselected_post,
        }),
    }),
    {
      name: "bread-storage", // name of the item in the storage (must be unique)
    }
  )
);
