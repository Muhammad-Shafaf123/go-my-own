import AMNICON from "../../Assets/image/amazon-png-logo-vector-6701.png"
import AMNICONSMALL from "../../Assets/image/amazon-png-logo-vector-6706.png"
import FLIPICON from "../../Assets/image/flipkart-logo-39906.png"
import FLIPICONSMALL from "../../Assets/image/flipkart-logo-39903.png"
import AJIOICON from "../../Assets/image/ajio-seeklogo.com.svg"
import AJIOICONSMALL from "../../Assets/image/AJIO.png"
import MYNTRAICONSMALL from "../../Assets/image/logo-myntra-41466.png"

import FLIP1 from "../../Assets/image/nike-flikpart-red.webp"
import FLIP2 from "../../Assets/image/5-running-nike-flip.webp"
import FLIP3 from "../../Assets/image/3-running-gyn-nike.webp"
import FLIP4 from "../../Assets/image/debut-premium-nike-flip.webp"
import FLIP5 from "../../Assets/image/basket-ball-shoes-nike-flip.webp"
import FLIP6 from "../../Assets/image/football-shoe-nike-flip.webp"
import FLIP7 from "../../Assets/image/Air-max-runnign-nike-flip.webp"


import AJIO1 from "../../Assets/image/ajio-red-nike.webp"
import PROT1 from "../../Assets/image/wengang-zhai-_fOL6ebfECQ-unsplash.jpg"



const pripareListModelData = () => {
    const sampleProduct = [
        {
            platform : "Amazon",
            platFormLogo : AMNICONSMALL,
            product : {
                name : "Nike Revolution 6 NN Running Shoes",
                salePrice : "2,993",
                image : FLIP1,
            }
        },
        {
            platform : "Flipkart",
            platFormLogo : FLIPICONSMALL,
            product : {
                name : "NK QUEST 5 Running Shoes For Men  (Black)",
                salePrice : "5,665",
                image : FLIP2,
            }
        },
        {
            platform : "Amazon",
            platFormLogo : AMNICONSMALL,
            product : {
                name : "City Trainer 3 Training & Gym Shoes For Men  (Grey)",
                salePrice : "4,495",
                image : FLIP3,
            }
        },
        {
            platform : "Amazon",
            platFormLogo : AMNICONSMALL,
            product : {
                name : "Waffle Debut Premium Running Shoes For Men  (Black)",
                salePrice : "4,217",
                image : FLIP4,
            }
        },
        {
            platform : "Flipkart",
            platFormLogo : FLIPICONSMALL,
            product : {
                name : "Basketball Shoes For Men  (Black)",
                salePrice : "5,695",
                image : FLIP5,
            }
        },
        {
            platform : "Flipkart",
            platFormLogo : FLIPICONSMALL,
            product : {
                name : "Zoom Mercurial Vapor 15 Academy IC Indoor Court Football Shoes For Men  (Red)",
                salePrice : "6,795",
                image : FLIP6,
            }
        },
        {
            platform : "Amazon",
            platFormLogo : AMNICONSMALL,
            product : {
                name : "Air Max 270 Running Shoes For Men  (Black)",
                salePrice : "10,327",
                image : FLIP7,
            }
        },
        {
            platform : "Flipkart",
            platFormLogo : FLIPICONSMALL,
            product : {
                name : "SOFTRIDE RIFT TECH Walking Shoes For Men  (Black)",
                salePrice : "3,119",
                image : FLIP3,
            }
        },
        
    ]

    return sampleProduct
}

const pripareGridModelData =  () =>{

    const sampleProduct = [
        {
          platform : "Amazon",
          platFormLogo : AMNICON,
          product : {
            name : "Nike Revolution 6 NN Running Shoes",
            regularPrice : "3,695",
            salePrice : "2,993",
            offerPercentage : "19",
            image : PROT1,
            size : [7, 8, 9, 10, 11],
            detailsAndReview : [
              "Lorem ipsum dolor sit, amet consectetur adipisicinciendis. Sapiente laborum nemo",
              "dolorum quaerat iste, hic incidunt nam aspernatur labore ex soluta?",
              "g elit. Expedita ducimus nulla sapiente, magnam doloremque debitis esse rei8",
              "Lorem ipsum dolor sit amet, consectetur",
            ]
          }
        },
        {
          platform : "Flipkart",
          platFormLogo : FLIPICON,
          product : {
            name : "Renew Ride 3 Running Shoes For Men  (Black)",
            regularPrice : "6,295",
            salePrice : "4,644",
            offerPercentage : "26",
            image : FLIP1,
            size : [6, 7, 8, 9, 10, 11, 12],
            detailsAndReview : [
              "Special PriceGet extra 10% off on 1 item(s) (price inclusive of cashback/coupon)",
              "Bank Offer10% Instant Discount on ICICI Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above",
              "Bank Offer10% Instant Discount on Axis Bank Credit Card, up to ₹1250, on orders of ₹5,000 and above",
              "Lorem ipsum dolor sit amet, consectetur",
            ]
          }
        },
        {
          platform : "Ajio",
          platFormLogo : AJIOICON,
          product : {
            name : "NIKE Revolution 6 NN Running Shoes",
            regularPrice : "3,695",
            salePrice : "3,030",
            offerPercentage : "18",
            image : AJIO1,
            size : [6, 7, 8, 9, 10, 11],
            detailsAndReview : [
              "Wipe with a clean, dry cloth when needed",
              "Synthetic rubber sole",
              "Lace Fastening",
              "6-month warranty against manufacturing defects (not valid on more than 20% discounted products)",
              "Mesh upper",
              "Product Code: 469034006001",
            ]
          }
        },
      ]

    return sampleProduct
}

