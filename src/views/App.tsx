import { Button, Badge } from '@/components/ui'
import { Card } from '@/components/Card'
import { sampleData } from '@/constants/demo'

const PageHeader = () => (
  <header className="mb-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-2">
      Componentes UI Reutilizables
    </h1>
    <p className="text-gray-600">
      Libreria de componentes Button, Badge y Card con TypeScript
    </p>
  </header>
)

const ButtonShowcase = () => (
  <section className="mb-12">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Variantes de Button</h2>
    <div className="flex flex-wrap gap-4 p-6 bg-white rounded-lg border">
      <Button text="Primario" variant="primary" />
      <Button text="Secundario" variant="secondary" />
      <Button text="Peligro" variant="danger" />
      <Button text="Deshabilitado" variant="primary" disabled />
      <Button text="Cargando" variant="primary" loading />
      <Button text="Pequeno" variant="primary" size="sm" />
      <Button text="Mediano" variant="primary" size="md" />
      <Button text="Grande" variant="primary" size="lg" />
    </div>
  </section>
)

const BadgeShowcase = () => (
  <section className="mb-12">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Variantes de Badge</h2>
    <div className="flex flex-wrap gap-3 p-6 bg-white rounded-lg border">
      <Badge label="Exito" status="success" />
      <Badge label="Advertencia" status="warning" />
      <Badge label="Informacion" status="info" />
      <Badge label="Error" status="error" />
      <Badge label="Neutral" status="neutral" />
    </div>
  </section>
)

const getCardFooter = (type: string, index: number) => (
  <div className="flex justify-between items-center">
    <span className={`text-sm ${type === 'black' ? 'text-gray-400' : 'text-gray-500'}`}>
      ID: {index + 1}
    </span>
    <Button text="Ver detalles" size="sm" onClick={() => console.log(`Card ${index + 1}`)} />
  </div>
)

const CardGrid = () => (
  <section>
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Listado de Cards</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sampleData.map((item, i) => (
        <Card key={i} title={item.title} type={item.type} description={item.description}
          badges={item.badges} imageUrl={item.imageUrl} footer={getCardFooter(item.type, i)} />
      ))}
    </div>
  </section>
)

const App = () => (
  <div className="min-h-screen bg-gray-50 py-8 px-4">
    <div className="max-w-6xl mx-auto">
      <PageHeader />
      <ButtonShowcase />
      <BadgeShowcase />
      <CardGrid />
    </div>
  </div>
)

export default App
