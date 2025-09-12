-- write your queries here
--Join the two tables so that every column and record appears, regardless of if there is not an owner_id.
Select * FROM owners FULL JOIN vehicles ON vehicles.owner_id=owners.id;
-- Count the number of cars for each owner. Display the owners first_name , last_name and count of vehicles. The first_name should be ordered in ascending order.
SELECt owners.first_name, owners.last_name, COUNT(owner_id) AS vehicles_owned FROM vehicles JOIN owners ON vehicles.owner_id=owners.id GROUP BY owners.first_name, owners.last_name ORDER BY owners.first_name;
--Count the number of cars for each owner and display the average price for each of the cars as integers. Display the owners first_name , last_name, average price and count of vehicles. The first_name should be ordered in descending order. Only display results with more than one vehicle and an average price greater than 10000. Your output should look like this:
SELECt owners.first_name, owners.last_name, AVG(price) AS average_price, COUNT(owner_id) AS vehicles_owned FROM vehicles JOIN owners ON vehicles.owner_id=owners.id GROUP BY owners.first_name, owners.last_name, vehicles.owner_id HAVING COUNT(owner_id) > 1 and AVG(price)>10000 ORDER BY owners.first_name DESC;
