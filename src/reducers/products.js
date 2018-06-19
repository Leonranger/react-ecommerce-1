
const productsReducerDefaultState = [
    {
        id: '12',
        title: 'Punisher Compression',
        type: 'Men’s Shirt',
        category: 'Shirts',
        brand: 'Under Armour',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        color: 'black',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        price: 32,
        amount: 1,
        images: [
            {url: '/images/UA30.jpg'},
            {url: '/images/UA31.jpg'},
            {url: '/images/UA32.jpg'},
            {url: '/images/UA33.jpg'}
        ]
    },{
        id: '13',
        title: 'UA Cage Shorts Navy',
        type: 'Men’s Short',
        category: 'Shorts',
        brand: 'Under Armour',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        color: 'Navy Blue',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        price: 33,
        amount: 1,
        images: [
            {url: '/images/UA20.jpg'},
            {url: '/images/UA21.jpg'},
            {url: '/images/UA22.jpg'},
            {url: '/images/UA23.jpg'}
        ]
    },{
        id: '14',
        title: 'UNDIZ Shoes',
        type: 'Sport Shoes',
        category: 'Shoes',
        brand: 'Undiz',
        sizes: ['38', '39', '40', '41', '42', '43'],
        color: 'black',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        price: 40,
        amount: 1,
        images: [
            {url: '/images/S10.jpg'},
            {url: '/images/S11.jpg'},
            {url: '/images/S12.jpg'},
            {url: '/images/S13.jpg'}
        ]
    },{
        id: '15',
        title: 'Nike Futura Icon',
        type: 'Men’s Shirt',
        category: 'Shirts',
        brand: 'Nike',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        color: 'black',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        price: 37,
        amount: 1,
        images: [
            {url: '/images/N10.jpg'},
            {url: '/images/N11.jpg'},
            {url: '/images/N12.jpg'},
        ]
    },{
        id: '16',
        title: 'UA Tech',
        type: 'Men’s Shirt',
        category: 'Shirts',
        brand: 'Under Armour',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        color: 'grey',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        price: 28,
        amount: 1,
        images: [
            {url: '/images/UA10.jpg'},
            {url: '/images/UA11.jpg'},
            {url: '/images/UA12.jpg'},
            {url: '/images/UA13.jpg'}
        ]
    },{
        id: '17',
        title: 'Manchester United',
        type: 'Men’s Shirt',
        category: 'Shirts',
        brand: 'Adidas',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        color: 'red',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        price: 45,
        amount: 1,
        images: [
            {url: '/images/A10.jpg'},
            {url: '/images/A11.jpg'}
        ]
    },{
        id: '18',
        title: 'Manchester Bag',
        type: 'Sport Bag',
        category: 'Bags',
        brand: 'Adidas',
        sizes: ['XL', 'XXL'],
        color: 'black',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        price: 35,
        amount: 1,
        images: [
            {url: '/images/A20.jpg'},
            {url: '/images/A21.jpg'}
        ]
    },{
        id: '19',
        title: 'Nike T90',
        type: 'Long Sleeve',
        category: 'Shirts',
        brand: 'Nike',
        sizes: ['L','XL', 'XXL'],
        color: 'Blue',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        price: 28,
        amount: 1,
        images: [
            {url: '/images/R10.jpg'},
            {url: '/images/R11.jpg'}
        ]
    },{
        id: '20',
        title: 'Adidas DRI',
        type: 'Men’s Shirt',
        category: 'Shirts',
        brand: 'Adidas',
        sizes: ['L','XL', 'XXL'],
        color: 'Navy Blue',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        price: 25,
        amount: 1,
        images: [
            {url: '/images/N20.jpg'},
            {url: '/images/N21.jpg'}
        ]
    },{
        id: '21',
        title: 'Nike RN21',
        type: 'Sport Shoes',
        category: 'Shoes',
        brand: 'Nike',
        sizes: ['38', '39', '40', '41', '42', '43'],
        color: 'black',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
        price: 68,
        amount: 1,
        images: [
            {url: '/images/S20.jpg'},
            {url: '/images/S21.jpg'},
            {url: '/images/S22.jpg'}
        ]
    }
];

const productsReducer = (state = productsReducerDefaultState) => (state);

export default productsReducer;