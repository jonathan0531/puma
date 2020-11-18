SELECT [ld].[Lookback_ID], (SELECT [d].[Blood_Type] FROM [DONOR] [d] WHERE [d].[Donor_ID] = [ld].[Donor_ID]) AS [Blood_Type], [ld].[BUI], [ld].[Look_CMP_Code], 
    [ld].[Look_CMP_Desc], [ld].[Look_Ship_Date], [ld].[Look_Ship_ID], 
    (SELECT [dc].[Disease_ID] FROM [DISEASE_CONFIG] [dc] WHERE [dc].[Disease_ID] = [ld].[Disease_ID]) AS [Disease_ID],
    (SELECT [dc].[Disease_Desc] FROM [DISEASE_CONFIG] [dc] WHERE [dc].[Disease_ID] = [ld].[Disease_ID]) AS [Disease_Desc],
    (SELECT [td].[Test_ID] FROM [TRACKING_DATA] [td] WHERE [td].[BUI] = [ld].[Look_BUI]) AS [Test_ID], 
	[ld].[Look_BUI], [ld].[Look_Ship_ID], [ld].[Look_Ship_Box_No],
    [ld].[Look_Loc_Code], [ld].[Look_Loc_Code], 
	(SELECT [mo].[Org_Name] FROM [MED_ORG] [mo] WHERE [mo].[Org_ID] = [ld].[Org_ID]) AS [Org_Name],
	(SELECT [mo].[Contact] FROM [MED_ORG] [mo] WHERE [mo].[Org_ID] = [ld].[Org_ID]) AS [Contact], 
    (SELECT [dc].[Disease_Desc] FROM [DISEASE_CONFIG] [dc] WHERE [dc].[Disease_ID] = [ld].[Disease_ID]) AS [Disease_Desc],
    (SELECT [u].[Donation_Date] FROM [UNIT] [u] WHERE [u].[BUI] = [ld].[Look_BUI]) AS [Donation_Date], [ld].[Look_BUI],
    (SELECT [dc].[Follow_Up_Days] FROM [DISEASE_CONFIG] [dc] WHERE [dc].[Disease_ID] = [ld].[Disease_ID]) AS [Follow_Up_Days]
FROM [LOOKBACK_DATA] [ld]
WHERE [Lookback_ID] = @Look_ID;