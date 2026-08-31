import DropDown from "../custom/DropDown";

function FilterExam() {
  const filters = [
    {
      id: 1,
      placeholder: "مرتب سازی",
      lable: "درس",
      item: [

      ],
    },
    {
      id: 2,
      placeholder: "همه مقاطع",
      lable: "مقطع",
      item: [

      ],
    },
    {
      id: 3,
      placeholder: "همه وضعیت ها",
      lable: " وضعیت ",
      item: [

      ],
    },
  ];

  return (
    <div className="flex gap-14">
      {filters.map((dropdown) => {
        return (
          <div className="w-80" key={dropdown.id}>
            <DropDown
              placeholder={dropdown.placeholder}
              name={dropdown.lable}
              labelOn={true}
              items={dropdown.item}
            />
          </div>
        );
      })}
    </div>
  );
}

export default FilterExam;
