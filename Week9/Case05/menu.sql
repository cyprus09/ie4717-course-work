-- create the coffee prices db
use javajam_coffee;

-- create the table to track prices
create table
  prices (coffee_type varchar(30), price decimal(5, 2));

-- create the table to track sales and revenue
create table
  sales (
    coffee_type varchar(30),
    product_name varchar(30),
    category varchar(30),
    quantity int,
    revenue decimal(10, 2)
  );

-- insert init values into prices tables
insert into
  prices
values
  ('justJava', 2.00),
  ('cafeAuLaitSingle', 2.00),
  ('cafeAuLaitDouble', 3.00),
  ('icedCappuccinoSingle', 4.75),
  ('icedCappuccinoDouble', 5.75);

-- insert init values into sales tables
insert into
  sales
values
  ('justJava', 'Just Java', NULL, 0, 0.00),
  (
    'cafeAuLaitSingle',
    'Cafe Au Lait',
    'Single',
    0,
    0.00
  ),
  (
    'cafeAuLaitDouble',
    'Cafe Au Lait',
    'Double',
    0,
    0.00
  ),
  (
    'icedCappuccinoSingle',
    'Iced Cappuccino',
    'Single',
    0,
    0.00
  ),
  (
    'icedCappuccinoDouble',
    'Iced Cappuccino',
    'Double',
    0,
    0.00
  );

-- resetting variables within the sales table if called
update sales
set
  quantity = 0,
  revenue = 0.00;