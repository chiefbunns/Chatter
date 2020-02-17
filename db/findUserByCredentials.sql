SELECT email, password
  FROM "profile"
 WHERE email = lower($1)
       AND password = $2;