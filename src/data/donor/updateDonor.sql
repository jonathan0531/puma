UPDATE  [dbo].[DONOR]
SET     [Donor_ID] = @Donor_ID
       , [Blood_Type] = @Blood_Type
       , [Donor_FName] = @Donor_FName
       , [Donor_Lname] = @donor_lname
       , [Birth_Date] = @Birth_Date
       , [Donor_St_Addr] = @Donor_St_Addr
       , [Donor_City] = @Donor_City
       , [Donor_State] = @Donor_State
       , [Donor_Country] = @Donor_Country
       , [Donor_Postal] = @Donor_Postal
WHERE   [Donor_ID] = @Donor_ID

SELECT  [Donor_ID]
       , [Blood_Type]
       , [Donor_FName]
       , [donor_lname]
       , [Birth_Date]
       , [Donor_St_Addr]
       , [Donor_City]
       , [Donor_State]
       , [Donor_Country]
       , [Donor_Postal]
FROM    [dbo].[DONOR]
WHERE   [Donor_ID] = @Donor_ID