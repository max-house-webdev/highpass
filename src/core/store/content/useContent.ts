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
    persist((set) => {
      return {
        sections: content.sections,
        contacts: content.contacts,
        hero: null,

        getHero() {
          new Promise((resolve) => {
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
        },
      };
    }, persistOptions)
  )
);
