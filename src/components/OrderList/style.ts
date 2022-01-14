export const ListContainer = {
    overflow: "auto",
    marginTop: "70px",
    width: {
      xs: 'auto',
      md: "250px",
    },
    padding: 2,
    display: "flex",
    flexDirection: "column",
  } as const;

export const ListItem = {
    padding: 1,
    paddingY: 2,
    flexDirection: 'column' as 'column',
    alignItems: 'flex-start',
  } 
  
  export const QuantityPrice = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 1,
    pt: 1,
  } as const;

