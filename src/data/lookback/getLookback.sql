SELECT [ld].[Lookback_ID], [ld].[BUI], [ld].[Look_CMP_Code], [ld].[Disease_ID], [ld].[Org_ID],
[ld].[Donor_ID], [ld].[Look_Visit_Date], [ld].[Look_BUI], [ld].[Look_CMP_Desc], [ld].[Look_CMP_Group], 
[ld].[Look_Loc_Code], [ld].[Look_Sub_Loc], [ld].[Look_Stat_Code], [ld].[Look_Pooled], [ld].[Look_Ship_Date], 
[ld].[Look_Ship_ID], [ld].[Look_Ship_Box_No], [ld].[Look_Salvage_Date], [ld].[Look_Salvage_ID], 
[ld].[Look_Sal_Carton_ID], [ld].[Look_Inv], [ld].[Look_In_Date], [ld].[Look_Out_Date], [ld].[Look_Processed], 
[tc].[Test_ID], [dc].[Disease_Desc], [d].[Blood_Type]
FROM [dbo].[LOOKBACK_DATA] [ld]
JOIN [dbo].[TRACKING_DATA] [td]
ON [ld].[BUI] = [td].[BUI]
JOIN [dbo].[DISEASE_CONFIG] [dc]
ON [td].[Disease_ID] = [dc].[Disease_ID]
JOIN [dbo].[TEST_CONFIG] [tc]
ON [tc].[Disease_ID] =[dc].[Disease_ID]
JOIN [dbo].[DONOR] [d]
ON [d].[Donor_ID] = [td].[Donor_ID]