import DropDown from "../custom/DropDown";
function FilterQuestion() {
  const filters = [
    {
      id: 1,
      placeholder: "همه دروس",
      lable: "درس",
      item: [
        {
          id: 1,
          name: " پودمان 2 : فیزیک",
        },
        {
          id: 2,
          name: "پودمان 5 : ریاضی 2",
        },
        {
          id: 3,
          name: "2 دینی",
        },
      ],
    },
    {
      id: 2,
      placeholder: "همه کتاب ها",
      lable: "کتاب",
      item: [
        {
          id: 1,
          name: "فیزیک",
        },
        {
          id: 2,
          name: "2 ریاضی",
        },
        {
          id: 3,
          name: "2 دینی",
        },
      ],
    },
    {
      id: 3,
      placeholder: "پایه ها",
      lable: "پایه / سال",
      item: [
        {
          id: 1,
          name: "یازدهم",
        },
        {
          id: 2,
          name: " دهم",
        },
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

export default FilterQuestion;
