UPDATE [dbo].[LOOKBACK_DATA]
SET [Complete] = 1
FROM [dbo].[LOOKBACK_DATA]
WHERE [Lookback_ID] = @Lookback_ID