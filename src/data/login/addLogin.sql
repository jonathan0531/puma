INSERT INTO [dbo].[login]
(
     [email]
   , [password]
)
VALUES
(
     @email
   , @password
);

SELECT SCOPE_IDENTITY() AS id;