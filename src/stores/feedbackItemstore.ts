
import { create } from "zustand";
import { feedbackitems } from "../lib/types";

type store = {
    feedbackData:feedbackitems[];
    isLoading:boolean;
    error:string;
    selected:string;
    addData: (text:string) => Promise<void>;
    getfilteredItem:() => feedbackitems[];
    getCompanyList: () => string[];
    selectCompany: (text:string) => void;
    fetchFeedbackItems:() => Promise<void>;
}

 export const feedbackitemstore = create<store>((set, get) => ({
     feedbackData:[],
     isLoading:false,
     error:"",
     selected:"",
     addData:
         async (text:string) =>

         {     const newItem:feedbackitems =
             {
               id: new Date().getHours(),
               text:text,
               company: text.split(" ").find(company => company.includes("#"))!.substring(1),
               daysAgo: 0,
               badgeLetter:text.split(" ").find(company => company.includes("#"))!.substring(1).substring(0, 1).toUpperCase(),
               upvoteCount:0
             }

             set(state => ({feedbackData:[...state.feedbackData, newItem]}))


             await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks", {
               method:"POST",
               body: JSON.stringify(newItem),
               headers:{
                 Accept:"application/json",
                 "Content-Type":"application/json"
               }
             });
     },

     getfilteredItem: () => {
         const state = get()
         return state.selected ? state.feedbackData.filter(company => company.company === state.selected):state.feedbackData
     },
     getCompanyList:() => {
         const state = get()
         return state.feedbackData.map(item => item.company).filter((company,index,array) =>  array.indexOf(company) === index)
     },

     selectCompany:(text:string) => {
         set(()=>({
              selected:text,
         }))

     },
     fetchFeedbackItems: async () => {
        set(() => ({
          isLoading: true,
        }));

        try {
          const response = await fetch(
            "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
          );

          if (!response.ok) {
            throw new Error();
          }

          const data = await response.json();
          set(() => ({
            feedbackData: data.feedbacks,
          }));
        }  catch (error) {
            set(() => ({
              error: "Something went wrong. Please try again later.",
            }));
          }

        set(() => ({
          isLoading: false,
        }));
      },

    }))
