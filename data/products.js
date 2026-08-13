const products = [
  {
    id: "latte",
    name: "Latté",
    category: "PANNEAUX",
    image: [
      "https://drive.usercontent.google.com/download?id=1ZBk7204MVBA65J6RZgNWOQr0L57TdQz9&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1AoB-ZZQFNi1ERj8uzb-OTT_IRmmMUdlE&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1k1eBYt2emt3GfAeFv34pJawRk9Ucs61E&export=view&authuser=0"
    ],
    description: "Habitat et Service vous présente le panneau latté, un produit de qualité supérieure constitué d'une âme en bois massif complètement collée et recouverte d'une feuille de placage. Idéal pour les travaux de menuiserie, d’agencement et la fabrication de meubles, ce panneau offre des qualités de légèreté et de solidité, ainsi qu’un bel aspect esthétique, très apprécié des ébénistes. Les panneaux latté de Habitat et Service sont reconnus pour leur qualité exceptionnelle, répondant aux plus hautes exigences en matière de bois des lattes et de placage, avec un ponçage et un emballage soignés.",
    characteristics: [
      { "name": "Essences des bois (Âme)", "value": "Fromager, Okoumé" },
      { "name": "Essences des bois (Face/Contre-face)", "value": "Fromager, Chêne, Hêtre, Acajou, Frêne, Merisier, Zebrano, Padouk, Noyer, Iroko, Dibetou" },
      { "name": "Densité", "value": "440 kg/m3" },
      { "name": "Longueur", "value": "2200-2500mm" },
      { "name": "Épaisseur", "value": "20mm" },
      { "name": "Largeur", "value": "700, 750, 800, 850, 1220, 1530mm" }
    ],
    applications: [
      "Menuiserie",
      "Agencement",
      "Mobilier"
    ],
    origins: ["Maroc", "Turquie"],
      types: [
      
      {
        type: "Placage Chêne",
        image: "https://drive.usercontent.google.com/download?id=15wlJaly-2URtby48MhYo6THtG5DROH9s&export=view&authuser=0",
        characteristics: {
          "Provenance": "Europe",
          "Couleurs": "Brun clair à foncé",
          "Finition": "Brut de sciage"
        }
      },
      {
        type: "Placage Hêtre",
        image: "https://drive.usercontent.google.com/download?id=1bu7BD-IBtLTRvBHlukx7q2OOXdKD9nOb&export=view&authuser=0",
        characteristics: {
          "Provenance": "Europe",
          "Couleurs": "Beige clair à brun",
          "Finition": "Brut de sciage"
        }
      },
      
      {
        type: "Placage Frêne",
        image: "https://drive.usercontent.google.com/download?id=1YnYZjcjlgTq22-sJPeyvUPISJKgpKhOr&export=view&authuser=0",
        characteristics: {
          "Provenance": "États-Unis",
          "Couleurs": "Gris pâle à brun",
          "Finition": "Brut de sciage"
        }
      }, 
    ],
    note: "D’autres dimensions disponibles en stock ou sur commande."
  },  
  {
    id: "mdf-brut",
    name: "MDF Brut",
    description: "Découvrez le MDF Brut proposé par Habitat et Service, un panneau de fibres de bois collées, idéal pour la menuiserie intérieure et industrielle. Fabriqué après un défibrage à chaud du bois, puis mélangé avec de la colle et un catalyseur, ce matériau polyvalent est une alternative économique au bois massif. Avec une densité variant entre 600 et 800 kg/m3, il offre une résistance à la flexion de 75 Mpa, à la traction de 90 Mpa, et à la compression de 40 Mpa. Parfait pour des applications telles que l'agencement, la décoration intérieure, et la cuisine.",
    category: "PANNEAUX",
    image: [
      "https://drive.usercontent.google.com/download?id=1oqTEj8mBPsQNCn_tthKNquansErMzybg&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1LK3L9PgLvHI8ug99_HJySkfmhx6rVhk8&export=view&authuser=0"
    ],
    characteristics: [
        { "name": "Essences des bois", "value": "Pin, Eucalyptus" },
        { "name": "Densité", "value": "600 à 800 kg/m3" },
        { "name": "Résistance", "value": "Flexion: 75 Mpa, Traction: 90 Mpa, Compression: 40 Mpa" },
        { "name": "Dimensions", "value": "3660 x 2050 mm, 3660 x 2070 mm, 2800 x 2100 mm" },
        { "name": "Épaisseur", "value": "5, 8, 10, 12, 18 mm" },
    ],
    applications: [
      "Menuiserie",
      "Agencement",
      "Décoration intérieure",
      "Cuisine"
    ],
    origins: ["Türkiye", "Espagne"]
  },
  {
    id: "mdf-melamine",
    name: "MDF Melamine",
    category: "PANNEAUX",
    image: [
      "https://drive.usercontent.google.com/download?id=16jPZ5SWdoKBXyu1lCiH8iFE_9HSImYrT&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1VaU5Y71GezaXYqODjwVWt1H6EMc-RAMU&export=view&authuser=0"
    ],
    description: "Habitat et Service vous présente le MDF Mélaminé, un panneau de fibres de bois recouvert de mélamine, offrant une alternative économique pour l'agencement et la décoration intérieure. Bien que le mélaminé soit plus susceptible à l'usure par rapport au MDF brut, il reste une option pratique pour des applications où une durabilité prolongée n'est pas cruciale. Avec une densité de 440 kg/m3, il possède une résistance à la flexion de 75 Mpa, à la traction de 90 Mpa, et à la compression de 40 Mpa. Idéal pour la cuisine, la menuiserie et les projets d'agencement.",
    characteristics: [
      { "name": "Essences des bois", "value": "Pin, Eucalyptus, Sapin, Peuplier" },
      { "name": "Densité", "value": "440 kg/m3" },
      { "name": "Résistance", "value": "Flexion: 75 Mpa, Traction: 90 Mpa, Compression: 40 Mpa" },
      { "name": "Longueur", "value": "2800mm" },
      { "name": "Épaisseur", "value": "8 à 18mm" },
      { "name": "Largeur", "value": "2100mm" }
    ],
    applications: [
      "Agencement",
      "Cuisine",
      "Menuiserie",
      "Décoration intérieure"
    ],
    types: [
      {
        type: "Lefkas Oak",
        image: "https://drive.usercontent.google.com/download?id=1mvEGxpZc5O6pH-bRJqBr7bc33tcami3I&export=view&authuser=0",
        characteristics: {
          "Code": "A424",
        }
      },
      {
        type: "Baroque",
        image: "https://drive.usercontent.google.com/download?id=1HcI_7iVJ9Aa69OAEUZih7anZIwXENB_O&export=view&authuser=0",
        characteristics: {
          "Code": "A427",
        }
      },
      {
        type: "Antique White",
        image: "https://drive.usercontent.google.com/download?id=1TKZN-HqzNs83V8pUF96G7LtHnBQFZxCD&export=view&authuser=0",
        characteristics: {
          "Code": "A428",
        }
      },
      {
        type: "Florida",
        image: "https://drive.usercontent.google.com/download?id=16mqdQK09ZSWzY0kPseRhBOdizh53CO8M&export=view&authuser=0",
        characteristics: {
          "Code": "A435",
        }
      },
      {
        type: "Pera",
        image: "https://drive.usercontent.google.com/download?id=1CMq4Wv1a2-kTM6S38P5UJycJ4_SIk9_h&export=view&authuser=0",
        characteristics: {
          "Code": "A440",
        }
      },
      {
        type: "Sogut",
        image: "https://drive.usercontent.google.com/download?id=1O8cd6T86dQazkYEgW6JiEAxLKz--ZbSj&export=view&authuser=0",
        characteristics: {
          "Code": "A454",
        }
      },
      {
        type: "Belmonte",
        image: "https://drive.usercontent.google.com/download?id=1CfpRwRKhutm0ro6_vlUMWvBywoBT5d5R&export=view&authuser=0",
        characteristics: {
          "Code": "A609",
        }
      },
      {
        type: "Mississippi",
        image: "https://drive.usercontent.google.com/download?id=1dHFhtFzH10SetMXkvwI8yyU0bSDh9Rkb&export=view&authuser=0",
        characteristics: {
          "Code": "A624",
        }
      },
      {
        type: "Garden Oak - f",
        image: "https://drive.usercontent.google.com/download?id=1JxAeXypKDT6lCSN7zXOdR80JKgHQnK5X&export=view&authuser=0",
        characteristics: {
          "Code": "A626",
        }
      },
      {
        type: "Aral - f",
        image: "https://drive.usercontent.google.com/download?id=1On4SwTrSwKIaLPKod_xEXorNw5pKnFd7&export=view&authuser=0",
        characteristics: {
          "Code": "A627",
        }
      },
      {
        type: "Barok - f",
        image: "https://drive.usercontent.google.com/download?id=1WYwyABmKdDmrTEYeuhHHLc84RaO_sDEQ&export=view&authuser=0",
        characteristics: {
          "Code": "A628",
        }
      },
      {
        type: "Amalfi - f",
        image: "https://drive.usercontent.google.com/download?id=1t2HLfgCPFfNiPqjOnFVm9VcSUdiBBFfe&export=view&authuser=0",
        characteristics: {
          "Code": "A629",
        }
      },
      {
        type: "Cadiz - f",
        image: "https://drive.usercontent.google.com/download?id=1p7JLRFdP5oo6t1_pjlTEnc21hrcnvzhN&export=view&authuser=0",
        characteristics: {
          "Code": "A632",
        }
      },
      // {
      //   type: "Rossini",
      //   image: "",
      //   characteristics: {
      //     "Code": "A879",
      //   }
      // },
      // {
      //   type: "Tabacco",
      //   image: "",
      //   characteristics: {
      //     "Code": "A893",
      //   }
      // },
      // {
      //   type: "Cappuccino",
      //   image: "",
      //   characteristics: {
      //     "Code": "D126",
      //   }
      // },
      // {
      //   type: "Light Grey",
      //   image: "",
      //   characteristics: {
      //     "Code": "D123",
      //   }
      // },
      // {
      //   type: "Sandstone",
      //   image: "",
      //   characteristics: {
      //     "Code": "D140",
      //   }
      // },
      // {
      //   type: "Ash Grey",
      //   image: "",
      //   characteristics: {
      //     "Code": "D141",
      //   }
      // },
      // {
      //   type: "Caramel Galaxy",
      //   image: "",
      //   characteristics: {
      //     "Code": "D159",
      //   }
      // },
      // {
      //   type: "Cashmere",
      //   image: "",
      //   characteristics: {
      //     "Code": "D218",
      //   }
      // },
      // {
      //   type: "Ice Grey",
      //   image: "",
      //   characteristics: {
      //     "Code": "D217",
      //   }
      // },
      // {
      //   type: "Ash Green",
      //   image: "",
      //   characteristics: {
      //     "Code": "D259",
      //   }
      // },
      // {
      //   type: "N.Beech 1",
      //   image: "",
      //   characteristics: {
      //     "Code": "A303",
      //   }
      // },
      // {
      //   type: "Wenge",
      //   image: "",
      //   characteristics: {
      //     "Code": "A316",
      //   }
      // },
      // {
      //   type: "Teak",
      //   image: "",
      //   characteristics: {
      //     "Code": "A353",
      //   }
      // },
      // {
      //   type: "Bamboo",
      //   image: "",
      //   characteristics: {
      //     "Code": "A379",
      //   }
      // },
      // {
      //   type: "Met. Walnut",
      //   image: "",
      //   characteristics: {
      //     "Code": "A384",
      //   }
      // },
      // {
      //   type: "Cordoba",
      //   image: "",
      //   characteristics: {
      //     "Code": "A395",
      //   }
      // },
      // {
      //   type: "Milano",
      //   image: "",
      //   characteristics: {
      //     "Code": "A406",
      //   }
      // },
      // {
      //   type: "Venezia",
      //   image: "",
      //   characteristics: {
      //     "Code": "A410",
      //   }
      // },
      // {
      //   type: "",
      //   image: "",
      //   characteristics: {
      //     "Code": "",
      //   }
      // },
      // {
      //   type: "Light Sonoma",
      //   image: "",
      //   characteristics: {
      //     "Code": "A842",
      //   }
      // },
      // {
      //   type: "Gila",
      //   image: "",
      //   characteristics: {
      //     "Code": "D250",
      //   }
      // },
      // {
      //   type: "Ren",
      //   image: "",
      //   characteristics: {
      //     "Code": "D249",
      //   }
      // },
      // {
      //   type: "Lena",
      //   image: "",
      //   characteristics: {
      //     "Code": "D248",
      //   }
      // },
      // {
      //   type: "Cotton Mink",
      //   image: "",
      //   characteristics: {
      //     "Code": "F236",
      //   }
      // },
      // {
      //   type: "Carrara",
      //   image: "",
      //   characteristics: {
      //     "Code": "F255",
      //   }
      // },
      // {
      //   type: "Cosmos",
      //   image: "",
      //   characteristics: {
      //     "Code": "F258",
      //   }
      // },
      // {
      //   type: "Belek",
      //   image: "",
      //   characteristics: {
      //     "Code": "F293",
      //   }
      // },
      // {
      //   type: "Calacatta",
      //   image: "",
      //   characteristics: {
      //     "Code": "F310",
      //   }
      // },
      // {
      //   type: "Calcutta",
      //   image: "",
      //   characteristics: {
      //     "Code": "F304",
      //   }
      // },
      // {
      //   type: "Luanda",
      //   image: "",
      //   characteristics: {
      //     "Code": "F323",
      //   }
      // },
      // {
      //   type: "Indus",
      //   image: "",
      //   characteristics: {
      //     "Code": "F334",
      //   }
      // },
      // {
      //   type: "Selenge",
      //   image: "",
      //   characteristics: {
      //     "Code": "F333",
      //   }
      // },
      // {
      //   type: "Marmol",
      //   image: "",
      //   characteristics: {
      //     "Code": "F324",
      //   }
      // },
      


    ],
    origins: ["Maroc", "Espagne", "Türkiye"]
  },
  
  {
    id: "high-gloss",
    name: "High Gloss",
    description: "Habitat et Service vous propose les panneaux High Gloss, synonymes de brillance et de modernité. Ces panneaux offrent un effet brillant qui apportera une touche élégante à votre cuisine, salle de bain, salle à manger ou bureau. Résistants aux impacts et aux coups, ils sont durables et de haute qualité. De plus, ils sont disponibles avec un traitement anti-traces de doigts pour un entretien facilité. Avec une densité de 440 kg/m3, une résistance à la flexion de 75 Mpa, à la traction de 90 Mpa et à la compression de 40 Mpa, ces panneaux sont un choix parfait pour divers projets.",
    category: "PANNEAUX",
    image: [
      "https://drive.usercontent.google.com/download?id=1_UyXott32fnfh-kkuydLGqo50NFDcC7F&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1CV3tKadDfyZYevHYXajfcIbHc0AZBhZ4&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1xonc0RBgMF8VRzkFTvL-2SBJ-hhFaVKc&export=view&authuser=0"
    ],
    characteristics: [
      { "name": "Densité", "value": "440 kg/m3" },
      { "name": "Longueur", "value": "2800mm" },
      { "name": "Épaisseur", "value": "18 mm" },
      { "name": "Largeur", "value": "1220mm" }
    ],
    applications: [
      "Cuisines",
      "Meubles",
      "Mobilier",
      "Revêtements muraux",
      "Portes"
    ],
    types: [
      {
        type: "Soft Touch Dark Gray",
        image: "https://drive.usercontent.google.com/download?id=1Q3HYy11Yu_qtoSfe5ncbNjcyuNa5uUlp&export=view&authuser=0",
        characteristics: {
          "Code": "P003",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Soft Touch Storm Gray",
        image: "https://drive.usercontent.google.com/download?id=1SM3FX8d8eQvEtnU9illwfVqEMAOiA3YD&export=view&authuser=0",
        characteristics: {
          "Code": "P004",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Soft Touch New Gray",
        image: "https://drive.usercontent.google.com/download?id=1KgOw6e_Iyfk6pNCVBOd6vx4OskmmVV0v&export=view&authuser=0",
        characteristics: {
          "Code": "P005",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Soft Touch Mink",
        image: "https://drive.usercontent.google.com/download?id=1PhHwncn_sNt0jhJpGBAOAYcLnLCvZVEb&export=view&authuser=0",
        characteristics: {
          "Code": "P008",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Soft Touch Mint",
        image: "https://drive.usercontent.google.com/download?id=1JFWORctXDa804Xtkp7FLoceJ43S6OoRN&export=view&authuser=0",
        characteristics: {
          "Code": "P010",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Soft Touch Ocean Blue",
        image: "https://drive.usercontent.google.com/download?id=1yv7kcZKBGoml8hyOpeEjYKyHowNLgwj4&export=view&authuser=0",
        characteristics: {
          "Code": "P011",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Soft Touch Light Grey",
        image: "https://drive.usercontent.google.com/download?id=1f42_AjrlT4maoATGtaDyQ-sZdp9-Rmj3&export=view&authuser=0",
        characteristics: {
          "Code": "P013",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Light Grey",
        image: "https://drive.usercontent.google.com/download?id=1mfjyh58eAAXjS9iV95P7W0B_9fAgCHUi&export=view&authuser=0",
        characteristics: {
          "Code": "P116",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Inox",
        image: "https://drive.usercontent.google.com/download?id=110m4I25fR_5qJ6jtgfDiefsnAkwpTYTF&export=view&authuser=0",
        characteristics: {
          "Code": "P213",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Soft Touch Dark Oxidized Grey",
        image: "https://drive.usercontent.google.com/download?id=1ZQrsrfXfH80UPnBFTQV-Wy8FvfNqJEmr&export=view&authuser=0",
        characteristics: {
          "Code": "P254",
          "Marque": "Evogloss",
          "Décor": "Pierre"
        }
      },
      {
        type: "Soft Touch Lacquer White",
        image: "https://drive.usercontent.google.com/download?id=1m5ARTLJIazIDVAHDt4yh_T_BnHx4J6yd&export=view&authuser=0",
        characteristics: {
          "Code": "P001",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Soft Touch Cream",
        image: "https://drive.usercontent.google.com/download?id=1LmnXlXaWZB77vmcx_I6Hw9SjZBFkTe1t&export=view&authuser=0",
        characteristics: {
          "Code": "P002",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Soft Touch Black",
        image: "https://drive.usercontent.google.com/download?id=1cmzJOMqIumNpILRve-8MOx2qLcSoUBko&export=view&authuser=0",
        characteristics: {
          "Code": "P006",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Soft Touch Mocca",
        image: "https://drive.usercontent.google.com/download?id=15i5A-2Ut4QaboVSIPdULORm5zVZl1HO9&export=view&authuser=0",
        characteristics: {
          "Code": "P007",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Soft Touch Blue",
        image: "https://drive.usercontent.google.com/download?id=1ZTE0ggAlnRqzgWls-H5GUSjm8SnyciX1&export=view&authuser=0",
        characteristics: {
          "Code": "P012",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "White",
        image: "https://drive.usercontent.google.com/download?id=1ZTE0ggAlnRqzgWls-H5GUSjm8SnyciX1&export=view&authuser=0",
        characteristics: {
          "Code": "P100",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Bianco",
        image: "https://drive.usercontent.google.com/download?id=1vt9F3iW2PAtdQNyFB0mMyvjmtLaeJOql&export=view&authuser=0",
        characteristics: {
          "Code": "P101",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Cream",
        image: "https://drive.usercontent.google.com/download?id=1Eh_C8qXZBK_wSes92YBTsYLQ4pn-67NG&export=view&authuser=0",
        characteristics: {
          "Code": "P102",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Mink",
        image: "https://drive.usercontent.google.com/download?id=1M2nKxhUuRjuz6LX8P0d8L-gt-ujqHzjw&export=view&authuser=0",
        characteristics: {
          "Code": "P103",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Black",
        image: "https://drive.usercontent.google.com/download?id=1a03dTBXNZ_-mxSycVcwNS8PKD7Vg5rXC&export=view&authuser=0",
        characteristics: {
          "Code": "P104",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Damson",
        image: "https://drive.usercontent.google.com/download?id=1eVs28qxKhyz6OEuG4Nhj8n9mOxyBOKTD&export=view&authuser=0",
        characteristics: {
          "Code": "P105",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Red",
        image: "https://drive.usercontent.google.com/download?id=1_mjVqIwVxlBHAaMTZpQuiMUJLEkni7N7&export=view&authuser=0",
        characteristics: {
          "Code": "P106",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Merlo",
        image: "https://drive.usercontent.google.com/download?id=1FBgIn1UkIbiv_fEpRQGS1com3BQ7PGKU&export=view&authuser=0",
        characteristics: {
          "Code": "P107",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Anthracite",
        image: "https://drive.usercontent.google.com/download?id=15szr9lfITMOLU28kRMyboDQd0rYT9oq5&export=view&authuser=0",
        characteristics: {
          "Code": "P110",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Yellow",
        image: "https://drive.usercontent.google.com/download?id=1093QZGfeFkSRx1C55LE8burU3RYeoTMR&export=view&authuser=0",
        characteristics: {
          "Code": "P112",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Orange",
        image: "https://drive.usercontent.google.com/download?id=13JWfbC1Fw4Uu0NxhvJqUnD965KsaUvPP&export=view&authuser=0",
        characteristics: {
          "Code": "P113",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Turquoise",
        image: "https://drive.usercontent.google.com/download?id=1c76USISdwUkFmJE6Zpv_KFfvh3nrK8Tg&export=view&authuser=0",
        characteristics: {
          "Code": "P114",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Midnight Blue",
        image: "https://drive.usercontent.google.com/download?id=1oymntKN46mjlI2habFMxqo2kbIApQo-N&export=view&authuser=0",
        characteristics: {
          "Code": "P115",
          "Marque": "Evogloss",
          "Décor": "Uni"
        }
      },
      {
        type: "Ivy White",
        image: "https://drive.usercontent.google.com/download?id=1FOU78iLIov7BhWJ2G-KkOnif1qU0B1I8&export=view&authuser=0",
        characteristics: {
          "Code": "P206",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Galaxy White",
        image: "https://drive.usercontent.google.com/download?id=1kzfsbmfzN4Yvo04xE0IS6E5PBZZU2dC1&export=view&authuser=0",
        characteristics: {
          "Code": "P208",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Galaxy Cream",
        image: "https://drive.usercontent.google.com/download?id=1wMvkU3QrCQD8-w43q-p20yjdvvpPB6Oy&export=view&authuser=0",
        characteristics: {
          "Code": "P209",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Galaxy Gold",
        image: "https://drive.usercontent.google.com/download?id=1R-Z5Ro4AEwC65h7xALWjNwlDe_e8CduS&export=view&authuser=0",
        characteristics: {
          "Code": "P210",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Galaxy Metallic Anthracite",
        image: "https://drive.usercontent.google.com/download?id=1AntXq_cVoKiUby1GzOBeEls9stebnTp9&export=view&authuser=0",
        characteristics: {
          "Code": "P211",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Terra Brown",
        image: "https://drive.usercontent.google.com/download?id=1xKFGq3M6VGGN6IY94juJzzg-HxVWnyCk&export=view&authuser=0",
        characteristics: {
          "Code": "P217",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Matrix Pearl",
        image: "https://drive.usercontent.google.com/download?id=1qNkXZOUUtps0LgvBlb9K2_fQ1AWoy2xG&export=view&authuser=0",
        characteristics: {
          "Code": "P218",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Matrix Rose",
        image: "https://drive.usercontent.google.com/download?id=1iOlnmGfULAPscNfHUJgHYScn7ea8YGdl&export=view&authuser=0",
        characteristics: {
          "Code": "P219",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Dark Honey Mist",
        image: "https://drive.usercontent.google.com/download?id=1YLJqqk5uPcEb65zJgfDptqIvh1FIF8TJ&export=view&authuser=0",
        characteristics: {
          "Code": "P230",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Galaxy Black",
        image: "https://drive.usercontent.google.com/download?id=1baJ2tZxgDnWIHKkmTzR02fE0zEjaLbxg&export=view&authuser=0",
        characteristics: {
          "Code": "P231",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Terra Star",
        image: "https://drive.usercontent.google.com/download?id=1umRfPp6ccznO0yGYXWOonQbjZhf_VCmp&export=view&authuser=0",
        characteristics: {
          "Code": "P244",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Terra Latte",
        image: "https://drive.usercontent.google.com/download?id=1UqlO8znBZsOcVNtY78ifJ1UDxRbXn5D2&export=view&authuser=0",
        characteristics: {
          "Code": "P246",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Empredor Brown",
        image: "https://drive.usercontent.google.com/download?id=1JM9J3d_6lNWuzstC7mXdW7iUNXj2bVab&export=view&authuser=0",
        characteristics: {
          "Code": "P249",
          "Marque": "Evogloss",
          "Décor": "Pierre"
        }
      },
      {
        type: "Empredor Beige",
        image: "https://drive.usercontent.google.com/download?id=1khSNY7VXQe5UzifZrMMiL0QU5PAh3TyI&export=view&authuser=0",
        characteristics: {
          "Code": "P250",
          "Marque": "Evogloss",
          "Décor": "Pierre"
        }
      },
      {
        type: "Light Oxidized Copper",
        image: "https://drive.usercontent.google.com/download?id=1684crkZqzFvu7pzXIIphuHR1tIzr7RlX&export=view&authuser=0",
        characteristics: {
          "Code": "P251",
          "Marque": "Evogloss",
          "Décor": "Pierre"
        }
      },
      {
        type: "Dark Oxidized Copper",
        image: "https://drive.usercontent.google.com/download?id=1Hh0qCtmLSIJbEYIUuZfF4-VW0Y2hLdSb&export=view&authuser=0",
        characteristics: {
          "Code": "P252",
          "Marque": "Evogloss",
          "Décor": "Pierre"
        }
      },
      {
        type: "Soft Touch Light Oxidized Grey",
        image: "https://drive.usercontent.google.com/download?id=1D93Yto_cHOlz1jsKnmmwhYJlhdnQaqDz&export=view&authuser=0",
        characteristics: {
          "Code": "P253",
          "Marque": "Evogloss",
          "Décor": "Pierre"
        }
      },
      {
        type: "Soft Touch Oxidized Modern",
        image: "https://drive.usercontent.google.com/download?id=1-h2l5AsbaT2zMomXz5UAhAwkJb-BGBG8&export=view&authuser=0",
        characteristics: {
          "Code": "P255",
          "Marque": "Evogloss",
          "Décor": "Pierre"
        }
      },
      {
        type: "Vintage Cream",
        image: "https://drive.usercontent.google.com/download?id=1GHbgsBVgb4OhY38udtGBUnrCkBwlQcf2&export=view&authuser=0",
        characteristics: {
          "Code": "P256",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Vintage Brown",
        image: "https://drive.usercontent.google.com/download?id=15f0vXetzMQ0YiO1QC-KJo1QSWBt5KLUG&export=view&authuser=0",
        characteristics: {
          "Code": "P257",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Vintage Green",
        image: "https://drive.usercontent.google.com/download?id=1BBtFmKoYJyjJyAyGiN8UT8yNWEBHPG1G&export=view&authuser=0",
        characteristics: {
          "Code": "P258",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "High Gloss Metal",
        image: "https://drive.usercontent.google.com/download?id=1aEIkhRt8V0yxB_h6fZk1BKT0gEdM6A5e&export=view&authuser=0",
        characteristics: {
          "Code": "P259",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "White Pearl",
        image: "https://drive.usercontent.google.com/download?id=1d211fWf1v5O-Jm0y_zD_TLWhTIPOub4k&export=view&authuser=0",
        characteristics: {
          "Code": "P260",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Light Oxidized Grey",
        image: "https://drive.usercontent.google.com/download?id=1Sh5FGGKsWcd6Ne2rP30tlurxVDGetpKl&export=view&authuser=0",
        characteristics: {
          "Code": "P262",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Dark Oxidized Grey",
        image: "https://drive.usercontent.google.com/download?id=1fxntUvsxlbpTRw0KcQvaqUn9CN_WwD_M&export=view&authuser=0",
        characteristics: {
          "Code": "P263",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Oxidized Modern",
        image: "https://drive.usercontent.google.com/download?id=15xkVcMAbMdROj3JlnlzVb_0Gu2Iu1GyW&export=view&authuser=0",
        characteristics: {
          "Code": "P264",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Brush Bronze",
        image: "https://drive.usercontent.google.com/download?id=1CxrITORrX7QXxL3V-Y7OClTi0WyYBTNs&export=view&authuser=0",
        characteristics: {
          "Code": "P265",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Dark Inox",
        image: "https://drive.usercontent.google.com/download?id=1EFQbXDQhzWYMd_DiowzJtCufLtrMeEJi&export=view&authuser=0",
        characteristics: {
          "Code": "P266",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Bronze Inox",
        image: "https://drive.usercontent.google.com/download?id=1cV8TiZReMDs-k6kutXzai99ty4EhX35f&export=view&authuser=0",
        characteristics: {
          "Code": "P267",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Brush Gold",
        image: "https://drive.usercontent.google.com/download?id=1ch87-MNTluH1Oi4T1zk0J-OwuQW9sUyc&export=view&authuser=0",
        characteristics: {
          "Code": "P268",
          "Marque": "Evogloss",
          "Décor": "Fantaisie"
        }
      },
      {
        type: "Ebony",
        image: "https://drive.usercontent.google.com/download?id=1tW0D0s4hm2ao1bb8mNQLyNqWVJeEpgsa&export=view&authuser=0",
        characteristics: {
          "Code": "P300",
          "Marque": "Evogloss",
          "Décor": "Bois-Exotique"
        }
      },
      {
        type: "Europe Teak",
        image: "https://drive.usercontent.google.com/download?id=1wRWcw1kWlDKp0ZSWQ40MP_Q6EaH0dG2S&export=view&authuser=0",
        characteristics: {
          "Code": "P304",
          "Marque": "Evogloss",
          "Décor": "Bois-Exotique"
        }
      },
      {
        type: "Metallic Elm",
        image: "https://drive.usercontent.google.com/download?id=1zhGSyQxdZr8j4rf5S5IzYWdfy9DslbOV&export=view&authuser=0",
        characteristics: {
          "Code": "P306",
          "Marque": "Evogloss",
          "Décor": "Bois-Autres"
        }
      },
      {
        type: "Oregon Walnut",
        image: "https://drive.usercontent.google.com/download?id=169-QIt0DXi-FPOpro66EEDCekxdHrueW&export=view&authuser=0",
        characteristics: {
          "Code": "P307",
          "Marque": "Evogloss",
          "Décor": "Bois-Noyer"
        }
      },
      {
        type: "White Oak",
        image: "https://drive.usercontent.google.com/download?id=1zlyohvDXj0owiYtSMAwY-2WmvHxqiLxY&export=view&authuser=0",
        characteristics: {
          "Code": "P308",
          "Marque": "Evogloss",
          "Décor": "Bois-Chêne"
        }
      },
      {
        type: "Milano Walnut",
        image: "https://drive.usercontent.google.com/download?id=1J7hDSdq7_YzmSyYpaRHCf9DJFxauHeD7&export=view&authuser=0",
        characteristics: {
          "Code": "P309",
          "Marque": "Evogloss",
          "Décor": "Bois-Noyer"
        }
      },
      {
        type: "Imperial Walnut",
        image: "https://drive.usercontent.google.com/download?id=1EYPpHVV9hfGWaaxKArlRfedjOT4jETYA&export=view&authuser=0",
        characteristics: {
          "Code": "P310",
          "Marque": "Evogloss",
          "Décor": "Bois-Noyer"
        }
      },
      {
        type: "Sonomo Oak",
        image: "https://drive.usercontent.google.com/download?id=1a9vkrGvX16mMfwulmjIbsvzw2259YzgF&export=view&authuser=0",
        characteristics: {
          "Code": "P313",
          "Marque": "Evogloss",
          "Décor": "Bois-Chêne"
        }
      },
      {
        type: "Bamboo",
        image: "https://drive.usercontent.google.com/download?id=1g89Eko-gyqtq6UuH1znqZzzpDjJvnTF0&export=view&authuser=0",
        characteristics: {
          "Code": "P315",
          "Marque": "Evogloss",
          "Décor": "Bois-Exotique"
        }
      },
      
      
      
    ]
  },
  {
    id: "isorel",
    name: "Isorel",
    description: "Habitat et Service vous propose le panneau MDF (Medium Density Fiberboard), un produit en bois très polyvalent grâce à ses propriétés physiques et mécaniques exceptionnelles. Fabriqué par compression de fibres de bois sous haute pression, ce panneau ne contient pas de colle synthétique. Idéal pour diverses applications, il offre une finition lisse et est disponible en différentes dimensions et épaisseurs.",
    category: "PANNEAUX",
    image: [
      "https://drive.usercontent.google.com/download?id=1ygg_akaEvqHRg3OvkBPgyNskvJHHgQEz&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=11ZmJcRooO_NoQweUkSFqP4ppzThRKfFP&export=view&authuser=0"
    ],
    characteristics: [
      { name: "Finitions", value: "Smooth, perforated" },
      { name: "Dimensions", value: "2800 x 2100 mm, 2440 x 1220 mm, 3050 x 1220 mm" },
      { name: "Épaisseurs", value: "2.5 mm, 2,4 mm" },
      { name: "Caractéristiques", value: "Pine, Eucalyptus fibers, no synthetic glue" }
    ],
    applications: ["Packaging", "Woodworking", "Auto bodies"],
    origins: ["Espagne", "Türkiye"]
  },
  {
    id: "hydrofuge",
    name: "Hydrofuge MDF",
    category: "PANNEAUX",
    image: [
        "https://drive.usercontent.google.com/download?id=14VVqdU0IQl8xnQXB174BOTxeCWtjzK45&export=view&authuser=0",
        "https://drive.usercontent.google.com/download?id=1L9L8tZygwBrYBUH572xibk_m21EnkwHK&export=view&authuser=0",
        "https://drive.usercontent.google.com/download?id=1Um_td9YaYGDomgGU6m_8hddraTCgmJoK&export=view&authuser=0"
    ],
    description: "Habitat et Service vous propose le panneau MDF Hydrofuge, un panneau de haute densité spécialement conçu pour résister aux conditions humides intérieures telles que les cuisines et les salles de bain. Composé de fibres de bois compactées et collées entre elles, ce panneau est idéal pour la décoration et l'aménagement intérieur. Il peut être usiné, défoncé, perforé, ou recevoir toutes sortes de finitions (revêtu, laqué, mélaminé, stratifié...). Grâce à sa surface fine, lisse et dense, ce panneau offre également une grande stabilité dimensionnelle.",
    characteristics: [
        { name: "Formats", value: "2800 x 2070 mm" },
        { name: "Épaisseurs", value: "8 mm, 10 mm, 15 mm, 18 mm" },
        { name: "Utilisation", value: "Intérieur humide (cuisines, salles de bain)" },
        { name: "Finitions possibles", value: "Revêtu, laqué, mélaminé, stratifié" }
    ],
    applications: [
        "Décoration intérieure",
        "Aménagement intérieur",
        "Utilisation en conditions humides"
    ],
    origins: [
        "Espagne"
    ]
  },
  {
    id: "gloss-gmax",
    name: "Gloss GMax",
    description: "Les panneaux Gloss GMax sont des panneaux en bois avec une surface décorative brillante. Produits par l'application de colle et de laque acrylique UV sur la surface de panneaux MDF ou de particules revêtus de mélamine, ces panneaux brillants utilisent des technologies industrielles avancées. La technologie Calender Coating Inert permet d'obtenir une qualité de surface supérieure et une brillance impressionnante avec des effets de surface minimisés. Le processus de polymérisation chimique de la colle polymère (revêtement à chaud) assure une adhérence physique et chimique excellente à la surface mélaminée, offrant ainsi une surface de qualité supérieure en termes de qualité de découpe et de maniabilité par rapport à d'autres surfaces brillantes.",
    category: "PANNEAUX",
    image: [
      "https://drive.usercontent.google.com/download?id=1yiOthV0EEfxC65QWs6vL5MHtkqx3rFtD&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1nn0-N0b8qppMDVjrq6gv3EcQv7BKAAYq&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1gFwVkl2FPpY_QppCtuQhlOsYbvtBQbCp&export=view&authuser=0"
    ],
    characteristics: [
      { name: "Essences des bois", value: "MDF, Panneaux de Particules" },
      { name: "Technologie", value: "Calender Coating Inert" },
      { name: "Revêtement", value: "Laque acrylique UV" },
      { name: "Finitions", value: "Glossy" },
      { name: "Dimensions", value: "2800 x 2100 mm (1 face high gloss, 1 face mate), 2800 x 1220 mm (1 face high gloss, 1 face blanche)" },
      { name: "Épaisseurs", value: "18 mm" },
      { name: "Caractéristiques", value: "Density between 720 - 750 kg/m3" }
    ],
    applications: [
      "Cuisines",
      "Meubles",
      "Mobilier",
      "Revêtements muraux",
      "Portes"
    ],
    types: [
      {
        type: "Lac. White",
        image: "https://drive.usercontent.google.com/download?id=1GdGALDRFrpDDQvYYpTHn51jbIR90M9lk&export=view&authuser=0",
        characteristics: {
          "Code": "D129",
          "Marque": "Glossmax",
          "Dimensions": "2100 x 2800 mm",
          "Épaisseurs": "18 mm",
          "Décor": "Uni"
        }
      },
      {
        type: "Stoneware",
        image: "https://drive.usercontent.google.com/download?id=1LWXo1qExeQmotD4Vyxr8ROa3FF7VjM9e&export=view&authuser=0",
        characteristics: {
          "Code": "D140",
          "Marque": "Glossmax",
          "Dimensions": "2100 x 2800 mm",
          "Épaisseurs": "18 mm",
          "Décor": "Uni"
        }
      },
      {
        type: "Anthracite",
        image: "https://drive.usercontent.google.com/download?id=1JBQlhps39UwV-iuwRkIY2ULxwq_HvgxO&export=view&authuser=0",
        characteristics: {
          "Code": "D143",
          "Marque": "Glossmax",
          "Dimensions": "2100 x 2800 mm",
          "Épaisseurs": "18 mm",
          "Décor": "Uni"
        }
      },
      
      
      {
        type: "Ultra White",
        image: "https://drive.usercontent.google.com/download?id=1vLLP_n2JjogrKWytd-hplq_tZiFmmLLO&export=view&authuser=0",
        characteristics: {
          "Code": "D174",
          "Marque": "Glossmax",
          "Dimensions": "2100 x 2800 mm",
          "Épaisseurs": "18 mm",
          "Décor": "Uni"
        }
      },
      
      {
        type: "Piano Black",
        image: "https://drive.usercontent.google.com/download?id=1EcC17zJFSaLDL2sVsKFQzwwcphFsnRo6&export=view&authuser=0",
        characteristics: {
          "Code": "D186",
          "Marque": "Glossmax",
          "Dimensions": "2100 x 2800 mm",
          "Épaisseurs": "18 mm",
          "Décor": "Uni"
        }
      },
      
      
    ]
  },
  {
    id: "panneaux-particules-bruts",
    name: "Panneaux Particules Bruts",
    category: "PANNEAUX",
    image: [
      "https://drive.usercontent.google.com/download?id=1_pFgbd5KGraLTgK3WVCFEmNFEAOdIVl8&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=13PMxMT5t4aPereec-CjT53dJePDkRSlm&export=view&authuser=0"
    ],
    description: "Habitat et Service vous propose les Panneaux Particules Bruts, fabriqués à partir de particules de bois collées entre elles par une résine et pressées à chaud. Ce matériau, également connu sous le nom d'aggloméré, est idéal pour divers usages tels que les cuisines, les meubles, le mobilier mural, les portes et les revêtements. Les faces des panneaux peuvent être recouvertes de finitions décoratives en placage bois ou en résine de mélamine. Avec une densité de 440 kg/m3, une résistance à la flexion de 75 Mpa, à la traction de 90 Mpa et à la compression de 40 Mpa, ces panneaux offrent une grande polyvalence et robustesse.",
    characteristics: [
      { "name": "Essences des bois", "value": "Pin, Eucalyptus, Sapin, Peuplier" },
      { "name": "Densité", "value": "440 kg/m3" },
      { "name": "Résistance", "value": "Flexion: 75 Mpa, Traction: 90 Mpa, Compression: 40 Mpa" },
      { "name": "Longueur", "value": "2440-2550mm" },
      { "name": "Épaisseur", "value": "8-16-19mm" },
      { "name": "Largeur", "value": "1700-1830-1220mm" }
    ],
    applications: [
      "Cuisines",
      "Meubles",
      "Mobilier",
      "Muraux",
      "Portes",
      "Revêtements"
    ],
    origins: ["Maroc", "Espagne", "Turquie"]
  },
  {
    id: "Panneaux-Particules-Melamines-stratidecors",
    name: "Panneaux Particules Mélaminés (STRATIDÉCORS)",
    category: "PANNEAUX",
    image: [
      "https://drive.usercontent.google.com/download?id=18CUSyuLxXhDar5uDUjfVoaKMPJI5WDdb&export=view&authuser=0"
    ],
    description: "Découvrez les Panneaux Particules Mélaminés (STRATIDÉCORS) proposés par Habitat et Service. Ces panneaux sont recouverts d'un parement décoratif en placage bois ou en résine de mélamine ou synthétique, avec une variété de finitions disponibles. Leur composition spéciale de colle rend le panneau résistant à l'eau ou au feu, augmentant sa durabilité. Avec une densité variant de 600 à 800 kg/m3 et des propriétés de résistance à la flexion de 75 Mpa, traction de 90 Mpa et compression de 40 Mpa, ces panneaux sont idéaux pour les cuisines, meubles, mobilier mural, portes et revêtements.",
    characteristics: [
      { "name": "Essences des bois", "value": "Pin, Eucalyptus, Sapin, Peuplier" },
      { "name": "Densité", "value": "600 et 800 kg/m3" },
      { "name": "Résistance", "value": "Flexion: 75 Mpa, Traction: 90 Mpa, Compression: 40 Mpa" },
      { "name": "Dimensions", "value": "2440 x 1700 mm, 2550 x 1830 mm, 2800 x 2070 mm" },
      { "name": "Épaisseur", "value": "8-16-18 mm" },
    ],
    applications: [
      "Cuisines",
      "Meubles",
      "Mobilier",
      "Muraux",
      "Portes",
      "Revêtements"
    ],
    origins: ["Maroc", "Espagne"]
  },
  {
    id: "Panneaux-Particules-Placage-stratiboos",
    name: "Panneaux Particules Placage (STRATIBOIS)",
    category: "PANNEAUX",
    image: [
      "https://drive.usercontent.google.com/download?id=1S47icXcaVtZEh8M46rB5cT0oZdrqtvB5&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1yuD2adKCXIbPXc0l4HoPq3ZJrHNCany9&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1mgpb8z6A_MdlzjcSPelTRNH02G8OmfKP&export=view&authuser=0"
    ],
    description: "Les Panneaux Particules Placage (STRATIBOIS) sont conçus pour allier robustesse et esthétique. Fabriqués à partir de particules de bois collées et pressées à chaud, ces panneaux présentent un parement décoratif en placage bois ou en résine mélamine ou synthétique, offrant une diversité de finitions. Ils sont conçus pour être résistants à l'eau et au feu grâce à une composition spéciale de colle. Avec une densité de 440 kg/m3, ces panneaux assurent une résistance à la flexion de 75 Mpa, à la traction de 90 Mpa et à la compression de 40 Mpa, et sont idéaux pour les cloisons intérieures, la menuiserie, les meubles, les placards et les portes.",
    characteristics: [
      { "name": "Essences des bois", "value": "Pin, Eucalyptus, Sapin, Peuplier" },
      { "name": "Densité", "value": "440 kg/m3 (lorsque sec à 12%)" },
      { "name": "Résistance", "value": "Flexion: 75 Mpa, Traction: 90 Mpa, Compression: 40 Mpa" },
      { "name": "Longueur", "value": "2440-2550mm" },
      { "name": "Épaisseur", "value": "8-16-19mm" },
      { "name": "Largeur", "value": "1700-1830-1220mm" }
    ],
    applications: [
      "Cloisons intérieures",
      "Menuiserie",
      "Meubles",
      "Placards",
      "Portes"
    ],
    origins: ["Maroc"]
  },
  {
    id: "bois-blanc-madries-et-planche",
    name: "Bois Blanc MADRIERS et Planche",
    category: "BOIS DE COFFRAGE",
    image: [
        "https://drive.usercontent.google.com/download?id=1VBC3DdyppQEAK7Wf-a-OQansFgHvbHug&export=view&authuser=0",
        "https://drive.usercontent.google.com/download?id=1lPFM8tGXggSTC5ylqWnfphEkQSJPZzZT&export=view&authuser=0",
        "https://drive.usercontent.google.com/download?id=1ulpJHIqkNj9lOo9P9QFjUFi3ROwt2NG6&export=view&authuser=0"
    ],
    description: "Habitat et Service propose deux types de bois blanc : MADRIERS et planche, également appelé sapin ou épicéa, importé de Suède et Finlande. Ces bois sont légers, résistants, et idéaux pour la menuiserie intérieure et extérieure, la fabrication de charpentes, de cadres, de portes et fenêtres, ainsi que pour le coffrage.",
    characteristics: [
        { "name": "Essences", "value": "Épicéa" },
        { "name": "Provenances", "value": "Austria" },
        { "name": "Humidité & Durabilité", "value": "De 12% à 22%. Classe 1 (naturelle)" },
        { "name": "Densité", "value": "440 kg/m3 (at 12% moisture content)" },
        { "name": "Élasticité", "value": "11 000 Mpa" },
        { "name": "Résistance", "value": "Flexion: 75 Mpa, Traction: 90 Mpa, Compression: 40 Mpa" }
    ],
    applications: [
        "Coffrage", 
        "Emballage", 
        "Palette", 
        "Tourets", 
        "Menuiserie économique"
    ],
    origins: ["Austria"]
  },
  {
    id: "bois-rouge",
    name: "Bois Rouge",
    category: "BOIS ROUGE",
    image: [
      "https://drive.usercontent.google.com/download?id=1ahGuSTi03mFO-vHZiH3-2tHtl2tb2xPW&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1dvA-YnUyhGv65ZGZ9AWY-nCMbkno5cHA&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1_K0cjT5l_7xO2T32y9spldFiWo2Fja7o&export=view&authuser=0"
    ],
    description: "Comarbois reçoit d’importants volumes de bois rouge qui sont stockés dans ses dépôts après un contrôle qualité minutieux. Grâce à ses différentes caractéristiques mécaniques et sa belle couleur rougeâtre, le bois rouge est idéal pour la menuiserie intérieure et extérieure ainsi que pour la construction de charpentes, le coffrage ou l’ébénisterie.",
    characteristics: [
      { name: "Essence", value: "Pin Sylvestre" },
      { name: "Provenances", value: "Suède, Finlande, Russie" },
      { name: "Couleur", value: "Rougeâtre" },
      { name: "Humidité & Durabilité", value: "Sec à 18%, Classe 1 (naturelle) à Classe 4 (autoclave)" },
      { name: "Densité", value: "470 kg/m3 (lorsque sec à 12%)" },
      { name: "Élasticité", value: "12 000 Mpa" },
      { name: "Résistance", value: "Flexion: 90 Mpa, Traction: 104 Mpa, Compression: 46 Mpa" },
      { name: "Finition", value: "Brut de sciage" }
    ],
    applications: ["Menuiserie intérieure & extérieure", "Charpente", "Coffrage", "Ébénisterie"],
    origins: ["Sweden"]
  },
  {
    id: "contreplaque-filme-bakelise",
    name: "CONTREPLAQUÉ FILMÉ (BAKÉLISÉ)",
    category: "BOIS DE COFFRAGE",
    image: [
      "https://drive.usercontent.google.com/download?id=1X3W3CB0ToddMfuF_LFPUc4hpQDA_ZIAR&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1o1Yl3gLYma8ubZvz0mvuhLcLB164jPPZ&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1wMAWQ061II_Zp30aYJA_esPRTcrHRRPC&export=view&authuser=0"
    ],
    description: "Le panneau bakélisé est particulièrement employé dans le domaine de la construction pour la réalisation du coffrage béton car il permet d’obtenir des finitions de très bonne qualité. Mais il peut aussi être utilisé dans d’autres domaines tels que la carrosserie et l’évènementiel. C’est un matériau apprécié car il est facile d’emploi, multi-usages et réutilisable, ce qui permet d’optimiser les coûts. Plusieurs essences et dimensions disponibles jusqu’à 13 plis.",
    characteristics: [
      { name: "Dimensions disponibles", value: "2500 x 1250 x 15 mm, 2500 x 1250 x 18 mm, 3000 x 1500 x 15 mm" },
      { name: "Formats (mm)", value: "2500 x 1250" },
      { name: "Revêtements (finition)", value: "Films phénoliques brun ou noir de 120 à 220g/m2, 4 chants traités à la peinture acrylique hydrofuge (couleur du film)" },
      { name: "Revêtement", value: "2 faces revêtues d’un film phénolique de 170g/m2" },
      { name: "Types", value: "Normal ou bien antidérapant" },
      { name: "Provenances", value: "Finlande, Espagne, Brésil, Russie" },
      { name: "Épaisseurs (mm)", value: "15 / 18 / 21" },
      { name: "Essences", value: "Pin, Bouleau, Peuplier, Eucalyptus" }
    ],
    applications: ["Coffrage", "Carrosserie", "Dalles de plancher", "Agencement"],
    origins: ["Austria"]
  },
  {
    id: "h-20-lana",
    name: "H-20 LANA",
    category: "BOIS DE COFFRAGE",
    image: [
      "https://drive.usercontent.google.com/download?id=1KOa0hod2eRmjydPdF73gIbiMcyAVT2id&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1P-Qjl_jOP08QH6SlbcfYp7a7Gt2Nol4T&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1qdG9ixW9vmNkvPBqoTVRHJySdHCi7FdG&export=view&authuser=0"
      
    ],
    description: "Spruce wood with PEFC certification and C24 quality, calibrated with rounded and protected edges and with finger joints along the length.",
    characteristics: [
      { name: "Heads", value: "Spruce wood with PEFC certification and C24 quality, calibrated with rounded and protected edges and with finger joints along the length." },
      { name: "Webs", value: "Of a three-layer board with a thickness of 27 mm." },
      { name: "Anti-Humidity Treatment", value: "Protective paintwork throughout the beam." },
      { name: "Protected Beam End", value: "Anti-shock polymer caps specifically designed to last longer on site." },
      { name: "Certifications", value: "ÜZ-BWU03-l 14.24.29 certificate by MPA Sttutgart in accordance with European regulation EN 13377 and DIN V 20000-2. C1 Certificate of Glue according to DIN 1952-2008 regulation certified by MPA Stuttgart." }
    ],
    applications: ["Coffrage", "Carrosserie", "Dalles de plancher", "Agencement"],
    origins: ["Austria"]
  },
  {
    id: "bardage",
    name: "Bardage",
    category: "HABILLAGE",
    image: [
      "https://drive.usercontent.google.com/download?id=1kuTQNandGTNiOS7gwC6BM8C3ieCyygnj&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1HolNJ_Yc4XGuPEz6f6isDAiCSJj3ISlk&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1Wd62wGX9M57Syv54eeTo2DXzYhZfCXRw&export=view&authuser=0"
    ],
    description: "Habitat et Service vous propose un Bardage en bois de haute qualité, conçu pour des applications extérieures. Ce bardage est spécialement dimensionné pour résister aux conditions climatiques variées, offrant une robustesse et une durabilité exceptionnelles. En complément, le Bardage comprend des extensions comme le Coin et la Corniere, idéales pour des finitions et des renforts spécifiques.",
    characteristics: [
      { name: "Largeur", value: "Bardage: 50 mm, Coin: 50 mm, Corniere: 30 mm" },
      { name: "Longueur", value: "2800 mm pour tous" },
      { name: "Épaisseur", value: "Bardage: 25 mm, Coin: 22 mm, Corniere: 30 mm" },
      { name: "Dimensions du paquet", value: "Bardage: 58 x 224 x 2800 mm, Coin: 64 x 258 x 2800 mm, Corniere: 43 x 303 x 2800 mm" },
      { name: "Poids du paquet", value: "Bardage: 18 kg, Coin: 21.2 kg, Corniere: 18.9 kg" },
      { name: "Mètres linéaires par paquet", value: "Bardage: 33.6 mt, Coin: 42 mt, Corniere: 78.4 mt" }
    ],
    applications: [
      "Revêtement extérieur",
      "Finitions et renforts d'angles (Coin)",
      "Renforts supplémentaires (Corniere)"
    ],
    origins: []
  },
  {
    id: "bardage-acoustique",
    name: "Bardage Acoustique",
    category: "HABILLAGE",
    image: [
      "https://drive.usercontent.google.com/download?id=1LJnXBaNFp5cpgYVwhAi5QnD_7eoZDlz8&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1hzyVvYBbbXqRqv7GLnIpUY3Zi_ePAqeu&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1jOynYIGYvYHPUIX9E1GoeCdolTrZ4LTG&export=view&authuser=0"
    ],
    description: "Habitat et Service vous présente les Panneaux Acoustiques, idéals pour créer des zones de confort acoustique dans vos applications décoratives. Grâce à leur structure en feutre dense absorbant les sons, ces panneaux ajoutent une richesse visuelle à toutes vos applications intérieures nécessitant une isolation acoustique. Faciles à appliquer, avec une surface de profil nettoyable, ils sont le choix parfait pour vos designs d'intérieur.",
    characteristics: [
      { name: "Structure", value: "Feutre dense absorbant les sons" },
      { name: "Facilité d'application", value: "Structure facile à appliquer" },
      { name: "Surface", value: "Profil nettoyable" }
    ],
    applications: [
      "Isolation acoustique", 
      "Design intérieur", 
      "Décorations murales"],
    origins: []
  },

  {
    id: "bois-dur-acajou",
    name: "BOIS DUR Acajou",
    category: "BOIS DUR",
    image: [
      ""
    ],
    description: "Découvrez la richesse et l'élégance du BOIS DUR Acajou par Habitat et Service. Provenant d’arbres tropicaux de la famille des Meliaceae, l'acajou est réputé pour sa teinte unique allant du rose pâle au rouge foncé et son odeur puissante. Ce bois noble est particulièrement apprécié par les ébénistes pour ses utilisations variées en ébénisterie, ameublement, décoration, placages décoratifs, marqueterie, lambris et parquets.",
    characteristics: [
        { "name": "Essence", "value": "Acajou" },
        { "name": "Densité", "value": "570 kg/m3" },
        { "name": "Résistance", "value": "Flexion: 95 Mpa, Compression: 50 Mpa" },
        { "name": "Longueur", "value": "1500mm à 4700mm" },
        { "name": "Épaisseur", "value": "50mm à 80mm" },
        { "name": "Largeur", "value": "75mm à 225mm" }
    ],
    applications: [
      "Ébénisterie",
      "Ameublement",
      "Décoration",
      "Placages décoratifs",
      "Marqueterie",
      "Lambris",
      "Parquets"
    ],
    origins: ["Europe"]
  },
  {
    id: "bois-dur-cedre",
    name: "BOIS DUR Cèdre",
    category: "BOIS DUR",
    image: [
      ""
    ],
    description: "Découvrez la robustesse du BOIS DUR Cèdre par Habitat et Service. Considéré comme le bois dur domestique le plus résistant aux intempéries, le cèdre est idéal pour des applications extérieures telles que la menuiserie extérieure, les cadres de portes et fenêtres, et la construction de maisons à ossature bois. Sa densité de 0,8 et sa résistance exceptionnelle en font un choix prisé pour divers projets de menuiserie et d'agencement.",
    characteristics: [
        { "name": "Essence", "value": "Cèdre" },
        { "name": "Densité", "value": "0,8" },
        { "name": "Résistance", "value": "Flexion: 95 Mpa, Compression: 50 Mpa" },
        { "name": "Longueur", "value": "1200mm à 4000mm" },
        { "name": "Épaisseur", "value": "27mm à 80mm" },
        { "name": "Largeur", "value": "75mm à 225mm" }
    ],
    applications: [
      "Menuiserie intérieure & extérieure",
      "Cadres de portes/fenêtres",
      "Lamellés-collés",
      "Tourets",
      "Emballages",
      "Palettes",
      "Agencement",
      "Construction de maison à ossature bois"
    ],
    origins: ["Maroc"]
  },
  {
    id: "bois-dur-chene",
    name: "BOIS DUR Chêne",
    category: "BOIS DUR",
    image: [
      "https://drive.usercontent.google.com/download?id=1rtsoldkgmeqkEedmor-mezSUVKdGnJdf&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1Gh6gEJXWFIVin7dSOStPYrn4fisCdEhy&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=13o1hrSMs2bw4Dz2jmG1LzSzeLxA8UzQQ&export=view&authuser=0"
    ],
    description: "Découvrez la noblesse du BOIS DUR Chêne par Habitat et Service. Réputé pour sa dureté et son grain fin, le chêne est le plus connu des feuillus durs. Utilisé en menuiserie extérieure pour des portes et fenêtres, ainsi qu'en décoration, agencement, boiseries avec sculptures, meubles, placages et contreplaqués. Sa densité de 740 kg/m3 et sa résistance exceptionnelle en font un choix polyvalent et élégant pour divers projets de menuiserie et de décoration.",
    characteristics: [
        { "name": "Essence", "value": "Chêne" },
        { "name": "Densité", "value": "740 kg/m3" },
        { "name": "Résistance", "value": "Flexion: 97 Mpa, Compression: 58 Mpa" },
        { "name": "Longueur", "value": "1200mm à 4000mm" },
        { "name": "Épaisseur", "value": "27mm à 80mm" },
        { "name": "Largeur", "value": "75mm à 225mm" }
    ],
    applications: [
      "Menuiserie intérieure & extérieure",
      "Cadres de portes/fenêtres",
      "Lamellés-collés",
      "Tourets",
      "Emballages",
      "Palettes",
      "Agencement",
      "Construction de maison à ossature bois"
    ],
    origins: ["USA"]
  },
  {
    id: "bois-dur-Dibetou",
    name: "BOIS DUR Dibétou",
    category: "BOIS DUR",
    image: [
      ""
    ],
    description: "Découvrez le BOIS DUR Dibétou par Habitat et Service, également connu sous le nom de noyer africain. Ce bois noble, originaire d'Afrique équatoriale, se distingue par sa tendreté et sa texture fine. Avec une densité de 440 kg/m3 lorsqu'il est sec à 12%, il est idéal pour la fabrication de contreplaqué, plaquages, et pour des applications en ébénisterie et menuiserie intérieure. Sa résistance à la flexion et à la compression assure une durabilité et une performance élevées dans divers projets d'ameublement et d'agencement.",
    characteristics: [
        { "name": "Essence", "value": "Dibetou" },
        { "name": "Densité", "value": "440 kg/m3 (sec à 12%)" },
        { "name": "Résistance", "value": "Flexion: 95 Mpa, Compression: 50 Mpa" },
        { "name": "Longueur", "value": "2100mm à 5000mm" },
        { "name": "Épaisseur", "value": "80mm" },
        { "name": "Largeur", "value": "75mm à 225mm" }
    ],
    applications: [
      "Contreplaqué",
      "Plaquage",
      "Ébénisterie",
      "Menuiserie intérieure",
      "Aménagement",
      "Escaliers"
    ],
    origins: ["Europe"]
  },
  {
    id: "bois-dur-frene",
    name: "BOIS DUR Frêne",
    category: "BOIS DUR",
    image: [
      "https://drive.usercontent.google.com/download?id=1JbGhIfsBEXgW6biiEIut5Y7x4lndOUI5&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1VPfS7yxYYB6STwAdZYxIAC6XmtXFBbm0&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1PyEVsMXCcrCODbMlkvTxqpkcb9iTFAHC&export=view&authuser=0"
    ],
    description: "Découvrez la qualité exceptionnelle du BOIS DUR Frêne par Habitat et Service, un bois dur de couleur blanche avec des reflets nacrés et parfois rosés. Avec le temps, ce bois s'assombrit, ajoutant du caractère et de l'élégance à tout projet. Connu pour son élasticité, sa durabilité et sa résistance, le BOIS DUR Frêne est parfait pour diverses applications telles que la menuiserie intérieure et le revêtement de sols.",
    characteristics: [
        { "name": "Essence", "value": "Frêne" },
        { "name": "Densité", "value": "0.7 (dur)" },
        { "name": "Résistance", "value": "Flexion: 113 Mpa, Compression: 51 Mpa" },
        { "name": "Longueur", "value": "1200mm à 4000mm" },
        { "name": "Épaisseur", "value": "52mm" },
        { "name": "Largeur", "value": "75mm à 225mm" }
      ],
    applications: ["Menuiserie intérieure", "Menuiserie extérieure", "Fabrication de meubles", "Agencement"],
    origins: ["Europe"]
  },
  {
    id: "bois-dur-hetre",
    name: "BOIS DUR Hêtre",
    category: "BOIS DUR",
    image: [
      "https://drive.usercontent.google.com/download?id=1LtJGfgHkVAvRWITOgsZNXSsp6wXGdQj0&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1NIkz_vV078h2koiGzM0gKnTT_QyrsAR_&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1FTOnH8w-qVTn2DdlQuTzXdrugpv-hdLe&export=view&authuser=0"
    ],
    description: "Découvrez la polyvalence du BOIS DUR Hêtre par Habitat et Service, largement utilisé dans les diverses industries du bois. Idéal pour la menuiserie intérieure et extérieure, ce bois est prisé pour les portes, meubles, articles ménagers, et plus encore. Le hêtre se distingue par sa robustesse et sa capacité à prendre différentes teintes, imitant l'acajou, le noyer ou le palissandre. Malgré un séchage délicat, ce bois massif est parfait pour les parquets, escaliers, et objets de cuisine, offrant un esthétisme inégalé.",
    characteristics: [
        { "name": "Essence", "value": "Hêtre" },
        { "name": "Densité", "value": "0,60 à 0,75 (dur)" },
        { "name": "Résistance", "value": "Flexion: 111 Mpa, Compression: 57 Mpa" },
        { "name": "Longueur", "value": "300mm, 600mm, 800mm, 1000mm, 2000mm, 3000mm, 4000mm" },
        { "name": "Épaisseur", "value": "27mm, 40mm, 50mm, 52mm, 80mm" },
        { "name": "Largeur", "value": "75mm à 225mm" },
        { "name": "Humidité", "value": "Frais de Sciage (30-35%), AD (20/25%), KD (8% à 15%)" },
        { "name": "Qualités", "value": "Prime, AB, A, B, C" },
        { "name": "Couleurs", "value": "Brun clair, blanc crème, rose pâle, zones rougeâtres vers le cœur" },
        { "name": "Sciage", "value": "Brut & raboté" },
        { "name": "Spécificités", "value": "Avivés, non avivés & semi avivés" }
    ],
    applications: [
        "Menuiserie intérieure & extérieure",
        "Cadres de portes/fenêtres",
        "Lamellés-collés",
        "Tourets",
        "Emballages",
        "Palettes",
        "Agencement",
        "Construction de maison à ossature bois",
        "Mobilier",
        "Parquet",
        "Escaliers",
        "Objets et ustensiles de cuisine"
    ],
    origins:["France", "Roumanie", "Croatie", "Italie"]
  },
  // {
  //   id: "bois-dur-iroko",
  //   name: "BOIS DUR Iroko",
  //   category: "BOIS DUR",
  //   image: [
  //     ""
  //   ],
  //   description: "Découvrez le BOIS DUR Iroko par Habitat et Service, un bois exotique reconnu pour sa durabilité et ses propriétés économiques et écologiques. Ne nécessitant aucun traitement de préservation, ce bois est idéal pour les aménagements extérieurs. Avec une densité variant de 0.60 à 0.75, il est parfaitement adapté pour les menuiseries intérieures, les revêtements de sols et la charpente. Sa résistance élevée à la flexion (117 Mpa) et à la compression (64 Mpa) garantit une longévité et une performance exceptionnelles dans divers projets de construction.",
  //   characteristics: [
  //     { "name": "Essence", "value": "Iroko" },
  //     { "name": "Densité", "value": "0.60 à 0.75" },
  //     { "name": "Résistance", "value": "Flexion: 117 Mpa, Compression: 64 Mpa" },
  //     { "name": "Longueur", "value": "5000mm" },
  //     { "name": "Épaisseur", "value": "80mm" },
  //     { "name": "Largeur", "value": "75mm à 225mm" }
  //   ],
  //   applications: [
  //     "Menuiserie intérieure",
  //     "Revêtement de sols",
  //     "Charpente"
  //   ],
  //   origins: []
  // },
  // {
  //   id: "bois-dur-noyer",
  //   name: "BOIS DUR Noyer",
  //   category: "BOIS DUR",
  //   image: [
  //     ""
  //   ],
  //   description: "Découvrez le BOIS DUR Noyer proposé par Habitat et Service, un bois dur renommé pour sa robustesse et son élégance. Avec une densité variant de 0.60 à 0.75, il est idéal pour des applications variées telles que la menuiserie intérieure, le revêtement de sols et la charpente. Sa résistance élevée à la flexion (117 Mpa) et à la compression (64 Mpa) garantit une excellente durabilité et performance. Ce bois est parfait pour des projets de haute qualité nécessitant à la fois esthétique et solidité.",
  //   characteristics: [
  //     { "name": "Essence", "value": "Noyer" },
  //     { "name": "Densité", "value": "0.60 à 0.75" },
  //     { "name": "Résistance", "value": "Flexion: 117 Mpa, Compression: 64 Mpa" },
  //     { "name": "Longueur", "value": "5000mm" },
  //     { "name": "Épaisseur", "value": "80mm" },
  //     { "name": "Largeur", "value": "75mm à 225mm" }
  //   ],
  //   applications: [
  //     "Menuiserie intérieure",
  //     "Revêtement de sols",
  //     "Charpente"
  //   ],
  //   origins: []
  // },
  {
    id: "bois-dur-sapelli",
    name: "BOIS DUR Sapelli",
    category: "BOIS DUR",
    image: [
      ""
    ],
    description: "Le Sapelli est un bois dur africain rougeâtre, apprécié pour sa durabilité et son esthétique unique.",
    characteristics: {
      couleurs: "Brun rougeâtre",
      finition: "Brut de sciage"
    },
    applications: ["Menuiserie intérieure", "Menuiserie extérieure", "Fabrication de meubles", "Agencement"],
    origins: ["Afrique"]
  },
  
  {
    id: "contreplaque",
    name: "Contreplaqué",
    category: "PANNEAUX",
    image: [
      "https://drive.usercontent.google.com/download?id=1cgJ-hIyeD1yLe1pWREykmWZ9YVt3KHgW&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=18CukrD-teytiX1MyekdIZtSnaxAoufWY&export=view&authuser=0"
    ],
    description: "Le contreplaqué est un matériau de construction essentiel, prisé pour sa robustesse et sa polyvalence. Fabriqué en collant ensemble plusieurs couches de bois, il est utilisé dans divers domaines tels que la construction, la fabrication de meubles et l'agencement. Le contreplaqué est apprécié pour sa résistance à l'humidité, sa durabilité et sa capacité à être travaillé facilement. Nos contreplaqués sont disponibles dans diverses essences et finitions, adaptées à vos besoins spécifiques.",
    types: [
      {
        type: "Acajou",
        image: "https://drive.usercontent.google.com/download?id=1EY2rd5WBQ_7B8-eD5C7qmtrMYqwS9HIv&export=view&authuser=0",
        characteristics: {
          "Provenance": "États-Unis",
          "Couleurs": "Brun rougeâtre, veiné de sombre",
          "Finition": "Brut de sciage"
        }
      },
      {
        type: "Cèdre",
        image: "https://drive.usercontent.google.com/download?id=171i2htLx5d-5cd1CNtXJTEaW7qaIUBMt&export=view&authuser=0",
        characteristics: {
          "Provenance": "Canada",
          "Couleurs": "Rouge pâle à brun",
          "Finition": "Brut de sciage"
        }
      },
      {
        type: "Chêne",
        image: "https://drive.usercontent.google.com/download?id=15wlJaly-2URtby48MhYo6THtG5DROH9s&export=view&authuser=0",
        characteristics: {
          "Provenance": "Europe",
          "Couleurs": "Brun clair à foncé",
          "Finition": "Brut de sciage"
        }
      },
      {
        type: "Dibetou",
        image: "https://drive.usercontent.google.com/download?id=15gsw6XgavTGoldXijVh4eeAqiszxkFnl&export=view&authuser=0",
        characteristics: {
          "Provenance": "Brésil",
          "Couleurs": "Brun foncé avec nuances",
          "Finition": "Brut de sciage"
        }
      },
      {
        type: "Frêne",
        image: "https://drive.usercontent.google.com/download?id=1YnYZjcjlgTq22-sJPeyvUPISJKgpKhOr&export=view&authuser=0",
        characteristics: {
          "Provenance": "États-Unis",
          "Couleurs": "Gris pâle à brun",
          "Finition": "Brut de sciage"
        }
      },
      {
        type: "Hêtre",
        image: "https://drive.usercontent.google.com/download?id=1bu7BD-IBtLTRvBHlukx7q2OOXdKD9nOb&export=view&authuser=0",
        characteristics: {
          "Provenance": "Europe",
          "Couleurs": "Beige clair à brun",
          "Finition": "Brut de sciage"
        }
      },
      {
        type: "Iroko",
        image: "https://drive.usercontent.google.com/download?id=1AyRdeA26Sm4Ja5Rj0XkYKaaENGZwTH6_&export=view&authuser=0",
        characteristics: {
          "Provenance": "Afrique",
          "Couleurs": "Brun doré à foncé",
          "Finition": "Brut de sciage"
        }
      },
      {
        type: "Noyer",
        image: "https://drive.usercontent.google.com/download?id=1jEf6-lCm2pgX773HUq6NXRHrTNfYsGHE&export=view&authuser=0",
        characteristics: {
          "Provenance": "États-Unis",
          "Couleurs": "Brun foncé à noir",
          "Finition": "Brut de sciage"
        }
      },
      {
        type: "Sapelli",
        image: "https://drive.usercontent.google.com/download?id=1YnZ9pm_D0dqiH_sfF7H0PJo_0SVkznrz&export=view&authuser=0",
        characteristics: {
          "Provenance": "Afrique",
          "Couleurs": "Rouge brun",
          "Finition": "Brut de sciage"
        }
      },
      {
        "type": "Eyong",
        "image": "https://drive.usercontent.google.com/download?id=1L8V_r7dABX6kcu01fLQAswwsdVMO3Otv&export=view&authuser=0",
        "characteristics": {
          "Provenance": "Afrique",
          "Couleurs": "Jaune clair à brun doré",
          "Finition": "Brut de sciage"
        }
      }
    ],
    applications: ["Construction", "Fabrication de meubles", "Agencement", "Carrosserie"]
  },
  {
    id: "tricapa",
    name: "Tricapa",
    category: "BOIS DE COFFRAGE",
    image: [
        "https://drive.usercontent.google.com/download?id=1HX3sWialUIdK_FiDbiPzGGEVERps_7u9&export=view&authuser=0",
        "https://drive.usercontent.google.com/download?id=1Vaqu7-OqkBY-lltCMUVV0q3ddWkZRpAV&export=view&authuser=0",
        "https://drive.usercontent.google.com/download?id=15-J5krzsoteXkQRdEDOKJRkWXDJeH69C&export=view&authuser=0"
    ],
    description: "Habitat et Service vous propose les panneaux Tricapa Cofragem, composés de 3 couches de pin collées transversalement. Ces panneaux, aux bords peints en jaune imperméable et à la surface soigneusement poncée, sont idéaux pour une grande variété d’applications dans vos projets de construction. Ils sont particulièrement adaptés pour les revêtements muraux, les aménagements intérieurs et les structures légères. Le bois Tricapa allie résistance, légèreté et une esthétique naturelle, parfait pour garantir la durabilité et l'élégance de vos réalisations.",
    characteristics: [
      { "name": "Dimensions Standard", "value": "2000 x 500mm / 2500 x 500mm / 1970 x 500mm" },
      { "name": "Espessures", "value": "21mm / 27mm" },
      { "name": "Applications", "value": "Coffrage, Construction civile" }
    ],
    applications: [
      "Revêtements muraux",
      "Aménagements intérieurs",
      "Structures légères"
    ]
  },
  {
    id: "bande-de-chant",
    name: "Bande de Chant",
    category: "AUTRE",
    image: [
      "https://drive.usercontent.google.com/download?id=1VoJEDQ7-2qD6nYsZMJ2kqCgkhg4_i9Gc&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=11u3JKgdN4iD-Udy01epGeg2-A7f7M3Cq&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1oOldnEk_u6KwsAFIeYOjYdMUY1QbPQVb&export=view&authuser=0"
    ],
    description: "Habitat et Service vous présente le panneau latté, un produit de qualité supérieure constitué d'une âme en bois massif complètement collée et recouverte d'une feuille de placage. Idéal pour les travaux de menuiserie, d’agencement et la fabrication de meubles, ce panneau offre des qualités de légèreté et de solidité, ainsi qu’un bel aspect esthétique, très apprécié des ébénistes. Les panneaux latté de Habitat et Service sont reconnus pour leur qualité exceptionnelle, répondant aux plus hautes exigences en matière de bois des lattes et de placage, avec un ponçage et un emballage soignés.",
    characteristics: [
      { "name": "Largeurs (mm)", "value": "22 , 45 mm" },
      { "name": "Épaisseurs (mm)", "value": "0.4 , 0.8 , 1 mm" }
    ],
    applications: [
      "Menuiserie",
      "Agencement",
      "Mobilier"
    ],
    applications: ["Finition de panneaux", "Agencement", "Menuiserie", "Meubles"],
    origins: ["Morocco"]
  },
  {
    id: "portes",
    name: "Portes Dorpan",
    category: "AUTRE",
    image: [
        "https://drive.usercontent.google.com/download?id=1HUuhBz1k2OLoy5_IxbfCcFXbcZe94GEE&export=view&authuser=0",
        "https://drive.usercontent.google.com/download?id=1lBSpIT8iNmo6sBnI_BdTop2bxB74sJfU&export=view&authuser=0",
        "https://drive.usercontent.google.com/download?id=1dmIQy2GDY0rgQd9MTEVzUZVOgHvANXXY&export=view&authuser=0"
    ],
    description: "Habitat et Service vous propose les Portes Dorpan, alliant design moderne et technologie de pointe. Conçues avec des matériaux bruts de haute qualité soigneusement sélectionnés, ces portes révolutionnent les systèmes de portes traditionnels en offrant des solutions décoratives idéales pour les maisons et les bureaux. La marque mondiale 'Dorpan', fabriquée par Kastamonu Entegre, propose des panneaux de porte prêts à l'emploi, robustes, efficaces, et rapides à produire. En plus de leur respect pour l'environnement, les Portes Dorpan se distinguent par une grande variété d'options de conception, de tailles et une facilité d'utilisation incomparable.",
    characteristics: [
        { name: "Marque", value: "Dorpan" },
        { name: "Fabricant", value: "Kastamonu Entegre" },
        { name: "Styles Disponibles", value: "Smirna, Sara, Perge" },
        { name: "Utilisation", value: "Maisons, Bureaux" },
        { name: "Avantages", value: "Respect de l'environnement, robustesse, efficacité, facilité d'application" }
    ],
    applications: [
        "Décoration intérieure",
        "Construction de portes"
    ],
    origins: [
        "Turquie"
    ]
  },
  {
    id: "colle-poudre",
    name: "Colle de Bande de Chant",
    category: "AUTRE",
    image: [
      "https://drive.usercontent.google.com/download?id=1IB3IcaqCIZrOOpH5bfze4y1ENb_mzezQ&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1iW4gOI5zEsLx6O6OxXV6NXLXppMEAAc2&export=view&authuser=0",
      "https://drive.usercontent.google.com/download?id=1ZLJ6Lm8_h2JnpUn3Lw1KGGSmopXm15Es&export=view&authuser=0"
    ],
    description: "Habitat et Service vous propose la Colle Poudre, un produit de haute qualité spécialement conçu pour l'application des bandes de chant. Fournie par Unicol, cette colle en poudre est idéale pour garantir une adhérence optimale et une finition durable. Disponible en sacs de 25 kg, elle est parfaite pour les projets de menuiserie nécessitant une fixation solide et durable des bandes de chant.",
    characteristics: [
      { "name": "Poids", "value": "25 kg" },
      { "name": "Fournisseur", "value": "Unicol" },
      { "name": "Utilisation", "value": "Application des bandes de chant" }
    ],
    applications: [
      "Menuiserie",
      "Agencement",
      "Fixation des bandes de chant"
    ],
  },
  {
    id: "colle-bois",
    name: "Colle Bois",
    category: "AUTRE",
    image: [
        "https://drive.usercontent.google.com/download?id=1aUccGACfU7sJcKRqxTAQ3TXLh4IZU1qk&export=view&authuser=0",
        "https://drive.usercontent.google.com/download?id=1NaltE3KjiX7ZakagPUTHhvYHX8mKvwfn&export=view&authuser=0",
        "https://drive.usercontent.google.com/download?id=1tctGs0Gxb2SxIUjTMbNAWXWN0_mWkwtg&export=view&authuser=0"
    ],
    description: "Habitat et Service vous présente la Colle Bois, une colle liquide de haute qualité spécialement formulée pour l'assemblage du bois. Parfaite pour tous vos projets de menuiserie, cette colle garantit une adhérence exceptionnelle et durable, offrant une solution fiable pour l'assemblage de différentes essences de bois. La Colle Bois est un choix incontournable pour les professionnels recherchant une fixation robuste et une finition impeccable.",
    characteristics: [
        { "name": "Type", "value": "Colle liquide" },
        { "name": "Utilisation", "value": "Assemblage général du bois" }
    ],
    applications: [
      "Menuiserie",
      "Agencement",
      "Fixation du bois"
    ],
    origins: ["Unicol"]
  },
  {
    id: "vernis",
    name: "Vernis",
    category: "AUTRE",
    image: [
        "https://drive.usercontent.google.com/download?id=1ujh35XwG6sh3f2PbI-fmZd0CBMjX10WE&export=view&authuser=0",
        "https://drive.usercontent.google.com/download?id=1_k_5GBE76_Q68hTv6hgpTjntnZD-Hs6J&export=view&authuser=0",
        "https://drive.usercontent.google.com/download?id=1KoaAlZ1oUOXWkKwa-FpyRmaOBlXSLhrd&export=view&authuser=0"
    ],
    description: "Habitat et Service vous propose une large gamme de vernis de haute qualité, adaptée pour la protection et la décoration des bois massifs ou plaqués. Enrichis de résines polyuréthanes ou à base de solvants, nos vernis assurent une excellente résistance à l'abrasion, à l'eau et aux produits chimiques, tout en mettant en valeur l'élégance naturelle du bois. Choisissez parmi les options suivantes selon vos besoins spécifiques :",
    characteristics: [
        { name: "Type", value: "Polyuréthane, Cellulosique, Lasure, Vitrificateur, Saturateur" },
        { name: "Application", value: "Protection et décoration du bois" }
    ],
    applications: [
        "Menuiserie",
        "Parquets",
        "Terrasses",
        "Escaliers",
        "Caillebotis"
    ],
    origins: ["Maroc", "Espagne", "Turquie"]
  }



];

export default products;
