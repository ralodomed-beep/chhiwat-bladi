import { Category, Recipe, Language } from "../types";

export const dessertRecipes: Recipe[] = [
  {
    id: "d1",
    name: {
      [Language.AR]: "كعب الغزال باللوز",
      [Language.FR]: "Cornes de Gazelle au Amandes",
      [Language.EN]: "Almond Gazelle Horns"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "أشهر الحلويات المغربية التقليدية، عبارة عن عجين رقيق محشو بعقدة اللوز المنسمة بماء الزهر. المستوى: متوسط.",
      [Language.FR]: "La pâtisserie marocaine la plus célèbre, une fine pâte farcie d'une pâte d'amande parfumée à l'eau de fleur d'oranger. Niveau: Moyen.",
      [Language.EN]: "The most famous Moroccan pastry, a thin dough stuffed with almond paste flavored with orange blossom water. Level: Medium."
    },
    prepTime: {
      [Language.AR]: "60 دقيقة تحضير + 15 دقيقة طهي",
      [Language.FR]: "60 min prép + 15 min cuisson",
      [Language.EN]: "60 min prep + 15 min cook"
    },
    servings: 20,
    ingredients: {
      [Language.AR]: ["500 غرام لوز مسلوق ومطحون", "250 غرام سكر صقيل", "50 غرام زبدة", "ملعقة صغيرة قرفة", "ماء زهر", "للعجين: 500 غرام دقيق، 100 غرام زبدة، قبصة ملح، ماء زهر لجمع العجين"],
      [Language.FR]: ["500g d'amandes émondées et moulues", "250g de sucre glace", "50g de beurre", "1 c.à.c de cannelle", "Eau de fleur d'oranger", "Pâte: 500g farine, 100g beurre, sel, eau de fleur d'oranger"],
      [Language.EN]: ["500g blanched and ground almonds", "250g powdered sugar", "50g butter", "1 tsp cinnamon", "Orange blossom water", "Dough: 500g flour, 100g butter, pinch of salt, orange blossom water"]
    },
    steps: {
      [Language.AR]: [
        "نحضر عقدة اللوز بخلط اللوز المطحون مع السكر والزبدة والقرفة وماء الزهر حتى نحصل على عجين متماسك.",
        "نشكل العقدة على شكل أصابع صغيرة.",
        "نحضر العجين بخلط الدقيق والزبدة والملح وماء الزهر حتى نحصل على عجين رقيق جداً.",
        "نورق العجين ونضع وسطه أصبع اللوز ثم نغلقه ونشكله على شكل هلال.",
        "نثقب الحلوى بإبرة رقيقة ونتركها ترتاح ليلة كاملة قبل الطهي في فرن هادئ."
      ],
      [Language.FR]: [
        "Préparer la pâte d'amande en mélangeant les amandes, le sucre, le beurre, la cannelle et l'eau de fleur d'oranger.",
        "Former des petits boudins avec la pâte d'amande.",
        "Préparer la pâte en mélangeant la farine, le beurre, le sel et l'eau de fleur d'oranger.",
        "Étaler la pâte très finement, placer un boudin d'amande, refermer et donner la forme d'un croissant.",
        "Piquer avec une aiguille et laisser reposer une nuit avant de cuire au four doux."
      ],
      [Language.EN]: [
        "Prepare the almond paste by mixing almonds, sugar, butter, cinnamon, and orange blossom water.",
        "Form small logs with the almond paste.",
        "Prepare the dough by mixing flour, butter, salt, and orange blossom water until very thin.",
        "Roll out the dough thinly, place an almond log, close it, and shape it into a crescent.",
        "Prick with a thin needle and let rest overnight before baking in a low oven."
      ]
    },
    tips: {
      [Language.AR]: ["يجب أن يكون العجين رقيقاً جداً لدرجة الشفافية.", "ترك الحلوى ترتاح ليلة كاملة يمنعها من الانتفاخ في الفرن."],
      [Language.FR]: ["La pâte doit être très fine, presque transparente.", "Laisser reposer une nuit évite que les cornes ne gonflent au four."],
      [Language.EN]: ["The dough must be very thin, almost transparent.", "Letting them rest overnight prevents them from puffing up in the oven."]
    }
  },
  {
    id: "d2",
    name: {
      [Language.AR]: "الشباكية المغربية",
      [Language.FR]: "Chebakia Marocaine",
      [Language.EN]: "Moroccan Chebakia"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى رمضانية بامتياز، معسلة ومقرمشة ومنسمة بالنافع والزنجبيل. المستوى: صعب.",
      [Language.FR]: "Pâtisserie incontournable du Ramadan, miellée, croquante et parfumée à l'anis et au gingembre. Niveau: Difficile.",
      [Language.EN]: "An essential Ramadan pastry, honeyed, crunchy, and flavored with anise and ginger. Level: Difficult."
    },
    prepTime: {
      [Language.AR]: "120 دقيقة تحضير + 30 دقيقة طهي",
      [Language.FR]: "120 min prép + 30 min cuisson",
      [Language.EN]: "120 min prep + 30 min cook"
    },
    servings: 50,
    ingredients: {
      [Language.AR]: ["1 كيلو دقيق", "كأس زنجلان (سمسم) مطحون", "كأس لوز مطحون", "كأس زبدة مذابة", "كأس زيت", "ملعقة كبيرة نافع (يانسون)", "ملعقة كبيرة قرفة", "زعفران حر", "خميرة الحلويات", "عسل وسمسم للتزيين"],
      [Language.FR]: ["1 kg de farine", "1 tasse de sésame moulu", "1 tasse d'amandes moulues", "1 tasse de beurre fondu", "1 tasse d'huile", "1 c.à.s d'anis", "1 c.à.s de cannelle", "Safran", "Levure chimique", "Miel et sésame"],
      [Language.EN]: ["1 kg flour", "1 cup ground sesame", "1 cup ground almonds", "1 cup melted butter", "1 cup oil", "1 tbsp anise", "1 tbsp cinnamon", "Saffron", "Baking powder", "Honey and sesame seeds"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الدقيق مع جميع المكونات الجافة ثم نضيف الزبدة والزيت والزعفران وماء الزهر لجمع العجين.",
        "ندلك العجين جيداً حتى يصبح ليناً.",
        "نقسم العجين ونبسطه ثم نقطعه بجرارة الشباكية ونشكلها بطريقة التشبيك التقليدية.",
        "نقلي الشباكية في زيت ساخن حتى تصبح ذهبية اللون.",
        "نغطسها فوراً في العسل الساخن ثم نصفيها ونرشها بالسمسم."
      ],
      [Language.FR]: [
        "Mélanger la farine avec les ingrédients secs, puis ajouter le beurre, l'huile, le safran et l'eau de fleur d'oranger.",
        "Pétrir fermement jusqu'à obtenir une pâte souple.",
        "Étaler la pâte, découper avec la roulette et former les fleurs traditionnelles.",
        "Frire dans l'huile chaude jusqu'à coloration dorée.",
        "Plonger immédiatement dans le miel chaud, égoutter et saupoudrer de sésame."
      ],
      [Language.EN]: [
        "Mix flour with dry ingredients, then add butter, oil, saffron, and orange blossom water to form a dough.",
        "Knead well until flexible.",
        "Roll out the dough, cut with a pastry wheel, and shape into traditional flowers.",
        "Fry in hot oil until golden brown.",
        "Immediately dip in hot honey, drain, and sprinkle with sesame seeds."
      ]
    },
    tips: {
      [Language.AR]: ["يجب أن يكون العجين صلباً قليلاً لسهولة التشبيك.", "العسل يجب أن يكون ثقيلاً ليلتصق بالحلوى."],
      [Language.FR]: ["La pâte doit être un peu ferme pour faciliter le façonnage.", "Le miel doit être épais pour bien adhérer."],
      [Language.EN]: ["The dough should be slightly firm for easier shaping.", "The honey must be thick to stick properly."]
    }
  },
  {
    id: "d3",
    name: {
      [Language.AR]: "غريبة البهلة",
      [Language.FR]: "Ghriba Bahla",
      [Language.EN]: "Ghriba Bahla (Shortbread)"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى مغربية تقليدية تتميز بتشققها وقوامها الذي يذوب في الفم. المستوى: سهل.",
      [Language.FR]: "Pâtisserie traditionnelle craquelée qui fond dans la bouche. Niveau: Facile.",
      [Language.EN]: "A traditional cracked pastry that melts in your mouth. Level: Easy."
    },
    prepTime: {
      [Language.AR]: "30 دقيقة تحضير + 20 دقيقة طهي",
      [Language.FR]: "30 min prép + 20 min cuisson",
      [Language.EN]: "30 min prep + 20 min cook"
    },
    servings: 30,
    ingredients: {
      [Language.AR]: ["500 غرام دقيق", "150 غرام سكر", "150 مل زيت", "100 غرام زبدة", "كأس زنجلان محمر", "كأس لوز مهرمش", "ملعقة صغيرة قرفة", "خميرة الحلويات"],
      [Language.FR]: ["500g farine", "150g sucre", "150ml huile", "100g beurre", "1 tasse sésame grillé", "1 tasse amandes concassées", "1 c.à.c cannelle", "Levure chimique"],
      [Language.EN]: ["500g flour", "150g sugar", "150ml oil", "100g butter", "1 cup toasted sesame", "1 cup crushed almonds", "1 tsp cinnamon", "Baking powder"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الزبدة مع السكر والزيت جيداً.",
        "نضيف الزنجلان واللوز والقرفة والخميرة.",
        "نضيف الدقيق تدريجياً مع الدلك الجيد حتى نحصل على عجين يتجمع باليد.",
        "نشكل كويرات صغيرة ونضعها في صفيحة الفرن.",
        "ندخلها للفرن مسخن من الأعلى أولاً حتى تتشقق ثم من الأسفل لتكمل النضج."
      ],
      [Language.FR]: [
        "Mélanger le beurre, le sucre et l'huile.",
        "Ajouter le sésame, les amandes, la cannelle et la levure.",
        "Ajouter la farine progressivement en pétrissant bien.",
        "Former des boules et les placer sur une plaque.",
        "Cuire au four en allumant le haut d'abord pour craqueler, puis le bas."
      ],
      [Language.EN]: [
        "Mix butter, sugar, and oil well.",
        "Add sesame, almonds, cinnamon, and baking powder.",
        "Add flour gradually while kneading until the dough holds together.",
        "Form small balls and place on a baking sheet.",
        "Bake with the top heat on first to crack the surface, then the bottom heat to finish."
      ]
    },
    tips: {
      [Language.AR]: ["سر التشقق هو إشعال الفرن من الأعلى في البداية.", "الدلك الجيد ضروري للحصول على قوام هش."],
      [Language.FR]: ["Le secret du craquelage est d'allumer le haut du four en premier.", "Un bon pétrissage est essentiel pour le fondant."],
      [Language.EN]: ["The secret to the cracks is turning on the top broiler first.", "Good kneading is essential for the melting texture."]
    }
  },
  {
    id: "d4",
    name: {
      [Language.AR]: "الفقاص باللوز والزبيب",
      [Language.FR]: "Fekkas aux Amandes",
      [Language.EN]: "Almond Fekkas"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "بسكويت مغربي مقرمش يشبه 'الكانتوتشيني' الإيطالي، يحضر باللوز والنافع. المستوى: متوسط.",
      [Language.FR]: "Croquant marocain aux amandes et à l'anis, similaire aux cantuccini italiens. Niveau: Moyen.",
      [Language.EN]: "Crunchy Moroccan biscuit with almonds and anise, similar to Italian cantuccini. Level: Medium."
    },
    prepTime: {
      [Language.AR]: "40 دقيقة تحضير + 45 دقيقة طهي (على مرحلتين)",
      [Language.FR]: "40 min prép + 45 min cuisson (2 étapes)",
      [Language.EN]: "40 min prep + 45 min cook (2 stages)"
    },
    servings: 40,
    ingredients: {
      [Language.AR]: ["6 بيضات", "كأسين سكر", "كأسين زيت", "كأس لوز كامل منقوع في ماء الزهر", "نصف كأس زنجلان", "ملعقتين نافع", "خميرة الحلويات", "الدقيق حسب الخليط"],
      [Language.FR]: ["6 œufs", "2 tasses de sucre", "2 tasses d'huile", "1 tasse d'amandes entières", "1/2 tasse de sésame", "2 c.à.s d'anis", "Levure chimique", "Farine"],
      [Language.EN]: ["6 eggs", "2 cups sugar", "2 cups oil", "1 cup whole almonds", "1/2 cup sesame seeds", "2 tbsp anise", "Baking powder", "Flour"]
    },
    steps: {
      [Language.AR]: [
        "نخلط البيض والسكر والزيت جيداً.",
        "نضيف اللوز والزنجلان والنافع والخميرة.",
        "نضيف الدقيق تدريجياً حتى نحصل على عجين متماسك.",
        "نشكل قضبان طويلة ونضعها في الفرن نصف نضجة.",
        "نخرجها ونغطيها بمنديل مبلل ونتركها تبرد تماماً (يفضل ليلة كاملة).",
        "نقطعها شرائح رقيقة ونعيدها للفرن لتتحمر من الجهتين."
      ],
      [Language.FR]: [
        "Mélanger les œufs, le sucre et l'huile.",
        "Ajouter les amandes, le sésame, l'anis et la levure.",
        "Ajouter la farine pour obtenir une pâte ferme.",
        "Former des boudins et précuire au four.",
        "Sortir, couvrir d'un linge humide et laisser refroidir (une nuit idéalement).",
        "Couper en tranches fines et dorer au four des deux côtés."
      ],
      [Language.EN]: [
        "Mix eggs, sugar, and oil well.",
        "Add almonds, sesame, anise, and baking powder.",
        "Add flour gradually to get a firm dough.",
        "Form long logs and pre-bake in the oven.",
        "Remove, cover with a damp cloth, and let cool completely (ideally overnight).",
        "Slice thinly and bake again until golden on both sides."
      ]
    },
    tips: {
      [Language.AR]: ["نقع اللوز في ماء الزهر يسهل عملية التقطيع دون تكسر.", "يجب استخدام سكين حاد جداً للتقطيع."],
      [Language.FR]: ["Tremper les amandes facilite la découpe sans casse.", "Utiliser un couteau très aiguisé."],
      [Language.EN]: ["Soaking almonds makes slicing easier without breaking.", "Use a very sharp knife for slicing."]
    }
  },
  {
    id: "d5",
    name: {
      [Language.AR]: "البريوات باللوز والعسل",
      [Language.FR]: "Briouates aux Amandes",
      [Language.EN]: "Almond Briouates"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "مثلثات مقرمشة من ورقة البسطيلة محشوة بعقدة اللوز ومعسلة. المستوى: متوسط.",
      [Language.FR]: "Triangles croustillants de pâte filo farcis aux amandes et miellés. Niveau: Moyen.",
      [Language.EN]: "Crunchy phyllo triangles stuffed with almonds and soaked in honey. Level: Medium."
    },
    prepTime: {
      [Language.AR]: "60 دقيقة تحضير + 20 دقيقة طهي",
      [Language.FR]: "60 min prép + 20 min cuisson",
      [Language.EN]: "60 min prep + 20 min cook"
    },
    servings: 30,
    ingredients: {
      [Language.AR]: ["500 غرام لوز مقلي ومطحون", "100 غرام سكر", "ملعقة قرفة", "ماء زهر", "ورقة البسطيلة", "زبدة مذابة", "عسل وسمسم"],
      [Language.FR]: ["500g amandes frites et moulues", "100g sucre", "1 c.à.c cannelle", "Eau de fleur d'oranger", "Feuilles de pastilla", "Beurre fondu", "Miel et sésame"],
      [Language.EN]: ["500g fried and ground almonds", "100g sugar", "1 tsp cinnamon", "Orange blossom water", "Pastilla sheets", "Melted butter", "Honey and sesame"]
    },
    steps: {
      [Language.AR]: [
        "نحضر عقدة اللوز بخلط اللوز والسكر والقرفة وماء الزهر.",
        "نقطع ورقة البسطيلة إلى أشرطة طويلة.",
        "نضع كرة صغيرة من اللوز في طرف الشريط ونطويها على شكل مثلث.",
        "نلصق الطرف بخليط الدقيق والماء.",
        "نقلي البريوات في زيت ساخن ثم نغطسها في العسل."
      ],
      [Language.FR]: [
        "Préparer la farce aux amandes.",
        "Couper les feuilles de pastilla en bandes.",
        "Placer une boule de farce et plier en triangle.",
        "Sceller avec un peu de farine et d'eau.",
        "Frire et plonger dans le miel."
      ],
      [Language.EN]: [
        "Prepare the almond filling.",
        "Cut pastilla sheets into strips.",
        "Place a small ball of filling and fold into a triangle.",
        "Seal the edge with flour and water mixture.",
        "Fry and dip in honey."
      ]
    },
    tips: {
      [Language.AR]: ["يمكن طهيها في الفرن بدلاً من القلي لنسخة صحية أكثر.", "يجب تصفيتها جيداً من العسل قبل التزيين بالسمسم."],
      [Language.FR]: ["Peut être cuit au four pour une version plus légère.", "Bien égoutter le miel avant de décorer."],
      [Language.EN]: ["Can be baked for a lighter version.", "Drain honey well before garnishing."]
    }
  },
  {
    id: "d6",
    name: {
      [Language.AR]: "البغرير (القطايف المغربية)",
      [Language.FR]: "Baghrir (Crêpes Mille Trous)",
      [Language.EN]: "Baghrir (Thousand Hole Crepes)"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "فطائر مغربية خفيفة تتميز بثقوبها الكثيرة، تقدم مع العسل والزبدة. المستوى: سهل.",
      [Language.FR]: "Crêpes légères caractérisées par leurs nombreux trous, servies avec miel et beurre. Niveau: Facile.",
      [Language.EN]: "Light crepes characterized by many small holes, served with honey and butter. Level: Easy."
    },
    prepTime: {
      [Language.AR]: "10 دقائق تحضير + 15 دقيقة طهي",
      [Language.FR]: "10 min prép + 15 min cuisson",
      [Language.EN]: "10 min prep + 15 min cook"
    },
    servings: 10,
    ingredients: {
      [Language.AR]: ["كأسين سميد رقيق", "نصف كأس دقيق", "3 كؤوس ماء دافئ", "ملعقة كبيرة خميرة الخبز", "خميرة الحلويات", "قبصة ملح"],
      [Language.FR]: ["2 tasses de semoule fine", "1/2 tasse de farine", "3 tasses d'eau tiède", "1 c.à.s de levure boulangère", "Levure chimique", "Sel"],
      [Language.EN]: ["2 cups fine semolina", "1/2 cup flour", "3 cups warm water", "1 tbsp yeast", "Baking powder", "Pinch of salt"]
    },
    steps: {
      [Language.AR]: [
        "نخلط جميع المكونات في الخلاط الكهربائي لمدة 5 دقائق.",
        "نترك الخليط يرتاح لمدة 10 إلى 15 دقيقة.",
        "نسخن مقلاة غير لاصقة ونصب فيها كمية من الخليط.",
        "نطهو البغرير من جهة واحدة فقط حتى تظهر الثقوب وينشف تماماً.",
        "نقدمه ساخناً مع خليط الزبدة والعسل المذاب."
      ],
      [Language.FR]: [
        "Mixer tous les ingrédients au blender pendant 5 minutes.",
        "Laisser reposer 10 à 15 minutes.",
        "Chauffer une poêle antiadhésive et verser une louche de pâte.",
        "Cuire d'un seul côté jusqu'à formation des trous et séchage complet.",
        "Servir chaud avec du beurre et du miel fondu."
      ],
      [Language.EN]: [
        "Mix all ingredients in a blender for 5 minutes.",
        "Let the batter rest for 10-15 minutes.",
        "Heat a non-stick pan and pour a ladle of batter.",
        "Cook on one side only until holes form and the top is dry.",
        "Serve hot with melted butter and honey."
      ]
    },
    tips: {
      [Language.AR]: ["يجب غسل المقلاة بماء بارد بين كل حبة وأخرى لضمان ظهور الثقوب.", "الماء يجب أن يكون دافئاً وليس ساخناً جداً."],
      [Language.FR]: ["Passer la poêle sous l'eau froide entre chaque crêpe.", "L'eau doit être tiède, pas brûlante."],
      [Language.EN]: ["Rinse the pan with cold water between crepes to ensure holes form.", "Water should be warm, not hot."]
    }
  },
  {
    id: "d7",
    name: {
      [Language.AR]: "السفنج المغربي",
      [Language.FR]: "Sfenj Marocain",
      [Language.EN]: "Moroccan Sfenj (Donuts)"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1527515545081-5db817172677?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "فطائر مقلية مقرمشة من الخارج وطرية من الداخل، تباع في الشوارع المغربية. المستوى: متوسط.",
      [Language.FR]: "Beignets frits croustillants dehors et moelleux dedans, typiques des rues marocaines. Niveau: Moyen.",
      [Language.EN]: "Fried donuts, crunchy outside and soft inside, typical of Moroccan street food. Level: Medium."
    },
    prepTime: {
      [Language.AR]: "20 دقيقة تحضير + 2 ساعة تخمير",
      [Language.FR]: "20 min prép + 2h repos",
      [Language.EN]: "20 min prep + 2h rest"
    },
    servings: 12,
    ingredients: {
      [Language.AR]: ["500 غرام دقيق", "ملعقة كبيرة خميرة الخبز", "ملح", "ماء دافئ للعجن", "زيت للقلي"],
      [Language.FR]: ["500g farine", "1 c.à.s levure boulangère", "Sel", "Eau tiède", "Huile de friture"],
      [Language.EN]: ["500g flour", "1 tbsp yeast", "Salt", "Warm water", "Oil for frying"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الدقيق والخميرة والملح والماء تدريجياً مع العجن الجيد حتى نحصل على عجين مطاطي جداً.",
        "نغطي العجين ونتركه يختمر حتى يتضاعف حجمه.",
        "ندهن اليدين بالزيت ونأخذ كرة صغيرة، نصنع ثقباً في وسطها ونضعها في الزيت الساخن.",
        "نقلبها حتى تتحمر من الجهتين.",
        "تقدم ساخنة مع الشاي المغربي."
      ],
      [Language.FR]: [
        "Mélanger les ingrédients et pétrir jusqu'à obtenir une pâte très élastique.",
        "Laisser lever jusqu'à ce que la pâte double de volume.",
        "Former des anneaux avec les mains huilées et frire dans l'huile chaude.",
        "Retourner pour dorer les deux côtés.",
        "Servir chaud avec du thé."
      ],
      [Language.EN]: [
        "Mix ingredients and knead until the dough is very elastic.",
        "Let rise until doubled in size.",
        "Form rings with oiled hands and fry in hot oil.",
        "Flip to brown both sides.",
        "Serve hot with tea."
      ]
    },
    tips: {
      [Language.AR]: ["العجين يجب أن يكون رطباً جداً ويلتصق باليد.", "القلي في مقلاتين (واحدة بزيت قليل والأخرى بزيت وفير) يعطي أفضل نتيجة."],
      [Language.FR]: ["La pâte doit être très collante.", "Utiliser deux poêles pour une meilleure cuisson."],
      [Language.EN]: ["The dough should be very sticky.", "Using two pans (one with little oil, one with deep oil) gives the best result."]
    }
  },
  {
    id: "d8",
    name: {
      [Language.AR]: "سلو المغربي (الزميتة)",
      [Language.FR]: "Sellou Marocain",
      [Language.EN]: "Moroccan Sellou"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1511018556340-d16986a1c194?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "خليط مغذي من الدقيق المحمر والمكسرات والتوابل، يقدم في رمضان والمناسبات. المستوى: متوسط.",
      [Language.FR]: "Mélange nutritif de farine grillée, fruits secs et épices, servi pendant le Ramadan. Niveau: Moyen.",
      [Language.EN]: "A nutritious mix of toasted flour, nuts, and spices, served during Ramadan. Level: Medium."
    },
    prepTime: {
      [Language.AR]: "60 دقيقة تحضير + 30 دقيقة طهي",
      [Language.FR]: "60 min prép + 30 min cuisson",
      [Language.EN]: "60 min prep + 30 min cook"
    },
    servings: 20,
    ingredients: {
      [Language.AR]: ["1 كيلو دقيق محمر", "1 كيلو زنجلان محمر ومطحون", "1 كيلو لوز مقلي ومطحون", "500 غرام سكر صقيل", "ملعقتين نافع", "ملعقتين حبة حلاوة", "ملعقتين قرفة", "مسكة حرة", "زبدة مذابة أو زيت"],
      [Language.FR]: ["1kg farine grillée", "1kg sésame grillé et moulu", "1kg amandes frites et moulues", "500g sucre glace", "2 c.à.s d'anis", "2 c.à.s de fenouil", "2 c.à.s cannelle", "Gomme arabique", "Beurre ou huile"],
      [Language.EN]: ["1kg toasted flour", "1kg toasted and ground sesame", "1kg fried and ground almonds", "500g powdered sugar", "2 tbsp anise", "2 tbsp fennel", "2 tbsp cinnamon", "Mastic", "Butter or oil"]
    },
    steps: {
      [Language.AR]: [
        "نحمر الدقيق في الفرن حتى يصبح ذهبياً ثم نغربله.",
        "نخلط الدقيق مع الزنجلان واللوز والسكر والتوابل.",
        "نضيف الزبدة المذابة تدريجياً مع الدلك الجيد باليدين حتى ينسجم الخليط.",
        "يمكن تركه مرمل أو دلكه أكثر ليصبح معجناً حسب الرغبة.",
        "يزين باللوز المقلي ويقدم."
      ],
      [Language.FR]: [
        "Griller la farine au four jusqu'à coloration dorée, puis tamiser.",
        "Mélanger avec le sésame, les amandes, le sucre et les épices.",
        "Ajouter le beurre fondu progressivement en sablant bien avec les mains.",
        "Pétrir selon la texture désirée (sablonneuse ou compacte).",
        "Décorer d'amandes frites."
      ],
      [Language.EN]: [
        "Toast the flour in the oven until golden, then sift.",
        "Mix with sesame, almonds, sugar, and spices.",
        "Add melted butter gradually while rubbing with hands to combine.",
        "Knead according to desired texture (sandy or compact).",
        "Garnish with fried almonds."
      ]
    },
    tips: {
      [Language.AR]: ["تحمير الدقيق يجب أن يكون بحذر لتجنب الاحتراق.", "الدلك الجيد يخرج الزيوت الطبيعية من المكسرات."],
      [Language.FR]: ["Griller la farine avec précaution pour ne pas la brûler.", "Le pétrissage libère les huiles naturelles des fruits secs."],
      [Language.EN]: ["Toast flour carefully to avoid burning.", "Good kneading releases natural oils from the nuts."]
    }
  },
  {
    id: "d9",
    name: {
      [Language.AR]: "غريبة الكوك والسميدة",
      [Language.FR]: "Ghriba Noix de Coco et Semoule",
      [Language.EN]: "Coconut & Semolina Ghriba"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى اقتصادية ولذيذة، تتميز بمذاق جوز الهند وقوامها المعلك. المستوى: سهل.",
      [Language.FR]: "Pâtisserie économique et savoureuse au goût de coco et texture moelleuse. Niveau: Facile.",
      [Language.EN]: "An economical and tasty pastry with coconut flavor and a chewy texture. Level: Easy."
    },
    prepTime: {
      [Language.AR]: "20 دقيقة تحضير + 15 دقيقة طهي",
      [Language.FR]: "20 min prép + 15 min cuisson",
      [Language.EN]: "20 min prep + 15 min cook"
    },
    servings: 25,
    ingredients: {
      [Language.AR]: ["250 غرام جوز هند (كوك)", "250 غرام سميد رقيق", "3 بيضات", "كأس سكر", "كأس زيت", "قشور ليمونة", "ملعقة كبيرة مربى المشمش", "خميرة الحلويات", "سكر صقيل للتفنيد"],
      [Language.FR]: ["250g noix de coco", "250g semoule fine", "3 œufs", "1 tasse sucre", "1 tasse huile", "Zeste de citron", "1 c.à.s confiture d'abricot", "Levure chimique", "Sucre glace"],
      [Language.EN]: ["250g coconut", "250g fine semolina", "3 eggs", "1 cup sugar", "1 cup oil", "Lemon zest", "1 tbsp apricot jam", "Baking powder", "Powdered sugar"]
    },
    steps: {
      [Language.AR]: [
        "نخفق البيض مع السكر والزيت وقشور الليمون والمربى.",
        "نضيف جوز الهند ونخلط جيداً.",
        "نضيف السميد والخميرة تدريجياً حتى نحصل على عجين يسهل تشكيله.",
        "نشكل كويرات، نفندها في السكر الصقيل ونضعها في صفيحة الفرن.",
        "نطهوها في فرن متوسط حتى تتشقق وتتحمر قليلاً."
      ],
      [Language.FR]: [
        "Battre les œufs avec le sucre, l'huile, le zeste et la confiture.",
        "Ajouter la noix de coco et mélanger.",
        "Ajouter la semoule et la levure progressivement.",
        "Former des boules, les rouler dans le sucre glace.",
        "Cuire au four jusqu'à craquelage."
      ],
      [Language.EN]: [
        "Beat eggs with sugar, oil, zest, and jam.",
        "Add coconut and mix well.",
        "Add semolina and baking powder gradually until shapeable.",
        "Form balls, roll in powdered sugar, and place on a baking sheet.",
        "Bake in a medium oven until cracked and golden."
      ]
    },
    tips: {
      [Language.AR]: ["يجب استخدام جوز هند من نوعية جيدة (دسم) لضمان التعليكة.", "لا تتركها في الفرن طويلاً لكي لا تنشف."],
      [Language.FR]: ["Utiliser une noix de coco de qualité (grasse).", "Ne pas trop cuire pour garder le moelleux."],
      [Language.EN]: ["Use high-quality (oily) coconut for a chewy texture.", "Don't overbake to prevent drying out."]
    }
  },
  {
    id: "d10",
    name: {
      [Language.AR]: "المحنشة المغربية باللوز",
      [Language.FR]: "M'hancha aux Amandes",
      [Language.EN]: "M'hancha (Almond Snake Pastry)"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى ملكية بشكل حلزوني محشوة بعقدة اللوز ومسقية بالعسل. المستوى: متوسط.",
      [Language.FR]: "Pâtisserie royale en spirale farcie aux amandes et miellée. Niveau: Moyen.",
      [Language.EN]: "A royal spiral-shaped pastry stuffed with almond paste and soaked in honey. Level: Medium."
    },
    prepTime: {
      [Language.AR]: "45 دقيقة تحضير + 25 دقيقة طهي",
      [Language.FR]: "45 min prép + 25 min cuisson",
      [Language.EN]: "45 min prep + 25 min cook"
    },
    servings: 15,
    ingredients: {
      [Language.AR]: ["500 غرام عقدة اللوز", "ورقة البسطيلة", "زبدة مذابة", "عسل", "رقائق اللوز للتزيين"],
      [Language.FR]: ["500g pâte d'amande", "Feuilles de pastilla", "Beurre fondu", "Miel", "Amandes effilées"],
      [Language.EN]: ["500g almond paste", "Pastilla sheets", "Melted butter", "Honey", "Flaked almonds"]
    },
    steps: {
      [Language.AR]: [
        "نشكل عقدة اللوز على شكل قضبان طويلة ورقيقة.",
        "نضع قضيب اللوز فوق شريط من ورقة البسطيلة المدهونة بالزبدة.",
        "نلف الورقة حول اللوز ثم نلف القضيب حول نفسه بشكل حلزوني.",
        "ندهنها بالزبدة ونطهوها في الفرن حتى تتحمر.",
        "نسقيها بالعسل وهي ساخنة ونزينها باللوز."
      ],
      [Language.FR]: [
        "Former de longs boudins de pâte d'amande.",
        "Placer sur une bande de feuille de pastilla beurrée.",
        "Rouler la feuille puis l'enrouler sur elle-même en spirale.",
        "Beurrer et cuire au four.",
        "Arroser de miel chaud et décorer."
      ],
      [Language.EN]: [
        "Form long thin logs of almond paste.",
        "Place on a strip of buttered pastilla sheet.",
        "Roll the sheet around the almond paste, then coil it into a spiral.",
        "Brush with butter and bake until golden.",
        "Drizzle with honey while hot and garnish with almonds."
      ]
    },
    tips: {
      [Language.AR]: ["يجب لف الورقة بلطف لتجنب تمزقها.", "يمكن تحضيرها بحجم كبير أو أحجام فردية صغيرة."],
      [Language.FR]: ["Rouler délicatement pour ne pas déchirer la feuille.", "Existe en grand format ou en portions individuelles."],
      [Language.EN]: ["Roll gently to avoid tearing the sheet.", "Can be made in large or individual sizes."]
    }
  },
  {
    id: "d11",
    name: {
      [Language.AR]: "حلوى الريشبوند",
      [Language.FR]: "Gâteau Richbond",
      [Language.EN]: "Richbond Cake"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى الطفولة المغربية، كرات هشة مغطاة بالمربى وجوز الهند. المستوى: سهل جداً.",
      [Language.FR]: "Le gâteau de l'enfance marocaine, boules fondantes à la confiture et coco. Niveau: Très Facile.",
      [Language.EN]: "The cake of Moroccan childhood, melting balls covered in jam and coconut. Level: Very Easy."
    },
    prepTime: {
      [Language.AR]: "30 دقيقة تحضير + 15 دقيقة طهي",
      [Language.FR]: "30 min prép + 15 min cuisson",
      [Language.EN]: "30 min prep + 15 min cook"
    },
    servings: 40,
    ingredients: {
      [Language.AR]: ["3 بيضات", "كأس سكر", "كأس زيت", "خميرة الحلويات", "الدقيق حسب الخليط", "مربى المشمش سائل", "ماء زهر", "جوز هند (كوك)"],
      [Language.FR]: ["3 œufs", "1 tasse sucre", "1 tasse huile", "Levure chimique", "Farine", "Confiture d'abricot", "Eau de fleur d'oranger", "Noix de coco"],
      [Language.EN]: ["3 eggs", "1 cup sugar", "1 cup oil", "Baking powder", "Flour", "Apricot jam", "Orange blossom water", "Coconut"]
    },
    steps: {
      [Language.AR]: [
        "نخلط البيض والسكر والزيت ثم نضيف الدقيق والخميرة حتى نحصل على عجين لين.",
        "نشكل كويرات صغيرة جداً ونطهوها في الفرن (يجب أن تبقى بيضاء).",
        "نسخن المربى مع قليل من ماء الزهر.",
        "نغطس الحلوى في المربى الدافئ ثم نفندها في جوز الهند.",
        "يمكن إلصاق كل حبتين معاً بالمربى."
      ],
      [Language.FR]: [
        "Mélanger les ingrédients pour une pâte souple.",
        "Former de petites boules et cuire au four (doivent rester claires).",
        "Chauffer la confiture avec l'eau de fleur d'oranger.",
        "Plonger les gâteaux dans la confiture puis les rouler dans la coco.",
        "On peut les coller deux par deux."
      ],
      [Language.EN]: [
        "Mix ingredients for a soft dough.",
        "Form small balls and bake (should stay pale).",
        "Heat jam with orange blossom water.",
        "Dip cakes in warm jam then roll in coconut.",
        "Can be stuck together in pairs."
      ]
    },
    tips: {
      [Language.AR]: ["سر الهشاشة هو تركها في المربى الدافئ لبضع دقائق.", "تصبح أطرى في اليوم التالي."],
      [Language.FR]: ["Laisser tremper quelques minutes dans la confiture.", "Meilleur le lendemain."],
      [Language.EN]: ["The secret to tenderness is soaking in warm jam for a few minutes.", "Becomes softer the next day."]
    }
  },
  {
    id: "d12",
    name: {
      [Language.AR]: "حلوى التمر (المعمول المغربي)",
      [Language.FR]: "Gâteau aux Dattes",
      [Language.EN]: "Date Pastry"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى هشة محشوة بعجين التمر المنسم بالقرفة والقرنفل. المستوى: متوسط.",
      [Language.FR]: "Pâtisserie fondante farcie aux dattes parfumées à la cannelle. Niveau: Moyen.",
      [Language.EN]: "Melting pastry stuffed with dates flavored with cinnamon. Level: Medium."
    },
    prepTime: {
      [Language.AR]: "40 دقيقة تحضير + 20 دقيقة طهي",
      [Language.FR]: "40 min prép + 20 min cuisson",
      [Language.EN]: "40 min prep + 20 min cook"
    },
    servings: 30,
    ingredients: {
      [Language.AR]: ["للعجين: 250 غرام زبدة، نصف كأس سكر صقيل، نصف كأس زيت، ماء زهر، دقيق", "للحشوة: 500 غرام عجين تمر، ملعقة زبدة، قرفة، زنجلان محمر"],
      [Language.FR]: ["Pâte: 250g beurre, 1/2 tasse sucre glace, 1/2 tasse huile, eau de fleur d'oranger, farine", "Farce: 500g pâte de dattes, beurre, cannelle, sésame"],
      [Language.EN]: ["Dough: 250g butter, 1/2 cup powdered sugar, 1/2 cup oil, orange blossom water, flour", "Filling: 500g date paste, butter, cinnamon, sesame"]
    },
    steps: {
      [Language.AR]: [
        "نحضر الحشوة بخلط التمر مع الزبدة والقرفة والزنجلان وتشكل كويرات صغيرة.",
        "نحضر العجين بخلط المكونات حتى نحصل على عجين لين.",
        "نأخذ قطعة عجين، نضع وسطها كرة تمر ونغلقها.",
        "ننقشها بالمنقاش التقليدي أو نضعها في قالب المعمول.",
        "تطهى في الفرن وتفند في السكر الصقيل بعد أن تبرد."
      ],
      [Language.FR]: [
        "Préparer la farce aux dattes.",
        "Préparer la pâte.",
        "Enrober une boule de dattes avec la pâte.",
        "Décorer avec la pince traditionnelle ou un moule.",
        "Cuire et saupoudrer de sucre glace après refroidissement."
      ],
      [Language.EN]: [
        "Prepare the date filling.",
        "Prepare the dough.",
        "Wrap a date ball with the dough.",
        "Decorate with traditional tweezers or a mold.",
        "Bake and dust with powdered sugar after cooling."
      ]
    },
    tips: {
      [Language.AR]: ["يجب ألا يتحمر العجين كثيراً في الفرن ليبقى هشاً.", "استخدام تمر نوعية جيدة يعطي مذاقاً أفضل."],
      [Language.FR]: ["Ne pas trop dorer au four.", "Utiliser des dattes de qualité."],
      [Language.EN]: ["Don't over-brown in the oven to keep it melting.", "Use high-quality dates for better taste."]
    }
  },
  {
    id: "d13",
    name: {
      [Language.AR]: "حلوى الرخامة (الزليجة)",
      [Language.FR]: "Gâteau Marbré (Zellidja)",
      [Language.EN]: "Marbled Chocolate & Peanut Cake"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى بدون طهي بالكاكاو والشكلاط، تتميز بشكلها الرخامي الجميل. المستوى: سهل.",
      [Language.FR]: "Gâteau sans cuisson aux cacahuètes et chocolat, aspect marbré. Niveau: Facile.",
      [Language.EN]: "No-bake peanut and chocolate cake with a beautiful marbled look. Level: Easy."
    },
    prepTime: {
      [Language.AR]: "30 دقيقة تحضير + 1 ساعة تبريد",
      [Language.FR]: "30 min prép + 1h repos",
      [Language.EN]: "30 min prep + 1h rest"
    },
    servings: 35,
    ingredients: {
      [Language.AR]: ["500 غرام كاوكاو (فول سوداني) محمر ومطحون", "عسل لجمع الخليط", "ملعقة صغيرة قرفة", "شكلاط أسود", "شكلاط أبيض للتزيين"],
      [Language.FR]: ["500g cacahuètes grillées et moulues", "Miel", "1 c.à.c cannelle", "Chocolat noir", "Chocolat blanc"],
      [Language.EN]: ["500g roasted and ground peanuts", "Honey", "1 tsp cinnamon", "Dark chocolate", "White chocolate"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الكاوكاو مع القرفة والعسل حتى نحصل على عجين متماسك.",
        "نبسط الخليط في صينية مغطاة بورق الطبخ.",
        "نصب الشكلاط الأسود المذاب فوقه ونتركه يبرد.",
        "نقلب الحلوى ونصب الشكلاط الأسود من الجهة الأخرى.",
        "نزين بخطوط من الشكلاط الأبيض ونمرر سكيناً لنحصل على الشكل الرخامي.",
        "نتركها تبرد ثم نقطعها معينات."
      ],
      [Language.FR]: [
        "Mélanger cacahuètes, cannelle et miel.",
        "Étaler sur une plaque.",
        "Napper de chocolat noir fondu.",
        "Retourner et napper l'autre côté.",
        "Tracer des lignes de chocolat blanc et marbrer avec un couteau.",
        "Laisser durcir et couper en losanges."
      ],
      [Language.EN]: [
        "Mix peanuts, cinnamon, and honey.",
        "Spread on a tray.",
        "Cover with melted dark chocolate.",
        "Flip and cover the other side.",
        "Draw lines with white chocolate and marble with a knife.",
        "Let harden and cut into diamonds."
      ]
    },
    tips: {
      [Language.AR]: ["يجب تقطيعها بسكين دافئ لتجنب تكسر الشكلاط.", "يمكن إضافة قليل من الزيت للشكلاط ليعطيه لمعاناً."],
      [Language.FR]: ["Couper avec un couteau chaud.", "Ajouter un peu d'huile au chocolat pour la brillance."],
      [Language.EN]: ["Cut with a warm knife to avoid breaking the chocolate.", "Add a little oil to the chocolate for shine."]
    }
  },
  {
    id: "d14",
    name: {
      [Language.AR]: "حلوى الهلال باللوز",
      [Language.FR]: "Croissants aux Amandes",
      [Language.EN]: "Almond Crescents"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1551446591-142875a901a1?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى تقليدية هشة بشكل هلال، مغطاة برقائق اللوز أو السكر الصقيل. المستوى: سهل.",
      [Language.FR]: "Pâtisserie fondante en forme de croissant, aux amandes. Niveau: Facile.",
      [Language.EN]: "Melting crescent-shaped pastry with almonds. Level: Easy."
    },
    prepTime: {
      [Language.AR]: "25 دقيقة تحضير + 15 دقيقة طهي",
      [Language.FR]: "25 min prép + 15 min cuisson",
      [Language.EN]: "25 min prep + 15 min cook"
    },
    servings: 20,
    ingredients: {
      [Language.AR]: ["250 غرام زبدة", "كأس سكر", "كأس لوز مطحون", "دقيق حسب الخليط", "سكر صقيل للتزيين"],
      [Language.FR]: ["250g beurre", "1 tasse sucre", "1 tasse amandes moulues", "Farine", "Sucre glace"],
      [Language.EN]: ["250g butter", "1 cup sugar", "1 cup ground almonds", "Flour", "Powdered sugar"]
    },
    steps: {
      [Language.AR]: [
        "نخدم الزبدة مع السكر حتى تصبح كريمية.",
        "نضيف اللوز والدقيق تدريجياً حتى نحصل على عجين لين.",
        "نشكل أصابع ونقوسها على شكل هلال.",
        "تطهى في الفرن حتى تصبح ذهبية خفيفة.",
        "تفند في السكر الصقيل وهي دافئة."
      ],
      [Language.FR]: [
        "Travailler le beurre et le sucre en crème.",
        "Ajouter les amandes et la farine.",
        "Former des croissants.",
        "Cuire au four.",
        "Rouler dans le sucre glace encore tiède."
      ],
      [Language.EN]: [
        "Cream butter and sugar.",
        "Add almonds and flour.",
        "Shape into crescents.",
        "Bake in the oven.",
        "Roll in powdered sugar while still warm."
      ]
    },
    tips: {
      [Language.AR]: ["لا تلمس الحلوى وهي ساخنة لأنها تتكسر بسهولة.", "يمكن إضافة قشرة ليمون للنكهة."],
      [Language.FR]: ["Ne pas manipuler à chaud.", "Ajouter du zeste de citron pour le goût."],
      [Language.EN]: ["Don't handle while hot as they break easily.", "Add lemon zest for flavor."]
    }
  },
  {
    id: "d15",
    name: {
      [Language.AR]: "المسكوتة المغربية (كيك يومي)",
      [Language.FR]: "Meskouta (Cake Marocain)",
      [Language.EN]: "Meskouta (Moroccan Sponge Cake)"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1586985289906-40698897d504?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "كيك مغربي تقليدي بسيط، يحضر غالباً بعصير البرتقال. المستوى: سهل جداً.",
      [Language.FR]: "Gâteau traditionnel simple, souvent à l'orange. Niveau: Très Facile.",
      [Language.EN]: "Simple traditional cake, often made with orange juice. Level: Very Easy."
    },
    prepTime: {
      [Language.AR]: "15 دقيقة تحضير + 40 دقيقة طهي",
      [Language.FR]: "15 min prép + 40 min cuisson",
      [Language.EN]: "15 min prep + 40 min cook"
    },
    servings: 8,
    ingredients: {
      [Language.AR]: ["4 بيضات", "كأس سكر", "كأس زيت", "كأس عصير برتقال", "قشور برتقالة", "3 كؤوس دقيق", "خميرة الحلويات"],
      [Language.FR]: ["4 œufs", "1 tasse sucre", "1 tasse huile", "1 tasse jus d'orange", "Zeste d'orange", "3 tasses farine", "Levure chimique"],
      [Language.EN]: ["4 eggs", "1 cup sugar", "1 cup oil", "1 cup orange juice", "Orange zest", "3 cups flour", "Baking powder"]
    },
    steps: {
      [Language.AR]: [
        "نخفق البيض والسكر جيداً.",
        "نضيف الزيت والعصير والقشور.",
        "نضيف الدقيق والخميرة تدريجياً.",
        "نصب الخليط في قالب مدهون وندخله للفرن.",
        "يزين بالمربى وجوز الهند."
      ],
      [Language.FR]: [
        "Battre œufs et sucre.",
        "Ajouter huile, jus et zeste.",
        "Ajouter farine et levure.",
        "Cuire au four dans un moule beurré.",
        "Décorer de confiture et coco."
      ],
      [Language.EN]: [
        "Beat eggs and sugar.",
        "Add oil, juice, and zest.",
        "Add flour and baking powder.",
        "Bake in a greased mold.",
        "Garnish with jam and coconut."
      ]
    },
    tips: {
      [Language.AR]: ["يجب أن تكون جميع المكونات بدرجة حرارة الغرفة.", "لا تفتح الفرن قبل مرور 30 دقيقة."],
      [Language.FR]: ["Ingrédients à température ambiante.", "Ne pas ouvrir le four avant 30 min."],
      [Language.EN]: ["Ingredients should be at room temperature.", "Don't open the oven before 30 minutes."]
    }
  },
  {
    id: "d16",
    name: {
      [Language.AR]: "الملوزة باللوز",
      [Language.FR]: "M'louza aux Amandes",
      [Language.EN]: "M'louza (Almond Macaroons)"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى راقية من اللوز الخالص، تتميز بقوامها المعلك ومذاقها الغني. المستوى: متوسط.",
      [Language.FR]: "Pâtisserie raffinée aux amandes, texture moelleuse et goût riche. Niveau: Moyen.",
      [Language.EN]: "Refined almond pastry, chewy texture and rich taste. Level: Medium."
    },
    prepTime: {
      [Language.AR]: "30 دقيقة تحضير + 15 دقيقة طهي",
      [Language.FR]: "30 min prép + 15 min cuisson",
      [Language.EN]: "30 min prep + 15 min cook"
    },
    servings: 20,
    ingredients: {
      [Language.AR]: ["500 غرام لوز مطحون", "200 غرام سكر", "3 بيضات", "ملعقة زبدة", "قشرة ليمونة", "خميرة الحلويات", "سكر صقيل للتزيين"],
      [Language.FR]: ["500g amandes moulues", "200g sucre", "3 œufs", "Beurre", "Zeste de citron", "Levure chimique", "Sucre glace"],
      [Language.EN]: ["500g ground almonds", "200g sugar", "3 eggs", "Butter", "Lemon zest", "Baking powder", "Powdered sugar"]
    },
    steps: {
      [Language.AR]: [
        "نخلط اللوز مع السكر والقشور والخميرة.",
        "نضيف الزبدة والبيض تدريجياً حتى نحصل على عجين معلك.",
        "نشكل كويرات ونفندها في السكر الصقيل.",
        "نضع لوزة في وسط كل حبة ونطهوها في الفرن."
      ],
      [Language.FR]: [
        "Mélanger amandes, sucre, zeste et levure.",
        "Ajouter beurre et œufs.",
        "Former des boules, rouler dans le sucre glace.",
        "Placer une amande au centre et cuire."
      ],
      [Language.EN]: [
        "Mix almonds, sugar, zest, and baking powder.",
        "Add butter and eggs.",
        "Form balls, roll in powdered sugar.",
        "Place an almond in the center and bake."
      ]
    },
    tips: {
      [Language.AR]: ["يجب ألا تطهى كثيراً لتبقى معلكة."],
      [Language.FR]: ["Ne pas trop cuire."],
      [Language.EN]: ["Don't overbake to keep it chewy."]
    }
  },
  {
    id: "d17",
    name: {
      [Language.AR]: "حلوى الكوكياج باللوز",
      [Language.FR]: "Coquillages aux Amandes",
      [Language.EN]: "Almond Shells"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى بشكل صدفة محشوة بعقدة اللوز، جميلة جداً في التقديم. المستوى: متوسط.",
      [Language.FR]: "Pâtisserie en forme de coquillage farcie aux amandes. Niveau: Moyen.",
      [Language.EN]: "Shell-shaped pastry stuffed with almond paste. Level: Medium."
    },
    prepTime: {
      [Language.AR]: "45 دقيقة تحضير + 15 دقيقة طهي",
      [Language.FR]: "45 min prép + 15 min cuisson",
      [Language.EN]: "45 min prep + 15 min cook"
    },
    servings: 20,
    ingredients: {
      [Language.AR]: ["عجين كعب الغزال", "عقدة اللوز ملونة", "مرشم بشكل صدفة"],
      [Language.FR]: ["Pâte fine", "Pâte d'amande colorée", "Emporte-pièce coquillage"],
      [Language.EN]: ["Thin dough", "Colored almond paste", "Shell mold"]
    },
    steps: {
      [Language.AR]: [
        "نبسط العجين رقيقاً.",
        "نضع فوقه طبقة من عقدة اللوز.",
        "نغطي بطبقة أخرى من العجين ونطبع بالمرشم.",
        "تطهى في فرن هادئ."
      ],
      [Language.FR]: [
        "Étaler la pâte finement.",
        "Placer une couche d'amande.",
        "Couvrir de pâte et découper.",
        "Cuire au four doux."
      ],
      [Language.EN]: [
        "Roll out dough thinly.",
        "Place a layer of almond paste.",
        "Cover with another dough layer and mold.",
        "Bake in a low oven."
      ]
    },
    tips: {
      [Language.AR]: ["يمكن تلوين عقدة اللوز بألوان زاهية."],
      [Language.FR]: ["Colorer la pâte d'amande."],
      [Language.EN]: ["The almond paste can be brightly colored."]
    }
  },
  {
    id: "d18",
    name: {
      [Language.AR]: "حلوى صابلي بريستيج",
      [Language.FR]: "Sablé Prestige",
      [Language.EN]: "Prestige Sablé"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "بسكويت صابلي مزين بالشكلاط والمكسرات، عصري وراقي. المستوى: متوسط.",
      [Language.FR]: "Biscuits sablés décorés de chocolat et fruits secs. Niveau: Moyen.",
      [Language.EN]: "Sablé biscuits decorated with chocolate and nuts. Level: Medium."
    },
    prepTime: {
      [Language.AR]: "60 دقيقة تحضير + 15 دقيقة طهي",
      [Language.FR]: "60 min prép + 15 min cuisson",
      [Language.EN]: "60 min prep + 15 min cook"
    },
    servings: 30,
    ingredients: {
      [Language.AR]: ["250 غرام زبدة", "كأس سكر", "بيضتان", "دقيق", "شكلاط للتزيين", "كراميل"],
      [Language.FR]: ["250g beurre", "Sucre", "2 œufs", "Farine", "Chocolat", "Caramel"],
      [Language.EN]: ["250g butter", "Sugar", "2 eggs", "Flour", "Chocolate", "Caramel"]
    },
    steps: {
      [Language.AR]: [
        "نحضر عجين الصابلي ونقطعه أشكالاً.",
        "نطهوه في الفرن.",
        "نزين بالشكلاط المصبوب في قوالب السيليكون.",
        "نلصق بالكراميل."
      ],
      [Language.FR]: [
        "Préparer la pâte sablée et découper.",
        "Cuire au four.",
        "Décorer avec du chocolat moulé.",
        "Coller au caramel."
      ],
      [Language.EN]: [
        "Prepare sablé dough and cut into shapes.",
        "Bake in the oven.",
        "Decorate with molded chocolate.",
        "Stick with caramel."
      ]
    },
    tips: {
      [Language.AR]: ["لا تدلك عجين الصابلي لكي لا يتقلص."],
      [Language.FR]: ["Ne pas pétrir la pâte."],
      [Language.EN]: ["Don't over-knead the dough."]
    }
  },
  {
    id: "d19",
    name: {
      [Language.AR]: "حلوى عين الجمل (الكركاعة)",
      [Language.FR]: "Gâteau Noix",
      [Language.EN]: "Walnut Cake"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى بشكل حبة جوز محشوة بالكراميل. المستوى: متوسط.",
      [Language.FR]: "Pâtisserie en forme de noix farcie au caramel. Niveau: Moyen.",
      [Language.EN]: "Walnut-shaped pastry stuffed with caramel. Level: Medium."
    },
    prepTime: {
      [Language.AR]: "40 دقيقة تحضير + 20 دقيقة طهي",
      [Language.FR]: "40 min prép + 20 min cuisson",
      [Language.EN]: "40 min prep + 20 min cook"
    },
    servings: 20,
    ingredients: {
      [Language.AR]: ["عجين الصابلي", "كراميل كثيف", "قالب عين الجمل"],
      [Language.FR]: ["Pâte sablée", "Caramel", "Moule noix"],
      [Language.EN]: ["Sablé dough", "Caramel", "Walnut mold"]
    },
    steps: {
      [Language.AR]: [
        "نطهو أنصاف الجوز في القالب الخاص.",
        "نحشوها بالكراميل.",
        "نلصق كل نصفين معاً."
      ],
      [Language.FR]: [
        "Cuire les coques dans le moule.",
        "Farcir de caramel.",
        "Coller les deux moitiés."
      ],
      [Language.EN]: [
        "Bake shells in the mold.",
        "Fill with caramel.",
        "Stick halves together."
      ]
    },
    tips: {
      [Language.AR]: ["يمكن إضافة جوزة حقيقية في الداخل."],
      [Language.FR]: ["Ajouter une noix à l'intérieur."],
      [Language.EN]: ["A real walnut can be added inside."]
    }
  },
  {
    id: "d20",
    name: {
      [Language.AR]: "حلوى التاج باللوز",
      [Language.FR]: "Gâteau Couronne",
      [Language.EN]: "Crown Cake"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى دائرية مزينة باللوز المهرمش. المستوى: سهل.",
      [Language.FR]: "Pâtisserie ronde décorée d'amandes concassées. Niveau: Facile.",
      [Language.EN]: "Round pastry decorated with crushed almonds. Level: Easy."
    },
    prepTime: {
      [Language.AR]: "20 دقيقة تحضير + 15 دقيقة طهي",
      [Language.FR]: "20 min prép + 15 min cuisson",
      [Language.EN]: "20 min prep + 15 min cook"
    },
    servings: 25,
    ingredients: {
      [Language.AR]: ["زبدة، سكر، بيض، دقيق", "لوز مهرمش", "مربى"],
      [Language.FR]: ["Beurre, sucre, œuf, farine", "Amandes concassées", "Confiture"],
      [Language.EN]: ["Butter, sugar, egg, flour", "Crushed almonds", "Jam"]
    },
    steps: {
      [Language.AR]: [
        "نشكل كويرات ونغطسها في بياض البيض ثم اللوز.",
        "نصنع ثقباً في الوسط.",
        "نطهوها ونملأ الثقب بالمربى."
      ],
      [Language.FR]: [
        "Former des boules, tremper dans le blanc d'œuf puis les amandes.",
        "Faire un trou au centre.",
        "Cuire et remplir de confiture."
      ],
      [Language.EN]: [
        "Form balls, dip in egg white then almonds.",
        "Make a hole in the center.",
        "Bake and fill the hole with jam."
      ]
    },
    tips: {
      [Language.AR]: ["استخدم مربى الفراولة للون جميل."],
      [Language.FR]: ["Confiture de fraise pour la couleur."],
      [Language.EN]: ["Use strawberry jam for a nice color."]
    }
  },
  {
    id: "d21",
    name: {
      [Language.AR]: "حلوى السيجار باللوز",
      [Language.FR]: "Cigares aux Amandes",
      [Language.EN]: "Almond Cigars"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "أصابع مقرمشة محشوة باللوز ومعسلة. المستوى: سهل.",
      [Language.FR]: "Boudins croustillants farcis aux amandes et miellés. Niveau: Facile.",
      [Language.EN]: "Crunchy logs stuffed with almonds and honeyed. Level: Easy."
    },
    prepTime: {
      [Language.AR]: "30 دقيقة تحضير + 15 دقيقة طهي",
      [Language.FR]: "30 min prép + 15 min cuisson",
      [Language.EN]: "30 min prep + 15 min cook"
    },
    servings: 20,
    ingredients: {
      [Language.AR]: ["ورقة البسطيلة", "عقدة اللوز", "زيت للقلي", "عسل"],
      [Language.FR]: ["Feuilles de pastilla", "Pâte d'amande", "Huile", "Miel"],
      [Language.EN]: ["Pastilla sheets", "Almond paste", "Oil", "Honey"]
    },
    steps: {
      [Language.AR]: [
        "نلف الورقة حول أصابع اللوز.",
        "نقليها في الزيت.",
        "نغطسها في العسل."
      ],
      [Language.FR]: [
        "Rouler la feuille autour de l'amande.",
        "Frire.",
        "Plonger dans le miel."
      ],
      [Language.EN]: [
        "Roll the sheet around almond logs.",
        "Fry in oil.",
        "Dip in honey."
      ]
    },
    tips: {
      [Language.AR]: ["يمكن رشها بالزنجلان."],
      [Language.FR]: ["Saupoudrer de sésame."],
      [Language.EN]: ["Can be sprinkled with sesame."]
    }
  },
  {
    id: "d22",
    name: {
      [Language.AR]: "حلوى الوردة باللوز",
      [Language.FR]: "Rose aux Amandes",
      [Language.EN]: "Almond Rose"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى بشكل وردة جميلة محشوة باللوز. المستوى: متوسط.",
      [Language.FR]: "Pâtisserie en forme de rose farcie aux amandes. Niveau: Moyen.",
      [Language.EN]: "Rose-shaped pastry stuffed with almonds. Level: Medium."
    },
    prepTime: {
      [Language.AR]: "45 دقيقة تحضير + 15 دقيقة طهي",
      [Language.FR]: "45 min prép + 15 min cuisson",
      [Language.EN]: "45 min prep + 15 min cook"
    },
    servings: 15,
    ingredients: {
      [Language.AR]: ["عجين ملون", "عقدة اللوز", "منقاش"],
      [Language.FR]: ["Pâte colorée", "Pâte d'amande", "Pince"],
      [Language.EN]: ["Colored dough", "Almond paste", "Tweezers"]
    },
    steps: {
      [Language.AR]: [
        "نشكل وردة من العجين.",
        "نضع اللوز في الوسط.",
        "ننقش الجوانب."
      ],
      [Language.FR]: [
        "Former une rose.",
        "Placer l'amande au centre.",
        "Décorer à la pince."
      ],
      [Language.EN]: [
        "Shape a rose from dough.",
        "Place almond in the center.",
        "Decorate the sides."
      ]
    },
    tips: {
      [Language.AR]: ["استخدم ألواناً طبيعية."],
      [Language.FR]: ["Utiliser des colorants naturels."],
      [Language.EN]: ["Use natural colors."]
    }
  },
  {
    id: "d23",
    name: {
      [Language.AR]: "حلوى الفواكه الجافة",
      [Language.FR]: "Gâteau Fruits Secs",
      [Language.EN]: "Dried Fruit Cake"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى غنية بالمكسرات والفواكه الجافة. المستوى: سهل.",
      [Language.FR]: "Pâtisserie riche en fruits secs. Niveau: Facile.",
      [Language.EN]: "Pastry rich in dried fruits. Level: Easy."
    },
    prepTime: {
      [Language.AR]: "20 دقيقة تحضير + 10 دقائق طهي",
      [Language.FR]: "20 min prép + 10 min cuisson",
      [Language.EN]: "20 min prep + 10 min cook"
    },
    servings: 20,
    ingredients: {
      [Language.AR]: ["مكسرات مشكلة", "عسل", "شكلاط"],
      [Language.FR]: ["Mélange de noix", "Miel", "Chocolat"],
      [Language.EN]: ["Mixed nuts", "Honey", "Chocolate"]
    },
    steps: {
      [Language.AR]: [
        "نخلط المكسرات مع العسل.",
        "نضعها في كويغطات.",
        "نزين بخطوط الشكلاط."
      ],
      [Language.FR]: [
        "Mélanger noix et miel.",
        "Placer dans des caissettes.",
        "Décorer de chocolat."
      ],
      [Language.EN]: [
        "Mix nuts and honey.",
        "Place in paper cups.",
        "Decorate with chocolate."
      ]
    },
    tips: {
      [Language.AR]: ["حمر المكسرات أولاً."],
      [Language.FR]: ["Griller les noix d'abord."],
      [Language.EN]: ["Toast the nuts first."]
    }
  },
  {
    id: "d24",
    name: {
      [Language.AR]: "حلوى الكوك والشكلاط",
      [Language.FR]: "Coco Chocolat",
      [Language.EN]: "Coconut Chocolate"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "كرات جوز الهند مغطاة بالشكلاط. المستوى: سهل جداً.",
      [Language.FR]: "Boules de coco nappées de chocolat. Niveau: Très Facile.",
      [Language.EN]: "Coconut balls covered in chocolate. Level: Very Easy."
    },
    prepTime: {
      [Language.AR]: "15 دقيقة تحضير",
      [Language.FR]: "15 min prép",
      [Language.EN]: "15 min prep"
    },
    servings: 15,
    ingredients: {
      [Language.AR]: ["جوز هند", "حليب مكثف", "شكلاط"],
      [Language.FR]: ["Noix de coco", "Lait concentré", "Chocolat"],
      [Language.EN]: ["Coconut", "Condensed milk", "Chocolate"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الكوك والحليب.",
        "نشكل كرات.",
        "نغطس في الشكلاط."
      ],
      [Language.FR]: [
        "Mélanger coco et lait.",
        "Former des boules.",
        "Tremper dans le chocolat."
      ],
      [Language.EN]: [
        "Mix coconut and milk.",
        "Form balls.",
        "Dip in chocolate."
      ]
    },
    tips: {
      [Language.AR]: ["بردها جيداً."],
      [Language.FR]: ["Bien refroidir."],
      [Language.EN]: ["Cool well."]
    }
  },
  {
    id: "d25",
    name: {
      [Language.AR]: "حلوى اللوز والكراميل",
      [Language.FR]: "Amande Caramel",
      [Language.EN]: "Almond Caramel"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى راقية باللوز والكراميل. المستوى: متوسط.",
      [Language.FR]: "Pâtisserie raffinée amande et caramel. Niveau: Moyen.",
      [Language.EN]: "Refined almond and caramel pastry. Level: Medium."
    },
    prepTime: {
      [Language.AR]: "30 دقيقة تحضير",
      [Language.FR]: "30 min prép",
      [Language.EN]: "30 min prep"
    },
    servings: 20,
    ingredients: {
      [Language.AR]: ["لوز", "كراميل", "بسكويت مطحون"],
      [Language.FR]: ["Amande", "Caramel", "Biscuits moulus"],
      [Language.EN]: ["Almond", "Caramel", "Ground biscuits"]
    },
    steps: {
      [Language.AR]: [
        "نخلط المكونات.",
        "نشكل أشكالاً.",
        "نزين باللوز."
      ],
      [Language.FR]: [
        "Mélanger les ingrédients.",
        "Façonner.",
        "Décorer d'amandes."
      ],
      [Language.EN]: [
        "Mix ingredients.",
        "Shape.",
        "Garnish with almonds."
      ]
    },
    tips: {
      [Language.AR]: ["استخدم كراميل منزلي."],
      [Language.FR]: ["Caramel maison."],
      [Language.EN]: ["Use homemade caramel."]
    }
  },
  {
    id: "d26",
    name: {
      [Language.AR]: "حلوى الجوز والشكلاط",
      [Language.FR]: "Noix Chocolat",
      [Language.EN]: "Walnut Chocolate"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "كرات الجوز والشكلاط. المستوى: سهل.",
      [Language.FR]: "Boules noix et chocolat. Niveau: Facile.",
      [Language.EN]: "Walnut and chocolate balls. Level: Easy."
    },
    prepTime: {
      [Language.AR]: "20 دقيقة تحضير",
      [Language.FR]: "20 min prép",
      [Language.EN]: "20 min prep"
    },
    servings: 15,
    ingredients: {
      [Language.AR]: ["جوز مطحون", "شكلاط مذاب", "بسكويت"],
      [Language.FR]: ["Noix moulues", "Chocolat fondu", "Biscuits"],
      [Language.EN]: ["Ground walnuts", "Melted chocolate", "Biscuits"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الكل.",
        "نشكل كرات.",
        "نفند في الجوز."
      ],
      [Language.FR]: [
        "Tout mélanger.",
        "Former des boules.",
        "Rouler dans la noix."
      ],
      [Language.EN]: [
        "Mix everything.",
        "Form balls.",
        "Roll in walnuts."
      ]
    },
    tips: {
      [Language.AR]: ["أضف قليل من القرفة."],
      [Language.FR]: ["Ajouter de la cannelle."],
      [Language.EN]: ["Add a little cinnamon."]
    }
  },
  {
    id: "d27",
    name: {
      [Language.AR]: "حلوى السمسم والعسل",
      [Language.FR]: "Sésame Miel",
      [Language.EN]: "Sesame Honey"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى مقرمشة بالسمسم والعسل. المستوى: سهل.",
      [Language.FR]: "Pâtisserie croquante sésame et miel. Niveau: Facile.",
      [Language.EN]: "Crunchy sesame and honey pastry. Level: Easy."
    },
    prepTime: {
      [Language.AR]: "15 دقيقة تحضير",
      [Language.FR]: "15 min prép",
      [Language.EN]: "15 min prep"
    },
    servings: 20,
    ingredients: {
      [Language.AR]: ["سمسم محمر", "عسل", "فول سوداني"],
      [Language.FR]: ["Sésame grillé", "Miel", "Cacahuètes"],
      [Language.EN]: ["Toasted sesame", "Honey", "Peanuts"]
    },
    steps: {
      [Language.AR]: [
        "نخلط المكونات.",
        "نبسط ونقطع.",
        "نتركها تبرد."
      ],
      [Language.FR]: [
        "Mélanger.",
        "Étaler et couper.",
        "Refroidir."
      ],
      [Language.EN]: [
        "Mix.",
        "Spread and cut.",
        "Cool down."
      ]
    },
    tips: {
      [Language.AR]: ["قطعها وهي دافئة."],
      [Language.FR]: ["Couper tiède."],
      [Language.EN]: ["Cut while warm."]
    }
  },
  {
    id: "d28",
    name: {
      [Language.AR]: "حلوى التين والجوز",
      [Language.FR]: "Figue Noix",
      [Language.EN]: "Fig & Walnut"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى صحية بالتين المجفف والجوز. المستوى: سهل.",
      [Language.FR]: "Pâtisserie saine figues et noix. Niveau: Facile.",
      [Language.EN]: "Healthy fig and walnut pastry. Level: Easy."
    },
    prepTime: {
      [Language.AR]: "20 دقيقة تحضير",
      [Language.FR]: "20 min prép",
      [Language.EN]: "20 min prep"
    },
    servings: 15,
    ingredients: {
      [Language.AR]: ["تين مجفف", "جوز", "ماء زهر"],
      [Language.FR]: ["Figues séchées", "Noix", "Eau de fleur d'oranger"],
      [Language.EN]: ["Dried figs", "Walnuts", "Orange blossom water"]
    },
    steps: {
      [Language.AR]: [
        "نطحن التين.",
        "نحشو بالجوز.",
        "نشكل كرات."
      ],
      [Language.FR]: [
        "Mouler les figues.",
        "Farcir de noix.",
        "Former des boules."
      ],
      [Language.EN]: [
        "Grind figs.",
        "Stuff with walnuts.",
        "Form balls."
      ]
    },
    tips: {
      [Language.AR]: ["بخر التين أولاً."],
      [Language.FR]: ["Cuire les figues à la vapeur."],
      [Language.EN]: ["Steam the figs first."]
    }
  },
  {
    id: "d29",
    name: {
      [Language.AR]: "حلوى الفستق والورد",
      [Language.FR]: "Pistache Rose",
      [Language.EN]: "Pistachio Rose"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى عصرية بالفستق والورد المجفف. المستوى: متوسط.",
      [Language.FR]: "Pâtisserie moderne pistache et rose. Niveau: Moyen.",
      [Language.EN]: "Modern pistachio and rose pastry. Level: Medium."
    },
    prepTime: {
      [Language.AR]: "30 دقيقة تحضير",
      [Language.FR]: "30 min prép",
      [Language.EN]: "30 min prep"
    },
    servings: 15,
    ingredients: {
      [Language.AR]: ["فستق مطحون", "ورد مجفف", "عسل"],
      [Language.FR]: ["Pistache", "Rose séchée", "Miel"],
      [Language.EN]: ["Pistachio", "Dried rose", "Honey"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الفستق والعسل.",
        "نشكل كرات.",
        "نزين بالورد."
      ],
      [Language.FR]: [
        "Mélanger pistache et miel.",
        "Former des boules.",
        "Décorer de roses."
      ],
      [Language.EN]: [
        "Mix pistachio and honey.",
        "Form balls.",
        "Garnish with roses."
      ]
    },
    tips: {
      [Language.AR]: ["استخدم ورد صالح للأكل."],
      [Language.FR]: ["Roses comestibles."],
      [Language.EN]: ["Use edible roses."]
    }
  },
  {
    id: "d30",
    name: {
      [Language.AR]: "حلوى الزنجبيل والقرفة",
      [Language.FR]: "Gingembre Cannelle",
      [Language.EN]: "Ginger Cinnamon"
    },
    category: Category.DESSERTS,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "بسكويت دافئ بالزنجبيل والقرفة. المستوى: سهل.",
      [Language.FR]: "Biscuits gingembre et cannelle. Niveau: Facile.",
      [Language.EN]: "Ginger and cinnamon biscuits. Level: Easy."
    },
    prepTime: {
      [Language.AR]: "20 دقيقة تحضير",
      [Language.FR]: "20 min prép",
      [Language.EN]: "20 min prep"
    },
    servings: 20,
    ingredients: {
      [Language.AR]: ["دقيق", "زنجبيل", "قرفة", "عسل"],
      [Language.FR]: ["Farine", "Gingembre", "Cannelle", "Miel"],
      [Language.EN]: ["Flour", "Ginger", "Cinnamon", "Honey"]
    },
    steps: {
      [Language.AR]: [
        "نخلط المكونات.",
        "نقطع أشكالاً.",
        "نطهو في الفرن."
      ],
      [Language.FR]: [
        "Mélanger.",
        "Découper.",
        "Cuire au four."
      ],
      [Language.EN]: [
        "Mix ingredients.",
        "Cut shapes.",
        "Bake in the oven."
      ]
    },
    tips: {
      [Language.AR]: ["رائعة مع الشاي."],
      [Language.FR]: ["Parfait avec le thé."],
      [Language.EN]: ["Great with tea."]
    }
  }
];
