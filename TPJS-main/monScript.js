//variables désignant mes héros et leur statut (vivant ou mort)
var hero1 = document.getElementById("personnage_A");
var hero2 = document.getElementById("personnage_B");
var hero3 = document.getElementById("personnage_C");
var hero4 = document.getElementById("personnage_D");
var hero1Vivant = true;
var hero2Vivant = true;
var hero3Vivant = true;
var hero4Vivant = true;

//variables désignant les monstres et leur statut (vivant ou mort)
var monstre1 = document.getElementById("monstre_A");
var monstre2 = document.getElementById("monstre_B");
var monstre3 = document.getElementById("monstre_C");
var monstre1Vivant = true;
var monstre2Vivant = true;
var monstre3Vivant = true;

//variables contenant les barres de vies des héros
var hpHero1 = document.getElementById("viePersoA");
var hpHero2 = document.getElementById("viePersoB");
var hpHero3 = document.getElementById("viePersoC");
var hpHero4 = document.getElementById("viePersoD");

//variables contenant les barres de mana des héros
var manaHero1 = document.getElementById("manaPersoA");
var manaHero2 = document.getElementById("manaPersoB");
var manaHero3 = document.getElementById("manaPersoC");
var manaHero4 = document.getElementById("manaPersoD");

//variables contenant les vies des héros
var hero1HP = 100;
var hero2HP = 100;
var hero3HP = 100;
var hero4HP = 100;

//variables contenant les vies des monstres
var monstre1HP = 100;
var monstre2HP = 100;
var monstre3HP = 100;

//variable du menu d'action des personnages, contenant les divers boutons utilisé
var boutonFermer = document.getElementById("bouton_fermer");
var boutonAttaque = document.getElementById("bouton_attaque");
var boutonAttaqueSpecial = document.getElementById("bouton_attaque_spe");
var boutonDefendre = document.getElementById("bouton_defense");

//variable permettant de recupperer les informations de combat
var menu = document.getElementById("menu");
var HPMonstre = document.getElementById("hp_ennemis");
var zoneTexte = document.getElementById("texte_combat");

//variables de selection permettant de définir quel personnage/monstre est actuellement selectionné
var joueurActuel = 0;
var monstreChoisi = 0;

//booléen pour savoir si il est possible d'attaquer, a utilisé pour l'attaque special et le mana
var attaquePossible = false;

//affiche le menu d'action du 1er personnage
hero1.onclick = function menuHero1() {
  var x = document.getElementById("menu");
  x.style.display = "flex";
  x.style.paddingTop = "1%"
  joueurActuel = 1
}

//affiche le menu d'action du 2ème personnage
hero2.onclick = function menuHero2() {
  var x = document.getElementById("menu");
  x.style.display = "flex";
  x.style.paddingTop = "8%"
  joueurActuel = 2
}

//fonction de defense
boutonDefendre.onclick = function suicide(){
  
}

//affiche le menu d'action du 3ème personnage
hero3.onclick = function menuHero3() {
  var x = document.getElementById("menu");
  x.style.display = "flex";
  x.style.paddingTop = "16%"
  joueurActuel = 3;
}

//affiche le menu d'action du 4ème personnage
hero4.onclick = function menuHero4() {
  var x = document.getElementById("menu");
  x.style.display = "flex";
  x.style.paddingTop = "25%"
  joueurActuel = 4;
}

//permet de fermer le menu d'action
boutonFermer.onclick = function fermer() {
  var x = document.getElementById("menu");
    x.style.display = "none";
}

//affiche les HP du 1er monstre
monstre1.onmouseover = function afficherInfos(){
  var x = document.getElementById("infos_ennemis");
  var hp = document.getElementById("hp_ennemis");
  x.style.paddingLeft = "40%"
  x.style.paddingTop = "8px";
  x.style.display = "flex";
  x.style.borderBlockWidth = "3px"
  hp.value = monstre1HP;
}

monstre1.onmouseout = function afficherInfos(){
  var x = document.getElementById("infos_ennemis");
  x.style.display = "none";
}

