UPDATE  [dbo].[donor]
SET     [donor_id] = @donor_id
       , [blood_type] = @blood_type
       , [donor_fname] = @donor_fname
       , [donor_lname] = @donor_lname
       , [birth_date] = @birth_date
       , [donor_st_addr] = @donor_st_addr
       , [donor_city] = @donor_city
       , [donor_state] = @donor_state
       , [donor_country] = @donor_country
       , [donor_postal] = @donor_postal
WHERE   [donor_id] = @donor_id

SELECT  [donor_id]
       , [blood_type]
       , [donor_fname]
       , [donor_lname]
       , [birth_date]
       , [donor_st_addr]
       , [donor_city]
       , [donor_state]
       , [donor_country]
       , [donor_postal]
FROM    [dbo].[donor]
WHERE   [donor_id] = @donor_id