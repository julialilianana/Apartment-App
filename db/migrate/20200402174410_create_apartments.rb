class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|

      t.timestamps
    end
  end
end
