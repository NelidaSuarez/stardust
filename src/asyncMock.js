const products = [
    {
      id: "1",
      name: "Tocadiscos Winco ",
      price: 102.999,
      category: "Equipos",
      img: "https://http2.mlstatic.com/D_NQ_NP_702402-MLA41241337976_032020-O.webp",
      stock: 5,
      description: "Descripcion de Tocadiscos Winco W408",
    },
    {
      id: "2",
      name: "Tocadiscos Winco ",
      price: 176.999,
      category: "Equipos",
      img: "https://http2.mlstatic.com/D_NQ_NP_965789-MLA32307729078_092019-O.webp",
      stock: 6,
      description: "Descripcion de Tocadiscos Vinilo Vintage Retro Winco Apto Amplificador Aux",
    },
    {
      id: "3",
      name: "Pink Floyd ",
      price: 39.999,
      category: "Vinilos",
      img: "https://http2.mlstatic.com/D_NQ_NP_871230-MLU69164449980_042023-O.webp",
      stock: 7,
      description: "Pink Floyd - Wish You Were Here - Lp",
    },
    {
      id: "4",
      name: "Queen Sheer Heart Attack ",
      price: 27.999,
      category: "Vinilos",
      img: "https://http2.mlstatic.com/D_NQ_NP_746286-MLU69626544664_052023-O.webp",
      stock: 4,
      description: "Descripcion de Queen Sheer Heart Attack Lp Vinyl",
    },
    {
        id: "5",
        name: "Led Zeppelin - Greatest Hits",
        price: 22.999,
        category: "Vinilos",
        img: "https://http2.mlstatic.com/D_NQ_NP_877643-MLU73962960259_012024-O.webp",
        stock: 6,
        description: "Descripcion de Led Zeppelin - Greatest Hits (lp) Procom",
      },
      {
        id: "6",
        name: "Atari 2.699",
        price: 26.999,
        category: "Consolas",
        img: "https://http2.mlstatic.com/D_NQ_NP_722478-MLA74696658702_022024-O.webp",
        stock: 9,
        description: "Descripcion de Atari 2600",
      },
      {
        id: "7",
        name: "Family Game",
        price: 49.999,
        category: "Consolas",
        img: "https://http2.mlstatic.com/D_NQ_NP_731040-MLA32731593253_112019-O.webp",
        stock: 4,
        description: "Descripcion de Family Game",
      },
      {
        id: "8",
        name: " Edu Atari",
        price: 12.999,
        category: "Juegos",
        img: "https://http2.mlstatic.com/D_NQ_NP_701541-MLA73226962726_122023-O.webp",
        stock: 8,
        description: "Descripcion de 2 Cartuchos Juegos Edu Atari",
      },
      {
        id: "9",
        name: " Atari Soccer Game",
        price: 12.999,
        category: "Juegos",
        img: "https://http2.mlstatic.com/D_NQ_NP_647900-MLA53991482806_022023-O.webp",
        stock: 12,
        description: "Descripcion de Juego Atari Soccer Game",
      },
      {
        id: "10",
        name: "Missile Command",
        price: 9.699,
        category: "Juegos",
        img: "https://http2.mlstatic.com/D_NQ_NP_982275-MLA70677223888_072023-O.webp",
        stock: 9,
        description: "Descripcion de Missile Command Para Cons Atari",
      },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId));
      }, 500);
    });
  };
  
  export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productoId));
      }, 500);
    });
  };
  