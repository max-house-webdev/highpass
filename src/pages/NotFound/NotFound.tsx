import { Image, Box } from "@chakra-ui/react";
import { Error } from "@components/shared/simple/Error";
import error404 from "@images/error404.jpg";

export function NotFound() {
  return (
    <Box position={"relative"}>
      <Image src={error404} marginY={0} marginX={"auto"} />
      <Error
        errorMessage={"Страница не найдена!"}
        stackProps={{
          position: "absolute",
          top: "1rem",
          width: "100%",
        }}
        textProps={{ as: "h1", width: "100%", textAlign: "center" }}
      />
    </Box>
  );
}
