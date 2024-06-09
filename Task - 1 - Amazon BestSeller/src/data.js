const book_data = [
    {
        "id": 1,
        "title" : "Lucifer was Innocent",
        "author": "Tirth Raj Parsana",
        "src": "https://images-eu.ssl-images-amazon.com/images/I/619U3eefi7L._AC_UL900_SR900,600_.jpg",
        "price" : "$11.99"
    },
    {
        "id" : 2,
        "title" : "Atomic Habits",
        "author": "James Clear",
        "src": "https://images-eu.ssl-images-amazon.com/images/I/81Ls+SBCLiL._AC_UL900_SR900,600_.jpg",
        "price" : "$13.79"
    },
    {
        "id" : 3,
        "title" : "The Psychology of Money",
        "author": "Morgan Housel",
        "src": "https://images-eu.ssl-images-amazon.com/images/I/71XEsXS5RlL._AC_UL900_SR900,600_.jpg",
        "price" : "$10.98"
    },
    {
        "id" : 4,
        "title" : "The Power of Your Subconcious Mind",
        "author": "Joseph Murphy",
        "src": "https://images-eu.ssl-images-amazon.com/images/I/71sBtM3Yi5L._AC_UL900_SR900,600_.jpg",
        "price" : "$13.39"
    },
    {
        "id" : 5,
        "title" : "Ikigai",
        "author": "Héctor García and Francesc Miralles ",
        "src": "https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL900_SR900,600_.jpg",
        "price" : "$11.08"
    },
    {
        "id" : 6,
        "title" : "Don't Believe in Everything You Think",
        "author": "Joseph Nguyen",
        "src": "https://images-eu.ssl-images-amazon.com/images/I/715qi-cIbML._AC_UL900_SR900,600_.jpg",
        "price" : "$15.31"
    },
    {
        "id" : 7,
        "title" : "Dad, I Want to Hear Your Story",
        "author": "Jeffrey Mason",
        "src": "https://images-na.ssl-images-amazon.com/images/I/51ZvZFJOsrL._AC_UL900_SR900,600_.jpg",
        "price" : "$11.95"
    },
    {
        "id" : 8,
        "title" : "The Housemaid",
        "author": "Freida McFadden",
        "src": "https://m.media-amazon.com/images/I/51sx4eLa6NL._SY300_.jpg",
        "price" : "$6.93"
    },
    {
        "id" : 9,
        "title" : "The Housemaid's Secret",
        "author": "Freida McFadden",
        "src": "https://m.media-amazon.com/images/I/516-Hmc+ZQL._SY300_.jpg",
        "price" : "$7.68"
    },
    {
        "id" : 10,
        "title" : "The Housemaid Is Watching",
        "author": "Freida McFadden",
        "src": "https://m.media-amazon.com/images/I/51cmL8dc9zL._SY300_.jpg",
        "price" : "$12.63"
    },
    {
        "id" : 11,
        "title" : "The Anxious Generation",
        "author": "Jonathan Haidt",
        "src": "https://images-na.ssl-images-amazon.com/images/I/81XP4hEXDXL._AC_UL900_SR900,600_.jpg",
        "price" : "$19.89"
    },
    {
        "id" : 12,
        "title" : "The 48 laws of Power",
        "author": "Robert Greene",
        "src": "https://images-na.ssl-images-amazon.com/images/I/611X8GI7hpL._AC_UL900_SR900,600_.jpg",
        "price" : "$14.55"
    },
    {
        "id" : 13,
        "title" : "The Demon of Unrest",
        "author": "Erik Larson",
        "src": "https://images-na.ssl-images-amazon.com/images/I/81erI7sNo5L._AC_UL900_SR900,600_.jpg",
        "price" : "$18.79"
    },
    {
        "id" : 14,
        "title" : "A Court of Thorns and Roses",
        "author": "Sarah J. Maas",
        "src": "https://images-na.ssl-images-amazon.com/images/I/81RrEEMiOCL._AC_UL900_SR900,600_.jpg",
        "price" : "$10.37"
    },
    {
        "id" : 15,
        "title" : "Camino Ghosts: A Novel",
        "author": "John Grisham",
        "src": "https://images-na.ssl-images-amazon.com/images/I/81TKwy4cD5L._AC_UL900_SR900,600_.jpg",
        "price" : "$20.96"
    },
    {
        "id" : 16,
        "title" : "Just for the Summer",
        "author": "Abby Jimenez",
        "src": "https://images-na.ssl-images-amazon.com/images/I/81tVBUv75vL._AC_UL300_SR300,200_.jpg",
        "price" : "$13.38"
    },
    {
        "id" : 17,
        "title" : "It Ends with Us: A Novel",
        "author": "Colleen Hoover",
        "src": "https://images-na.ssl-images-amazon.com/images/I/813aV273-rL._AC_UL300_SR300,200_.jpg",
        "price" : "$10.98"
    },
    {
        "id" : 18,
        "title" : "A Court of Mist and Fury",
        "author": "Sarah J. Maas",
        "src": "https://images-na.ssl-images-amazon.com/images/I/812XbpMDovL._AC_UL300_SR300,200_.jpg",
        "price" : "$12.82"
    },
    {
        "id" : 19,
        "title" : "The Nightingale: A Novel",
        "author": "Kristin Hannah",
        "src": "https://images-na.ssl-images-amazon.com/images/I/81OkWjcf4WL._AC_UL300_SR300,200_.jpg",
        "price" : "$9.40"
    },
    {
        "id" : 20,
        "title" : "Reckless (The Powerless Trilogy)",
        "author": "Lauren Roberts",
        "src": "https://images-na.ssl-images-amazon.com/images/I/81q6ecxcZUL._AC_UL900_SR900,600_.jpg",
        "price": "$14.97"
    },
    {
        "id" : 21,
        "title" : "Powerless (The Powerless Trilogy)",
        "author": "Lauren Roberts",
        "src": "https://images-na.ssl-images-amazon.com/images/I/81XbnexD2QL._AC_UL900_SR900,600_.jpg",
        "price": "$17.90"
    },
    {
        "id" : 22,
        "title" : "Never Lie",
        "author": "Freida McFadden",
        "src": "https://images-na.ssl-images-amazon.com/images/I/81PIs7jhL0L._AC_UL600_SR600,400_.jpg",
        "price": "$8.99"
    },
    {
        "id" : 23,
        "title" : "The Lost Bookshop",
        "author": "Evie Woods",
        "src": "https://images-na.ssl-images-amazon.com/images/I/91Kd+kTooAL._AC_UL900_SR900,600_.jpg",
        "price": "$13.46"
    },
    {
        "id" : 24,
        "title" : "This Summer Will Be Different",
        "author": "Carley Fortune",
        "src": "https://images-na.ssl-images-amazon.com/images/I/81YeL0xZN5L._AC_UL600_SR600,400_.jpg",
        "price": "$13.82"
    },
    {
        "id" : 25,
        "title" : "Entrances and Exits",
        "author": "Michael Richards",
        "src": "https://images-na.ssl-images-amazon.com/images/I/718SjzpoXQL._AC_UL600_SR600,400_.jpg",
        "price": "$25.85"
    }
]

export default book_data;
