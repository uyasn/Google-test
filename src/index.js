import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChakraProvider } from "@chakra-ui/react";

// import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider>
      {/* <Box
      background="rgb(230, 230, 230)"
      m="1rem"
      px="1rem"
      border="1px solid #999"
    >
      <Text fontSize="2rem" color="rgb(100, 160, 100)" fontWeight="bold">
        chakraUI実行
      </Text>
    </Box> */}
      {/* <App /> */}
      <Container centerContent p="2rem">
        <Text fontSize="4rem" fontWeight="bold">
          <span style={{ color: "#448FF2" }}>G</span>
          <span style={{ color: "#F23838" }}>o</span>
          <span style={{ color: "#F2A007" }}>o</span>
          <span style={{ color: "#448FF2" }}>g</span>
          <span style={{ color: "#33A650" }}>l</span>
          <span style={{ color: "#F23838" }}>e</span>
        </Text>
        <Box mt="2rem">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input />
          </InputGroup>
        </Box>
      </Container>
    </ChakraProvider>
  </StrictMode>
);
