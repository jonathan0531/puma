SELECT [ld].[Lookback_ID], (SELECT [d].[Blood_Type] FROM [DONOR] [d] WHERE [d].[Donor_ID] = [ld].[Donor_ID]) AS [Blood_Type], [ld].[BUI], [ld].[Look_CMP_Code], 
    [ld].[Look_CMP_Desc], [ld].[Look_Ship_Date], [ld].[Look_Ship_ID]
FROM [LOOKBACK_DATA] [ld]
WHERE [Lookback_ID] = @Lookback_ID