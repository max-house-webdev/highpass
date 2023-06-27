import { v4 as uuidv4 } from "uuid";

import { MenuItem } from "./MenuItem";
import { SimpleNavMenuList } from "./SimpleNavMenuList";
import { useContent } from "@src/core/store/content";

export function NavMenuList() {
  const sections = useContent((store) => store.sections);

  return (
    <SimpleNavMenuList>
      {sections.map((item) => {
        const { id, heading } = item;

        return <MenuItem key={uuidv4()} href={id} heading={heading} />;
      })}
    </SimpleNavMenuList>
  );
}
