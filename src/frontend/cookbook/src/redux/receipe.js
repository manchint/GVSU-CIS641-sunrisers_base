
  import { createSlice } from '@reduxjs/toolkit'
  // Slice
  const slice = createSlice({
    name: 'receipe', //name of the reducer
    initialState: {
      list: [
        {id:1, calories:"231", description  :"Authentic Chicken Tikka Masala is usually made with yogurt marinated chicken,"+
        "skewered and chargrilled for incredible bbq flavours",
        imageOfTheRecepie:  "item6.jpeg",  ingredients  : "28 oz (800g) boneless and skinless chicken thighs cut into bite-sized pieces,"+ 
        "1 cup plain yogurt, 1/2 tablespoons minced garlic,1 tablespoon ginger,"+
        "2 teaspoons garam masala,1 teaspoon turmeric,"+
        "1 teaspoon ground cumin,1 teaspoon Kashmiri chili,"+
        "1 teaspoon of salt", name:  "Chicken Tikka Masala",
        procedureOfTheRecepie    : "Step 1: Wash and clean the chickenTo make Masala Chicken, first thoroughly wash the chicken under running water. "+
       " Now put it in some warm salted water and allow it to rest for 10 minutes and throw the water away and wash again.This helps to remove the smell of the chicken.,  "+
       "Step 2: Saute whole spices Add oil and ghee in pan and heat over medium flame. When the oil is hot enough, add bay leaves and both the cardamom and cinnamon."+
        "Saute for a minute and then add finely chopped onion into it.Cook till onions turn pink. Then add the ginger-garlic paste. Fry for a minute and then add chicken pieces in it."+
         "Cook chicken for 2-3 minutes until it turns white."+
         "Step 3: Add spices in frying chicken Quickly, add red chilli powder, coriander powder, turmeric, cumin powder, and salt to taste. Stir to mix all the ingredients well with the chicken. "+
          "Step 4: Cook for a minute and then add finely chopped tomatoes and green chillies (slit and halved). "+
          "Now reduce the flame and cook covered for 6-7 minutes and then uncovered till the chicken is browned.",
           publishedBy :  "Chef Mahesh Thakkilapati"},

           {id:2, calories:"32", description  :"Potato fry is easy enough to make flavorful, savory and delicious dish of sautéed potatoes a.k.a aloo. ",
           imageOfTheRecepie:  "item6.jpeg",  ingredients  : "4 Medium Boiled Potatoes,½ teaspoon Turmeric, 1 teaspoon Red Chili powder, adjust as per taste preference,1 tablespoon Ground Coriander"+
           "1 teaspoon Ground Cumin,½ teaspoon Ground Cinnamon, To taste Salt,2 tablespoons Oil,1 teaspoon Mustard seeds,1 teaspoon Cumin seeds, 10 ~ 12 Curry leaves, 1 Medium Onion, thinly sliced", 
           name:  "Potato Fry",
           procedureOfTheRecepie    : "Step 1: Boil potatoes either whole or chopped until fork tender. Drain, cool slightly, then peel and chop them. Set aside."+
          "Step 2: In a small bowl, combine turmeric, red chili powder, coriander, cumin, cinnamon and salt. Mix well and keep ready."+
          "Step 3: Heat oil in a large nonstick pan on medium heat. Add the mustard and cumin seeds and cook for 1~2 minutes or until the seeds start to splutter. Add the curry leaves, onions and cook for 3~4 minutes or until onions turn translucent."+
           "Step 4: Stir in the potato pieces and cook until they are crispy and browned, stirring occasionally, about 6~8 minutes. Add spice powder. Cook for 1~2 minutes, stirring constantly. Turn off the heat and serve hot with rice & dal!!",
           publishedBy :  "Chef Tejaswi"},
           {id:3, calories:"541", description  :"Lamb's fry is lamb offal served as food, including the liver, sweetbreads, heart, kidneys, and sometimes the brain and abdominal fat—or some combination thereof.",
           imageOfTheRecepie:  "item6.jpeg",  ingredients  : "2 cups (360g) thinly sliced onion,"+
          " 3 tablespoons vegetable oil,"+
         "  1 teaspoon minced garlic,"+
         "  1 teaspoon minced ginger,"+
         "  1 teaspoon minced green chile (serrano, Thai, or jalapeño),"+
         "  3 teaspoons ground coriander,"+
          " 1/2 teaspoon ground cumin,"+
          " 1/4 teaspoon ground red pepper (cayenne),"+
        "   1/2 teaspoon ground black pepper,"+
         "  1/16 teaspoon ground turmeric,"+
           "1/16 teaspoon ground cinnamon,"+
          " 1/16 teaspoon ground cloves,"+
        "   2 tablespoons water,"+
         "  2 pounds (900g) cubed leg of lamb trimmed of fat (about 4 cups (3/4-inch) cubes),"+
          " 1 teaspoon salt,"+
           "1/2 teaspoon fresh lemon juice", name:  "Lamb fry",
           procedureOfTheRecepie    : "Step 1: In a large nonstick frying pan over medium-high heat, fry onion in oil until edges are nicely browned. Add garlic, ginger, and green chile and stir for 1 minute."+           
          " Step 2: Mix ground spices with water to form a paste; add to onion mixture. Stir briefly until spices release their fragrance."+
          " Step 3: Add lamb and salt and fry over medium heat, stirring frequently util lamb is cooked through, 10 to 15 minutes. Taste for salt."+
           "Step 4: Stir in lemon juice and remove from heat.",
           publishedBy :  "Chef Ashutosh"},
           {id:4, calories:"543", description  :"Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, fish) or in some cases without any meat, and sometimes, in addition, eggs and potatoes.[1]",
            imageOfTheRecepie:  "item6.jpeg",  ingredients  : "2", name:  "Biryani",
            procedureOfTheRecepie    : "Step 1: Prepare the chicken curry."+
          "  Prepare the biryani masala (or use store-bought) and marinate the chicken.Cook the chicken curry. While it’s cooking over low heat, prepare the rice. "+
           " Step 2: Parboil the rice.Bring a pot of water to a boil and parboil the rice. Drain and set aside."+
           "step 3: Bring it all together for a final steam (‘dum‘).Layer half of the rice, all of the chicken, and then the remaining rice on top. Add the finishing touches."+
            "Step 4: Allow steam to develop, then lower the heat and let the flavors meld.",
            publishedBy :  "Chef Mahesh Thakkilapati"},
           {id:5, calories:"532", description  :"The most simple way to explain the difference between ice cream and a frozen dessert is that ice cream is made from milk/cream (dairy) and frozen desserts are made with vegetable oil",
            imageOfTheRecepie:  "item6.jpeg",  ingredients  : "1¾ cups heavy cream"+
          "1¼ cup whole milk"+
            "¾ cup sugar"+
            "⅛ teaspoon fine sea salt"+
            "1 tablespoon vanilla extract or 1 vanilla bean split in half lengthwise or"+
            "Optional: 2 cups of add-ins – soft brownies, cookies, and blondies work great", name:  "Frozen Ice Cream",
            procedureOfTheRecepie    : "Step 1: Pour 1 cup of the cream into a saucepan and add the sugar, salt. Scrape the seeds of the vanilla bean into the pot and then add the vanilla pod to the pot."+
            "Step 2: Warm the mixture over medium heat, just until the sugar dissolves. Remove from the heat and add the remaining cream, milk, and vanilla. Stir to combine and chill in the refrigerator."+
            "Step 3: When ready to churn, remove the vanilla pod, whisk mixture again and pour into ice cream maker. Churn according to the manufacturer’s instructions."+
            "Step 4: Transfer the finished ice cream to an airtight container and place in the freezer until ready to serve.",
            publishedBy :  "Chef Selina"},

            {id:6, calories:"300", description  :"French fries are served hot, either soft or crispy, and are generally eaten as part of lunch or dinner or by themselves as a snack, and they commonly appear on the menus of diners, fast food restaurants, pubs, and bars. They are often salted and may be served with ketchup, vinegar, mayonnaise, tomato sauce, or other local specialities. Fries can be topped more heavily,"+ 
"as in the dishes of poutine or chili cheese fries. French fries can be made from sweet potatoes instead of potatoes. "+
"A baked variant, oven fries, uses less or no oil.",
imageOfTheRecepie:"item6.jpeg",
ingredients: "Potatoes,Oil,Salt",
name:  "French fries",
procedureOfTheRecepie    : "Slice the potatoes 1/2 inch thick,Soak them cold in water for at least an hour or overnight,Rinse them twice with cold water and pat the completely dry,"+
"Heat oil to 300 degrees,Fry them in about 6 batches for 5-6 minutes,Don’t overcrowd them by placing too many in at a time they won’t be as crispy,"+
"Use a slotted spoon and place on a paper towel,Increase heat to 400 degrees,Fry in batches until golden brown about 5 minutes,"+
"Place them on paper towels and sprinkle immediately with salt,Serve with ketchup!",
publishedBy :  "Chef Satya Alaparthi"},


{id:7, calories:"600", description  :"Paneer butter masala also known as paneer makhani is a vegetarian dish from India which is also popular in the west."+
"The dish combines paneer (Indian cottage cheese) in a butter sauce quite similar to that of butter chicken."+
"A survey found that paneer butter masala was one of the top five foods ordered in India.",
imageOfTheRecepie:"item6.jpeg",
ingredients: "200 grams of paneer,500 grams of natural yoghurt,5 teaspoons of hing powder,1 teaspoon of ghee,1 teaspoon of cardamom,1 teaspoon of turmeric"+
",1 teaspoon of garam masala,1 teaspoon of chilli powder,1 teaspoon of ginger paste,5 teaspoon of garlic paste,1 teaspoon of cumin,1 teaspoon of lemon juice"+
",5 green or red chillies,1 onion,1 capsicum,2 tomatoes",
name:  "Paneer Butter Masala",
procedureOfTheRecepie    : "Fry paneer in ghee, or spray oil if desired and store in a bowl."+
"Dice and sauté onions with oil in garlic and ginger paste until golden brown."+
"Add diced capsicum and tomatoes."+
"In a separate pan mix ghee, hing, cardamom, turmeric, garam masala, chilli powder, lemon juice, and cumin."+
"Fry for 2 minutes, then add yoghurt."+
"Cook on medium heat for five minutes."+
"Add onions, diced capsicum, tomatoes, and paneer."+
"Cook on low heat for 15 minutes occasionally stirring."+
"Serve with rotis or naan and rice.",
publishedBy :  "Chef Keerti Amuktha"},



{id:8, calories:"89", description  :"This simple, delicious recipe is made without cream or milk. "+
"A mix of butter and flour thicken chicken stock to create a velvety soup without being too heavy."+
"The combination of crimini and white button mushrooms add earthy notes that work well with the rich broth.",
imageOfTheRecepie:"item6.jpeg",
ingredients: "3 tablespoons unsalted butter,2 garlic cloves,minced"+
",1 shallot,finely chopped"+
",4 ounces crimini mushrooms, chopped"+
",4 ounces white button mushrooms, chopped"+
",2 tablespoons all-purpose flour"+
",3 cups chicken stock"+
",¼ teaspoon fine sea salt, or to taste"+
",¼ teaspoon ground black pepper, or to taste"+
",Sliced sautéed mushrooms for garnish, optional"+
",Chopped parsley for garnish, optional",
name:  "Mushroom Soup",
procedureOfTheRecepie    : "Melt 2 tablespoons of the butter in a large pot such as a Dutch oven over medium-high heat. "+
"Add the garlic and shallot, cook for 1 minute, until they begin to soften. Add the mushrooms and cook for about 3 minutes," +
"until tender and browned. Transfer all the contents of the pot to a bowl.Add the remaining 1 tablespoon of butter to the pot."+ 
"Once melted, sprinkle in the flour and whisk it quickly into a paste. Reduce the heat to medium. Add the stock a little at a time," +
"whisking out the clumps between each addition.Increase the heat back to medium-high and allow the soup to simmer well for 3 minutes."+ 
"Add the mushrooms back to the pot and continue to cook for 2 more minutes. The stock will thicken slightly to be somewhat creamy."+
"Let cook for 3 to 4 minutes, then ladle into bowls. Garnish with mushrooms and parsley, if desired.",
publishedBy :  "Chef Marina Alaparthi"},



{id:9, calories:"50", description  :"Brinjal also known as aubergine or eggplant is a widely used vegetable in indian"+
"cuisine.It is a low calorie veggie that has some nutrients like iron and minerals.It is widely used to make curry,"+
"sambar,chutney,stir fry and bharta.",
imageOfTheRecepie:"item6.jpeg",
ingredients: "For the masala - 3 Tbsp coconut,grated"+
",Some coriander leaves,1 Tbsp gram flour,roasted (bhuna channa)"+
",1 tsp sambar powder,1 Tbsp chopped onion,1 Tbsp chopped tomato,2-3 Tbsp water"+
"For the curry - 2 Tbsp olive oil,1 tsp mustard seeds,7-8 curry leaves,"+
"1 tsp of fenugreek (methi),4 Tbsp chopped onions,1 Tbsp ginger-garlic paste,"+
"4 Tbsp chopped tomatoes,1 brinjal,cut into cubes,1/4 cup water.",
name:  "Brinjal Curry",
procedureOfTheRecepie    : "For the masala - In a grinder take 3 Tbsp grated coconut, some coriander laves, roasted gram flour, "+
"1 tsp sambar powder, 1 Tbsp chopped onion, 1 Tbsp chopped tomato,Add some water and grind."+
"For the Curry - In a pan take 2 Tbsp olive oil. Into that add 1 tsp mustard seeds, 7-8 curry leaves, 1 tsp of fenugreek (methi), "+
"4 Tbsp chopped onions, 1 Tbsp ginger galic paste and 4 Tbsp chopped tomaotes. saute.Add cubed brinjal. Saute. "+
"Add a little water in the pan for the brinjal to cook.Add 2 Tbsp of the prepared masala and water. "+
"Let it cook for 2-3 minutes then Serve it.",
publishedBy :  "Chef Surya Anantaneni"},



{id:10, calories:"35", description  :"California roll is an uramaki containing cucumber, crab or imitation crab, and avocado. Sometimes crab salad is substituted for the crab stick,"+ 
"and often the outer layer of rice in an inside-out roll (uramaki) is sprinkled with toasted sesame seeds or roe such as tobiko from flying fish."+
"As one of the most popular styles of sushi in Canada and the United States, the California roll has been influential in sushi's global popularity, "+
"and in inspiring sushi chefs around the world to create non-traditional fusion cuisine.",
imageOfTheRecepie:"item6.jpeg",
ingredients: "2 cups sushi rice, rinsed and drained"+
",2 cups water,1/4 cup rice vinegar,2 tablespoons sugar,1/2 teaspoon salt"+
",2 tablespoons sesame seeds, toasted,2 tablespoons black sesame seeds,Bamboo sushi mat"+
",8 nori sheets,1 small cucumber, seeded and julienned,3 ounces imitation crabmeat sticks, julienned"+
",1 medium ripe avocado, peeled and julienned,Optional-Reduced sodium soy sauce, prepared wasabi and pickled ginger slices.",
name:  "California Sushi Rolls",
procedureOfTheRecepie    : "In a large saucepan, combine rice and water; let stand for 30 minutes. "+
"Bring to a boil. Reduce heat to low; cover and simmer for 15-20 minutes or until water is absorbed and rice is tender. "+
"Remove from the heat. Let stand, covered, for 10 minutes."+
"Meanwhile, in small bowl, combine the vinegar, sugar and salt,stirring until sugar is dissolved."+
"Transfer rice to a large shallow bowl; drizzle with vinegar mixture. With a wooden paddle or spoon, "+
"stir rice with a slicing motion to cool slightly. Cover with a damp cloth to keep moist. "+
"(Rice mixture may be made up to 2 hours ahead and stored at room temperature, covered with a damp towel. Do not refrigerate.)"+
"Sprinkle toasted and black sesame seeds onto a plate; set aside. Place sushi mat on a work surface so mat rolls away from you; line with plastic wrap."+
"Place 3/4 cup rice on plastic. With moistened fingers, press rice into an 8-in. square. Top with 1 nori sheet."+
"Arrange a small amount of cucumber, crab and avocado about 1-1/2 in. from bottom edge of nori sheet. Roll up rice mixture over filling, "+
"using the bamboo mat to lift and compress the mixture while rolling; remove plastic wrap as you roll."+
"Remove mat; roll sushi rolls in sesame seeds. Cover with plastic wrap. "+
"Repeat with remaining ingredients to make 8 rolls. Cut each into 8 pieces. Serve with soy sauce, wasabi and ginger slices if desired.",
publishedBy :  "Chef Rajesh Akula"}
      ],
    },
    reducers: {
      setReceipeList: (state, action) => {
        state.list = action.payload;  
      },
      addReceipe : (state, action) => {
        state.list.push(action.payload);
      }
    },
  });
  
  // Actions
  export const { setReceipeList, addReceipe } = slice.actions

  export default slice.reducer;