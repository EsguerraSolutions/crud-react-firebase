const itemsModel = [
    {
        name : 'Fries',
        category : 'Food',
        variations : [ {
            variationID : 0,
            variationName : 'small',
            price : 20,
            cost : 15,
            stockAmount : 100
        },
        {
            variationID : 1,
            variationName : 'medium',
            price : 40,
            cost : 30,
            stockAmount : 80
        },
        {
            variationID : 2,
            variationName : 'large',
            price : 60,
            cost : 55,
            stockAmount : 50
        } ]
    },
    {
        name : 'Iced Tea',
        category : 'Beverage',
        variations : [ {
            variationID : 0,
            variationName : 'small',
            price : 15,
            cost : 10,
            stockAmount : 200
        },
        {
            variationID : 1,
            variationName : 'medium',
            price : 30,
            cost : 25,
            stockAmount : 100
        } ]
    },
    {
        name : 'Sundae',
        category : 'Dessert',
        variations : [ {
            variationID : 0,
            variationName : 'small',
            price : 15,
            cost : 10,
            stockAmount : 200
        } ]
    }
]

export default itemsModel;