INSERT INTO "profile"(user_handle, email, password)
     VALUES ($1, lower($2), $3)
  RETURNING user_handle;