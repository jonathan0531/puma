SELECT [ld].[Lookback_ID], (SELECT [d].[Blood_Type] FROM [DONOR] [d] WHERE [d].[Donor_ID] = [ld].[Donor_ID]) AS [Blood_Type], [ld].[BUI], [ld].[Look_CMP_Code], 
    [ld].[Look_CMP_Desc], [ld].[Look_Ship_Date], [ld].[Look_Ship_ID], 
    (SELECT [dc].[Disease_ID] FROM [DISEASE_CONFIG] [dc] WHERE [dc].[Disease_ID] = [ld].[Disease_ID]) AS [Disease_ID],
    (SELECT [dc].[Disease_Desc] FROM [DISEASE_CONFIG] [dc] WHERE [dc].[Disease_ID] = [ld].[Disease_ID]) AS [Disease_Desc],
    (SELECT [td].[Test_ID] FROM [TRACKING_DATA] [td] WHERE [td].[BUI] = [ld].[Look_BUI]) AS [Test_ID]
FROM [LOOKBACK_DATA] [ld]
WHERE [Lookback_esc] = @Lookback_ID