//affiche les HP du 2ème monstre
monstre2.onmouseover = function afficherInfos(){
  var x = document.getElementById("infos_ennemis");
  var hp = document.getElementById("hp_ennemis");
  x.style.paddingLeft = "40%"
  x.style.paddingTop = "8px";
  x.style.display = "flex";
  x.style.borderBlockWidth = "3px"
  hp.value = monstre2HP;
}

//cache les HP du 2ème monstre
monstre2.onmouseout = function afficherInfos(){
  var x = document.getElementById("infos_ennemis");
  x.style.display = "none";
}

//affiche les HP du 3ème monstre
monstre3.onmouseover = function afficherInfos(){
  var x = document.getElementById("infos_ennemis");
  var hp = document.getElementById("hp_ennemis");
  x.style.paddingLeft = "40%"
  x.style.paddingTop = "8px";
  x.style.display = "flex";
  x.style.borderBlockWidth = "3px"
  hp.value = monstre3HP;
}

//fonction d'attaque permettant d'utiliser une attaque classique sur l'ennemi choisi
boutonAttaque.onclick = function attaquer(){
  zoneTexte.style.display = "flex";
  var degats = Math.floor(Math.random() * 20);
    if (monstreChoisi == 1 && monstre1Vivant == true){
      monstre1HP = monstre1HP - degats;
      zoneTexte.innerHTML = "Le joueur " + joueurActuel + " inflige " + degats + " dégats au monstre " + monstreChoisi;
      if (monstre1HP <= 0){
        mort(monstre1);
        monstre1Vivant = false;
        zoneTexte.innerHTML = "Le monstre 1 est mort, félicitation !";
      }
    }
    if (monstreChoisi == 2 && monstre2Vivant == true){
      monstre2HP = monstre2HP - degats;
      zoneTexte.innerHTML = "Le joueur " + joueurActuel + " inflige " + degats + " dégats au monstre " + monstreChoisi;
      if (monstre2HP <= 0){
        mort(monstre2);
        monstre1Vivant = false;
        zoneTexte.innerHTML = "Le monstre 2 est mort, félicitation !";
      }
    }
    if (monstreChoisi == 3 && monstre3Vivant == true){
      monstre3HP = monstre3HP - degats;
      zoneTexte.innerHTML = "Le joueur " + joueurActuel + " inflige " + degats + " dégats au monstre " + monstreChoisi;
      if (monstre3HP <= 0){
        mort(monstre3);
        monstre3Vivant = false;
        zoneTexte.innerHTML = "Le monstre 1 est mort, félicitation !";
      }
    }
    //set Timeout permettant de patienter afin d'afficher chaque riposte l'une après l'autre
    setTimeout(riposteMonstre1, 3000);
    setTimeout(riposteMonstre2, 6000);
    setTimeout(riposteMonstre3, 9000);
    //verification des conditions de victoire et de l'état des monstres
    victoire()
  }

//fonction d'attaque spécial, attaquant avec une valeur fixe l'ennemi de son choix, utiliser ce coup fait perdre 20 points de mana
  boutonAttaqueSpecial.onclick = function attaquerSpecialement(){
    if(joueurActuel === 1 && manaHero1.value > 0){
      manaHero1.value = manaHero1.value - 20;
    }
    if(joueurActuel === 2 && manaHero2.value > 0){
      manaHero2.value = manaHero2.value - 20;
    }
    if(joueurActuel === 3 && manaHero3.value > 0){
      manaHero3.value = manaHero3.value - 20;
    }
    if(joueurActuel === 4 && manaHero4.value > 0){
      manaHero4.value = manaHero4.value - 20;
    }
    zoneTexte.style.display = "flex";
    var degats = 25;
      if (monstreChoisi == 1 && monstre1Vivant == true){
        monstre1HP = monstre1HP - degats;
        zoneTexte.innerHTML = "Le joueur " + joueurActuel + " inflige " + degats + " dégats au monstre " + monstreChoisi + " et perd 20 points de mana";
      }
      if (monstreChoisi == 2 && monstre2Vivant == true){
        monstre2HP = monstre2HP - degats;
        zoneTexte.innerHTML = "Le joueur " + joueurActuel + " inflige " + degats + " dégats au monstre " + monstreChoisi + " et perd 20 points de mana";
      }
      if (monstreChoisi == 3 && monstre3Vivant == true){
        monstre3HP = monstre3HP - degats;
        zoneTexte.innerHTML = "Le joueur " + joueurActuel + " inflige " + degats + " dégats au monstre " + monstreChoisi + " et perd 20 points de mana";
      }
      //set Timeout permettant de patienter afin d'afficher chaque riposte l'une après l'autre
      setTimeout(riposteMonstre1, 3000);
      setTimeout(riposteMonstre2, 6000);
      setTimeout(riposteMonstre3, 9000);
      //verification des conditions de victoire et de l'état des monstres
      victoire()
    }

