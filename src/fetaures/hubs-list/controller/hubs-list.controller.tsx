import { create } from "zustand";
import HubsListApi from "../api/hubs-list.api";
import { Hub } from "../models/hub.model";

interface IHubsListFilters {
    type: string;
    onlyActive: boolean;
    displayName: string;
}

interface IHubsListStore {
    loading: boolean,
    error: string | null,
    list: Hub[],
    filteredList: Hub[], 
    filters: IHubsListFilters,
    setFilter: (filterKey: keyof IHubsListFilters, value: string | boolean) => void;
    resetFilters: () => void,
    fetchList: () => Promise<void>,
}

const useHubsListStore = create<IHubsListStore>((set, get) => ({
    loading: false,
    error: null,
    list: [],
    filteredList: [],

    filters: {
        type: '',
        onlyActive: false,
        displayName: '',
    },

    setFilter(filterKey, value){
        set((state) => ({
          filters: {
            ...state.filters,
            [filterKey]: value,
          },
        }));

        const filters: IHubsListFilters = get().filters

        if(filters.type === '' && !filters.onlyActive && filters.displayName.length === 0){
            get().resetFilters()
        }
        else{
            const filteredList = get().list
            .filter((hub) => hub.type?.toLowerCase().includes(get().filters.type.toLowerCase()))
            .filter((hub) => hub.state === 'ACTIVE')
            .filter((hub) => hub.displayName.toLowerCase().includes(get().filters.displayName.toLowerCase()));

            set({ filteredList })
        }
    },

    resetFilters: () => {
        set({ filters: { type: '', onlyActive: false, displayName: ''}, filteredList: [] })
    },

    async fetchList() {
        set({loading: true})
        try{
            const hubsList: Hub[] = await HubsListApi.fetchHubsList()
            set({list: hubsList})
            console.log(hubsList)
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch(e: any){
            set({error: e})
        }
        finally{
            set({loading: false})
        }
    },
}))

export default useHubsListStore