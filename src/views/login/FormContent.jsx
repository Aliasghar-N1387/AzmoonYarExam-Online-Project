import { useEffect, useState } from "react";
import logo from "../../assets/img/LogoApp.png";
import pictureSystem from "../../assets/img/img-system.png";
import FormSingIn from "../../components/login/FormSingIn";
import FormSingUp from "../../components/login/FormSingUp";
import picSingUp from "../../assets/img/img-SingUp.png";

import {
  ClipboardCheck,
  BookOpen,
  ChartNoAxesCombined,
  ShieldCheck,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function FormContent() {
  const [activeForm, setActiveForm] = useState("singin");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    AOS.refresh();
  }, [activeForm]);

  return (
    <div>
      <div className="flex h-screen">
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-violet-800 to-purple-900 flex flex-col justify-center items-center pr-150">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-950/30 rounded-full blur-3xl animate-pulse" />

          <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />

          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

          <div
            className="relative z-10 flex flex-col items-center"
            data-aos="zoom-in"
          >
            <div className="flex">
              <img src={logo} alt="Logo" className="w-35 h-30 object-contain" />

              <div className="py-4">
                <h1 className="font-[Vazir] text-white text-5xl font-extrabold">
                  آزمون یار
                </h1>

                <p className="font-[Vazir] p-5 text-gray-300 text-2xl font-bold">
                  AzmoonYar
                </p>
              </div>
              {/* Floating Glass Cards */}
              <div className="absolute ml-235 inset-0 pointer-events-none hidden xl:block z-20">
                {/* Card 1 */}
                <div
                  className="floating-card floating-1 absolute top-[9%] right-10 w-64 rounded-2xl border border-white/25 bg-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.15)] px-5 py-4
    "
                >
                  <div className="flex items-center gap-4" dir="rtl">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 shadow-[0_0_20px_rgba(255,255,255,0.15)]
      "
                    >
                      <ClipboardCheck className="text-white" size={29} />
                    </div>

                    <div>
                      <h3 className="font-[Vazir] text-white font-bold text-sm">
                        ساخت آزمون حرفه‌ای
                      </h3>

                      <p className="font-[Vazir] text-white/65 text-[11px] mt-1 leading-5">
                        طراحی آزمون‌های استاندارد در چند دقیقه
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  className="floating-card floating-2 absolute top-[32%] -left-50 w-64 rounded-2xl border border-white/25 bg-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.15)] px-5 py-4
    "
                >
                  <div className="flex items-center gap-4" dir="rtl">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15
      "
                    >
                      <BookOpen className="text-white" size={29} />
                    </div>

                    <div>
                      <h3 className="font-[Vazir] text-white font-bold text-sm">
                        بانک سوالات هوشمند
                      </h3>

                      <p className="font-[Vazir] text-white/65 text-[11px] mt-1 leading-5">
                        دسترسی به سوالات طبقه‌بندی‌شده و به‌روز
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div
                  className="floating-card floating-3 absolute top-[53%] right-10 w-64 rounded-2xl border border-white/25 bg-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.15)] px-5 py-4
    "
                >
                  <div className="flex items-center gap-4" dir="rtl">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15
      "
                    >
                      <ChartNoAxesCombined className="text-white" size={29} />
                    </div>

                    <div>
                      <h3 className="font-[Vazir] text-white font-bold text-sm">
                        گزارش و تحلیل دقیق
                      </h3>

                      <p className="font-[Vazir] text-white/65 text-[11px] mt-1 leading-5">
                        بررسی عملکرد و پیشرفت با نمودارهای حرفه‌ای
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div
                  className="floating-card floating-4 absolute top-[73%] -left-50 w-64 rounded-2xl border border-white/25 bg-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.15)] px-5 py-4
    "
                >
                  <div className="flex items-center gap-4" dir="rtl">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15
      "
                    >
                      <ShieldCheck className="text-white" size={29} />
                    </div>

                    <div>
                      <h3 className="font-[Vazir] text-white font-bold text-sm">
                        امن و قابل اعتماد
                      </h3>

                      <p className="font-[Vazir] text-white/65 text-[11px] mt-1 leading-5">
                        حفظ امنیت اطلاعات با بالاترین استانداردها
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

            <div className="py-10 pt-5"  data-aos-delay="150">
              <p className="font-[Vazir] text-white text-lg flex items-center justify-center">
                پلتفرم هوشمند مدیریت سوالات و ساخت امتحان
              </p>

              <p className="font-[Vazir] text-white text-lg flex items-center justify-center">
                ویژه معلم‌های حرفه‌ای
              </p>
            </div>

            {activeForm === "singin" && (
              <div data-aos="zoom-in" data-aos-delay="250">
                <img
                  src={pictureSystem}
                  alt="System"
                  className="w-170 h-110 object-contain pl-15"
                />
              </div>
            )}
            {activeForm === "singup" && (
              <div data-aos="zoom-in" data-aos-delay="250">
                <img
                  src={picSingUp}
                  alt="System"
                  className="w-170 h-110 object-contain pl-15"
                />
              </div>
            )}
          </div>
        </div>
        <div className="relative" data-aos="fade-left" data-aos-delay="150">
          {activeForm === "singin" && (
            <FormSingIn
              title="ورود به آزمون یار"
              subtitle="برای ادامه وارد حساب کاربری خود شوید"
              onSingUp={() => setActiveForm("singup")}
            />
          )}

          {activeForm === "singup" && (
            <FormSingUp
              title="ثبت نام"
              subtitle="برای ایجاد حساب کاربری، اطلاعات خود را وارد کنید"
              onLogin={() => setActiveForm("singin")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FormContent;
