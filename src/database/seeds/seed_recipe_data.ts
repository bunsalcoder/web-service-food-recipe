import { Knex } from "knex";
import pool from '../../models/pool';

const recipeData = [
    {
      "user_id": 6,
      "title": "Lok Lak",
      "description": "A classic Cambodian stir-fried beef dish served with rice and a tangy lime and pepper dipping sauce.",
      "instructions": "Marinate the beef in a mixture of soy sauce, oyster sauce, and black pepper for 30 minutes. Heat oil in a pan and stir-fry the garlic until fragrant. Add the marinated beef and stir-fry until cooked through. Serve the beef over a bed of lettuce, cucumber slices, and tomato wedges with steamed rice. Mix lime juice, salt, and black pepper for the dipping sauce."
    },
    {
      "user_id": 6,
      "title": "Samlor Korko",
      "description": "A hearty traditional Cambodian vegetable and pork stew thickened with toasted ground rice.",
      "instructions": "Toast the rice until golden brown and grind it into a powder. In a pot, sauté garlic, lemongrass, and turmeric paste until fragrant. Add the pork and stir until browned. Pour in the water and bring to a boil, then add vegetables like green papaya, long beans, eggplant, and pumpkin. Simmer until the vegetables are tender, then stir in the toasted rice powder to thicken the stew."
    },
    {
      "user_id": 6,
      "title": "Nom Banh Chok",
      "description": "A traditional Cambodian breakfast dish consisting of rice noodles topped with a green fish curry and fresh herbs.",
      "instructions": "Boil the fish until cooked, then blend it with lemongrass, turmeric, and galangal to make a paste. Cook the paste in a pot with coconut milk until fragrant, then add the fish and simmer. Serve the curry over rice noodles and garnish with fresh herbs like mint, basil, and banana blossom."
    },
    {
      "user_id": 6,
      "title": "Prahok Ktiss",
      "description": "A savory and creamy dip made from fermented fish paste, minced pork, and coconut milk, served with fresh vegetables.",
      "instructions": "Sauté minced pork in a pan until browned, then add prahok and cook until fragrant. Stir in coconut milk and sugar, and simmer until the mixture thickens. Serve the dip warm with a platter of fresh vegetables such as cucumbers, long beans, and cabbage."
    },
    {
      "user_id": 6,
      "title": "Kuy Teav",
      "description": "A popular Cambodian noodle soup made with pork or beef broth, rice noodles, and an assortment of toppings.",
      "instructions": "Simmer pork bones with garlic, onion, and star anise to make the broth. Cook the rice noodles according to package instructions. Serve the noodles in a bowl, topped with thinly sliced pork or beef, bean sprouts, and herbs. Pour the hot broth over the noodles and garnish with lime wedges and chili sauce."
    },
    {
      "user_id": 6,
      "title": "Cha Kdao",
      "description": "A spicy Cambodian stir-fry made with beef, holy basil, and a fragrant blend of spices.",
      "instructions": "Marinate the beef with fish sauce, soy sauce, and sugar. In a hot pan, stir-fry garlic, chili, and holy basil until fragrant. Add the marinated beef and cook until done. Serve the stir-fry hot with steamed rice."
    },
    {
      "user_id": 6,
      "title": "Samlor Machu Kreung",
      "description": "A sour Cambodian soup made with fish, lemongrass, and tamarind, balanced with the sweetness of pineapple.",
      "instructions": "Boil water with lemongrass, garlic, and kaffir lime leaves. Add fish pieces and cook until done. Stir in tamarind paste, pineapple chunks, and vegetables like tomatoes and okra. Season with fish sauce and sugar, then serve hot."
    },
    {
      "user_id": 6,
      "title": "Kari Sach Moan",
      "description": "A rich and aromatic Cambodian chicken curry made with coconut milk and a blend of spices.",
      "instructions": "Marinate chicken pieces with curry paste and lemongrass. In a pot, cook the marinated chicken with coconut milk, potatoes, and carrots until tender. Serve the curry hot with steamed rice or baguette."
    },
    {
      "user_id": 6,
      "title": "Ang Dtray-Meuk",
      "description": "Grilled squid marinated with a mixture of lime juice, garlic, and black pepper, served with a tangy dipping sauce.",
      "instructions": "Marinate cleaned squid in lime juice, garlic, and black pepper for 30 minutes. Grill the squid over medium heat until charred and cooked through. Serve with a dipping sauce made from lime juice, salt, and fresh chili."
    },
    {
      "user_id": 6,
      "title": "Num Pang Pâté",
      "description": "A Cambodian sandwich made with baguette, pâté, pickled vegetables, and fresh herbs.",
      "instructions": "Spread pâté on a sliced baguette. Fill the sandwich with pickled carrots and daikon, cucumber slices, cilantro, and chili. Optionally, add slices of grilled pork or chicken. Serve immediately."
    },
    {
      "user_id": 6,
      "title": "Samlor Kari",
      "description": "A Cambodian red curry soup with beef, eggplant, and green beans, flavored with lemongrass and kaffir lime leaves.",
      "instructions": "In a pot, cook red curry paste with coconut milk until fragrant. Add beef pieces and cook until browned. Stir in vegetables like eggplant and green beans, and simmer until tender. Serve the curry soup hot with steamed rice."
    },
    {
      "user_id": 6,
      "title": "Banh Chao",
      "description": "Cambodian savory crepes filled with pork, shrimp, and bean sprouts, served with fresh lettuce and herbs.",
      "instructions": "Make a batter from rice flour, turmeric, and coconut milk. Pour the batter into a hot pan to form a thin crepe. Fill the crepe with cooked pork, shrimp, and bean sprouts, then fold it in half. Serve the crepes with fresh lettuce, herbs, and dipping sauce."
    },
    {
      "user_id": 6,
      "title": "Lap Khmer",
      "description": "A refreshing Cambodian beef salad made with thinly sliced beef, lime juice, herbs, and roasted rice powder.",
      "instructions": "Thinly slice the beef and marinate it in lime juice, fish sauce, and sugar. Toss the marinated beef with fresh herbs like mint and basil, thinly sliced shallots, and roasted rice powder. Serve the salad chilled."
    },
    {
      "user_id": 6,
      "title": "Twa Ko",
      "description": "Cambodian pork sausages seasoned with garlic, lemongrass, and rice, often grilled or fried.",
      "instructions": "Mix ground pork with minced garlic, lemongrass, cooked rice, and spices. Stuff the mixture into sausage casings and let it ferment for a day. Grill or fry the sausages until cooked through and serve with fresh vegetables and rice."
    },
    {
      "user_id": 6,
      "title": "Cha Traop Dot",
      "description": "Stir-fried eggplant with minced pork and basil, a flavorful Cambodian dish.",
      "instructions": "Roast the eggplants until the skin is charred, then peel and slice them. Stir-fry garlic and minced pork in a pan, then add the eggplant and basil leaves. Season with fish sauce and sugar, and serve hot with steamed rice."
    },
    {
      "user_id": 6,
      "title": "Kralan",
      "description": "A traditional Cambodian snack made from sticky rice, black beans, and coconut milk, cooked in bamboo tubes.",
      "instructions": "Mix sticky rice with black beans and coconut milk. Stuff the mixture into bamboo tubes and seal them. Cook the bamboo tubes over an open flame until the rice is cooked and fragrant. Peel the bamboo and serve the sticky rice."
    },
    {
      "user_id": 6,
      "title": "Bai Cha",
      "description": "Cambodian fried rice made with leftover rice, eggs, vegetables, and a hint of fish sauce.",
      "instructions": "Heat oil in a wok and scramble the eggs. Add cooked rice, chopped vegetables, and a splash of fish sauce. Stir-fry until everything is heated through and well combined. Serve hot."
    },
    {
      "user_id": 6,
      "title": "Nom Plae Ai",
      "description": "Sweet rice dumplings filled with palm sugar and coconut, served with grated coconut.",
      "instructions": "Make a dough from glutinous rice flour and water. Fill the dough with a mixture of palm sugar and grated coconut, then form into small balls. Boil the dumplings until they float, then roll them in grated coconut and serve."
    },
    {
      "user_id": 6,
      "title": "Ang Pleah",
      "description": "Grilled beef skewers marinated with lemongrass, garlic, and turmeric, served with a spicy dipping sauce.",
      "instructions": "Marinate beef cubes in a mixture of lemongrass, garlic, turmeric, and fish sauce. Skewer the beef and grill until charred and cooked through. Serve with a dipping sauce made from lime juice, chili, and fish sauce."
    },
    {
      "user_id": 6,
      "title": "Kuy Teav Phnom Penh",
      "description": "A special variation of Cambodian noodle soup made with pork, seafood, and a flavorful broth.",
      "instructions": "Simmer pork bones with garlic and dried shrimp to make the broth. Cook the rice noodles according to package instructions. Serve the noodles in a bowl, topped with sliced pork, shrimp, and squid. Pour the hot broth over the noodles and garnish with fresh herbs and lime wedges."
    },
    {
      "user_id": 6,
      "title": "Nhoam Svay",
      "description": "A refreshing green mango salad with dried shrimp, peanuts, and a tangy dressing.",
      "instructions": "Julienne green mango and mix with dried shrimp, chopped peanuts, and fresh herbs. Toss with a dressing made from lime juice, fish sauce, sugar, and chili. Serve the salad chilled."
    },
    {
      "user_id": 6,
      "title": "Samlor Machu Youn",
      "description": "A sour Cambodian soup made with pork ribs, tomatoes, and pineapple, flavored with tamarind.",
      "instructions": "Simmer pork ribs with garlic and onions. Add tamarind paste, tomatoes, and pineapple chunks, and cook until the pork is tender. Season with fish sauce and sugar, and serve the soup hot."
    },
    {
      "user_id": 6,
      "title": "Amok Trey",
      "description": "A variation of amok made with fish and coconut milk, steamed in banana leaves.",
      "instructions": "Make a paste from lemongrass, turmeric, and garlic. Mix the paste with coconut milk and fish pieces. Spoon the mixture into banana leaf cups and steam until the fish is cooked. Serve hot."
    },
    {
      "user_id": 6,
      "title": "Samlor Kako",
      "description": "A traditional Cambodian soup made with mixed vegetables, fish, and toasted rice powder.",
      "instructions": "Toast the rice until golden brown and grind it into a powder. In a pot, sauté garlic and lemongrass until fragrant. Add fish pieces and cook until browned. Pour in water and bring to a boil, then add mixed vegetables and simmer until tender. Stir in the toasted rice powder to thicken the soup."
    },
    {
      "user_id": 6,
      "title": "Plea Trey",
      "description": "A Cambodian fish salad made with thinly sliced fish, lime juice, herbs, and roasted rice powder.",
      "instructions": "Thinly slice the fish and marinate it in lime juice, fish sauce, and sugar. Toss the marinated fish with fresh herbs, thinly sliced shallots, and roasted rice powder. Serve the salad chilled."
    },
    {
      "user_id": 6,
      "title": "Somlor Machu Kroeung",
      "description": "A traditional Cambodian sour soup made with lemongrass, tamarind, and mixed seafood.",
      "instructions": "Boil water with lemongrass, garlic, and kaffir lime leaves. Add mixed seafood and cook until done. Stir in tamarind paste, pineapple chunks, and vegetables. Season with fish sauce and sugar, then serve hot."
    },
    {
      "user_id": 6,
      "title": "Num Ansom Chek",
      "description": "Cambodian sticky rice cake filled with banana and coconut, wrapped in banana leaves and steamed.",
      "instructions": "Mix sticky rice with grated coconut and a pinch of salt. Place a portion of the rice mixture on a banana leaf, top with a piece of banana, and wrap tightly. Steam the rice cakes until the rice is cooked through. Serve warm."
    },
    {
      "user_id": 6,
      "title": "Cha Kroeung Sach Moan",
      "description": "A Cambodian stir-fry made with chicken, lemongrass, and spices, served with rice.",
      "instructions": "Marinate chicken pieces with a mixture of lemongrass, garlic, and turmeric. Stir-fry the marinated chicken in a hot pan until cooked through. Serve the stir-fry hot with steamed rice."
    },
    {
      "user_id": 6,
      "title": "Samlor Kari Sach Chrouk",
      "description": "A Cambodian red curry made with pork, eggplant, and green beans, flavored with lemongrass and kaffir lime leaves.",
      "instructions": "In a pot, cook red curry paste with coconut milk until fragrant. Add pork pieces and cook until browned. Stir in vegetables like eggplant and green beans, and simmer until tender. Serve the curry hot with steamed rice."
    }
]

export async function seed(knex: Knex): Promise<void> {
  await pool.raw('TRUNCATE TABLE recipe RESTART IDENTITY CASCADE');
  await knex('recipe').insert(recipeData);
}
