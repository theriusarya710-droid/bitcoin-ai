import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

# Baca dataset
df = pd.read_csv("bitcoin_dataset.csv")

# Fitur
X = df[['Open', 'High', 'Low', 'Volume']]

# Target
y = df['Close']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Training
model = LinearRegression()
model.fit(X_train, y_train)

# Prediksi
y_pred = model.predict(X_test)

# Akurasi
print("R2 Score =", r2_score(y_test, y_pred))