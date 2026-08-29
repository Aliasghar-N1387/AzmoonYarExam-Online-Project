import {
  BookOpen,
  Funnel,
  Plus,
  X,
  GraduationCap,
  Layers,
  Users,
  CalendarDays,
  ChevronDown,
} from "lucide-react";
import logo from "../../assets/img/LogoApp.png";
import BtnContents from "../../components/custom/BtnContents";
import FiltersBooks from "../../components/books/FiltersBooks";
import SearchBooks from "../../components/books/SearchBooks";
import Book from "../../components/books/Book";
import picBook from "../../assets/img/book.jpg";
import { useState } from "react";
import Modal from "../../components/custom/Modal";
import DropDown from "../../components/custom/DropDown";

function BookContent() {
  // Open and close Modal Add New Book

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [bookName, setBookName] = useState("");

  const [selectedGrade, setSelectedGrade] = useState(null);

  const [selectedField, setSelectedField] = useState(null);

  const [selectedLevel, setSelectedLevel] = useState(null);

  const [selectedYear, setSelectedYear] = useState(null);

  const [selectedLessons, setSelectedLessons] = useState([]);

  const [description, setDescription] = useState("");

  const [bookImage, setBookImage] = useState(null);

  const [previewImage, setPreviewImage] = useState(null);

  const [status, setStatus] = useState("active");

  const [lessonCount, setLessonCount] = useState(0);

  const [lessonNames, setLessonNames] = useState([]);
  ///

  const btnHeader = [
    {
      id: 1,
      name: "اضافه کردن کتاب",
      icon: <Plus size={16} />,
      styleButton:
        "bg-violet-900 text-white hover:bg-violet-800 hover:shadow-violet-500/30 active:bg-violet-950",
      onClick: () => setIsModalOpen(true),
    },
    {
      id: 2,
      name: "دسته بندی کردن کتاب",
      icon: <Funnel size={16} />,
      styleButton:
        "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md active:bg-gray-100",
    },
  ];

  const books = [
    {
      id: 1,
      title: "فارسی ۳",
      grade: "پایه دوازدهم",
      field: "رشته همه رشته‌ها",
      level: "متوسط",
      lessons: 5,
      questions: 180,
      image: picBook,
    },
    {
      id: 2,
      title: "شیمی ۳",
      grade: "پایه دوازدهم",
      field: "رشته تجربی",
      level: "متوسط",
      lessons: 7,
      questions: 298,
      image: picBook,
    },
    {
      id: 3,
      title: "فیزیک ۳",
      grade: "پایه دوازدهم",
      field: "رشته ریاضی",
      level: "متوسط",
      lessons: 6,
      questions: 256,
      image: picBook,
    },
    {
      id: 4,
      title: "ریاضی ۳",
      grade: "پایه دوازدهم",
      field: "رشته ریاضی",
      level: "متوسط",
      lessons: 8,
      questions: 320,
      image: picBook,
    },
    {
      id: 5,
      title: "زیست شناسی ۳",
      grade: "پایه دوازدهم",
      field: "رشته تجربی",
      level: "متوسط",
      lessons: 6,
      questions: 210,
      image: picBook,
    },
    {
      id: 6,
      title: "عربی ۳",
      grade: "پایه دوازدهم",
      field: "همه رشته‌ها",
      level: "متوسط",
      lessons: 3,
      questions: 88,
      image: picBook,
    },
    {
      id: 7,
      title: "قرآن ۳",
      grade: "پایه دوازدهم",
      field: "همه رشته‌ها",
      level: "متوسط",
      lessons: 3,
      questions: 96,
      image: picBook,
    },
    {
      id: 8,
      title: "زبان انگلیسی ۳",
      grade: "پایه دوازدهم",
      field: "همه رشته‌ها",
      level: "متوسط",
      lessons: 4,
      questions: 142,
      image: picBook,
    },
    {
      id: 8,
      title: "زبان انگلیسی ۳",
      grade: "پایه دوازدهم",
      field: "همه رشته‌ها",
      level: "متوسط",
      lessons: 4,
      questions: 142,
      image: picBook,
    },
    {
      id: 8,
      title: "زبان انگلیسی ۳",
      grade: "پایه دوازدهم",
      field: "همه رشته‌ها",
      level: "متوسط",
      lessons: 4,
      questions: 142,
      image: picBook,
    },
  ];
  //  Book Page Next -  Previous
  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 8;

  const totalPages = Math.ceil(books.length / booksPerPage);

  const startIndex = (currentPage - 1) * booksPerPage;

  const currentBooks = books.slice(startIndex, startIndex + booksPerPage);

  // Modal Data

  const gradeItems = [
    { id: 1, name: "دهم" },
    { id: 2, name: "یازدهم" },
    { id: 3, name: "دوازدهم" },
  ];

  const fieldItems = [
    { id: 1, name: "همه رشته‌ها" },
    { id: 2, name: "ریاضی فیزیک" },
    { id: 3, name: "علوم تجربی" },
    { id: 4, name: "علوم انسانی" },
  ];

  const levelItems = [
    { id: 1, name: "متوسطه اول" },
    { id: 2, name: "متوسطه دوم" },
  ];

  const yearItems = [
    { id: 1, name: "1403-1404" },
    { id: 2, name: "1404-1405" },
    { id: 3, name: "1405-1406" },
  ];

  const lessonItems = [
    { id: 1, name: "ریاضی" },
    { id: 2, name: "هندسه" },
    { id: 3, name: "آمار" },
    { id: 4, name: "فیزیک" },
    { id: 5, name: "شیمی" },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setBookImage(file);

    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
  };

  const handleLessonCountChange = (e) => {
    const count = Math.max(0, Number(e.target.value) || 0);

    setLessonCount(count);

    setLessonNames((prev) => {
      const updated = Array.from({ length: count }, (_, index) => {
        return prev[index] || "";
      });

      return updated;
    });
  };

  return (
    <div className="p-6 h-full bg-violet-50/50">
      {/* Header  */}
      <div className="flex pl-10 justify-between text-right">
        <div className="flex gap-4">
          {btnHeader.map((btn) => {
            return (
              <div key={btn.id}>
                <BtnContents
                  name={btn.name}
                  icon={btn.icon}
                  styleButton={btn.styleButton}
                  onClick={btn.onClick}
                />
              </div>
            );
          })}
        </div>

        <div className="flex gap-6">
          <div>
            <p className="text-2xl font-bold">کتاب ها</p>
            <p className="text-md">
              {" "}
              . کتاب های درسی خود را مدیريت كنيد وبرای هر كتاب، درس ها وسوالات
              را تعريف نمابيد
            </p>
          </div>
          <div className="flex justify-center items-center">
            <BookOpen className="size-10 text-violet-700" />
          </div>
          <div className=""></div>
        </div>
      </div>
      {/* Filter & Search Books  */}
      <div className="my-10 flex justify-center items-end gap-14">
        <FiltersBooks />
        <SearchBooks />
      </div>
      {/* Book Card  */}
      <div className="latest-scroll px-10 cursor-s-resize mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-h-120 overflow-auto">
        {currentBooks.map((bookinfo) => {
          return (
            <div key={bookinfo.id}>
              <Book
                title={bookinfo.title}
                grade={bookinfo.grade}
                field={bookinfo.field}
                level={bookinfo.level}
                image={bookinfo.image}
                lessons={bookinfo.lessons}
                questions={bookinfo.questions}
              />
            </div>
          );
        })}
      </div>
      {/* Book Page Next -  Previous */}
      <div className="flex px-10 items-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-lg bg-white cursor-pointer border text-sm disabled:opacity-50"
        >
          قبلی
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`
        w-8 h-8 rounded-lg text-sm
        ${
          currentPage === index + 1
            ? "bg-violet-700 text-white"
            : "bg-white border text-gray-600"
        }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 cursor-pointer rounded-lg bg-white border text-sm disabled:opacity-50"
        >
          بعدی
        </button>
      </div>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          header={
            <div>
              <div className="flex items-center gap-3">
                <BookOpen className="text-violet-600" size={25} />

                <h2 className="text-xl font-bold text-gray-800">
                  افزودن کتاب جدید
                </h2>
              </div>

              <p className="mt-1 text-sm text-gray-400">
                اطلاعات کتاب را وارد کنید و آن را به ساختار آموزشی خود اضافه
                نمایید.
              </p>
            </div>
          }
          content={
            <div className="grid grid-cols-12 gap-0">
              {/* LEFT - IMAGE  */}
              <div className="col-span-12 border-b border-gray-100 p-7 lg:col-span-4 lg:border-b-0 lg:border-l">
                <div className="text-right">
                  <h3 className="font-bold text-gray-800">تصویر جلد کتاب</h3>

                  <p className="mt-2 text-xs leading-6 text-gray-400">
                    تصویر جلد کتاب را بارگذاری کنید.
                  </p>
                </div>

                {/* Upload */}
                {!previewImage ? (
                  <label
                    htmlFor="book-image"
                    className="mt-5 flex h-52 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-violet-300 bg-violet-50/30 transition hover:bg-violet-50"
                  >
                    <div className="flex size-12 items-center justify-center rounded-full bg-violet-100">
                      <svg
                        className="size-6 text-violet-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                          d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                        />
                      </svg>
                    </div>

                    <p className="mt-3 text-sm font-bold text-violet-600">
                      برای بارگذاری کلیک کنید
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      یا فایل را بکشید و رها کنید
                    </p>

                    <p className="mt-2 text-[11px] text-gray-400">
                      JPG, PNG, WebP - حداکثر 2MB
                    </p>

                    <input
                      id="book-image"
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="mt-5">
                    <div className="flex justify-center rounded-2xl border border-gray-200 bg-gray-50 p-4">
                      <img
                        src={previewImage}
                        alt="پیش نمایش جلد کتاب"
                        className="h-64 w-44 rounded-xl object-cover shadow-md"
                      />
                    </div>

                    <div className="mt-3 flex justify-center">
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewImage(null);
                          setBookImage(null);
                        }}
                        className="text-sm font-bold text-red-500 hover:text-red-600"
                      >
                        حذف تصویر
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex justify-center mt-30 text-right mr-5">
                    <div className="mt-4">
                      <h1 className="font-[Vazir] text-violet-900 text-xl font-extrabold">
                        آزمون یار
                      </h1>

                      <p className="font-[Vazir] text-violet-700 text-sm font-bold">
                        AzmoonYar
                      </p>
                    </div>
                  <div
                    className="w-20 h-18 bg-violet-900"
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
                </div>
              </div>

              {/* RIGHT - FORM */}
              <div className="col-span-12 p-7 lg:col-span-8">
                <div className="space-y-5">
                  {/* Book Name */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      نام کتاب
                    </label>

                    <div className="relative">
                      <BookOpen
                        size={19}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="text"
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                        placeholder="مثلاً: فیزیک ۳"
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 pl-10 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                      />
                    </div>
                  </div>

                  {/* Grade + Level */}
                  <div className="grid grid-cols-2 gap-5">
                    <DropDown
                      name="مقطع تحصیلی"
                      labelOn
                      items={levelItems}
                      value={selectedLevel}
                      onChange={setSelectedLevel}
                      placeholder="انتخاب کنید"
                      BackIcon={GraduationCap}
                    />

                    <DropDown
                      name="پایه"
                      labelOn
                      items={gradeItems}
                      value={selectedGrade}
                      onChange={setSelectedGrade}
                      placeholder="انتخاب کنید"
                      BackIcon={Layers}
                    />
                  </div>

                  {/* Field + Year */}
                  <div className="grid grid-cols-2 gap-5">
                    <DropDown
                      name="رشته / گرایش"
                      labelOn
                      items={fieldItems}
                      value={selectedField}
                      onChange={setSelectedField}
                      placeholder="انتخاب کنید"
                      BackIcon={Users}
                    />

                    <DropDown
                      name="سال تحصیلی"
                      labelOn
                      items={yearItems}
                      value={selectedYear}
                      onChange={setSelectedYear}
                      placeholder="1403-1404"
                      BackIcon={CalendarDays}
                    />
                  </div>

                  {/* Status */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      وضعیت
                    </label>

                    <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-gray-200">
                      <button
                        type="button"
                        onClick={() => setStatus("active")}
                        className={`h-11 text-sm font-bold transition ${
                          status === "active"
                            ? "bg-violet-50 text-violet-700"
                            : "bg-white text-gray-400 hover:bg-gray-50"
                        }`}
                      >
                        فعال
                      </button>

                      <button
                        type="button"
                        onClick={() => setStatus("inactive")}
                        className={`h-11 border-x text-sm font-bold transition ${
                          status === "inactive"
                            ? "bg-gray-100 text-gray-700"
                            : "bg-white text-gray-400 hover:bg-gray-50"
                        }`}
                      >
                        غیرفعال
                      </button>

                      <button
                        type="button"
                        onClick={() => setStatus("archive")}
                        className={`h-11 text-sm font-bold transition ${
                          status === "archive"
                            ? "bg-gray-100 text-gray-700"
                            : "bg-white text-gray-400 hover:bg-gray-50"
                        }`}
                      >
                        آرشیو
                      </button>
                    </div>
                  </div>

                  {/* Related Lessons */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      دروس مرتبط
                    </label>

                    <DropDown
                      items={lessonItems}
                      value={null}
                      onChange={(item) => {
                        if (!item) return;

                        setSelectedLessons((prev) => {
                          const exists = prev.some(
                            (lesson) => lesson.id === item.id,
                          );

                          if (exists) {
                            return prev.filter(
                              (lesson) => lesson.id !== item.id,
                            );
                          }

                          return [...prev, item];
                        });
                      }}
                      placeholder="انتخاب درس"
                      BackIcon={ChevronDown}
                    />

                    {/* Lesson Count & Names */}
                    <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-4">
                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-bold text-gray-700">
                            تعداد درس‌ها
                          </label>

                          <span className="text-xs text-gray-400">
                            نام درس‌ها اختیاری است
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-gray-400">
                          تعداد درس‌هایی که برای این کتاب در نظر گرفته‌اید را
                          وارد کنید.
                        </p>
                      </div>

                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={lessonCount}
                          onChange={handleLessonCountChange}
                          placeholder="مثلاً 10"
                          className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                        />
                      </div>

                      {lessonCount > 0 && (
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-gray-600">
                              نام درس‌ها
                            </span>

                            <span className="text-[11px] text-gray-400">
                              {lessonCount} درس
                            </span>
                          </div>

                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {lessonNames.map((name, index) => (
                              <div key={index}>
                                <label className="mb-1.5 block text-xs font-bold text-gray-600">
                                  درس {index + 1}
                                </label>

                                <input
                                  type="text"
                                  value={name}
                                  onChange={(e) => {
                                    const value = e.target.value;

                                    setLessonNames((prev) => {
                                      const updated = [...prev];
                                      updated[index] = value;
                                      return updated;
                                    });
                                  }}
                                  placeholder={`نام درس ${index + 1} (اختیاری)`}
                                  className="h-10 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm outline-none transition placeholder:text-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    {selectedLessons.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {selectedLessons.map((lesson) => (
                          <span
                            key={lesson.id}
                            className="flex items-center gap-1 rounded-lg bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700"
                          >
                            {lesson.name}

                            <button
                              type="button"
                              onClick={() =>
                                setSelectedLessons((prev) =>
                                  prev.filter((item) => item.id !== lesson.id),
                                )
                              }
                              className="text-violet-400 hover:text-red-500"
                            >
                              <X size={13} />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        توضیحات کتاب
                      </label>

                      <span className="text-xs text-gray-400">اختیاری</span>
                    </div>

                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      maxLength={500}
                      rows={4}
                      placeholder="توضیحات، نکات یا اطلاعات تکمیلی درباره این کتاب را وارد کنید..."
                      className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                    />

                    <div className="mt-1 text-left text-[11px] text-gray-400">
                      {description.length}/500
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          footer={
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="h-12 rounded-xl border border-gray-300 bg-white px-8 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
              >
                انصراف
              </button>

              <button
                type="button"
                className="h-12 flex-1 rounded-xl bg-violet-700 px-6 text-sm font-bold text-white shadow-lg shadow-violet-700/20 transition hover:bg-violet-800 active:scale-[0.98]"
              >
                ذخیره کتاب
              </button>
            </div>
          }
        />
      )}
    </div>
  );
}

export default BookContent;
