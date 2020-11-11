INSERT INTO [dbo].[COMPONENT_CONFIG]
(
     [Disease_ID]
   , [RBCIN]
   , [PLTIN]
   , [PLAIN]
   , [SLEUKIN]
   , [RPIN]
   , [SPLAIN]
   , [FPLTIN]
   , [RBCINV]
   , [PLTINV]
   , [PLAINV]
   , [SLEUKINV]
   , [RPINV]
   , [SPLAINV]
   , [FPLTINV]
   , [RBCOUT]
   , [PLTOUT]
   , [PLAOUT]
   , [SLEUKOUT]
   , [RPOUT]
   , [SPLAOUT]
   , [FPLTOUT]
   , [Do_Init]
   , [Do_Look]
)
VALUES
(
     @Disease_ID
   , @RBCIN
   , @PLTIN
   , @PLAIN
   , @SLEUKIN
   , @RPIN
   , @SPLAIN
   , @FPLTIN
   , @RBCINV
   , @PLTINV
   , @PLAINV
   , @SLEUKINV
   , @RPINV
   , @SPLAINV
   , @FPLTINV
   , @RBCOUT
   , @PLTOUT
   , @PLAOUT
   , @SLEUKOUT
   , @RPOUT
   , @SPLAOUT
   , @FPLTOUT
   , @Do_Init
   , @Do_Look
);

SELECT SCOPE_IDENTITY() AS id;