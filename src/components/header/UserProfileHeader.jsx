import { MapPin, ChevronDown } from "lucide-react";
import profile from "../../assets/img/profile.jpg"


function UserProfileHeader() {
  return (
    <div
      dir="rtl"
      className="flex w-55 items-center justify-between rounded-xl border border-gray-100 px-4 py-2 shadow-sm"
    >

      {/* Teacher Info */}
      <div className="flex flex-1 items-center gap-3">
        {/* Avatar */}
        <div className="h-7.5 w-7.5 overflow-hidden rounded-full bg-blue-50">
          <img
            src={profile}
            alt="Not Found"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Name & Job */}
        <div className="flex flex-col items-start gap-1">
          <span className="text-sm font-bold text-gray-900 w-30">علی اصغر نجفی</span>

          <span className="text-xs font-medium text-gray-400">
            معلم فیزیک
          </span>
        </div>
      </div>

      {/* Dropdown */}
      <button
        type="button"
        className="mr-2 flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-50"
      >
        <ChevronDown size={20} strokeWidth={2} className="text-gray-500" />
      </button>
    </div>
  );
}

export default UserProfileHeader;