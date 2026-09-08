import { useMemo, useState } from "react";
import { economies, quizQuestions } from "./data";

const tabs = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "learn", label: "Learn", icon: "📚" },
  { id: "ai", label: "McManus AI", icon: "✦" },
  { id: "test", label: "Test Me", icon: "✓" }
];

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedEconomy, setSelectedEconomy] = useState("risk-bearing");

  const goTo = (tab) => {
    setActiveTab(tab);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="app">
      <header className="navbar">
        <div
          className="brand"
          onClick={() => goTo("home")}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              goTo("home");
            }
          }}
        >
          <div className="brand-mark">E</div>

          <div>
            <div className="brand-title">EOS Hub</div>
            <div className="brand-subtitle">
              Economies of Scale
            </div>
          </div>
        </div>

        <nav className="desktop-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-button ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClick={() => goTo(tab.id)}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        {activeTab === "home" && <Home goTo={goTo} />}

        {activeTab === "learn" && (
          <Learn
            selectedEconomy={selectedEconomy}
            setSelectedEconomy={setSelectedEconomy}
          />
        )}

        {activeTab === "ai" && <AITutor />}

        {activeTab === "test" && <TestMe />}
      </main>

      <footer className="footer">
        <div>
          <strong>EOS Hub</strong>
          <span>
            Learn smarter. Understand economies of scale.
          </span>
        </div>

        <div className="footer-links">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => goTo(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </footer>

      <div className="mobile-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={
              activeTab === tab.id ? "mobile-active" : ""
            }
            onClick={() => goTo(tab.id)}
          >
            <span>{tab.icon}</span>
            <small>{tab.label}</small>
          </button>
        ))}
      </div>
    </div>
  );
}

