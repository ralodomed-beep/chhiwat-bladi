import { Category, Recipe, Language } from "../types";
import { saladRecipes } from "./salads";
import { dessertRecipes } from "./desserts";
import { ramadanRecipes } from "./ramadan";

const initialRecipes: Recipe[] = [
  {
    id: "1",
    name: {
      [Language.AR]: "طاجين اللحم بالبرقوق",
      [Language.FR]: "Tajine de Viande aux Pruneaux",
      [Language.EN]: "Meat Tajine with Prunes"
    },
    category: Category.TAJINE,
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "طبق مغربي كلاسيكي يجمع بين ملوحة اللحم وحلاوة البرقوق المعسل واللوز المقرمش.",
      [Language.FR]: "Un plat marocain classique combinant la viande savoureuse avec la douceur des pruneaux caramélisés et le croquant des amandes.",
      [Language.EN]: "A classic Moroccan dish combining savory meat with the sweetness of caramelized prunes and the crunch of fried almonds."
    },
    prepTime: {
      [Language.AR]: "90 دقيقة",
      [Language.FR]: "90 min",
      [Language.EN]: "90 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: [
        "1 كيلو لحم غنم",
        "250 غرام برقوق مجفف",
        "100 غرام لوز مقلي",
        "2 بصلات مفرومة",
        "ملعقة كبيرة زنجبيل",
        "ملعقة صغيرة كركم",
        "عود قرفة",
        "زعفران حر",
        "ملعقة كبيرة عسل"
      ],
      [Language.FR]: [
        "1 kg de viande d'agneau",
        "250 g de pruneaux séchés",
        "100 g d'amandes frites",
        "2 oignons hachés",
        "1 c.à.s de gingembre",
        "1 c.à.c de curcuma",
        "Bâton de cannelle",
        "Safran pur",
        "1 c.à.s de miel"
      ],
      [Language.EN]: [
        "1 kg lamb meat",
        "250 g dried prunes",
        "100 g fried almonds",
        "2 chopped onions",
        "1 tbsp ginger",
        "1 tsp turmeric",
        "Cinnamon stick",
        "Pure saffron",
        "1 tbsp honey"
      ]
    },
    steps: {
      [Language.AR]: [
        "في طنجرة، نضع اللحم مع البصل والتوابل والزيت والماء ونتركه ينضج على نار هادئة.",
        "في كسرولة، نسلق البرقوق في الماء ثم نضيف له القرفة والسكر أو العسل ليتحمر.",
        "عند نضج اللحم، نضعه في طبق التقديم ونزينه بالبرقوق واللوز المقلي."
      ],
      [Language.FR]: [
        "Dans une marmite, mettre la viande avec l'oignon, les épices, l'huile et l'eau. Laisser cuire à feu doux.",
        "Dans une casserole, faire bouillir les pruneaux, puis ajouter la cannelle et le miel pour les caraméliser.",
        "Une fois la viande cuite, la disposer dans un plat et décorer avec les pruneaux et les amandes."
      ],
      [Language.EN]: [
        "In a pot, place the meat with onions, spices, oil, and water. Let it cook over low heat.",
        "In a saucepan, boil the prunes, then add cinnamon and honey to caramelize them.",
        "When the meat is cooked, place it on a serving plate and garnish with prunes and fried almonds."
      ]
    },
    tips: {
      [Language.AR]: [
        "استخدم لحم الغنم من جهة 'الملج' للحصول على نتيجة طرية.",
        "تأكد من تعسيل البرقوق جيداً حتى يصبح لونه لامعاً."
      ],
      [Language.FR]: [
        "Utilisez de l'agneau pour un résultat tendre.",
        "Assurez-vous de bien caraméliser les pruneaux jusqu'à ce qu'ils soient brillants."
      ],
      [Language.EN]: [
        "Use lamb shank for a tender result.",
        "Make sure to caramelize the prunes well until they are shiny."
      ]
    }
  },
  {
    id: "2",
    name: {
      [Language.AR]: "الكسكس المغربي بالخضر السبع",
      [Language.FR]: "Couscous Marocain aux Sept Légumes",
      [Language.EN]: "Moroccan Couscous with Seven Vegetables"
    },
    category: Category.COUSCOUS,
    image: "https://images.unsplash.com/photo-1585932231552-29877a5b50ec?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "الطبق الوطني المغربي، يقدم عادة يوم الجمعة، غني بالخضار الطازجة واللحم.",
      [Language.FR]: "Le plat national marocain, traditionnellement servi le vendredi, riche en légumes frais et en viande.",
      [Language.EN]: "The Moroccan national dish, traditionally served on Fridays, rich in fresh vegetables and meat."
    },
    prepTime: {
      [Language.AR]: "120 دقيقة",
      [Language.FR]: "120 min",
      [Language.EN]: "120 min"
    },
    servings: 6,
    ingredients: {
      [Language.AR]: [
        "1 كيلو كسكس",
        "1 كيلو لحم",
        "خضار مشكلة (جزر، لفت، قرع أحمر، قرع أخضر، ملفوف، باذنجان، فول)",
        "حمص منقوع",
        "بصل وطماطم",
        "بقدونس وقزبر",
        "سمن مغربي",
        "توابل (ملح، فزار، زنجبيل، كركم)"
      ],
      [Language.FR]: [
        "1 kg de couscous",
        "1 kg de viande",
        "Légumes variés (carottes, navets, courge, chou, aubergine, fèves)",
        "Pois chiches trempés",
        "Oignon et tomate",
        "Persil et coriandre",
        "Smen (beurre rance)",
        "Épices (sel, poivre, gingembre, curcuma)"
      ],
      [Language.EN]: [
        "1 kg couscous",
        "1 kg meat",
        "Mixed vegetables (carrots, turnips, pumpkin, zucchini, cabbage, eggplant, fava beans)",
        "Soaked chickpeas",
        "Onion and tomato",
        "Parsley and coriander",
        "Smen (Moroccan clarified butter)",
        "Spices (salt, pepper, ginger, turmeric)"
      ]
    },
    steps: {
      [Language.AR]: [
        "نحضر المرق بوضع اللحم والبصل والتوابل والحمص في البرمة.",
        "نضيف الماء والخضار الصلبة (الجزر واللفت).",
        "نحضر الكسكس بالبخار لثلاث مرات فوق البرمة.",
        "في المرة الأخيرة نضيف الخضار اللينة والسمن.",
        "نسقي الكسكس بالمرق ونرتب الخضار واللحم فوقه."
      ],
      [Language.FR]: [
        "Préparer le bouillon avec la viande, l'oignon, les épices et les pois chiches.",
        "Ajouter l'eau et les légumes durs (carottes, navets).",
        "Cuire le couscous à la vapeur trois fois au-dessus du bouillon.",
        "À la dernière étape, ajouter les légumes tendres et le smen.",
        "Dresser le couscous et disposer les légumes et la viande par-dessus."
      ],
      [Language.EN]: [
        "Prepare the broth with meat, onion, spices, and chickpeas.",
        "Add water and hard vegetables (carrots, turnips).",
        "Steam the couscous three times over the broth.",
        "In the final step, add soft vegetables and smen.",
        "Serve the couscous and arrange vegetables and meat on top."
      ]
    },
    tips: {
      [Language.AR]: [
        "سر الكسكس الناجح هو 'التفويرة' الجيدة ودهنه بالسمن البلدي.",
        "لا تبالغ في سقي الكسكس حتى لا يتعجن."
      ],
      [Language.FR]: [
        "Le secret d'un bon couscous est une bonne cuisson à la vapeur et l'ajout de smen.",
        "Ne pas trop arroser le couscous pour éviter qu'il ne devienne pâteux."
      ],
      [Language.EN]: [
        "The secret to successful couscous is good steaming and adding smen.",
        "Don't over-water the couscous to prevent it from getting mushy."
      ]
    }
  },
  {
    id: "3",
    name: {
      [Language.AR]: "الحريرة المغربية الأصلية",
      [Language.FR]: "Harira Marocaine Authentique",
      [Language.EN]: "Authentic Moroccan Harira"
    },
    category: Category.HARIRA_SOUPS,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "شوربة مغربية غنية بالطماطم والقطاني، تعتبر الوجبة الرئيسية في مائدة الإفطار الرمضانية.",
      [Language.FR]: "Soupe marocaine riche en tomates et légumineuses, plat principal du Ramadan.",
      [Language.EN]: "A rich Moroccan soup with tomatoes and legumes, the main dish of Ramadan break-fast."
    },
    prepTime: {
      [Language.AR]: "60 دقيقة",
      [Language.FR]: "60 min",
      [Language.EN]: "60 min"
    },
    servings: 6,
    ingredients: {
      [Language.AR]: ["حمص منقوع", "عدس", "كرفس وقزبر وبقدونس", "طماطم مطحونة", "قطع لحم صغيرة", "بصل مفروم", "شعرية رقيقة", "دقيق للتدويرة", "توابل (ملح، فلفل، زنجبيل، كركم، سمن)"],
      [Language.FR]: ["Pois chiches", "Lentilles", "Céleri, persil, coriandre", "Tomates mixées", "Viande en dés", "Oignon", "Vermicelles", "Farine", "Épices"],
      [Language.EN]: ["Chickpeas", "Lentils", "Celery, parsley, coriander", "Pureed tomatoes", "Meat cubes", "Onion", "Vermicelli", "Flour", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "في طنجرة الضغط، نضع اللحم والبصل والحمص والعدس والتوابل والماء ونتركها تنضج.",
        "نضيف الطماطم المطحونة والكرفس والأعشاب.",
        "نحضر 'التدويرة' بخلط الدقيق مع الماء ونضيفها تدريجياً مع التحريك المستمر.",
        "نضيف الشعرية والسمن في الأخير ونتركها تغلي قليلاً."
      ],
      [Language.FR]: [
        "Cuire la viande, l'oignon, les pois chiches et les lentilles avec les épices.",
        "Ajouter les tomates et les herbes.",
        "Lier la soupe avec le mélange farine-eau (Tadouira).",
        "Ajouter les vermicelles et le smen à la fin."
      ],
      [Language.EN]: [
        "Cook meat, onion, chickpeas, and lentils with spices.",
        "Add tomatoes and herbs.",
        "Thicken the soup with a flour-water mixture.",
        "Add vermicelli and smen at the end."
      ]
    },
    tips: {
      [Language.AR]: ["سر اللذة في جودة السمن وكمية الكرفس.", "يجب تحريكها باستمرار بعد إضافة الدقيق لكي لا تلتصق."],
      [Language.FR]: ["Le secret est le smen et le céleri.", "Remuer constamment après avoir ajouté la farine."],
      [Language.EN]: ["The secret is the smen and celery.", "Stir constantly after adding the flour mixture."]
    }
  },
  {
    id: "4",
    name: {
      [Language.AR]: "الشاي المغربي بالنعناع",
      [Language.FR]: "Thé à la Menthe Marocain",
      [Language.EN]: "Moroccan Mint Tea"
    },
    category: Category.DRINKS,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "رمز الضيافة المغربية، شاي أخضر منعش بالنعناع الطازج والسكر.",
      [Language.FR]: "Symbole de l'hospitalité marocaine, thé vert à la menthe fraîche.",
      [Language.EN]: "Symbol of Moroccan hospitality, refreshing green tea with fresh mint."
    },
    prepTime: {
      [Language.AR]: "10 دقائق",
      [Language.FR]: "10 min",
      [Language.EN]: "10 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["ملعقتين كبيرتين شاي أخضر (حبوب)", "ربطة نعناع طازج", "قطع سكر حسب الذوق", "ماء مغلي"],
      [Language.FR]: ["2 c.à.s de thé vert", "Menthe fraîche", "Sucre", "Eau bouillante"],
      [Language.EN]: ["2 tbsp green tea", "Fresh mint", "Sugar", "Boiling water"]
    },
    steps: {
      [Language.AR]: [
        "نضع الشاي في البراد ونضيف قليلاً من الماء المغلي لغسله (التشليلة).",
        "نضيف الماء المغلي ونتركه يغلي قليلاً على النار (التشحار).",
        "نضيف السكر والنعناع الطازج.",
        "نخلط الشاي بسكبه في الكأس وإعادته للبراد عدة مرات حتى تظهر الرغوة."
      ],
      [Language.FR]: [
        "Mettre le thé dans la théière et rincer à l'eau bouillante.",
        "Ajouter l'eau et faire bouillir sur le feu.",
        "Ajouter le sucre et la menthe.",
        "Mélanger en versant dans un verre et en remettant dans la théière."
      ],
      [Language.EN]: [
        "Place tea in the teapot and rinse with boiling water.",
        "Add water and simmer on the stove.",
        "Add sugar and mint.",
        "Mix by pouring into a glass and back into the teapot several times."
      ]
    },
    tips: {
      [Language.AR]: ["استخدم نعناعاً طازجاً جداً للحصول على أفضل نكهة.", "رفع البراد عالياً عند السكب يساعد في تكوين الرغوة الشهيرة."],
      [Language.FR]: ["Utiliser de la menthe très fraîche.", "Verser de haut pour créer de la mousse."],
      [Language.EN]: ["Use very fresh mint.", "Pour from a height to create the famous foam."]
    }
  },
  {
    id: "5",
    name: {
      [Language.AR]: "المسمن المغربي (الرغايف)",
      [Language.FR]: "Msemmen (Crêpes Feuilletées)",
      [Language.EN]: "Msemmen (Moroccan Flatbread)"
    },
    category: Category.RAMADAN,
    image: "https://images.unsplash.com/photo-1599121106328-907003214ab9?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "فطائر مغربية مربعة الشكل، مورقة ومقرمشة، تقدم في الفطور والكسكروط.",
      [Language.FR]: "Crêpes feuilletées carrées, servies au petit-déjeuner ou au goûter.",
      [Language.EN]: "Square laminated flatbreads, served for breakfast or snack."
    },
    prepTime: {
      [Language.AR]: "45 دقيقة",
      [Language.FR]: "45 min",
      [Language.EN]: "45 min"
    },
    servings: 8,
    ingredients: {
      [Language.AR]: ["دقيق أبيض", "فينو (سميد ناعم جداً)", "ملح", "ماء دافئ", "زبدة وزيت للتوريق"],
      [Language.FR]: ["Farine", "Semoule fine", "Sel", "Eau tiède", "Beurre et huile"],
      [Language.EN]: ["Flour", "Fine semolina", "Salt", "Warm water", "Butter and oil"]
    },
    steps: {
      [Language.AR]: [
        "نعجن الدقيق والسميد والملح والماء حتى نحصل على عجين لين ومدلوك جيداً.",
        "نشكل كويرات صغيرة وندهنها بالزيت.",
        "نبسط الكرة حتى تصبح رقيقة جداً، ندهنها بالزبدة ونرش السميد ثم نطويها على شكل مربع.",
        "نطهوها في مقلاة ساخنة من الجهتين حتى تتحمر."
      ],
      [Language.FR]: [
        "Pétrir la pâte jusqu'à ce qu'elle soit souple.",
        "Former des boules et huiler.",
        "Étaler finement, beurrer, saupoudrer de semoule et plier en carré.",
        "Cuire à la poêle des deux côtés."
      ],
      [Language.EN]: [
        "Knead the dough until soft.",
        "Form balls and oil them.",
        "Roll out thinly, butter, sprinkle semolina, and fold into a square.",
        "Cook in a pan on both sides until golden."
      ]
    },
    tips: {
      [Language.AR]: ["الدلك الجيد هو سر التوريق.", "اترك العجين يرتاح بين المراحل ليسهل بسطه."],
      [Language.FR]: ["Bien pétrir pour le feuilletage.", "Laisser reposer la pâte."],
      [Language.EN]: ["Knead well for lamination.", "Let the dough rest between stages."]
    }
  }
];

export const recipes: Recipe[] = [...initialRecipes, ...saladRecipes, ...dessertRecipes, ...ramadanRecipes];
