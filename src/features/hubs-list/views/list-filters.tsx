import React from 'react';
import useHubsListStore from '../controller/hubs-list.controller';

const HubsListFilters: React.FC = () => {
  
  const filters = useHubsListStore((state) => state.filters);
  const setFilters = useHubsListStore((state) => state.setFilter);

  return (
    <div className="flex items-center md:justify-end m-4 space-x-2 md:space-x-4">
      {/* boolean filter for ACTIVE state Hubs */}
      <div className='bg-white p-2 rounded' >
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            checked={filters.onlyActive}
            readOnly
            onClick={() => { setFilters('onlyActive', !filters.onlyActive); }}
          />
          <span>Only Active</span>
        </label>
      </div>

      {/* Select filter for type of Hubs */}
      <select
        value={filters.type}
        onChange={(e) => setFilters('type', e.target.value)}
        className="border border-gray-300 p-2 rounded"
      >
        <option value="">All Types</option>
        <option value="Collection">Collection</option>
        <option value="Recycling">Recycling</option>
      </select>

      {/* free text filter for filtering by displayName of Hubs */}
      <input
        type="text"
        value={filters.displayName}
        onChange={(e) => setFilters('displayName', e.target.value)}
        placeholder="Filter by name"
        className="border border-gray-300 p-2 rounded"
      />
    </div>
  );
};

export default HubsListFilters;
 