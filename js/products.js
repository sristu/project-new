// Product catalogue for Reddy's Aquarium & Pet Shop
const products = [
  { id: 'goldfish', name: 'Goldfish', price: 80, category: 'Aquarium Fish', image: 'https://images.unsplash.com/photo-1544552866-d3ed42536c78?auto=format&fit=crop&w=600&q=80' },
  { id: 'betta', name: 'Betta Fish', price: 150, category: 'Aquarium Fish', image: 'https://images.unsplash.com/photo-1546484959-f9a9c6c91559?auto=format&fit=crop&w=600&q=80' },
  { id: 'guppy', name: 'Guppy Fish', price: 50, category: 'Aquarium Fish', image: 'https://images.unsplash.com/photo-1513863327959-c5516087f8e2?auto=format&fit=crop&w=600&q=80' },
  { id: 'angel', name: 'Angelfish', price: 200, category: 'Aquarium Fish', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80' },
  { id: 'molly', name: 'Molly Fish', price: 60, category: 'Aquarium Fish', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80&sat=-50' },

  { id: 'budgie', name: 'Budgies Pair', price: 600, category: 'Birds', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80' },
  { id: 'cockatiel', name: 'Cockatiels Pair', price: 2400, category: 'Birds', image: 'https://images.unsplash.com/photo-1508675801634-7d50c3dc4c51?auto=format&fit=crop&w=600&q=80' },
  { id: 'finch', name: 'Finches Pair', price: 400, category: 'Birds', image: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&w=600&q=80' },

  { id: 'rabbit', name: 'Rabbits Pair', price: 800, category: 'Small Pets', image: 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?auto=format&fit=crop&w=600&q=80' },
  { id: 'turtle', name: 'Turtles Pair', price: 500, category: 'Small Pets', image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=600&q=80' },

  { id: 'tank2', name: '2 Feet Tank', price: 1200, category: 'Aquariums', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80' },
  { id: 'tank3', name: '3 Feet Tank', price: 2000, category: 'Aquariums', image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=700&q=80' },
  { id: 'tank4', name: '4 Feet Tank', price: 3500, category: 'Aquariums', image: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=700&q=80' },

  { id: 'birdcage', name: 'Bird Cage Medium', price: 900, category: 'Pet Cages', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=80' },
  { id: 'rabbitcage', name: 'Rabbit Cage', price: 1500, category: 'Pet Cages', image: 'https://images.unsplash.com/photo-1601758064226-0b09da62d2ff?auto=format&fit=crop&w=600&q=80' },
  { id: 'hamstercage', name: 'Hamster Cage', price: 1200, category: 'Pet Cages', image: 'https://images.unsplash.com/photo-1461114306221-c9776d1b5d13?auto=format&fit=crop&w=600&q=80' },

  { id: 'fishfood', name: 'Fish Food Premium', price: 120, category: 'Pet Food', image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=600&q=80' },
  { id: 'birdseeds', name: 'Bird Seeds Mix', price: 200, category: 'Pet Food', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80' },
  { id: 'dogfood', name: 'Dog Food Pack', price: 350, category: 'Pet Food', image: 'https://images.unsplash.com/photo-1582719478248-54e9f2af76ae?auto=format&fit=crop&w=600&q=80' },

  { id: 'birdswing', name: 'Bird Swing Toy', price: 150, category: 'Pet Toys', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80&sat=-30' },
  { id: 'dogchew', name: 'Dog Chew Toy', price: 200, category: 'Pet Toys', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80' },
  { id: 'catball', name: 'Cat Ball Toy', price: 120, category: 'Pet Toys', image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=600&q=80' },
];
