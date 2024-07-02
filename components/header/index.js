import Link from "next/link";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { useQueries } from "@/hooks/useQueries";
import Cookies from "js-cookie";
import { useMutation } from "@/hooks/useMutation";
import { useRouter } from "next/router";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";


const Header = () => {

  const userData = useContext(UserContext)

  const { mutate } = useMutation();
  const router = useRouter();

  const { data } = useQueries({
    prefixUrl: "https://service.pace-unv.cloud/api/user/me",
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  const handleLogout = async () => {
    const response = await mutate({
      url: "https://service.pace-unv.cloud/api/logout",
      method: "POST",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    if (!response.success) {
      console.log("gagal");
    } else {
      Cookies.remove("token");

      router.push("/");
    }
  };

  console.log(`userData ${userData}`)

  return (
    <ul>
      <li>
        <Link href="/"> Home</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
      <li>
        <Link href="/user"> User</Link>
      </li>
      <li>
        <Link href="/notes"> Note</Link>
      </li>
      <li>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {userData?.name}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleLogout()}>Log out</MenuItem>
          </MenuList>
        </Menu>
      </li>
    </ul>
  );
};

export default Header;
