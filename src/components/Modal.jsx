import Emoji from "./Emoji";

const Modal = ({ isOpen, rating, emojiFaces, emojiFeedbackMessages }) => {
  const center = (rating || 1) - 1;
  const indices = [
    Math.max(0, center - 1),
    center,
    Math.min(4, center + 1),
  ];

  return (
    <div className="modal-overlay" onClick={() => isOpen(false)}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-emojis emoji-grayscale">
          {indices.map((idx, i) => (
            <Emoji
              key={`modal-emoji-${i}-${idx}`}
              emoji={idx + 1}
              emojiFaces={emojiFaces}
              index={idx}
              displayOnly
              isColored={i === 1}
            />
          ))}
        </div>
        <h2 id="modal-title" className="modal-title">
          Thank you for review.
        </h2>
        <p className="modal-message">
          You&apos;ve rated our services{" "}
          <strong className="modal-rating-label">
            {rating >= 1 && rating <= 5
              ? emojiFeedbackMessages[rating - 1]
              : "—"}
          </strong>
          . Feel free to recommend or share our services.
        </p>
        <div className="modal-actions">
          <button
            type="button"
            className="modal-btn modal-btn-cancel"
            onClick={() => isOpen(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="modal-btn modal-btn-confirm"
            onClick={() => isOpen(false)}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
