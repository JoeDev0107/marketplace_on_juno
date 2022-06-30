export interface SocialLinks {
  discord: string;
  website: string;
  twitter: string;
}

export enum StatisticKeys {
  "total" = "total",
  "itemsOnSale" = "itemsOnSale",
  "hopeFloorPrice" = "hopeFloorPrice",
  "hopeVolume" = "hopeVolume",
  "junoFloorPrice" = "junoFloorPrice",
  "junoVolume" = "junoVolume",
}

export type StatisticOption = { [key in StatisticKeys]?: boolean };

export interface MarketplaceBasicInfo {
  imageUrl: string;
  backgroundUrl: string;
  logoUrl?: string;
  title: string;
  creator: string;
  collectionId: string;
  description: string;
  nftContract: string;
  mintContract: string;
  marketplaceContract: string[];
  socialLinks: SocialLinks;
  statisticOption?: StatisticOption; // invisible status for statistic items. if true, invisible
  customTokenId?: string; // if this value exists token_id will be replaced. e.g. Hoper.1916 -> MintPass I.1916 when this value is "MintPass I"
  metaDataUrl?: string;
  isLaunched: boolean;
}
export interface MarketplaceMintInfo {
  totalNfts: number;
  royalties: string;
  price: string;
  mintImage: string;
  mintDate?: string;
  mintUrl?: string;
}

export interface MarketplaceInfo extends MarketplaceBasicInfo {
  mintInfo?: MarketplaceMintInfo;
}

