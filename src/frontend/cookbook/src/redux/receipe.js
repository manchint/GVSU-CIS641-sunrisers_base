
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