import "../styles/PortfolioModal.css";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";
import { useEffect, useState, useCallback } from "react";

function PortfolioModal({ isOpen, onClose, project, projectImages }) {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		const modalElement = document.querySelector(".PortfolioModal");
		if (modalElement) {
			modalElement.style.animation = "fadeOut 0.3s forwards";
		}
		setShowModal(false);
		setTimeout(onClose, 300);
	}, [onClose]);

	const handleModalClick = (event) => {
		if (event.target.classList.contains("PortfolioModal")) {
			handleClose();
		}
	};

	useEffect(() => {
		const handleEscape = (event) => {
			if (event.key === "Escape") {
				handleClose();
			}
		};
		document.addEventListener("keydown", handleEscape);
		window.addEventListener("click", handleModalClick);

		return () => {
			document.removeEventListener("keydown", handleEscape);
			window.removeEventListener("click", handleModalClick);
		};
	}, [handleClose]);

	return ReactDOM.createPortal(
		<AnimatePresence>
			{showModal && (
				<div className="PortfolioModal">
					<motion.div
						className="modal"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.3 }}
					>
						<div className="modal-close-div">
							<button onClick={handleClose} className="modal-close">
								X
							</button>
						</div>
						<div className="modal-title-div">
							<h1 className="modal-title">{project.name}</h1>
						</div>
						<div className="modal-content">
							<div className="modal-image-div">
								<img
									src={projectImages[project.image]}
									alt={project.name}
									className="modal-image"
								/>
							</div>
							<div className="modal-repo-div">
								<a
									href={project.repo}
									className="modal-repo"
									target="_blank"
									rel="noopener noreferrer"
								>
									View Repo
								</a>
							</div>
							<div className="modal-description-div">
								<p className="modal-description">{project.description}</p>
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>,
		document.getElementById("modal-root")
	);
}

export default PortfolioModal;
