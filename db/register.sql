INSERT INTO houser (user_name, user_password)
VALUES ($1,$2)
RETURNING *