const Collections: MarketplaceInfo[] = [
  {
    title: "Hope Galaxy NFT - Collection 1",
    customTokenId: "HopeGalaxyI",
    creator: "Hope Galaxy NFT",
    imageUrl: "/backgrounds/HopeGalaxy.png",
    backgroundUrl: "/marketplace-backgrounds/hopeBackground.png",
    collectionId: "hopegalaxy1",
    metaDataUrl:
      "https://hopegalaxy.mypinata.cloud/ipfs/QmRnRFS19fbs8Bo9VxSKxR3DAJfBqmYNiXPapQKhDTDku6/_metadata.json",
    nftContract:
      "juno1lqtavuw24dnnu56w79k7mefn8fhuz2w247dks2fes6hwd4rhpu2sumhhap",
    mintContract: "",
    marketplaceContract: [
      "juno1y0phl9303vjfdlsgnqpyl2vxwt3h2gxekn276ls36qvrwd9faxjqvezgmh",
      "juno1m9rrvcdjatkvvdmly6pxq3yvxkp8ufaf23qkqvjcgzjgaxsef3ns6xe994",
    ],
    socialLinks: {
      discord: "https://discord.gg/BfKPacc5jF",
      website: "https://hopegalaxy.io",
      twitter: "https://twitter.com/HopeGalaxyNFT",
    },
    statisticOption: {
      total: true,
    },
    description:
      "HOPE GALAXY NFT holders will be able to access the HopeGalaxy dapp which will enable them to stake their NFT and receive monthly passive income generated by NFT trades which are paid out once a month.",
    isLaunched: true,
  },
  {
    title: "Hope Galaxy Mint Pass 1",
    customTokenId: "MintPassI",
    creator: "Hope Galaxy NFT",
    imageUrl: "/backgrounds/Collection.png",
    backgroundUrl: "/marketplace-backgrounds/background.png",
    collectionId: "mintpass1",
    nftContract:
      "juno1ccl3kw74hl3ez4ljhx0qzwe7hl8egqcsc2mcjkgga3af86jjek0q9645r8",
    mintContract: "",
    marketplaceContract: [
      "juno1adn5atr89yp8pmurtem882u3rwk0ug7p7d3pwp7g83glqyhfua8sq56z80",
    ],
    socialLinks: {
      discord: "https://discord.gg/BfKPacc5jF",
      website: "https://hopegalaxy.io",
      twitter: "https://twitter.com/HopeGalaxyNFT",
    },
    statisticOption: {
      total: true,
    },
    description:
      "This mint pass is the ticket for the minting of the Hope Galaxy NFT collection once it is launched",
    isLaunched: true,
  },
  {
    title: "Hope Galaxy Mint Pass 2",
    customTokenId: "MintPassII",
    creator: "Hope Galaxy NFT",
    imageUrl: "/backgrounds/MintPass2.png",
    backgroundUrl: "/marketplace-backgrounds/MintPass2.png",
    logoUrl: "/logos/mintPass2.png",
    collectionId: "mintpass2",
    nftContract:
      "juno1x5kqvep2fq5sgvwwjn9uctzn0ts8vxnrtalxjucs5juu07hxxsvqgseuhr",
    mintContract: "",
    marketplaceContract: [
      "juno14jvup0unhnn9377t49vqducyvrv0ader2ekc9z4teq6wepyt9mls3lw0wq",
    ],
    socialLinks: {
      discord: "https://discord.gg/BfKPacc5jF",
      website: "https://hopegalaxy.io",
      twitter: "https://twitter.com/HopeGalaxyNFT",
    },
    statisticOption: {
      total: true,
    },
    description:
      "This is mint pass is the ticket for the minting of the Hope Galaxy NFT collection once it is launched",
    isLaunched: true,
  },
  {
    title: "Juno Punks NFT",
    creator: "Juno Punks",
    imageUrl: "/backgrounds/juno_punks.png",
    backgroundUrl: "/marketplace-backgrounds/JunoPunks.png",
    logoUrl: "/logos/JunoPunks.gif",
    collectionId: "junopunks",
    metaDataUrl:
      "https://hopegalaxy.mypinata.cloud/ipfs/QmTxetzZAqvhFrVVf1wQBx8hFrE8AnN85G5WvB489d81wV/_metadata.json",
    nftContract:
      "juno1e229el8t4lu4rx7xeekc77zspxa2gz732ld0e6a5q0sr0l3gm78stuvc5g",
    mintContract:
      "juno10rjm83ng8v667hn3cpn7ga46u50qqnuyh9j2h9tm6famwj96scmszqgt24",
    marketplaceContract: [
      "juno1smf3u3qd4dc20cgsu7hsh95awxea0usw0q0jj2f3vmrykpk3ua4qn738hz",
    ],
    socialLinks: {
      discord: "https://discord.gg/BfKPacc5jF",
      website: "https://hopers.io/",
      twitter: "https://twitter.com/JunoPunksNFT",
    },
    description:
      "Unique collectible PFP characters exclusively for the $JUNO community living on the #Cosmos | Free mint!",
    mintInfo: {
      totalNfts: 500,
      royalties: "7% + 3%",
      price: "FREE MINT • Max 1 x wallet",
      mintImage: "/mint-images/JunoPunks.gif",
    },
    isLaunched: true,
  },
  {
    title: "Neta NOTs",
    creator: "NOTs",
    imageUrl: "/backgrounds/neta_nots.png",
    backgroundUrl: "/marketplace-backgrounds/nots.png",
    logoUrl: "/logos/nots.jpg",
    collectionId: "netanots",
    metaDataUrl:
      "https://hopegalaxy.mypinata.cloud/ipfs/QmZMiSthAoW2qikg5LNz2TeWbf79Coyd1RtMbSGLSMEyhD",
    nftContract:
      "juno1pu5k9965hcxx670gzxmlxqsy90pvfd8muef3lttux95gal5vsecqlf9x7h",
    mintContract: "",
    marketplaceContract: [""],
    socialLinks: {
      discord: "https://t.co/6sfjxZD6U6",
      website: "https://t.co/eohk7QllPb",
      twitter: "https://twitter.com/NotsNfts",
    },
    description: "NetaNOTs are Space Warriors in the NOTs Universe",
    mintInfo: {
      totalNfts: 200,
      royalties: "5% + 3%",
      price: "4 JUNO",
      mintImage: "/mint-images/NetaNOTs.png",
      mintDate: "2022-06-28",
    },
    isLaunched: true,
  },
  {
    title: "Sunnyside Nightlife",
    creator: "Sunnyside Reapers",
    imageUrl: "/backgrounds/Sunnyside.png",
    backgroundUrl: "/marketplace-backgrounds/Sunnyside.png",
    logoUrl: "/logos/SunnysideNightlife.gif",
    collectionId: "sunnyside",
    nftContract:
      "juno199k5526srh0l845tt5dsyk8up22q729hc8n6w9njnqvyfwp7sjrskvvm3e",
    mintContract:
      "juno1ynhl64ejsgc83v74tmsqrxzt398f4jhew9kw9pawmv5cqr5sd6ssy5qluw",
    marketplaceContract: [
      "juno1kzakykpp7n852mfgcl4sl5ey5hy4uk207gadwppx0yatq274lntqmtvlmj",
    ],
    socialLinks: {
      discord: "https://discord.gg/GFYrJEsYpm",
      website: "https://ssr.rip/",
      twitter: "https://twitter.com/SunnysideReaper",
    },
    mintInfo: {
      totalNfts: 66,
      royalties: "6% +3%",
      price: "4.2 JUNO",
      mintImage: "/mint-images/SunnysideNightlife.gif",
      mintDate: "",
    },
    description: "Part of the Sunnyside Reaper NFT Collection.",
    isLaunched: true,
  },
  {
    title: "Juno Farming",
    customTokenId: "JunoFarming",
    creator: "Juno Farming",
    imageUrl: "/backgrounds/juno_farming.png",
    backgroundUrl: "/marketplace-backgrounds/JunoFarming.png",
    logoUrl: "/logos/JunoFarming.png",
    collectionId: "junofarming",
    metaDataUrl:
      "https://hopegalaxy.mypinata.cloud/ipfs/QmW9347NYmMus1GWyw8jCRYmfw8nzV4ntPJ5WShkRvhyao/_metadata.json",
    nftContract:
      "juno1smtyfg7036ds982x94l543gwj7f0fky73hjtvxdpf83m0t0f86sstr3pal",
    mintContract:
      "juno1724gaheqp34h25ul8n7vl7rur8krdd02hyn5p4hlt065x7yuuwnsxjqqe5",
    marketplaceContract: [
      "juno17vess7spu37zqc86flweg5jkpwmvcc6g5ltkytst5tzlrrxr3j0qccalzx",
    ],
    socialLinks: {
      discord: "https://discord.gg/BfKPacc5jF",
      website: "https://hopers.io/",
      twitter: "https://twitter.com/JunoFarming",
    },
    description:
      "JUNO Farming is the first NFT collection on JUNO that rewards its stakers with 50% from the value of all the transaction done within its ecosystem including the MINT and trades",
    mintInfo: {
      totalNfts: 2500,
      royalties: "50% + 3%",
      price: "8 JUNO",
      mintImage: "/mint-images/JunoFarming.png",
      mintDate: "2022-06-20",
      mintUrl: "https://junofarming.web.app",
    },
    isLaunched: true,
  },
];

export const getCollectionById = (id: string): MarketplaceInfo => {
  return Collections.filter(
    (collection: MarketplaceInfo) => collection.collectionId === id
  )[0];
};

export const MarketplaceContracts: string[] = [
  "juno1r0panlafacxwvuffvvf6lpkc4wx7kcupuuvq6ve9jd7hlheklpgsdumamt",
];

export const MintContracts: string[] = [
  "juno1c9dr05cryh2fn5hwr4aa9rhzfy5vxdmq3uc3xfrku9e5cs8sqcrq5r5g6d",
];

export default Collections;

// !Sample Object
// {
//   title: "",
//   creator: "",
//   imageUrl: "",
//   backgroundUrl: "",
//   collectionId: "",
//   nftContract: "",
//   marketplaceContract: [""],
//   socialLinks: {
//     discord: "",
//     website: "",
//     twitter: "",
//   },
//   mintInfo: {
//     totalNfts: 1950,
//     royalties: "",
//     price: "",
//     mintImage: "",
//     mintDate: "",
//   },
//   description: "",
// },
