import React from "react";

function Aside({ categories, setFilter }) {
  return (
    <aside className="w-64 bg-gray-100 h-screen p-4 fixed flex flex-col justify-between">
      {/* User Section */}
      <div className="bg-gray-200 p-4 rounded shadow mb-4">
        <div className="flex items-center">
          <img
            src="/assets/9.png"
            alt="User"
            className="w-12 h-12 rounded-full border-2 border-gray-400 mr-4"
          />
          <div>
            <h5 className="text-lg font-semibold">Welcome Bossing!!</h5>
            <p className="text-sm text-gray-500">Kupal kaba Boss!!</p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div>
        <h3 className="text-lg font-bold mb-4">Filters</h3>
        <div className="mb-4">
          <h4 className="font-semibold">Brands</h4>
          <ul>
            {categories.brands.map((brand) => (
              <li
                key={brand}
                className="cursor-pointer hover:text-gray-500"
                onClick={() => setFilter({ type: "brand", value: brand })}
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Types</h4>
          <ul>
            {categories.types.map((type) => (
              <li
                key={type}
                className="cursor-pointer hover:text-gray-500"
                onClick={() => setFilter({ type: "type", value: type })}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-gray-500 text-center mt-4">
        <small>&copy; {new Date().getFullYear()} JC Shoe Collections</small>
      </footer>
    </aside>
  );
}

export default Aside;
