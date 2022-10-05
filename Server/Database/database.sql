CREATE DATABASE stock_management;

CREATE TABLE warehouse(
                          user_id SERIAL PRIMARY KEY,
                          email VARCHAR(200) NOT NULL
);

CREATE TABLE stock(
                      stock_id SERIAL PRIMARY KEY,
                      stock_name VARCHAR(200) NOT NULL,
                      date_of_importing DATE NOT NULL,
                      no_of_units INT NOT NULL,
                      no_of_items_in_one_unit INT NOT NULL,
                      date_of_expiration DATE NOT NULL,
                      isbn BIGINT NOT NULL
);

CREATE TABLE warehousestock(
                               user_id int NOT NULL,
                               stock_id int NOT NULL,
                               date_of_importing DATE NOT NULL,
                               no_of_units int NOT NULL,
                               no_of_items_in_one_unit int NOT NULL,
                               date_of_expiration DATE NOT NULL,
                               isbn BIGINT NOT NULL

                                   FOREIGN KEY (user_id) REFERENCES warehouse(id) NO UPDATE CASCASE
--     user_id int REFERENCES warehouse(id) NO DELETE CASCADE NO UPDATE CASCADE

--     stock_id int REFERENCES stock(stock_id) NO DELETE CASCADE NO UPDATE CASCADE
--     date_of_importing DATE REFERENCES stock(date_of_importing) NO DELETE CASCADE NO UPDATE CASCADE
--     no_of_units int REFERENCES stock(no_of_units) NO DELETE CASCADE NO UPDATE CASCADE
--     no_of_items_in_one_unit int REFERENCES stock(no_of_items_in_one_unit) NO DELETE CASCADE NO UPDATE CASCADE
--     date_of_expiration DATE REFERENCES stock(date_of_expiration) NO DELETE CASCADE NO UPDATE CASCADE
--     isbn int REFERENCES stock(isbn) NO DELETE CASCADE NO UPDATE CASCADE

                                   FOREIGN KEY (date_of_importing) REFERENCES stock(id) NO DELETE CASCADE NO UPDATE CASCADE
                                   FOREIGN KEY (no_of_units) REFERENCES stock(no_of_units) NO DELETE CASCADE NO UPDATE CASCADE
                                   FOREIGN KEY (no_of_items_in_one_unit) REFERENCES stock(no_of_items_in_one_unit) NO DELETE CASCADE NO UPDATE CASCADE
                                   FOREIGN KEY (date_of_expiration) REFERENCES stock(date_of_expiration) NO DELETE CASCADE NO UPDATE CASCADE
                                   FOREIGN KEY (isbn) REFERENCES stock(isbn) NO DELETE CASCADE NO UPDATE CASCADE

);

CREATE TABLE dispatched(
    dispatch_id int references stock(stock_name)
);