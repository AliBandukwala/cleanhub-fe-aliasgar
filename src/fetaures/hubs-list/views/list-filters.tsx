import React from 'react';
import useHubsListStore from '../controller/hubs-list.controller';

const HubsListFilters: React.FC = () => {
    const type = useHubsListStore((state) => state.type);
    const assigned = useHubsListStore((state) => state.assigned);
    const displayName = useHubsListStore((state) => state.displayName);
    const setType = useHubsListStore((state) => state.setType);
    const setAssigned = useHubsListStore((state) => state.setAssigned);
    const setDisplayName = useHubsListStore((state) => state.setDisplayName);

  return (
    <div className="flex items-center space-x-4">
      <select
        value={type || ''}
        onChange={(e) => setType(e.target.value || null)}
        className="border border-gray-300 p-2 rounded"
      >
        <option value="">All</option>
        <option value="Collection">Collection</option>
        <option value="Waste">Waste</option>
      </select>

      <label className="flex items-center space-x-2">
        <input
          type="radio"
          checked={assigned ?? false}
          onChange={() => setAssigned(!assigned)}
        />
        <span>{assigned === true ? "Assigned" : "Unassigned"}</span>
      </label>

      <input
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="Filter by DisplayName"
        className="border border-gray-300 p-2 rounded"
      />
    </div>
  );
};

export default HubsListFilters;
 