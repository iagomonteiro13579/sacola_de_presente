import Card from "../cards";
import "./style.css";
import imgCat from "../../assets/gatinho.png";

function Main(props) {
  const cardsData = [
    {
      id: 1,
      imageSrc:
        "https://www.contact2sale.com/wp-content/uploads/2022/03/sair-do-aluguel-1364x1024-1.jpg",
      name: "1 mes de Aluguel",
      value: 300,
      buttonText: "Presentear",
    },
    {
      id: 2,
      imageSrc:
        "https://consul.vtexassets.com/arquivos/ids/237589/02_Consul_Geladeira_CRM56FK_Imagem.jpg?v=638211599357370000",
      name: "Parcela Geladeira",
      value: 379.9,
      buttonText: "Presentear",
    },
    {
      id: 3,
      imageSrc:
        "https://portalcorreio.com.br/portalcorreio/arquivos/2023/03/3e2356e3e742ae2cdc686bc34eaa9396-scaled.jpg",
      name: "1 meses de energia ",
      value: 300,
      buttonText: "Presentear",
    },
    {
      id: 4,
      imageSrc:
        "https://www.sofacasa.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/3/03_1_.jpg",
      name: "Parcela Sofa",
      value: 100,
      buttonText: "Presentear",
    },
    {
      id: 5,
      imageSrc:
        "https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/servinternet_xl.png",
      name: "1 meses de Internet paga pra os noivos",
      value: 120,
      buttonText: "Presentear",
    },
    {
      id: 6,
      imageSrc:
        "https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg",
      name: "Ajuda de custo da viagem pro Rio de janeiro",
      value: 100,
      buttonText: "Presentear",
    },
    {
      id: 7,
      imageSrc:
        "https://m.media-amazon.com/images/I/61+xerCM9ML._AC_UF894,1000_QL80_.jpg",
      name: "Batedeira Prática Mondial",
      value: 119.9,
      buttonText: "Presentear",
    },
    {
      id: 8,
      imageSrc:
        "https://jcsbrasil.vteximg.com.br/arquivos/ids/175948-1000-1000/OLIQ610-01.jpg?v=637305145638000000",
      name: "Liquidificador Oster",
      value: 169,
      buttonText: "Presentear",
    },
    {
      id: 9,
      imageSrc:
        "https://ae01.alicdn.com/kf/S2b4633e7248f480cbc1033e8a51f6b30p/Kit-Esp-tulas-Utens-lios-de-Cozinha-Silicone-5-Pe-as-Conjunto-de-Panelas-Antiaderente-Elegan.jpg",
      name: "Conjunto de Panelas",
      value: 160,
      buttonText: "Presentear",
    },
    {
      id: 10,
      imageSrc:
        "https://images-americanas.b2w.io/produtos/4967184920/imagens/caneca-flork-meme-instalando-minha-paciencia-325ml-presente/4967184920_1_xlarge.jpg",
      name: "Caneca Flork",
      value: 29.9,
      buttonText: "Presentear",
    },
    {
      id: 11,
      imageSrc:
        "https://lojaduartecasaepresentes.com.br/wp-content/uploads/2018/11/Panela-Press%C3%A3o-Tramontina-Vancouver-45L-Vermelha.jpg",
      name: "Panela de Pressão",
      value: 199.8,
      buttonText: "Presentear",
    },
    {
      id: 12,
      imageSrc:
        "https://m.media-amazon.com/images/I/61NBFYr6KmL._AC_UF894,1000_QL80_.jpg",
      name: "Sanduicheira Minigrill",
      value: 79.42,
      buttonText: "Presentear",
    },
    {
      id: 13,
      imageSrc:
        "https://multibar.vteximg.com.br/arquivos/ids/368018-800-800/Jogo_de_Talheres_24_peas_Bzios_em_Ao_Inox_Tramontina_211070.jpg?v=637959252229600000",
      name: "Jogo de Talheres faqueiro inox",
      value: 89.7,
      buttonText: "Presentear",
    },
    {
      id: 14,
      imageSrc:
        "data:image/png;base64,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",
      name: "Mensalidade da Netflix",
      value: 39.9,
      buttonText: "Presentear",
    },
    {
      id: 15,
      imageSrc:
        "https://cdn.awsli.com.br/1325/1325803/produto/92140746/chinelo-havaianas-brasil-branco-646064e2.jpg",
      name: "Chinelo Havainas",
      value: 45.99,
      buttonText: "Presentear",
    },
    {
      id: 16,
      imageSrc:
        "https://m.media-amazon.com/images/I/61-P4T1UKSS._AC_SL1000_.jpg",
      name: "Bolsa Feminina",
      value: 76.3,
      buttonText: "Presentear",
    },
    {
      id: 17,
      imageSrc: "https://img.lojasrenner.com.br/item/826844752/zoom/3.jpg",
      name: "Chinelo Feminino",
      value: 44.82,
      buttonText: "Presentear",
    },
    {
      id: 18,
      imageSrc:
        "https://img.ltwebstatic.com/gspCenter/goodsImage/2023/2/23/1783494095_1014779/A17CD3185A51E1A2F1056496DD48178F_thumbnail_720x.jpg",
      name: "Saída de praia",
      value: 39,
      buttonText: "Presentear",
    },
    {
      id: 19,
      imageSrc:
        "https://pictures.smartfit.com.br/3403/big/smart-fit-academia-mogi-das-cruzes-sp-sao-paulo-area-peso-livre-musculacao.jpg?1653330803",
      name: "Um Mes de Academia",
      value: 120,
      buttonText: "Presentear",
    },
    {
      id: 20,
      imageSrc:
        "https://tracklist.com.br/wp-content/uploads/2021/04/spotify-logo.png",
      name: "Um Mes de Spotify",
      value: 27.9,
      buttonText: "Presentear",
    },
    {
      id: 21,
      imageSrc:
        "https://vocesa.abril.com.br/wp-content/uploads/2022/09/SA292_Fundamentos2.png",
      name: "Vele Gasolina de R$100",
      value: 100,
      buttonText: "Presentear",
    },
    {
      id: 22,
      imageSrc: "https://m.media-amazon.com/images/I/61dzmxDF5EL.jpg",
      name: "Duas Caixinhas de Cerveja",
      value: 80,
      buttonText: "Presentear",
    },
    {
      id: 23,
      imageSrc:
        "https://www.imigrantesbebidas.com.br/bebida/images/products/full/89912-vinho-perez-cruz-gran-reserva-cabernet-sauvignon-750ml.20221228085737.jpg",
      name: "Vinho Tinto",
      value: 79.9,
      buttonText: "Presentear",
    },
    {
      id: 24,
      imageSrc:
        "https://s2-casaejardim.glbimg.com/D5zjLo5iYGbM2FXW5tYL46lHm8I=/0x0:620x455/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2023/p/m/oqoCq5QFOCvPBimI16zQ/2018-10-26-jantar-romantico.jpeg",
      name: "Jantar",
      value: 100,
      buttonText: "Presentear",
    },
    {
      id: 25,
      imageSrc:
        "https://www.vancecontabil.com.br/wp-content/uploads/2022/09/PIX-VAI-SER-COBRADO.webp",
      name: "O Valor que o seu Coração mandar",
      value: 1,
      buttonText: "Presentear",
    },
    {
      id: 26,
      imageSrc: "https://www.ahstatic.com/photos/9600_ho_00_p_1024x768.jpg",
      name: "Ajuda na diaria do hotel",
      value: 100,
      buttonText: "Presentear",
    },
    {
      id: 27,
      imageSrc:
        "https://blog.purepilates.com.br/wp-content/uploads/2017/02/pilates_idoso.jpg",
      name: "Um mes de Pilates ",
      value: 150,
      buttonText: "Presentear",
    },
    {
      id: 28,
      imageSrc:
        "https://media.gazetadopovo.com.br/2022/08/29121735/shutterstock_605469404-16x9-1-1-960x540.jpg",
      name: "Um mes de ração pro micael ",
      value: 39.9,
      buttonText: "Presentear",
    },
  ];

  return (
    <div className="main-container">
      <div className="card-container">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            imageSrc={card.imageSrc}
            name={card.name}
            value={card.value}
            buttonText={card.buttonText}
            setSelectedProduct={props.setSelectedProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
