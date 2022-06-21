const itemsModel = [
    {
        name : 'Fries',
        category : 'Food',
        variations : [ {
            variationName : 'small',
            price : 20,
            cost : 15,
            stockAmount : 100
        },
        {
            variationName : 'medium',
            price : 40,
            cost : 30,
            stockAmount : 80
        },
        {
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
            variationName : 'small',
            price : 15,
            cost : 10,
            stockAmount : 200
        },
        {
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
            variationName : 'small',
            price : 15,
            cost : 10,
            stockAmount : 200
        } ]
    }
]

export default itemsModel;