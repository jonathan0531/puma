SELECT 
[ld].[Lookback_ID], 

(SELECT [d].[Blood_Type] FROM [dbo].[DONOR] [d] WHERE [d].[Donor_ID] = [ld].[Donor_ID]) AS [Blood_Type], 

(SELECT [dc].[Disease_ID] FROM [dbo].[DISEASE_CONFIG] [dc] WHERE [dc].[Disease_ID] = [ld].[Disease_ID]) AS [Disease_ID],

(SELECT [dc].[Disease_Desc] FROM [dbo].[DISEASE_CONFIG] [dc] WHERE [dc].[Disease_ID] = [ld].[Disease_ID]) AS [Disease_Desc],

(SELECT TOP 1 [td].[Test_ID] FROM [dbo].[TRACKING_DATA] [td] WHERE [td].[BUI] = [ld].[Look_BUI]) AS [Test_ID],

[ld].[BUI], 
[ld].[Look_CMP_Code], 
[ld].[Look_CMP_Desc], 
[ld].[Look_Ship_Date], 
[ld].[Look_Ship_ID]


FROM [dbo].[LOOKBACK_DATA] [ld]
WHERE [Lookback_ID] = @Lookback_ID