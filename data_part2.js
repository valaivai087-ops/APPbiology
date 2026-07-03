// 細胞生物學雙語教材 — 資料庫 Part 2 (Slides 14-26)

const SLIDES_PART2 = [
  {
    id: 14,
    img: "slide_images/slide-14.jpg",
    chTitle: "影片：植物細胞之旅",
    enTitle: "BioFlix: Tour of a Plant Cell",
    sentences: [
      {
        en: "This is a BioFlix animation titled Tour of a Plant Cell.",
        zh: "這是一段名為「植物細胞之旅」的動畫。"
      },
      {
        en: "This animation visually walks through the internal structures of a plant cell, which we will compare with the animal cell.",
        zh: "這段動畫會帶你走一遍植物細胞內部的結構，下一張投影片就可以拿來跟動物細胞做比較。"
      }
    ]
  },
  {
    id: 15,
    img: "slide_images/slide-15.jpg",
    chTitle: "植物細胞整體結構圖",
    enTitle: "Plant Cell (Cutaway View)",
    sentences: [
      {
        en: "This is a cutaway view of a generalized plant cell.",
        zh: "這是植物細胞的剖面整體結構圖。"
      },
      {
        en: "Like the animal cell, the plant cell has a nucleus, rough and smooth endoplasmic reticulum, ribosomes, a Golgi apparatus, mitochondria, peroxisomes, and a plasma membrane.",
        zh: "跟動物細胞一樣，植物細胞也有細胞核、粗糙與平滑內質網、核糖體、高基氏體、粒線體、過氧化體、細胞膜——這些是兩種細胞「共同擁有」的配備。"
      },
      {
        en: "Unique to the plant cell, shown in red, are the chloroplast, the central vacuole, the cell wall, and plasmodesmata.",
        zh: "圖中紅色標示的，是植物細胞獨有的結構：葉綠體（chloroplast）、中央液胞（central vacuole）、細胞壁（cell wall）、和胞間連絲（plasmodesmata）——這四項是植物細胞特有，動物細胞沒有的。"
      },
      {
        en: "The chloroplast performs photosynthesis, converting light energy into chemical energy.",
        zh: "葉綠體負責進行光合作用，把光能轉換成化學能——這是植物能「自己生產食物」的關鍵裝置，動物沒有這個能力，必須靠進食獲取能量。"
      },
      {
        en: "The cell wall, located outside the plasma membrane, provides rigid structural support.",
        zh: "細胞壁位於細胞膜外側，提供堅硬的結構支撐——這就是為什麼植物能直立生長、不需要骨骼，而動物細胞沒有細胞壁，必須靠別的方式（例如骨骼系統）來支撐身體。"
      }
    ]
  },
  {
    id: 16,
    img: "slide_images/slide-16.jpg",
    chTitle: "真核細胞全景：動物 vs. 植物的差異",
    enTitle: "A Panoramic View of the Eukaryotic Cell",
    sentences: [
      {
        en: "A eukaryotic cell has internal membranes that partition the cell into organelles.",
        zh: "真核細胞內部有膜把細胞分隔成不同的胞器——這正是真核細胞的核心特徵：用膜把空間切割成「房間」，讓不同的化學反應可以在各自獨立的環境中進行，互不干擾。"
      },
      {
        en: "Plant and animal cells have most of the same organelles.",
        zh: "植物細胞和動物細胞擁有大部分相同的胞器——這代表兩者的「基本配備」其實非常相似，差異只在於少數幾項特化結構。"
      },
      {
        en: "Found in animal cells but not plant cells: lysosomes, centrosomes with centrioles, and flagella, though flagella are present in some plant sperm.",
        zh: "動物細胞有、但植物細胞沒有的結構：溶酶體、含有中心粒的中心體、以及鞭毛（不過某些植物的精細胞也會有鞭毛，這是例外）。"
      },
      {
        en: "Found in plant cells but not animal cells: chloroplasts, a central vacuole, a cell wall, and plasmodesmata.",
        zh: "植物細胞有、但動物細胞沒有的結構：葉綠體、中央液胞、細胞壁、胞間連絲。——記憶口訣可以這樣記：植物多了「葉、央、壁、絲」（葉綠體、中央液胞、細胞壁、胞間連絲），動物多了「溶、中、鞭」（溶酶體、中心體、鞭毛）。"
      }
    ]
  },
  {
    id: 17,
    img: "slide_images/slide-17.jpg",
    chTitle: "細胞核與核膜",
    enTitle: "Concept 7.3: The Nucleus and Its Envelope",
    sentences: [
      {
        en: "The nucleus, an information center, contains most of the DNA in a eukaryotic cell.",
        zh: "細胞核是「資訊中心」，存放著真核細胞絕大部分的DNA。"
      },
      {
        en: "Ribosomes use the information from the DNA to make proteins.",
        zh: "核糖體利用從DNA得來的資訊來製造蛋白質——這裡帶出一個重要的資訊流動順序：DNA → RNA → 蛋白質，這就是分子生物學的「中心法則」。"
      },
      {
        en: "The nucleus contains most of the DNA and is usually the most conspicuous organelle in a eukaryotic cell.",
        zh: "細胞核裡裝著大部分的DNA，通常也是真核細胞中最顯眼、最容易被看到的胞器——在顯微鏡下，細胞核往往是最先被注意到的結構。"
      },
      {
        en: "The nuclear envelope encloses the nucleus, separating it from the cytoplasm.",
        zh: "核膜把細胞核包覆起來，將它跟外面的細胞質隔開——這個隔離很重要：DNA的複製、轉錄等精密過程，需要一個受到保護、不受細胞質干擾的獨立空間。"
      },
      {
        en: "The nuclear pores regulate the entry and exit of molecules from the nucleus.",
        zh: "核孔負責調控分子進出細胞核——核孔不是隨便開放的洞，而是有篩選機制的「海關閘口」，控制哪些分子可以進出。"
      },
      {
        en: "The shape of the nucleus is maintained by the nuclear lamina, which is composed of protein.",
        zh: "細胞核的形狀是靠核纖層（nuclear lamina）來維持的，這是由蛋白質組成的支撐網架——可以把它想成細胞核內側的「鋼筋結構」。"
      }
    ]
  },
  {
    id: 18,
    img: "slide_images/slide-18.jpg",
    chTitle: "細胞核：資訊中心的細節",
    enTitle: "The Nucleus: Information Central",
    sentences: [
      {
        en: "In the nucleus, DNA is organized into discrete units called chromosomes.",
        zh: "在細胞核裡，DNA被組織成一個個獨立的單位，叫做染色體。"
      },
      {
        en: "Each chromosome is composed of a single DNA molecule associated with proteins called histones.",
        zh: "每一條染色體都是由一條DNA分子，搭配一種叫做「組蛋白」（histone）的蛋白質組合而成——DNA會像線一樣纏繞在組蛋白上，這樣才能把長達數公尺的DNA分子，緊密收納進只有幾微米大的細胞核裡。"
      },
      {
        en: "The DNA and proteins of chromosomes together are called chromatin.",
        zh: "染色體中的DNA和蛋白質合稱為「染色質」（chromatin）——染色質是平常（細胞不分裂時）DNA存在的疏鬆狀態。"
      },
      {
        en: "Chromatin condenses to form discrete chromosomes as a cell prepares to divide.",
        zh: "當細胞準備分裂時，染色質會濃縮、緊密捲曲，形成一條條清晰可辨的染色體——這就是為什麼在顯微鏡下，只有在細胞分裂期才能清楚看到一條條的染色體，平時染色質是散開、不容易分辨個別形狀的。"
      },
      {
        en: "The nucleolus is located within the nucleus and is the site of ribosomal RNA synthesis.",
        zh: "核仁（nucleolus）位於細胞核之中，是合成核糖體RNA（rRNA）的地方——核仁就像核糖體的「組裝工廠」，先在這裡製造rRNA，再跟蛋白質組合成核糖體次單位，送出細胞核後才完成最終組裝。"
      }
    ]
  },
  {
    id: 19,
    img: "slide_images/slide-19.jpg",
    chTitle: "核糖體：蛋白質工廠",
    enTitle: "Ribosomes: Protein Factories",
    sentences: [
      {
        en: "Ribosomes, which are complexes made of ribosomal RNA and proteins, are the cellular components that carry out protein synthesis.",
        zh: "核糖體是由核糖體RNA和蛋白質共同組成的複合結構，是負責執行蛋白質合成的細胞元件——核糖體本身不是被膜包住的胞器，而是一個分子機器。"
      },
      {
        en: "Ribosomes carry out protein synthesis in two locations: in the cytosol as free ribosomes, or on the outside of the endoplasmic reticulum or nuclear envelope as bound ribosomes.",
        zh: "核糖體在兩個地方執行蛋白質合成：在細胞質溶液中自由漂浮（叫做「游離核糖體」），或附著在內質網或核膜外側（叫做「附著核糖體」）。——這兩種核糖體結構完全相同，差異只在於它們所在的位置，而位置會決定它們製造出來的蛋白質要送到哪裡：游離核糖體通常製造留在細胞質內使用的蛋白質，附著核糖體則通常製造要分泌到細胞外或送進內膜系統的蛋白質。"
      },
      {
        en: "A ribosome consists of a large subunit and a small subunit.",
        zh: "一個核糖體由一個大次單位和一個小次單位組成——這兩個次單位平時是分開的，只有在要進行蛋白質合成時才會結合在一起，工作完成後又會再次分開。"
      }
    ]
  },
  {
    id: 20,
    img: "slide_images/slide-20.jpg",
    chTitle: "概念7.4：內膜系統",
    enTitle: "Concept 7.4: The Endomembrane System",
    sentences: [
      {
        en: "The endomembrane system includes the nuclear envelope, endoplasmic reticulum, Golgi apparatus, lysosomes, vacuoles, and the plasma membrane.",
        zh: "內膜系統包含：核膜、內質網、高基氏體、溶酶體、液胞、以及細胞膜——這些結構雖然外觀和功能各不相同，但它們都屬於一個互相連通的「物流網絡」。"
      },
      {
        en: "These components are either continuous or connected via transfer by vesicles.",
        zh: "這些結構之間，有些是直接相連、形成連續的膜（像核膜跟內質網），有些則是靠「囊泡」（vesicle，小型的膜包裹的運輸袋）來互相傳遞物質。"
      },
      {
        en: "The smooth ER lacks ribosomes, while the rough ER is studded with ribosomes on its surface.",
        zh: "平滑內質網表面沒有核糖體；粗糙內質網表面則布滿了核糖體（看起來「粗糙」的原因就是核糖體的顆粒）。"
      },
      {
        en: "Transport vesicles bud off from the transitional ER and carry materials to the Golgi apparatus.",
        zh: "運輸囊泡會從內質網的過渡區域（transitional ER）芽生出來，把材料運送到高基氏體——這就是物流系統的第一段運輸路線。"
      }
    ]
  },
  {
    id: 21,
    img: "slide_images/slide-21.jpg",
    chTitle: "內質網：生物合成工廠",
    enTitle: "The Endoplasmic Reticulum",
    sentences: [
      {
        en: "The endoplasmic reticulum accounts for more than half of the total membrane in many eukaryotic cells.",
        zh: "內質網（ER）佔了許多真核細胞總膜面積的一半以上——這代表內質網的表面積非常龐大，是細胞裡最主要的膜系統。"
      },
      {
        en: "The ER membrane is continuous with the nuclear envelope.",
        zh: "內質網的膜跟核膜是連續相通的——這意味著內質網其實可以說是核膜「延伸出去」的結構。"
      },
      {
        en: "There are two distinct regions of ER: smooth ER, which lacks ribosomes, and rough ER, whose surface is studded with ribosomes.",
        zh: "內質網分成兩個不同的區域：平滑內質網（沒有核糖體）和粗糙內質網（表面附著核糖體）。"
      },
      {
        en: "The smooth ER synthesizes lipids, detoxifies drugs and poisons, and stores calcium ions.",
        zh: "平滑內質網的功能：合成脂質、解毒藥物與毒物、儲存鈣離子——肝細胞的平滑內質網特別發達，因為肝臟是身體主要的解毒器官；肌肉細胞的平滑內質網（特化稱為肌漿網）則特別擅長儲存鈣離子，這跟肌肉收縮機制有關。"
      },
      {
        en: "The rough ER has bound ribosomes that secrete glycoproteins, which are proteins covalently bonded to carbohydrates.",
        zh: "粗糙內質網上的附著核糖體會分泌「糖蛋白」——糖蛋白是蛋白質與碳水化合物以共價鍵連結而成的分子，常見於細胞膜表面的辨識分子。"
      },
      {
        en: "The rough ER distributes transport vesicles, which are secretory proteins surrounded by membranes, and serves as a membrane factory for the cell.",
        zh: "粗糙內質網會分派運輸囊泡（也就是被膜包裹起來的分泌蛋白），同時它也是細胞的「膜製造工廠」——意思是說，連細胞膜本身的材料，很多也是從粗糙內質網這裡生產出來的。"
      }
    ]
  },
  {
    id: 22,
    img: "slide_images/slide-22.jpg",
    chTitle: "高基氏體：收發中心",
    enTitle: "The Golgi Apparatus",
    sentences: [
      {
        en: "The Golgi apparatus consists of flattened membranous sacs called cisternae.",
        zh: "高基氏體是由一層一層扁平的膜囊（叫做cisternae，囊池）疊起來構成的——外觀像一疊鬆餅。"
      },
      {
        en: "The Golgi apparatus modifies products of the ER, manufactures certain macromolecules, and sorts and packages materials into transport vesicles.",
        zh: "高基氏體的三大功能：修飾來自內質網的產物、自行製造某些大分子、以及把材料分類包裝進運輸囊泡——可以把高基氏體想成快遞公司的「分裝中心」：貨品進來後先做最後加工（貼標籤、修飾），然後分類打包，準備送到正確的目的地。"
      },
      {
        en: "The cis face is the receiving side of the Golgi apparatus, while the trans face is the shipping side.",
        zh: "高基氏體有「cis面」（接收端，朝向內質網）和「trans面」（送出端，朝向細胞膜）——物質從cis面進入，經過層層加工修飾，最後從trans面以囊泡的形式送出去。"
      }
    ]
  },
  {
    id: 23,
    img: "slide_images/slide-23.jpg",
    chTitle: "溶酶體：消化倉庫",
    enTitle: "Lysosomes: Digestive Compartments",
    sentences: [
      {
        en: "A lysosome is a membranous sac of hydrolytic enzymes that can digest macromolecules.",
        zh: "溶酶體是一個裝滿水解酶的膜囊，能夠消化分解大分子物質——可以想像成細胞內部的「垂直整合回收站」。"
      },
      {
        en: "Lysosomal enzymes work best in the acidic environment inside the lysosome.",
        zh: "溶酶體內部的酸性環境，是這些水解酶發揮最佳效果的條件——如果這些酶不小心漏到細胞質中（細胞質是中性pH），活性會大幅降低，這其實是一種安全機制，避免溶酶體酶誤傷到細胞自身的正常結構。"
      },
      {
        en: "Hydrolytic enzymes and lysosomal membranes are made by rough ER and then transferred to the Golgi apparatus for further processing.",
        zh: "水解酶和溶酶體的膜，最初都是由粗糙內質網製造，再送到高基氏體做進一步加工處理——這也呼應了前面講的：內質網、高基氏體、溶酶體其實是一條連續的生產線。"
      },
      {
        en: "Some lysosomes probably arise by budding from the trans face of the Golgi apparatus.",
        zh: "有些溶酶體可能是從高基氏體的trans面（送出端）芽生出來的。"
      },
      {
        en: "Some types of cells can engulf another cell by phagocytosis, forming a food vacuole.",
        zh: "某些類型的細胞能透過「吞噬作用」（phagocytosis）把另一個細胞吞進來，形成一個食物液胞——這是免疫細胞（像巨噬細胞）對抗病原體的重要機制之一。"
      },
      {
        en: "A lysosome fuses with the food vacuole and digests the contents.",
        zh: "溶酶體會跟食物液胞融合，把裡面的內容物消化分解掉——這是「消滅入侵者」的最後一步。"
      },
      {
        en: "Lysosomes also use enzymes to recycle the cell's own organelles and macromolecules, a process called autophagy.",
        zh: "溶酶體還會用酶來回收降解細胞自己老舊、損壞的胞器與大分子，這個過程叫做「自噬作用」（autophagy）——自噬是近年生物醫學非常熱門的研究主題，跟細胞老化、神經退化疾病、癌症等都有密切關係。可以把它理解成細胞內部的「品質管理與資源回收系統」。"
      }
    ]
  },
  {
    id: 24,
    img: "slide_images/slide-24.jpg",
    chTitle: "吞噬作用與自噬作用",
    enTitle: "Phagocytosis and Autophagy",
    sentences: [
      {
        en: "In phagocytosis, the lysosome fuses with the food vacuole and digests the molecules inside.",
        zh: "在吞噬作用中，溶酶體會跟食物液胞融合，把裡面的分子消化分解——這個過程從圖中左上方可以看到完整流程：細胞膜先把外來物（例如細菌）包進來形成食物液胞，再跟溶酶體融合，最後完成消化。"
      },
      {
        en: "In autophagy, lysosomes recycle the cell's own organelles and macromolecules.",
        zh: "在自噬作用中，溶酶體會回收降解細胞自身的胞器和大分子——圖中右下方展示了損壞的粒線體和過氧化體碎片，是如何被包裹成囊泡，再被溶酶體消化分解，回收再利用。"
      },
      {
        en: "The right side of the figure shows an electron micrograph of a vesicle containing two damaged organelles, a mitochondrion fragment and a peroxisome fragment.",
        zh: "圖右上方的電子顯微鏡照片，顯示一個囊泡裡包著兩個受損的胞器碎片：粒線體碎片和過氧化體碎片——這正是自噬作用「正在進行中」的真實畫面，證明細胞會主動清除自己內部老舊損壞的零件，而不是放著不管。"
      }
    ]
  },
  {
    id: 25,
    img: "slide_images/slide-25.jpg",
    chTitle: "液胞：多功能維護倉庫",
    enTitle: "Vacuoles: Diverse Maintenance Compartments",
    sentences: [
      {
        en: "A plant cell or fungal cell may have one or several vacuoles, derived from the endoplasmic reticulum and Golgi apparatus.",
        zh: "植物細胞或真菌細胞可能擁有一個或多個液胞，這些液胞是由內質網和高基氏體衍生而來的。"
      },
      {
        en: "There are three types of vacuoles: food vacuoles, contractile vacuoles, and central vacuoles.",
        zh: "液胞有三種類型：食物液胞、伸縮泡（收縮泡）、以及中央液胞。"
      },
      {
        en: "Food vacuoles are formed by phagocytosis.",
        zh: "食物液胞是透過吞噬作用形成的——這跟前面講的吞噬機制是同一回事。"
      },
      {
        en: "Contractile vacuoles, found in many freshwater protists, pump excess water out of cells.",
        zh: "伸縮泡常見於許多淡水原生生物，功能是把細胞裡多餘的水分泵出去——因為淡水環境的滲透壓會讓水不斷滲入細胞，如果沒有伸縮泡幫忙排水，細胞會因為吸水過多而脹破。"
      },
      {
        en: "Central vacuoles, found in many mature plant cells, hold organic compounds and water.",
        zh: "中央液胞常見於許多成熟的植物細胞中，用來儲存有機化合物和水分——中央液胞通常佔據植物細胞絕大部分的體積，幫助維持細胞的水分壓力（膨壓），這也是植物莖葉能挺立、不軟垂的重要原因。"
      }
    ]
  },
  {
    id: 26,
    img: "slide_images/slide-26.jpg",
    chTitle: "內膜系統總複習",
    enTitle: "The Endomembrane System: A Review",
    sentences: [
      {
        en: "The nuclear envelope is connected to the rough ER, which is also continuous with the smooth ER.",
        zh: "核膜跟粗糙內質網相連，粗糙內質網又跟平滑內質網是連續相通的——這條路線把整個內膜系統的起點串起來。"
      },
      {
        en: "Membranes and proteins produced by the ER flow in the form of transport vesicles to the Golgi.",
        zh: "由內質網製造出來的膜和蛋白質，會以運輸囊泡的形式，流向高基氏體——這是物流路線的第二段。"
      },
      {
        en: "The Golgi pinches off transport vesicles and other vesicles that give rise to lysosomes, other types of specialized vesicles, and vacuoles.",
        zh: "高基氏體會夾斷形成運輸囊泡，以及其他種類的特化囊泡，最終分化出溶酶體、各種特殊囊泡、以及液胞——這是物流路線的分流站。"
      },
      {
        en: "A lysosome is available for fusion with another vesicle for digestion.",
        zh: "溶酶體準備好跟其他囊泡融合，進行消化作用。"
      },
      {
        en: "A transport vesicle carries proteins to the plasma membrane for secretion.",
        zh: "運輸囊泡把蛋白質運送到細胞膜，準備分泌到細胞外——這是物流路線的終點之一。"
      },
      {
        en: "The plasma membrane expands by fusion of vesicles, and proteins are secreted from the cell.",
        zh: "細胞膜會透過囊泡融合而擴張，蛋白質就這樣被分泌到細胞外——整套流程串起來看：核膜→粗糙內質網→平滑內質網→運輸囊泡→高基氏體→（分流：溶酶體 / 液胞 / 分泌囊泡）→細胞膜→分泌到細胞外。這就是完整的「細胞物流地圖」。"
      }
    ]
  }
];
