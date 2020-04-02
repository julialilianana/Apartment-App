class AddColumnsToApartment < ActiveRecord::Migration[6.0]
  def change
    add_column :apartments, :street, :string
    add_column :apartments, :city, :string
    add_column :apartments, :zip, :integer
    add_column :apartments, :state, :string
    add_column :apartments, :country, :string


  end
end
