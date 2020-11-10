INSERT INTO [dbo].[disease_config]
(
     [Disease_ID]
   , [Disease_Desc]
   , [Lookback_Min]
   , [Lookback_Max]
   , [Confirm_Needed]
   , [Recip_Tracing]
   , [Follow_Up_Days]
   , [Exception_Comments]
   , [RT_LETTER]
   , [RT_ON_IND_RESULT]
)
VALUES
(
     @Disease_ID
   , @Disease_Desc
   , @Lookback_Min
   , @Lookback_Max
   , @Confirm_Needed
   , @Recip_Tracing
   , @Follow_Up_Days
   , @Exception_Comments
   , @RT_LETTER
   , @RT_ON_IND_RESULT
);

SELECT SCOPE_IDENTITY() AS id;