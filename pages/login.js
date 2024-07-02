import {
  Flex,
  Stack,
  Heading,
  FormControl,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMutation } from "@/hooks/useMutation";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { mutate } = useMutation();

  const router = useRouter();

  const toast = useToast();

  const handleSubmit = async () => {
    const response = await mutate({
      url: "https://service.pace-unv.cloud/api/login",
      payload: input,
    });

    console.log(response.data);

    if (!response.success) {
      toast({
        title: "Login Gagal.",
        description: "Password dan username invalid.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      Cookies.set("token", response.data.token, {
        expires: Date.now(response.data.expires_at),
        path: "/",
      });

      router.push("/");
    }
  };

  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Stack direction={"column"}>
        <Heading as="h4">Login</Heading>
        <FormControl>
          <Input
            name="email"
            value={input.email}
            placeholder="email"
            onChange={(event) =>
              setInput({ ...input, email: event.target.value })
            }
          />
        </FormControl>
        <FormControl></FormControl>
        <Input
          name="password"
          placeholder="password"
          value={input.password}
          type="password"
          onChange={(event) =>
            setInput({ ...input, password: event.target.value })
          }
        />

        <FormControl>
          <Button onClick={() => handleSubmit()}>submit</Button>
        </FormControl>
      </Stack>
    </Flex>
  );
}
