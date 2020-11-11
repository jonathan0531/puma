UPDATE  [dbo].[COMPONENT_CONFIG]
SET     [Disease_ID] = @Disease_ID
       , [RBCIN] = @RBCIN
       , [PLTIN] = @PLTIN
       , [PLAIN] = @PLAIN
       , [SLEUKIN] = @SLEUKIN
       , [RPIN] = @RPIN
       , [SPLAIN] = @SPLAIN
       , [FPLTIN] = @FPLTIN
       , [RBCINV] = @RBCINV
       , [PLTINV] = @PLTINV
       , [PLAINV] = @PLAINV
       , [SLEUKINV] = @SLEUKINV
       , [RPINV] = @RPINV
       , [SPLAINV] = @SPLAINV
       , [FPLTINV] = @FPLTINV
       , [RBCOUT] = @RBCOUT
       , [PLTOUT] = @PLTOUT
       , [PLAOUT] = @PLAOUT
       , [SLEUKOUT] = @SLEUKOUT
       , [RPOUT] = @RPOUT
       , [SPLAOUT] = @SPLAOUT
       , [FPLTOUT] = @FPLTOUT
       , [Do_Init] = @Do_Init
       , [Do_Look] = @Do_Look
WHERE   [Disease_ID] = @Disease_ID

SELECT  [Disease_ID]
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
FROM    [dbo].[COMPONENT_CONFIG]
WHERE   [Disease_ID] = @Disease_ID