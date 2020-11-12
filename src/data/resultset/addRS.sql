INSERT INTO [dbo].[RESULT_SET]
(
     [Result_ID]
   , [Result_Set]
   , [Result]
   , [Result_Value]
   , [Value_Desc]
   , [Nat_Result]
   , [Nat_Count]
   , [Conf_Result]
   , [Conf_Count]
   , [Repeat_Result]
   , [Repeat_Count]
)
VALUES
(
     @Result_ID
   , @Result_Set
   , @Result
   , @Result_Value
   , @Value_Desc
   , @Nat_Result
   , @Nat_Count
   , @Conf_Result
   , @Conf_Count
   , @Repeat_Result
   , @Repeat_Count
);

SELECT SCOPE_IDENTITY() AS id;