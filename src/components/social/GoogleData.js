export const getGoogleArticle = (title, img, alt) => {
    return {
        "@context": "http://schema.org/",
            "@type": "Article",
            "name": title,
            "headline": "aricle headline",
            "author": "Elaine Smith",
            "publisher": {
                "@type": "Organization",
                "email": "test@gmail.com",
                "name": "IoH",
                "url": img,
                "logo": {
                    "@type": "ImageObject",
                    "thumbnail": img,
                    "url": img
                }
            },
            "mainEntityOfPage":{
                "@type": "CreativeWork",
                "name": "my creative vid",
                "about": "solving resident evil armor key puzzle"
            },
            "image": img,
            "thumbnailUrl": img,
            "description": "A classic apple pie.",
            "about": "How people solve problems",
            "articleSection":"People are a mystery. We break mysteries down by analyzing their simpeles examples. So, we're analyzing video game puzzles",
            "timeRequired": "P30M",
            "dateModified": "20181009T050200Z",
            "datePublished": "20181009T050200Z"
    }
  }

  export const getGoogleRestaurant = () => {
      return {
        "@context":"http://schema.org",
        "@type":"Menu",
        "name": "Our Menu",
        "url": "https://goofy-archimedes-763914.netlify.com/",
        "mainEntityOfPage": "https://goofy-archimedes-763914.netlify.com/",
        "inLanguage":"English",
        "offers": {
         "@type": "Offer",
         "availabilityStarts": "T17:00",
         "availabilityEnds": "T23:00"
        },
       "hasMenuSection": [
        {
         "@type": "MenuSection",
         "name": "Appetizers",
         "hasMenuItem": [
         {
          "@type": "MenuItem",
          "name": "Fried Eggplant",
          "description": "Served with Italian red gravy.",
          "offers": {
     "@type": "Offer",
                      "price": "7.95",
                      "priceCurrency": "USD"
          }
         },
         {
          "@type": "MenuItem",
          "name": "Fried Calamari",
          "description": "Served with Italian red gravy or honey mustard.",
             "image": "https://goofy-archimedes-763914.netlify.com/static/scandic-c90942cfae912bb38f91d18b04b9ba6d-566f0.jpg",
          "suitableForDiet": "http://schema.org/GlutenFreeDiet",
          "nutrition": {
        "@type": "NutritionInformation",
                     "calories": "573 calories",
                      "fatContent": "25 grams",
                      "carbohydrateContent": "26 grams",
                      "proteinContent": "61 grams"
                    },
          "offers": {
        "@type": "Offer",
                      "price": "7.95",
                      "priceCurrency": "USD"
        }
         }
         ]
        },
        {
         "@type": "MenuSection",
         "name": "Soups",
         "hasMenuItem": [
         {
          "@type": "MenuItem",
          "name": "Lobster Bisque",
          "offers": [
          {
           "@type": "Offer",
           "price": "6.75",
           "priceCurrency": "USD",
           "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "name": "Cup"
            }
          },
          {
           "@type": "Offer",
           "price": "9.95",
           "priceCurrency": "USD",
           "eligibleQuantity" : {
            "@type": "QuantitativeValue",
            "name": "Bowl"
            }
          }
          ]
         },
         {
          "@type": "MenuItem",
          "name": "Creole Seafood Gumbo",
          "offers": [
          {
           "@type": "Offer",
           "price": "6.75",
           "priceCurrency": "USD",
           "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "name": "Cup"
            }
          },
          {
           "@type": "Offer", 
           "name": "Bowl",
           "price": "9.95",
           "priceCurrency": "USD",
           "eligibleQuantity" : {
            "@type": "QuantitativeValue",
            "name": "Bowl"
            }
          }
          ]
         }
         ]
        },
        {
         "@type": "MenuSection",
         "name": "Pastas",
         "description": "Entrées served with dinner salad or a cup of soup of the day.",
         "hasMenuItem": [
         {
          "@type": "MenuItem",
          "name": "Veal Parmigiana",
          "description": "Tender cuts of paneed veal crowned with golden fried eggplant, Italian red gravy, mozzarella, and parmesan; served with spaghetti.",
          "offers": {
           "@type": "Offer",
           "price": "17.95",
           "priceCurrency": "USD"
          }
         },
         {
          "@type": "MenuItem",
          "name": "Eggplant Parmigiana",
          "description": "Pan fried eggplant layered and topped with Italian red gravy, mozzarella, and parmesan baked until bubbly; served with spaghetti.",
          "offers": {
           "@type": "Offer",
           "price": "14.95",
           "priceCurrency": "USD"
          }
         }
         ]
        }
        ]
     }
  }
