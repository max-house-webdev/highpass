import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IContentState } from "./interfaces";
import { content, DELAY } from "./constant";

const CONTENT_STORAGE = "highpass-content-storage";

const persistOptions = {
  name: CONTENT_STORAGE,
};

export const useContent = create<IContentState>()(
  devtools(
    persist((set, get) => {
      return {
        sections: null,
        contacts: null,
        hero: null,

        async getHero() {
          const promise = new Promise((resolve) => {
            setTimeout(
              () =>
                resolve(
                  set(
                    (state) => {
                      return {
                        ...state,
                        hero: content.hero,
                      };
                    },
                    false,
                    "setContent/hero"
                  )
                ),
              DELAY
            );
          });

          return await promise;
        },
      };
    }, persistOptions)
  )
);

// const useContent = create<IContentState>()(
//   devtools(
//     persist(
//       (set) => ({
//         state: TContentState,
//         increase: (by) => set((state) => ({ bears: state.bears + by })),
//       }),
//       {
//         name: "bear-storage",
//       }
//     )
//   )
// );
