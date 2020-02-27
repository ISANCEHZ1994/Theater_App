# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Movie.destroy_all
Ticket.destroy_all


israel = User.create({
    name: 'Israel Sanchez',
    email: 'Israel.pro1994@gmail.com',
    password: '1994',
    phone_number: 13
})

raul =  User.create({
        name: 'Raul Sanchez',
        email: 'raulabear@fakemail.com',
        password: '1993',
        phone_number: 14
    })

# User.create({
#     name: '',
#     email: '',
#     password: '',
#     phone_number: 
# })

hero = Movie.create({
    title: 'My Hero Academia The Movie Heros: Rising', 
    description: "A group of youths, professional superheros in training, fight in a world full of people with powerful gifts called 'quirks'. Deku and his partners from the Academy face Nine, the strongest villain yet.",
    mpaa: 'PG-13',
    poster: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/e/e9/Heroes_Rising_Promotional_Poster_2.png/revision/latest?cb=20190927203442',
    released: 'FEB 26, 2020',
    trailer: '_A-6qcgExA4',
    category: 'Animation'
})

joker = Movie.create({
    title: 'Joker',
    description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
    mpaa: 'R',
    poster: 'https://www.joblo.com/assets/images/joblo/posters/2019/08/joker-poster-main2.jpg',
    released: '2019',
    trailer: 'zAGVQLHvwOY',
    category: 'Psychological Thiller'

})

avengers =  Movie.create({
        title: 'Avengers Endgame',
        description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        mpaa: 'PG-13',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        released: '2019',
        trailer: 'TcMBFSGVi1c',
        category: 'Action'
    })

# Movie.create({
#     title: '',
#     description: '',
#     mpaa: '',
#     poster: '',
#     released: '',
#     trailer: '',
#     category: ''
# })

ticket1 = Ticket.create({
    movie_id: hero.id, user_id: israel.id
})

puts 'we seeded my dude'