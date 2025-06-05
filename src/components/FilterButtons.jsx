const FilterButtons = ({ currentFilter, setFilter }) => {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="flex justify-center gap-4 my-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded ${
            currentFilter === f
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          } hover:bg-blue-200 cursor-pointer`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
