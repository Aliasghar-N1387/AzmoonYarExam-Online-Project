function AdvertisementCard({
  icon,
  title,
  description,
  buttonText,
  variant = "violet",
}) {
  const variants = {
    violet: {
      card: "bg-violet-50 border-violet-100",
      title: "text-gray-800",
      button: "bg-violet-600 hover:bg-violet-700",
    },

    blue: {
      card: "bg-blue-50 border-blue-100",
      title: "text-gray-800",
      button: "bg-violet-600 hover:bg-violet-700",
    },

    green: {
      card: "bg-emerald-50 border-emerald-100",
      title: "text-gray-800",
      button: "bg-emerald-500 hover:bg-emerald-600",
    },

    orange: {
      card: "bg-orange-50 border-orange-100",
      title: "text-gray-800",
      button: "bg-orange-500 hover:bg-orange-600",
    },
  };

  const style = variants[variant] || variants.violet;

  return (
    <div
      dir="rtl"
      className={`group flex w-full items-center overflow-hidden rounded-xl border-2 ${style.card} px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
    >
      <div className="flex h-full w-[26%] shrink-0 items-center">
        <img
          src={icon}
          alt={title}
          className="h-25 object-contain  transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-start justify-center pr-2">
        <h3 className={`text-[13px] font-extrabold ${style.title}`}>{title}</h3>

        <p className="mt-1.5 line-clamp-2 text-[9px] leading-4 text-gray-500">
          {description}
        </p>

        <button
          type="button"
          className={`mt-2 rounded-md px-3 py-1 text-[9px] font-bold text-white transition-colors ${style.button}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default AdvertisementCard;