//cache les HP du 3ème monstre
monstre3.onmouseout = function afficherInfos(){
  var x = document.getElementById("infos_ennemis");
  x.style.display = "none";
}

//permet de selectionner le monstre a attaquer et indiquer lequel est selectionné
monstre1.onclick = function choixMonstre(){
  monstreChoisi = 1;
  monstre1.style.borderWidth = "6px";
  monstre1.style.borderBlockColor = "red";
  monstre2.style.borderWidth = "2px";
  monstre2.style.borderBlockColor = "black";
  monstre3.style.borderWidth = "2px";
  monstre3.style.borderBlockColor = "black";
}

//permet de selectionner le monstre a attaquer et indiquer lequel est selectionné
monstre2.onclick = function choixMonstre(){
  monstreChoisi = 2;
  monstre1.style.borderWidth = "2px";
  monstre1.style.borderBlockColor = "black";
  monstre2.style.borderWidth = "6px";
  monstre2.style.borderBlockColor = "red";
  monstre3.style.borderWidth = "2px";
  monstre3.style.borderBlockColor = "black";
}

//permet de selectionner le monstre a attaquer et indiquer lequel est selectionné
monstre3.onclick = function choixMonstre(){
  monstreChoisi = 3;
  monstre1.style.borderWidth = "2px";
  monstre1.style.borderBlockColor = "black";
  monstre2.style.borderWidth = "2px";
  monstre2.style.borderBlockColor = "black";
  monstre3.style.borderWidth = "6px";
  monstre3.style.borderBlockColor = "red";
}

//fonction de riposte du 1er monstre, vérifie également le statut des différents héros et si la partie est perdu
function riposteMonstre1(){
  if(monstre1Vivant == true){
    var choix = Math.floor(Math.random() * 4);
    var degats = Math.floor(Math.random() * 15);
    zoneTexte.style.display = "flex";
    if(choix === 0 && hero1Vivant){
      zoneTexte.innerHTML = "Le monstre 1 attaque et inflige " + degats + " dégats au joueur " + 1;
      hero1HP = hero1HP - degats;
      hpHero1.value = hpHero1.value - degats;
      if (hero1HP <= 0){
        mort(hero1);
        hero1Vivant = false;
      }
    }
    if(choix === 1 && hero2Vivant){
      zoneTexte.innerHTML = "Le monstre 1 attaque et inflige " + degats + " dégats au joueur " + 2;
      hero2HP = hero2HP - degats;
      hpHero2.value = hpHero2.value - degats;
      if (hero2HP <= 0){
        mort(hero2);
        hero1Vivant = false;
    }
    if(choix == 2 && hero3Vivant){
      zoneTexte.innerHTML = "Le monstre 1 attaque et inflige " + degats + " dégats au joueur " + 3;
      hero3HP = hero3HP - degats;
      hpHero3.value = hpHero3.value - degats
      if (hero3HP <= 0){
        mort(hero3);
        hero3Vivant = false;
    }
    if(choix == 3 && hero4Vivant){
      zoneTexte.innerHTML = "Le monstre 1 attaque et inflige " + degats + " dégats au joueur " + 4;
      hero4HP = hero4HP - degats;
      hpHero4.value = hpHero4.value - degats;
      if (hero4HP <= 0){
        mort(hero4);
        hero4Vivant = false;
      }
    }
  }
  }
}
defaite()
}

