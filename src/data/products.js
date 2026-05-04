export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "UNO No Mercy",
    price: 950,
    image: "/476412081_594686003478769_776145096694468888_n.webp",
    category: "CARTAS",
    description: "A versão mais brutal do UNO. 25 cartas de penalidade de uma vez!"
  },
  {
    id: 2,
    name: "UNO Flip",
    price: 750,
    image: "/mattel-games-uno-flip-gdr44.webp",
    category: "CARTAS",
    description: "Jogue com o lado claro ou o lado escuro com penalidades pesadas."
  },
  {
    id: 3,
    name: "Classic Deluxe",
    price: 1200,
    image: "/81kPSNmdsyL.jpg",
    category: "ESTRATÉGIA",
    description: "Edição especial para colecionadores e amantes de clássicos."
  },
  {
    id: 4,
    name: "Family Fun Pack",
    price: 850,
    image: "/293587069951973.jpg",
    category: "FAMÍLIA",
    description: "Diversão garantida para todas as idades na Beira."
  },
  {
    id: 5,
    name: "Kids Edition",
    price: 600,
    image: "/f6e5939038fe7e59d18fe8b0dcd25d3e.jpg",
    category: "CRIANÇAS",
    description: "Desenvolvimento e diversão para os pequenos."
  },
  {
    id: 6,
    name: "Premium Board",
    price: 1500,
    image: "/images.jpg",
    category: "TABULEIRO",
    description: "O melhor design para suas noites de jogos."
  },
  {
    id: 7,
    name: "Jogo Surpresa",
    price: 400,
    image: "", // Sem foto, usará texto conforme pedido
    category: "OUTROS",
    description: "Deixe a sorte escolher seu próximo desafio."
  }
];
