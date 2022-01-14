export const Card = {
  mb: 3,
  boxShadow: `rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px`,
} as const;

export const CardContent = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
} as const

export const CardImage = { width: { xs: "40%", md: "25%" } }

export const QuantityDish = {
  display: "flex",
  flexDirection: "row",
  gap: 1,
  padding: 1,
} as const;
