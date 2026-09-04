import { Mail, Phone, User, Lock } from "lucide-react";
import { useState } from "react";
import BtnDataForm from "./BtnDataForm";
import GoogleIcon from "../../assets/img/Google-icon.png";
import loginCrud from "../../api/loginCrud";
import { useToast } from "../custom/Toast";

function FormSingUp({ title, subtitle, onLogin }) {
  const toast = useToast();

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [loading, setLoading] = useState(false);

  const btnSingUp = [
    {
      id: 1,
      name: "firstName",
      lable: "نام",
      backIcon: <User className="size-5" />,
    },
    {
      id: 2,
      name: "lastName",
      lable: "نام خانوادگی",
      backIcon: <User className="size-5" />,
    },
    {
      id: 3,
      name: "phoneNumber",
      lable: "شماره موبایل",
      backIcon: <Phone className="size-5" />,
    },
    {
      id: 4,
      name: "email",
      lable: "ایمیل (اختیاری)",
      backIcon: <Mail className="size-5" />,
    },
    {
      id: 5,
      name: "password",
      lable: "رمز عبور",
      type: "password",
      backIcon: <Lock className="size-5" />,
    },
    {
      id: 6,
      name: "confirmPassword",
      lable: "تکرار رمز عبور",
      type: "password",
      backIcon: <Lock className="size-5" />,
    },
  ];

  const handleSignUp = async () => {
    if (loading) return;

    try {
      setLoading(true);

      // بررسی تکرار رمز عبور
      if (formData.password !== formData.confirmPassword) {
        toast.error("رمز عبور و تکرار رمز عبور یکسان نیستند");
        return;
      }

      const data = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        email: formData.email.trim(),
        password: formData.password,
      };

      console.log("Register Payload:", data);

      const response = await loginCrud.registerUserSingUp(data);

      const result = await response.json().catch(() => null);

      console.log("Register Response:", result);

      // اگر درخواست ناموفق بود
      if (!response.ok) {
        let errorMessage = "ثبت نام انجام نشد";

        // خطاهای ولیدیشن بک‌اند
        if (result?.error) {
          const errors = Object.values(result.error).flat();

          if (errors.length > 0) {
            errorMessage = errors.join("\n");
          }
        }

        // اگر بک‌اند message معمولی فرستاد
        else if (result?.message) {
          errorMessage = result.message;
        }

        throw new Error(errorMessage);
      }

      // ثبت نام موفق
      setSuccess(true);

      toast.success("شما با موفقیت ثبت نام کردید", {
        title: "ثبت نام موفق 🎉",
        duration: 2500,
      });

      // انتقال به صفحه ورود
      setTimeout(() => {
        onLogin?.();
      }, 2500);
    } catch (error) {
      console.error("Register Error:", error);

      toast.error(error.message || "خطایی هنگام ثبت نام رخ داد", {
        title: "ثبت نام ناموفق",
        duration: 6000,
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="absolute -left-50 top-10 bg-white rounded-3xl w-150 min-h-200 p-7 shadow-[0_0_45px_rgba(0,0,0,0.3)]">
      {success && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-[400px] rounded-3xl bg-white p-8 text-center shadow-2xl">
            {/* آیکون تیک */}
            <div className="mx-auto mb-5 flex size-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="size-10 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="font-[Vazir] text-2xl font-extrabold text-gray-900">
              ثبت نام موفق بود 🎉
            </h2>

            <p className="mt-3 font-[Vazir] font-bold text-gray-500">
              شما با موفقیت ثبت نام کردید
            </p>

            <p className="mt-2 font-[Vazir] text-sm text-gray-400">
              در حال انتقال به صفحه ورود...
            </p>

            {/* Progress */}
            <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-full origin-right animate-[progress_2.5s_linear] rounded-full bg-green-500" />
            </div>
          </div>
        </div>
      )}
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
          {btnSingUp.map((txt) => (
            <BtnDataForm
              key={txt.id}
              name={txt.name}
              lable={txt.lable}
              backIcon={txt.backIcon}
              type={txt.type}
              value={formData[txt.name]}
              showPassword={
                txt.type === "password" ? showPassword[txt.name] : false
              }
              onTogglePassword={
                txt.type === "password"
                  ? () => togglePassword(txt.name)
                  : undefined
              }
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [txt.name]: e.target.value,
                }))
              }
            />
          ))}
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
            className="
              w-full
              h-12
              rounded-lg
              font-[Vazir]
              bg-white
              border-2
              border-gray-400
              text-lg
              font-bold
              text-gray-600
              flex
              justify-center
              items-center
              cursor-pointer
              transition-all
              duration-300
              hover:border-violet-500
              hover:text-violet-800
              hover:bg-violet-50
              active:scale-[0.98]
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
            <a
              onClick={onLogin}
              className="font-[Vazir] font-bold text-violet-800 text-sm px-1 underline cursor-pointer"
            >
              وارد شوید
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FormSingUp;