//fonction de riposte du 2ème monstre, vérifie également le statut des différents héros et si la partie est perdu
  function riposteMonstre2(){
    if(monstre2Vivant == true){
      var choix = Math.floor(Math.random() * 4);
      var degats = Math.floor(Math.random() * 20);
      zoneTexte.style.display = "flex";
      if(choix == 0 && hero1Vivant){
        zoneTexte.innerHTML = "Le monstre 2 attaque et inflige " + degats + " dégats au joueur " + 1;
        hero1HP = hero1HP - degats;
        hpHero1.value = hpHero1.value - degats;
        if (hero1HP <= 0){
          mort(hero1);
          hero1Vivant = false;
        }
      }
      if(choix == 1 && hero2Vivant){
        zoneTexte.innerHTML = "Le monstre 2 attaque et inflige " + degats + " dégats au joueur " + 2;
        hero2HP = hero2HP - degats;
        hpHero2.value = hpHero2.value - degats;
        if (hero2HP <= 0){
          mort(hero2);
          hero2Vivant = false;
        }
      }
      if(choix == 2 && hero3Vivant){
        zoneTexte.innerHTML = "Le monstre 2 attaque et inflige " + degats + " dégats au joueur " + 3;
        hero3HP = hero3HP - degats;
        hpHero3.value = hpHero3.value - degats
        if (hero3HP <= 0){
          mort(hero3);
          hero3Vivant = false;
        }
      }
      if(choix == 3 && hero4Vivant){
        zoneTexte.innerHTML = "Le monstre 2 attaque et inflige " + degats + " dégats au joueur " + 4;
        hero4HP = hero4HP - degats;
        hpHero4.value = hpHero4.value - degats;
        if (hero4HP <= 0){
          mort(hero4);
          hero4Vivant = false;
        }
    }
  }
  defaite()
}

//fonction de riposte du 3ème monstre, vérifie également le statut des différents héros et si la partie est perdu
  function riposteMonstre3(){
    if(monstre3Vivant == true){
      var choix = Math.floor(Math.random() * 4);
      var degats = Math.floor(Math.random() * 20);
      zoneTexte.style.display = "flex";
      if(choix == 0 && hero1Vivant){
        zoneTexte.innerHTML = "Le monstre 3 attaque et inflige " + degats + " dégats au joueur " + 1;
        hero1HP = hero1HP - degats;
        hpHero1.value = hpHero1.value - degats;
        if (hero1HP <= 0){
          mort(hero1);
          hero1Vivant = false;
        }
      }
      if(choix == 1 && hero2Vivant){
        zoneTexte.innerHTML = "Le monstre 3 attaque et inflige " + degats + " dégats au joueur " + 2;
        hero2HP = hero2HP - degats;
        hpHero2.value = hpHero2.value - degats;
        if (hero2HP <= 0){
          mort(hero2);
          hero2Vivant = false;
        }
      }
      if(choix == 2 && hero3Vivant){
        zoneTexte.innerHTML = "Le monstre 3 attaque et inflige " + degats + " dégats au joueur " + 3;
        hero3HP = hero3HP - degats;
        hpHero3.value = hpHero3.value - degats
        if (hero3HP <= 0){
          mort(hero3);
          hero3Vivant = false;
        }
      }
      if(choix == 3 && hero4Vivant){
        zoneTexte.innerHTML = "Le monstre 3 attaque et inflige " + degats + " dégats au joueur " + 4;
        hero4HP = hero4HP - degats;
        hpHero4.value = hpHero4.value - degats;
        if (hero4HP <= 0){
          mort(hero4);
          hero4Vivant = false;
        }
      }
  }
  defaite()
}

//fonction permettant de cacher les personnages et monstres mort (x)
  function mort(x){
    x.style.display = "none";
  }

//fonction annoncant la victoire une fois tout les monstres mort
  function victoire(){
    if (monstre1Vivant == false && monstre2Vivant == false && monstre3Vivant == false){
      zoneTexte.style.display = "flex";
      zoneTexte.innerHTML = "VOUS AVEZ GAGNER FELICITATIONS !";
    }
  }

//fonction annoncant la defaite en cas de mort de tout les personnages du joueur
  function defaite(){
    if(hero1Vivant == false && hero2Vivant == false && hero3Vivant == false && hero4Vivant == false){
      zoneTexte.style.display = "flex";
      zoneTexte.innerHTML = "VOUS AVEZ PERDU !";
    }
  }