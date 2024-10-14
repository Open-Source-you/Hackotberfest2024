# Rock Paper Scissors AI

This project implements an advanced AI player for the classic game of Rock Paper Scissors using machine learning techniques and adaptive strategies. The goal is to create a player that can defeat various opponents with a win rate of at least 60%.

## Project Overview

The AI player utilizes a combination of machine learning models, statistical analysis, and strategic decision-making to predict and counter opponent moves. The system is designed to adapt to different playing styles and exploit patterns in opponent behavior.

## Key Features

1. **LSTM Neural Network**: Implements a Long Short-Term Memory (LSTM) neural network to predict opponent moves based on historical data.

2. **Adaptive Learning**: Utilizes online learning techniques to continuously update the model with new game data, allowing real-time adaptation to changing strategies.

3. **Opponent Modeling**: Implements algorithms to detect and classify opponent types, enabling tailored counter-strategies.

4. **Feature Engineering**: Extracts meaningful features from game history, including move frequencies and previous results, to enhance prediction accuracy.

5. **Dynamic Learning Rate**: Implements a decaying learning rate strategy to optimize model convergence over time.

6. **Ensemble Decision Making**: Combines multiple strategies, including pattern matching, frequency analysis, and neural network predictions, to make robust move decisions.

## Machine Learning Techniques

- Sequence Prediction: Uses LSTM for time series forecasting of opponent moves.
- Classification: Implements multi-class classification to predict the next move (Rock, Paper, or Scissors).
- Online Learning: Continuously updates the model with each new move, allowing for real-time adaptation.
- Feature Extraction: Derives relevant features from raw game data to improve model performance.

## Data Science Aspects

- Exploratory Data Analysis: Analyzes opponent move distributions and patterns.
- Time Series Analysis: Examines temporal patterns in opponent behavior.
- Statistical Hypothesis Testing: Evaluates the effectiveness of different strategies.
- Performance Metrics: Tracks win rates, accuracy, and other relevant metrics to assess and improve AI performance.

## Project Structure

- `RPS.py`: Contains the main AI player implementation.
- `RPS_game.py`: Implements the game logic and opponent strategies.
- `test_module.py`: Includes unit tests to validate the AI player's performance.

## Getting Started

To run the project:

1. Ensure you have Python and the required libraries (TensorFlow, Keras, NumPy) installed.
2. Run `python RPS.py` to start a game session.
3. Use `test_module.py` to run performance tests against various opponents.

## Future Improvements

- Implement more advanced neural network architectures (e.g., Transformer models).
- Explore reinforcement learning techniques for strategy optimization.
- Develop a more sophisticated opponent modeling system using clustering algorithms.

This project demonstrates the application of machine learning and data science techniques to solve a classic game theory problem, showcasing adaptive learning and strategic decision-making in an adversarial environment.

## Run the tests

# Uncomment line below to run unit tests automatically

# main(module='test_module', exit=False)