function Home({ goTo }) {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            BUSINESS STUDIES • STUDENT HUB
          </div>

          <h1>
            Master
            <span> Economies of Scale.</span>
          </h1>

          <p>
            Understand the six types of economies of scale,
            practise exam questions and get personalised help
            from McManus AI, your Business Studies tutor.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => goTo("learn")}
            >
              Start Learning →
            </button>

            <button
              className="secondary-button"
              onClick={() => goTo("test")}
            >
              Test Yourself
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>6</strong>
              <span>Types</span>
            </div>

            <div>
              <strong>15</strong>
              <span>Quiz Questions</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>McManus AI</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="scale-card">
            <div className="scale-top">
              <span>Scale</span>
              <span>↓ Cost per unit</span>
            </div>

            <div className="scale-bars">
              <div className="bar bar-one">
                <span>Small</span>
              </div>

              <div className="bar bar-two">
                <span>Medium</span>
              </div>

              <div className="bar bar-three">
                <span>Large</span>
              </div>
            </div>

            <div className="scale-message">
              <span className="green-dot"></span>
              Economies of scale
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section-label">
              THE SIX TYPES
            </span>

            <h2>Six ways businesses gain scale advantages.</h2>
          </div>

          <button
            className="text-button"
            onClick={() => goTo("learn")}
          >
            Explore all →
          </button>
        </div>

        <div className="economy-grid">
          {economies.map((economy) => (
            <button
              className={`economy-card ${
                economy.id === "risk-bearing"
                  ? "featured-card"
                  : ""
              }`}
              key={economy.id}
              onClick={() => goTo("learn")}
            >
              <div className="card-icon">{economy.icon}</div>

              <div className="card-number">
                {String(economies.indexOf(economy) + 1).padStart(
                  2,
                  "0"
                )}
              </div>

              <h3>{economy.name}</h3>

              <p>{economy.definition}</p>

              <span className="card-link">
                Learn more →
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="risk-banner">
        <div className="risk-banner-icon">🛡️</div>

        <div>
          <span className="section-label">
            FEATURED TOPIC
          </span>

          <h2>Risk-bearing economies of scale</h2>

          <p>
            Learn how large businesses can spread risk across
            products, markets and locations — and why this can
            make them more resilient.
          </p>
        </div>

        <button
          className="light-button"
          onClick={() => goTo("learn")}
        >
          Explore risk-bearing →
        </button>
      </section>

      <section className="section why-section">
        <div className="section-heading centered">
          <span className="section-label">
            BUILT FOR STUDENTS
          </span>

          <h2>Everything you need in one place.</h2>
        </div>

        <div className="feature-grid">
          <Feature
            icon="📖"
            title="Learn"
            text="Clear definitions, examples, advantages, disadvantages and exam tips."
          />

          <Feature
            icon="✦"
            title="McManus AI"
            text="Ask questions and receive explanations tailored to what you actually want to understand."
          />

          <Feature
            icon="✓"
            title="Test Me"
            text="Challenge yourself with multiple-choice questions and instant feedback."
          />
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

function Learn({
  selectedEconomy,
  setSelectedEconomy
}) {
  const selected = economies.find(
    (economy) => economy.id === selectedEconomy
  );

  return (
    <div className="page">
      <section className="page-header">
        <span className="section-label">
          LEARNING CENTRE
        </span>

        <h1>Understand every type.</h1>

        <p>
          Explore each economy of scale and understand how it
          works, why businesses use it, and what the drawbacks
          can be.
        </p>
      </section>

      <section className="learn-layout">
        <aside className="topic-sidebar">
          <div className="sidebar-title">
            <span>Topics</span>
            <span>6</span>
          </div>

          {economies.map((economy) => (
            <button
              key={economy.id}
              className={
                selectedEconomy === economy.id
                  ? "topic-button selected"
                  : "topic-button"
              }
              onClick={() =>
                setSelectedEconomy(economy.id)
              }
            >
              <span className="topic-icon">
                {economy.icon}
              </span>

              <span>{economy.name}</span>

              {selectedEconomy === economy.id && (
                <span className="topic-arrow">→</span>
              )}
            </button>
          ))}
        </aside>

        <article className="lesson">
          <div className="lesson-top">
            <div className="large-topic-icon">
              {selected.icon}
            </div>

            <div>
              <span className="lesson-category">
                ECONOMY OF SCALE
              </span>

              <h2>{selected.name}</h2>
            </div>
          </div>

          <div className="definition-box">
            <span>WHAT IS IT?</span>

            <p>{selected.definition}</p>
          </div>

          <div className="lesson-section">
            <h3>How does it work?</h3>

            <p>{selected.howItWorks}</p>
          </div>

          <div className="lesson-section">
            <h3>Why do businesses use it?</h3>

            <div className="bullet-grid">
              {selected.whyBusinessesChooseIt.map(
                (item) => (
                  <div className="bullet-item" key={item}>
                    <span>✓</span>
                    <p>{item}</p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="pros-cons">
            <div className="pros">
              <h3>Advantages</h3>

              {selected.pros.map((item) => (
                <div className="check-item" key={item}>
                  <span>+</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="cons">
              <h3>Disadvantages</h3>

              {selected.cons.map((item) => (
                <div className="check-item" key={item}>
                  <span>−</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="example-box">
            <div className="example-label">
              BUSINESS EXAMPLE
            </div>

            <p>{selected.example}</p>
          </div>

          <div className="exam-box">
            <div className="exam-icon">🎯</div>

            <div>
              <strong>Exam tip</strong>

              <p>{selected.examTip}</p>
            </div>
          </div>

          {selected.id === "risk-bearing" && (
            <div className="risk-deep-dive">
              <div className="risk-deep-title">
                <span>🛡️</span>

                <div>
                  <span className="section-label">
                    GO DEEPER
                  </span>

                  <h3>Why risk-bearing matters</h3>
                </div>
              </div>

              <p>
                Imagine a business that sells only one
                product in one country. If demand for that
                product suddenly falls, the entire business
                could suffer.
              </p>

              <p>
                Now imagine a large business selling several
                products across different countries. A fall
                in demand in one area does not necessarily
                destroy the whole business because revenue
                can still come from its other activities.
              </p>

              <div className="risk-chain">
                <div>
                  <strong>More markets</strong>
                  <span>↓</span>
                </div>

                <div>
                  <strong>More products</strong>
                  <span>↓</span>
                </div>

                <div>
                  <strong>Less dependence</strong>
                  <span>↓</span>
                </div>

                <div>
                  <strong>Risk is spread</strong>
                </div>
              </div>
            </div>
          )}
        </article>
      </section>
    </div>
  );
}

function AITutor() {
  const [topic, setTopic] = useState("All topics");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const askQuestion = async () => {
    if (!question.trim()) {
      setError("Please enter a question first.");
      return;
    }

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await fetch(
        "/.netlify/functions/ai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            question,
            topic
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong."
        );
      }

      setAnswer(data.answer);
    } catch (err) {
      setError(
        err.message ||
          "McManus AI could not answer right now."
      );
    } finally {
      setLoading(false);
    }
  };

  const usePrompt = (prompt) => {
    setQuestion(prompt);
    setError("");
  };

  return (
    <div className="page">
      <section className="page-header ai-header">
        <div className="ai-orb">✦</div>

        <div>
          <span className="section-label">
            MCMANUS AI • PERSONAL BUSINESS STUDIES TUTOR
          </span>

          <h1>Ask. Understand. Improve.</h1>

          <p>
            Ask anything about economies of scale and get an
            explanation designed around your question from
            McManus AI.
          </p>
        </div>
      </section>

      <section className="ai-layout">
        <div className="ai-main">
          <div className="ai-panel">
            <div className="ai-panel-header">
              <div>
                <span className="section-label">
                  ASK MCMANUS AI
                </span>

                <h2>What are you stuck on?</h2>
              </div>

              <div className="ai-status">
                <span></span>
                McManus AI
              </div>
            </div>

            <label className="input-label">
              Topic
            </label>

            <select
              value={topic}
              onChange={(event) =>
                setTopic(event.target.value)
              }
              className="topic-select"
            >
              <option>All topics</option>

              {economies.map((economy) => (
                <option key={economy.id}>
                  {economy.name}
                </option>
              ))}
            </select>

            <label className="input-label">
              Your question
            </label>

            <textarea
              value={question}
              onChange={(event) =>
                setQuestion(event.target.value)
              }
              placeholder="e.g. Why would a large business want to spread its risk?"
              rows="7"
              className="question-box"
              maxLength="2000"
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" &&
                  event.ctrlKey
                ) {
                  askQuestion();
                }
              }}
            />

            <div className="input-footer">
              <span>
                {question.length}/2000 characters
              </span>

              <span>
                Ctrl + Enter to ask
              </span>
            </div>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <button
              className="ask-button"
              onClick={askQuestion}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  McManus AI is thinking...
                </>
              ) : (
                <>
                  Ask McManus AI
                  <span>→</span>
                </>
              )}
            </button>
          </div>

          {answer && (
            <div className="answer-panel">
              <div className="answer-header">
                <div className="answer-avatar">✦</div>

                <div>
                  <strong>McManus AI</strong>
                  <span>
                    Personalised explanation
                  </span>
                </div>
              </div>

              <div className="answer-content">
                {answer.split("\n").map(
                  (paragraph, index) =>
                    paragraph.trim() && (
                      <p key={index}>
                        {paragraph}
                      </p>
                    )
                )}
              </div>
            </div>
          )}
        </div>

        <aside className="ai-sidebar">
          <div className="quick-card">
            <span className="section-label">
              QUICK QUESTIONS
            </span>

            <h3>Not sure what to ask?</h3>

            <p>
              Try one of these questions to get started.
            </p>

            <button
              onClick={() =>
                usePrompt(
                  "Explain risk-bearing economies of scale in simple terms."
                )
              }
            >
              Explain risk-bearing simply
              <span>→</span>
            </button>

            <button
              onClick={() =>
                usePrompt(
                  "What is the difference between purchasing and financial economies of scale?"
                )
              }
            >
              Compare two types
              <span>→</span>
            </button>

            <button
              onClick={() =>
                usePrompt(
                  "Give me an exam-style question about economies of scale and explain how I should answer it."
                )
              }
            >
              Give me an exam question
              <span>→</span>
            </button>

            <button
              onClick={() =>
                usePrompt(
                  "Give me a business example of risk-bearing economies of scale and explain the chain of reasoning."
                )
              }
            >
              Give me a business example
              <span>→</span>
            </button>
          </div>

          <div className="ai-note">
            <span>💡</span>

            <div>
              <strong>Study tip</strong>

              <p>
                Don't just memorise definitions. Try to
                understand the chain of reasoning behind each
                economy of scale.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

function TestMe() {
  const [questions, setQuestions] = useState(
    createQuiz()
  );

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [score, setScore] = useState(0);

  const [answered, setAnswered] = useState(false);

  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  const selectAnswer = (answer) => {
    if (answered) {
      return;
    }

    setSelectedAnswer(answer);
    setAnswered(true);

    if (answer === question.answer) {
      setScore((previous) => previous + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion(
      (previous) => previous + 1
    );

    setSelectedAnswer(null);
    setAnswered(false);
  };

  const restart = () => {
    setQuestions(createQuiz());
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  };

  if (finished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    let message = "";

    if (percentage >= 90) {
      message =
        "Excellent! You have a very strong understanding of economies of scale.";
    } else if (percentage >= 75) {
      message =
        "Great work! You understand most of the key concepts.";
    } else if (percentage >= 60) {
      message =
        "Good start. Review the areas you missed and try again.";
    } else {
      message =
        "Keep practising. Go back through the Learn section and try the test again.";
    }

    return (
      <div className="page">
        <section className="results">
          <div className="result-icon">✓</div>

          <span className="section-label">
            TEST COMPLETE
          </span>

          <h1>
            {percentage >= 75
              ? "Well done!"
              : "Keep practising!"}
          </h1>

          <div className="score-circle">
            <strong>{percentage}%</strong>
            <span>Score</span>
          </div>

          <p className="result-score">
            You scored <strong>{score}</strong> out of{" "}
            <strong>{questions.length}</strong>.
          </p>

          <p className="result-message">
            {message}
          </p>

          <div className="result-buttons">
            <button
              className="primary-button"
              onClick={restart}
            >
              Try Again
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="page-header test-header">
        <span className="section-label">
          KNOWLEDGE CHECK
        </span>

        <h1>Test yourself.</h1>

        <p>
          Put your understanding to the test. Questions cover
          all six economies of scale, with extra focus on
          risk-bearing.
        </p>
      </section>

      <section className="quiz-container">
        <div className="quiz-top">
          <div>
            <span className="question-number">
              QUESTION {currentQuestion + 1} OF{" "}
              {questions.length}
            </span>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="score-display">
            Score: <strong>{score}</strong>
          </div>
        </div>

        <div className="question-card">
          <h2>{question.question}</h2>

          <div className="answer-options">
            {question.options.map(
              (option, index) => {
                const isCorrect =
                  answered &&
                  option === question.answer;

                const isSelected =
                  selectedAnswer === option;

                let className =
                  "answer-option";

                if (isCorrect) {
                  className += " correct";
                } else if (
                  isSelected &&
                  !isCorrect
                ) {
                  className += " incorrect";
                }

                return (
                  <button
                    key={option}
                    className={className}
                    onClick={() =>
                      selectAnswer(option)
                    }
                    disabled={answered}
                  >
                    <span className="option-letter">
                      {String.fromCharCode(
                        65 + index
                      )}
                    </span>

                    <span>{option}</span>

                    {isCorrect && (
                      <span className="option-result">
                        ✓
                      </span>
                    )}

                    {isSelected &&
                      !isCorrect && (
                        <span className="option-result">
                          ✕
                        </span>
                      )}
                  </button>
                );
              }
            )}
          </div>

          {answered && (
            <div
              className={
                selectedAnswer === question.answer
                  ? "feedback correct-feedback"
                  : "feedback incorrect-feedback"
              }
            >
              <strong>
                {selectedAnswer === question.answer
                  ? "Correct!"
                  : "Not quite."}
              </strong>

              <p>{question.explanation}</p>
            </div>
          )}

          {answered && (
            <button
              className="next-button"
              onClick={nextQuestion}
            >
              {currentQuestion ===
              questions.length - 1
                ? "See Results"
                : "Next Question →"}
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

function createQuiz() {
  const shuffled = [...quizQuestions].sort(
    () => Math.random() - 0.5
  );

  return shuffled.slice(0, 12).map((question) => ({
    ...question,
    options: shuffleArray(question.options)
  }));
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default App;
