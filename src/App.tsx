import Header from "@/components/Header/Header";
import Text from "@/components/Text/Text";

export default function App() {
  return (
    <>
      <Header backgroundColor="gray">
          <Text block={true} size="1.5rem" color="white">Home</Text>
      </Header>
    </>
  );
}

