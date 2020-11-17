SELECT [ld].[Lookback_ID], (SELECT [d].[Blood_Type] FROM [DONOR] [d] WHERE [d].[Donor_ID] = [ld].[Donor_ID]) AS [Blood_Type], [ld].[BUI], [ld].[Look_CMP_Code], 
    [ld].[Look_CMP_Desc], [ld].[Look_Ship_Date], [ld].[Look_Ship_ID], (SELECT [td].[Disease_ID] FROM [TRACKING_DATA] [td] WHERE [td].[BUI] = [ld].[BUI]) AS [Disease_ID],
    (SELECT [td].[Disease_Desc] FROM [TRACKING_DATA] [td] WHERE [td].[BUI] = [ld].[BUI]) AS [Disease_esc],
    (SELECT [td].[Test_ID] FROM [TRACKING_DATA] [td] WHERE [td].[BUI] = [ld].[BUI]) AS [Test_ID]
FROM [LOOKBACK_DATA] [ld]
WHERE [Lookback_esc] = @Lookback_ID