const pripareHorModelData = () => {
    const sampleProduct = [
        {
            platform : "Amazon",
            platFormLogo : AMNICONSMALL,
            products : [
                
                {
                    name : "NK QUEST 5 Running Shoes For Men  (Black)",
                    salePrice : "5,665",
                    image : FLIP2,
                },
                
                
                {
                    name : "Basketball Shoes For Men  (Black)",
                    salePrice : "5,695",
                    image : FLIP5,
                },
                {   
                    name : "Zoom Mercurial Vapor 15 Academy IC Indoor Court Football Shoes For Men  (Red)",
                    salePrice : "6,795",
                    image : FLIP6,
                },
                {
                    name : "Nike Revolution 6 NN Running Shoes",
                    salePrice : "2,993",
                    image : FLIP1,
                },
                {
                    
                    name : "Air Max 270 Running Shoes For Men  (Black)",
                    salePrice : "10,327",
                    image : FLIP7,
                },
                {
                    name : "SOFTRIDE RIFT TECH Walking Shoes For Men  (Black)",
                    salePrice : "3,119",
                    image : FLIP3,
                },
                {
                    name : "City Trainer 3 Training & Gym Shoes For Men  (Grey)",
                    salePrice : "4,495",
                    image : FLIP3,
                },
                {
                    name : "Waffle Debut Premium Running Shoes For Men  (Black)",
                    salePrice : "4,217",
                    image : FLIP4,
                },
            ]
        },
        {
            platform : "Flipkart",
            platFormLogo : FLIPICONSMALL,
            products : [
                {
                    name : "Nike Revolution 6 NN Running Shoes",
                    salePrice : "2,993",
                    image : FLIP1,
                },
                {
                    name : "NK QUEST 5 Running Shoes For Men  (Black)",
                    salePrice : "5,665",
                    image : FLIP2,
                },
                {
                    name : "City Trainer 3 Training & Gym Shoes For Men  (Grey)",
                    salePrice : "4,495",
                    image : FLIP3,
                },
                
                {
                    name : "Basketball Shoes For Men  (Black)",
                    salePrice : "5,695",
                    image : FLIP5,
                },
                {
                    
                    name : "Air Max 270 Running Shoes For Men  (Black)",
                    salePrice : "10,327",
                    image : FLIP7,
                },
                {
                    name : "SOFTRIDE RIFT TECH Walking Shoes For Men  (Black)",
                    salePrice : "3,119",
                    image : FLIP3,
                },
                {
                    name : "Waffle Debut Premium Running Shoes For Men  (Black)",
                    salePrice : "4,217",
                    image : FLIP4,
                },
                {   
                    name : "Zoom Mercurial Vapor 15 Academy IC Indoor Court Football Shoes For Men  (Red)",
                    salePrice : "6,795",
                    image : FLIP6,
                },
            ]
        },
        {
            platform : "Myntra",
            platFormLogo : MYNTRAICONSMALL,
            products : [
                {
                    name : "Nike Revolution 6 NN Running Shoes",
                    salePrice : "2,993",
                    image : FLIP1,
                },
                {
                    name : "NK QUEST 5 Running Shoes For Men  (Black)",
                    salePrice : "5,665",
                    image : FLIP2,
                },
                {
                    name : "City Trainer 3 Training & Gym Shoes For Men  (Grey)",
                    salePrice : "4,495",
                    image : FLIP3,
                },
                {
                    name : "Waffle Debut Premium Running Shoes For Men  (Black)",
                    salePrice : "4,217",
                    image : FLIP4,
                },
                {
                    name : "Basketball Shoes For Men  (Black)",
                    salePrice : "5,695",
                    image : FLIP5,
                },
                {   
                    name : "Zoom Mercurial Vapor 15 Academy IC Indoor Court Football Shoes For Men  (Red)",
                    salePrice : "6,795",
                    image : FLIP6,
                },
                {
                    
                    name : "Air Max 270 Running Shoes For Men  (Black)",
                    salePrice : "10,327",
                    image : FLIP7,
                },
                {
                    name : "SOFTRIDE RIFT TECH Walking Shoes For Men  (Black)",
                    salePrice : "3,119",
                    image : FLIP3,
                },
            ]
        },
        {
            platform : "AJIO",
            platFormLogo : AJIOICONSMALL,
            products : [
                {
                    
                    name : "Air Max 270 Running Shoes For Men  (Black)",
                    salePrice : "10,327",
                    image : FLIP7,
                },
                {
                    name : "SOFTRIDE RIFT TECH Walking Shoes For Men  (Black)",
                    salePrice : "3,119",
                    image : FLIP3,
                },
                {
                    name : "Nike Revolution 6 NN Running Shoes",
                    salePrice : "2,993",
                    image : FLIP1,
                },
                {
                    name : "NK QUEST 5 Running Shoes For Men  (Black)",
                    salePrice : "5,665",
                    image : FLIP2,
                },
                {
                    name : "Waffle Debut Premium Running Shoes For Men  (Black)",
                    salePrice : "4,217",
                    image : FLIP4,
                },
                {
                    name : "Basketball Shoes For Men  (Black)",
                    salePrice : "5,695",
                    image : FLIP5,
                },
                {   
                    name : "Zoom Mercurial Vapor 15 Academy IC Indoor Court Football Shoes For Men  (Red)",
                    salePrice : "6,795",
                    image : FLIP6,
                },
                {
                    name : "City Trainer 3 Training & Gym Shoes For Men  (Grey)",
                    salePrice : "4,495",
                    image : FLIP3,
                },
            ]
        },
    ]
    return sampleProduct
}

export function pripareModelData(type)  {
    switch (type) {
        case "list":
            return pripareListModelData()
        case "grid":
            return pripareGridModelData()
        case "hor":
            return pripareHorModelData()
        default:
            return []
    }
} 