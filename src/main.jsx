import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataContext from './contexts/DataContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <DataContext>
    <App />
    </DataContext>,
)
