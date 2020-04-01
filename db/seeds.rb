apartments = [
  {
    street: '123 Street',
    city: 'City',
    postal_code: 12345,
    state: 'AnyState.',
    country: 'USA.',
  },
  {
     street: '5678 Dance',
    city: 'Salsa',
    postal_code: 123567,
    state: 'AnyState',
    country: 'Cuba',
  }
]

apartments.each do |attributes|
  Apartment.create attributes
end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
