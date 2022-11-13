//All Products in database

const products = [
  {
    name: "Zelda Twilight Princess",
    price: 599,
    image: "/products/Zelda_twilight_princess.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 3,
    category: "Wii",
    description:
      "Notable for being the first Zelda game launched with a Nintendo platform, The Legend of Zelda: Twilight Princess for Wii is an enhanced version of the GameCube title with a new control scheme. Players guide the elfin Link with both the Wii Remote and Nunchuk controllers as he fights to save Hyrule from a shadowy new threat, one that has cast a crippling darkness over the once vibrant land and its surrounding areas. Link has a few new powers up his tunic's sleeve, however, as he can transform into a wolf with the help of a mysterious animal friend named Midna.",
  },
  {
    name: "Payday 2",
    price: 249,
    image: "/products/Payday_2.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 2,
    category: "PS3",
    description:
      "Payday 2 is an action-packed, four-player co-op heist shooter that once again lets gamers don the masks of the original Payday crew – Dallas, Hoxton, Wolf and Chains. The new CrimeNet network offers a huge range of dynamic contracts and players are free to choose anything from small-time convenience store hits or kidnappings, to cyber-crime or emptying out bank vaults. As the crew progresses the jobs become bigger, better and more rewarding. Along with earning more money and becoming a legendary criminal comes a new character customization and crafting system that lets crews build and customize their own guns and gear.",
  },
  {
    name: "The Last Of Us",
    price: 199,
    image: "/products/The_Last_Of_Us.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 5,
    category: "PS3",
    description:
      "The Last of Us is a third-person Survival-Action game and PlayStation 3 exclusive featuring a unique character action driven storyline focused on the unlikely pairing of a young girl and a hardened scavenger in a post-apocalyptic gameworld. The game utilizes multiple gameplay mechanics, including Dynamic Stealth, allowing differing possible strategies and techniques in conflicts, resulting in different possible outcomes. Additional game features include AI that adapts to choices and situations, a variety of enemies, a live inventory system, and beautiful graphics. Story 20 years after a pandemic has radically changed known civilization, infected humans run wild and survivors are killing each other for food, weapons - whatever they can get their hands on. Joel, a violent survivor, is hired to smuggle a 14 year-old girl, Ellie, out of an oppressive military quarantine zone, but what starts as a small job soon transforms into a brutal journey across the U.S.",
  },
  {
    name: "Jedi Fallen Order",
    price: 399,
    image: "/products/Jedi_fallen_order.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 7,
    category: "PS4",
    description:
      "This narratively-driven single player game puts you in the role of a Jedi Padawan who narrowly escaped the purge of order 66 following the events of episode 3: Revenge of the Sith",
  },
  {
    name: "Battlefront 2",
    price: 299,
    image: "/products/Battlefront_2.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 9,
    category: "PS4",
    description:
      "The reboot of the Battlefront series returns with a new character class system and a single-player campaign in Star Wars: Battlefront II. Solo gamers join the Galactic Empire as Iden Versio, commander of an Imperial special forces unit known as Inferno Squad. Beginning after the explosion of Death Star II, players embark on a 30-year campaign in which they interact with iconic Star Wars characters and fight to suppress the rebellion in battles on land and in space, while multiplayer fans pick from four classes, head to iconic locations, and compete in a variety of modes.Gamers choose from Assault, Heavy, Specialist, or Support classes and then switch between first-person and third-person perspectives as they fight across worlds like Endor, Jakku, Naboo, and Yavine 4, either on foot, or aboard vehicles like speeder bikes, snowspeeders, and AT-ATs. Players can also unlock and control classic characters like Darth Maul, Rey, and Boba Fett, or iconic vehicles like the Millennium Falcon and Poe Dameron's T-70 X-wing.",
  },
  {
    name: "Dishonored 2",
    price: 239,
    image: "/products/Dishonored_2.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 3,
    category: "PS4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus arcu, laoreet gravida gravida ut, viverra in mi. Nam sed sollicitudin ex. Maecenas at bibendum nisl. Sed a bibendum diam, sit amet mollis felis. In rhoncus nulla faucibus quam tincidunt finibus. Ut eget ex sem. Pellentesque eu tellus at erat aliquet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed facilisis lectus. Suspendisse non fringilla dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id efficitur ante, a maximus lectus. In mi ipsum, consequat vitae diam quis, facilisis interdum ipsum. Etiam tristique metus ipsum. Nullam lectus risus, varius cursus mauris non, varius sodales est.",
  },
  {
    name: "Ghost Of Tsushima",
    price: 599,
    image: "/products/Ghost_Of_Tsushima.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 10,
    category: "PS4",
    description:
      "In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet led by the ruthless and cunning general, Khotun Khan. As the island burns in the wake of the first wave of the Mongol assault, courageous samurai warrior Jin Sakai stands resolute. As one of the last surviving members of his clan, Jin is resolved to do whatever it takes, at any cost, to protect his people and reclaim his home. He must set aside the traditions that have shaped him as a warrior to forge a new path, the path of the Ghost, and wage an unconventional war for the freedom of Tsushima. Ghost of Tsushima DIRECTOR'S CUT includes: - Full game. - Iki Island expansion: New story, mini-games, enemy types and more. - Legends online co-op mode. - Digital mini art book by Dark Horse. - Director's commentary: The creative team sits down with a renowned Japanese historian to look at the world of Ghost of Tsushima and how it compares to the real-life events that inspired it.",
  },
  {
    name: "The Last Of Us Part 2",
    price: 499,
    image: "/products/The_Last_Of_Us_2.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 0,
    category: "PS4",
    description:
      "Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors. When a violent event disrupts thatpeace, Ellie embarks on a relentless journey to carry out justice and find closure. As she hunts those responsible one by one, she is confronted with the devastating physical and emotional repercussions of her actions.",
  },
  {
    name: "Red Dead Redemption 2",
    price: 289,
    image: "/products/Red_Dead_Redemption.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 7,
    category: "PS4",
    description:
      "America, 1899. The end of the Wild West era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. After a robbery goes badly wrong in the Western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must Rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. From the creators of grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern Age.",
  },
  {
    name: "Uncharted 4 A Thiefs End",
    price: 399,
    image: "/products/Uncharted_4.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 8,
    category: "PS4",
    description:
      "On the hunt for Captain Henry Avery's long-lost treasure, Sam and Drake set off to find Libertalia, the pirate utopia deep in the forests of Madagascar. UNCHARTED 4: A Thief's End takes players on a journey around the globe, through jungle isles, far-flung cities and snow-capped peaks on the search for Avery's fortune.",
  },
  {
    name: "God Of War",
    price: 199,
    image: "/products/God_Of_War.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 15,
    category: "PS4",
    description:
      "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse gods and monsters. It is in this harsh, unforgiving world that he must fight to survive...And teach his son to do the same. This startling re-imagining of God of War deconstructs the core elements that defined the series-satisfying combat; breath-taking scale; and a powerful narrative-and fuses them anew.",
  },
  {
    name: "Dying Light 2 Stay Human",
    price: 499,
    image: "/products/Dying_Light_2.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 11,
    category: "PS5",
    description:
      "Over twenty years ago in Harran, we fought the virus—and lost. Now, we’re losing again. The City, one of the last large human settlements, is torn by conflict. Civilization has fallen back into the Dark Ages. And yet, we still have hope. You are a wanderer with the power to change the fate of The City. But your exceptional abilities come at a price. Haunted by memories you cannot decipher, you set out to learn the truth… and find yourself in a combat zone. Hone your skills, as to defeat your enemies and make allies, you’ll need both fists and wits. Unravel the dark secrets behind the wielders of power, choose sides and decide your destiny. But wherever your actions take you, there's one thing you can never forget—stay human.",
  },
  {
    name: "Spider Man Miles Morales",
    price: 499,
    image: "/products/Spider_Man_Miles_Morales.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 13,
    category: "PS4",
    description:
      "In the latest adventure in the Marvel's spider-man universe, teenager miles morales is adjusting to his new home while following in the footsteps of his mentor, peter parker, as a new spider-man. But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvel's new York, miles must take up the mantle of spider-man and own it.",
  },
  {
    name: "Sekiro Shadows Die Twice",
    price: 369,
    image: "/products/Sekiro.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 13,
    category: "PS4",
    description:
      "In Sekiro: Shadows Die Twice you are the “one-armed wolf”, a disgraced and disfigured warrior rescued from the brink of death. Bound to protect a young lord who is the descendant of an ancient bloodline, you become the target of many vicious enemies, including the dangerous Ashina clan. When the young lord is captured, nothing will stop you on a perilous quest to regain your honor, not even death itself.",
  },
  {
    name: "Horizon Forbidden West",
    price: 299,
    image: "/products/Horizon.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 9,
    category: "PS5",
    description:
      "From legendary game creator Hideo Kojima comes an all-new, genre-defying experience for the PlayStation 4. Sam Bridges must brave a world utterly transformed by the Death Stranding. Carrying the disconnected remnants of our future in his hands, he embarks on a journey to reconnect the shattered world one step at a time. With spectral creatures plaguing the landscape, and humanity on the verge of a mass extinction, it’s up to Sam to journey across the ravaged continent and save mankind from impending annihilation. What is the mystery of the Death Stranding? What will Sam discover on the road ahead? An unprecedented gameplay experience holds these answers and more.",
  },
  {
    name: "Death Stranding",
    price: 699,
    image: "/products/Death_Stranding.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 9,
    category: "PS4",
    description:
      "Join Aloy as she braves the Forbidden West - a majestic but dangerous frontier that conceals mysterious new threats. Explore distant lands, fight bigger and more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon. The land is dying. Vicious storms and an unstoppable blight ravage the scattered remnants of humanity, while fearsome new machines prowl their borders. Life on Earth is hurtling towards another extinction, and no one knows why. It's up to Aloy to uncover the secrets behind these threats and restore order and balance to the world. Along the way, she must reunite with old friends, forge alliances with warring new factions and unravel the legacy of the ancient past - all the while trying to stay one step ahead of a seemingly undefeatable new enemy.",
  },
  {
    name: "Doom Eternal",
    price: 189,
    image: "/products/Doom_Eternal.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 20,
    category: "PS4",
    description:
      "Developed by id software, doom eternal is the direct sequel to the award-winning and best-selling doom (2016). experience The ultimate combination of speed And power with the Next leap in push-forward, first-person combat. As the doom slayer, return to take your vengeance against the forces of Hell. Set to an all-new pulse pounding soundtrack composed by mick Gordon, fight across Dimensions as you slay new and classic demons with powerful new weapons and abilities.",
  },
  {
    name: "Days Gone",
    price: 379,
    image: "/products/Days_Gone.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 20,
    category: "PS4",
    description:
      "Do you have the skill and nerve to survive the horrors of a broken world in this massive open world action adventure? Step into the dirt flecked shoes of former outlaw biker Deacon St. John, a bounty hunter trying to find a reason to live in a land surrounded by death. Scavenge through abandoned settlements for equipment to craft valuable items and weapons, or take your chances with other survivors trying to eke out a living through fair trade… or more violent means. With humanity devastated by a global pandemic and ravaged by feral creatures known as Freakers, any mistake could be your last in your attempt to carve out a new life in the hostile Pacific Northwest high desert.",
  },
  {
    name: "God Of War Ragnarök",
    price: 799,
    image: "/products/God_Of_War_Ragnarok.JPG",
    rating: 0,
    numReviews: 0,
    countInStock: 5,
    category: "PS5",
    description:
      "Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go. Against a backdrop of Norse Realms torn asunder by the fury of the Aesir, they’ve been trying their utmost to undo the end times. But despite their best efforts, Fimbulwinter presses onward. Witness the changing dynamic of the father-son relationship as they fight for survival; Atreus thirsts for knowledge to help him understand the prophecy of “Loki”, as Kratos struggles to break free of his past and be the father his son needs. See for yourself how fate will force a choice upon them: between their own safety or the safety of the realms. All the while, hostile Asgardian forces assemble… Venture through all Nine Realms towards the prophesied battle that will end the world. Vanquish Norse gods and monsters alike in fluid, expressive combat. Explore in wonder through stunning mythological landscapes.",
  },
];

module.exports = products;
