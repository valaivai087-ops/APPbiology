// 細胞生物學雙語教材 — 資料庫 Part 1 (Slides 1-13)
// 每個 slide 物件包含：img（投影片圖片）、title（中文標題）、sentences（英文句子陣列，每句含中文白話講解）

const SLIDES_PART1 = [
  {
    id: 1,
    img: "slide_images/slide-01.jpg",
    chTitle: "課程介紹",
    enTitle: "General Biology",
    sentences: [
      {
        en: "General Biology.",
        zh: "這份教材的主題是「普通生物學」。"
      },
      {
        en: "This chapter is taught by Che-Chang Chang, Ph.D., from the Ph.D Program for Translational Medicine at Taipei Medical University.",
        zh: "本章由臺北醫學大學轉譯醫學博士學位學程的張哲彰博士授課。轉譯醫學的意思是把基礎生物學的發現（例如細胞如何運作），轉化成真正能用在臨床診斷與治療上的知識——這也是為什麼「搞懂細胞」是所有醫學知識的地基。"
      }
    ]
  },
  {
    id: 2,
    img: "slide_images/slide-02.jpg",
    chTitle: "第七章：細胞的結構與功能",
    enTitle: "Chapter 7: Cell Structure and Function",
    sentences: [
      {
        en: "Chapter 7. Cell Structure and Function.",
        zh: "第七章，主題是「細胞的結構與功能」。"
      },
      {
        en: "This material is from Biology: A Global Approach, Twelfth Edition, by Campbell, Urry, Cain, Wasserman, Minorsky, and Orr.",
        zh: "這份投影片內容取自 Campbell 生物學課本（全球版第12版）——這是全世界醫學院、生命科學系最常用的生物學教科書之一，內容嚴謹且持續更新，所以可以放心把它當作基礎知識的標準答案。"
      },
      {
        en: "Why is this chapter foundational?",
        zh: "補充重點：細胞是所有生命的最小功能單位。不管是學醣解、學免疫學、學癌症機轉，最終都會回到「細胞裡面發生了什麼事」。所以這一章其實是整個生物醫學知識樹的「根」。"
      }
    ]
  },
  {
    id: 3,
    img: "slide_images/slide-03.jpg",
    chTitle: "本章大綱（八個重點概念）",
    enTitle: "Overview",
    sentences: [
      {
        en: "Overview.",
        zh: "本章共有八個重點概念（Concept 7.1 到 7.8），先看一次全貌，之後每一個概念會逐一展開講解。"
      },
      {
        en: "Concept 7.1: Biologists use microscopes and the tools of biochemistry to study cells.",
        zh: "概念 7.1：生物學家用顯微鏡和生物化學工具來研究細胞。——細胞太小，肉眼看不到，所以人類發明了各種「放大鏡」與「拆解術」來偷看細胞內部。"
      },
      {
        en: "Concept 7.2: Eukaryotic cells have internal membranes that compartmentalize their functions.",
        zh: "概念 7.2：真核細胞內部有膜把空間分隔開來，各自負責不同功能。——可以想像成一間公司有不同的辦公室（部門），各司其職，互不干擾，但又能互相合作。"
      },
      {
        en: "Concept 7.3: The eukaryotic cell's genetic instructions are housed in the nucleus and carried out by the ribosomes.",
        zh: "概念 7.3：遺傳指令收藏在細胞核裡，而執行指令、製造蛋白質的工作則交給核糖體。——細胞核像「總部圖書館」，核糖體像「印刷工廠」。"
      },
      {
        en: "Concept 7.4: The endomembrane system regulates protein traffic and performs metabolic functions in the cell.",
        zh: "概念 7.4：內膜系統負責調度蛋白質的「物流運輸」，同時也執行代謝功能。——這是細胞裡的物流中心與快遞系統。"
      },
      {
        en: "Concept 7.5: Mitochondria and chloroplasts change energy from one form to another.",
        zh: "概念 7.5：線粒體（粒線體）和葉綠體負責能量轉換。——粒線體是細胞的發電廠，葉綠體是植物細胞的太陽能板。"
      },
      {
        en: "Concept 7.6: The cytoskeleton is a network of fibers that organizes structures and activities in the cell.",
        zh: "概念 7.6：細胞骨架是一套纖維網絡，負責組織細胞內部的結構與各種活動。——細胞骨架就像建築物的鋼筋骨架，同時也是內部的「捷運軌道」。"
      },
      {
        en: "Concept 7.7: Extracellular components and connections coordinate cellular activities.",
        zh: "概念 7.7：細胞外的成分與細胞間的連結，幫助協調各個細胞的活動。——細胞不是孤島，它們需要互相溝通、互相固定位置。"
      },
      {
        en: "Concept 7.8: A cell is greater than the sum of its parts.",
        zh: "概念 7.8：細胞的整體表現，大於各個零件加起來的總和。——這是「系統思維」的核心：零件單獨拆開都很簡單，但組合起來、互相協作之後，會出現「整體大於部分加總」的湧現現象（emergence）。這個概念跟人生操作系統其實是相通的——單一能力不夠，整合運作才是關鍵。"
      }
    ]
  },
  {
    id: 4,
    img: "slide_images/slide-04.jpg",
    chTitle: "概念7.1：用顯微鏡與生化工具研究細胞",
    enTitle: "Concept 7.1: Tools to Study Cells",
    sentences: [
      {
        en: "Cells are usually too small to be seen by the naked eye.",
        zh: "細胞通常太小，肉眼看不到。——大部分人類細胞直徑只有 10 到 20 微米（1 微米 = 千分之一毫米），比一根頭髮的截面還小很多。"
      },
      {
        en: "Scientists use microscopes to visualize them.",
        zh: "科學家用顯微鏡把細胞「放大」到看得見的尺度。"
      },
      {
        en: "The first microscope was developed in the Netherlands.",
        zh: "第一台光學顯微鏡是在荷蘭發明的。（補充：原投影片上寫的年份「1950年」有誤，歷史上光學顯微鏡的發明可追溯到16至17世紀，荷蘭的詹森父子與雷文霍克都是早期關鍵人物，這裡特別提出來糾正，避免誤記年代。）"
      },
      {
        en: "There are three important parameters of microscopy: magnification, resolution, and contrast.",
        zh: "顯微鏡有三個重要的衡量指標：放大率、解析度、對比度。"
      },
      {
        en: "Magnification is the ratio of an object's image size to its real size.",
        zh: "「放大率」是指影像大小跟實際物體大小的比例——例如放大100倍，就是把原本看不見的東西，變成你眼睛看得到的100倍大。"
      },
      {
        en: "Resolution is the measure of the clarity of the image, or the minimum distance at which two points can still be distinguished as separate.",
        zh: "「解析度」是影像清晰程度的指標，也就是兩個點之間最小可以被分辨開來的距離。簡單說：放大率決定「東西變多大」，解析度決定「東西夠不夠清楚、能不能分辨細節」。把模糊的東西放大100倍，還是模糊。"
      },
      {
        en: "Contrast refers to the visible differences in brightness between different parts of the sample.",
        zh: "「對比度」是樣本中不同部位之間明暗的差異程度——對比度太低，即使放大也很難看出結構（就像在霧裡看東西，輪廓糊成一片）。"
      }
    ]
  },
  {
    id: 5,
    img: "slide_images/slide-05.jpg",
    chTitle: "顯微鏡技術探索",
    enTitle: "Exploring Microscopy",
    sentences: [
      {
        en: "This figure compares the size scale of biological structures, from the unaided eye down to atoms, alongside different microscopy techniques.",
        zh: "這張圖把生物結構的尺寸大小（從肉眼可見一路縮小到原子等級），跟不同的顯微鏡技術對應在一起。"
      },
      {
        en: "Light microscopy can resolve structures from about 100 micrometers down to about 200 nanometers, covering most cells, nuclei, and bacteria.",
        zh: "光學顯微鏡（Light microscopy）能看清楚大約100微米到200奈米之間的結構，剛好涵蓋大部分的細胞、細胞核和細菌。"
      },
      {
        en: "Electron microscopy can resolve much smaller structures, down to viruses, ribosomes, proteins, and even small molecules.",
        zh: "電子顯微鏡（Electron microscopy）解析度更高，可以看到更小的結構，像病毒、核糖體、蛋白質，甚至小分子。"
      },
      {
        en: "Brightfield, fluorescence, confocal, and phase-contrast are different types of light microscopy, while SEM and TEM are types of electron microscopy.",
        zh: "明視野（Brightfield）、螢光（Fluorescence）、共軛焦（Confocal）、相位差（Phase-contrast）都是光學顯微鏡的不同類型；而SEM（掃描式電子顯微鏡）和TEM（穿透式電子顯微鏡）則屬於電子顯微鏡。SEM適合看表面立體形狀（像圖中纖毛的3D外觀），TEM適合看內部切片的細微結構。"
      }
    ]
  },
  {
    id: 6,
    img: "slide_images/slide-06.jpg",
    chTitle: "細胞分餾技術",
    enTitle: "Cell Fractionation",
    sentences: [
      {
        en: "Cell fractionation takes cells apart and separates the major organelles from one another.",
        zh: "細胞分餾技術會把細胞拆開，把裡面主要的胞器一一分離出來。"
      },
      {
        en: "Centrifuges fractionate cells into their component parts.",
        zh: "離心機是用來把細胞分離成各個組成部分的工具——細胞先被均質化（打碎成一團糊狀），再放入離心機，利用不同胞器的重量、密度差異，用不同轉速分層沉澱出來。"
      },
      {
        en: "Cell fractionation enables scientists to determine the functions of organelles.",
        zh: "細胞分餾讓科學家能夠確定各個胞器的功能——你把胞器分離出來之後，可以單獨測試它，例如：「這一層沉澱物加進去之後，細胞還能不能呼吸產生能量？」就能反推出這一層是粒線體。"
      },
      {
        en: "Biochemistry and cytology help correlate cell function with structure.",
        zh: "生物化學（研究分子層面的反應）與細胞學（研究結構與形態）兩個學科互相配合，才能把「這個結構長什麼樣子」和「這個結構做什麼功能」連結起來。——這正是科學研究的核心邏輯：結構決定功能，功能驗證結構。"
      },
      {
        en: "The process uses differential centrifugation, with increasing speed (1,000g, 20,000g, 80,000g, 150,000g) and time to separate nuclei, mitochondria, microsomes, and ribosomes step by step.",
        zh: "整個流程使用「差速離心法」，依序用越來越快的轉速（1,000g、20,000g、80,000g、150,000g）和越來越長的時間，把細胞核、粒線體、微粒體、核糖體一層一層分離出來。轉速越快，能讓越輕、越小的胞器沉澱下來——這跟篩米篩沙的道理很像，先篩出大顆粒，再篩出小顆粒。"
      }
    ]
  },
  {
    id: 7,
    img: "slide_images/slide-07.jpg",
    chTitle: "概念7.2：真核細胞的內膜分隔",
    enTitle: "Concept 7.2: Compartmentalization",
    sentences: [
      {
        en: "Cells are the basic structural and functional unit of every organism.",
        zh: "細胞是每一個生物體最基本的結構與功能單位——不管是一隻大象還是一株小草，組成它們的最小「活的單位」都是細胞。"
      },
      {
        en: "There are two types of cells: prokaryotic and eukaryotic.",
        zh: "細胞分為兩大類：原核細胞和真核細胞。"
      },
      {
        en: "Prokaryotic cells include Bacteria and Archaea.",
        zh: "原核細胞包括細菌（Bacteria）和古菌（Archaea）。"
      },
      {
        en: "Eukaryotic cells include protists, fungi, animals, and plants.",
        zh: "真核細胞包括原生生物、真菌、動物和植物——也就是除了細菌與古菌之外，幾乎所有你看得到的生命形式（包括人類自己）都是由真核細胞組成的。"
      },
      {
        en: "Eukaryotic cells are generally much larger than prokaryotic cells.",
        zh: "真核細胞通常比原核細胞大很多——原核細胞大約1-10微米，真核細胞則可以到10-100微米，差距可以到10倍以上。"
      }
    ]
  },
  {
    id: 8,
    img: "slide_images/slide-08.jpg",
    chTitle: "原核細胞 vs. 真核細胞比較",
    enTitle: "Comparing Prokaryotic and Eukaryotic Cells",
    sentences: [
      {
        en: "Basic features of all cells include a plasma membrane, a semifluid substance called cytosol, chromosomes that carry genes, and ribosomes that make proteins.",
        zh: "所有細胞共同擁有的基本配備：細胞膜（包住整個細胞）、細胞質溶液（cytosol，半流體的內容物）、染色體（攜帶基因）、核糖體（製造蛋白質）。這四項是「細胞的標準配備」，不管原核還是真核都有。"
      },
      {
        en: "Prokaryotic cells are characterized by having no nucleus, with DNA in an unbound region called the nucleoid.",
        zh: "原核細胞的特徵是：沒有細胞核，DNA鬆散地待在一個叫做「類核區」（nucleoid）的區域——注意，類核區不是被膜包起來的，它只是DNA聚集的一個區域而已。"
      },
      {
        en: "Prokaryotic cells have no membrane-bound organelles, with cytoplasm bound only by the plasma membrane.",
        zh: "原核細胞沒有「被膜包住的胞器」，整個細胞質只靠最外層的細胞膜包覆。——這就是為什麼原核細胞結構比較簡單，沒有像真核細胞那樣的「房間隔間」。"
      },
      {
        en: "Eukaryotic cells are characterized by having DNA in a nucleus bounded by a membranous nuclear envelope.",
        zh: "真核細胞的特徵是：DNA被收在一個由膜包覆的細胞核裡——這個包膜叫做「核膜」（nuclear envelope）。"
      },
      {
        en: "Eukaryotic cells have membrane-bound organelles, with cytoplasm located in the region between the plasma membrane and the nucleus.",
        zh: "真核細胞有很多「被膜包住的胞器」（像粒線體、葉綠體、內質網等），而細胞質則是指細胞膜和細胞核之間的所有空間。——這就是「真核」（eu-karyon，意思是「真正的核」）這個字的由來。"
      }
    ]
  },
  {
    id: 9,
    img: "slide_images/slide-09.jpg",
    chTitle: "原核細胞結構圖",
    enTitle: "The Prokaryotic Cell",
    sentences: [
      {
        en: "This figure shows a typical rod-shaped bacterium and a thin section through the bacterium Corynebacterium diphtheriae.",
        zh: "這張圖展示一個典型的桿狀細菌結構，以及白喉桿菌（Corynebacterium diphtheriae）的切片電子顯微鏡照片。"
      },
      {
        en: "Fimbriae are hair-like structures on the cell surface that help bacteria attach to surfaces.",
        zh: "「菌毛」（Fimbriae）是細菌表面像毛髮一樣的結構，幫助細菌附著在物體表面上（例如附著在人體細胞上引發感染）。"
      },
      {
        en: "The nucleoid is the region where the bacterial chromosome is concentrated, without a surrounding membrane.",
        zh: "「類核區」（Nucleoid）是細菌染色體集中的區域，但周圍沒有膜包住——這正是原核細胞跟真核細胞最大的差異之一。"
      },
      {
        en: "Ribosomes are scattered throughout the cytoplasm and are responsible for protein synthesis.",
        zh: "核糖體散布在整個細胞質中，負責蛋白質合成的工作。"
      },
      {
        en: "The plasma membrane is surrounded by a cell wall, which provides structural support.",
        zh: "細胞膜外面還包覆著一層細胞壁，提供結構上的支撐力——這也是為什麼細菌比動物細胞更耐得住外界的物理壓力。"
      },
      {
        en: "The glycocalyx is an outer coating that often contributes to virulence in pathogenic bacteria.",
        zh: "「糖被」（Glycocalyx）是最外層的一層包覆物，在致病菌身上常常跟它的致病能力（virulence）有關——糖被可以幫助細菌躲避免疫系統的偵測攻擊。"
      },
      {
        en: "Flagella are long, whip-like structures used for movement.",
        zh: "鞭毛（Flagella）是細長、像鞭子一樣的結構，用來幫助細菌游動。"
      }
    ]
  },
  {
    id: 10,
    img: "slide_images/slide-10.jpg",
    chTitle: "細胞膜的組成",
    enTitle: "The Composition of Plasma Membrane",
    sentences: [
      {
        en: "The plasma membrane is a selective barrier that allows sufficient passage of oxygen, nutrients, and waste to service the volume of every cell.",
        zh: "細胞膜是一個「選擇性」的屏障，只允許氧氣、營養物質和廢物以適當的量通過，來維持整個細胞的代謝需求——它不是密不透風的牆，也不是完全開放的門，而是一個有篩選機制的「智慧關卡」。"
      },
      {
        en: "The general structure of a biological membrane is a double layer of phospholipids.",
        zh: "生物膜的基本結構是「磷脂雙層」（phospholipid bilayer）——磷脂分子一邊是親水（喜歡水）的頭部，一邊是疏水（怕水）的尾巴，兩層磷脂尾對尾排列，剛好可以把細胞內外的水性環境隔開。"
      },
      {
        en: "The membrane has hydrophilic regions on the outside and inside, with a hydrophobic region in the middle.",
        zh: "膜的內外兩側是親水區域，中間夾著一層疏水區域——這個「三明治」結構正是磷脂雙層的精妙之處：外面接觸水的部分喜歡水，中間阻擋水溶性物質自由穿透的部分怕水。"
      },
      {
        en: "Proteins are embedded within the membrane and carbohydrate side chains extend from the outer surface.",
        zh: "蛋白質鑲嵌在膜中間，碳水化合物側鏈則從外側表面延伸出去——這些嵌在膜上的蛋白質負責讓特定物質進出細胞（像門禁系統的感應器），而碳水化合物側鏈則常常負責細胞辨識身分（像細胞的「身分證」）。"
      }
    ]
  },
  {
    id: 11,
    img: "slide_images/slide-11.jpg",
    chTitle: "表面積與體積的幾何關係",
    enTitle: "Surface Area and Volume",
    sentences: [
      {
        en: "A high surface-to-volume ratio facilitates the exchange of materials between a cell and its environment.",
        zh: "高「表面積對體積比」有助於細胞和外界環境之間的物質交換——這是細胞為什麼必須維持「小」的根本原因。"
      },
      {
        en: "As an object is divided into smaller pieces, while total volume stays the same, total surface area increases.",
        zh: "當一個物體被切割成越多小塊，雖然總體積維持不變，但總表面積卻會增加——這張表格顯示：把邊長5的立方體切成125個邊長1的小立方體後，表面積從150增加到750，整整多了5倍。"
      },
      {
        en: "The surface-to-volume ratio increases as the object becomes smaller, going from 1.2 for the medium-sized pieces to 6 for the smallest pieces.",
        zh: "「表面積對體積比」會隨著物體變小而增加——從中等大小切塊的1.2，提升到最小切塊的6。"
      },
      {
        en: "Why does this matter for cells? A cell that is too large has too little surface area relative to its volume, making it hard to absorb enough nutrients and expel enough waste fast enough to keep up with its metabolic needs.",
        zh: "這對細胞有什麼意義？如果一個細胞太大，相對於它的體積，表面積會顯得太小，導致養分吸收和廢物排出的速度，跟不上細胞內部的代謝需求——這就是為什麼細胞長到一定大小就會分裂，而不是繼續長大：表面積跟不上體積的成長速度，細胞就會「餓死」或「中毒」。"
      }
    ]
  },
  {
    id: 12,
    img: "slide_images/slide-12.jpg",
    chTitle: "影片：動物細胞之旅",
    enTitle: "BioFlix: Tour of an Animal Cell",
    sentences: [
      {
        en: "This is a BioFlix animation titled Tour of an Animal Cell, published by Pearson Benjamin Cummings.",
        zh: "這是一段Pearson Benjamin Cummings出版社製作的動畫，標題是「動物細胞之旅」。"
      },
      {
        en: "This animation visually walks through the internal structures of an animal cell.",
        zh: "這段動畫會以視覺化的方式，帶你走一遍動物細胞內部的各種結構——下一張投影片就是動物細胞的整體結構圖，可以對照著看。"
      }
    ]
  },
  {
    id: 13,
    img: "slide_images/slide-13.jpg",
    chTitle: "動物細胞整體結構圖",
    enTitle: "Animal Cell (Cutaway View)",
    sentences: [
      {
        en: "This is a cutaway view of a generalized animal cell, showing all major organelles.",
        zh: "這是一張動物細胞的剖面整體結構圖，展示所有主要的胞器——這張圖建議反覆對照記憶，因為後面每一個胞器都會單獨展開詳細講解。"
      },
      {
        en: "The nucleus, containing chromatin and a nucleolus, is enclosed by the nuclear envelope.",
        zh: "細胞核（裡面有染色質和核仁）被核膜包覆著——細胞核是整個細胞的「指揮中心」。"
      },
      {
        en: "The endoplasmic reticulum, or ER, includes both rough ER, which is connected to the nuclear envelope, and smooth ER.",
        zh: "內質網（ER）包括粗糙內質網（連接著核膜）和平滑內質網——粗糙內質網表面有核糖體附著，平滑內質網表面則沒有。"
      },
      {
        en: "Ribosomes appear as small dots, either free in the cytoplasm or attached to the rough ER.",
        zh: "核糖體呈現為小點狀，可以自由漂浮在細胞質中，也可以附著在粗糙內質網表面。"
      },
      {
        en: "The Golgi apparatus processes and packages materials received from the ER.",
        zh: "高基氏體負責處理並包裝從內質網送來的材料——可以想像成快遞公司的「分裝中心」。"
      },
      {
        en: "Mitochondria, lysosomes, and peroxisomes are membrane-bound organelles in the cytoplasm.",
        zh: "粒線體、溶酶體（lysosome）、過氧化體（peroxisome）都是分布在細胞質中、被膜包住的胞器。"
      },
      {
        en: "The cytoskeleton, made of microfilaments, intermediate filaments, and microtubules, provides structural support throughout the cell.",
        zh: "細胞骨架由微絲、中間絲、微管組成，提供整個細胞結構上的支撐——這套系統會在概念7.6詳細介紹。"
      },
      {
        en: "The centrosome and flagella, shown in red, are structures unique to animal cells that are not typically found in plant cells.",
        zh: "圖中以紅色標示的中心體（centrosome）和鞭毛（flagella），是動物細胞特有的結構，植物細胞通常沒有——這個對比在下一張投影片（植物細胞圖）會更清楚。"
      },
      {
        en: "Microvilli are finger-like projections of the plasma membrane that increase surface area for absorption.",
        zh: "微絨毛（microvilli）是細胞膜向外突出的手指狀結構，能增加吸收用的表面積——這正好呼應前面講的「表面積對體積比」概念，細胞用這種方式來增加自己的吸收效率。"
      }
    ]
  }
];
