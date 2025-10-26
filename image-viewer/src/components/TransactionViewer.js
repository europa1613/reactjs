import React, { useState } from "react";

// Mock transactions data
const mockTransactions = [
  {
    id: 1,
    date: "2024-10-25",
    amount: "$124.50",
    merchant: "Amazon",
    category: "Shopping",
  },
  {
    id: 2,
    date: "2024-10-24",
    amount: "$45.20",
    merchant: "Starbucks",
    category: "Food",
  },
  {
    id: 3,
    date: "2024-10-23",
    amount: "$89.99",
    merchant: "Shell Gas",
    category: "Transport",
  },
  {
    id: 4,
    date: "2024-10-22",
    amount: "$235.00",
    merchant: "Whole Foods",
    category: "Groceries",
  },
  {
    id: 5,
    date: "2024-10-21",
    amount: "$15.50",
    merchant: "Netflix",
    category: "Entertainment",
  },
  {
    id: 6,
    date: "2024-10-20",
    amount: "$67.80",
    merchant: "Target",
    category: "Shopping",
  },
  {
    id: 7,
    date: "2024-10-19",
    amount: "$125.00",
    merchant: "Electric Bill",
    category: "Utilities",
  },
  {
    id: 8,
    date: "2024-10-18",
    amount: "$52.30",
    merchant: "Restaurant",
    category: "Food",
  },
];

// Mock image URLs using picsum.photos
const mockImages = {
  1: "https://picsum.photos/seed/receipt1/600/800",
  2: "https://picsum.photos/seed/receipt2/600/800",
  3: "https://picsum.photos/seed/receipt3/600/800",
  4: "https://picsum.photos/seed/receipt4/600/800",
  5: "https://picsum.photos/seed/receipt5/600/800",
  6: "https://picsum.photos/seed/receipt6/600/800",
  7: "https://picsum.photos/seed/receipt7/600/800",
  8: "https://picsum.photos/seed/receipt8/600/800",
};

// Mock backend call to fetch image
const fetchTransactionImage = (transactionId) => {
  return new Promise((resolve) => {
    const delay = Math.random() * 1000 + 500;
    setTimeout(() => {
      resolve(mockImages[transactionId]);
    }, delay);
  });
};

// Spinner component
const Spinner = () => (
  <svg
    className="spinner"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

function TransactionViewer() {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTransactionClick = async (transaction) => {
    setSelectedTransaction(transaction);
    setLoading(true);
    setImageUrl(null);

    try {
      const url = await fetchTransactionImage(transaction.id);
      setImageUrl(url);
    } catch (error) {
      console.error("Error fetching image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spinner {
          animation: spin 1s linear infinite;
          color: #3b82f6;
        }
      `}</style>

      {/* Left Half - Transaction Grid */}
      <div style={styles.leftPanel}>
        <div style={styles.leftContent}>
          <h2 style={styles.heading}>Transactions</h2>
          <div style={styles.transactionList}>
            {mockTransactions.map((transaction) => (
              <div
                key={transaction.id}
                onClick={() => handleTransactionClick(transaction)}
                style={{
                  ...styles.transactionCard,
                  ...(selectedTransaction?.id === transaction.id
                    ? styles.selectedCard
                    : {}),
                }}
                onMouseEnter={(e) => {
                  if (selectedTransaction?.id !== transaction.id) {
                    e.currentTarget.style.backgroundColor = "#f3f4f6";
                    e.currentTarget.style.borderColor = "#d1d5db";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedTransaction?.id !== transaction.id) {
                    e.currentTarget.style.backgroundColor = "#f9fafb";
                    e.currentTarget.style.borderColor = "#e5e7eb";
                  }
                }}
              >
                <div style={styles.transactionContent}>
                  <div>
                    <p style={styles.merchantName}>{transaction.merchant}</p>
                    <p style={styles.category}>{transaction.category}</p>
                  </div>
                  <div style={styles.rightInfo}>
                    <p style={styles.amount}>{transaction.amount}</p>
                    <p style={styles.date}>{transaction.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Half - Image Viewer */}
      <div style={styles.rightPanel}>
        <div style={styles.rightHeader}>
          <h2 style={styles.heading}>Receipt Image</h2>
          {selectedTransaction && (
            <p style={styles.subheading}>
              {selectedTransaction.merchant} - {selectedTransaction.amount}
            </p>
          )}
        </div>

        <div style={styles.imageContainer}>
          {!selectedTransaction && !loading && (
            <div style={styles.emptyState}>
              <svg
                style={styles.emptyIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p style={styles.emptyText}>
                Select a transaction to view its receipt
              </p>
            </div>
          )}

          {loading && (
            <div style={styles.loadingState}>
              <Spinner />
              <p style={styles.loadingText}>Loading receipt image...</p>
            </div>
          )}

          {!loading && imageUrl && (
            <div style={styles.imageWrapper}>
              <img
                src={imageUrl}
                alt="Transaction receipt"
                style={styles.image}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#f3f4f6",
  },
  leftPanel: {
    width: "50%",
    backgroundColor: "white",
    borderRight: "1px solid #e5e7eb",
    overflowY: "auto",
  },
  leftContent: {
    padding: "24px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "16px",
    marginTop: 0,
  },
  transactionList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  transactionCard: {
    padding: "16px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#f9fafb",
    transition: "all 0.2s",
  },
  selectedCard: {
    backgroundColor: "#eff6ff",
    borderColor: "#3b82f6",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  transactionContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  merchantName: {
    fontWeight: "600",
    color: "#1f2937",
    margin: 0,
    marginBottom: "4px",
  },
  category: {
    fontSize: "14px",
    color: "#6b7280",
    margin: 0,
  },
  rightInfo: {
    textAlign: "right",
  },
  amount: {
    fontWeight: "bold",
    color: "#1f2937",
    margin: 0,
    marginBottom: "4px",
  },
  date: {
    fontSize: "14px",
    color: "#6b7280",
    margin: 0,
  },
  rightPanel: {
    width: "50%",
    backgroundColor: "#f9fafb",
    display: "flex",
    flexDirection: "column",
  },
  rightHeader: {
    padding: "24px",
    backgroundColor: "white",
    borderBottom: "1px solid #e5e7eb",
  },
  subheading: {
    fontSize: "14px",
    color: "#6b7280",
    margin: 0,
    marginTop: "4px",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
  },
  emptyState: {
    textAlign: "center",
    color: "#9ca3af",
  },
  emptyIcon: {
    width: "96px",
    height: "96px",
    margin: "0 auto 16px",
  },
  emptyText: {
    fontSize: "18px",
  },
  loadingState: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  loadingText: {
    color: "#6b7280",
    marginTop: "16px",
  },
  imageWrapper: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    borderRadius: "8px",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },
};

export default TransactionViewer;
