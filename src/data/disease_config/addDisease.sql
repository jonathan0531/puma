INSERT INTO [dbo].[disease_config]
(
     [Disease_ID]
   , [Disease_Desc]
   , [Lookback_Min]
   , [Lookback_Max]
   , [Confirm_Needed]
   , [Recip_Tracing]
   , [Follow_Up_Days]
   , [Rt_Let]
   , [Rt_on_Ind_Res]
   , [Exception_Comments]
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
   , @Rt_Let
   , @Rt_on_Ind_Res
   , @Exception_Comments
);

SELECT SCOPE_IDENTITY() AS id;