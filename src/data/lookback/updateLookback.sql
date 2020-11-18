UPDATE  [dbo].[LOOKBACK_DATA]
SET     [Complete] = @Complete
WHERE   [Lookback_ID] = @Lookback_ID
SELECT  [Complete]
FROM    [dbo].[LOOKBACK_DATA]
WHERE   [Lookback_ID] = @Lookback_ID