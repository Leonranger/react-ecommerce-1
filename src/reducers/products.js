
const productsReducerDefaultState = [
    {
        id: '12',
        name: 'D-Jack',
        type: 'shirt',
        brand: 'nike',
        gender: 'female',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        color: 'black',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        price: 26,
        amount: 1,
        images: [
            {url: '/images/ASOS11.jpg'},
            {url: '/images/ASOS12.jpg'},
            {url: '/images/ASOS13.jpg'},
            {url: '/images/ASOS14.jpg'}
        ]
    },{
        id: '13',
        name: 'Dolly Op',
        type: 'shirt',
        brand: 'adidas',
        gender: 'female',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        color: 'red',
        description: '',
        price: 23,
        amount: 1,
        images: [
            {url: '/images/ASOS21.jpg'},
            {url: '/images/ASOS22.jpg'},
            {url: '/images/ASOS23.jpg'},
            {url: '/images/ASOS24.jpg'}
        ]
    },{
        id: '14',
        name: 'Ambella',
        type: 'shorts',
        brand: 'puma',
        gender: 'female',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        color: 'black',
        description: '',
        price: 25,
        amount: 1,
        images: [
            {url: '/images/ASOS31.jpg'},
            {url: '/images/ASOS32.jpg'},
            {url: '/images/ASOS33.jpg'},
            {url: '/images/ASOS34.jpg'}
        ]
    },{
        id: '15',
        name: 'UNDIZ ROYALTIZ GEL BRA',
        type: 'shorts',
        brand: 'puma',
        gender: 'female',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        color: 'black',
        description: '',
        price: 25,
        amount: 1,
        images: [
            {url: '/images/ASOS41.jpg'},
            {url: '/images/ASOS42.jpg'},
            {url: '/images/ASOS43.jpg'},
            {url: '/images/ASOS44.jpg'}
        ]
    }
];

const productsReducer = (state = productsReducerDefaultState) => (state);

export default productsReducer;