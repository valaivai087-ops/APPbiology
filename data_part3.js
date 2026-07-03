// 細胞生物學雙語教材 — 資料庫 Part 3 (Slides 27-39)

const SLIDES_PART3 = [
  {
    id: 27,
    img: "slide_images/slide-27.jpg",
    chTitle: "影片：內質網到高基氏體的運輸",
    enTitle: "ER to Golgi Traffic, Secretion from the Golgi",
    sentences: [
      {
        en: "These two video stills show ER to Golgi traffic on the left, and secretion from the Golgi on the right.",
        zh: "這兩張影片截圖，左邊展示內質網到高基氏體的運輸過程，右邊展示從高基氏體分泌出去的過程。"
      },
      {
        en: "These fluorescent images visualize the dynamic movement of vesicles in real time within a living cell.",
        zh: "這些螢光顯微影像，能即時呈現活細胞內囊泡動態移動的過程——亮點代表被螢光標記的蛋白質或囊泡，可以追蹤它們的移動路徑，證實前面講的物流路線確實是「動態進行中」的真實生理過程，不只是教科書上的靜態示意圖。"
      }
    ]
  },
  {
    id: 28,
    img: "slide_images/slide-28.jpg",
    chTitle: "概念7.5：粒線體與葉綠體的能量轉換",
    enTitle: "Concept 7.5: Energy Conversion Organelles",
    sentences: [
      {
        en: "Mitochondria are the sites of cellular respiration, a metabolic process that uses oxygen to generate ATP.",
        zh: "粒線體是細胞呼吸作用發生的場所，這是一種利用氧氣來產生ATP的代謝過程——ATP是細胞的「能量貨幣」，幾乎所有細胞活動都需要消耗ATP來驅動。"
      },
      {
        en: "Chloroplasts, found in plants and algae, are the sites of photosynthesis.",
        zh: "葉綠體存在於植物和藻類中，是光合作用發生的場所——光合作用把光能轉換成化學能，儲存在葡萄糖等有機分子中。"
      },
      {
        en: "Peroxisomes are oxidative organelles.",
        zh: "過氧化體是一種進行氧化反應的胞器（後面會詳細介紹）。"
      },
      {
        en: "Mitochondria and chloroplasts have similarities with bacteria: they are enveloped by a double membrane, contain free ribosomes and circular DNA molecules, and grow and reproduce somewhat independently within cells.",
        zh: "粒線體和葉綠體跟細菌有許多相似之處：都被雙層膜包覆、都含有自己的游離核糖體和環狀DNA分子、而且能在細胞內某種程度上獨立生長與繁殖——這些線索非常關鍵，正是接下來「內共生理論」的核心證據。"
      },
      {
        en: "Based on these similarities, the endosymbiont theory has been proposed.",
        zh: "根據這些相似之處，科學家提出了「內共生理論」（endosymbiont theory）——這個理論認為，粒線體和葉綠體的祖先，原本是獨立生存的原核生物，後來被早期的真核細胞祖先「吞」進去，從此在細胞內部互利共生、永久定居下來。"
      }
    ]
  },
  {
    id: 29,
    img: "slide_images/slide-29.jpg",
    chTitle: "內共生理論圖解",
    enTitle: "The Endosymbiont Theory",
    sentences: [
      {
        en: "The endosymbiont theory proposes that mitochondria and chloroplasts originated from free-living prokaryotes engulfed by an early ancestor of eukaryotic cells.",
        zh: "內共生理論主張：粒線體和葉綠體最初是自由生活的原核生物，被早期真核細胞的祖先（host cell，宿主細胞）吞噬進去之後，逐漸演化成現在的胞器。"
      },
      {
        en: "First, the ancestor of eukaryotic cells engulfed an oxygen-using, nonphotosynthetic prokaryote, which became a mitochondrion.",
        zh: "第一步：真核細胞的祖先吞噬了一個利用氧氣、但不會進行光合作用的原核生物，這個原核生物後來演化成了粒線體——這形成了「非光合作用真核生物」（Nonphotosynthetic eukaryote）。"
      },
      {
        en: "Later, at least one of these cells engulfed a photosynthetic prokaryote, which became a chloroplast.",
        zh: "後來，至少有一個這樣的細胞，又吞噬了一個會進行光合作用的原核生物，這個原核生物後來演化成了葉綠體——這形成了「光合作用真核生物」（Photosynthetic eukaryote），也就是植物與藻類細胞的祖先。"
      },
      {
        en: "This explains why mitochondria are found in nearly all eukaryotic cells, while chloroplasts are found only in plants and algae.",
        zh: "這也解釋了為什麼幾乎所有真核細胞都有粒線體，但只有植物和藻類才有葉綠體——因為「吞噬粒線體祖先」這個事件發生得更早、更普遍，而「吞噬葉綠體祖先」則是後來才在某一支系發生的特化事件。這個理論也呼應了系統思維中的「共生互利」概念：原本互相獨立、甚至是競爭關係的個體，透過深度整合合作，反而創造出更強大的新系統（真核細胞）。"
      }
    ]
  },
  {
    id: 30,
    img: "slide_images/slide-30.jpg",
    chTitle: "粒線體：化學能量轉換站",
    enTitle: "Mitochondria: Chemical Energy Conversion",
    sentences: [
      {
        en: "Mitochondria have a smooth outer membrane and an inner membrane folded into cristae.",
        zh: "粒線體有一層平滑的外膜，和一層向內摺疊形成「皺褶」（cristae，稱為「皺脊」）的內膜。"
      },
      {
        en: "The inner membrane creates two compartments: the intermembrane space and the mitochondrial matrix.",
        zh: "內膜把粒線體內部分隔成兩個區域：膜間隙（intermembrane space）和粒線體基質（matrix）——這個內部空間的分隔，跟粒線體產生ATP的機制密切相關（質子梯度的建立）。"
      },
      {
        en: "Some metabolic steps of cellular respiration are catalyzed in the mitochondrial matrix.",
        zh: "細胞呼吸作用中的一些代謝步驟（例如克氏循環）是在粒線體基質中進行催化反應的。"
      },
      {
        en: "Cristae present a large surface area for enzymes that synthesize ATP.",
        zh: "皺脊提供了很大的表面積，讓負責合成ATP的酶能附著工作——這跟前面講的「表面積對體積比」概念一脈相承：細胞用摺疊的方式，在有限空間裡創造更多可用的工作表面。"
      },
      {
        en: "Mitochondria are dynamic structures that can separate and fuse, forming networks within the cell.",
        zh: "粒線體是動態的結構，會不斷分裂與融合，在細胞內形成網絡狀分布——粒線體不是靜止不動的「豆子」，而是會持續變形、移動、互相連結的活躍系統，這個動態性跟細胞的能量需求與健康狀態息息相關。"
      }
    ]
  },
  {
    id: 31,
    img: "slide_images/slide-31.jpg",
    chTitle: "葉綠體：捕捉光能",
    enTitle: "Chloroplasts: Capture of Light Energy",
    sentences: [
      {
        en: "Chloroplasts contain the green pigment chlorophyll, as well as enzymes and other molecules that function in photosynthesis.",
        zh: "葉綠體含有綠色色素「葉綠素」（chlorophyll），以及進行光合作用所需的各種酶和分子——葉綠素正是植物呈現綠色的原因，因為它會吸收紅光與藍光，反射綠光。"
      },
      {
        en: "Chloroplasts are found in leaves and other green organs of plants, and in algae.",
        zh: "葉綠體存在於植物的葉子和其他綠色器官中，以及藻類中。"
      },
      {
        en: "Chloroplast structure includes thylakoids, membranous sacs stacked to form a granum, and the stroma, the internal fluid.",
        zh: "葉綠體的結構包括：類囊體（thylakoid，膜狀的扁囊，疊起來形成一個「葉綠餅」granum），以及基質（stroma，內部的液態環境）——光合作用的「光反應」發生在類囊體膜上，「碳反應」（卡爾文循環）則發生在基質中。"
      },
      {
        en: "The chloroplast is a specialized member of a family of closely related plant organelles called plastids, including chloroplast, amyloplast, and chromoplast.",
        zh: "葉綠體是「質粒體」（plastid）這個家族中的一個特化成員，這個家族還包括澄粉體（amyloplast，儲存澄粉）、有色體（chromoplast，含其他色素，例如讓紅蘿蔔呈現橘色）等等——換句話說，葉綠體只是質粒體家族中「專門負責光合作用」的那一個成員。"
      }
    ]
  },
  {
    id: 32,
    img: "slide_images/slide-32.jpg",
    chTitle: "過氧化體：氧化作用",
    enTitle: "Peroxisomes: Oxidation",
    sentences: [
      {
        en: "Peroxisomes are specialized metabolic compartments bounded by a single membrane.",
        zh: "過氧化體是被單層膜包覆的特化代謝區室——注意它只有「一層」膜，這跟粒線體、葉綠體的雙層膜結構不同。"
      },
      {
        en: "Peroxisomes produce hydrogen peroxide and convert it to water.",
        zh: "過氧化體會產生過氧化氫（H2O2），然後再把它轉換成水（H2O）——過氧化氫本身對細胞有毒性（這也是「過氧化氫消毒傷口」的原理），過氧化體裡的酶（過氧化氫酶）負責把這個有害的中間產物快速解毒。"
      },
      {
        en: "Specialized peroxisomes called glyoxysomes contain enzymes that initiate the conversion of fatty acids to sugar, which the emerging seedling uses as a source of energy and carbon.",
        zh: "一種特化的過氧化體叫做「乙醛酸循環體」（glyoxysome），含有能把脂肪酸轉換成糖類的酶，這些糖類會被剛發芽的幼苗用作能量與碳源——這解釋了種子發芽初期，還沒長出葉子進行光合作用之前，是如何利用種子裡儲存的油脂來提供生長所需的能量。"
      }
    ]
  },
  {
    id: 33,
    img: "slide_images/slide-33.jpg",
    chTitle: "概念7.6：細胞骨架",
    enTitle: "Concept 7.6: The Cytoskeleton",
    sentences: [
      {
        en: "The cytoskeleton is a network of fibers extending throughout the cytoplasm.",
        zh: "細胞骨架是一個延伸貫穿整個細胞質的纖維網絡——雖然名字裡有「骨架」，但它其實比骨頭更動態，能不斷組裝、拆解、重組。"
      },
      {
        en: "It organizes the cell's structures and activities, anchoring many organelles.",
        zh: "細胞骨架負責組織細胞的結構與各種活動，並把許多胞器固定在適當的位置——如果沒有細胞骨架，胞器會在細胞質中漫無目的漂浮，整個細胞的運作會失去秩序。"
      },
      {
        en: "Three main types of fibers make up the cytoskeleton: microtubules, microfilaments, and intermediate filaments.",
        zh: "細胞骨架由三種主要的纖維組成：微管（microtubules）、微絲（microfilaments）、和中間絲（intermediate filaments）。"
      },
      {
        en: "Microtubules are the thickest of the three components.",
        zh: "微管是三者中最粗的——直徑大約25奈米。"
      },
      {
        en: "Microfilaments, also called actin filaments, are the thinnest components.",
        zh: "微絲（又叫肌動蛋白絲，actin filaments）是三者中最細的——直徑大約7奈米。"
      },
      {
        en: "Intermediate filaments are fibers with diameters in a middle range.",
        zh: "中間絲的直徑介於兩者之間——大約8到12奈米。記憶口訣：微管最粗（像水管）、微絲最細（像絲線）、中間絲剛好夾在中間，符合它的名字。"
      }
    ]
  },
  {
    id: 34,
    img: "slide_images/slide-34.jpg",
    chTitle: "細胞骨架的角色：支撐與運動",
    enTitle: "Roles of the Cytoskeleton: Support and Motility",
    sentences: [
      {
        en: "The cytoskeleton helps to support the cell and maintain its shape.",
        zh: "細胞骨架幫助支撐細胞、維持細胞的形狀——這是它最基本的功能之一，類似建築物的鋼骨結構。"
      },
      {
        en: "It interacts with motor proteins to produce cell motility.",
        zh: "細胞骨架會跟「馬達蛋白」（motor proteins）互相作用，產生細胞的運動能力——馬達蛋白是真正消耗ATP、產生動力的「引擎」，而細胞骨架則提供它們行走的「軌道」。"
      },
      {
        en: "Inside the cell, vesicles can travel along tracks provided by the cytoskeleton.",
        zh: "在細胞內部，囊泡可以沿著細胞骨架提供的軌道移動——這張圖展示的就是馬達蛋白「拖著」囊泡，一步一步沿著微管行走的過程，很像捷運列車沿著軌道前進，消耗ATP作為動力來源。"
      }
    ]
  },
  {
    id: 35,
    img: "slide_images/slide-35.jpg",
    chTitle: "細胞骨架三大成分比較表",
    enTitle: "The Structure and Function of the Cytoskeleton",
    sentences: [
      {
        en: "Microtubules are hollow tubes about 25 nanometers in diameter, made of tubulin protein subunits, and they help maintain cell shape, enable cell motility, and move chromosomes during cell division.",
        zh: "微管是直徑約25奈米的空心管狀結構，由微管蛋白（tubulin）次單位組成，功能包括：維持細胞形狀（像抗壓的「支柱」）、幫助細胞運動（例如鞭毛和纖毛的擺動）、以及在細胞分裂時移動染色體。"
      },
      {
        en: "Microfilaments are two intertwined strands of actin, about 7 nanometers in diameter, involved in maintaining cell shape, changes in cell shape, muscle contraction, cytoplasmic streaming in plant cells, cell motility, and division of animal cells.",
        zh: "微絲是由兩條肌動蛋白絲互相纏繞而成，直徑約7奈米，功能涵蓋：維持細胞形狀（負責承受張力）、改變細胞形狀、肌肉收縮、植物細胞的細胞質流動、細胞運動（像變形蟲移動）、以及動物細胞分裂時的收縮。"
      },
      {
        en: "Intermediate filaments are fibrous proteins coiled into cables, with diameters of 8 to 12 nanometers, and they maintain cell shape, anchor the nucleus and other organelles, and form the nuclear lamina.",
        zh: "中間絲是由纖維狀蛋白質（例如keratin角蛋白）盤繞成纜線狀，直徑8到12奈米，功能是：維持細胞形狀（承受張力）、固定細胞核與其他胞器的位置、並組成核纖層——中間絲是三者中最「穩定耐久」的，不像微管和微絲那樣經常組裝拆解，比較像是長期固定的纜線。"
      }
    ]
  },
  {
    id: 36,
    img: "slide_images/slide-36.jpg",
    chTitle: "微管的功能",
    enTitle: "Microtubules",
    sentences: [
      {
        en: "Microtubules are hollow rods about 25 nanometers in diameter and about 200 nanometers to 25 microns long.",
        zh: "微管是直徑大約25奈米、長度從200奈米到25微米的空心桿狀結構——長度範圍非常大，可以視細胞需求變化。"
      },
      {
        en: "Functions of microtubules include shaping the cell, guiding the movement of organelles, and separating chromosomes during cell division.",
        zh: "微管的功能：塑造細胞形狀、引導胞器的移動方向、以及在細胞分裂時把染色體分開——這最後一項功能在生物醫學上特別重要：許多化療藥物（例如紫杉醇）就是透過干擾微管的組裝/拆解，來阻止癌細胞分裂繁殖。"
      },
      {
        en: "Microtubules are dynamic structures that constantly assemble and disassemble.",
        zh: "微管是動態的結構，會不斷地組裝與拆解——這張圖中的「Microtubule Dynamics」動畫，展示的就是微管這種持續變化、像「呼吸」一樣的特性，這跟它在細胞分裂、細胞運動中靈活調整形狀的能力直接相關。"
      }
    ]
  },
  {
    id: 37,
    img: "slide_images/slide-37.jpg",
    chTitle: "中心體與中心粒",
    enTitle: "Centrosomes and Centrioles",
    sentences: [
      {
        en: "In many cells, microtubules grow out from a centrosome near the nucleus.",
        zh: "在許多細胞中，微管是從靠近細胞核的中心體（centrosome）長出來的——中心體扮演微管生長的「起點」角色。"
      },
      {
        en: "The centrosome is a microtubule-organizing center.",
        zh: "中心體是一個「微管組織中心」——所有由它延伸出去的微管，都是從這裡開始向外輻射生長的。"
      },
      {
        en: "In animal cells, the centrosome has a pair of centrioles, each with nine triplets of microtubules arranged in a ring.",
        zh: "在動物細胞中，中心體含有一對中心粒，每個中心粒都由九組三聯體微管排列成環狀——這個「9個三聯體環狀排列」的結構，在細胞分裂時會幫助形成紡錘體，把染色體準確地分配到兩個子細胞中。"
      }
    ]
  },
  {
    id: 38,
    img: "slide_images/slide-38.jpg",
    chTitle: "纖毛與鞭毛",
    enTitle: "Cilia and Flagella",
    sentences: [
      {
        en: "Microtubules control the beating of cilia and flagella, locomotor appendages of some cells.",
        zh: "微管控制著纖毛和鞭毛的擺動，這是某些細胞的「移動用附肢」——人類的精細胞就靠鞭毛游動，呼吸道內壁的細胞則靠纖毛擺動來清除黏液與異物。"
      },
      {
        en: "Cilia and flagella differ in their beating patterns.",
        zh: "纖毛和鞭毛的擺動方式不同——鞭毛通常是像波浪一樣的蛇形擺動，推動細胞朝一個方向前進；纖毛則是「動力划水＋回復」的兩段式擺動，比較像划船的動作。"
      },
      {
        en: "Cilia and flagella share a common structure: a core of microtubules sheathed by the plasma membrane, a basal body that anchors the structure, and the motor protein dynein, which drives the bending movements.",
        zh: "纖毛和鞭毛擁有共同的基本結構：核心是被細胞膜包覆的微管束、有一個「基體」（basal body）負責固定錨定整個結構、還有一種叫做「dynein」（動力蛋白）的馬達蛋白，負責驅動彎曲擺動的動作——這正是另一個馬達蛋白搭配細胞骨架軌道、產生實際運動的例子。"
      }
    ]
  },
  {
    id: 39,
    img: "slide_images/slide-39.jpg",
    chTitle: "纖毛/鞭毛的精細結構",
    enTitle: "Structure of a Flagellum or Motile Cilium",
    sentences: [
      {
        en: "The outer microtubule doublets are held together with the two central microtubules by flexible cross-linking protein, in a 9+2 arrangement.",
        zh: "外側的微管雙聯體，透過柔韌的交聯蛋白跟中央的兩條微管連接在一起，形成所謂的「9加2排列」——也就是外圈9組微管雙聯體環繞著中央2條微管，這個結構幾乎是所有能動的纖毛與鞭毛的標準配置。"
      },
      {
        en: "Motor proteins called dyneins drive the sliding movement that bends the cilium or flagellum.",
        zh: "稱為dynein的馬達蛋白驅動著微管之間的滑動，造成纖毛或鞭毛的彎曲——dynein附著在一組微管上，往另一組微管的方向「爬行」，這種滑動如果被限制在局部，就會轉化成整體的彎曲波動。"
      },
      {
        en: "The basal body shows a ring of nine triplets, each connected to the next by nontubulin proteins, in a 9+0 arrangement.",
        zh: "基體（basal body）顯示出環狀排列的九組三聯體，每一組都靠非微管蛋白互相連接，形成「9加0排列」——注意基體沒有中央那兩條微管，所以是「9+0」而不是「9+2」。基體其實跟中心粒的結構是一樣的，它是纖毛/鞭毛生長的根基。"
      }
    ]
  }
];
