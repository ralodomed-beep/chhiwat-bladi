import { Category, Language, Recipe } from "../types";

export const ramadanRecipes: Recipe[] = [
  {
    id: "ram-01",
    name: {
      [Language.AR]: "الحريرة المغربية الأصيلة",
      [Language.FR]: "Harira Marocaine Authentique",
      [Language.EN]: "Authentic Moroccan Harira"
    },
    category: Category.RAMADAN,
    subCategory: "Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "الشوربة الوطنية المغربية، غنية بالقطاني والأعشاب المنسمة، لا تغيب عن مائدة الإفطار.",
      [Language.FR]: "La soupe nationale marocaine, riche en légumineuses et herbes aromatiques.",
      [Language.EN]: "The national Moroccan soup, rich in legumes and aromatic herbs."
    },
    prepTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    cookTime: { [Language.AR]: "60 دقيقة", [Language.FR]: "60 min", [Language.EN]: "60 min" },
    servings: 6,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["250غ لحم مقطع مكعبات", "كأس حمص منقوع", "نصف كأس عدس", "بصلة مفرومة", "كرفس وقزبر وبقدونس مفرومين", "كيلو طماطم مطحونة", "ملعقة كبيرة مركز طماطم", "ملح، فلفل أسود، زنجبيل، كركم، سمن", "نصف كأس دقيق للتدوير", "شعرية رقيقة"],
      [Language.FR]: ["250g de viande", "Pois chiches", "Lentilles", "Oignon", "Céleri, persil, coriandre", "1kg de tomates", "Concentré de tomate", "Épices, Smen", "Farine", "Vermicelles"],
      [Language.EN]: ["250g meat cubes", "Chickpeas", "Lentils", "Onion", "Celery, parsley, coriander", "1kg tomatoes", "Tomato paste", "Spices, Smen", "Flour", "Vermicelli"]
    },
    steps: {
      [Language.AR]: [
        "في طنجرة الضغط، نضع اللحم، الحمص، العدس، البصل، الأعشاب والتوابل مع الماء.",
        "نغلق الطنجرة ونتركها تطهى لمدة 40 دقيقة.",
        "نضيف الطماطم المطحونة ومركز الطماطم ونتركها تغلي.",
        "نخلط الدقيق مع الماء جيداً ونضيفه تدريجياً مع التحريك المستمر (التدويرة).",
        "نضيف الشعرية في الدقائق الأخيرة حتى تنضج."
      ],
      [Language.FR]: [
        "Cuire la viande et les légumineuses avec les herbes et épices.",
        "Ajouter les tomates et le concentré.",
        "Lier avec le mélange farine-eau.",
        "Ajouter les vermicelles à la fin."
      ],
      [Language.EN]: [
        "Cook meat and legumes with herbs and spices.",
        "Add tomatoes and paste.",
        "Thicken with flour-water mixture.",
        "Add vermicelli at the end."
      ]
    },
    tips: {
      [Language.AR]: ["أضيفي السمن في المرحلة الأخيرة لنكهة أقوى.", "استخدمي طماطم طازجة وحمراء."],
      [Language.FR]: ["Ajouter le smen à la fin.", "Utiliser des tomates bien mûres."],
      [Language.EN]: ["Add smen at the end.", "Use ripe tomatoes."]
    },
    servingMethod: {
      [Language.AR]: "تقدم ساخنة مع التمر والشباكية وقطع الليمون.",
      [Language.FR]: "Servir chaud avec des dattes et de la Chebakia.",
      [Language.EN]: "Serve hot with dates and Chebakia."
    },
    keywords: ["حريرة", "شوربة", "رمضان", "harira", "soup"]
  },
  {
    id: "ram-02",
    name: {
      [Language.AR]: "شباكية مغربية",
      [Language.FR]: "Chebakia Marocaine",
      [Language.EN]: "Moroccan Chebakia"
    },
    category: Category.RAMADAN,
    subCategory: "Sweet",
    image: "https://images.unsplash.com/photo-1590004953392-5aba2e785997?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى رمضانية بامتياز، معسلة ومنسمة بالنافع والزنجلان.",
      [Language.FR]: "Pâtisserie au miel, sésame et anis, incontournable du Ramadan.",
      [Language.EN]: "Honey pastry with sesame and anise, essential for Ramadan."
    },
    prepTime: { [Language.AR]: "60 دقيقة", [Language.FR]: "60 min", [Language.EN]: "60 min" },
    cookTime: { [Language.AR]: "30 دقيقة", [Language.FR]: "30 min", [Language.EN]: "30 min" },
    servings: 50,
    difficulty: { [Language.AR]: "صعب", [Language.FR]: "Difficile", [Language.EN]: "Hard" },
    ingredients: {
      [Language.AR]: ["كيلو دقيق", "كأس زنجلان مطحون", "كأس لوز مطحون", "كأس زبدة مذابة", "كأس زيت", "نصف كأس ماء زهر", "ملعقة كبيرة نافع (يانسون)", "ملعقة كبيرة قرفة", "زعفران حر", "خميرة حلويات", "عسل للتعسيل"],
      [Language.FR]: ["1kg farine", "Sésame moulu", "Amande moulue", "Beurre", "Huile", "Eau de fleur d'oranger", "Anis", "Cannelle", "Safran", "Miel"],
      [Language.EN]: ["1kg flour", "Ground sesame", "Ground almond", "Butter", "Oil", "Orange blossom water", "Anis", "Cinnamon", "Safran", "Honey"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الدقيق مع المكونات الجافة جيداً.",
        "نضيف الزبدة والزيت وماء الزهر ونجمع العجين حتى يصبح متماسكاً.",
        "ندلك العجين جيداً ونقسمه لقطع، ثم نبسطه ونقطعه بجرارة الشباكية.",
        "نشكل الشباكية (التشباك) ونقليها في زيت ساخن.",
        "نغطسها فوراً في العسل البارد ونرشها بالزنجلان."
      ],
      [Language.FR]: [
        "Mélanger farine et ingrédients secs.",
        "Ajouter les liquides et pétrir.",
        "Étaler, découper et façonner.",
        "Frire et tremper dans le miel."
      ],
      [Language.EN]: [
        "Mix flour and dry ingredients.",
        "Add liquids and knead.",
        "Roll, cut and shape.",
        "Fry and dip in honey."
      ]
    },
    tips: {
      [Language.AR]: ["يجب أن يكون العجين صلباً قليلاً لضمان هشاشة الحلوى.", "العسل يجب أن يكون ثقيلاً."],
      [Language.FR]: ["La pâte doit être ferme.", "Le miel doit être épais."],
      [Language.EN]: ["Dough should be firm.", "Honey must be thick."]
    },
    servingMethod: {
      [Language.AR]: "تقدم باردة مع الحريرة المغربية.",
      [Language.FR]: "Servir avec la Harira.",
      [Language.EN]: "Serve with Harira."
    },
    keywords: ["شباكية", "حلويات", "رمضان", "chebakia", "sweets"]
  },
  {
    id: "ram-03",
    name: {
      [Language.AR]: "بغرير مغربي (خمس دقائق)",
      [Language.FR]: "Baghrir (Crêpes aux mille trous)",
      [Language.EN]: "Baghrir (Thousand Hole Pancakes)"
    },
    category: Category.RAMADAN,
    subCategory: "Appetizer",
    image: "https://images.unsplash.com/photo-1599121106328-907003214ab9?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "فطائر مغربية خفيفة جداً تتميز بثقوبها الكثيرة، تقدم مع العسل والزبدة المذابة.",
      [Language.FR]: "Crêpes légères et spongieuses avec de nombreux trous, servies avec miel et beurre.",
      [Language.EN]: "Light and spongy pancakes with many holes, served with honey and butter."
    },
    prepTime: { [Language.AR]: "5 دقائق", [Language.FR]: "5 min", [Language.EN]: "5 min" },
    cookTime: { [Language.AR]: "15 دقائق", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    servings: 10,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["2 كؤوس سميد ناعم", "نصف كأس دقيق", "3 كؤوس ماء دافئ", "ملعقة كبيرة خميرة خبز", "ملعقة صغيرة ملح", "خميرة حلويات (7غ)"],
      [Language.FR]: ["2 tasses de semoule fine", "1/2 tasse de farine", "3 tasses d'eau tiède", "Levure boulangère", "Sel", "Levure chimique"],
      [Language.EN]: ["2 cups fine semolina", "1/2 cup flour", "3 cups warm water", "Yeast", "Salt", "Baking powder"]
    },
    steps: {
      [Language.AR]: [
        "نضع جميع المكونات في الخلاط الكهربائي ما عدا خميرة الحلويات.",
        "نخلط جيداً لمدة دقيقتين ثم نضيف خميرة الحلويات ونخلط ثانية.",
        "نترك الخليط يرتاح لمدة 5 دقائق فقط.",
        "نسخن مقلاة غير لاصقة ونصب فيها مقدار مغرفة من الخليط.",
        "نطهوها من جهة واحدة فقط حتى تظهر الثقوب وتجف تماماً."
      ],
      [Language.FR]: [
        "Mixer tous les ingrédients sauf la levure chimique.",
        "Ajouter la levure chimique et mixer à nouveau.",
        "Laisser reposer 5 min.",
        "Cuire dans une poêle antiadhésive d'un seul côté."
      ],
      [Language.EN]: [
        "Mix all ingredients except baking powder in a blender.",
        "Add baking powder and mix again.",
        "Let rest for 5 min.",
        "Cook in a non-stick pan on one side only."
      ]
    },
    tips: {
      [Language.AR]: ["يجب أن تكون المقلاة باردة قليلاً بين كل حبة وأخرى (يمكن مسحها بمنديل مبلل).", "الماء يجب أن يكون دافئاً وليس ساخناً."],
      [Language.FR]: ["Refroidir la poêle entre chaque crêpe.", "L'eau doit être tiède."],
      [Language.EN]: ["Cool the pan slightly between pancakes.", "Water should be warm, not hot."]
    },
    servingMethod: {
      [Language.AR]: "تقدم ساخنة مدهونة بخليط الزبدة والعسل.",
      [Language.FR]: "Servir chaud avec du miel et du beurre.",
      [Language.EN]: "Serve hot with honey and butter."
    },
    keywords: ["بغرير", "فطائر", "رمضان", "baghrir", "pancakes"]
  },
  {
    id: "ram-04",
    name: {
      [Language.AR]: "سلو مغربي (الصفوف)",
      [Language.FR]: "Sellou (Sfouf)",
      [Language.EN]: "Sellou (Moroccan Nut Mix)"
    },
    category: Category.RAMADAN,
    subCategory: "Sweet",
    image: "https://images.unsplash.com/photo-1590004953392-5aba2e785997?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "خليط مغذي جداً من الدقيق المحمص والمكسرات والعسل، يمنح الطاقة للصائم.",
      [Language.FR]: "Mélange nutritif de farine grillée, amandes et sésame.",
      [Language.EN]: "Nutritious mix of toasted flour, almonds, and sesame."
    },
    prepTime: { [Language.AR]: "120 دقيقة", [Language.FR]: "120 min", [Language.EN]: "120 min" },
    cookTime: { [Language.AR]: "60 دقيقة", [Language.FR]: "60 min", [Language.EN]: "60 min" },
    servings: 20,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["كيلو دقيق محمص", "كيلو لوز مقلي ومطحون", "كيلو زنجلان محمص ومطحون", "نصف كيلو سكر صقيل", "ملعقتين كبيرتين نافع", "ملعقتين كبيرتين حبة حلاوة", "ملعقة كبيرة قرفة", "مسكة حرة", "زبدة مذابة أو زيت لجمع الخليط"],
      [Language.FR]: ["1kg farine grillée", "1kg amandes", "1kg sésame", "Sucre glace", "Anis", "Fenouil", "Cannelle", "Gomme arabique", "Beurre ou huile"],
      [Language.EN]: ["1kg toasted flour", "1kg almonds", "1kg sesame", "Powdered sugar", "Anise", "Fennel", "Cinnamon", "Gum arabic", "Butter or oil"]
    },
    steps: {
      [Language.AR]: [
        "نحمص الدقيق في الفرن حتى يصبح ذهبياً ونغربله.",
        "نحمص الزنجلان ونطحنه، ونقلي اللوز ونطحنه (نترك القليل منه مهرمشاً).",
        "في إناء كبير، نخلط الدقيق مع المكسرات والتوابل والسكر.",
        "نضيف الزبدة المذابة تدريجياً وندلك الخليط جيداً باليدين حتى ينسجم.",
        "نضعه في طبق التقديم ونزينه باللوز المقلي."
      ],
      [Language.FR]: [
        "Griller la farine au four.",
        "Griller et moudre le sésame et les amandes.",
        "Mélanger tous les ingrédients secs.",
        "Ajouter le beurre et bien pétrir.",
        "Décorer avec des amandes."
      ],
      [Language.EN]: [
        "Toast flour in the oven.",
        "Toast and grind sesame and almonds.",
        "Mix all dry ingredients.",
        "Add butter and knead well.",
        "Garnish with almonds."
      ]
    },
    tips: {
      [Language.AR]: ["الدلك الجيد هو سر نجاح سلو.", "يمكن تعويض السكر بالعسل ليكون صحياً أكثر."],
      [Language.FR]: ["Bien pétrir.", "Peut être fait avec du miel."],
      [Language.EN]: ["Knead well.", "Can be made with honey for a healthier version."]
    },
    servingMethod: {
      [Language.AR]: "يقدم في أطباق صغيرة أو يجمع على شكل هرم.",
      [Language.FR]: "Servir en dôme ou petites coupelles.",
      [Language.EN]: "Serve in a dome shape or small bowls."
    },
    keywords: ["سلو", "صفوف", "رمضان", "sellou", "sfouf"]
  },
  {
    id: "ram-05",
    name: {
      [Language.AR]: "بريوات باللوز",
      [Language.FR]: "Briouates aux Amandes",
      [Language.EN]: "Almond Briouates"
    },
    category: Category.RAMADAN,
    subCategory: "Sweet",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "مثلثات مقرمشة محشوة بعقدة اللوز المنسمة بماء الزهر ومعسلة.",
      [Language.FR]: "Triangles croustillants farcis à la pâte d'amande et au miel.",
      [Language.EN]: "Crunchy triangles stuffed with almond paste and honey."
    },
    prepTime: { [Language.AR]: "45 دقيقة", [Language.FR]: "45 min", [Language.EN]: "45 min" },
    cookTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    servings: 30,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["ورقة البسطيلة", "500غ لوز مسلوق ومطحون", "200غ سكر", "ملعقة كبيرة زبدة", "نصف ملعقة صغيرة قرفة", "ملعقتين كبيرتين ماء زهر", "زيت للقلي", "عسل"],
      [Language.FR]: ["Feuilles de pastilla", "500g amandes", "200g sucre", "Beurre", "Cannelle", "Eau de fleur d'oranger", "Huile", "Miel"],
      [Language.EN]: ["Pastilla sheets", "500g almonds", "200g sugar", "Butter", "Cinnamon", "Orange blossom water", "Oil", "Honey"]
    },
    steps: {
      [Language.AR]: [
        "نخلط اللوز المطحون مع السكر والزبدة والقرفة وماء الزهر لنحصل على عقدة.",
        "نشكل كويرات صغيرة من العقدة.",
        "نقطع ورقة البسطيلة لشرائط طويلة، نضع الكرة ونطويها على شكل مثلث.",
        "نلصق الطرف بخليط الدقيق والماء.",
        "نقلي البريوات في زيت ساخن ثم نغطسها فوراً في العسل."
      ],
      [Language.FR]: [
        "Préparer la pâte d'amande.",
        "Former des boules.",
        "Plier en triangles avec la feuille de pastilla.",
        "Frire et mieller."
      ],
      [Language.EN]: [
        "Prepare the almond paste.",
        "Form small balls.",
        "Fold into triangles using pastilla sheets.",
        "Fry and dip in honey."
      ]
    },
    tips: {
      [Language.AR]: ["تأكدي من إغلاق المثلثات جيداً لكي لا تخرج الحشوة أثناء القلي.", "العسل يجب أن يكون بارداً."],
      [Language.FR]: ["Bien fermer les triangles.", "Le miel doit être froid."],
      [Language.EN]: ["Close triangles well.", "Honey should be cold."]
    },
    servingMethod: {
      [Language.AR]: "تقدم باردة مزينة باللوز المهرمش أو الزنجلان.",
      [Language.FR]: "Servir froid avec du sésame.",
      [Language.EN]: "Serve cold with sesame seeds."
    },
    keywords: ["بريوات", "حلويات", "رمضان", "briouates", "sweets"]
  },
  {
    id: "ram-06",
    name: {
      [Language.AR]: "المسمن المغربي",
      [Language.FR]: "Msemen Marocain",
      [Language.EN]: "Moroccan Msemen"
    },
    category: Category.RAMADAN,
    subCategory: "Appetizer",
    image: "https://images.unsplash.com/photo-1599121106328-907003214ab9?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "فطائر مربعة مورقة ومقرمشة، لا تخلو منها مائدة إفطار مغربية.",
      [Language.FR]: "Crêpes feuilletées carrées, croustillantes et incontournables.",
      [Language.EN]: "Laminated square flatbreads, crispy and essential."
    },
    prepTime: { [Language.AR]: "30 دقيقة", [Language.FR]: "30 min", [Language.EN]: "30 min" },
    cookTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    servings: 8,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["500غ دقيق أبيض", "250غ فينو (سميد ناعم)", "ملح", "ماء دافئ", "زيت وزبدة للتوريق"],
      [Language.FR]: ["500g farine", "250g semoule fine", "Sel", "Eau tiède", "Huile et beurre"],
      [Language.EN]: ["500g flour", "250g fine semolina", "Salt", "Warm water", "Oil and butter"]
    },
    steps: {
      [Language.AR]: [
        "نعجن الدقيق والسميد والملح والماء حتى نحصل على عجين لين.",
        "نشكل كويرات صغيرة وندهنها بالزيت.",
        "نبسط الكرة بالزيت والزبدة ونرش السميد ونطويها على شكل مربع.",
        "نطهوها في مقلاة ساخنة من الجهتين حتى تتحمر."
      ],
      [Language.FR]: [
        "Pétrir la pâte.",
        "Former des boules.",
        "Étaler, beurrer, saupoudrer de semoule et plier.",
        "Cuire à la poêle."
      ],
      [Language.EN]: [
        "Knead the dough.",
        "Form small balls.",
        "Roll out, butter, sprinkle semolina and fold.",
        "Cook in a pan."
      ]
    },
    tips: {
      [Language.AR]: ["الدلك الجيد هو سر التوريق.", "اترك العجين يرتاح قبل البدء بالبسط."],
      [Language.FR]: ["Bien pétrir.", "Laisser reposer la pâte."],
      [Language.EN]: ["Knead well for lamination.", "Let the dough rest before rolling."]
    },
    servingMethod: {
      [Language.AR]: "تقدم ساخنة مع العسل أو الجبن والشاي المغربي.",
      [Language.FR]: "Servir avec du miel et du thé.",
      [Language.EN]: "Serve with honey and tea."
    },
    keywords: ["مسمن", "فطائر", "رمضان", "msemen", "flatbread"]
  },
  {
    id: "ram-07",
    name: {
      [Language.AR]: "البطبوط المعمر",
      [Language.FR]: "Batbout Farci",
      [Language.EN]: "Stuffed Batbout"
    },
    category: Category.RAMADAN,
    subCategory: "Appetizer",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "خبز صغير منفوخ محشو بخليط من الخضر واللحم المفروم أو الطون.",
      [Language.FR]: "Petits pains moelleux farcis à la viande ou au thon.",
      [Language.EN]: "Small fluffy breads stuffed with meat or tuna."
    },
    prepTime: { [Language.AR]: "40 دقيقة", [Language.FR]: "40 min", [Language.EN]: "40 min" },
    cookTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    servings: 12,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["عجين البطبوط (دقيق، سميد، خميرة، ملح)", "لحم مفروم", "بصل مفروم", "فلفل ألوان", "زيتون أخضر", "توابل (ملح، فلفل، بابريكا، كامون)"],
      [Language.FR]: ["Pâte à batbout", "Viande hachée", "Oignon", "Poivrons", "Olives", "Épices"],
      [Language.EN]: ["Batbout dough", "Minced meat", "Onion", "Peppers", "Olives", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نحضر عجين البطبوط ونتركه يختمر، ثم نشكل دوائر صغيرة ونطهوها في المقلاة.",
        "نشحر البصل والفلفل مع اللحم المفروم والتوابل حتى تنضج الحشوة.",
        "نفتح البطبوط من الجانب ونحشوه بالخليط.",
        "يمكن إضافة الخس أو المايونيز حسب الرغبة."
      ],
      [Language.FR]: [
        "Préparer et cuire les batbouts.",
        "Sauter la viande avec les légumes et épices.",
        "Ouvrir et farcir les pains."
      ],
      [Language.EN]: [
        "Prepare and cook the batbouts.",
        "Sauté meat with vegetables and spices.",
        "Open and stuff the breads."
      ]
    },
    tips: {
      [Language.AR]: ["يجب أن يكون البطبوط فارغاً من الداخل ليسهل حشوه.", "لا تبالغ في طهي الحشوة لتبقى طرية."],
      [Language.FR]: ["Le pain doit être bien gonflé.", "Ne pas trop cuire la farce."],
      [Language.EN]: ["Bread should be well-puffed.", "Don't overcook the filling."]
    },
    servingMethod: {
      [Language.AR]: "تقدم كوجبة خفيفة في الإفطار.",
      [Language.FR]: "Servir comme entrée.",
      [Language.EN]: "Serve as an appetizer."
    },
    keywords: ["بطبوط", "معمر", "رمضان", "batbout", "stuffed"]
  },
  {
    id: "ram-08",
    name: {
      [Language.AR]: "ميني بسطيلة بالدجاج",
      [Language.FR]: "Mini Pastilla au Poulet",
      [Language.EN]: "Mini Chicken Pastilla"
    },
    category: Category.RAMADAN,
    subCategory: "Appetizer",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "بسطيلة صغيرة تجمع بين ملوحة الدجاج وحلاوة اللوز والقرفة.",
      [Language.FR]: "Mini tourtes sucrées-salées au poulet et amandes.",
      [Language.EN]: "Sweet and savory mini pies with chicken and almonds."
    },
    prepTime: { [Language.AR]: "60 دقيقة", [Language.FR]: "60 min", [Language.EN]: "60 min" },
    cookTime: { [Language.AR]: "30 دقيقة", [Language.FR]: "30 min", [Language.EN]: "30 min" },
    servings: 10,
    difficulty: { [Language.AR]: "صعب", [Language.FR]: "Difficile", [Language.EN]: "Hard" },
    ingredients: {
      [Language.AR]: ["ورقة البسطيلة", "دجاجة كاملة", "بصل مفروم بكثرة", "بيض", "لوز مقلي ومطحون", "قرفة، سكر صقيل", "توابل مغربية (زعفران، زنجبيل، ملح، سمن)"],
      [Language.FR]: ["Feuilles de pastilla", "Poulet", "Oignons", "Œufs", "Amandes", "Cannelle, sucre", "Épices"],
      [Language.EN]: ["Pastilla sheets", "Chicken", "Onions", "Eggs", "Almonds", "Cinnamon, sugar", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نطهو الدجاج مع البصل والتوابل حتى ينضج، ثم نفتته.",
        "نضيف البيض للمرق المتبقي حتى يتخثر.",
        "نخلط اللوز مع القرفة والسكر.",
        "نضع طبقات الدجاج، خليط البيض، واللوز داخل ورقة البسطيلة ونطويها.",
        "ندهنها بالزبدة ونطهوها في الفرن حتى تتحمر."
      ],
      [Language.FR]: [
        "Cuire le poulet, l'émietter.",
        "Réduire la sauce avec les œufs.",
        "Mélanger amandes, sucre et cannelle.",
        "Façonner les mini pastillas.",
        "Cuire au four."
      ],
      [Language.EN]: [
        "Cook chicken, shred it.",
        "Reduce sauce with eggs.",
        "Mix almonds, sugar and cinnamon.",
        "Shape mini pastillas.",
        "Bake in the oven."
      ]
    },
    tips: {
      [Language.AR]: ["يجب تصفية الدجاج والبيض جيداً من المرق لكي لا تقطع الورقة.", "استخدمي الزبدة المذابة لدهن الورقة."],
      [Language.FR]: ["Bien égoutter la farce.", "Utiliser du beurre fondu."],
      [Language.EN]: ["Drain the filling well.", "Use melted butter."]
    },
    servingMethod: {
      [Language.AR]: "تزين بالقرفة والسكر الصقيل.",
      [Language.FR]: "Décorer avec cannelle et sucre glace.",
      [Language.EN]: "Garnish with cinnamon and powdered sugar."
    },
    keywords: ["بسطيلة", "دجاج", "رمضان", "pastilla", "chicken"]
  },
  {
    id: "ram-09",
    name: {
      [Language.AR]: "ميني بسطيلة بالحوت",
      [Language.FR]: "Mini Pastilla aux Poissons",
      [Language.EN]: "Mini Seafood Pastilla"
    },
    category: Category.RAMADAN,
    subCategory: "Appetizer",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "بسطيلة صغيرة محشوة بتشكيلة من فواكه البحر والشعرية الصينية.",
      [Language.FR]: "Mini tourtes aux fruits de mer et vermicelles.",
      [Language.EN]: "Mini seafood pies with vermicelli."
    },
    prepTime: { [Language.AR]: "60 دقيقة", [Language.FR]: "60 min", [Language.EN]: "60 min" },
    cookTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    servings: 10,
    difficulty: { [Language.AR]: "صعب", [Language.FR]: "Difficile", [Language.EN]: "Hard" },
    ingredients: {
      [Language.AR]: ["ورقة البسطيلة", "سمك أبيض", "قيمرون (جمبري)", "كلامار", "شعرية صينية", "فطر أسود", "حامض مصير، هريسة", "شرمولة مغربية (ثوم، قزبر، بقدونس، توابل)"],
      [Language.FR]: ["Feuilles de pastilla", "Poisson blanc", "Crevettes", "Calamars", "Vermicelles chinois", "Champignons noirs", "Citron confit, harissa", "Chermoula"],
      [Language.EN]: ["Pastilla sheets", "White fish", "Shrimp", "Calamari", "Chinese vermicelli", "Black mushrooms", "Preserved lemon, harissa", "Chermoula"]
    },
    steps: {
      [Language.AR]: [
        "نشحر فواكه البحر مع الشرمولة والزبدة.",
        "نضع الشعرية الصينية في ماء ساخن ثم نقطعها ونضيفها للسمك.",
        "نضيف الفطر الأسود والحامض المصير والهريسة.",
        "نحشو ورقة البسطيلة بالخليط ونطويها.",
        "نطهوها في الفرن حتى تصبح مقرمشة."
      ],
      [Language.FR]: [
        "Sauter les fruits de mer avec la chermoula.",
        "Préparer les vermicelles et mélanger.",
        "Ajouter champignons et citron.",
        "Façonner et cuire au four."
      ],
      [Language.EN]: [
        "Sauté seafood with chermoula.",
        "Prepare vermicelli and mix.",
        "Add mushrooms and lemon.",
        "Shape and bake in the oven."
      ]
    },
    tips: {
      [Language.AR]: ["لا تبالغي في طهي السمك لكي لا يجف.", "الهريسة تعطي نكهة رائعة لمحبي الحار."],
      [Language.FR]: ["Ne pas trop cuire le poisson.", "Ajouter de la harissa pour le piquant."],
      [Language.EN]: ["Don't overcook the fish.", "Add harissa for heat."]
    },
    servingMethod: {
      [Language.AR]: "تزين بقطع الليمون والقيمرون.",
      [Language.FR]: "Décorer avec citron et crevettes.",
      [Language.EN]: "Garnish with lemon and shrimp."
    },
    keywords: ["بسطيلة", "حوت", "رمضان", "pastilla", "seafood"]
  },
  {
    id: "ram-10",
    name: {
      [Language.AR]: "التمر المحشي",
      [Language.FR]: "Dattes Farcies",
      [Language.EN]: "Stuffed Dates"
    },
    category: Category.RAMADAN,
    subCategory: "Sweet",
    image: "https://images.unsplash.com/photo-1590004953392-5aba2e785997?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "تمر من النوع الجيد محشو بعقدة اللوز الملونة، زينة مائدة الإفطار.",
      [Language.FR]: "Dattes de qualité farcies à la pâte d'amande colorée.",
      [Language.EN]: "Quality dates stuffed with colored almond paste."
    },
    prepTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    cookTime: { [Language.AR]: "0 دقيقة", [Language.FR]: "0 min", [Language.EN]: "0 min" },
    servings: 20,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["تمر (مجهول أو نوع جيد)", "عقدة اللوز", "ملونات غذائية", "ماء زهر", "جوز أو لوز للتزيين"],
      [Language.FR]: ["Dattes", "Pâte d'amande", "Colorants", "Eau de fleur d'oranger", "Noix ou amandes"],
      [Language.EN]: ["Dates", "Almond paste", "Food coloring", "Orange blossom water", "Walnuts or almonds"]
    },
    steps: {
      [Language.AR]: [
        "نمسح التمر بماء الزهر ونزيل النواة.",
        "نلون عقدة اللوز حسب الرغبة ونشكل أصابع صغيرة.",
        "نضع العقدة داخل التمرة.",
        "نزين الوجه بالجوز أو اللوز أو خطوط من الشكلاط."
      ],
      [Language.FR]: [
        "Nettoyer les dattes et dénoyauter.",
        "Colorer la pâte d'amande et former des boudins.",
        "Farcir les dattes.",
        "Décorer avec des noix."
      ],
      [Language.EN]: [
        "Clean dates and remove pits.",
        "Color almond paste and form small logs.",
        "Stuff the dates.",
        "Garnish with walnuts."
      ]
    },
    tips: {
      [Language.AR]: ["استخدمي تمراً طرياً وكبيراً.", "ماء الزهر يعطي رائحة منعشة."],
      [Language.FR]: ["Utiliser des dattes charnues.", "L'eau de fleur d'oranger parfume bien."],
      [Language.EN]: ["Use fleshy dates.", "Orange blossom water adds a nice scent."]
    },
    servingMethod: {
      [Language.AR]: "تقدم في طبق التقديم بجانب الحليب أو العصير.",
      [Language.FR]: "Servir avec du lait.",
      [Language.EN]: "Serve with milk."
    },
    keywords: ["تمر", "محشي", "رمضان", "dates", "stuffed"]
  },
  {
    id: "ram-11",
    name: {
      [Language.AR]: "السفنج المغربي",
      [Language.FR]: "Sfenj Marocain",
      [Language.EN]: "Moroccan Sfenj"
    },
    category: Category.RAMADAN,
    subCategory: "Appetizer",
    image: "https://images.unsplash.com/photo-1599121106328-907003214ab9?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "فطائر مقلية مقرمشة من الخارج وطرية من الداخل، شعبية جداً.",
      [Language.FR]: "Beignets marocains croustillants et moelleux.",
      [Language.EN]: "Crispy and fluffy Moroccan donuts."
    },
    prepTime: { [Language.AR]: "60 دقيقة", [Language.FR]: "60 min", [Language.EN]: "60 min" },
    cookTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    servings: 10,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["500غ دقيق", "ملعقة كبيرة خميرة خبز", "ملح", "ماء دافئ", "زيت للقلي"],
      [Language.FR]: ["500g farine", "Levure boulangère", "Sel", "Eau tiède", "Huile"],
      [Language.EN]: ["500g flour", "Yeast", "Salt", "Warm water", "Oil"]
    },
    steps: {
      [Language.AR]: [
        "نعجن الدقيق مع الخميرة والملح والماء حتى نحصل على عجين مطاطي ولين جداً.",
        "نترك العجين يختمر حتى يتضاعف حجمه.",
        "نسخن الزيت في مقلاتين (واحدة بها زيت قليل والأخرى زيت غزير).",
        "نشكل حلقة بالعجين ونضعها في المقلاة الأولى ثم ننقلها للثانية لتنتفخ.",
        "نقلبها حتى تتحمر من الجهتين."
      ],
      [Language.FR]: [
        "Pétrir la pâte jusqu'à élasticité.",
        "Laisser lever.",
        "Former des anneaux.",
        "Frire dans deux poêles successives.",
        "Dorer des deux côtés."
      ],
      [Language.EN]: [
        "Knead dough until elastic.",
        "Let rise.",
        "Form rings.",
        "Fry in two successive pans.",
        "Brown on both sides."
      ]
    },
    tips: {
      [Language.AR]: ["سر السفنج هو العجين اللين جداً وطريقة القلي في مقلاتين.", "يؤكل ساخناً."],
      [Language.FR]: ["Pâte très souple.", "Technique des deux poêles."],
      [Language.EN]: ["Very soft dough.", "Two-pan frying technique."]
    },
    servingMethod: {
      [Language.AR]: "يقدم ساخناً مع الشاي المغربي.",
      [Language.FR]: "Servir chaud avec du thé.",
      [Language.EN]: "Serve hot with tea."
    },
    keywords: ["سفنج", "فطائر", "رمضان", "sfenj", "donuts"]
  },
  {
    id: "ram-12",
    name: {
      [Language.AR]: "طاجين الدجاج بالزيتون والحامض",
      [Language.FR]: "Tajine de Poulet aux Olives",
      [Language.EN]: "Chicken Tajine with Olives"
    },
    category: Category.RAMADAN,
    subCategory: "Main",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "طاجين مغربي أصيل بالدجاج المحمر والزيتون والحامض المصير.",
      [Language.FR]: "Tajine classique au poulet, olives et citron confit.",
      [Language.EN]: "Classic tajine with chicken, olives and preserved lemon."
    },
    prepTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    cookTime: { [Language.AR]: "60 دقيقة", [Language.FR]: "60 min", [Language.EN]: "60 min" },
    servings: 4,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["دجاجة مقطعة", "بصل مفروم", "ثوم، قزبر، بقدونس", "زيتون أحمر", "حامض مصير", "توابل (زعفران، زنجبيل، كركم، ملح، فلفل)"],
      [Language.FR]: ["Poulet", "Oignons", "Ail, herbes", "Olives rouges", "Citron confit", "Épices"],
      [Language.EN]: ["Chicken", "Onions", "Garlic, herbs", "Red olives", "Preserved lemon", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نشرمل الدجاج بالتوابل والثوم والأعشاب.",
        "في الطاجين، نضع البصل والزيت والدجاج.",
        "نضيف القليل من الماء ونتركه يطهى على نار هادئة.",
        "عندما يقترب النضج، نضيف الزيتون والحامض المصير.",
        "نتركه حتى يتخثر المرق (الدغميرة)."
      ],
      [Language.FR]: [
        "Mariner le poulet.",
        "Cuire avec oignons et huile dans le tajine.",
        "Ajouter de l'eau et mijoter.",
        "Ajouter olives et citron à la fin.",
        "Réduire la sauce."
      ],
      [Language.EN]: [
        "Marinate chicken.",
        "Cook with onions and oil in the tajine.",
        "Add water and simmer.",
        "Add olives and lemon at the end.",
        "Reduce the sauce."
      ]
    },
    tips: {
      [Language.AR]: ["طهي الطاجين على الفحم يعطي نكهة ألذ.", "لا تكثري من الملح لأن الزيتون والحامض مالحان."],
      [Language.FR]: ["Cuisson au charbon recommandée.", "Attention au sel."],
      [Language.EN]: ["Charcoal cooking recommended.", "Be careful with salt."]
    },
    servingMethod: {
      [Language.AR]: "يقدم ساخناً مع الخبز المغربي.",
      [Language.FR]: "Servir chaud avec du pain.",
      [Language.EN]: "Serve hot with Moroccan bread."
    },
    keywords: ["طاجين", "دجاج", "رمضان", "tajine", "chicken"]
  },
  {
    id: "ram-13",
    name: {
      [Language.AR]: "طاجين اللحم بالبرقوق والمشمش",
      [Language.FR]: "Tajine de Viande aux Pruneaux",
      [Language.EN]: "Meat Tajine with Prunes"
    },
    category: Category.RAMADAN,
    subCategory: "Main",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "طبق المناسبات الفاخر، يجمع بين ملوحة اللحم وحلاوة الفواكه المعسلة.",
      [Language.FR]: "Plat de fête combinant viande savoureuse et fruits caramélisés.",
      [Language.EN]: "Festive dish combining savory meat and caramelized fruits."
    },
    prepTime: { [Language.AR]: "30 دقيقة", [Language.FR]: "30 min", [Language.EN]: "30 min" },
    cookTime: { [Language.AR]: "90 دقيقة", [Language.FR]: "90 min", [Language.EN]: "90 min" },
    servings: 4,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["كيلو لحم غنم", "بصل مفروم", "برقوق مجفف", "مشمش مجفف", "لوز مقلي", "توابل (قرفة، زنجبيل، زعفران، ملح، فلفل)", "عسل"],
      [Language.FR]: ["Viande d'agneau", "Oignons", "Pruneaux", "Abricots", "Amandes", "Épices", "Miel"],
      [Language.EN]: ["Lamb meat", "Onions", "Prunes", "Apricots", "Almonds", "Spices", "Honey"]
    },
    steps: {
      [Language.AR]: [
        "نطهو اللحم مع البصل والتوابل في الطاجين حتى ينضج.",
        "نعسل البرقوق والمشمش في كسرولة مع القليل من المرق والقرفة والعسل.",
        "نزين الطاجين بالفواكه المعسلة واللوز المقلي.",
        "نرش القليل من الزنجلان على البرقوق."
      ],
      [Language.FR]: [
        "Cuire la viande avec oignons et épices.",
        "Caraméliser les fruits avec miel et cannelle.",
        "Dresser et décorer avec amandes et sésame."
      ],
      [Language.EN]: [
        "Cook meat with onions and spices.",
        "Caramelize fruits with honey and cinnamon.",
        "Arrange and garnish with almonds and sesame."
      ]
    },
    tips: {
      [Language.AR]: ["استخدمي لحم الغنم لنتائج أفضل.", "المرق يجب أن يكون ثقيلاً ومعسلاً."],
      [Language.FR]: ["Utiliser de l'agneau.", "Sauce onctueuse."],
      [Language.EN]: ["Use lamb.", "Sauce should be thick."]
    },
    servingMethod: {
      [Language.AR]: "يقدم في طبق كبير مع الخبز.",
      [Language.FR]: "Servir dans un grand plat.",
      [Language.EN]: "Serve in a large dish."
    },
    keywords: ["طاجين", "لحم", "برقوق", "رمضان", "tajine", "meat"]
  },
  {
    id: "ram-14",
    name: {
      [Language.AR]: "الكسكس المغربي بالخضر",
      [Language.FR]: "Couscous aux Légumes",
      [Language.EN]: "Vegetable Couscous"
    },
    category: Category.RAMADAN,
    subCategory: "Main",
    image: "https://images.unsplash.com/photo-1585932231552-29877a5b50ec?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "الطبق الوطني المغربي، غني بالخضر السبعة واللحم، يقدم غالباً في ليلة القدر.",
      [Language.FR]: "Le plat national, riche en légumes et viande.",
      [Language.EN]: "The national dish, rich in vegetables and meat."
    },
    prepTime: { [Language.AR]: "45 دقيقة", [Language.FR]: "45 min", [Language.EN]: "45 min" },
    cookTime: { [Language.AR]: "120 دقيقة", [Language.FR]: "120 min", [Language.EN]: "120 min" },
    servings: 6,
    difficulty: { [Language.AR]: "صعب", [Language.FR]: "Difficile", [Language.EN]: "Hard" },
    ingredients: {
      [Language.AR]: ["كسكس", "لحم", "خضر (جزر، لفت، قرع، ملفوف، فول)", "حمص", "بصل، طماطم", "سمن، توابل"],
      [Language.FR]: ["Couscous", "Viande", "Légumes variés", "Pois chiches", "Oignon, tomate", "Smen, épices"],
      [Language.EN]: ["Couscous", "Meat", "Assorted vegetables", "Chickpeas", "Onion, tomato", "Smen, spices"]
    },
    steps: {
      [Language.AR]: [
        "نحضر المرق باللحم والحمص والخضر الصلبة.",
        "نحضر الكسكس بالبخار لثلاث مرات.",
        "نضيف الخضر اللينة والسمن في المرحلة الأخيرة.",
        "نسقي الكسكس بالمرق ونرتب الخضر واللحم."
      ],
      [Language.FR]: [
        "Préparer le bouillon.",
        "Cuire le couscous à la vapeur (3 fois).",
        "Ajouter légumes tendres et smen.",
        "Dresser et arroser."
      ],
      [Language.EN]: [
        "Prepare the broth.",
        "Steam couscous (3 times).",
        "Add soft vegetables and smen.",
        "Arrange and moisten."
      ]
    },
    tips: {
      [Language.AR]: ["سر الكسكس هو 'التفويرة' الجيدة.", "لا تكثري الماء عند سقي الكسكس."],
      [Language.FR]: ["Bien cuire à la vapeur.", "Attention à l'arrosage."],
      [Language.EN]: ["Steam well.", "Be careful with moistening."]
    },
    servingMethod: {
      [Language.AR]: "يقدم في 'قصعة' كبيرة.",
      [Language.FR]: "Servir dans un grand plat traditionnel.",
      [Language.EN]: "Serve in a large traditional dish."
    },
    keywords: ["كسكس", "خضر", "رمضان", "couscous", "vegetables"]
  },
  {
    id: "ram-15",
    name: {
      [Language.AR]: "سلطة الزعلوك المغربية",
      [Language.FR]: "Zaalouk d'Aubergines",
      [Language.EN]: "Eggplant Zaalouk"
    },
    category: Category.RAMADAN,
    subCategory: "Appetizer",
    image: "https://images.unsplash.com/photo-1590577976322-3d2d6e2130ee?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "مقبلات دافئة من الباذنجان والطماطم المشوية والمتبلة.",
      [Language.FR]: "Entrée tiède d'aubergines et tomates épicées.",
      [Language.EN]: "Warm appetizer of spiced eggplants and tomatoes."
    },
    prepTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    cookTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    servings: 4,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["باذنجان", "طماطم", "ثوم", "قزبر وبقدونس", "زيت زيتون", "توابل (كامون، بابريكا، ملح)"],
      [Language.FR]: ["Aubergines", "Tomates", "Ail", "Herbes", "Huile d'olive", "Épices"],
      [Language.EN]: ["Eggplants", "Tomatoes", "Garlic", "Herbs", "Olive oil", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نشوي الباذنجان أو نسلقه ثم نقطعه.",
        "نشحر الطماطم مع الثوم والتوابل والزيت.",
        "نضيف الباذنجان ونمعكه جيداً مع الخليط.",
        "نتركه يطهى حتى يتبخر الماء تماماً."
      ],
      [Language.FR]: [
        "Cuire les aubergines.",
        "Sauter tomates et ail.",
        "Mélanger et écraser.",
        "Réduire jusqu'à évaporation."
      ],
      [Language.EN]: [
        "Cook eggplants.",
        "Sauté tomatoes and garlic.",
        "Mix and mash.",
        "Reduce until water evaporates."
      ]
    },
    tips: {
      [Language.AR]: ["شوي الباذنجان يعطي نكهة مدخنة رائعة.", "أضيفي القليل من عصير الليمون في الأخير."],
      [Language.FR]: ["Griller pour le goût fumé.", "Ajouter du citron."],
      [Language.EN]: ["Grill for smoky flavor.", "Add lemon."]
    },
    servingMethod: {
      [Language.AR]: "تقدم دافئة أو باردة مع الخبز.",
      [Language.FR]: "Servir tiède ou froid.",
      [Language.EN]: "Serve warm or cold."
    },
    keywords: ["زعلوك", "باذنجان", "رمضان", "zaalouk", "eggplant"]
  },
  {
    id: "ram-16",
    name: {
      [Language.AR]: "سلطة التكتوكة",
      [Language.FR]: "Taktouka Marocaine",
      [Language.EN]: "Moroccan Taktouka"
    },
    category: Category.RAMADAN,
    subCategory: "Appetizer",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سلطة مغربية من الفلفل المشوي والطماطم، لذيذة ومنعشة.",
      [Language.FR]: "Salade de poivrons grillés et tomates.",
      [Language.EN]: "Grilled pepper and tomato salad."
    },
    prepTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    cookTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    servings: 4,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["فلفل أخضر وأحمر", "طماطم", "ثوم", "زيت زيتون", "توابل (كامون، بابريكا، ملح)"],
      [Language.FR]: ["Poivrons", "Tomates", "Ail", "Huile d'olive", "Épices"],
      [Language.EN]: ["Peppers", "Tomatoes", "Garlic", "Olive oil", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نشوي الفلفل ونقشره ونقطعه مكعبات.",
        "نطهو الطماطم المقطعة مع الثوم والتوابل والزيت.",
        "نضيف الفلفل ونترك الكل يطهى حتى ينسجم.",
        "تقدم دافئة أو باردة."
      ],
      [Language.FR]: [
        "Griller et couper les poivrons.",
        "Cuire les tomates avec l'ail.",
        "Mélanger et mijoter.",
        "Servir."
      ],
      [Language.EN]: [
        "Grill and chop peppers.",
        "Cook tomatoes with garlic.",
        "Mix and simmer.",
        "Serve."
      ]
    },
    tips: {
      [Language.AR]: ["شوي الفلفل ضروري للنكهة الأصلية.", "يمكن إضافة القليل من الحار."],
      [Language.FR]: ["Griller les poivrons.", "Piment optionnel."],
      [Language.EN]: ["Grill the peppers.", "Optional chili."]
    },
    servingMethod: {
      [Language.AR]: "تقدم كمقبلات مع الخبز.",
      [Language.FR]: "Servir avec du pain.",
      [Language.EN]: "Serve with bread."
    },
    keywords: ["تكتوكة", "فلفل", "رمضان", "taktouka", "peppers"]
  },
  {
    id: "ram-17",
    name: {
      [Language.AR]: "عصير الأفوكادو بالحليب",
      [Language.FR]: "Jus d'Avocat au Lait",
      [Language.EN]: "Avocado Milkshake"
    },
    category: Category.DRINKS,
    subCategory: "Drink",
    image: "https://images.unsplash.com/photo-1543648964-18ab22b3dde5?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "عصير مغذٍ وكريمي، يمنح شعوراً بالشبع والطاقة.",
      [Language.FR]: "Boisson onctueuse et nutritive.",
      [Language.EN]: "Creamy and nutritious drink."
    },
    prepTime: { [Language.AR]: "5 دقائق", [Language.FR]: "5 min", [Language.EN]: "5 min" },
    cookTime: { [Language.AR]: "0 دقيقة", [Language.FR]: "0 min", [Language.EN]: "0 min" },
    servings: 2,
    difficulty: { [Language.AR]: "سهل جداً", [Language.FR]: "Très Facile", [Language.EN]: "Very Easy" },
    ingredients: {
      [Language.AR]: ["حبة أفوكادو ناضجة", "نصف لتر حليب بارد", "سكر أو عسل حسب الذوق", "تمر أو مكسرات (اختياري)"],
      [Language.FR]: ["Avocat", "Lait froid", "Sucre ou miel", "Dattes (optionnel)"],
      [Language.EN]: ["Avocado", "Cold milk", "Sugar or honey", "Dates (optional)"]
    },
    steps: {
      [Language.AR]: [
        "نستخرج لب الأفوكادو ونضعه في الخلاط.",
        "نضيف الحليب البارد والسكر.",
        "نخلط جيداً حتى نحصل على قوام كريمي.",
        "نضيف التمر المقطع إذا رغبنا في قيمة غذائية أكبر."
      ],
      [Language.FR]: [
        "Mixer l'avocat avec le lait.",
        "Ajouter le sucre.",
        "Mélanger jusqu'à onctuosité."
      ],
      [Language.EN]: [
        "Blend avocado with milk.",
        "Add sugar.",
        "Mix until creamy."
      ]
    },
    tips: {
      [Language.AR]: ["يجب أن يكون الحليب بارداً جداً.", "يمكن إضافة القليل من اللوز المطحون."],
      [Language.FR]: ["Lait très froid.", "Ajouter des amandes."],
      [Language.EN]: ["Very cold milk.", "Add almonds."]
    },
    servingMethod: {
      [Language.AR]: "يقدم بارداً فور تحضيره.",
      [Language.FR]: "Servir frais immédiatement.",
      [Language.EN]: "Serve cold immediately."
    },
    keywords: ["عصير", "أفوكادو", "رمضان", "juice", "avocado"]
  },
  {
    id: "ram-18",
    name: {
      [Language.AR]: "عصير البرتقال والجزر",
      [Language.FR]: "Jus d'Orange et Carottes",
      [Language.EN]: "Orange and Carrot Juice"
    },
    category: Category.DRINKS,
    subCategory: "Drink",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "عصير منعش وغني بالفيتامينات، مثالي لكسر الصيام.",
      [Language.FR]: "Boisson rafraîchissante riche en vitamines.",
      [Language.EN]: "Refreshing drink rich in vitamins."
    },
    prepTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    cookTime: { [Language.AR]: "10 دقائق", [Language.FR]: "10 min", [Language.EN]: "10 min" },
    servings: 4,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["لتر عصير برتقال طازج", "4 حبات جزر مسلوقة", "سكر حسب الذوق", "قليل من ماء الزهر"],
      [Language.FR]: ["Jus d'orange", "Carottes bouillies", "Sucre", "Eau de fleur d'oranger"],
      [Language.EN]: ["Orange juice", "Boiled carrots", "Sugar", "Orange blossom water"]
    },
    steps: {
      [Language.AR]: [
        "نسلق الجزر ونتركه يبرد.",
        "نضعه في الخلاط مع عصير البرتقال والسكر.",
        "نضيف ماء الزهر ونخلط جيداً.",
        "نصفيه إذا لزم الأمر ونبرده."
      ],
      [Language.FR]: [
        "Mixer carottes et jus d'orange.",
        "Ajouter sucre et eau de fleur d'oranger.",
        "Servir frais."
      ],
      [Language.EN]: [
        "Blend carrots and orange juice.",
        "Add sugar and orange blossom water.",
        "Serve cold."
      ]
    },
    tips: {
      [Language.AR]: ["استخدمي ماء سلق الجزر إذا كان نظيفاً.", "ماء الزهر يعطي نكهة مغربية أصيلة."],
      [Language.FR]: ["Utiliser l'eau de cuisson.", "L'eau de fleur d'oranger est la touche finale."],
      [Language.EN]: ["Use the cooking water.", "Orange blossom water is the final touch."]
    },
    servingMethod: {
      [Language.AR]: "يقدم بارداً جداً.",
      [Language.FR]: "Servir très frais.",
      [Language.EN]: "Serve very cold."
    },
    keywords: ["عصير", "برتقال", "جزر", "رمضان", "juice", "orange"]
  },
  {
    id: "ram-19",
    name: {
      [Language.AR]: "شوربة البلبولة (الشعير) بالحليب",
      [Language.FR]: "Soupe d'Orge au Lait",
      [Language.EN]: "Barley Soup with Milk"
    },
    category: Category.RAMADAN,
    subCategory: "Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "شوربة صحية وخفيفة من سميد الشعير والحليب والزعتر.",
      [Language.FR]: "Soupe saine à l'orge, lait et thym.",
      [Language.EN]: "Healthy barley soup with milk and thyme."
    },
    prepTime: { [Language.AR]: "10 دقائق", [Language.FR]: "10 min", [Language.EN]: "10 min" },
    cookTime: { [Language.AR]: "30 دقيقة", [Language.FR]: "30 min", [Language.EN]: "30 min" },
    servings: 4,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["كأس بلبولة (شعير)", "لتر ماء", "نصف لتر حليب", "ملح، كامون، زيت زيتون", "زعتر يابس"],
      [Language.FR]: ["Orge", "Eau", "Lait", "Sel, cumin, huile d'olive", "Thym"],
      [Language.EN]: ["Barley", "Water", "Milk", "Salt, cumin, olive oil", "Thym"]
    },
    steps: {
      [Language.AR]: [
        "نغسل البلبولة ونضعها في طنجرة مع الماء والملح والزيت.",
        "نتركها تطهى على نار هادئة حتى تنضج وتمتص الماء.",
        "نضيف الحليب والزعتر المحكوك والكمون.",
        "نتركها تغلي قليلاً ثم نقدمها."
      ],
      [Language.FR]: [
        "Cuire l'orge dans l'eau.",
        "Ajouter lait, thym et épices.",
        "Mijoter et servir."
      ],
      [Language.EN]: [
        "Cook barley in water.",
        "Add milk, thyme and spices.",
        "Simmer and serve."
      ]
    },
    tips: {
      [Language.AR]: ["الزعتر يسهل الهضم ويعطي نكهة رائعة.", "يمكن إضافة القليل من السمن."],
      [Language.FR]: ["Le thym aide à la digestion.", "Ajouter du smen."],
      [Language.EN]: ["Thyme helps digestion.", "Add smen."]
    },
    servingMethod: {
      [Language.AR]: "تقدم ساخنة في زلافي.",
      [Language.FR]: "Servir chaud.",
      [Language.EN]: "Serve hot."
    },
    keywords: ["شوربة", "بلبولة", "شعير", "رمضان", "soup", "barley"]
  },
  {
    id: "ram-20",
    name: {
      [Language.AR]: "شوربة السمك المغربية",
      [Language.FR]: "Soupe de Poisson Marocaine",
      [Language.EN]: "Moroccan Fish Soup"
    },
    category: Category.RAMADAN,
    subCategory: "Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "شوربة غنية بنكهة البحر والتوابل المغربية.",
      [Language.FR]: "Soupe savoureuse aux poissons et épices.",
      [Language.EN]: "Flavorful soup with fish and spices."
    },
    prepTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    cookTime: { [Language.AR]: "30 دقيقة", [Language.FR]: "30 min", [Language.EN]: "30 min" },
    servings: 4,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["سمك أبيض", "قيمرون", "بصل، جزر، كرفس", "طماطم", "شعرية صينية", "توابل السمك"],
      [Language.FR]: ["Poisson blanc", "Crevettes", "Légumes", "Tomate", "Vermicelles", "Épices"],
      [Language.EN]: ["White fish", "Shrimp", "Vegetables", "Tomato", "Vermicelli", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نطهو الخضر مع رؤوس القيمرون في الماء ثم نصفي المرق.",
        "نطحن الخضر ونعيدها للمرق.",
        "نضيف قطع السمك والقيمرون والشعرية الصينية.",
        "نضيف التوابل ونتركها تغلي حتى ينضج السمك."
      ],
      [Language.FR]: [
        "Préparer le bouillon de légumes et crevettes.",
        "Mixer les légumes.",
        "Ajouter poisson et vermicelles.",
        "Mijoter."
      ],
      [Language.EN]: [
        "Prepare vegetable and shrimp broth.",
        "Blend vegetables.",
        "Add fish and vermicelli.",
        "Simmer."
      ]
    },
    tips: {
      [Language.AR]: ["استخدمي مرق السمك لنكهة أقوى.", "أضيفي عصير الليمون عند التقديم."],
      [Language.FR]: ["Utiliser du fumet de poisson.", "Ajouter du citron."],
      [Language.EN]: ["Use fish stock.", "Add lemon."]
    },
    servingMethod: {
      [Language.AR]: "تقدم ساخنة مع قطع الخبز المحمص.",
      [Language.FR]: "Servir chaud avec des croûtons.",
      [Language.EN]: "Serve hot with croutons."
    },
    keywords: ["شوربة", "حوت", "سمك", "رمضان", "soup", "fish"]
  },
  {
    id: "ram-21",
    name: {
      [Language.AR]: "شوربة العدس المغربية",
      [Language.FR]: "Soupe de Lentilles Marocaine",
      [Language.EN]: "Moroccan Lentil Soup"
    },
    category: Category.RAMADAN,
    subCategory: "Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "شوربة مغذية وغنية بالحديد، بنكهة الكامون وزيت الزيتون.",
      [Language.FR]: "Soupe nutritive riche en fer, parfumée au cumin.",
      [Language.EN]: "Nutritious soup rich in iron, flavored with cumin."
    },
    prepTime: { [Language.AR]: "10 دقائق", [Language.FR]: "10 min", [Language.EN]: "10 min" },
    cookTime: { [Language.AR]: "30 دقيقة", [Language.FR]: "30 min", [Language.EN]: "30 min" },
    servings: 4,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["عدس أحمر أو بني", "بصل، ثوم", "طماطم محكوكة", "قزبر وبقدونس", "زيت زيتون", "توابل (كامون، بابريكا، كركم)"],
      [Language.FR]: ["Lentilles", "Oignon, ail", "Tomate", "Herbes", "Huile d'olive", "Épices"],
      [Language.EN]: ["Lentils", "Onion, garlic", "Tomato", "Herbs", "Olive oil", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نشحر البصل والثوم في الزيت.",
        "نضيف العدس المغسول والطماطم والتوابل والماء.",
        "نتركها تطهى حتى ينضج العدس تماماً.",
        "يمكن طحنها أو تركها كما هي حسب الرغبة."
      ],
      [Language.FR]: [
        "Sauter oignon et ail.",
        "Ajouter lentilles, tomate et eau.",
        "Cuire jusqu'à tendreté.",
        "Mixer si désiré."
      ],
      [Language.EN]: [
        "Sauté onion and garlic.",
        "Add lentils, tomato and water.",
        "Cook until tender.",
        "Blend if desired."
      ]
    },
    tips: {
      [Language.AR]: ["أضيفي الكامون في الأخير لتبقى نكهته قوية.", "زيت الزيتون ضروري عند التقديم."],
      [Language.FR]: ["Ajouter le cumin à la fin.", "Huile d'olive au service."],
      [Language.EN]: ["Add cumin at the end.", "Olive oil at serving."]
    },
    servingMethod: {
      [Language.AR]: "تقدم ساخنة مع قطرات من الليمون.",
      [Language.FR]: "Servir chaud avec du citron.",
      [Language.EN]: "Serve hot with lemon."
    },
    keywords: ["شوربة", "عدس", "رمضان", "soup", "lentils"]
  },
  {
    id: "ram-22",
    name: {
      [Language.AR]: "شوربة الخضر المطحونة",
      [Language.FR]: "Velouté de Légumes",
      [Language.EN]: "Creamy Vegetable Soup"
    },
    category: Category.RAMADAN,
    subCategory: "Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "شوربة كريمية ناعمة من الخضر الطازجة، خفيفة على المعدة.",
      [Language.FR]: "Soupe onctueuse aux légumes frais.",
      [Language.EN]: "Smooth soup with fresh vegetables."
    },
    prepTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    cookTime: { [Language.AR]: "25 دقيقة", [Language.FR]: "25 min", [Language.EN]: "25 min" },
    servings: 4,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["بطاطس، جزر، قرع أخضر", "لفت، كرفس", "بصل، ثوم", "زبدة أو زيت", "ملح، فلفل أسود", "جبن كريمي (اختياري)"],
      [Language.FR]: ["Pommes de terre, carottes, courgettes", "Navet, céleri", "Oignon, ail", "Beurre", "Sel, poivre", "Fromage"],
      [Language.EN]: ["Potatoes, carrots, zucchini", "Turnip, celery", "Onion, garlic", "Butter", "Salt, pepper", "Cream cheese"]
    },
    steps: {
      [Language.AR]: [
        "نقطع الخضر مكعبات ونشحرها في الزبدة.",
        "نضيف الماء والملح والفلفل ونتركها تطهى.",
        "نطحن الخضر جيداً في الخلاط.",
        "نضيف الجبن الكريمي ونعيدها للنار قليلاً."
      ],
      [Language.FR]: [
        "Couper et sauter les légumes.",
        "Cuire dans l'eau.",
        "Mixer finement.",
        "Ajouter le fromage."
      ],
      [Language.EN]: [
        "Chop and sauté vegetables.",
        "Cook in water.",
        "Blend finely.",
        "Add cheese."
      ]
    },
    tips: {
      [Language.AR]: ["يمكن إضافة القليل من القشدة الطرية لقوام أغنى.", "الكرفس يعطي نكهة مميزة."],
      [Language.FR]: ["Ajouter de la crème.", "Le céleri parfume bien."],
      [Language.EN]: ["Add cream for richness.", "Celery adds great flavor."]
    },
    servingMethod: {
      [Language.AR]: "تقدم ساخنة مع خبز محمص.",
      [Language.FR]: "Servir avec des croûtons.",
      [Language.EN]: "Serve with croutons."
    },
    keywords: ["شوربة", "خضر", "رمضان", "soup", "vegetables"]
  },
  {
    id: "ram-23",
    name: {
      [Language.AR]: "بريوات بالدجاج والشعرية الصينية",
      [Language.FR]: "Briouates Poulet Vermicelles",
      [Language.EN]: "Chicken & Vermicelli Briouates"
    },
    category: Category.RAMADAN,
    subCategory: "Appetizer",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "مثلثات مقرمشة محشوة بالدجاج المفتت والشعرية الصينية المتبلة.",
      [Language.FR]: "Triangles croustillants au poulet et vermicelles.",
      [Language.EN]: "Crispy triangles with chicken and vermicelli."
    },
    prepTime: { [Language.AR]: "40 دقيقة", [Language.FR]: "40 min", [Language.EN]: "40 min" },
    cookTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    servings: 20,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["ورقة البسطيلة", "صدر دجاج", "شعرية صينية", "بصل، زيتون", "توابل (زنجبيل، كركم، ملح، فلفل)"],
      [Language.FR]: ["Feuilles de pastilla", "Poulet", "Vermicelles", "Oignon, olives", "Épices"],
      [Language.EN]: ["Pastilla sheets", "Chicken", "Vermicelli", "Onion, olives", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نطهو الدجاج ونفتته.",
        "نحضر الشعرية الصينية ونخلطها مع الدجاج والبصل المشحر والزيتون والتوابل.",
        "نطوي الورقة على شكل مثلثات ونحشوها.",
        "نقليها أو نطهوها في الفرن."
      ],
      [Language.FR]: [
        "Cuire et émietter le poulet.",
        "Mélanger avec vermicelles et farce.",
        "Plier en triangles.",
        "Cuire."
      ],
      [Language.EN]: [
        "Cook and shred chicken.",
        "Mix with vermicelli and filling.",
        "Fold into triangles.",
        "Cook."
      ]
    },
    tips: {
      [Language.AR]: ["يمكن إضافة الهريسة لمحبي الحار.", "ادهني الورقة جيداً بالزبدة."],
      [Language.FR]: ["Ajouter de la harissa.", "Bien beurrer la feuille."],
      [Language.EN]: ["Add harissa for heat.", "Butter the sheets well."]
    },
    servingMethod: {
      [Language.AR]: "تقدم ساخنة كمقبلات.",
      [Language.FR]: "Servir chaud.",
      [Language.EN]: "Serve hot."
    },
    keywords: ["بريوات", "دجاج", "رمضان", "briouates", "chicken"]
  },
  {
    id: "ram-24",
    name: {
      [Language.AR]: "سيكار بالجبن والزعتر",
      [Language.FR]: "Cigares au Fromage et Thym",
      [Language.EN]: "Cheese & Thyme Cigars"
    },
    category: Category.RAMADAN,
    subCategory: "Appetizer",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "أصابع مقرمشة محشوة بخليط الأجبان والزعتر المنعش.",
      [Language.FR]: "Boudins croustillants au fromage et thym.",
      [Language.EN]: "Crispy logs with cheese and thyme."
    },
    prepTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    cookTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    servings: 15,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["ورقة البسطيلة", "جبن أبيض (جبلي)", "جبن موزاريلا", "زعتر يابس", "بيض للدهن"],
      [Language.FR]: ["Feuilles de pastilla", "Fromage blanc", "Mozzarella", "Thym", "Œuf"],
      [Language.EN]: ["Pastilla sheets", "White cheese", "Mozzarella", "Thyme", "Egg"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الأجبان مع الزعتر المحكوك.",
        "نقطع الورقة لشرائط ونضع الحشوة ونلفها على شكل أصابع (سيكار).",
        "نلصق الطرف بالبيض أو الدقيق والماء.",
        "نطهوها في الفرن أو نقليها."
      ],
      [Language.FR]: [
        "Mélanger les fromages et le thym.",
        "Rouler en cigares.",
        "Fermer et cuire."
      ],
      [Language.EN]: [
        "Mix cheeses and thyme.",
        "Roll into cigars.",
        "Seal and cook."
      ]
    },
    tips: {
      [Language.AR]: ["لا تكثري الحشوة لكي لا ينفجر السيكار.", "الفرن صحي أكثر من القلي."],
      [Language.FR]: ["Ne pas trop farcir.", "Cuisson au four recommandée."],
      [Language.EN]: ["Don't overstuff.", "Baking is healthier than frying."]
    },
    servingMethod: {
      [Language.AR]: "تقدم ساخنة مع العسل (اختياري).",
      [Language.FR]: "Servir chaud.",
      [Language.EN]: "Serve hot."
    },
    keywords: ["سيكار", "جبن", "رمضان", "cigars", "cheese"]
  },
  {
    id: "ram-25",
    name: {
      [Language.AR]: "كرات السردين بالشرمولة",
      [Language.FR]: "Boulettes de Sardines",
      [Language.EN]: "Sardine Balls"
    },
    category: Category.RAMADAN,
    subCategory: "Main",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سردين مطحون مع الشرمولة المغربية، يطهى في طاجين مع الطماطم.",
      [Language.FR]: "Sardines hachées à la chermoula en sauce tomate.",
      [Language.EN]: "Minced sardines with chermoula in tomato sauce."
    },
    prepTime: { [Language.AR]: "30 دقيقة", [Language.FR]: "30 min", [Language.EN]: "30 min" },
    cookTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    servings: 4,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["سردين طازج مطحون", "شحم الغنم (اختياري)", "أرز مسلوق نصف سلقة", "شرمولة (ثوم، أعشاب، توابل)", "صلصة طماطم"],
      [Language.FR]: ["Sardines hachées", "Riz", "Chermoula", "Sauce tomate"],
      [Language.EN]: ["Minced sardines", "Rice", "Chermoula", "Tomato sauce"]
    },
    steps: {
      [Language.AR]: [
        "نخلط السردين مع الشرمولة والأرز ونشكل كرات.",
        "نحضر صلصة الطماطم في الطاجين.",
        "نضع كرات السردين ونتركها تطهى.",
        "نزين بالفلفل الحار والليمون."
      ],
      [Language.FR]: [
        "Former des boulettes de sardines.",
        "Cuire dans la sauce tomate.",
        "Décorer et servir."
      ],
      [Language.EN]: [
        "Form sardine balls.",
        "Cook in tomato sauce.",
        "Garnish and serve."
      ]
    },
    tips: {
      [Language.AR]: ["إضافة القليل من الشحم يعطي طعماً رائعاً.", "السردين يجب أن يكون طازجاً جداً."],
      [Language.FR]: ["Ajouter un peu de gras.", "Sardines très fraîches."],
      [Language.EN]: ["Add a little fat for flavor.", "Sardines must be very fresh."]
    },
    servingMethod: {
      [Language.AR]: "تقدم ساخنة في الطاجين.",
      [Language.FR]: "Servir dans le tajine.",
      [Language.EN]: "Serve in the tajine."
    },
    keywords: ["سردين", "حوت", "رمضان", "sardines", "fish"]
  },
  {
    id: "ram-26",
    name: {
      [Language.AR]: "طاجين الكفتة بالبيض",
      [Language.FR]: "Tajine de Kefta aux Œufs",
      [Language.EN]: "Kofta Tajine with Eggs"
    },
    category: Category.RAMADAN,
    subCategory: "Main",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "طبق سريع ولذيذ من كرات اللحم المفروم في صلصة الطماطم مع البيض.",
      [Language.FR]: "Boulettes de viande en sauce tomate avec des œufs.",
      [Language.EN]: "Meatballs in tomato sauce with eggs."
    },
    prepTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    cookTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    servings: 4,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["لحم مفروم (كفتة)", "طماطم محكوكة", "بصل، ثوم", "بيض", "توابل (كامون، بابريكا، ملح)"],
      [Language.FR]: ["Kefta", "Tomates", "Oignon, ail", "Œufs", "Épices"],
      [Language.EN]: ["Kofta", "Tomatoes", "Onion, garlic", "Eggs", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نشحر البصل والثوم والطماطم مع التوابل.",
        "نشكل كرات صغيرة من الكفتة ونضيفها للصلصة.",
        "عندما تنضج الكفتة، نكسر البيض فوقها.",
        "نغطي الطاجين حتى ينضج البيض."
      ],
      [Language.FR]: [
        "Sauter les légumes et épices.",
        "Ajouter les boulettes de kefta.",
        "Casser les œufs par-dessus.",
        "Cuire à couvert."
      ],
      [Language.EN]: [
        "Sauté vegetables and spices.",
        "Add kefta balls.",
        "Crack eggs on top.",
        "Cook covered."
      ]
    },
    tips: {
      [Language.AR]: ["لا تبالغي في طهي البيض ليبقى سائلاً قليلاً.", "الكامون أساسي في هذا الطبق."],
      [Language.FR]: ["Ne pas trop cuire les œufs.", "Le cumin est essentiel."],
      [Language.EN]: ["Don't overcook the eggs.", "Cumin is essential."]
    },
    servingMethod: {
      [Language.AR]: "تقدم ساخنة مع الخبز.",
      [Language.FR]: "Servir chaud avec du pain.",
      [Language.EN]: "Serve hot with bread."
    },
    keywords: ["كفتة", "بيض", "رمضان", "kefta", "eggs"]
  },
  {
    id: "ram-27",
    name: {
      [Language.AR]: "طاجين الحوت بالخضر",
      [Language.FR]: "Tajine de Poisson aux Légumes",
      [Language.EN]: "Fish Tajine with Vegetables"
    },
    category: Category.RAMADAN,
    subCategory: "Main",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "سمك كبير (مثل القرب أو الفرخ) مطهو مع تشكيلة من الخضر الملونة.",
      [Language.FR]: "Poisson entier aux légumes variés.",
      [Language.EN]: "Whole fish with assorted vegetables."
    },
    prepTime: { [Language.AR]: "25 دقيقة", [Language.FR]: "25 min", [Language.EN]: "25 min" },
    cookTime: { [Language.AR]: "40 دقيقة", [Language.FR]: "40 min", [Language.EN]: "40 min" },
    servings: 4,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["سمكة كبيرة", "بطاطس، جزر، فلفل", "طماطم، ليمون", "شرمولة مغربية", "زيت زيتون"],
      [Language.FR]: ["Poisson", "Légumes", "Tomate, citron", "Chermoula", "Huile d'olive"],
      [Language.EN]: ["Fish", "Vegetables", "Tomato, lemon", "Chermoula", "Olive oil"]
    },
    steps: {
      [Language.AR]: [
        "نشرمل السمكة جيداً ونتركها ترتاح.",
        "نرتب الخضر في الطاجين ونضع فوقها السمكة.",
        "نضيف ما تبقى من الشرمولة والزيت والماء.",
        "نطهوها على نار هادئة حتى تنضج الخضر والسمك."
      ],
      [Language.FR]: [
        "Mariner le poisson.",
        "Dresser les légumes et le poisson.",
        "Ajouter la marinade et l'huile.",
        "Mijoter."
      ],
      [Language.EN]: [
        "Marinate the fish.",
        "Arrange vegetables and fish.",
        "Add marinade and oil.",
        "Simmer."
      ]
    },
    tips: {
      [Language.AR]: ["الجزر يوضع في الأسفل لأنه يأخذ وقتاً أطول.", "الليمون ضروري لنكهة السمك."],
      [Language.FR]: ["Carottes au fond.", "Le citron est indispensable."],
      [Language.EN]: ["Carrots at the bottom.", "Lemon is essential."]
    },
    servingMethod: {
      [Language.AR]: "تقدم ساخنة في الطاجين.",
      [Language.FR]: "Servir chaud.",
      [Language.EN]: "Serve hot."
    },
    keywords: ["طاجين", "حوت", "رمضان", "tajine", "fish"]
  },
  {
    id: "ram-28",
    name: {
      [Language.AR]: "الرفيسة المغربية بالدجاج البلدي",
      [Language.FR]: "Rfissa au Poulet Beldi",
      [Language.EN]: "Moroccan Rfissa"
    },
    category: Category.RAMADAN,
    subCategory: "Main",
    image: "https://images.unsplash.com/photo-1585932231552-29877a5b50ec?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "طبق تقليدي غني بالعدس والحلية والدجاج، يقدم في المناسبات وليالي رمضان.",
      [Language.FR]: "Plat traditionnel aux lentilles, fenugrec et poulet.",
      [Language.EN]: "Traditional dish with lentils, fenugreek and chicken."
    },
    prepTime: { [Language.AR]: "60 دقيقة", [Language.FR]: "60 min", [Language.EN]: "60 min" },
    cookTime: { [Language.AR]: "60 دقيقة", [Language.FR]: "60 min", [Language.EN]: "60 min" },
    servings: 6,
    difficulty: { [Language.AR]: "صعب", [Language.FR]: "Difficile", [Language.EN]: "Hard" },
    ingredients: {
      [Language.AR]: ["تريد (فطائر رقيقة)", "دجاج بلدي", "عدس، حلبة", "بصل بكثرة", "توابل (رأس الحانوت، مسخن، سمن)"],
      [Language.FR]: ["Trid", "Poulet fermier", "Lentilles, fenugrec", "Oignons", "Épices (Ras el hanout)"],
      [Language.EN]: ["Trid", "Farm chicken", "Lentils, fenugreek", "Onions", "Spices (Ras el hanout)"]
    },
    steps: {
      [Language.AR]: [
        "نحضر التريد ونقطعه قطعاً صغيرة.",
        "نطهو الدجاج مع البصل والعدس والحلبة والتوابل والسمن.",
        "عند النضج، نضع التريد في طبق كبير ونسقيه بالمرق.",
        "نضع الدجاج في الوسط ونزينه بالبيض المسلوق والتمر."
      ],
      [Language.FR]: [
        "Préparer le trid.",
        "Cuire le poulet avec légumes et épices.",
        "Dresser le trid et arroser.",
        "Décorer et servir."
      ],
      [Language.EN]: [
        "Prepare the trid.",
        "Cook chicken with vegetables and spices.",
        "Arrange trid and moisten.",
        "Garnish and serve."
      ]
    },
    tips: {
      [Language.AR]: ["رأس الحانوت هو سر نكهة الرفيسة.", "يجب أن يكون المرق كافياً لسقي التريد جيداً."],
      [Language.FR]: ["Le Ras el hanout est le secret.", "Assez de bouillon."],
      [Language.EN]: ["Ras el hanout is the secret.", "Enough broth."]
    },
    keywords: ["رفيسة", "دجاج", "رمضان", "rfissa", "chicken"]
  },
  {
    id: "ram-29",
    name: {
      [Language.AR]: "البسطيلة الكبيرة بالدجاج",
      [Language.FR]: "Grande Pastilla au Poulet",
      [Language.EN]: "Large Chicken Pastilla"
    },
    category: Category.RAMADAN,
    subCategory: "Main",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "النسخة العائلية الكبيرة من البسطيلة، ملكة المائدة المغربية.",
      [Language.FR]: "La version familiale de la pastilla.",
      [Language.EN]: "The family version of the pastilla."
    },
    prepTime: { [Language.AR]: "90 دقيقة", [Language.FR]: "90 min", [Language.EN]: "90 min" },
    cookTime: { [Language.AR]: "45 دقيقة", [Language.FR]: "45 min", [Language.EN]: "45 min" },
    servings: 8,
    difficulty: { [Language.AR]: "صعب جداً", [Language.FR]: "Très Difficile", [Language.EN]: "Very Hard" },
    ingredients: {
      [Language.AR]: ["ورقة البسطيلة", "دجاجتان", "بصل (2 كيلو)", "بيض (10 حبات)", "لوز (نصف كيلو)", "قرفة، سكر، سمن"],
      [Language.FR]: ["Feuilles de pastilla", "Poulets", "Oignons", "Œufs", "Amandes", "Cannelle, sucre"],
      [Language.EN]: ["Pastilla sheets", "Chickens", "Onions", "Eggs", "Almonds", "Cinnamon, sugar"]
    },
    steps: {
      [Language.AR]: [
        "نفس خطوات الميني بسطيلة ولكن في قالب كبير.",
        "نرتب الورقة في القالب ونضع الحشوات طبقات.",
        "نغلقها جيداً وندهنها بالزبدة.",
        "نطهوها في الفرن حتى تتحمر تماماً."
      ],
      [Language.FR]: [
        "Même étapes que la mini pastilla.",
        "Dresser dans un grand moule.",
        "Cuire au four."
      ],
      [Language.EN]: [
        "Same steps as mini pastilla.",
        "Arrange in a large mold.",
        "Bake in the oven."
      ]
    },
    tips: {
      [Language.AR]: ["التزيين التقليدي هو السكر الصقيل والقرفة.", "يجب أن تكون مقرمشة جداً."],
      [Language.FR]: ["Décoration traditionnelle.", "Doit être très croustillante."],
      [Language.EN]: ["Traditional decoration.", "Must be very crispy."]
    },
    keywords: ["بسطيلة", "دجاج", "رمضان", "pastilla", "chicken"]
  },
  {
    id: "ram-30",
    name: {
      [Language.AR]: "غريبة البهلة",
      [Language.FR]: "Ghriba Bahla",
      [Language.EN]: "Ghriba Bahla"
    },
    category: Category.RAMADAN,
    subCategory: "Sweet",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى مغربية تقليدية مشققة ومقرمشة، بنكهة الزنجلان واللوز.",
      [Language.FR]: "Biscuit craquelé traditionnel au sésame.",
      [Language.EN]: "Traditional cracked biscuit with sesame."
    },
    prepTime: { [Language.AR]: "30 دقيقة", [Language.FR]: "30 min", [Language.EN]: "30 min" },
    cookTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    servings: 30,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["دقيق", "سكر", "زيت، زبدة", "زنجل محمص", "لوز مهرمش", "خميرة حلويات"],
      [Language.FR]: ["Farine", "Sucre", "Huile, beurre", "Sésame", "Amandes", "Levure"],
      [Language.EN]: ["Flour", "Sugar", "Oil, butter", "Sesame", "Almonds", "Baking powder"]
    },
    steps: {
      [Language.AR]: [
        "نخلط المكونات الجافة ثم نضيف الزيت والزبدة ونعجن جيداً.",
        "نشكل كويرات ونضعها في صفيحة الفرن.",
        "نطهوها في فرن ساخن (النار من الأعلى أولاً لتتشقق).",
        "نكمل الطهي من الأسفل."
      ],
      [Language.FR]: [
        "Mélanger et pétrir.",
        "Former des boules.",
        "Cuire avec chaleur par le haut pour craqueler.",
        "Finir la cuisson."
      ],
      [Language.EN]: [
        "Mix and knead.",
        "Form balls.",
        "Bake with top heat to crack.",
        "Finish baking."
      ]
    },
    tips: {
      [Language.AR]: ["سر التشقق هو حرارة الفرن من الأعلى.", "الدلك الجيد ضروري."],
      [Language.FR]: ["Chaleur par le haut.", "Bien pétrir."],
      [Language.EN]: ["Top heat is the secret.", "Knead well."]
    },
    keywords: ["غريبة", "بهلة", "حلويات", "رمضان", "ghriba", "biscuits"]
  },
  {
    id: "ram-31",
    name: {
      [Language.AR]: "الفقاص المغربي باللوز",
      [Language.FR]: "Fekkas aux Amandes",
      [Language.EN]: "Almond Fekkas"
    },
    category: Category.RAMADAN,
    subCategory: "Sweet",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "بسكويت مقرمش باللوز والنافع، يطهى مرتين.",
      [Language.FR]: "Croquets aux amandes et anis, cuits deux fois.",
      [Language.EN]: "Almond and anise biscuits, double-baked."
    },
    prepTime: { [Language.AR]: "40 دقيقة", [Language.FR]: "40 min", [Language.EN]: "40 min" },
    cookTime: { [Language.AR]: "40 دقيقة", [Language.FR]: "40 min", [Language.EN]: "40 min" },
    servings: 40,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["بيض", "سكر", "زيت", "دقيق", "لوز كامل", "نافع، زنجلان"],
      [Language.FR]: ["Œufs", "Sucre", "Huile", "Farine", "Amandes", "Anis, sésame"],
      [Language.EN]: ["Eggs", "Sugar", "Oil", "Flour", "Almonds", "Anise, sesame"]
    },
    steps: {
      [Language.AR]: [
        "نخلط المكونات ونشكل قضبان طويلة.",
        "نطهوها نصف سلقة في الفرن.",
        "نغطيها بمنديل مبلل ونتركها تبرد تماماً.",
        "نقطعها شرائح ونعيد طهيها حتى تتحمر."
      ],
      [Language.FR]: [
        "Former des boudins et précuire.",
        "Laisser refroidir sous un linge humide.",
        "Trancher et dorer au four."
      ],
      [Language.EN]: [
        "Form logs and pre-bake.",
        "Cool under a damp cloth.",
        "Slice and brown in the oven."
      ]
    },
    tips: {
      [Language.AR]: ["التقطيع يجب أن يكون بسكين حاد جداً.", "المنديل المبلل يمنع تكسر الفقاص عند التقطيع."],
      [Language.FR]: ["Couteau très aiguisé.", "Linge humide indispensable."],
      [Language.EN]: ["Very sharp knife.", "Damp cloth is essential."]
    },
    keywords: ["فقاص", "حلويات", "رمضان", "fekkas", "biscuits"]
  },
  {
    id: "ram-32",
    name: {
      [Language.AR]: "محنشة باللوز",
      [Language.FR]: "M'hancha aux Amandes",
      [Language.EN]: "Almond M'hancha"
    },
    category: Category.RAMADAN,
    subCategory: "Sweet",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى لولبية من ورقة البسطيلة محشوة بعقدة اللوز ومعسلة.",
      [Language.FR]: "Pâtisserie en spirale à la pâte d'amande.",
      [Language.EN]: "Spiral pastry with almond paste."
    },
    prepTime: { [Language.AR]: "45 دقيقة", [Language.FR]: "45 min", [Language.EN]: "45 min" },
    cookTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    servings: 15,
    difficulty: { [Language.AR]: "صعب", [Language.FR]: "Difficile", [Language.EN]: "Hard" },
    ingredients: {
      [Language.AR]: ["ورقة البسطيلة", "عقدة اللوز", "زبدة مذابة", "عسل", "لوز إيفيلي للتزيين"],
      [Language.FR]: ["Feuilles de pastilla", "Pâte d'amande", "Beurre", "Miel", "Amandes effilées"],
      [Language.EN]: ["Pastilla sheets", "Almond paste", "Butter", "Honey", "Flaked almonds"]
    },
    steps: {
      [Language.AR]: [
        "نشكل قضبان طويلة من عقدة اللوز.",
        "نلف الورقة حول العقدة ثم نلفها على شكل حلزوني.",
        "ندهنها بالزبدة ونطهوها في الفرن.",
        "نسقيها بالعسل وهي ساخنة."
      ],
      [Language.FR]: [
        "Former des boudins d'amande.",
        "Enrouler dans la feuille et former une spirale.",
        "Cuire et mieller."
      ],
      [Language.EN]: [
        "Form almond logs.",
        "Wrap in sheets and form a spiral.",
        "Bake and honey."
      ]
    },
    tips: {
      [Language.AR]: ["يجب أن تكون الورقة طرية جداً لكي لا تتكسر.", "يمكن صنع محنشات صغيرة فردية."],
      [Language.FR]: ["Feuilles très souples.", "Peut être fait en format individuel."],
      [Language.EN]: ["Very flexible sheets.", "Can be made in individual sizes."]
    },
    keywords: ["محنشة", "حلويات", "رمضان", "mhancha", "sweets"]
  },
  {
    id: "ram-33",
    name: {
      [Language.AR]: "رغايف معسلين",
      [Language.FR]: "Rghaif au Miel",
      [Language.EN]: "Honeyed Rghaif"
    },
    category: Category.RAMADAN,
    subCategory: "Sweet",
    image: "https://images.unsplash.com/photo-1599121106328-907003214ab9?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "مسمن صغير مقلي ومغطس في العسل، مقرمش ولذيذ.",
      [Language.FR]: "Petits msemmen frits et miellés.",
      [Language.EN]: "Small fried and honeyed flatbreads."
    },
    prepTime: { [Language.AR]: "30 دقيقة", [Language.FR]: "30 min", [Language.EN]: "30 min" },
    cookTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    servings: 10,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["عجين المسمن", "زيت للقلي", "عسل", "زنجلان أو لوز للتزيين"],
      [Language.FR]: ["Pâte à msemmen", "Huile", "Miel", "Sésame"],
      [Language.EN]: ["Msemmen dough", "Oil", "Honey", "Sesame"]
    },
    steps: {
      [Language.AR]: [
        "نشكل مسمنات صغيرة جداً.",
        "نقليها في زيت ساخن حتى تنتفخ وتتحمر.",
        "نغطسها في العسل ونرشها بالزنجلان."
      ],
      [Language.FR]: [
        "Former des mini msemmen.",
        "Frire jusqu'à ce qu'ils gonflent.",
        "Mieller et décorer."
      ],
      [Language.EN]: [
        "Form mini msemmen.",
        "Fry until puffed.",
        "Honey and garnish."
      ]
    },
    tips: {
      [Language.AR]: ["العجين يجب أن يكون رقيقاً جداً.", "تؤكل في نفس اليوم لتبقى مقرمشة."],
      [Language.FR]: ["Pâte très fine.", "À consommer le jour même."],
      [Language.EN]: ["Very thin dough.", "Consume same day for crispness."]
    },
    keywords: ["رغايف", "مسمن", "عسل", "رمضان", "rghaif", "honey"]
  },
  {
    id: "ram-34",
    name: {
      [Language.AR]: "عصير الفراولة والموز",
      [Language.FR]: "Jus Fraise Banane",
      [Language.EN]: "Strawberry Banana Juice"
    },
    category: Category.DRINKS,
    subCategory: "Drink",
    image: "https://images.unsplash.com/photo-1543648964-18ab22b3dde5?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "عصير كلاسيكي محبوب، منعش ومغذي.",
      [Language.FR]: "Boisson classique fraise et banane.",
      [Language.EN]: "Classic strawberry and banana drink."
    },
    prepTime: { [Language.AR]: "5 دقائق", [Language.FR]: "5 min", [Language.EN]: "5 min" },
    cookTime: { [Language.AR]: "0 دقيقة", [Language.FR]: "0 min", [Language.EN]: "0 min" },
    servings: 2,
    difficulty: { [Language.AR]: "سهل جداً", [Language.FR]: "Très Facile", [Language.EN]: "Very Easy" },
    ingredients: {
      [Language.AR]: ["فراولة طازجة", "موز", "حليب أو عصير برتقال", "سكر"],
      [Language.FR]: ["Fraises", "Banane", "Lait ou jus d'orange", "Sucre"],
      [Language.EN]: ["Strawberries", "Banana", "Milk or orange juice", "Sugar"]
    },
    steps: {
      [Language.AR]: [
        "نخلط جميع الفواكه مع السائل في الخلاط.",
        "نضيف السكر حسب الرغبة.",
        "نبرده ونقدمه."
      ],
      [Language.FR]: [
        "Mixer les fruits avec le liquide.",
        "Sucrer.",
        "Servir frais."
      ],
      [Language.EN]: [
        "Blend fruits with liquid.",
        "Sweeten.",
        "Serve cold."
      ]
    },
    tips: {
      [Language.AR]: ["استخدمي فواكه مجمدة لقوام أثقل.", "يمكن إضافة ياغورت."],
      [Language.FR]: ["Fruits surgelés pour l'onctuosité.", "Ajouter un yaourt."],
      [Language.EN]: ["Frozen fruits for thickness.", "Add yogurt."]
    },
    keywords: ["عصير", "فراولة", "موز", "رمضان", "juice", "strawberry"]
  },
  {
    id: "ram-35",
    name: {
      [Language.AR]: "عصير الباربا والبرتقال",
      [Language.FR]: "Jus de Betterave Orange",
      [Language.EN]: "Beetroot Orange Juice"
    },
    category: Category.DRINKS,
    subCategory: "Drink",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "عصير صحي جداً غني بالحديد والفيتامينات.",
      [Language.FR]: "Boisson saine riche en fer.",
      [Language.EN]: "Healthy drink rich in iron."
    },
    prepTime: { [Language.AR]: "10 دقائق", [Language.FR]: "10 min", [Language.EN]: "10 min" },
    cookTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    servings: 4,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["باربا (شمندر) مسلوقة", "عصير برتقال", "سكر", "فراولة (اختياري)"],
      [Language.FR]: ["Betterave bouillie", "Jus d'orange", "Sucre", "Fraises"],
      [Language.EN]: ["Boiled beetroot", "Orange juice", "Sugar", "Strawberries"]
    },
    steps: {
      [Language.AR]: [
        "نطحن الباربا المسلوقة مع عصير البرتقال.",
        "نضيف السكر والفراولة.",
        "نخلط جيداً ونبرده."
      ],
      [Language.FR]: [
        "Mixer betterave et jus d'orange.",
        "Ajouter sucre et fraises.",
        "Servir frais."
      ],
      [Language.EN]: [
        "Blend beetroot and orange juice.",
        "Add sugar and strawberries.",
        "Serve cold."
      ]
    },
    tips: {
      [Language.AR]: ["الباربا يجب أن تكون باردة قبل الخلط.", "الفراولة تغطي طعم الباربا للأطفال."],
      [Language.FR]: ["Betterave bien froide.", "Les fraises masquent le goût de terre."],
      [Language.EN]: ["Beetroot must be cold.", "Strawberries mask the earthy taste."]
    },
    keywords: ["عصير", "باربا", "شمندر", "برتقال", "رمضان", "juice", "beetroot"]
  },
  {
    id: "ram-36",
    name: {
      [Language.AR]: "عصير الحامض والنعناع (موهيتو مغربي)",
      [Language.FR]: "Citronnade à la Menthe",
      [Language.EN]: "Lemon Mint Juice"
    },
    category: Category.DRINKS,
    subCategory: "Drink",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "عصير منعش جداً ومثالي للهضم بعد الإفطار.",
      [Language.FR]: "Boisson très rafraîchissante et digestive.",
      [Language.EN]: "Very refreshing and digestive drink."
    },
    prepTime: { [Language.AR]: "10 دقائق", [Language.FR]: "10 min", [Language.EN]: "10 min" },
    cookTime: { [Language.AR]: "0 دقيقة", [Language.FR]: "0 min", [Language.EN]: "0 min" },
    servings: 4,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["حامض (ليمون)", "نعناع طازج", "ماء بارد", "سكر"],
      [Language.FR]: ["Citron", "Menthe", "Eau froide", "Sucre"],
      [Language.EN]: ["Lemon", "Mint", "Cold water", "Sugar"]
    },
    steps: {
      [Language.AR]: [
        "نعصر الحامض ونضعه في الخلاط مع النعناع والسكر والماء.",
        "نخلط جيداً ثم نصفيه.",
        "نقدمه مع قطع الثلج."
      ],
      [Language.FR]: [
        "Mixer citron, menthe, eau et sucre.",
        "Filtrer.",
        "Servir avec des glaçons."
      ],
      [Language.EN]: [
        "Blend lemon, mint, water and sugar.",
        "Strain.",
        "Serve with ice cubes."
      ]
    },
    tips: {
      [Language.AR]: ["لا تخلطي النعناع كثيراً لكي لا يصبح العصير مراً.", "استخدمي حامضاً طازجاً."],
      [Language.FR]: ["Ne pas trop mixer la menthe.", "Citrons frais."],
      [Language.EN]: ["Don't over-blend the mint.", "Fresh lemons."]
    },
    keywords: ["عصير", "حامض", "نعناع", "رمضان", "juice", "lemon"]
  },
  {
    id: "ram-37",
    name: {
      [Language.AR]: "التمر بالحليب واللوز",
      [Language.FR]: "Lait aux Dattes et Amandes",
      [Language.EN]: "Date & Almond Milk"
    },
    category: Category.DRINKS,
    subCategory: "Drink",
    image: "https://images.unsplash.com/photo-1543648964-18ab22b3dde5?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "مشروب الطاقة التقليدي، يكسر به الصيام عادة.",
      [Language.FR]: "Boisson énergétique traditionnelle pour la rupture du jeûne.",
      [Language.EN]: "Traditional energy drink for breaking the fast."
    },
    prepTime: { [Language.AR]: "5 دقائق", [Language.FR]: "5 min", [Language.EN]: "5 min" },
    cookTime: { [Language.AR]: "0 دقيقة", [Language.FR]: "0 min", [Language.EN]: "0 min" },
    servings: 2,
    difficulty: { [Language.AR]: "سهل جداً", [Language.FR]: "Très Facile", [Language.EN]: "Very Easy" },
    ingredients: {
      [Language.AR]: ["حليب", "تمر منزوع النوى", "لوز مطحون", "قليل من ماء الزهر"],
      [Language.FR]: ["Lait", "Dattes", "Amandes", "Eau de fleur d'oranger"],
      [Language.EN]: ["Milk", "Dates", "Almonds", "Orange blossom water"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الحليب والتمر واللوز في الخلاط.",
        "نضيف ماء الزهر.",
        "يقدم بارداً أو دافئاً."
      ],
      [Language.FR]: [
        "Mixer lait, dattes et amandes.",
        "Ajouter l'eau de fleur d'oranger.",
        "Servir."
      ],
      [Language.EN]: [
        "Blend milk, dates and almonds.",
        "Add orange blossom water.",
        "Serve."
      ]
    },
    tips: {
      [Language.AR]: ["لا يحتاج للسكر لأن التمر حلو.", "يمكن إضافة الموز."],
      [Language.FR]: ["Pas besoin de sucre.", "Peut être fait avec de la banane."],
      [Language.EN]: ["No sugar needed.", "Can be made with banana."]
    },
    keywords: ["عصير", "تمر", "حليب", "رمضان", "milk", "dates"]
  },
  {
    id: "ram-38",
    name: {
      [Language.AR]: "شوربة الشوفان بالدجاج",
      [Language.FR]: "Soupe d'Avoine au Poulet",
      [Language.EN]: "Oat Soup with Chicken"
    },
    category: Category.RAMADAN,
    subCategory: "Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "شوربة سريعة ومغذية، بديل رائع للحريرة.",
      [Language.FR]: "Soupe rapide et nutritive à l'avoine.",
      [Language.EN]: "Quick and nutritious oat soup."
    },
    prepTime: { [Language.AR]: "10 دقائق", [Language.FR]: "10 min", [Language.EN]: "10 min" },
    cookTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    servings: 4,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["شوفان", "صدر دجاج مقطع", "بصل مفروم", "حليب", "ملح، فلفل، زنجبيل"],
      [Language.FR]: ["Avoine", "Poulet", "Oignon", "Lait", "Épices"],
      [Language.EN]: ["Oats", "Chicken", "Onion", "Milk", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نشحر البصل والدجاج في قليل من الزيت.",
        "نضيف الماء والتوابل ونترك الدجاج ينضج.",
        "نضيف الشوفان ونحرك حتى يثقل القوام.",
        "نضيف الحليب في الأخير ونتركها تغلي."
      ],
      [Language.FR]: [
        "Sauter oignon et poulet.",
        "Cuire dans l'eau.",
        "Ajouter l'avoine.",
        "Finir avec le lait."
      ],
      [Language.EN]: [
        "Sauté onion and chicken.",
        "Cook in water.",
        "Add oats.",
        "Finish with milk."
      ]
    },
    tips: {
      [Language.AR]: ["يمكن إضافة القليل من الزعتر.", "الشوفان يطهى بسرعة."],
      [Language.FR]: ["Ajouter du thym.", "Cuisson rapide."],
      [Language.EN]: ["Add thyme.", "Fast cooking."]
    },
    keywords: ["شوربة", "شوفان", "دجاج", "رمضان", "soup", "oats"]
  },
  {
    id: "ram-39",
    name: {
      [Language.AR]: "قراشل مغربية (كرص)",
      [Language.FR]: "Krachel (Brioches Marocaines)",
      [Language.EN]: "Moroccan Krachel"
    },
    category: Category.RAMADAN,
    subCategory: "Appetizer",
    image: "https://images.unsplash.com/photo-1599121106328-907003214ab9?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "بريوش مغربي منسم بالنافع والزنجلان وماء الزهر، خفيف وهش.",
      [Language.FR]: "Brioches parfumées à l'anis et sésame.",
      [Language.EN]: "Brioches flavored with anise and sesame."
    },
    prepTime: { [Language.AR]: "40 دقيقة", [Language.FR]: "40 min", [Language.EN]: "40 min" },
    cookTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    servings: 12,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["دقيق", "سكر", "بيض", "حليب دافئ", "خميرة خبز", "نافع، زنجلان", "ماء زهر"],
      [Language.FR]: ["Farine", "Sucre", "Œufs", "Lait", "Levure", "Anis, sésame", "Eau de fleur d'oranger"],
      [Language.EN]: ["Flour", "Sugar", "Eggs", "Milk", "Yeast", "Anise, sesame", "Orange blossom water"]
    },
    steps: {
      [Language.AR]: [
        "نعجن المكونات جيداً حتى نحصل على عجين لين يلتصق قليلاً.",
        "نتركه يختمر حتى يتضاعف حجمه.",
        "نشكل كويرات ونضعها في صفيحة الفرن ونبسطها قليلاً.",
        "نتركها تختمر مرة ثانية، ندهنها بالبيض ونرش الزنجلان.",
        "نطهوها في الفرن حتى تتحمر."
      ],
      [Language.FR]: [
        "Pétrir la pâte.",
        "Laisser lever.",
        "Former des boules.",
        "Lever à nouveau, dorer et cuire."
      ],
      [Language.EN]: [
        "Knead the dough.",
        "Let rise.",
        "Form balls.",
        "Rise again, glaze and bake."
      ]
    },
    tips: {
      [Language.AR]: ["العجين يجب أن يكون خفيفاً جداً لنتائج هشة.", "ماء الزهر يعطي رائحة رائعة."],
      [Language.FR]: ["Pâte légère.", "L'eau de fleur d'oranger parfume bien."],
      [Language.EN]: ["Light dough.", "Orange blossom water adds great scent."]
    },
    keywords: ["قراشل", "كرص", "بريوش", "رمضان", "krachel", "brioche"]
  },
  {
    id: "ram-40",
    name: {
      [Language.AR]: "حرشة مغربية صغيرة",
      [Language.FR]: "Mini Harcha",
      [Language.EN]: "Mini Harcha"
    },
    category: Category.RAMADAN,
    subCategory: "Appetizer",
    image: "https://images.unsplash.com/photo-1599121106328-907003214ab9?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "فطائر من السميد، مقرمشة من الخارج وطرية من الداخل.",
      [Language.FR]: "Galettes de semoule croustillantes.",
      [Language.EN]: "Crispy semolina galettes."
    },
    prepTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    cookTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    servings: 10,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["سميد رقيق", "زبدة مذابة", "حليب أو ماء", "ملح، سكر", "خميرة حلويات"],
      [Language.FR]: ["Semoule fine", "Beurre", "Lait", "Sel, sucre", "Levure"],
      [Language.EN]: ["Fine semolina", "Butter", "Milk", "Salt, sugar", "Baking powder"]
    },
    steps: {
      [Language.AR]: [
        "نبسس السميد بالزبدة والملح والسكر.",
        "نضيف الخميرة والحليب ونجمع الخليط دون دلك.",
        "نشكل دوائر صغيرة ونطهوها في مقلاة ساخنة من الجهتين."
      ],
      [Language.FR]: [
        "Mélanger semoule et beurre.",
        "Ajouter lait et levure.",
        "Former des galettes et cuire à la poêle."
      ],
      [Language.EN]: [
        "Mix semolina and butter.",
        "Add milk and baking powder.",
        "Form galettes and cook in a pan."
      ]
    },
    tips: {
      [Language.AR]: ["لا تدلكي العجين لكي لا تصبح الحرشة قاسية.", "تطهى على نار متوسطة."],
      [Language.FR]: ["Ne pas pétrir.", "Feu moyen."],
      [Language.EN]: ["Don't knead.", "Medium heat."]
    },
    keywords: ["حرشة", "سميد", "رمضان", "harcha", "semolina"]
  },
  {
    id: "ram-41",
    name: {
      [Language.AR]: "شوربة السميدة بالنافع",
      [Language.FR]: "Soupe de Semoule à l'Anis",
      [Language.EN]: "Semolina Soup with Anise"
    },
    category: Category.RAMADAN,
    subCategory: "Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "شوربة دافئة ومريحة من السميد والحليب والنافع.",
      [Language.FR]: "Soupe douce à la semoule et à l'anis.",
      [Language.EN]: "Sweet semolina soup with anise."
    },
    prepTime: { [Language.AR]: "5 دقائق", [Language.FR]: "5 min", [Language.EN]: "5 min" },
    cookTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    servings: 4,
    difficulty: { [Language.AR]: "سهل جداً", [Language.FR]: "Très Facile", [Language.EN]: "Very Easy" },
    ingredients: {
      [Language.AR]: ["سميد متوسط", "حليب", "ماء", "ملح", "نافع (يانسون)", "زبدة"],
      [Language.FR]: ["Semoule", "Lait", "Eau", "Sel", "Anis", "Beurre"],
      [Language.EN]: ["Semolina", "Milk", "Water", "Salt", "Anise", "Butter"]
    },
    steps: {
      [Language.AR]: [
        "نغلي الماء مع الملح والنافع والزبدة.",
        "نضيف السميد تدريجياً مع التحريك المستمر.",
        "نتركها تطهى حتى تنضج، ثم نضيف الحليب ونتركها تغلي قليلاً."
      ],
      [Language.FR]: [
        "Bouillir l'eau avec sel, anis et beurre.",
        "Ajouter la semoule en pluie.",
        "Cuire et finir avec le lait."
      ],
      [Language.EN]: [
        "Boil water with salt, anise and butter.",
        "Add semolina gradually.",
        "Cook and finish with milk."
      ]
    },
    tips: {
      [Language.AR]: ["النافع يعطي نكهة رائعة ويساعد على الهضم.", "يمكن إضافة العسل عند التقديم."],
      [Language.FR]: ["L'anis facilite la digestion.", "Servir avec du miel."],
      [Language.EN]: ["Anise helps digestion.", "Serve with honey."]
    },
    keywords: ["شوربة", "سميدة", "نافع", "رمضان", "soup", "semolina"]
  },
  {
    id: "ram-42",
    name: {
      [Language.AR]: "طاجين الجلبانة والقوق",
      [Language.FR]: "Tajine Petits Pois et Artichauts",
      [Language.EN]: "Peas and Artichoke Tajine"
    },
    category: Category.RAMADAN,
    subCategory: "Main",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "طاجين ربيعي بامتياز، يجمع بين حلاوة الجلبانة وطراوة القوق.",
      [Language.FR]: "Tajine printanier aux petits pois et artichauts.",
      [Language.EN]: "Spring tajine with peas and artichokes."
    },
    prepTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    cookTime: { [Language.AR]: "50 دقيقة", [Language.FR]: "50 min", [Language.EN]: "50 min" },
    servings: 4,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["لحم غنم أو دجاج", "جلبانة (بزيلاء)", "قوق (أرضي شوكي)", "بصل، ثوم", "حامض مصير", "توابل مغربية"],
      [Language.FR]: ["Viande", "Petits pois", "Artichauts", "Oignon, ail", "Citron confit", "Épices"],
      [Language.EN]: ["Meat", "Peas", "Artichokes", "Onion, garlic", "Preserved lemon", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نطهو اللحم مع البصل والتوابل.",
        "نضيف الجلبانة والقوق المنقى.",
        "نضيف الحامض المصير والماء ونتركه يطهى.",
        "نزين بالقزبر والبقدونس."
      ],
      [Language.FR]: [
        "Cuire la viande.",
        "Ajouter petits pois et artichauts.",
        "Mijoter avec citron confit.",
        "Décorer d'herbes."
      ],
      [Language.EN]: [
        "Cook meat.",
        "Add peas and artichokes.",
        "Simmer with preserved lemon.",
        "Garnish with herbs."
      ]
    },
    tips: {
      [Language.AR]: ["نقع القوق في الماء والليمون يمنع اسوداده.", "الجلبانة الطازجة أفضل من المجمدة."],
      [Language.FR]: ["Citronner les artichauts.", "Petits pois frais de préférence."],
      [Language.EN]: ["Lemon the artichokes to prevent browning.", "Fresh peas are better."]
    },
    keywords: ["طاجين", "جلبانة", "قوق", "رمضان", "tajine", "peas"]
  },
  {
    id: "ram-43",
    name: {
      [Language.AR]: "طاجين السفرجل المعسل",
      [Language.FR]: "Tajine de Coings Caramélisés",
      [Language.EN]: "Caramelized Quince Tajine"
    },
    category: Category.RAMADAN,
    subCategory: "Main",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "طاجين اللحم بالسفرجل المعسل بالقرفة والسكر، مذاق فريد.",
      [Language.FR]: "Tajine de viande aux coings caramélisés.",
      [Language.EN]: "Meat tajine with caramelized quinces."
    },
    prepTime: { [Language.AR]: "30 دقيقة", [Language.FR]: "30 min", [Language.EN]: "30 min" },
    cookTime: { [Language.AR]: "70 دقيقة", [Language.FR]: "70 min", [Language.EN]: "70 min" },
    servings: 4,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["لحم غنم", "سفرجل", "سكر، قرفة", "بصل، ثوم", "زعفران، زنجبيل"],
      [Language.FR]: ["Viande", "Coings", "Sucre, cannelle", "Oignon, ail", "Épices"],
      [Language.EN]: ["Meat", "Quinces", "Sugar, cinnamon", "Onion, garlic", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نطهو اللحم مع البصل والتوابل.",
        "نسلق السفرجل نصف سلقة ثم نعسله في كسرولة مع السكر والقرفة والمرق.",
        "نضع السفرجل فوق اللحم ونقدمه."
      ],
      [Language.FR]: [
        "Cuire la viande.",
        "Précuire et caraméliser les coings.",
        "Dresser et servir."
      ],
      [Language.EN]: [
        "Cook meat.",
        "Pre-cook and caramelize quinces.",
        "Arrange and serve."
      ]
    },
    tips: {
      [Language.AR]: ["السفرجل يجب أن يكون ناضجاً.", "القرفة أساسية للتعسيل."],
      [Language.FR]: ["Coings bien mûrs.", "La cannelle est la clé."],
      [Language.EN]: ["Ripe quinces.", "Cinnamon is key."]
    },
    keywords: ["طاجين", "سفرجل", "لحم", "رمضان", "tajine", "quince"]
  },
  {
    id: "ram-44",
    name: {
      [Language.AR]: "كفتة مشوية على الفحم",
      [Language.FR]: "Kefta Grillée au Charbon",
      [Language.EN]: "Charcoal Grilled Kofta"
    },
    category: Category.RAMADAN,
    subCategory: "Main",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "لحم مفروم متبل بالشحم والأعشاب، مشوي على الفحم.",
      [Language.FR]: "Viande hachée épicée grillée au charbon.",
      [Language.EN]: "Spiced minced meat grilled over charcoal."
    },
    prepTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    cookTime: { [Language.AR]: "10 دقائق", [Language.FR]: "10 min", [Language.EN]: "10 min" },
    servings: 4,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["لحم مفروم", "شحم مطحون", "بصل مفروم", "قزبر وبقدونس", "كامون، بابريكا، ملح"],
      [Language.FR]: ["Viande hachée", "Gras", "Oignon", "Herbes", "Épices"],
      [Language.EN]: ["Minced meat", "Fat", "Onion", "Herbs", "Spices"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الكفتة مع جميع المكونات وندلكها جيداً.",
        "نشكلها على شكل أصابع أو كرات مسطحة.",
        "نشويها على الفحم حتى تنضج وتتحمر."
      ],
      [Language.FR]: [
        "Mélanger et pétrir la viande.",
        "Former des boudins.",
        "Griller au charbon."
      ],
      [Language.EN]: [
        "Mix and knead the meat.",
        "Form logs.",
        "Grill over charcoal."
      ]
    },
    tips: {
      [Language.AR]: ["الشحم ضروري لكي لا تجف الكفتة.", "لا تبالغي في الشوي."],
      [Language.FR]: ["Le gras évite le dessèchement.", "Ne pas trop griller."],
      [Language.EN]: ["Fat prevents drying.", "Don't over-grill."]
    },
    keywords: ["كفتة", "مشوي", "رمضان", "kefta", "grilled"]
  },
  {
    id: "ram-45",
    name: {
      [Language.AR]: "دجاج محمر بالدغميرة",
      [Language.FR]: "Poulet Rôti à la Marocaine",
      [Language.EN]: "Moroccan Roasted Chicken"
    },
    category: Category.RAMADAN,
    subCategory: "Main",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "دجاج محمر في الفرن مع صلصة البصل والكبد (الدغميرة).",
      [Language.FR]: "Poulet rôti avec sauce onctueuse aux oignons.",
      [Language.EN]: "Roasted chicken with thick onion sauce."
    },
    prepTime: { [Language.AR]: "40 دقيقة", [Language.FR]: "40 min", [Language.EN]: "40 min" },
    cookTime: { [Language.AR]: "60 دقيقة", [Language.FR]: "60 min", [Language.EN]: "60 min" },
    servings: 4,
    difficulty: { [Language.AR]: "صعب", [Language.FR]: "Difficile", [Language.EN]: "Hard" },
    ingredients: {
      [Language.AR]: ["دجاجة كاملة", "بصل (كيلو)", "كبد الدجاج", "ثوم، حامض مصير", "سمن، زعفران، زنجبيل"],
      [Language.FR]: ["Poulet", "Oignons", "Foies", "Ail, citron confit", "Smen, épices"],
      [Language.EN]: ["Chicken", "Onions", "Livers", "Garlic, preserved lemon", "Smen, spices"]
    },
    steps: {
      [Language.AR]: [
        "نشرمل الدجاج ونطهوه مع البصل.",
        "نزيل الدجاج وندهنه بالزبدة ونحمره في الفرن.",
        "نضيف الكبد المقطع للمرق ونتركه يتخثر جيداً (الدغميرة).",
        "نقدم الدجاج فوق الدغميرة."
      ],
      [Language.FR]: [
        "Cuire le poulet.",
        "Rôtir au four.",
        "Réduire la sauce avec les foies.",
        "Servir."
      ],
      [Language.EN]: [
        "Cook chicken.",
        "Roast in the oven.",
        "Reduce sauce with livers.",
        "Serve."
      ]
    },
    tips: {
      [Language.AR]: ["الدغميرة يجب أن تكون ثقيلة جداً.", "الحامض المصير أساسي."],
      [Language.FR]: ["Sauce très réduite.", "Citron confit indispensable."],
      [Language.EN]: ["Very reduced sauce.", "Preserved lemon is essential."]
    },
    keywords: ["دجاج", "محمر", "دغميرة", "رمضان", "chicken", "roasted"]
  },
  {
    id: "ram-46",
    name: {
      [Language.AR]: "عصير الخوخ والبرتقال",
      [Language.FR]: "Jus Pêche Orange",
      [Language.EN]: "Peach Orange Juice"
    },
    category: Category.DRINKS,
    subCategory: "Drink",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "عصير صيفي منعش، يجمع بين حلاوة الخوخ وحموضة البرتقال.",
      [Language.FR]: "Boisson rafraîchissante pêche et orange.",
      [Language.EN]: "Refreshing peach and orange drink."
    },
    prepTime: { [Language.AR]: "10 دقائق", [Language.FR]: "10 min", [Language.EN]: "10 min" },
    cookTime: { [Language.AR]: "0 دقيقة", [Language.FR]: "0 min", [Language.EN]: "0 min" },
    servings: 4,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["خوخ طازج", "عصير برتقال", "سكر", "ياغورت بنكهة الخوخ (اختياري)"],
      [Language.FR]: ["Pêches", "Jus d'orange", "Sucre", "Yaourt"],
      [Language.EN]: ["Peaches", "Orange juice", "Sugar", "Yogurt"]
    },
    steps: {
      [Language.AR]: [
        "نقشر الخوخ ونزيل النواة.",
        "نطحنه مع عصير البرتقال والسكر والياغورت.",
        "نبرده جيداً قبل التقديم."
      ],
      [Language.FR]: [
        "Peler et mixer les pêches.",
        "Ajouter jus et sucre.",
        "Servir frais."
      ],
      [Language.EN]: [
        "Peel and blend peaches.",
        "Add juice and sugar.",
        "Serve cold."
      ]
    },
    tips: {
      [Language.AR]: ["استخدمي خوخاً ناضجاً جداً.", "الياغورت يعطي قواماً كريمياً."],
      [Language.FR]: ["Pêches bien mûres.", "Le yaourt donne de l'onctuosité."],
      [Language.EN]: ["Very ripe peaches.", "Yogurt adds creaminess."]
    },
    keywords: ["عصير", "خوخ", "برتقال", "رمضان", "juice", "peach"]
  },
  {
    id: "ram-47",
    name: {
      [Language.AR]: "عصير المانجو والليمون",
      [Language.FR]: "Jus Mangue Citron",
      [Language.EN]: "Mango Lemon Juice"
    },
    category: Category.DRINKS,
    subCategory: "Drink",
    image: "https://images.unsplash.com/photo-1543648964-18ab22b3dde5?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "عصير استوائي منعش بلمسة ليمون حامضة.",
      [Language.FR]: "Boisson tropicale mangue et citron.",
      [Language.EN]: "Tropical mango and lemon drink."
    },
    prepTime: { [Language.AR]: "10 دقائق", [Language.FR]: "10 min", [Language.EN]: "10 min" },
    cookTime: { [Language.AR]: "0 دقيقة", [Language.FR]: "0 min", [Language.EN]: "0 min" },
    servings: 2,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["مانجو ناضجة", "عصير ليمونة", "ماء بارد", "سكر"],
      [Language.FR]: ["Mangue", "Citron", "Eau", "Sucre"],
      [Language.EN]: ["Mango", "Lemon", "Water", "Sugar"]
    },
    steps: {
      [Language.AR]: [
        "نطحن لب المانجو مع الماء وعصير الليمون والسكر.",
        "نصفيه إذا لزم الأمر.",
        "نقدمه بارداً."
      ],
      [Language.FR]: [
        "Mixer mangue, eau et citron.",
        "Sucrer.",
        "Servir frais."
      ],
      [Language.EN]: [
        "Blend mango, water and lemon.",
        "Sweeten.",
        "Serve cold."
      ]
    },
    tips: {
      [Language.AR]: ["المانجو المجمدة تعطي قوام 'سموذي'.", "الليمون يبرز نكهة المانجو."],
      [Language.FR]: ["Mangue surgelée pour un smoothie.", "Le citron rehausse le goût."],
      [Language.EN]: ["Frozen mango for a smoothie.", "Lemon enhances the flavor."]
    },
    keywords: ["عصير", "مانجو", "ليمون", "رمضان", "juice", "mango"]
  },
  {
    id: "ram-48",
    name: {
      [Language.AR]: "حلوى لسان الطير",
      [Language.FR]: "Lsan Tair",
      [Language.EN]: "Lsan Tair Sweet"
    },
    category: Category.RAMADAN,
    subCategory: "Sweet",
    image: "https://images.unsplash.com/photo-1590004953392-5aba2e785997?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى معسلة تشبه الشباكية في المذاق ولكنها أسهل في التحضير.",
      [Language.FR]: "Pâtisserie au miel facile et croustillante.",
      [Language.EN]: "Easy and crispy honey pastry."
    },
    prepTime: { [Language.AR]: "40 دقيقة", [Language.FR]: "40 min", [Language.EN]: "40 min" },
    cookTime: { [Language.AR]: "20 دقيقة", [Language.FR]: "20 min", [Language.EN]: "20 min" },
    servings: 30,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["دقيق", "ماء زهر", "زبدة", "ملح", "زيت للقلي", "عسل"],
      [Language.FR]: ["Farine", "Eau de fleur d'oranger", "Beurre", "Sel", "Huile", "Miel"],
      [Language.EN]: ["Flour", "Orange blossom water", "Butter", "Salt", "Oil", "Honey"]
    },
    steps: {
      [Language.AR]: [
        "نعجن الدقيق مع ماء الزهر والزبدة.",
        "نشكل كويرات ونبسطها رقيقة جداً ونطهوها نصف سلقة.",
        "نلفها ونقطعها بشكل مائل.",
        "نقليها ونعسلها."
      ],
      [Language.FR]: [
        "Pétrir la pâte.",
        "Précuire des galettes fines.",
        "Rouler et couper en biais.",
        "Frire et mieller."
      ],
      [Language.EN]: [
        "Knead the dough.",
        "Pre-cook thin galettes.",
        "Roll and cut diagonally.",
        "Fry and honey."
      ]
    },
    tips: {
      [Language.AR]: ["التقطيع المائل يعطي شكلاً جميلاً.", "يجب إغلاق اللفة جيداً بالدقيق والماء."],
      [Language.FR]: ["Coupe en biais.", "Bien sceller le rouleau."],
      [Language.EN]: ["Diagonal cut for shape.", "Seal the roll well."]
    },
    keywords: ["حلوى", "لسان الطير", "رمضان", "sweets", "honey"]
  },
  {
    id: "ram-49",
    name: {
      [Language.AR]: "بليغات بالزنجلان",
      [Language.FR]: "Blighat au Sésame",
      [Language.EN]: "Sesame Blighat"
    },
    category: Category.RAMADAN,
    subCategory: "Sweet",
    image: "https://images.unsplash.com/photo-1590004953392-5aba2e785997?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "حلوى مقرمشة بالزنجلان (السمسم) على شكل 'بليغة' مغربية.",
      [Language.FR]: "Pâtisserie croquante au sésame en forme de babouche.",
      [Language.EN]: "Crunchy sesame pastry shaped like a slipper."
    },
    prepTime: { [Language.AR]: "30 دقيقة", [Language.FR]: "30 min", [Language.EN]: "30 min" },
    cookTime: { [Language.AR]: "15 دقيقة", [Language.FR]: "15 min", [Language.EN]: "15 min" },
    servings: 30,
    difficulty: { [Language.AR]: "سهل", [Language.FR]: "Facile", [Language.EN]: "Easy" },
    ingredients: {
      [Language.AR]: ["زنجلان (سمسم)", "دقيق", "أصفر بيضة", "زبدة", "ماء زهر", "عسل"],
      [Language.FR]: ["Sésame", "Farine", "Jaune d'œuf", "Beurre", "Eau de fleur d'oranger", "Miel"],
      [Language.EN]: ["Sesame", "Flour", "Egg yolk", "Butter", "Orange blossom water", "Honey"]
    },
    steps: {
      [Language.AR]: [
        "نخلط الزنجلان والدقيق والمكونات الأخرى.",
        "نبسط العجين ونقطعه مربعات.",
        "نجمع زاويتين متقابلتين لنحصل على شكل البليغة.",
        "نقليها ونعسلها."
      ],
      [Language.FR]: [
        "Mélanger les ingrédients.",
        "Étaler et couper en carrés.",
        "Pincer deux coins.",
        "Frire et mieller."
      ],
      [Language.EN]: [
        "Mix ingredients.",
        "Roll out and cut into squares.",
        "Pinch two corners.",
        "Fry and honey."
      ]
    },
    tips: {
      [Language.AR]: ["الزنجلان لا يجب أن يكون محمساً لأنه سيقلى.", "اضغطي جيداً على الزوايا."],
      [Language.FR]: ["Sésame non grillé.", "Bien pincer."],
      [Language.EN]: ["Un-toasted sesame.", "Pinch well."]
    },
    keywords: ["بليغات", "زنجلان", "حلويات", "رمضان", "blighat", "sesame"]
  },
  {
    id: "ram-50",
    name: {
      [Language.AR]: "مسمن معمر في الفرن",
      [Language.FR]: "Msemen Farci au Four",
      [Language.EN]: "Stuffed Msemen in Oven"
    },
    category: Category.RAMADAN,
    subCategory: "Appetizer",
    image: "https://images.unsplash.com/photo-1599121106328-907003214ab9?q=80&w=800&auto=format&fit=crop",
    description: {
      [Language.AR]: "مسمن كبير محشو بالخضر واللحم المفروم، يطهى في الفرن ليصبح مقرمشاً.",
      [Language.FR]: "Grand msemmen farci et cuit au four.",
      [Language.EN]: "Large stuffed msemmen baked in the oven."
    },
    prepTime: { [Language.AR]: "40 دقيقة", [Language.FR]: "40 min", [Language.EN]: "40 min" },
    cookTime: { [Language.AR]: "30 دقيقة", [Language.FR]: "30 min", [Language.EN]: "30 min" },
    servings: 6,
    difficulty: { [Language.AR]: "متوسط", [Language.FR]: "Moyen", [Language.EN]: "Medium" },
    ingredients: {
      [Language.AR]: ["عجين المسمن", "بصل، فلفل", "لحم مفروم", "زيتون، شعرية صينية", "زبدة للدهن"],
      [Language.FR]: ["Pâte à msemmen", "Légumes", "Viande hachée", "Olives, vermicelles", "Beurre"],
      [Language.EN]: ["Msemmen dough", "Vegetables", "Minced meat", "Olives, vermicelli", "Butter"]
    },
    steps: {
      [Language.AR]: [
        "نحضر الحشوة ونتركها تبرد.",
        "نبسط العجين ونضع الحشوة ونطويها على شكل مربع كبير.",
        "نضعها في صفيحة الفرن وندهنها بالزبدة.",
        "نطهوها حتى تصبح ذهبية ومقرمشة."
      ],
      [Language.FR]: [
        "Préparer la farce.",
        "Étaler la pâte, farcir et plier.",
        "Cuire au four jusqu'à dorure."
      ],
      [Language.EN]: [
        "Prepare the filling.",
        "Roll out dough, stuff and fold.",
        "Bake until golden and crispy."
      ]
    },
    tips: {
      [Language.AR]: ["الحشوة يجب أن تكون باردة تماماً.", "استخدمي الزبدة الحيوانية لنكهة أفضل."],
      [Language.FR]: ["Farce bien froide.", "Beurre de qualité."],
      [Language.EN]: ["Filling must be cold.", "Quality butter for flavor."]
    },
    keywords: ["مسمن", "معمر", "فرن", "رمضان", "msemen", "stuffed"]
  }
];
