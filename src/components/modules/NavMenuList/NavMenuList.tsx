import { v4 as uuidv4 } from "uuid";

import { sections } from "@core/constant/content";

import { MenuItem } from "./MenuItem";
import { SimpleNavMenuList } from "./SimpleNavMenuList";

export function NavMenuList() {
  return (
    <SimpleNavMenuList>
      {sections.map((item) => {
        const { id, title } = item;

        return <MenuItem key={uuidv4()} href={id} title={title} />;
      })}
    </SimpleNavMenuList>
  );
}
