UPDATE  [dbo].[RESULT_SET]
SET     [Result_Set] = @Result_Set
       , [Result] = @Result
       , [Result_Value] = @Result_Value
       , [Value_Desc] = @Value_Desc
       , [Nat_Result] = @Nat_Result
       , [Nat_Count] = @Nat_Count
       , [Conf_Result] = @Conf_Result
       , [Conf_Count] = @Conf_Count
       , [Repeat_Result] = @Repeat_Result
       , [Repeat_Count] = @Repeat_Count
WHERE   [Result_Set] = @Result_Set

SELECT  [Result_Set]
       , [Result]
       , [Result_Value]
       , [Value_Desc]
       , [Nat_Result]
       , [Nat_Count]
       , [Conf_Result]
       , [Conf_Count]
       , [Repeat_Result]
       , [Repeat_Count]
FROM    [dbo].[RESULT_SET]
WHERE   [Result_Set] = @Result_Set