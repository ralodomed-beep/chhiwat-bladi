/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Heart, 
  Share2, 
  Clock, 
  Users, 
  ChevronRight, 
  ChevronLeft,
  Home,
  Bookmark,
  PlusCircle,
  Menu,
  X,
  Play,
  Moon,
  Sun,
  Globe
} from 'lucide-react';
import { Category, Recipe, Language, CategoryNames } from './types';
import { recipes as initialRecipes } from './data/recipes';
import { translations } from './i18n/translations';

export default function App() {
  const [view, setView] = useState<'home' | 'category' | 'detail' | 'favorites' | 'add'>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>(Language.AR);

  const t = translations[lang];
  const isRTL = lang === Language.AR;

  // Load settings from local storage
  useEffect(() => {
    const savedFavs = localStorage.getItem('chhiwat_favorites');
    if (savedFavs) setFavorites(JSON.parse(savedFavs));
    
    const savedLang = localStorage.getItem('chhiwat_lang') as Language;
    if (savedLang && Object.values(Language).includes(savedLang)) setLang(savedLang);
  }, []);

  // Save favorites to local storage
  useEffect(() => {
    localStorage.setItem('chhiwat_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Save language to local storage
  useEffect(() => {
    localStorage.setItem('chhiwat_lang', lang);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const toggleFavorite = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const filteredRecipes = useMemo(() => {
    let result = initialRecipes;
    if (selectedCategory) {
      result = result.filter(r => r.category === selectedCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(r => 
        r.name[lang].toLowerCase().includes(q) || 
        r.description[lang].toLowerCase().includes(q) ||
        r.ingredients[lang].some(i => i.toLowerCase().includes(q))
      );
    }
    return result;
  }, [selectedCategory, searchQuery, lang]);

  const favoriteRecipes = useMemo(() => {
    return initialRecipes.filter(r => favorites.includes(r.id));
  }, [favorites]);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setView('detail');
    window.scrollTo(0, 0);
  };

  const handleCategoryClick = (cat: Category) => {
    setSelectedCategory(cat);
    setView('category');
    window.scrollTo(0, 0);
  };

  const renderHome = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8 pb-20"
    >
      {/* Hero Section */}
      <section className="relative h-64 rounded-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1539755218218-5180c173327d?q=80&w=1200&auto=format&fit=crop" 
          alt="Moroccan Food" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{t.heroTitle}</h1>
          <p className="text-sm opacity-90">{t.heroSubtitle}</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-moroccan-green">{t.categories}</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Object.values(Category).map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCategoryClick(cat)}
              className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center space-y-2 hover:border-moroccan-gold transition-colors"
            >
              <div className="w-12 h-12 bg-moroccan-green/10 rounded-full flex items-center justify-center text-moroccan-green">
                <span className="text-lg">🥘</span>
              </div>
              <span className="text-sm font-medium">{CategoryNames[cat][lang]}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Daily Suggestions */}
      <section>
        <h2 className="text-xl font-bold text-moroccan-green mb-4">{t.dailySuggestion}</h2>
        <div className="space-y-4">
          {initialRecipes.slice(0, 2).map((recipe) => (
            <div key={recipe.id}>
              <RecipeCard 
                recipe={recipe} 
                onClick={() => handleRecipeClick(recipe)}
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={(e) => toggleFavorite(recipe.id, e)}
                lang={lang}
                t={t}
              />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );

  const renderCategory = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6 pb-20"
    >
      <div className="flex items-center space-x-4 space-x-reverse mb-4">
        <button onClick={() => setView('home')} className="p-2 hover:bg-white/50 rounded-full">
          {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
        </button>
        <h2 className="text-2xl font-bold text-moroccan-green">{selectedCategory ? CategoryNames[selectedCategory][lang] : ''}</h2>
      </div>
      
      <div className="grid gap-4">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div key={recipe.id}>
              <RecipeCard 
                recipe={recipe} 
                onClick={() => handleRecipeClick(recipe)}
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={(e) => toggleFavorite(recipe.id, e)}
                lang={lang}
                t={t}
              />
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-stone-500">
            {t.noRecipes}
          </div>
        )}
      </div>
    </motion.div>
  );

  const renderDetail = () => {
    if (!selectedRecipe) return null;
    return (
      <motion.div 
        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: isRTL ? -50 : 50 }}
        className="pb-20"
      >
        <div className="relative h-80 -mx-4 -mt-4 mb-6">
          <img 
            src={selectedRecipe.image} 
            alt={selectedRecipe.name[lang]} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 right-4 flex justify-between">
            <button 
              onClick={() => setView(selectedCategory ? 'category' : 'home')}
              className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"
            >
              {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
            </button>
            <div className="flex space-x-2 space-x-reverse">
              <button 
                onClick={(e) => toggleFavorite(selectedRecipe.id, e)}
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${favorites.includes(selectedRecipe.id) ? 'bg-moroccan-red text-white' : 'bg-white/80 text-stone-600'}`}
              >
                <Heart className={`w-5 h-5 ${favorites.includes(selectedRecipe.id) ? 'fill-current' : ''}`} />
              </button>
              <button className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-2">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs font-bold text-moroccan-gold uppercase tracking-wider">{CategoryNames[selectedRecipe.category][lang]}</span>
              <h1 className="text-3xl font-bold text-moroccan-green mt-1">{selectedRecipe.name[lang]}</h1>
            </div>
          </div>

          <p className="text-stone-600 mb-6 leading-relaxed">{selectedRecipe.description[lang]}</p>

          <div className="flex justify-around py-4 bg-white rounded-2xl shadow-sm mb-8">
            <div className="flex flex-col items-center">
              <Clock className="w-5 h-5 text-moroccan-gold mb-1" />
              <span className="text-xs text-stone-500">{t.prepTime}</span>
              <span className="font-bold text-sm">{selectedRecipe.prepTime[lang]}</span>
            </div>
            <div className="w-px h-10 bg-stone-100" />
            <div className="flex flex-col items-center">
              <Users className="w-5 h-5 text-moroccan-gold mb-1" />
              <span className="text-xs text-stone-500">{t.servings}</span>
              <span className="font-bold text-sm">{selectedRecipe.servings} {t.persons}</span>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold text-moroccan-green mb-4 flex items-center">
                <span className={`w-2 h-6 bg-moroccan-gold rounded-full ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t.ingredients}
              </h3>
              <ul className="space-y-3">
                {selectedRecipe.ingredients[lang].map((ing, i) => (
                  <li key={i} className={`flex items-center text-stone-700 bg-white p-3 rounded-xl shadow-sm border-stone-100 ${isRTL ? 'border-r-4 border-r-moroccan-green/20' : 'border-l-4 border-l-moroccan-green/20'}`}>
                    <span className={`w-2 h-2 bg-moroccan-green rounded-full ${isRTL ? 'ml-3' : 'mr-3'}`} />
                    {ing}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-moroccan-green mb-4 flex items-center">
                <span className={`w-2 h-6 bg-moroccan-gold rounded-full ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t.steps}
              </h3>
              <div className="space-y-6">
                {selectedRecipe.steps[lang].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-moroccan-green text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <p className="text-stone-700 leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {selectedRecipe.tips[lang].length > 0 && (
              <section className="bg-moroccan-green/5 p-6 rounded-3xl border border-moroccan-green/10">
                <h3 className="text-lg font-bold text-moroccan-green mb-3">{t.tips}</h3>
                <ul className="space-y-2">
                  {selectedRecipe.tips[lang].map((tip, i) => (
                    <li key={i} className="text-sm text-stone-600 flex items-start">
                      <span className={`${isRTL ? 'ml-2' : 'mr-2'} text-moroccan-gold`}>✦</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderFavorites = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6 pb-20"
    >
      <h2 className="text-2xl font-bold text-moroccan-green mb-6">{t.favorites}</h2>
      {favoriteRecipes.length > 0 ? (
        <div className="grid gap-4">
          {favoriteRecipes.map(recipe => (
            <div key={recipe.id}>
              <RecipeCard 
                recipe={recipe} 
                onClick={() => handleRecipeClick(recipe)}
                isFavorite={true}
                onToggleFavorite={(e) => toggleFavorite(recipe.id, e)}
                lang={lang}
                t={t}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 flex flex-col items-center">
          <Heart className="w-16 h-16 text-stone-200 mb-4" />
          <p className="text-stone-500">{t.noFavorites}</p>
          <button 
            onClick={() => setView('home')}
            className="mt-4 text-moroccan-green font-bold underline"
          >
            {t.exploreRecipes}
          </button>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className={`min-h-screen zellij-pattern ${isDarkMode ? 'dark bg-stone-900 text-white' : ''}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 space-x-reverse">
          <button onClick={() => setIsMenuOpen(true)} className="p-2">
            <Menu className="w-6 h-6 text-moroccan-green" />
          </button>
          <div className="relative group">
            <button className="p-2 flex items-center space-x-1 space-x-reverse text-moroccan-green">
              <Globe className="w-5 h-5" />
              <span className="text-xs font-bold uppercase">{lang}</span>
            </button>
            <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-stone-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 min-w-[100px]">
              {Object.values(Language).map(l => (
                <button 
                  key={l}
                  onClick={() => setLang(l)}
                  className={`w-full text-right px-4 py-2 rounded-lg text-sm ${lang === l ? 'bg-moroccan-green text-white' : 'hover:bg-stone-50'}`}
                >
                  {l === Language.AR ? 'العربية' : l === Language.FR ? 'Français' : 'English'}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold text-moroccan-green font-serif">{t.appName}</h1>
          <span className="text-[10px] text-moroccan-gold tracking-widest uppercase">{t.appSubtitle}</span>
        </div>
        
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2">
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6 text-moroccan-green" />}
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-lg mx-auto p-4">
        {/* Search Bar */}
        {(view === 'home' || view === 'category') && (
          <div className="relative mb-6">
            <Search className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5`} />
            <input 
              type="text" 
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full bg-white rounded-2xl py-4 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} shadow-sm border border-stone-100 focus:outline-none focus:ring-2 focus:ring-moroccan-green/20`}
            />
          </div>
        )}

        <AnimatePresence mode="wait">
          {view === 'home' && renderHome()}
          {view === 'category' && renderCategory()}
          {view === 'detail' && renderDetail()}
          {view === 'favorites' && renderFavorites()}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-card border-t border-stone-100 px-6 py-3 flex justify-between items-center max-w-lg mx-auto rounded-t-3xl">
        <NavButton active={view === 'home'} onClick={() => {setView('home'); setSelectedCategory(null);}} icon={<Home />} label={t.home} />
        <NavButton active={view === 'favorites'} onClick={() => setView('favorites')} icon={<Bookmark />} label={t.favorites} />
        <button className="w-12 h-12 bg-moroccan-green text-white rounded-full flex items-center justify-center shadow-lg -mt-10 border-4 border-moroccan-cream">
          <PlusCircle className="w-6 h-6" />
        </button>
        <NavButton active={false} onClick={() => {}} icon={<Play />} label={t.video} />
        <NavButton active={false} onClick={() => {}} icon={<Users />} label={t.myRecipes} />
      </nav>

      {/* Side Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60]"
            />
            <motion.div 
              initial={{ x: isRTL ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '100%' : '-100%' }}
              className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} bottom-0 w-64 bg-white z-[70] p-6 shadow-2xl`}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-moroccan-green">{t.menu}</h2>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <ul className="space-y-6">
                <li onClick={() => {setView('home'); setIsMenuOpen(false);}} className="flex items-center space-x-3 space-x-reverse text-stone-700 font-medium cursor-pointer">
                  <Home className="w-5 h-5 text-moroccan-gold" />
                  <span>{t.home}</span>
                </li>
                <li onClick={() => {setView('favorites'); setIsMenuOpen(false);}} className="flex items-center space-x-3 space-x-reverse text-stone-700 font-medium cursor-pointer">
                  <Bookmark className="w-5 h-5 text-moroccan-gold" />
                  <span>{t.favorites}</span>
                </li>
                <li className="flex items-center space-x-3 space-x-reverse text-stone-700 font-medium cursor-pointer">
                  <PlusCircle className="w-5 h-5 text-moroccan-gold" />
                  <span>{t.addRecipe}</span>
                </li>
                <div className="h-px bg-stone-100 my-4" />
                <li className="text-stone-400 text-sm uppercase tracking-wider">{t.categories}</li>
                {Object.values(Category).map(cat => (
                  <li key={cat} onClick={() => {handleCategoryClick(cat); setIsMenuOpen(false);}} className="text-stone-600 cursor-pointer hover:text-moroccan-green">
                    {CategoryNames[cat][lang]}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function RecipeCard({ recipe, onClick, isFavorite, onToggleFavorite, lang, t }: { 
  recipe: Recipe, 
  onClick: () => void, 
  isFavorite: boolean,
  onToggleFavorite: (e: React.MouseEvent) => void,
  lang: Language,
  t: any
}) {
  const isRTL = lang === Language.AR;
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={`glass-card rounded-3xl overflow-hidden flex h-32 cursor-pointer group ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className="w-32 h-full overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name[lang]} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-stone-800 line-clamp-1">{recipe.name[lang]}</h3>
            <button onClick={onToggleFavorite} className="p-1">
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-moroccan-red text-moroccan-red' : 'text-stone-300'}`} />
            </button>
          </div>
          <p className="text-xs text-stone-500 line-clamp-2 mt-1">{recipe.description[lang]}</p>
        </div>
        <div className={`flex items-center text-[10px] text-stone-400 space-x-3 space-x-reverse`}>
          <div className="flex items-center">
            <Clock className={`w-3 h-3 ${isRTL ? 'ml-1' : 'mr-1'}`} />
            {recipe.prepTime[lang]}
          </div>
          <div className="flex items-center">
            <Users className={`w-3 h-3 ${isRTL ? 'ml-1' : 'mr-1'}`} />
            {recipe.servings} {t.persons}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center space-y-1 transition-colors ${active ? 'text-moroccan-green' : 'text-stone-400'}`}
    >
      {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}
