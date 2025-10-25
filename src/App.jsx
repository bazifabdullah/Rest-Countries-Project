import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold text-center pt-10">
          REST Countries API
        </h1>
      </main>
    </div>
  );
}

export default App;
