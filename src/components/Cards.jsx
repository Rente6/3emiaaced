import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cards() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw29935880/large/2002832_1.png" />
        <Card.Body>
          <Card.Title>Brinquedos</Card.Title>
          <Card.Text>
            Divertido e alegre!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://io.convertiez.com.br/m/drogal/shop/products/images/9994260/medium/chupeta-soft-fiona-tamanho-2-6-meses-cor-verde-1-unidade_48629.png" />
        <Card.Body>
          <Card.Title>Chupeta</Card.Title>
          <Card.Text>
            Fofas e úteis.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.tcdn.com.br/img/img_prod/839010/babador_blw_manga_curta_ursinho_319_1_e49f6336ed28392019729ded0984285d.png" />
        <Card.Body>
          <Card.Title>Babador</Card.Title>
          <Card.Text>
            Bonito, pratico e mantém o seu bebê limpo.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;