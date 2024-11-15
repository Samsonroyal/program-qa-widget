import QAWidget from './components/QAWidget';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Add some sample content to see how widget overlays */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Our Programs</h1>
        <p className="mb-4">
          Explore our educational programs and learn more about the opportunities we offer.
          Use the chat widget in the bottom right corner to ask questions.
        </p>
        <div className="grid gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Web Developer Program</h2>
            <p>A comprehensive program to help you become a full-stack developer.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Digital Customer Service</h2>
            <p>Learn essential skills for modern customer service roles.</p>
          </div>
        </div>
      </div>
      
      {/* Chat Widget */}
      <QAWidget />
    </div>
  );
}

export default App;