import { Mail, Phone, User, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import BtnDataForm from "./BtnDataForm";

import GoogleIcon from "../../assets/img/Google-icon.png";
import logo from "../../assets/img/LogoApp.png";

function FormSingUp({ title, subtitle,onLogin }) {
  const btnSingUp = [
    {
      id: 1,
      lable: "نام و نام خانوادگی",
      backIcon: <User className="size-5" />,
    },
    {
      id: 2,
      lable: "شماره موبایل",
      backIcon: <Phone className="size-5" />,
    },
    {
      id: 3,
      lable: "ایمیل ( اختیاری )",
      backIcon: <Mail className="size-5" />,
    },
    {
      id: 4,
      lable: "رمز عبور",
      backIcon: <Lock className="size-5" />,
      showPassIcon: (
        <EyeOff className="absolute left-4 top-4 size-5 text-gray-400" />
      ),
    },
    {
      id: 5,
      lable: "تکرار رمز عبور",
      backIcon: <Lock className="size-5" />,
      showPassIcon: (
        <EyeOff className="absolute left-4 top-4 size-5 text-gray-400" />
      ),
    },
  ];

  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="absolute -left-50 top-10 bg-white rounded-3xl w-150 min-h-200 p-7 shadow-[0_0_45px_rgba(0,0,0,0.3)]">
      <div className="w-full">
        {/* Title */}
        <div className="py-2 flex items-center justify-center flex-col">
          <h1 className="font-[Vazir] text-gray-900 text-2xl font-extrabold">
            {title}
          </h1>

          <p className="font-[Vazir] p-3 text-gray-500 text-md font-bold">
            {subtitle}
          </p>
        </div>

        {/* Inputs */}
        <div className="px-2">
          {btnSingUp.map((txt) => {
            return (
              <BtnDataForm
                key={txt.id}
                lable={txt.lable}
                backIcon={txt.backIcon}
                showPassIcon={txt.showPassIcon}
              />
            );
          })}
        </div>

        {/* Rules */}
        <div className="px-2 py-5 flex justify-end items-center">
          <div className="flex items-center">
            <label
              htmlFor="rules"
              className="font-[Vazir] font-bold pr-3 text-sm text-gray-700"
            >
              <a className="text-violet-800 cursor-pointer hover:underline">
                شرایط و قوانین
              </a>{" "}
              را می‌پذیرم
            </label>

            <input
              id="rules"
              type="checkbox"
              className="size-4 cursor-pointer accent-violet-800"
            />
          </div>
        </div>

        {/* Signup button */}
        <div className="px-2">
          <button
            type="button"
            onClick={handleSignUp}
            disabled={loading}
            className="
              relative
              w-full
              h-12
              cursor-pointer
              rounded-xl
              font-[Vazir]
              bg-violet-800
              text-lg
              font-bold
              text-white
              flex
              items-center
              justify-center
              overflow-hidden
              transition-all
              duration-300

              hover:bg-violet-900
              hover:shadow-lg
              hover:shadow-violet-200

              active:scale-[0.97]

              disabled:cursor-not-allowed
              disabled:opacity-90
            "
          >
            <span
              className={`
                absolute
                transition-all
                duration-300
                ${
                  loading
                    ? "opacity-0 scale-75 translate-y-3"
                    : "opacity-100 scale-100 translate-y-0"
                }
              `}
            >
              ثبت نام
            </span>

            <div
              className={`
                flex
                items-center
                gap-3
                transition-all
                duration-300
                ${loading ? "opacity-100 scale-100" : "opacity-0 scale-75"}
              `}
            >
              <span
                className="
                  w-5
                  h-5
                  border-2
                  border-white/40
                  border-t-white
                  rounded-full
                  animate-spin
                "
              />

              <span>...در حال ثبت نام</span>
            </div>
          </button>

          <div className="px-2 py-10 relative flex items-center">
            <hr className="w-full border-gray-300" />

            <p className="font-[Vazir] bg-white absolute left-1/2 -translate-x-1/2 px-5 text-gray-600">
              یا
            </p>
          </div>

          {/* Google signup */}
          <button
            type="button"
            className="w-full h-12 rounded-lg font-[Vazir] bg-white border-2 border-gray-400 text-lg font-bold text-gray-600 flex justify-center items-center cursor-pointer transition-all durat hover:border-violet-500 hover:text-violet-800 hover:bg-vi active:scale-[0.98]
            "
          >
            <img
              src={GoogleIcon}
              alt="Google"
              className="size-6 object-contain"
            />

            <span className="pl-2.5">ثبت نام با گوگل</span>
          </button>
        </div>

        {/* Login link */}
        <div className="flex items-center justify-center mt-4">
          <span className="font-[Vazir] font-bold text-gray-700">
            قبلاً حساب کاربری دارید؟{" "}
            <a onClick={onLogin} className="font-[Vazir] font-bold text-violet-800 text-sm px-1 underline cursor-pointer">
              وارد شوید
            </a>
          </span>
        </div>       
      </div>
    </div>
  );
}

export default FormSingUp;
