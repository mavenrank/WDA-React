const book_data = [
    {
        id: 1,
        title: "Lucifer was Innocent",
        author: "Tirth Raj Parsana",
        src: "https://images-eu.ssl-images-amazon.com/images/I/619U3eefi7L._AC_UL900_SR900,600_.jpg",
        price: "$11.99",
        description:
            "An exploration of the misunderstood character of Lucifer, delving into ancient texts and modern interpretations to uncover a different perspective on the so-called fallen angel.",
        about_the_author:
            "Tirth Raj Parsana is an author and researcher specializing in mythology and religious studies, with a particular interest in reinterpreting traditional narratives.",
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        src: "https://images-eu.ssl-images-amazon.com/images/I/81Ls+SBCLiL._AC_UL900_SR900,600_.jpg",
        price: "$13.79",
        description:
            "A practical guide to breaking bad habits and adopting good ones, using proven strategies and scientific research to make lasting changes in behavior.",
        about_the_author:
            "James Clear is a writer and speaker focused on habits, decision making, and continuous improvement. He is known for his ability to distill complex topics into simple behaviors that can be easily applied.",
    },
    {
        id: 3,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        src: "https://images-eu.ssl-images-amazon.com/images/I/71XEsXS5RlL._AC_UL900_SR900,600_.jpg",
        price: "$10.98",
        description:
            "A collection of essays that explore the unique behaviors and mindsets that shape our financial decisions and the impact of psychology on money management.",
        about_the_author:
            "Morgan Housel is a partner at the Collaborative Fund and a former columnist at The Motley Fool and The Wall Street Journal. His work focuses on behavioral finance and history.",
    },
    {
        id: 4,
        title: "The Power of Your Subconscious Mind",
        author: "Joseph Murphy",
        src: "https://images-eu.ssl-images-amazon.com/images/I/71sBtM3Yi5L._AC_UL900_SR900,600_.jpg",
        price: "$13.39",
        description:
            "A classic self-help book that explains how the subconscious mind influences every aspect of life and provides techniques to harness its power for achieving success and happiness.",
        about_the_author:
            "Joseph Murphy was an Irish-born American author and New Thought minister, known for his pioneering work in the fields of positive thinking and self-improvement.",
    },
    {
        id: 5,
        title: "Ikigai",
        author: "Héctor García and Francesc Miralles",
        src: "https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL900_SR900,600_.jpg",
        price: "$11.08",
        description:
            "An exploration of the Japanese concept of Ikigai, or 'reason for being,' and how it contributes to happiness and longevity, featuring insights from the residents of Okinawa.",
        about_the_author:
            "Héctor García and Francesc Miralles are both Spanish authors who have extensively studied Japanese culture and have co-authored several books on the topic.",
    },
    {
        id: 6,
        title: "Don't Believe in Everything You Think",
        author: "Joseph Nguyen",
        src: "https://images-eu.ssl-images-amazon.com/images/I/715qi-cIbML._AC_UL900_SR900,600_.jpg",
        price: "$15.31",
        description:
            "A guide to overcoming self-doubt and negative thought patterns by understanding the mind's nature and learning to cultivate a healthier mindset.",
        about_the_author:
            "Joseph Nguyen is a mindfulness coach and author who focuses on mental health and personal development, helping readers to navigate their inner worlds more effectively.",
    },
    {
        id: 7,
        title: "Dad, I Want to Hear Your Story",
        author: "Jeffrey Mason",
        src: "https://images-na.ssl-images-amazon.com/images/I/51ZvZFJOsrL._AC_UL900_SR900,600_.jpg",
        price: "$11.95",
        description:
            "A guided journal designed to help fathers share their life stories and experiences with their children, creating a lasting family legacy.",
        about_the_author:
            "Jeffrey Mason is an author and family legacy expert, dedicated to helping families preserve their histories and memories through thoughtful prompts and storytelling.",
    },
    {
        id: 8,
        title: "The Housemaid",
        author: "Freida McFadden",
        src: "https://m.media-amazon.com/images/I/51sx4eLa6NL._SY300_.jpg",
        price: "$6.93",
        description:
            "A gripping psychological thriller about a housemaid who uncovers dark secrets within the family she works for, leading to a web of lies and danger.",
        about_the_author:
            "Freida McFadden is a practicing physician specializing in brain injury, as well as a bestselling author of psychological thrillers and suspense novels.",
    },
    {
        id: 9,
        title: "The Housemaid's Secret",
        author: "Freida McFadden",
        src: "https://m.media-amazon.com/images/I/516-Hmc+ZQL._SY300_.jpg",
        price: "$7.68",
        description:
            "The sequel to 'The Housemaid,' continuing the thrilling tale of deception and hidden truths as the protagonist faces new challenges and revelations.",
        about_the_author:
            "Freida McFadden continues to captivate readers with her medical expertise and storytelling skills, creating suspenseful narratives that keep readers on the edge of their seats.",
    },
    {
        id: 10,
        title: "The Housemaid Is Watching",
        author: "Freida McFadden",
        src: "https://m.media-amazon.com/images/I/51cmL8dc9zL._SY300_.jpg",
        price: "$12.63",
        description:
            "The third installment in 'The Housemaid' series, following the protagonist as she navigates new dangers and uncovering deeper secrets within her employers' lives.",
        about_the_author:
            "Freida McFadden's background in brain injury medicine adds a unique twist to her psychological thrillers, making them both medically accurate and highly engaging.",
    },
    {
        id: 11,
        title: "The Anxious Generation",
        author: "Jonathan Haidt",
        src: "https://images-na.ssl-images-amazon.com/images/I/81XP4hEXDXL._AC_UL900_SR900,600_.jpg",
        price: "$19.89",
        description:
            "An insightful examination of the rising levels of anxiety among young people, exploring the societal and technological factors contributing to this trend.",
        about_the_author:
            "Jonathan Haidt is a social psychologist and professor at New York University, known for his research on morality, culture, and the psychology of politics.",
    },
    {
        id: 12,
        title: "The 48 Laws of Power",
        author: "Robert Greene",
        src: "https://images-na.ssl-images-amazon.com/images/I/611X8GI7hpL._AC_UL900_SR900,600_.jpg",
        price: "$14.55",
        description:
            "A best-selling guide to gaining and maintaining power, using historical examples and practical advice to navigate complex social and professional dynamics.",
        about_the_author:
            "Robert Greene is an American author known for his books on strategy, power, and seduction, drawing from history and philosophy to provide timeless lessons.",
    },
    {
        id: 13,
        title: "The Demon of Unrest",
        author: "Erik Larson",
        src: "https://images-na.ssl-images-amazon.com/images/I/81erI7sNo5L._AC_UL900_SR900,600_.jpg",
        price: "$18.79",
        description:
            "A historical narrative exploring a little-known event of social and political upheaval, revealing the human stories behind the larger historical context.",
        about_the_author:
            "Erik Larson is an acclaimed author of narrative nonfiction, known for his meticulous research and engaging storytelling in books like 'The Devil in the White City.'",
    },
    {
        id: 14,
        title: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        src: "https://images-na.ssl-images-amazon.com/images/I/81RrEEMiOCL._AC_UL900_SR900,600_.jpg",
        price: "$10.37",
        description:
            "A fantasy novel blending romance and adventure, following the journey of a young huntress who becomes entangled in the politics and magic of a faerie realm.",
        about_the_author:
            "Sarah J. Maas is a New York Times bestselling author of fantasy novels, known for her richly detailed worlds and compelling characters in series like 'Throne of Glass' and 'A Court of Thorns and Roses.'",
    },
    {
        id: 15,
        title: "Camino Ghosts: A Novel",
        author: "John Grisham",
        src: "https://images-na.ssl-images-amazon.com/images/I/81TKwy4cD5L._AC_UL900_SR900,600_.jpg",
        price: "$20.96",
        description:
            "A legal thriller set against the backdrop of the Camino Island, blending suspense, mystery, and the supernatural as a lawyer uncovers hidden truths.",
        about_the_author:
            "John Grisham is a former attorney and bestselling author of legal thrillers, known for his gripping plots and legal expertise showcased in novels like 'The Firm' and 'A Time to Kill.'",
    },
    {
        id: 16,
        title: "Just for the Summer",
        author: "Abby Jimenez",
        src: "https://images-na.ssl-images-amazon.com/images/I/81tVBUv75vL._AC_UL300_SR300,200_.jpg",
        price: "$13.38",
        description:
            "A heartwarming romance novel about two people who find unexpected love and healing during a summer at a picturesque lakeside town.",
        about_the_author:
            "Abby Jimenez is a USA Today bestselling author known for her romantic comedies that blend humor and heart, often drawing on her own experiences for inspiration.",
    },
    {
        id: 17,
        title: "It Ends with Us: A Novel",
        author: "Colleen Hoover",
        src: "https://images-na.ssl-images-amazon.com/images/I/813aV273-rL._AC_UL300_SR300,200_.jpg",
        price: "$10.98",
        description:
            "A poignant romance that tackles difficult themes like domestic violence and emotional resilience, following the journey of a young woman as she navigates love and loss.",
        about_the_author:
            "Colleen Hoover is a #1 New York Times bestselling author of several romance and young adult novels, known for her emotional and relatable storytelling.",
    },
    {
        id: 18,
        title: "A Court of Mist and Fury",
        author: "Sarah J. Maas",
        src: "https://images-na.ssl-images-amazon.com/images/I/812XbpMDovL._AC_UL300_SR300,200_.jpg",
        price: "$12.82",
        description:
            "The second book in the 'A Court of Thorns and Roses' series, continuing the epic fantasy adventure with new alliances, darker secrets, and deeper romance.",
        about_the_author:
            "Sarah J. Maas is celebrated for her ability to create immersive fantasy worlds and multi-dimensional characters, captivating readers with her imaginative storytelling.",
    },
    {
        id: 19,
        title: "The Nightingale: A Novel",
        author: "Kristin Hannah",
        src: "https://images-na.ssl-images-amazon.com/images/I/81OkWjcf4WL._AC_UL300_SR300,200_.jpg",
        price: "$9.40",
        description:
            "A historical fiction novel set during World War II, telling the story of two sisters in Nazi-occupied France and their extraordinary courage and resilience.",
        about_the_author:
            "Kristin Hannah is a bestselling author known for her emotionally powerful novels, often centered on themes of family, love, and resilience in the face of adversity.",
    },
    {
        id: 20,
        title: "Reckless (The Powerless Trilogy)",
        author: "Lauren Roberts",
        src: "https://images-na.ssl-images-amazon.com/images/I/81q6ecxcZUL._AC_UL900_SR900,600_.jpg",
        price: "$14.97",
        description:
            "The second book in 'The Powerless Trilogy,' continuing the saga of a dystopian world where power and resistance collide, revealing deeper layers of the protagonists' fight for freedom.",
        about_the_author:
            "Lauren Roberts is a science fiction and fantasy author who crafts gripping stories set in richly imagined worlds, often exploring themes of power, identity, and rebellion.",
    },
    {
        id: 21,
        title: "Powerless (The Powerless Trilogy)",
        author: "Lauren Roberts",
        src: "https://images-na.ssl-images-amazon.com/images/I/81XbnexD2QL._AC_UL900_SR900,600_.jpg",
        price: "$17.90",
        description:
            "The first book in 'The Powerless Trilogy,' introducing a world where society is divided by those with power and those without, sparking a rebellion against the oppressive regime.",
        about_the_author:
            "Lauren Roberts is known for her engaging narratives and complex characters, drawing readers into her dystopian settings and exploring the dynamics of power and resistance.",
    },
    {
        id: 22,
        title: "Never Lie",
        author: "Freida McFadden",
        src: "https://images-na.ssl-images-amazon.com/images/I/81PIs7jhL0L._AC_UL600_SR600,400_.jpg",
        price: "$8.99",
        description:
            "A suspenseful thriller about the consequences of a single lie that spirals out of control, entangling the protagonist in a dangerous web of deceit.",
        about_the_author:
            "Freida McFadden's expertise in brain injury medicine lends authenticity to her psychological thrillers, providing readers with a unique blend of medical knowledge and suspenseful storytelling.",
    },
    {
        id: 23,
        title: "The Lost Bookshop",
        author: "Evie Woods",
        src: "https://images-na.ssl-images-amazon.com/images/I/91Kd+kTooAL._AC_UL900_SR900,600_.jpg",
        price: "$13.46",
        description:
            "A charming novel about a hidden bookshop that holds magical secrets, bringing together a diverse group of characters whose lives are transformed by the books they find.",
        about_the_author:
            "Evie Woods is a novelist who writes heartwarming stories with a touch of magic, often set in enchanting locations that capture the imagination of her readers.",
    },
    {
        id: 24,
        title: "This Summer Will Be Different",
        author: "Carley Fortune",
        src: "https://images-na.ssl-images-amazon.com/images/I/81YeL0xZN5L._AC_UL600_SR600,400_.jpg",
        price: "$13.82",
        description:
            "A contemporary romance about new beginnings and second chances, as the protagonist returns to her hometown and rekindles old relationships during a transformative summer.",
        about_the_author:
            "Carley Fortune is an author known for her engaging contemporary romances, often exploring themes of love, loss, and personal growth against picturesque backdrops.",
    },
    {
        id: 25,
        title: "Entrances and Exits",
        author: "Michael Richards",
        src: "https://images-na.ssl-images-amazon.com/images/I/718SjzpoXQL._AC_UL600_SR600,400_.jpg",
        price: "$25.85",
        description:
            "A literary fiction novel that explores the intricacies of human relationships and the pivotal moments that define our lives, told through interconnected stories.",
        about_the_author:
            "Michael Richards is a critically acclaimed author known for his deep, character-driven narratives and his ability to weave intricate plots that reflect the complexities of life.",
    },
];

export default book_data;
