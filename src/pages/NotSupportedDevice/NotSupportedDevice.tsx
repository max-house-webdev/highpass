import { Error } from "@src/components/shared/simple/Error";

export function NotSupportedDevice() {
  return (
    <Error
      stackProps={{ maxW: "100vw", p: "0.5em" }}
      errorMessage={"This device is not supported"}
    />
  );
}
