import { LightSection } from "@src/components/containers/LightSection";
import { Primary as PrimaryButton } from "@components/shared/ui/buttons/Primary";

export function Hero() {
  return (
    <LightSection>
      <PrimaryButton textContent={"Primary"} />
    </LightSection>
  );
}
