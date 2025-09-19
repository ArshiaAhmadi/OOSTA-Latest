"use client"

// Define a type for the component's props
interface ElectromotorSubcategoryClientPageProps {
  params: { type: string }
}

const ElectromotorSubcategoryClientPage = ({ params }: ElectromotorSubcategoryClientPageProps) => {
  return (
    <div>
      <h1>Electromotor Subcategory: {params.type}</h1>
      <p>This is a client component for the {params.type} electromotor subcategory.</p>
    </div>
  )
}

export default ElectromotorSubcategoryClientPage
