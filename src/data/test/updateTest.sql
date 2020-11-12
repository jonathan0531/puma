UPDATE   [dbo].[TEST_CONFIG]
SET      [Test_ID] = @Test_ID
       , [Result_Set] = @Result_Set
       , [Test_Count] = @Test_Count
       , [Disease_ID] = @Disease_ID
       , [Supplemental] = @Supplemental
       
WHERE   [Test_ID] = @Test_ID

SELECT  [Test_ID]
       , [Result_Set]
       , [Test_Count]
       , [Disease_ID]
       , [Supplemental]
     
FROM    [dbo].[TEST_CONFIG]
WHERE   [Test_ID] = @Test_ID