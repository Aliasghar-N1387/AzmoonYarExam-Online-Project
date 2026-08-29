import DropDown from "../custom/DropDown";
import SearchBooks from "./SearchBooks";
function FiltersBooks() {

  const filters = [
     {
      id: 1,
      placeholder: "همه وضعیت ها",
      lable: "وضعیت ها",
      item:[
        {
          id:1,
          name:'فعال'
        },
         {
          id:2,
          name:' غیرفعال'
        },
      ]
    },
    {
      id: 2,
      placeholder: "همه مقاطع",
      lable: "پایه / تحصیلی",
       item:[
        {
          id:1,
          name:'فعال'
        },
         {
          id:2,
          name:' غیرفعال'
        },
      ]
    },
    {
      id: 3,
      placeholder: "همه پایه ها",
      lable: "پایه / سال",
       item:[
        {
          id:1,
          name:'فعال'
        },
         {
          id:2,
          name:' غیرفعال'
        },
      ]
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

export default FiltersBooks;
