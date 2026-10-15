import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';

const transactions = [
  { name: 'Central Coffee', date: 'Today, 10:42 AM', amount: '-18.50 RON', icon: '☕' },
  { name: 'Salary', date: 'Yesterday, 9:15 AM', amount: '+4,500.00 RON', icon: '↙', income: true },
  { name: 'City Bookstore', date: 'October 12', amount: '-76.00 RON', icon: '▤' },
];

function Home() {
  return (
    <section>
      <p className="eyebrow">MY ACCOUNT</p>
      <h1>Good morning, Andreea!</h1>
      <p className="intro">Here’s a summary of your account.</p>

      <article className="bank-card">
        <div className="card-top"><span>Checking account</span><span className="card-mark">●●</span></div>
        <p className="balance-label">Available balance</p>
        <p className="balance">8.245,60 <span>RON</span></p>
        <p className="card-number">•••• &nbsp; •••• &nbsp; •••• &nbsp; 4821</p>
        <p className="card-owner">ANDREEA POPESCU</p>
      </article>

      <div className="section-heading"><h2>Recent transactions</h2><NavLink to="/transactions">View all →</NavLink></div>
      <TransactionList items={transactions.slice(0, 2)} />
    </section>
  );
}

function Profile() {
  return (
    <section>
      <p className="eyebrow">MY ACCOUNT</p>
      <h1>My profile</h1>
      <p className="intro">Your account information.</p>
      <article className="profile-card">
        <div className="large-avatar">AP</div>
        <div><h2>Andreea Popescu</h2><p>Customer since March 2023</p></div>
      </article>
      <article className="details-card">
        <h2>Personal information</h2>
        <div className="detail-row"><span>Email</span><strong>andreea.popescu@email.com</strong></div>
        <div className="detail-row"><span>Phone</span><strong>0722 123 456</strong></div>
        <div className="detail-row"><span>Account type</span><strong>Checking account</strong></div>
        <div className="detail-row"><span>IBAN</span><strong>RO49 BANK •••• •••• 4821</strong></div>
      </article>
    </section>
  );
}

function TransactionList({ items }) {
  return <div className="transaction-list">{items.map((transaction) => (
    <div className="transaction" key={transaction.name}>
      <span className={`transaction-icon${transaction.income ? ' income' : ''}`}>{transaction.icon}</span>
      <div className="transaction-info"><strong>{transaction.name}</strong><span>{transaction.date}</span></div>
      <strong className={transaction.income ? 'amount income-text' : 'amount'}>{transaction.amount}</strong>
    </div>
  ))}</div>;
}

function Transactions() {
  return (
    <section>
      <p className="eyebrow">MY ACCOUNT</p>
      <h1>Transactions</h1>
      <p className="intro">Your recent account activity.</p>
      <article className="details-card transactions-card">
        <h2>October 2026</h2>
        <TransactionList items={transactions} />
      </article>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <a className="logo" href="/">my<span>bank</span></a>
          <nav aria-label="Navigare principală">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/transactions">Transactions</NavLink>
          </nav>
          <div className="user-menu"><span className="small-avatar">AP</span><span>Andreea</span></div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <footer>Educational demo · All information shown is fictional</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
