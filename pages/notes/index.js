import dynamic from "next/dynamic";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function Notes() {
  const router = useRouter();
  const [notes, setNotes] = useState();

  useEffect(() => {
    async function fetchingData() {
      const res = await (
        await fetch("https://service.pace-unv.cloud/api/notes")
      ).json();

      setNotes(res);
    }
    fetchingData();
  }, []);


  const HandleDelete = async (id) => {
    try {
     const response = await fetch(
      `https://service.pace-unv.cloud/api/notes/delete/${id}`,
      {
       method: "DELETE",
      })
      
      const result = await response.json();
      if (result?.success) {
       router.reload();
      }
    } catch (error) {}
   };

  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <Box padding="5">
          <Flex justifyContent="end">
            <Button
              colorScheme="blue"
              onClick={() => router.push("/notes/add")}
            >
              Add Notes
            </Button>
          </Flex>
          <Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap={5}>
              {notes?.data?.map(({title,description,id}) => (
                <GridItem>
                  <Card>
                    <CardHeader>
                      <Heading>{title}</Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>{description}</Text>
                    </CardBody>
                    <CardFooter justify="space-between" flexWrap="wrap">
                      <Button
                        onClick={() => router.push(`/notes/edit/${id}`)}
                        flex="1"
                        variant="ghost"
                      >
                        Edit
                      </Button>
                      <Button flex="1" colorScheme="red" onClick={() => HandleDelete(id)}> 
                        Delete
                      </Button>
                    </CardFooter>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </Box>
      </LayoutComponent>
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("https://service.pace-unv.cloud/api/notes");
//   const data = await res.json();

//   return { props: { data }, revalidate: 5 };
// }
