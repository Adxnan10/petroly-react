import { L } from "../../constants";

// TODO: arabic translation for groups screen
const arabic = {
  searchbar: "أدخل اسم المجتمع",
  createBlock: "الرجاء تسجيل الدخول",
};

// TODO: english translation for groups screen
const english = {
  searchbar: "Search for community name",
  createBlock: "Please Sign in",
};

export default function translator(lang) {
  switch (lang) {
    case L.AR_SA:
      return arabic;
    case L.EN_US:
      return english;
  }
}
