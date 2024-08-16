import React from "react";

export default function FilterDropDown({
  tagOptions = [],
  selectedTag,
  onTagChange,
}) {
  return (
    <div className="flex flex-row h-12 px-2 items-center">
      {/* Optional: You can add an icon or other elements here */}
      <div className={`h-6 w-6 rounded-full bg-[#19f415]`}> </div>

      <select
        className="h-16 pl-2 pr-4 my-2 cursor-pointer bg-transparent text-blue-800 
        active:outline-0 active:border-0 hover:cursor-pointer focus:outline-none transition-all duration-300 ease-linear"
        value={selectedTag}
        onChange={(e) => {
          onTagChange && onTagChange(e.target.value);
        }}
      >
        {/* Add default "All" option */}
        <option value="All" className="flex gap-4 text-sm bg-white h-12">
          All
        </option>
        
        {tagOptions.map((tag) => (
          <option
            key={tag}
            value={tag}
            className="flex gap-4 text-sm bg-white p-0"
          >
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}
