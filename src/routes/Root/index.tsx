import { useState } from "react";
import { Outlet } from "react-router-dom";

import * as S from "./styles";

import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

function Root() {
  const [count, setCount] = useState(0);
  return (
    <>
      <S.Container>
        <Text is="p" size="big">
          Contador {count}
        </Text>
        <Outlet />
        <Button
          role="button"
          title="Incrementar o valor"
          onClick={() => setCount(count + 1)}
        >
          <Text is="p" color="inverted">
            Incrementar
          </Text>
        </Button>
      </S.Container>
    </>
  );
}

export { Root };
