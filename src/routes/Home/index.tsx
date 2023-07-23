import * as S from "./styles";

import { Text } from "../../components/Text";

function Home() {
  return (
    <S.Container>
      <Text is="h1">DENTRO DE UM CONTAINER</Text>
    </S.Container>
  );
}

export { Home };
