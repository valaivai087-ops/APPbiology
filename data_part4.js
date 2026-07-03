// 細胞生物學雙語教材 — 資料庫 Part 4 (Slides 40-51)

const SLIDES_PART4 = [
  {
    id: 40,
    img: "slide_images/slide-40.jpg",
    chTitle: "微絲（肌動蛋白絲）",
    enTitle: "Microfilaments (Actin Filaments)",
    sentences: [
      {
        en: "Microfilaments are solid rods about 7 nanometers in diameter, built as a twisted double chain of actin subunits.",
        zh: "微絲是直徑約7奈米的實心桿狀結構，由兩條肌動蛋白次單位互相纏繞成的雙鏈構成——跟微管的「空心管」不同，微絲是「實心」的。"
      },
      {
        en: "A network of microfilaments helps support the cell's shape.",
        zh: "微絲交織成的網絡，有助於支撐細胞的形狀。"
      },
      {
        en: "They form a cortex just inside the plasma membrane to help support the cell's shape.",
        zh: "微絲在細胞膜內側形成一層叫做「皮層」（cortex）的結構，幫助支撐細胞的形狀——這層皮層讓細胞表面具有一定的彈性與韌性，就像皮膚下方的結締組織一樣。"
      },
      {
        en: "Bundles of microfilaments make up the core of microvilli in intestinal cells.",
        zh: "成束的微絲構成了腸道細胞微絨毛的核心結構——回想前面提過的「表面積對體積比」：微絨毛靠微絲撐起它的形狀，才能有效增加腸道吸收營養的表面積。"
      }
    ]
  },
  {
    id: 41,
    img: "slide_images/slide-41.jpg",
    chTitle: "微絲與細胞運動",
    enTitle: "Microfilaments and Motility",
    sentences: [
      {
        en: "Microfilaments that function in cellular motility contain the protein myosin in addition to actin.",
        zh: "負責細胞運動功能的微絲，除了肌動蛋白之外，還含有另一種蛋白質叫做「肌凝蛋白」（myosin）——肌動蛋白和肌凝蛋白這對搭檔，正是肌肉收縮最核心的分子機制。"
      },
      {
        en: "Cells crawl along a surface by extending pseudopodia, cellular extensions, and moving toward them.",
        zh: "細胞透過伸出「偽足」（pseudopodia，細胞的延伸突出物）並朝著偽足的方向移動，達成在表面上「爬行」的效果——白血球追蹤並包圍細菌時，就是用這種方式移動。"
      },
      {
        en: "Cytoplasmic streaming in plant cells is a circular flow of cytoplasm within cells, driven by actin-protein interactions.",
        zh: "植物細胞中的「細胞質流動」（cytoplasmic streaming），是細胞質在細胞內部以循環方式流動的現象，由肌動蛋白與相關蛋白的交互作用所驅動——這種流動能幫助營養物質和胞器在細胞內快速分布，因為植物細胞通常比較大，光靠隨機擴散的速度太慢。"
      },
      {
        en: "In muscle cells, myosin motors interact with actin filaments to produce muscle contraction.",
        zh: "在肌肉細胞中，肌凝蛋白馬達會跟肌動蛋白絲交互作用，產生肌肉收縮——這張圖左側展示的就是這個機制：肌凝蛋白頭部像「划船的槳」一樣，沿著肌動蛋白絲一步步拉動，造成肌肉整體縮短。"
      }
    ]
  },
  {
    id: 42,
    img: "slide_images/slide-42.jpg",
    chTitle: "中間絲",
    enTitle: "Intermediate Filaments",
    sentences: [
      {
        en: "Intermediate filaments range in diameter from 8 to 12 nanometers, larger than microfilaments but smaller than microtubules.",
        zh: "中間絲的直徑範圍在8到12奈米之間，比微絲粗，但比微管細——這正好對應它名字中的「中間」（intermediate）。"
      },
      {
        en: "Intermediate filaments are more permanent cytoskeletal fixtures than the other two classes.",
        zh: "比起另外兩種細胞骨架成分（微管、微絲），中間絲是更永久性的固定結構——微管和微絲會持續快速地組裝拆解，而中間絲一旦形成就相對穩定耐久，比較少頻繁變動。"
      },
      {
        en: "They support cell shape and fix organelles in place.",
        zh: "中間絲的功能是支撐細胞形狀，並把胞器固定在適當的位置上——可以把它想成細胞內部比較「長期固定」的結構性纜線，跟微管/微絲這種「短期、靈活、動態變化」的軌道形成互補。"
      }
    ]
  },
  {
    id: 43,
    img: "slide_images/slide-43.jpg",
    chTitle: "概念7.7：細胞外連結結構",
    enTitle: "Concept 7.7: Extracellular Components",
    sentences: [
      {
        en: "Most cells synthesize and secrete materials that are external to the plasma membrane.",
        zh: "大部分細胞都會合成並分泌一些位於細胞膜外側的物質。"
      },
      {
        en: "These extracellular structures are involved in many cellular functions.",
        zh: "這些細胞外的結構，參與了許多細胞功能的運作——細胞並不是只靠自己內部的結構運作，外部環境同樣扮演重要角色。"
      },
      {
        en: "These extracellular structures include cell walls of plants, the extracellular matrix of animal cells, and intercellular junctions.",
        zh: "這些細胞外結構包括：植物的細胞壁、動物細胞的細胞外基質（ECM）、以及細胞間的連結結構（intercellular junctions）——這三項會在接下來的投影片分別展開介紹。"
      }
    ]
  },
  {
    id: 44,
    img: "slide_images/slide-44.jpg",
    chTitle: "植物的細胞壁",
    enTitle: "Cell Walls of Plants",
    sentences: [
      {
        en: "The cell wall protects the plant cell, maintains its shape, and prevents excessive uptake of water.",
        zh: "細胞壁保護植物細胞、維持細胞形狀，並防止細胞吸收過多水分而脹破——這是植物細胞特有的「防爆」機制，動物細胞沒有細胞壁，靠別的方式（滲透調節）來避免脹破。"
      },
      {
        en: "Plant cell walls are made of cellulose fibers embedded in other polysaccharides and protein.",
        zh: "植物細胞壁主要由纖維素纖維構成，這些纖維埋嵌在其他多醣類和蛋白質中——纖維素是地球上含量最豐富的有機聚合物，也是植物細胞壁堅固的關鍵成分。"
      },
      {
        en: "Plant cell walls may have multiple layers: the primary cell wall, the middle lamella, and the secondary cell wall.",
        zh: "植物細胞壁可能有多層結構：初生細胞壁、中膠層、以及次生細胞壁。"
      },
      {
        en: "The primary cell wall is relatively thin and flexible.",
        zh: "初生細胞壁相對較薄、較有彈性——這層壁讓細胞在生長階段還能保持一定的延展性。"
      },
      {
        en: "The middle lamella is a thin layer between the primary walls of adjacent cells.",
        zh: "中膠層是夾在相鄰兩個細胞初生壁之間的薄層——它的功能類似「黏著劑」，把相鄰的植物細胞牢牢黏在一起。"
      },
      {
        en: "The secondary cell wall, found in some cells, is added between the plasma membrane and the primary cell wall.",
        zh: "次生細胞壁存在於某些特化的細胞中，是在細胞膜和初生細胞壁之間額外加上的一層——次生壁通常更厚、更堅硬（例如木質化的細胞），讓細胞在停止生長後獲得額外的結構強度。"
      },
      {
        en: "Plasmodesmata are channels between adjacent plant cells.",
        zh: "胞間連絲是相鄰植物細胞之間的通道——讓細胞壁阻隔不了的物質，仍然能在細胞之間直接傳遞。"
      }
    ]
  },
  {
    id: 45,
    img: "slide_images/slide-45.jpg",
    chTitle: "動物細胞的細胞外基質",
    enTitle: "The Extracellular Matrix (ECM)",
    sentences: [
      {
        en: "Animal cells lack cell walls but are covered by an elaborate extracellular matrix.",
        zh: "動物細胞沒有細胞壁，但表面被覆著一層精密複雜的細胞外基質（ECM）——這是動物細胞跟植物細胞在「外部結構」上的根本差異。"
      },
      {
        en: "The ECM is made up of glycoproteins such as collagen, proteoglycans, and fibronectin.",
        zh: "細胞外基質是由各種糖蛋白組成的，例如膠原蛋白（collagen）、蛋白多醣（proteoglycans）、和纖連蛋白（fibronectin）——膠原蛋白是人體含量最豐富的蛋白質，廣泛存在於皮膚、軟骨、肌腱等組織中。"
      },
      {
        en: "ECM proteins bind to receptor proteins in the plasma membrane called integrins.",
        zh: "細胞外基質的蛋白質會跟細胞膜上一種叫做「整合素」（integrin）的受體蛋白結合——整合素像一座「橋」，一端連著細胞外基質，另一端連著細胞內部的微絲，把細胞外的訊息傳遞進細胞內部。"
      },
      {
        en: "The ECM can regulate a cell's behavior by communicating with the cell through integrins, and can influence the activity of genes in the nucleus.",
        zh: "細胞外基質能透過整合素跟細胞溝通，來調控細胞的行為，甚至能影響細胞核裡基因的活性表現——這代表細胞「外部環境」其實能直接影響「內部基因表現」，這個概念在癌症轉移、組織再生、傷口修復等研究領域都非常關鍵。"
      },
      {
        en: "Mechanical signaling may occur through cytoskeletal changes that trigger chemical signals in the cell.",
        zh: "機械訊號的傳遞，可能是透過細胞骨架的形變，進而觸發細胞內部的化學訊號反應——也就是「物理力量」可以轉換成「化學訊息」，這個概念叫做「機械力傳導」（mechanotransduction）。"
      }
    ]
  },
  {
    id: 46,
    img: "slide_images/slide-46.jpg",
    chTitle: "細胞外基質的功能延伸",
    enTitle: "The ECM and Its Influence on Cells",
    sentences: [
      {
        en: "The ECM has an influential role in the lives of cells.",
        zh: "細胞外基質在細胞的「生命歷程」中扮演著重要的影響角色——它不只是被動的支撐結構，而是主動參與細胞行為的調控。"
      },
      {
        en: "The ECM around a cell can influence the activity of genes in the nucleus.",
        zh: "圍繞在細胞周圍的細胞外基質，能夠影響細胞核內基因的活性——這呼應了前一張投影片的重點：外部環境訊號，能一路傳遞到最核心的基因表現層次。"
      },
      {
        en: "This bidirectional communication between the ECM and the cell's interior demonstrates that cells are not isolated units but are constantly responding to their physical surroundings.",
        zh: "細胞外基質和細胞內部之間這種雙向溝通，說明了細胞並不是孤立運作的單位，而是持續對周圍的物理環境做出反應——這跟「系統思維」中的「環境塑造行為」概念高度呼應：一個人/細胞的表現，不只取決於內在條件，也深受外部環境與連結關係的影響。"
      }
    ]
  },
  {
    id: 47,
    img: "slide_images/slide-47.jpg",
    chTitle: "細胞連結",
    enTitle: "Cell Junctions",
    sentences: [
      {
        en: "Neighboring cells in tissues, organs, or organ systems often communicate through direct physical contact.",
        zh: "在組織、器官或器官系統中，相鄰的細胞常常透過直接的物理接觸來互相溝通——這是比「分泌訊號分子、隔空喊話」更直接、更即時的溝通方式。"
      },
      {
        en: "Intercellular junctions facilitate this contact.",
        zh: "細胞間連結結構，正是促成這種直接接觸的機制。"
      },
      {
        en: "There are several types of intercellular junctions: plasmodesmata in plant cells, tight junctions, desmosomes, and gap junctions.",
        zh: "細胞間連結有幾種類型：植物細胞的胞間連絲、緊密連接（tight junctions）、橋粒（desmosomes，固定連接）、以及間隙連接（gap junctions，溝通連接）——接下來會逐一說明每一種連結的特殊功能。"
      }
    ]
  },
  {
    id: 48,
    img: "slide_images/slide-48.jpg",
    chTitle: "植物細胞的胞間連絲",
    enTitle: "Plasmodesmata in Plant Cells",
    sentences: [
      {
        en: "Plasmodesmata are channels that perforate plant cell walls.",
        zh: "胞間連絲是貫穿植物細胞壁的通道——它讓原本被細胞壁阻隔的鄰近細胞，仍然保有「直接相通」的路徑。"
      },
      {
        en: "Through plasmodesmata, water and small solutes, and sometimes proteins and RNA, can pass from cell to cell.",
        zh: "透過胞間連絲，水分和小分子溶質，有時甚至蛋白質和RNA，都能從一個細胞傳遞到另一個細胞——這代表植物細胞之間，其實存在著比動物細胞更直接的「細胞質連通」，某種程度上整株植物的細胞質可以被看作是一個相連的整體網絡。"
      }
    ]
  },
  {
    id: 49,
    img: "slide_images/slide-49.jpg",
    chTitle: "緊密連接、橋粒與間隙連接",
    enTitle: "Tight Junctions, Desmosomes, and Gap Junctions",
    sentences: [
      {
        en: "Three types of cell junctions are common in epithelial tissues.",
        zh: "三種細胞連結方式，在上皮組織（epithelial tissues，例如皮膚表層、腸道內壁）中很常見。"
      },
      {
        en: "At tight junctions, membranes of neighboring cells are pressed together, preventing leakage of extracellular fluid.",
        zh: "在緊密連接處，相鄰細胞的細胞膜緊緊壓合在一起，防止細胞外液體滲漏——這就像把磁磚之間的縫隙完全封死，不讓液體從縫隙中漏出去。腸道內壁細胞如果緊密連接受損，腸道屏障功能就會失效，這跟「腸漏症」這類議題密切相關。"
      },
      {
        en: "Desmosomes, also called anchoring junctions, fasten cells together into strong sheets.",
        zh: "橋粒，又稱為「固定連接」，能把細胞牢牢釦在一起，形成強韌的細胞層——可以想像成「鈕扣式的固定釦」，讓組織（例如皮膚）能承受拉伸、摩擦等機械壓力而不會輕易裂開。"
      },
      {
        en: "Gap junctions, also called communicating junctions, provide cytoplasmic channels between adjacent cells.",
        zh: "間隙連接，又稱為「溝通連接」，提供了相鄰細胞之間細胞質直接相通的通道——讓離子和小分子能在細胞之間快速傳遞，這在心肌細胞中特別重要：心臟跳動時的電訊號，就是靠間隙連接快速傳遞，讓所有心肌細胞能同步收縮。"
      }
    ]
  },
  {
    id: 50,
    img: "slide_images/slide-50.jpg",
    chTitle: "概念7.8：細胞大於部分總和",
    enTitle: "Concept 7.8: A Cell Is Greater Than the Sum of Its Parts",
    sentences: [
      {
        en: "Cells rely on the integration of structures and organelles in order to function.",
        zh: "細胞要正常運作，必須依賴各種結構與胞器的整合協作——這就是這一整章最重要的總結觀念：單獨看每一個胞器都很有趣，但細胞真正的「智慧」，是來自於這些胞器如何互相配合、整合運作。"
      },
      {
        en: "For example, a macrophage's ability to destroy bacteria involves the whole cell, coordinating components such as the cytoskeleton, lysosomes, and the plasma membrane.",
        zh: "舉例來說，巨噬細胞消滅細菌的能力，需要整個細胞一起協調運作，包括細胞骨架（伸出偽足、移動）、溶酶體（消化分解）、以及細胞膜（包裹吞噬）——這個例子完美示範了前面講的所有結構，是怎麼「組隊合作」完成一個任務的：細胞骨架負責伸出絲足狀延伸物（filopodium）去接觸並包圍細菌，細胞膜把細菌包進來形成食物液胞，溶酶體再跟食物液胞融合，把細菌消化分解掉。"
      },
      {
        en: "This illustrates the principle of emergence: the whole system exhibits capabilities that no single component possesses on its own.",
        zh: "這正展示了「湧現」（emergence）的原理：整個系統展現出的能力，是任何單一零件單獨存在時都不具備的——這跟人生操作系統的核心邏輯完全相通：單一的能力或習慣，效果有限；但當多項能力、多套系統整合運作起來，會湧現出超越單項加總的整體效益。細胞如此，人也是如此。"
      }
    ]
  },
  {
    id: 51,
    img: "slide_images/slide-51.jpg",
    chTitle: "結語",
    enTitle: "Thanks for Your Attention",
    sentences: [
      {
        en: "Thanks for your attention.",
        zh: "感謝您的關注與聆聽。"
      },
      {
        en: "We have now completed a full tour of the eukaryotic cell, from its outer membrane to its innermost nucleus, and from individual organelles to the integrated whole.",
        zh: "我們已經完整走過了真核細胞的全貌——從最外層的細胞膜到最核心的細胞核，從各個獨立的胞器到整合運作的整體。如果要用一句話總結這一整章：細胞是一個高度分工、卻又緊密協作的微型社會，每一個胞器都有自己的崗位，但真正讓生命運作起來的，是它們之間的連結與配合。"
      }
    ]
  }
];
