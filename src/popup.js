import React from 'react';
import { createRoot } from 'react-dom/client';

import './assets/main.css';

const App = () => {
  return (
    <div className="w-96 p-2">
      <h1 className="text-xl">This is popup page</h1>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio, corrupti officia,
        saepe sunt, provident vel molestiae quos harum aperiam nisi. Excepturi quia vel laborum nemo
        animi earum autem vero!
      </p>
    </div>
  );
};

const container = document.createElement('div');
document.body.appendChild(container);

createRoot(container).render(<App />);
