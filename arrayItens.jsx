import cafe1 from "./src/assets/ItemsMenu/Cafe1.webp";
import cafe2 from "./src/assets/ItemsMenu/Cafe2.webp";
import cafe3 from "./src/assets/ItemsMenu/Cafe3.webp";
import cafe4 from "./src/assets/ItemsMenu/Cafe4.webp";
import cafe5 from "./src/assets/ItemsMenu/Cafe5.webp";
import cafe6 from "./src/assets/ItemsMenu/Cafe6.webp";

const arrayItens = [
  {
    id: 1,
    itemNome: "Rosbife e Queijo Provolone",
    itemDescricao:
      "Um delicioso sanduíche feito com fatias de pão torrado, recheado com saboroso rosbife e queijo provolone derretido, proporcionando uma combinação de sabores incríveis.",
    itemImagem:
      "https://img.freepik.com/fotos-gratis/saboroso-sanduiche-de-cogumelos-fatiados-tomate-ovos-cozidos-e-salada_1304-2921.jpg?w=1380&t=st=1701403341~exp=1701403941~hmac=56ca5736c8c67f160759a32786d42cd0e3de3912813e3d1953777837bf7b87f4",
    itemPreco: 12,
    itemAvaliacao: "4.3",
    categoria: "sanduiche",
  },
  {
    id: 2,
    itemNome: "Sanduíche Natural",
    itemDescricao:
      "Um sanduíche saudável e saboroso, preparado com fatias de pão integral, recheado com vegetais frescos, queijo, presunto ou peito de peru, e temperado com uma combinação especial de molhos.",
    itemImagem:
      "https://img.freepik.com/fotos-gratis/triangulos-sanduiches-com-queijo-e-presunto_1147-31.jpg?w=1380&t=st=1701402441~exp=1701403041~hmac=b891c5cb3bc4531864d6cf380624f15f83f5c03ffac63d342190c501931b9d9b",
    itemPreco: 20,
    itemAvaliacao: "4.5",
    categoria: "sanduiche",
  },
  {
    id: 3,
    itemNome: "Misto Quente",
    itemDescricao:
      "Um clássico sanduíche preparado com fatias de pão de forma, recheado com queijo derretido e presunto, grelhado até ficar dourado e crocante por fora, e o queijo completamente derretido por dentro.",
    itemImagem:
      "https://img.freepik.com/fotos-gratis/prato-com-deliciosos-sanduiches_23-2148454801.jpg?w=1380&t=st=1701402851~exp=1701403451~hmac=84f02dcf4aa10b3257360719ea6a091bd8b7b8abc11eda7e719bc9a0010b3215",
    itemPreco: 14.5,
    itemAvaliacao: "4.6",
    categoria: "sanduiche",
  },
  {
    id: 4,
    itemNome: "Frango com Cream Cheese",
    itemDescricao:
      "Um delicioso sanduíche preparado com fatias de pão tostado, recheado com suculentos pedaços de frango desfiado, coberto com um creme de queijo cremoso e temperado.",
    itemImagem:
      "https://img.freepik.com/fotos-gratis/sanduiche-de-ovo-e-tomate-cozido-close-up_23-2148590168.jpg?w=1380&t=st=1701402925~exp=1701403525~hmac=5e16cba6de0eead019dcae43f7022d71e86a47c2c0349a8e12ebf173721e3687",
    itemPreco: 16.8,
    itemAvaliacao: "4.8",
    categoria: "sanduiche",
  },
  {
    id: 5,
    itemNome: "Vegetais Grelhados e Pesto",
    itemDescricao:
      "Um sanduíche fresco com uma mistura de vegetais grelhados, como pimentão, abobrinha e cebola, complementados com um saboroso molho pesto, tudo entre fatias de pão torrado.",
    itemImagem:
      "https://img.freepik.com/fotos-gratis/vista-frontal-de-sanduiche-de-salada-com-tomate_23-2148640136.jpg?w=1380&t=st=1701402993~exp=1701403593~hmac=fab75195a66614ab2f2451d3ce9ecaa3c55f78c7c7f05234e65182bc830b2199",
    itemPreco: 17.5,
    itemAvaliacao: "4.3",
    categoria: "sanduiche",
  },
  {
    id: 6,
    itemNome: "Peru Defumado com Cheddar",
    itemDescricao:
      "Um saboroso sanduíche preparado com fatias de pão torrado, recheado com deliciosas fatias de peru defumado e queijo cheddar derretido, oferecendo um equilíbrio perfeito de sabores.",
    itemImagem:
      "https://img.freepik.com/fotos-gratis/fechar-o-queijo-derretido-no-sanduiche_23-2149286864.jpg?w=1380&t=st=1701403043~exp=1701403643~hmac=e9a92f940bb8d6eb3cfba3abe8fdc7af2893f67ba5c6a8abf6aab31674ea7877",
    itemPreco: 13.99,
    itemAvaliacao: "4.3",
    categoria: "sanduiche",
  },
  {
    id: 7,
    itemNome: "Café expresso",
    itemDescricao:
      "Originário da Itália, o espresso é conhecido por sua crema dourada e consistência encorpada, geralmente servido em pequenas xícaras.",
    itemImagem: cafe1,
    itemPreco: 5.45,
    itemAvaliacao: "4.5",
    categoria: "cafe",
  },
  {
    id: 8,
    itemNome: "Cappuccino",
    itemDescricao:
      "Originária da Itália, essa bebida é conhecida por sua cremosidade e sabor equilibrado, geralmente servido em uma xícara maior que o espresso.",
    itemImagem: cafe2,
    itemPreco: 4.99,
    itemAvaliacao: "4.7",
    categoria: "cafe",
  },
  {
    id: 9,
    itemNome: "Mocha",
    itemDescricao:
      "Originário da Arábia, o mocha ganhou popularidade em todo o mundo como uma opção de café indulgente e reconfortante.",
    itemImagem: cafe3,
    itemPreco: 7.99,
    itemAvaliacao: "4.9",
    categoria: "cafe",
  },
  {
    id: 10,
    itemNome: "Latte",
    itemDescricao:
      "Originário da Itália, o latte é apreciado por sua textura suave e sabor equilibrado, geralmente servido em uma xícara grande.",
    itemImagem: cafe4,
    itemPreco: 12,
    itemAvaliacao: "4.9",
    categoria: "cafe",
  },
  {
    id: 11,
    itemNome: "Macchiato",
    itemDescricao:
      "O macchiato é uma bebida de café que consiste em uma dose de espresso 'manchada' com uma pequena quantidade de espuma de leite vaporizado.",
    itemImagem: cafe5,
    itemPreco: 11.5,
    itemAvaliacao: "4.7",
    categoria: "cafe",
  },
  {
    id: 12,
    itemNome: "Duplo",
    itemDescricao:
      "O espresso duplo é apreciado por aqueles que desejam uma dose extra de energia e uma experiência de sabor mais intensa.",
    itemImagem: cafe6,
    itemPreco: 9,
    itemAvaliacao: "5.0",
    categoria: "cafe",
  },
  {
    id: 13,
    itemNome: "Pastel de carne",
    itemDescricao:
      "Fatias de pão torrado cobertas com abacate amassado e temperado com sal, pimenta e outros ingredientes opcionais.",
    itemImagem:
      "https://img.freepik.com/fotos-gratis/vista-inferior-de-penovani-khachapuri-na-placa-de-madeira-na-mesa-vermelha-escura_140725-129977.jpg?w=1380&t=st=1701404381~exp=1701404981~hmac=ea5da488f3c5a8738f149bcf3238af99fa18b4a1e9dbdb4ac7787414ec13f2f5",
    itemPreco: 8.8,
    itemAvaliacao: "4.3",
    categoria: "pastel",
  },
  {
    id: 14,
    itemNome: "Pastel de frango",
    itemDescricao:
      "Fatias de pão torrado cobertas com abacate amassado e temperado com sal, pimenta e outros ingredientes opcionais.",
    itemImagem:
      "https://img.freepik.com/fotos-gratis/strudel-de-maca-tradicional-na-placa-de-madeira-close-up_93675-134639.jpg?w=1380&t=st=1701404260~exp=1701404860~hmac=c289840d15c32f2d2cc8e332ed2965e39e04238d5ab3bb97871c2570577b8f47",
    itemPreco: 12.45,
    itemAvaliacao: "4.3",
    categoria: "pastel",
  },
  {
    id: 15,
    itemNome: "Pastel de frango com catupiry",
    itemDescricao:
      "Fatias de pão torrado cobertas com abacate amassado e temperado com sal, pimenta e outros ingredientes opcionais.",
    itemImagem:
      "https://img.freepik.com/fotos-gratis/massa-de-pao-sirio-recheada-frita-servida-com-molho-com-gergelim_141793-1893.jpg?w=1380&t=st=1701404326~exp=1701404926~hmac=06dc18dcd6483764232cf202e8b3e63d1a0f274bfc2af2ed26a2c228d6f70a4c",
    itemPreco: 8.55,
    itemAvaliacao: "4.3",
    categoria: "pastel",
  },
  {
    id: 16,
    itemNome: "Pastel de chocolate",
    itemDescricao:
      "Fatias de pão torrado cobertas com abacate amassado e temperado com sal, pimenta e outros ingredientes opcionais.",
    itemImagem:
      "https://img.freepik.com/fotos-gratis/torrada-de-abacate-com-fatias-de-abacate-limao-sementes-de-linho-sementes-de-gergelim-fatias-de-pao-preto-vista-superior_2831-797.jpg?w=1380&t=st=1701281998~exp=1701282598~hmac=481b2eceea0eed5346e4a626c4f60574b8be34aac0b20f92378627be8052478e",
    itemPreco: 6.7,
    itemAvaliacao: "4.3",
    categoria: "pastel",
  },
  {
    id: 17,
    itemNome: "Torrada de Abacate",
    itemDescricao:
      "Fatias de pão torrado cobertas com abacate amassado e temperado com sal, pimenta e outros ingredientes opcionais.",
    itemImagem:
      "https://img.freepik.com/fotos-gratis/torrada-de-abacate-com-fatias-de-abacate-limao-sementes-de-linho-sementes-de-gergelim-fatias-de-pao-preto-vista-superior_2831-797.jpg?w=1380&t=st=1701281998~exp=1701282598~hmac=481b2eceea0eed5346e4a626c4f60574b8be34aac0b20f92378627be8052478e",
    itemPreco: 6.7,
    itemAvaliacao: "4.3",
    categoria: "pastel",
  },
  {
    id: 18,
    itemNome: "Torrada de Abacate",
    itemDescricao:
      "Fatias de pão torrado cobertas com abacate amassado e temperado com sal, pimenta e outros ingredientes opcionais.",
    itemImagem:
      "https://img.freepik.com/fotos-gratis/torrada-de-abacate-com-fatias-de-abacate-limao-sementes-de-linho-sementes-de-gergelim-fatias-de-pao-preto-vista-superior_2831-797.jpg?w=1380&t=st=1701281998~exp=1701282598~hmac=481b2eceea0eed5346e4a626c4f60574b8be34aac0b20f92378627be8052478e",
    itemPreco: 6.7,
    itemAvaliacao: "4.3",
    categoria: "pastel",
  },
];

export default arrayItens;
