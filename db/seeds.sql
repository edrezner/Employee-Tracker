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
        ("Software Developer", 120000, 2),
        ("Accountant", 125000, 3),
        ("Legal Team Lead", 250000, 4),
        ("Sales Lead", 100000, 1),
        ("Lead Engineer", 250000, 2),
        ("Account Manager", 165000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
        ("John", "Smith", 6, null),
        ("Laverne", "Eskender", 2, 1),
        ("Sharalyn", "Emmet", 5, null),
        ("Sienna", "Abram", 1, 3),
        ("Delora", "Hisako", 7, null),
        ("Lorelle", "Allissa", 3, 5),
        ("Sondra", "Sharmaine", 8, null),
        ("Bryan", "Imani", 4, 7);


