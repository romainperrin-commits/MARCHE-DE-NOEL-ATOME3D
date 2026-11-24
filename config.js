// Réglages du hub Marché de Noël Atome3D
window.HUB_CONFIG = {
  shop: "https://atome3d.com",                       // boutique Shopify
  code: "NOEL26",                                    // code cadeau (réduction Shopify)
  gameUrl: "JUMPING-RAT-NOEL.html",                  // jeu (même dossier)
  stlUrl: "https://makerworld.com/fr/@Atome3D",      // FREE STL
  // ID numériques des variantes Shopify des 2 produits offerts par cadeau.
  // Laisser vide = le bouton applique juste le code (le client ajoute ses cadeaux lui-même).
  gifts: {
    1: { variants: ["", ""] },   // Pin rouge + porte-clés Ratome
    2: { variants: ["", ""] },   // Pin jaune + porte-clés lanière
    3: { variants: ["", ""] },   // Pin vert + porte-clés plateau
    4: { variants: ["", ""] }    // Pin bleu + stickers 10 ans
  }
};
