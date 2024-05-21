import { fireEvent, render, screen } from "@testing-library/react";
//import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve Verificar se há dois comentários", () => {
    render(<PostComment />);

    //Primeiro Comentário
    fireEvent.change(screen.getByTestId("text-area"), {
      target: {
        value: "Primeiro Comentário",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comment"));

    //Segundo Comentário
    fireEvent.change(screen.getByTestId("text-area"), {
      target: {
        value: "Segundo Comentário",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comment"));

    expect(screen.getAllByTestId("comment-list")).toHaveLength(2);
  });
});
