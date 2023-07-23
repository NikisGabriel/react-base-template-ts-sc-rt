import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

import * as S from "./styles";

function ErrorBoundary() {
  const error = useRouteError();

  let text = "Error";

  if (error instanceof Error) {
    text = error.message;
  }

  //Lidar com erros disparados pelo router
  if (isRouteErrorResponse(error)) {
    text = error.status + " - " + error.statusText;
  }

  return (
    <S.Container>
      <Link to="/">{text}</Link>
    </S.Container>
  );
}

export { ErrorBoundary };
