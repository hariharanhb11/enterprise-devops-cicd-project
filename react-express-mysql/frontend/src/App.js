function App() {
  const services = [
    { name: "Frontend", status: "Running" },
    { name: "Backend", status: "Running" },
    { name: "Database", status: "Healthy" },
    { name: "CI Pipeline", status: "Success" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <nav className="bg-black text-white p-4">
        <h1 className="text-2xl font-bold">
          Enterprise DevOps Dashboard
        </h1>
      </nav>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6"
          >
            <h2 className="text-xl font-bold">
              {service.name}
            </h2>

            <p className="mt-4 text-green-600 font-semibold">
              {service.status}
            </p>
          </div>
        ))}

      </div>

      <div className="p-6">

        <div className="bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-4">
            CI/CD Pipeline
          </h2>

          <div className="flex flex-wrap gap-4">

            <div className="bg-blue-500 text-white px-4 py-2 rounded">
              Source
            </div>

            <div className="bg-yellow-500 text-white px-4 py-2 rounded">
              Build
            </div>

            <div className="bg-purple-500 text-white px-4 py-2 rounded">
              Test
            </div>

            <div className="bg-green-500 text-white px-4 py-2 rounded">
              Deploy
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;