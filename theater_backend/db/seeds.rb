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

hero = Movie.create({
    title: 'My Hero Academia The Movie Heros: Rising', 
    description: "A group of youths, professional superheros in training, fight in a world full of people with powerful gifts called 'quirks'. Deku and his partners from the Academy face Nine, the strongest villain yet.",
    mpaa: 'PG-13',
    poster: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/e/e9/Heroes_Rising_Promotional_Poster_2.png/revision/latest?cb=20190927203442',
    released: 'FEB 26, 2020',
    trailer: '_A-6qcgExA4'
})

Ticket.create({
    movie_id: hero.id, user_id: israel.id
})

puts 'we seeded my dude'