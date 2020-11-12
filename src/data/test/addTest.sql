INSERT INTO [dbo].[TEST_CONFIG]
(
     [Test_ID]
   , [Result_Set]
   , [Test_Count]
   , [Disease_ID]
   , [Supplemental]
)
VALUES
(
     @Test_ID
   , @Result_Set
   , @Test_Count
   , @Disease_ID
   , @Supplemental
);

SELECT SCOPE_IDENTITY() AS id;