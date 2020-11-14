SELECT [ld].[Lookback_ID], 
[BUI], [Look_CMP_Code], [Disease_ID],
[Org_ID], [Donor_ID], [Look_Visit_Date], [Look_BUI], [Look_CMP_Desc],
[Look_CMP_Group], [Look_Loc_Code], [Look_Sub_Loc], [Look_Stat_Code], [Look_Pooled],
[Look_Ship_Date], [Look_Ship_ID], [Look_Ship_Box_No], [Look_Salvage_Date],
[Look_Salvage_ID], [Look_Sal_Carton_ID], [Look_Inv], [Look_In_Date], [Look_Out_Date], [Look_Processed]
FROM [LOOKBACK_DATA] [ld]
JOIN [FORM] [f]
ON [ld].[Lookback_ID] = [f].[Lookback_ID]