import BtnDataForm from "./BtnDataForm";
import { Mail, EyeOff, Lock } from "lucide-react";
import GoogleIcon from "../../assets/img/Google-icon.png";
import logo from "../../assets/img/LogoApp.png";
import { useState } from "react";

function FormSingIn({ title, subtitle, onSingUp }) {
  const btnSingIn = [
    {
      id: 1,
      lable: "ایمیل یا شماره موبایل",
      backIcon: <Mail className="size-5" />,
    },
    {
      id: 2,
      lable: "رمز عبور",
      backIcon: <Lock className="size-5" />,
      showPassIcon: (
        <EyeOff className="absolute left-4 top-4 size-5 text-gray-400" />
      ),
    },
  ];

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="absolute -left-50 top-10 bg-white rounded-3xl w-150 h-200 p-7 shadow-[0_0_45px_rgba(0,0,0,0.3)]">
      <div className="w-full">
        <div className="py-4 flex items-center justify-center flex-col">
          <h1 className="font-[Vazir] text-gray-900 text-2xl font-extrabold">
            {title}
          </h1>
          <p className="font-[Vazir] p-5 text-gray-500 text-md font-bold">
            {subtitle}
          </p>
        </div>

        <div className="px-2">
          {btnSingIn.map((txt) => {
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

        <div className="px-2 py-6 flex justify-between items-center">
          <div>
            <a className="font-[Vazir] font-bold text-violet-800 text-sm cursor-pointer transition-all hover:underline hover:decoration-violet-800">
              فراموشی رمز عبور ؟
            </a>
          </div>
          <div className="flex items-center">
            <label className="font-[Vazir] font-bold pr-3 text-sm">
              مرا به خاطر بسپار
            </label>
            <input
              type="checkbox"
              className="size-4 cursor-pointer accent-violet-800"
            />
          </div>
        </div>

        <div className="px-2">
          <button
            onClick={handleLogin}
            disabled={loading}
            className="
    relative
    w-full h-14
    cursor-pointer
    rounded-xl
    font-[Vazir]
    bg-violet-800
    text-lg font-bold text-white

    flex items-center justify-center
    overflow-hidden

    transition-all duration-300

    hover:bg-violet-900
    hover:shadow-lg
    hover:shadow-violet-200

    active:scale-[0.97]

    disabled:cursor-not-allowed
  "
          >
            <span
              className={`
      absolute
      transition-all duration-300
      ${
        loading
          ? "opacity-0 scale-75 translate-y-3"
          : "opacity-100 scale-100 translate-y-0"
      }
    `}
            >
              ورود
            </span>

            <div
              className={`
      flex items-center gap-3
      transition-all duration-300
      ${loading ? "opacity-100 scale-100" : "opacity-0 scale-75"}
    `}
            >
              <span
                className="
        w-5 h-5
        border-2
        border-white/40
        border-t-white
        rounded-full
        animate-spin
      "
              ></span>

              <span> ...در حال ورود</span>
            </div>
          </button>

          <div className="px-2 py-10 relative">
            <hr className="text-gray-300" />
            <p className="font-[Vazir] bg-white absolute right-59 top-7.5 px-5">
              یا
            </p>
          </div>
          <button
            type="button"
            className="w-full h-12 rounded-lg font-[Vazir] bg-white border-2 border-gray-400 text-lg font-bold text-gray-600 flex justify-center items-center cursor-pointer transition-all durat hover:border-violet-500 hover:text-violet-800 hover:bg-vi active:scale-[0.98]"
          >
            <img
              src={GoogleIcon}
              alt="Google"
              className="size-6 object-contain"
            />

            <span className="pl-2.5">ثبت نام با گوگل</span>
          </button>
        </div>

        <div className="flex items-center justify-center py-10">
          <span className="font-bold">
            حساب کاربری ندارید ؟{" "}
            <a
              onClick={onSingUp}
              className="font-[Vazir] font-bold text-violet-800 text-sm px-1 underline cursor-pointer"
            >
              ثبت نام
            </a>
            کنید
          </span>
        </div>

        <div className="flex py-8 items-center justify-center">
          <div
            className="w-14 h-12 bg-violet-800"
            style={{
              WebkitMaskImage: `url(${logo})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: `url(${logo})`,
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
          ></div>

          <div className="mt-2">
            <h1 className="font-[Vazir] text-gray-700 text-lg font-extrabold">
              آزمون یار
            </h1>

            <p className="font-[Vazir] text-gray-400 text-xs font-bold">
              AzmoonYar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSingIn;
