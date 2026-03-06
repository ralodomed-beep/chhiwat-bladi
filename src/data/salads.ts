import { Category, Recipe, Language } from "../types";

export const saladRecipes: Recipe[] = [
  {
    id: "s1",
    name: {
      [Language.AR]: "الزعلوك المغربي الأصيل",
      [Language.FR]: "Zaalouk d'Aubergines",
      [Language.EN]: "Authentic Moroccan Zaalouk"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1590577976322-3d2d6e2130ee?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة دافئة من الباذنجان والطماطم المشوية مع التوابل المغربية، تعتبر من أشهر المقبلات.",
      [Language.FR]: "Une salade tiède d'aubergines et de tomates grillées aux épices marocaines.",
      [Language.EN]: "A warm salad of eggplant and roasted tomatoes with Moroccan spices."
    },
    prepTime: {
      [Language.AR]: "30 دقيقة",
      [Language.FR]: "30 min",
      [Language.EN]: "30 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["2 حبات باذنجان كبيرة", "3 حبات طماطم ناضجة", "3 فصوص ثوم مفروم", "نصف كأس زيت زيتون", "ملعقة كبيرة تحميرة (بابريكا)", "ملعقة صغيرة كمون", "ملح حسب الذوق", "قزبر وبقدونس مفروم", "عصير نصف ليمونة"],
      [Language.FR]: ["2 grandes aubergines", "3 tomates mûres", "3 gousses d'ail", "1/2 tasse d'huile d'olive", "1 c.à.s de paprika", "1 c.à.c de cumin", "Sel", "Coriandre et persil", "Jus de citron"],
      [Language.EN]: ["2 large eggplants", "3 ripe tomatoes", "3 garlic cloves", "1/2 cup olive oil", "1 tbsp paprika", "1 tsp cumin", "Salt", "Coriander and parsley", "Lemon juice"]
    },
    steps: {
      [Language.AR]: [
        "نشوي الباذنجان أو نقطعه مكعبات ونبخرها.",
        "في مقلاة، نضع الطماطم المقطعة مع الزيت والثوم والتوابل.",
        "نضيف الباذنجان ونمعكه جيداً مع الخليط.",
        "نستمر في التحريك حتى يتشرب الباذنجان كل السوائل ويتحمر.",
        "نضيف القزبر والبقدونس وعصير الليمون في الأخير."
      ],
      [Language.FR]: [
        "Griller les aubergines ou les couper en dés et les cuire à la vapeur.",
        "Dans une poêle, faire revenir les tomates avec l'huile, l'ail et les épices.",
        "Ajouter les aubergines et les écraser avec le mélange.",
        "Remuer jusqu'à ce que le mélange soit bien réduit.",
        "Ajouter les herbes et le citron à la fin."
      ],
      [Language.EN]: [
        "Grill the eggplants or cube and steam them.",
        "In a pan, sauté tomatoes with oil, garlic, and spices.",
        "Add eggplants and mash them into the mixture.",
        "Stir until the liquid is absorbed and the mixture is well-cooked.",
        "Add herbs and lemon juice at the end."
      ]
    },
    tips: {
      [Language.AR]: ["شوي الباذنجان يعطي نكهة مدخنة رائعة.", "لا تضف الماء أبداً أثناء الطهي."],
      [Language.FR]: ["Griller les aubergines donne un goût fumé.", "Ne jamais ajouter d'eau."],
      [Language.EN]: ["Grilling the eggplant adds a great smoky flavor.", "Never add water during cooking."]
    }
  },
  {
    id: "s2",
    name: {
      [Language.AR]: "التكتوكة بالفلفل والطماطم",
      [Language.FR]: "Tektouka aux Poivrons",
      [Language.EN]: "Tektouka (Pepper & Tomato)"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة مغربية تقليدية تعتمد على الفلفل المشوي والطماطم، تتميز بمذاقها المنعش.",
      [Language.FR]: "Une salade traditionnelle à base de poivrons grillés et de tomates.",
      [Language.EN]: "A traditional salad based on roasted peppers and tomatoes."
    },
    prepTime: {
      [Language.AR]: "25 دقيقة",
      [Language.FR]: "25 min",
      [Language.EN]: "25 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["3 حبات فلفل أخضر مشوي", "3 حبات طماطم", "2 فصوص ثوم", "ملعقة صغيرة كمون", "ملعقة كبيرة بابريكا", "زيت زيتون", "ملح وفلفل أسود"],
      [Language.FR]: ["3 poivrons grillés", "3 tomates", "2 gousses d'ail", "1 c.à.c de cumin", "1 c.à.s de paprika", "Huile d'olive", "Sel et poivre"],
      [Language.EN]: ["3 roasted green peppers", "3 tomatoes", "2 garlic cloves", "1 tsp cumin", "1 tbsp paprika", "Olive oil", "Salt and pepper"]
    },
    steps: {
      [Language.AR]: [
        "نشوي الفلفل ونقشره ثم نقطعه قطعاً صغيرة.",
        "نقشر الطماطم ونقطعها مكعبات ونضعها في مقلاة مع الزيت والثوم.",
        "نضيف التوابل ونترك الطماطم تطهى قليلاً.",
        "نضيف الفلفل المقطع ونحرك الكل حتى ينسجم.",
        "نتركها على النار حتى تتبخر السوائل تماماً."
      ],
      [Language.FR]: [
        "Griller, peler et couper les poivrons.",
        "Peler et couper les tomates, les mettre dans une poêle avec l'ail et l'huile.",
        "Ajouter les épices et cuire les tomates.",
        "Ajouter les poivrons et mélanger.",
        "Cuire jusqu'à évaporation du liquide."
      ],
      [Language.EN]: [
        "Grill, peel, and chop the peppers.",
        "Peel and cube tomatoes, place in a pan with garlic and oil.",
        "Add spices and cook the tomatoes.",
        "Add the peppers and mix well.",
        "Cook until the liquid has evaporated."
      ]
    },
    tips: {
      [Language.AR]: ["يفضل شوي الفلفل على الفحم لنكهة أقوى.", "تقدم دافئة أو باردة حسب الرغبة."],
      [Language.FR]: ["Griller sur charbon pour plus de goût.", "Servir tiède ou froid."],
      [Language.EN]: ["Grill on charcoal for better flavor.", "Serve warm or cold."]
    }
  },
  {
    id: "s3",
    name: {
      [Language.AR]: "سلطة الجزر بالشرمولة",
      [Language.FR]: "Salade de Carottes à la Chermoula",
      [Language.EN]: "Carrot Salad with Chermoula"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "جزر مسلوق ومتبل بخلطة الشرمولة المغربية الشهيرة (ثوم، قزبر، كمون، ليمون).",
      [Language.FR]: "Carottes cuites marinées à la chermoula marocaine.",
      [Language.EN]: "Cooked carrots marinated in Moroccan chermoula."
    },
    prepTime: {
      [Language.AR]: "20 دقيقة",
      [Language.FR]: "20 min",
      [Language.EN]: "20 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["500 غرام جزر", "3 فصوص ثوم", "ملعقة كبيرة كمون", "ملعقة كبيرة بابريكا", "عصير ليمون", "زيت زيتون", "قزبر وبقدونس مفروم"],
      [Language.FR]: ["500g de carottes", "3 gousses d'ail", "1 c.à.s de cumin", "1 c.à.s de paprika", "Jus de citron", "Huile d'olive", "Herbes"],
      [Language.EN]: ["500g carrots", "3 garlic cloves", "1 tbsp cumin", "1 tbsp paprika", "Lemon juice", "Olive oil", "Herbs"]
    },
    steps: {
      [Language.AR]: [
        "نقطع الجزر دوائر ونسلقه في ماء مملح.",
        "نحضر الشرمولة بخلط الثوم المهروس مع التوابل والزيت والليمون والأعشاب.",
        "نصفي الجزر ونضيف له الشرمولة وهو لا يزال دافئاً.",
        "نحرك جيداً ونتركه يتشرب النكهة."
      ],
      [Language.FR]: [
        "Couper et bouillir les carottes.",
        "Préparer la chermoula avec l'ail, les épices, l'huile et le citron.",
        "Mélanger les carottes avec la marinade pendant qu'elles sont tièdes."
      ],
      [Language.EN]: [
        "Slice and boil carrots in salted water.",
        "Prepare chermoula by mixing garlic, spices, oil, and lemon.",
        "Mix carrots with the marinade while still warm."
      ]
    },
    tips: {
      [Language.AR]: ["لا تبالغ في سلق الجزر حتى يحافظ على قوامه.", "تزداد لذتها إذا تركت في الثلاجة لساعتين."],
      [Language.FR]: ["Ne pas trop cuire les carottes.", "Meilleur après 2h au frais."],
      [Language.EN]: ["Don't overcook the carrots.", "Tastes better after 2 hours in the fridge."]
    }
  },
  {
    id: "s4",
    name: {
      [Language.AR]: "سلطة البطاطس المغربية",
      [Language.FR]: "Salade de Pommes de Terre",
      [Language.EN]: "Moroccan Potato Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة بسيطة ومغذية من البطاطس المسلوقة مع البصل والبقدونس وزيت الزيتون.",
      [Language.FR]: "Une salade simple de pommes de terre à l'oignon et persil.",
      [Language.EN]: "A simple potato salad with onions and parsley."
    },
    prepTime: {
      [Language.AR]: "25 دقيقة",
      [Language.FR]: "25 min",
      [Language.EN]: "25 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["4 حبات بطاطس كبيرة", "بصلة صغيرة مفرومة", "بقدونس مفروم", "زيت زيتون", "خل أو ليمون", "ملح وفلفل أسود", "كمون"],
      [Language.FR]: ["4 grandes pommes de terre", "1 petit oignon", "Persil", "Huile d'olive", "Vinaigre", "Sel, poivre, cumin"],
      [Language.EN]: ["4 large potatoes", "1 small onion", "Parsley", "Olive oil", "Vinegar", "Salt, pepper, cumin"]
    },
    steps: {
      [Language.AR]: [
        "نسلق البطاطس في ماء مملح ثم نقشرها ونقطعها مكعبات.",
        "نضيف البصل المفروم والبقدونس.",
        "نتبل بالزيت والخل والملح والفلفل والكمون.",
        "نخلط الكل بلطف حتى لا تتكسر حبات البطاطس."
      ],
      [Language.FR]: [
        "Bouillir, peler et couper les pommes de terre.",
        "Ajouter l'oignon et le persil.",
        "Assaisonner avec l'huile, le vinaigre et les épices.",
        "Mélanger délicatement."
      ],
      [Language.EN]: [
        "Boil, peel, and cube the potatoes.",
        "Add chopped onion and parsley.",
        "Season with oil, vinegar, and spices.",
        "Mix gently."
      ]
    },
    tips: {
      [Language.AR]: ["أضف التتبيلة والبطاطس دافئة لتتشرب النكهة أفضل.", "يمكن إضافة الزيتون الأسود للتزيين."],
      [Language.FR]: ["Assaisonner quand c'est tiède.", "Ajouter des olives noires."],
      [Language.EN]: ["Season while warm for better absorption.", "Add black olives for garnish."]
    }
  },
  {
    id: "s5",
    name: {
      [Language.AR]: "سلطة الباربا (الشمندر)",
      [Language.FR]: "Salade de Betteraves",
      [Language.EN]: "Beetroot Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1523596121543-483950254bc9?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة الشمندر المسلوق، تتميز بلونها الجذاب ومذاقها الحلو المنعش.",
      [Language.FR]: "Salade de betteraves bouillies, douce et rafraîchissante.",
      [Language.EN]: "Boiled beetroot salad, sweet and refreshing."
    },
    prepTime: {
      [Language.AR]: "40 دقيقة",
      [Language.FR]: "40 min",
      [Language.EN]: "40 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["3 حبات شمندر كبيرة", "بقدونس مفروم", "زيت زيتون", "خل", "ملح وفلفل أسود", "قليل من السكر (اختياري)"],
      [Language.FR]: ["3 grandes betteraves", "Persil", "Huile d'olive", "Vinaigre", "Sel et poivre"],
      [Language.EN]: ["3 large beetroots", "Parsley", "Olive oil", "Vinegar", "Salt and pepper"]
    },
    steps: {
      [Language.AR]: [
        "نسلق الشمندر في الماء حتى ينضج تماماً.",
        "نقشره ونقطعه مكعبات صغيرة.",
        "نضيف البقدونس والتتبيلة المكونة من الزيت والخل والملح والفلفل.",
        "نقدمها باردة جداً."
      ],
      [Language.FR]: [
        "Bouillir les betteraves jusqu'à tendreté.",
        "Peler et couper en dés.",
        "Ajouter le persil et l'assaisonnement.",
        "Servir très frais."
      ],
      [Language.EN]: [
        "Boil beetroots until tender.",
        "Peel and cube them.",
        "Add parsley and dressing.",
        "Serve very cold."
      ]
    },
    tips: {
      [Language.AR]: ["يمكن إضافة قطع التفاح أو البرتقال لنكهة مميزة.", "سلقها بقشرها يحافظ على لونها القوي."],
      [Language.FR]: ["Ajouter des pommes ou oranges.", "Bouillir avec la peau."],
      [Language.EN]: ["Add apple or orange pieces.", "Boil with skin to keep color."]
    }
  },
  {
    id: "s6",
    name: {
      [Language.AR]: "سلطة الخيار والزعتر باللبن",
      [Language.FR]: "Salade de Concombre au Yaourt",
      [Language.EN]: "Cucumber & Yogurt Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة منعشة جداً، مثالية للأيام الحارة، تجمع بين برودة الخيار ونكهة الزعتر.",
      [Language.FR]: "Une salade très rafraîchissante au concombre et yaourt.",
      [Language.EN]: "A very refreshing cucumber and yogurt salad."
    },
    prepTime: {
      [Language.AR]: "10 دقائق",
      [Language.FR]: "10 min",
      [Language.EN]: "10 min"
    },
    servings: 2,
    ingredients: {
      [Language.AR]: ["2 حبات خيار", "كأس لبن أو زبادي طبيعي", "زعتر جاف", "ملح", "فص ثوم مهروس (اختياري)"],
      [Language.FR]: ["2 concombres", "1 yaourt nature", "Origan séché", "Sel", "Ail"],
      [Language.EN]: ["2 cucumbers", "1 plain yogurt", "Dried thyme", "Salt", "Garlic"]
    },
    steps: {
      [Language.AR]: [
        "نقشر الخيار ونقطعه دوائر رقيقة أو نبشره.",
        "نخلط اللبن مع الملح والثوم والزعتر.",
        "نصب الخليط فوق الخيار ونحرك.",
        "نزين برشة زعفر إضافية."
      ],
      [Language.FR]: [
        "Peler et trancher ou râper les concombres.",
        "Mélanger le yaourt avec le sel, l'ail et l'origan.",
        "Verser sur les concombres.",
        "Décorer avec de l'origan."
      ],
      [Language.EN]: [
        "Peel and slice or grate cucumbers.",
        "Mix yogurt with salt, garlic, and thyme.",
        "Pour over cucumbers.",
        "Garnish with more thyme."
      ]
    },
    tips: {
      [Language.AR]: ["استخدم خياراً بارداً جداً.", "يمكن إضافة النعناع الجاف بدلاً من الزعتر."],
      [Language.FR]: ["Utiliser des concombres bien frais.", "On peut remplacer l'origan par de la menthe."],
      [Language.EN]: ["Use very cold cucumbers.", "Can replace thyme with dried mint."]
    }
  },
  {
    id: "s7",
    name: {
      [Language.AR]: "سلطة البقولة (الخبيزة)",
      [Language.FR]: "Bakoula (Mauve)",
      [Language.EN]: "Bakoula (Mallow Salad)"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1515471204579-475f82e90e27?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة شتوية بامتياز، غنية بالحديد، تحضر من أوراق الخبيزة المطهوة مع الزيتون والليمون المصير.",
      [Language.FR]: "Une salade d'hiver riche en fer, à base de mauve, olives et citron confit.",
      [Language.EN]: "A winter salad rich in iron, made of mallow, olives, and preserved lemon."
    },
    prepTime: {
      [Language.AR]: "45 دقيقة",
      [Language.FR]: "45 min",
      [Language.EN]: "45 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["ربطة خبيزة (بقولة)", "ثوم كثير", "زيت زيتون", "ليمون مصير (مخلل)", "زيتون أحمر", "بابريكا، كمون، سودانية (شطة)", "ملح"],
      [Language.FR]: ["Mauve fraîche", "Ail", "Huile d'olive", "Citron confit", "Olives rouges", "Épices"],
      [Language.EN]: ["Fresh mallow", "Garlic", "Olive oil", "Preserved lemon", "Red olives", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نغسل البقولة جيداً ونقطعها رقيقة ثم نبخرها مع الثوم.",
        "في مقلاة، نضع زيت الزيتون والتوابل والليمون المصير المقطع.",
        "نضيف البقولة المبخرة ونشحرها جيداً حتى تنشف من الماء.",
        "نزين بالزيتون وقطع الليمون."
      ],
      [Language.FR]: [
        "Laver et hacher la mauve, la cuire à la vapeur avec l'ail.",
        "Dans une poêle, mettre l'huile, les épices et le citron confit.",
        "Ajouter la mauve et faire revenir jusqu'à ce qu'elle soit sèche.",
        "Décorer avec des olives."
      ],
      [Language.EN]: [
        "Wash and chop mallow, steam with garlic.",
        "In a pan, add oil, spices, and preserved lemon.",
        "Add mallow and sauté until dry.",
        "Garnish with olives."
      ]
    },
    tips: {
      [Language.AR]: ["سر اللذة في كثرة الثوم وزيت الزيتون.", "يمكن خلطها مع أوراق السبانخ."],
      [Language.FR]: ["Beaucoup d'ail et d'huile d'olive.", "Peut être mélangé avec des épinards."],
      [Language.EN]: ["The secret is lots of garlic and olive oil.", "Can be mixed with spinach."]
    }
  },
  {
    id: "s8",
    name: {
      [Language.AR]: "سلطة الفلفل المشوي والباذنجان",
      [Language.FR]: "Salade Poivrons et Aubergines",
      [Language.EN]: "Roasted Pepper & Eggplant Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "مزيج رائع بين الفلفل والباذنجان المشويين، متبل بالثوم والخل.",
      [Language.FR]: "Mélange de poivrons et aubergines grillés.",
      [Language.EN]: "Mix of roasted peppers and eggplants."
    },
    prepTime: {
      [Language.AR]: "30 دقيقة",
      [Language.FR]: "30 min",
      [Language.EN]: "30 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["2 فلفل أحمر", "2 فلفل أخضر", "1 باذنجان كبيرة", "ثوم مهروس", "خل، زيت زيتون", "ملح، كمون"],
      [Language.FR]: ["Poivrons rouges et verts", "1 aubergine", "Ail", "Vinaigre, huile d'olive", "Sel, cumin"],
      [Language.EN]: ["Red and green peppers", "1 eggplant", "Garlic", "Vinegar, olive oil", "Salt, cumin"]
    },
    steps: {
      [Language.AR]: [
        "نشوي الكل ونقشره ونقطعه طولياً.",
        "نخلط الثوم والزيت والخل والتوابل.",
        "نصب التتبيلة فوق الخضر المشوية ونخلط بلطف."
      ],
      [Language.FR]: [
        "Griller, peler et couper en lanières.",
        "Mélanger l'ail, l'huile, le vinaigre et les épices.",
        "Verser sur les légumes."
      ],
      [Language.EN]: [
        "Grill, peel, and slice into strips.",
        "Mix garlic, oil, vinegar, and spices.",
        "Pour over the vegetables."
      ]
    },
    tips: {
      [Language.AR]: ["لا تغسل الخضر بعد شويها بالماء لكي لا تفقد نكهة الشواء."],
      [Language.FR]: ["Ne pas laver les légumes après les avoir grillés."],
      [Language.EN]: ["Don't wash vegetables after grilling to keep the flavor."]
    }
  },
  {
    id: "s9",
    name: {
      [Language.AR]: "سلطة الأرز والطون (الجاردينيير)",
      [Language.FR]: "Salade de Riz au Thon",
      [Language.EN]: "Rice & Tuna Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1512058560366-cd2427ff6670?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة متكاملة بالأرز والخضر والطون، محبوبة جداً في المناسبات.",
      [Language.FR]: "Salade complète au riz, légumes et thon.",
      [Language.EN]: "Complete rice salad with vegetables and tuna."
    },
    prepTime: {
      [Language.AR]: "30 دقيقة",
      [Language.FR]: "30 min",
      [Language.EN]: "30 min"
    },
    servings: 6,
    ingredients: {
      [Language.AR]: ["2 كؤوس أرز مسلوق", "علبة طون", "جلبانة (بازلاء) مسلوقة", "جزر مكعبات مسلوق", "ذرة معلبة", "مايونيز", "ملح وفلفل"],
      [Language.FR]: ["2 tasses de riz", "Thon", "Petits pois", "Carottes", "Maïs", "Mayonnaise", "Sel et poivre"],
      [Language.EN]: ["2 cups rice", "Tuna", "Peas", "Carrots", "Corn", "Mayonnaise", "Salt and pepper"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الأرز البارد مع الخضر والطون المصفى.",
        "نضيف المايونيز والملح والفلفل ونخلط جيداً.",
        "نضعها في قالب لتأخذ شكلاً جميلاً ثم نقدمها."
      ],
      [Language.FR]: [
        "Mélanger le riz froid avec les légumes et le thon.",
        "Ajouter la mayonnaise et assaisonner.",
        "Mettre dans un moule pour la forme et servir."
      ],
      [Language.EN]: [
        "Mix cold rice with vegetables and tuna.",
        "Add mayonnaise and season.",
        "Place in a mold for shape and serve."
      ]
    },
    tips: {
      [Language.AR]: ["يمكن إضافة قطع البيض المسلوق للتزيين."],
      [Language.FR]: ["Ajouter des œufs bouillis pour décorer."],
      [Language.EN]: ["Add boiled eggs for garnish."]
    }
  },
  {
    id: "s10",
    name: {
      [Language.AR]: "سلطة العدس المغربية",
      [Language.FR]: "Salade de Lentilles",
      [Language.EN]: "Lentil Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة صحية من العدس المتبل، تقدم غالباً كمقبل دافئ أو بارد.",
      [Language.FR]: "Salade de lentilles assaisonnées.",
      [Language.EN]: "Seasoned lentil salad."
    },
    prepTime: {
      [Language.AR]: "35 دقيقة",
      [Language.FR]: "35 min",
      [Language.EN]: "35 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["كأس عدس", "طماطم مفرومة", "بصل مفروم", "ثوم", "خل، زيت زيتون", "كمون، ملح، بقدونس"],
      [Language.FR]: ["1 tasse de lentilles", "Tomate", "Oignon", "Ail", "Vinaigre, huile d'olive", "Cumin, sel, persil"],
      [Language.EN]: ["1 cup lentils", "Tomato", "Onion", "Garlic", "Vinegar, olive oil", "Cumin, salt, parsley"]
    },
    steps: {
      [Language.AR]: [
        "نسلق العدس في الماء مع فص ثوم وملح.",
        "نصفيه ونضيف له باقي المكونات والتتبيلة.",
        "نخلط جيداً ونقدمها."
      ],
      [Language.FR]: [
        "Bouillir les lentilles avec l'ail et le sel.",
        "Égoutter et ajouter le reste des ingrédients.",
        "Mélanger et servir."
      ],
      [Language.EN]: [
        "Boil lentils with garlic and salt.",
        "Drain and add the rest of the ingredients.",
        "Mix and serve."
      ]
    },
    tips: {
      [Language.AR]: ["لا تترك العدس حتى يتفتت، يجب أن يحافظ على شكله."],
      [Language.FR]: ["Ne pas trop cuire les lentilles."],
      [Language.EN]: ["Don't overcook the lentils."]
    }
  },
  {
    id: "s11",
    name: {
      [Language.AR]: "سلطة الفول المنقوب",
      [Language.FR]: "Salade de Fèves (Foul)",
      [Language.EN]: "Broad Bean Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة من الفول الأخضر المطهو مع الشرمولة، لذيذة جداً ومغذية.",
      [Language.FR]: "Salade de fèves vertes à la chermoula.",
      [Language.EN]: "Green broad bean salad with chermoula."
    },
    prepTime: {
      [Language.AR]: "30 دقيقة",
      [Language.FR]: "30 min",
      [Language.EN]: "30 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["500 غرام فول أخضر", "ثوم، كمون، بابريكا", "زيت زيتون", "ليمون مصير", "قزبر"],
      [Language.FR]: ["500g de fèves", "Ail, cumin, paprika", "Huile d'olive", "Citron confit", "Coriandre"],
      [Language.EN]: ["500g broad beans", "Garlic, cumin, paprika", "Olive oil", "Preserved lemon", "Coriander"]
    },
    steps: {
      [Language.AR]: [
        "نزيل قشرة الفول ونفتحه قليلاً (ننقبه).",
        "نسلقه أو نبخره.",
        "نشحره في مقلاة مع الشرمولة والزيت والليمون المصير."
      ],
      [Language.FR]: [
        "Écosser les fèves.",
        "Cuire à la vapeur.",
        "Faire revenir avec la chermoula et le citron."
      ],
      [Language.EN]: [
        "Shell the beans.",
        "Steam them.",
        "Sauté with chermoula and preserved lemon."
      ]
    },
    tips: {
      [Language.AR]: ["يقدم ساخناً كطبق جانبي."],
      [Language.FR]: ["Servir chaud."],
      [Language.EN]: ["Serve warm."]
    }
  },
  {
    id: "s12",
    name: {
      [Language.AR]: "سلطة الطماطم والبصل الكلاسيكية",
      [Language.FR]: "Salade Tomate Oignon",
      [Language.EN]: "Tomato & Onion Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "أبسط وأشهر سلطة يومية في المغرب، منعشة وترافق المشويات.",
      [Language.FR]: "La salade marocaine la plus simple et populaire.",
      [Language.EN]: "The simplest and most popular Moroccan salad."
    },
    prepTime: {
      [Language.AR]: "10 دقائق",
      [Language.FR]: "10 min",
      [Language.EN]: "10 min"
    },
    servings: 2,
    ingredients: {
      [Language.AR]: ["2 طماطم", "1 بصلة صغيرة", "بقدونس", "زيت، خل، ملح، كمون"],
      [Language.FR]: ["2 tomates", "1 oignon", "Persil", "Huile, vinaigre, sel, cumin"],
      [Language.EN]: ["2 tomatoes", "1 onion", "Parsley", "Oil, vinegar, salt, cumin"]
    },
    steps: {
      [Language.AR]: [
        "نقطع الطماطم والبصل مكعبات صغيرة جداً.",
        "نضيف البقدونس المفروم والتتبيلة.",
        "نخلط ونقدم فوراً."
      ],
      [Language.FR]: [
        "Couper en petits dés.",
        "Ajouter le persil et l'assaisonnement.",
        "Mélanger et servir."
      ],
      [Language.EN]: [
        "Cube finely.",
        "Add parsley and dressing.",
        "Mix and serve."
      ]
    },
    tips: {
      [Language.AR]: ["السر في تقطيع المكونات لقطع صغيرة جداً."],
      [Language.FR]: ["Couper très finement."],
      [Language.EN]: ["The secret is cutting very finely."]
    }
  },
  {
    id: "s13",
    name: {
      [Language.AR]: "سلطة القرع الأحمر المعسل",
      [Language.FR]: "Salade de Courge Sucrée",
      [Language.EN]: "Sweet Pumpkin Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1506807803488-8eafc15547a6?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة دافئة من القرع الأحمر المطهو مع القرفة والعسل، مذاق فريد.",
      [Language.FR]: "Salade tiède de courge à la cannelle et au miel.",
      [Language.EN]: "Warm pumpkin salad with cinnamon and honey."
    },
    prepTime: {
      [Language.AR]: "25 دقيقة",
      [Language.FR]: "25 min",
      [Language.EN]: "25 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["500 غرام قرع أحمر", "قرفة، سكر أو عسل", "ماء زهر", "زبدة أو زيت زيتون"],
      [Language.FR]: ["500g de courge", "Cannelle, miel", "Eau de fleur d'oranger", "Beurre"],
      [Language.EN]: ["500g pumpkin", "Cinnamon, honey", "Orange blossom water", "Butter"]
    },
    steps: {
      [Language.AR]: [
        "نسلق القرع ونصفيه ونمعكه.",
        "في مقلاة، نضعه مع الزبدة والقرفة والعسل.",
        "نشحره حتى يتعسل تماماً ونضيف ماء الزهر في الأخير."
      ],
      [Language.FR]: [
        "Bouillir et écraser la courge.",
        "Faire revenir avec le beurre, la cannelle et le miel.",
        "Ajouter l'eau de fleur d'oranger à la fin."
      ],
      [Language.EN]: [
        "Boil and mash the pumpkin.",
        "Sauté with butter, cinnamon, and honey.",
        "Add orange blossom water at the end."
      ]
    },
    tips: {
      [Language.AR]: ["يمكن تزيينها بالسمسم المحمص."],
      [Language.FR]: ["Décorer avec du sésame."],
      [Language.EN]: ["Garnish with toasted sesame."]
    }
  },
  {
    id: "s14",
    name: {
      [Language.AR]: "سلطة اللوبيا الخضراء بالثوم",
      [Language.FR]: "Salade de Haricots Verts",
      [Language.EN]: "Green Bean Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "فاصوليا خضراء مسلوقة ومشحرة مع الثوم والبقدونس، خفيفة ولذيذة.",
      [Language.FR]: "Haricots verts sautés à l'ail et persil.",
      [Language.EN]: "Green beans sautéed with garlic and parsley."
    },
    prepTime: {
      [Language.AR]: "20 دقيقة",
      [Language.FR]: "20 min",
      [Language.EN]: "20 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["500 غرام لوبيا خضراء", "ثوم، بقدونس", "زيت زيتون، ليمون", "ملح، فلفل أسود"],
      [Language.FR]: ["500g haricots verts", "Ail, persil", "Huile d'olive, citron", "Sel, poivre"],
      [Language.EN]: ["500g green beans", "Garlic, parsley", "Olive oil, lemon", "Salt, pepper"]
    },
    steps: {
      [Language.AR]: [
        "نسلق اللوبيا في ماء مملح.",
        "في مقلاة، نضع الزيت والثوم والبقدونس.",
        "نضيف اللوبيا ونشحرها قليلاً مع التوابل والليمون."
      ],
      [Language.FR]: [
        "Bouillir les haricots.",
        "Sauter avec l'ail et le persil.",
        "Ajouter le citron."
      ],
      [Language.EN]: [
        "Boil the beans.",
        "Sauté with garlic and parsley.",
        "Add lemon."
      ]
    },
    tips: {
      [Language.AR]: ["ضعها في ماء بارد بعد السلق لكي تحافظ على لونها الأخضر."],
      [Language.FR]: ["Mettre dans l'eau froide après cuisson."],
      [Language.EN]: ["Put in cold water after boiling to keep color."]
    }
  },
  {
    id: "s15",
    name: {
      [Language.AR]: "سلطة الفجل والبرتقال",
      [Language.FR]: "Salade Radis et Orange",
      [Language.EN]: "Radish & Orange Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة مغربية قديمة، تجمع بين حرارة الفجل وحلاوة البرتقال، منعشة جداً.",
      [Language.FR]: "Salade ancienne de radis et orange.",
      [Language.EN]: "Old-style radish and orange salad."
    },
    prepTime: {
      [Language.AR]: "15 دقيقة",
      [Language.FR]: "15 min",
      [Language.EN]: "15 min"
    },
    servings: 2,
    ingredients: {
      [Language.AR]: ["فجل مبشور", "عصير برتقال", "سكر أو عسل", "ماء زهر"],
      [Language.FR]: ["Radis râpé", "Jus d'orange", "Sucre", "Eau de fleur d'oranger"],
      [Language.EN]: ["Grated radish", "Orange juice", "Sugar", "Orange blossom water"]
    },
    steps: {
      [Language.AR]: [
        "نبشر الفجل رقيقاً.",
        "نخلط عصير البرتقال مع السكر وماء الزهر.",
        "نصب الخليط فوق الفجل ونقدمها باردة."
      ],
      [Language.FR]: [
        "Râper les radis.",
        "Mélanger le jus, le sucre et l'eau de fleur d'oranger.",
        "Verser sur les radis."
      ],
      [Language.EN]: [
        "Grate the radishes.",
        "Mix juice, sugar, and orange blossom water.",
        "Pour over radishes."
      ]
    },
    tips: {
      [Language.AR]: ["تقدم كتحلية أو مقبل منعش."],
      [Language.FR]: ["Servir frais."],
      [Language.EN]: ["Serve cold."]
    }
  },
  {
    id: "s16",
    name: {
      [Language.AR]: "سلطة السبانخ بالثوم والزيتون",
      [Language.FR]: "Épinards à l'Ail et Olives",
      [Language.EN]: "Spinach with Garlic & Olives"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سبانخ مطهوة على الطريقة المغربية، تشبه البقولة في طريقة تحضيرها.",
      [Language.FR]: "Épinards cuits à la marocaine, façon Bakoula.",
      [Language.EN]: "Cooked spinach Moroccan style, similar to Bakoula."
    },
    prepTime: {
      [Language.AR]: "15 دقيقة",
      [Language.FR]: "15 min",
      [Language.EN]: "15 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["500 غرام سبانخ طازجة", "ثوم مفروم", "زيت زيتون", "ليمون مصير", "كمون، بابريكا، ملح"],
      [Language.FR]: ["500g épinards", "Ail", "Huile d'olive", "Citron confit", "Épices"],
      [Language.EN]: ["500g fresh spinach", "Garlic", "Olive oil", "Preserved lemon", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نغسل السبانخ ونقطعها ثم نضعها في مقلاة مع الزيت والثوم.",
        "نضيف التوابل والليمون المصير المقطع.",
        "نحرك حتى تذبل السبانخ وتنشف من الماء تماماً."
      ],
      [Language.FR]: [
        "Laver et hacher les épinards, mettre dans une poêle avec l'huile et l'ail.",
        "Ajouter les épices et le citron.",
        "Cuire jusqu'à ce que l'eau soit évaporée."
      ],
      [Language.EN]: [
        "Wash and chop spinach, place in a pan with oil and garlic.",
        "Add spices and preserved lemon.",
        "Cook until spinach wilts and water evaporates."
      ]
    },
    tips: {
      [Language.AR]: ["لا تبالغ في طهيها لكي لا تفقد لونها الأخضر الجميل."],
      [Language.FR]: ["Ne pas trop cuire."],
      [Language.EN]: ["Don't overcook to keep the green color."]
    }
  },
  {
    id: "s17",
    name: {
      [Language.AR]: "سلطة الشيفلور (القرنبيط) بالشرمولة",
      [Language.FR]: "Chou-fleur à la Chermoula",
      [Language.EN]: "Cauliflower with Chermoula"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ec3?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "قرنبيط مسلوق ومتبل بخلطة الشرمولة المغربية الحارة.",
      [Language.FR]: "Chou-fleur bouilli et mariné à la chermoula.",
      [Language.EN]: "Boiled cauliflower marinated in spicy chermoula."
    },
    prepTime: {
      [Language.AR]: "20 دقيقة",
      [Language.FR]: "20 min",
      [Language.EN]: "20 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["رأس قرنبيط صغير", "ثوم، كمون، بابريكا", "قزبر وبقدونس", "زيت زيتون، ليمون"],
      [Language.FR]: ["1 chou-fleur", "Ail, cumin, paprika", "Herbes", "Huile d'olive, citron"],
      [Language.EN]: ["1 cauliflower", "Garlic, cumin, paprika", "Herbs", "Olive oil, lemon"]
    },
    steps: {
      [Language.AR]: [
        "نقطع القرنبيط زهرات صغيرة ونسلقه في ماء مملح مع قطعة ليمون.",
        "نحضر الشرمولة في مقلاة مع قليل من الزيت.",
        "نضيف القرنبيط المسلوق ونشحره بلطف حتى يتشرب النكهة."
      ],
      [Language.FR]: [
        "Couper et bouillir le chou-fleur.",
        "Préparer la chermoula dans une poêle.",
        "Ajouter le chou-fleur et faire revenir doucement."
      ],
      [Language.EN]: [
        "Cut and boil cauliflower in salted water with a lemon slice.",
        "Prepare chermoula in a pan with oil.",
        "Add cauliflower and sauté gently."
      ]
    },
    tips: {
      [Language.AR]: ["إضافة الليمون لماء السلق يزيل رائحة القرنبيط القوية."],
      [Language.FR]: ["Ajouter du citron à l'eau de cuisson."],
      [Language.EN]: ["Adding lemon to the boiling water removes the strong smell."]
    }
  },
  {
    id: "s18",
    name: {
      [Language.AR]: "سلطة الكورجيت (الكوسة) بالكمون",
      [Language.FR]: "Courgettes au Cumin",
      [Language.EN]: "Zucchini with Cumin"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1522184216316-3c25379f9760?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "كوسة مقطعة دوائر ومطهوة مع الثوم والكمون، خفيفة جداً على المعدة.",
      [Language.FR]: "Courgettes sautées à l'ail et au cumin.",
      [Language.EN]: "Zucchini sautéed with garlic and cumin."
    },
    prepTime: {
      [Language.AR]: "15 دقيقة",
      [Language.FR]: "15 min",
      [Language.EN]: "15 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["500 غرام كوسة", "ثوم مفروم", "كمون، ملح، فلفل أسود", "زيت زيتون", "بقدونس"],
      [Language.FR]: ["500g courgettes", "Ail", "Cumin, sel, poivre", "Huile d'olive", "Persil"],
      [Language.EN]: ["500g zucchini", "Garlic", "Cumin, salt, pepper", "Olive oil", "Parsley"]
    },
    steps: {
      [Language.AR]: [
        "نقطع الكوسة دوائر رقيقة.",
        "نشحرها في مقلاة مع الزيت والثوم والتوابل.",
        "نستمر في التحريك حتى تنضج وتتحمر قليلاً."
      ],
      [Language.FR]: [
        "Trancher les courgettes.",
        "Sauter avec l'huile, l'ail et les épices.",
        "Cuire jusqu'à tendreté."
      ],
      [Language.EN]: [
        "Slice zucchini thinly.",
        "Sauté with oil, garlic, and spices.",
        "Cook until tender and slightly browned."
      ]
    },
    tips: {
      [Language.AR]: ["يفضل عدم تقشير الكوسة للحفاظ على الفيتامينات."],
      [Language.FR]: ["Ne pas peler les courgettes."],
      [Language.EN]: ["Don't peel the zucchini to keep vitamins."]
    }
  },
  {
    id: "s19",
    name: {
      [Language.AR]: "سلطة الفنوي (الشمر) بالليمون",
      [Language.FR]: "Salade de Fenouil au Citron",
      [Language.EN]: "Fennel Salad with Lemon"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة مقرمشة ومنعشة من الشمر المقطع رقيقاً مع تتبيلة الحامض.",
      [Language.FR]: "Salade croquante de fenouil au citron.",
      [Language.EN]: "Crunchy fennel salad with lemon."
    },
    prepTime: {
      [Language.AR]: "10 دقائق",
      [Language.FR]: "10 min",
      [Language.EN]: "10 min"
    },
    servings: 2,
    ingredients: {
      [Language.AR]: ["2 حبات شمر (فنوي)", "عصير ليمون", "زيت زيتون", "ملح وفلفل أسود", "قليل من البقدونس"],
      [Language.FR]: ["2 fenouils", "Jus de citron", "Huile d'olive", "Sel et poivre", "Persil"],
      [Language.EN]: ["2 fennel bulbs", "Lemon juice", "Olive oil", "Salt and pepper", "Parsley"]
    },
    steps: {
      [Language.AR]: [
        "نقطع الشمر شرائح رقيقة جداً.",
        "نحضر التتبيلة بخلط الليمون والزيت والملح والفلفل.",
        "نخلط الكل ونقدمها باردة."
      ],
      [Language.FR]: [
        "Trancher finement le fenouil.",
        "Préparer la vinaigrette.",
        "Mélanger et servir frais."
      ],
      [Language.EN]: [
        "Slice fennel very thinly.",
        "Prepare the dressing.",
        "Mix and serve cold."
      ]
    },
    tips: {
      [Language.AR]: ["استخدم قلب الشمر لأنه الأكثر طراوة."],
      [Language.FR]: ["Utiliser le cœur du fenouil."],
      [Language.EN]: ["Use the heart of the fennel for tenderness."]
    }
  },
  {
    id: "s20",
    name: {
      [Language.AR]: "سلطة الملفوف والجزر (كولسلو مغربي)",
      [Language.FR]: "Salade Chou et Carottes",
      [Language.EN]: "Cabbage & Carrot Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "مزيج مقرمش من الملفوف والجزر المبشور مع تتبيلة الخل والزيت.",
      [Language.FR]: "Mélange croquant de chou et carottes râpées.",
      [Language.EN]: "Crunchy mix of cabbage and grated carrots."
    },
    prepTime: {
      [Language.AR]: "15 دقيقة",
      [Language.FR]: "15 min",
      [Language.EN]: "15 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["ملفوف أبيض مبشور", "جزر مبشور", "زيت، خل، ملح", "قليل من السكر", "زبيب (اختياري)"],
      [Language.FR]: ["Chou blanc râpé", "Carottes râpées", "Huile, vinaigre, sel", "Sucre", "Raisins secs"],
      [Language.EN]: ["Grated white cabbage", "Grated carrots", "Oil, vinegar, salt", "Sugar", "Raisins"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الملفوف والجزر في إناء كبير.",
        "نضيف الزبيب إذا رغبنا.",
        "نتبل بالزيت والخل والملح والسكر ونخلط جيداً."
      ],
      [Language.FR]: [
        "Mélanger le chou et les carottes.",
        "Ajouter les raisins.",
        "Assaisonner et mélanger."
      ],
      [Language.EN]: [
        "Mix cabbage and carrots.",
        "Add raisins if desired.",
        "Season and mix well."
      ]
    },
    tips: {
      [Language.AR]: ["تترك في الثلاجة ساعة قبل التقديم لتصبح أطرى."],
      [Language.FR]: ["Laisser reposer 1h au frais."],
      [Language.EN]: ["Leave in the fridge for 1 hour before serving."]
    }
  },
  {
    id: "s21",
    name: {
      [Language.AR]: "سلطة الحمص بالكمون والبابريكا",
      [Language.FR]: "Salade de Pois Chiches",
      [Language.EN]: "Chickpea Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حمص مسلوق ومتبل بالتوابل المغربية، مشبعة وصحية.",
      [Language.FR]: "Pois chiches bouillis et assaisonnés.",
      [Language.EN]: "Boiled and seasoned chickpeas."
    },
    prepTime: {
      [Language.AR]: "10 دقائق",
      [Language.FR]: "10 min",
      [Language.EN]: "10 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["2 كؤوس حمص مسلوق", "بصل مفروم", "بقدونس", "كمون، بابريكا، ملح", "زيت زيتون، ليمون"],
      [Language.FR]: ["2 tasses de pois chiches", "Oignon", "Persil", "Cumin, paprika, sel", "Huile d'olive, citron"],
      [Language.EN]: ["2 cups boiled chickpeas", "Onion", "Parsley", "Cumin, paprika, salt", "Olive oil, lemon"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الحمص مع البصل والبقدونس.",
        "نضيف التوابل والزيت والليمون ونحرك جيداً.",
        "تقدم باردة أو دافئة."
      ],
      [Language.FR]: [
        "Mélanger les pois chiches avec l'oignon et le persil.",
        "Ajouter les épices, l'huile et le citron.",
        "Servir froid ou tiède."
      ],
      [Language.EN]: [
        "Mix chickpeas with onion and parsley.",
        "Add spices, oil, and lemon and mix well.",
        "Serve cold or warm."
      ]
    },
    tips: {
      [Language.AR]: ["يمكن إضافة قطع الطماطم الصغيرة."],
      [Language.FR]: ["On peut ajouter des tomates."],
      [Language.EN]: ["Small tomato pieces can be added."]
    }
  },
  {
    id: "s22",
    name: {
      [Language.AR]: "سلطة قلوب القوق (الأرضي شوكي)",
      [Language.FR]: "Salade de Cœurs d'Artichauts",
      [Language.EN]: "Artichoke Heart Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1515471204579-475f82e90e27?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "قلوب القوق المسلوقة والمتبلة، تعتبر من السلطات الراقية.",
      [Language.FR]: "Cœurs d'artichauts bouillis et marinés.",
      [Language.EN]: "Boiled and marinated artichoke hearts."
    },
    prepTime: {
      [Language.AR]: "20 دقيقة",
      [Language.FR]: "20 min",
      [Language.EN]: "20 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["500 غرام قلوب قوق", "ثوم، بقدونس", "زيت زيتون، خل", "ملح وفلفل أسود"],
      [Language.FR]: ["500g cœurs d'artichauts", "Ail, persil", "Huile d'olive, vinaigre", "Sel, poivre"],
      [Language.EN]: ["500g artichoke hearts", "Garlic, parsley", "Olive oil, vinegar", "Salt, pepper"]
    },
    steps: {
      [Language.AR]: [
        "نسلق قلوب القوق في ماء مع الليمون.",
        "نصفيها ونقطعها أنصافاً.",
        "نتبلها بخليط الزيت والخل والثوم والأعشاب."
      ],
      [Language.FR]: [
        "Bouillir les cœurs d'artichauts avec du citron.",
        "Égoutter et couper en deux.",
        "Assaisonner avec la vinaigrette à l'ail."
      ],
      [Language.EN]: [
        "Boil artichoke hearts with lemon.",
        "Drain and cut in half.",
        "Season with the garlic dressing."
      ]
    },
    tips: {
      [Language.AR]: ["الليمون ضروري أثناء السلق لكي لا يسود لون القوق."],
      [Language.FR]: ["Le citron évite que l'artichaut ne noircisse."],
      [Language.EN]: ["Lemon is essential during boiling to prevent darkening."]
    }
  },
  {
    id: "s23",
    name: {
      [Language.AR]: "سلطة الأعشاب المنسمة",
      [Language.FR]: "Salade d'Herbes Fraîches",
      [Language.EN]: "Fresh Herb Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة بسيطة جداً تعتمد على القزبر والبقدونس الطازج مع تتبيلة قوية.",
      [Language.FR]: "Une salade simple à base de coriandre et persil frais.",
      [Language.EN]: "A simple salad based on fresh coriander and parsley."
    },
    prepTime: {
      [Language.AR]: "5 دقائق",
      [Language.FR]: "5 min",
      [Language.EN]: "5 min"
    },
    servings: 2,
    ingredients: {
      [Language.AR]: ["بقدونس مفروم بكثرة", "قزبر مفروم", "بصل مفروم ناعم", "زيت زيتون، ليمون، ملح، كمون"],
      [Language.FR]: ["Persil haché", "Coriandre hachée", "Oignon haché", "Huile, citron, sel, cumin"],
      [Language.EN]: ["Chopped parsley", "Chopped coriander", "Finely chopped onion", "Oil, lemon, salt, cumin"]
    },
    steps: {
      [Language.AR]: [
        "نخلط جميع الأعشاب والبصل في إناء.",
        "نضيف التتبيلة ونخلط جيداً.",
        "تقدم كمرافق للمشويات."
      ],
      [Language.FR]: [
        "Mélanger les herbes et l'oignon.",
        "Ajouter l'assaisonnement.",
        "Servir avec des grillades."
      ],
      [Language.EN]: [
        "Mix herbs and onion.",
        "Add seasoning and mix well.",
        "Serve as an accompaniment to grilled meats."
      ]
    },
    tips: {
      [Language.AR]: ["يجب أن تكون الأعشاب طازجة جداً."],
      [Language.FR]: ["Les herbes doivent être très fraîches."],
      [Language.EN]: ["Herbs must be very fresh."]
    }
  },
  {
    id: "s24",
    name: {
      [Language.AR]: "سلطة الباذنجان المشوي بالطحينة (لمسة مغربية)",
      [Language.FR]: "Aubergine Grillée à la Tahini",
      [Language.EN]: "Roasted Eggplant with Tahini"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1590577976322-3d2d6e2130ee?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "باذنجان مشوي ومهروس مع الطحينة والثوم، بلمسة توابل مغربية.",
      [Language.FR]: "Aubergine grillée et écrasée à la tahini.",
      [Language.EN]: "Roasted and mashed eggplant with tahini."
    },
    prepTime: {
      [Language.AR]: "25 دقيقة",
      [Language.FR]: "25 min",
      [Language.EN]: "25 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["2 باذنجان مشوي", "2 ملاعق طحينة", "ثوم، ليمون", "زيت زيتون، كمون، ملح"],
      [Language.FR]: ["2 aubergines grillées", "2 c.à.s de tahini", "Ail, citron", "Huile d'olive, cumin, sel"],
      [Language.EN]: ["2 roasted eggplants", "2 tbsp tahini", "Garlic, lemon", "Olive oil, cumin, salt"]
    },
    steps: {
      [Language.AR]: [
        "نهرس لب الباذنجان المشوي جيداً.",
        "نضيف الطحينة والثوم والليمون والتوابل.",
        "نخلط حتى نحصل على قوام كريمي.",
        "نزين بزيت الزيتون والبابريكا."
      ],
      [Language.FR]: [
        "Écraser la chair d'aubergine.",
        "Ajouter la tahini, l'ail, le citron et les épices.",
        "Mélanger jusqu'à onctuosité.",
        "Décorer avec l'huile et le paprika."
      ],
      [Language.EN]: [
        "Mash the roasted eggplant flesh.",
        "Add tahini, garlic, lemon, and spices.",
        "Mix until creamy.",
        "Garnish with olive oil and paprika."
      ]
    },
    tips: {
      [Language.AR]: ["شوي الباذنجان على النار مباشرة يعطي أفضل نكهة."],
      [Language.FR]: ["Griller directement sur le feu."],
      [Language.EN]: ["Grilling directly over flame gives the best flavor."]
    }
  },
  {
    id: "s25",
    name: {
      [Language.AR]: "سلطة القمح (إيبلي) بالخضر",
      [Language.FR]: "Salade de Blé aux Légumes",
      [Language.EN]: "Wheat (Ebly) Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1512058560366-cd2427ff6670?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة مغذية من حبوب القمح المسلوقة مع تشكيلة من الخضر الملونة.",
      [Language.FR]: "Salade nutritive de blé aux légumes variés.",
      [Language.EN]: "Nutritious wheat salad with assorted vegetables."
    },
    prepTime: {
      [Language.AR]: "20 دقيقة",
      [Language.FR]: "20 min",
      [Language.EN]: "20 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["كأس قمح مسلوق", "فلفل ألوان مكعبات", "خيار مكعبات", "ذرة", "تتبيلة الخل والزيت"],
      [Language.FR]: ["1 tasse de blé", "Poivrons colorés", "Concombre", "Maïs", "Vinaigrette"],
      [Language.EN]: ["1 cup boiled wheat", "Mixed peppers", "Cucumber", "Corn", "Vinaigrette"]
    },
    steps: {
      [Language.AR]: [
        "نخلط القمح البارد مع الخضر المقطعة.",
        "نضيف التتبيلة ونخلط جيداً.",
        "تقدم باردة."
      ],
      [Language.FR]: [
        "Mélanger le blé froid avec les légumes.",
        "Ajouter la vinaigrette.",
        "Servir frais."
      ],
      [Language.EN]: [
        "Mix cold wheat with chopped vegetables.",
        "Add dressing and mix well.",
        "Serve cold."
      ]
    },
    tips: {
      [Language.AR]: ["يمكن إضافة قطع الدجاج المشوي لجعلها وجبة كاملة."],
      [Language.FR]: ["On peut ajouter du poulet grillé."],
      [Language.EN]: ["Grilled chicken can be added for a complete meal."]
    }
  },
  {
    id: "s26",
    name: {
      [Language.AR]: "سلطة المعكرونة المغربية",
      [Language.FR]: "Salade de Pâtes Marocaine",
      [Language.EN]: "Moroccan Pasta Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "معكرونة صغيرة مسلوقة مع الطون والخضر والمايونيز.",
      [Language.FR]: "Pâtes au thon, légumes et mayonnaise.",
      [Language.EN]: "Pasta with tuna, vegetables, and mayonnaise."
    },
    prepTime: {
      [Language.AR]: "20 دقيقة",
      [Language.FR]: "20 min",
      [Language.EN]: "20 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["250 غرام معكرونة", "علبة طون", "ذرة، جلبانة", "مايونيز، ملح، فلفل"],
      [Language.FR]: ["250g de pâtes", "Thon", "Maïs, petits pois", "Mayonnaise, sel, poivre"],
      [Language.EN]: ["250g pasta", "Tuna", "Corn, peas", "Mayonnaise, salt, pepper"]
    },
    steps: {
      [Language.AR]: [
        "نسلق المعكرونة ونبردها.",
        "نخلطها مع باقي المكونات والمايونيز.",
        "نقدمها باردة."
      ],
      [Language.FR]: [
        "Bouillir et refroidir les pâtes.",
        "Mélanger avec le reste et la mayonnaise.",
        "Servir frais."
      ],
      [Language.EN]: [
        "Boil and cool the pasta.",
        "Mix with the rest and mayonnaise.",
        "Serve cold."
      ]
    },
    tips: {
      [Language.AR]: ["استخدم معكرونة بأشكال مختلفة لجذب الأطفال."],
      [Language.FR]: ["Utiliser différentes formes de pâtes."],
      [Language.EN]: ["Use different pasta shapes to attract children."]
    }
  },
  {
    id: "s27",
    name: {
      [Language.AR]: "سلطة التفاح والكرفس",
      [Language.FR]: "Salade Pomme et Céleri",
      [Language.EN]: "Apple & Celery Salad"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة منعشة تجمع بين قرمشة التفاح ونكهة الكرفس القوية.",
      [Language.FR]: "Salade fraîche de pomme et céleri.",
      [Language.EN]: "Fresh apple and celery salad."
    },
    prepTime: {
      [Language.AR]: "10 دقائق",
      [Language.FR]: "10 min",
      [Language.EN]: "10 min"
    },
    servings: 2,
    ingredients: {
      [Language.AR]: ["تفاح مقطع مكعبات", "كرفس مفروم", "جوز (كركاع)", "عصير ليمون، قليل من المايونيز"],
      [Language.FR]: ["Pomme", "Céleri", "Noix", "Citron, mayonnaise"],
      [Language.EN]: ["Apple", "Celery", "Walnuts", "Lemon, mayonnaise"]
    },
    steps: {
      [Language.AR]: [
        "نخلط التفاح والكرفس والجوز.",
        "نضيف عصير الليمون والمايونيز ونخلط.",
        "تقدم فوراً."
      ],
      [Language.FR]: [
        "Mélanger pomme, céleri et noix.",
        "Ajouter citron et mayonnaise.",
        "Servir immédiatement."
      ],
      [Language.EN]: [
        "Mix apple, celery, and walnuts.",
        "Add lemon and mayonnaise.",
        "Serve immediately."
      ]
    },
    tips: {
      [Language.AR]: ["عصير الليمون يمنع التفاح من تغيير لونه."],
      [Language.FR]: ["Le citron évite l'oxydation de la pomme."],
      [Language.EN]: ["Lemon juice prevents apple from browning."]
    }
  },
  {
    id: "s28",
    name: {
      [Language.AR]: "سلطة الطماطم والموزاريلا بلمسة أركان",
      [Language.FR]: "Tomate Mozzarella à l'Argan",
      [Language.EN]: "Tomato Mozzarella with Argan Oil"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة عصرية تجمع بين الطماطم والموزاريلا مع زيت الأركان المغربي النادر.",
      [Language.FR]: "Salade moderne de tomate mozzarella à l'huile d'argan.",
      [Language.EN]: "Modern tomato mozzarella salad with Moroccan argan oil."
    },
    prepTime: {
      [Language.AR]: "10 دقائق",
      [Language.FR]: "10 min",
      [Language.EN]: "10 min"
    },
    servings: 2,
    ingredients: {
      [Language.AR]: ["طماطم كرزية", "كرات موزاريلا صغيرة", "زيت أركان", "ريحان طازج", "ملح وفلفل"],
      [Language.FR]: ["Tomates cerises", "Mozzarella", "Huile d'argan", "Basilic", "Sel, poivre"],
      [Language.EN]: ["Cherry tomatoes", "Mozzarella balls", "Argan oil", "Fresh basil", "Salt, pepper"]
    },
    steps: {
      [Language.AR]: [
        "نرتب الطماطم والموزاريلا في طبق.",
        "نضيف الريحان المفروم.",
        "نرش زيت الأركان والملح والفلفل."
      ],
      [Language.FR]: [
        "Dresser tomates et mozzarella.",
        "Ajouter le basilic.",
        "Arroser d'huile d'argan."
      ],
      [Language.EN]: [
        "Arrange tomatoes and mozzarella.",
        "Add basil.",
        "Drizzle with argan oil."
      ]
    },
    tips: {
      [Language.AR]: ["زيت الأركان يعطي نكهة جوزية رائعة."],
      [Language.FR]: ["L'huile d'argan donne un goût de noisette."],
      [Language.EN]: ["Argan oil adds a wonderful nutty flavor."]
    }
  },
  {
    id: "s29",
    name: {
      [Language.AR]: "سلطة الفطر (المشروم) بالشرمولة",
      [Language.FR]: "Champignons à la Chermoula",
      [Language.EN]: "Mushrooms with Chermoula"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "فطر طازج مشحر مع الثوم والتوابل المغربية، يقدم دافئاً.",
      [Language.FR]: "Champignons frais sautés à la chermoula.",
      [Language.EN]: "Fresh mushrooms sautéed with chermoula."
    },
    prepTime: {
      [Language.AR]: "15 دقيقة",
      [Language.FR]: "15 min",
      [Language.EN]: "15 min"
    },
    servings: 4,
    ingredients: {
      [Language.AR]: ["500 غرام فطر طازج", "ثوم، كمون، بابريكا", "زيت زيتون، ليمون", "بقدونس"],
      [Language.FR]: ["500g champignons", "Ail, cumin, paprika", "Huile d'olive, citron", "Persil"],
      [Language.EN]: ["500g fresh mushrooms", "Garlic, cumin, paprika", "Olive oil, lemon", "Parsley"]
    },
    steps: {
      [Language.AR]: [
        "نقطع الفطر شرائح.",
        "نشحره في مقلاة مع الزيت والثوم حتى يذبل.",
        "نضيف التوابل والليمون والبقدونس ونحرك."
      ],
      [Language.FR]: [
        "Trancher les champignons.",
        "Sauter avec l'ail et l'huile.",
        "Ajouter épices, citron et persil."
      ],
      [Language.EN]: [
        "Slice the mushrooms.",
        "Sauté with garlic and oil until wilted.",
        "Add spices, lemon, and parsley and stir."
      ]
    },
    tips: {
      [Language.AR]: ["لا تغسل الفطر بالماء، امسحه فقط بقطعة قماش مبللة."],
      [Language.FR]: ["Ne pas laver les champignons à l'eau."],
      [Language.EN]: ["Don't wash mushrooms with water, just wipe them."]
    }
  },
  {
    id: "s30",
    name: {
      [Language.AR]: "سلطة الخيار والطماطم بالنعناع",
      [Language.FR]: "Concombre Tomate à la Menthe",
      [Language.EN]: "Cucumber & Tomato with Mint"
    },
    category: Category.SALADS,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "نسخة منعشة من السلطة الكلاسيكية مع إضافة النعناع الطازج.",
      [Language.FR]: "Version rafraîchissante à la menthe fraîche.",
      [Language.EN]: "Refreshing version with fresh mint."
    },
    prepTime: {
      [Language.AR]: "10 دقائق",
      [Language.FR]: "10 min",
      [Language.EN]: "10 min"
    },
    servings: 2,
    ingredients: {
      [Language.AR]: ["خيار، طماطم", "نعناع طازج مفروم", "بصل مفروم", "زيت، ليمون، ملح"],
      [Language.FR]: ["Concombre, tomate", "Menthe fraîche", "Oignon", "Huile, citron, sel"],
      [Language.EN]: ["Cucumber, tomato", "Fresh mint", "Onion", "Oil, lemon, salt"]
    },
    steps: {
      [Language.AR]: [
        "نقطع الخضر مكعبات صغيرة.",
        "نضيف النعناع المفروم والتتبيلة.",
        "نخلط ونقدمها باردة."
      ],
      [Language.FR]: [
        "Couper en dés.",
        "Ajouter la menthe et l'assaisonnement.",
        "Mélanger et servir frais."
      ],
      [Language.EN]: [
        "Cube the vegetables.",
        "Add chopped mint and dressing.",
        "Mix and serve cold."
      ]
    },
    tips: {
      [Language.AR]: ["النعناع يعطي برودة رائعة في الصيف."],
      [Language.FR]: ["La menthe apporte de la fraîcheur."],
      [Language.EN]: ["Mint adds great freshness in summer."]
    }
  }
];
