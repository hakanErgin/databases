--- 1.Which car has the highest accelerate value?

select max(accelerate) from cars_data;

select * from cars_data where accelerate="25";

select * from car_names where id="307" or id="403";


--- 2.List the weight of the cars made in the 1980s (1980 and later).

select weight from cars_data where year between 1980 and 1990;

--- 3.List all the cars made by chevrolet (where the model is chevrolet).

select * from car_names where model="chevrolet";

--- 4.What is the full name of the maker of the plymouth model?

select * from models where name="plymouth";

select full_name from car_makers where id="6";

--- 5.Which continent is the Volvo car maker from?

select * from car_makers where maker= "volvo";

select * from countries where id="6";

select * from continents where id="2";

--- 6.How many car models are audi?

select count(*) from car_names where model="audi";

--- 7.List all makers whose names start with s.

select * from car_makers where maker like "s%";

--- 8.How many cars have a horsepower more than 100 but less than 200?

select count(*) from cars_data where horsepower between 100 and 200;

--- 9.List all car makers from australia.

select * from car_makers where country="11";

--- 10.List all car makers not from sweden, japan, france or germany.

select * from car_makers where country!="6" and country!="3" and country!="2";

--- bonus 1.List all cars where the make starts with an a and ends with an r.

select * from car_names where make like "a%" and make like "%r";

--- bonus 2.How many cars have more than 6 cylinders, weight less than 4000 but more than 3000, and was not made in the years 1970, 1975 or 1981.

select * from cars_data where cylinders>"6" and weight between 3000 and 4000 and year !="1970" and year !="1975" and year !="1981";