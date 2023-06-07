import { PublicationsContainer } from "./style";

const Publications = () => {
  return (
    <PublicationsContainer>
      <div>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </div>
      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </PublicationsContainer>
  );
};

export { Publications };
