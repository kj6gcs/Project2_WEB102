function Flashcard({ card, isFlipped, onFlip, difficultyStyles }) {
  return (
    <button
      className={`flashcard ${isFlipped ? "flipped" : ""}`}
      onClick={onFlip}
    >
      <div className="flashcard-inner">
        <div className="flashcard-face flashcard-front">
          <span className={difficultyStyles[card.difficulty] || "difficulty"}>
            {card.difficulty}
          </span>

          <div className="card-content">
            <p className="card-label">Term</p>
            <h2>{card.question}</h2>

            <img className="card-image" src={card.image} alt={card.question} />

            {card.link && (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
                onClick={(e) => e.stopPropagation()}
              >
                Watch my Drake Equation video
              </a>
            )}
          </div>

          <p className="card-hint">Click the card to flip it</p>
        </div>

        <div className="flashcard-face flashcard-back">
          <span className={difficultyStyles[card.difficulty] || "difficulty"}>
            {card.difficulty}
          </span>

          <div className="card-content">
            <p className="card-label">Definition</p>
            <h2>{card.answer}</h2>
          </div>

          <p className="card-hint">Click the card to flip it</p>
        </div>
      </div>
    </button>
  );
}

export default Flashcard;