// export const getGoogleRestaurant = () => {
//     return {
//         "@context": "http://schema.org/",
//         "@type": "Restaurant",
//         "acceptsReservations": "true",
//         "servesCuisine": "Indian",
//         "name": "Gekko",
//         "address": "1 infy loop, Mercedes Park, Vic",
//         "priceRange": "$$",
//         "telephone": "454 5454 454",
//         "image": "https://goofy-archimedes-763914.netlify.com/static/scandic-c90942cfae912bb38f91d18b04b9ba6d-566f0.jpg",
//         "hasMenu": {
//             "@type": "Menu",
//             "name": "Dinner", 
//             "hasMenuSection": [
//             {
//              "@type": "MenuSection",
//              "name": "Appetizers",
//              "hasMenuItem": [
//                 {
//                 "@type": "MenuItem",
//                 "name": "Fried Eggplant",
//                 "description": "Served with Italian red gravy.",
//                 "offers": {
//                     "@type": "Offer",
//                                 "price": "7.95",
//                                 "priceCurrency": "USD"
//                     }
//                 },
//                 {
//                 "@type": "MenuItem",
//                 "name": "Fried Calamari",
//                 "description": "Served with Italian red gravy or honey mustard.",
//                     "image": "https://goofy-archimedes-763914.netlify.com/static/scandic-c90942cfae912bb38f91d18b04b9ba6d-566f0.jpg",
//                 "suitableForDiet": "http://schema.org/GlutenFreeDiet",
//                 "nutrition": {"@type": "NutritionInformation",
//                             "calories": "573 calories",
//                             "fatContent": "25 grams",
//                             "carbohydrateContent": "26 grams",
//                             "proteinContent": "61 grams"
//                             },
//                     "offers": {
//                         "@type": "Offer",
//                             "price": "7.95",
//                             "priceCurrency": "USD"
//                         }
//                 }
//              ]
//             },
//             {
//              "@type": "MenuSection",
//              "name": "Soups",
//              "hasMenuItem": [
//              {
//               "@type": "MenuItem",
//               "name": "Lobster Bisque",
//               "offers": [
//               {
//                "@type": "Offer",
//                "price": "6.75",
//                "priceCurrency": "USD",
//                "eligibleQuantity": {
//                 "@type": "QuantitativeValue",
//                 "name": "Cup"
//                 }
//               },
//               {
//                "@type": "Offer",
//                "price": "9.95",
//                "priceCurrency": "USD",
//                "eligibleQuantity" : {
//                 "@type": "QuantitativeValue",
//                 "name": "Bowl"
//                 }
//               }
//               ]
//              },
//              {
//               "@type": "MenuItem",
//               "name": "Creole Seafood Gumbo",
//               "offers": [
//               {
//                "@type": "Offer",
//                "price": "6.75",
//                "priceCurrency": "USD",
//                "eligibleQuantity": {
//                 "@type": "QuantitativeValue",
//                 "name": "Cup"
//                 }
//               },
//               {
//                "@type": "Offer", 
//                "name": "Bowl",
//                "price": "9.95",
//                "priceCurrency": "USD",
//                "eligibleQuantity" : {
//                 "@type": "QuantitativeValue",
//                 "name": "Bowl"
//                 }
//               }
//               ]
//              }
//              ]
//             }
//         ]
        
//     }
    
// }}