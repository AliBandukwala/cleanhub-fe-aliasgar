import { create } from "zustand";
import HubsListApi from "../api/hubs-list.api";
import { Hub } from "../models/hub.model";

interface IHubFilters {
  type: string | null;
  assigned: boolean;
  displayName: string;
  setType: (type: string | null) => void;
  setAssigned: (assigned: boolean) => void;
  setDisplayName: (displayName: string) => void;
  resetFilters: () => void;
}

interface IHubsListStore extends IHubFilters {
    loading: boolean,
    error: string | null,
    list: Hub[],
    filteredList: Hub[], 
    fetchList: () => Promise<void>,
}

const useHubsListStore = create<IHubsListStore>((set, get) => ({
    loading: false,
    error: null,
    list: [],
    filteredList: [],

    type: null,
    assigned: false,
    displayName: '',

    setType: (type) => {
        set({ type })

        if(type){
            set({
                filteredList: get().list.filter(e => e.type.toLowerCase().includes(type.toLowerCase()))
            })
        }
        else if(type === null && get().assigned === false && get().displayName.length === 0){
            get().resetFilters()
        }
    },
    setAssigned: (assigned) => {
        if(assigned){
            set({ 
                assigned,
                filteredList: get().list.filter(e => e.assignable === assigned)
            })
        }
        else if(get().type === null && !assigned && get().displayName.length === 0){
            get().resetFilters()
        }
    },
    setDisplayName: (displayName) => {
        set({ displayName })

        if(displayName.length !== 0){
            set({
                filteredList: get().list.filter(e => e.displayName.toLowerCase().includes(displayName.toLowerCase()))
            })
        }
        else if(get().type === null && !get().assigned && displayName.length === 0){
            get().resetFilters()
        }
    },
    resetFilters: () => {
        set({ type: null, assigned: false, displayName: '', filteredList: [] })
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