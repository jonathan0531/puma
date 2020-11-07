INSERT INTO [dbo].[donor]
(
     [Donor_ID]
   , [Blood_Type]
   , [Donor_FName]
   , [Donor_LName]
   , [Birth_Date]
   , [Donor_St_Addr]
   , [Donor_City]
   , [Donor_State]
   , [Donor_Country]
   , [Donor_Postal]
)
VALUES
(
     @Donor_ID
   , @Blood_Type
   , @Donor_FName
   , @Donor_LName
   , @Birth_Date
   , @Donor_St_Addr
   , @Donor_City
   , @Donor_State
   , @Donor_Country
   , @Donor_Postal
);

SELECT SCOPE_IDENTITY() AS id;