INSERT INTO department (name)
VALUES 
        ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");


INSERT INTO role (title, salary, department_id)
VALUES  
        ("Attorney", 120000, 4),
        ("Sales Rep", 80000, 1),
        ("Software Developer", 100000, 2),
        ("Accountant", 100000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
        ("John", "Smith", 2, 1),
        ("Laverne", "Eskender", 2, 1),
        ("Sharalyn", "Emmet", 1, 3),
        ("Sienna", "Abram", 1, 3),
        ("Delora", "Hisako", 3, 5),
        ("Lorelle", "Allissa", 3, 5),
        ("Sondra", "Sharmaine", 4, 7),
        ("Bryan", "Imani", 4, 7);


