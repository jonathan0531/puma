UPDATE  [dbo].[disease_config]
SET          [disease_id] = @disease_id
   , [disease_desc] = @disease_desc
   , [lookback_min] = @lookback_min
   , [Lookback_max] = @lookback_max
   , [confirm_needed] = @confirm_needed
   , [recip_tracing] = @recip_tracing
   , [follow_up_days] = @follow_up_days
   , [exception_comments] = @exception_comments
   , [rt_letter] = @rt_letter
   , [rt_on_ind_result] = @rt_on_ind_result
WHERE   [disease_id] = @disease_id

SELECT [disease_id]
   , [disease_desc]
   , [lookback_min]
   , [lookback_max]
   , [confirm_needed]
   , [recip_tracing]
   , [follow_up_days]
   , [exception_comments]
   , [rt_letter]
   , [rt_on_ind_result]
FROM    [dbo].[disease_config]
WHERE   [disease_id] = @disease_id