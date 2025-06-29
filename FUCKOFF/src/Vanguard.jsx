import React, { useState } from "react";
import { Modal } from "antd";
import "./App.css";

const cardData = [
  {
    id: 1,
    title: "Fated One of Miracles, Rezael",
    url: "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt01/dzbt01_010.png",
    link: "https://en.cf-vanguard.com/deckrecipe/detail/dz-bt05-Rezael-Vita",
  },
  {
    id: 2,
    title: "Fated One of Unparalleled, Varga Dragres",
    url: "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt01/dzbt01_001.png",
    link: "https://en.cf-vanguard.com/deckrecipe/detail/dz-bt01-varga",
  },
  {
    id: 3,
    title: "Fated One of Guiding Star, Welstra Blitz Arms",
    url: "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt01/dzbt01_007.png",
    link: "https://en.cf-vanguard.com/deckrecipe/detail/dz-bt01-welstrablitzarms",
  },
  {
    id: 4,
    title: "Fated One of Ever-changing, Krysrain",
    url: "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt01/dzbt01_016.png",
    link: "https://en.cf-vanguard.com/deckrecipe/detail/dz-bt01-krysrain",
  },
  {
    id: 5,
    title: "Fated One of Zero, Blangdmire",
    url: "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt02/dzbt02_004.png",
    link: "https://en.cf-vanguard.com/deckrecipe/detail/dz-bt02-Blangdmire",
  },
  {
    id: 6,
    title: "Fated One of Taboo, Zorga Nadir",
    url: "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt02/dzbt02_013.png",
    link: "https://en.cf-vanguard.com/deckrecipe/detail/dz-bt02-Zorga-Nadir",
  },
  {
    id: 7,
    title: "Direful Doll Master, Androld",
    url: "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt01/dzbt01_004.png",
    link: "https://en.cf-vanguard.com/deckrecipe/detail/dz-bt01-direfuldollmaster",
  },
  {
    id: 8,
    title: "Fated One of Time, Liael=Amorta",
    url: "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt02/dzbt02_010.png",
    link: "https://en.cf-vanguard.com/deckrecipe/detail/dz-bt02-Liael=Amorta",
  },
  {
    id: 9,
    title: "Cloudwater Flitfoot Stealth Rogue, Shojodoji",
    url: "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt03/dzbt03_001.png",
    link: "https://en.cf-vanguard.com/deckrecipe/detail/dz-bt03-Shojodoji",
  },
  {
    id: 10,
    title: "One Who Governs Rituals, Sacrifice Glass",
    url: "https://en.cf-vanguard.com/wordpress/wp-content/images/cardlist/dzbt03/dzbt03_005.png",
    link: "https://en.cf-vanguard.com/deckrecipe/detail/dz-bt03-Sacrifice-Glass",
  },
];

const Vanguard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showCardDetails = (card) => {
    setSelectedCard(card);
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
    setSelectedCard(null);
  };

  // Prevent modal open and open external link instead
  const openLink = (e, link) => {
    e.stopPropagation(); // prevent card onClick
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="page">
      <h1 class="vanguard-gallery">Vanguard Card Gallery</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        {cardData.map((card) => (
          <div
            key={card.id}
            className="card-hover vanguard-card"
            onClick={() => showCardDetails(card)}
            style={{ cursor: "pointer", width: "200px" }}
          >
            <img
              src={card.url}
              alt={card.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                marginBottom: "12px",
              }}
            />
            <h3
              style={{
                fontSize: "1.1rem",
                marginBottom: "8px",
                color: "#FFD700",
                textShadow: "0 0 6px rgba(255, 215, 0, 0.7)",
              }}
            >
              {card.title}
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#ccc" }}>{card.desc}</p>
            <button
              onClick={(e) => openLink(e, card.link)}
              style={{
                marginTop: "8px",
                padding: "8px 12px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#FFD700",
                color: "#000",
                fontWeight: "bold",
                cursor: "pointer",
                width: "100%",
                boxShadow: "0 0 6px rgba(255, 215, 0, 0.7)",
              }}
            >
              Deck list
            </button>
          </div>
        ))}
      </div>

      <Modal
        open={isModalVisible}
        onCancel={handleClose}
        footer={null}
        centered
        title={selectedCard?.title}
      >
        {selectedCard && (
          <div style={{ textAlign: "center" }}>
            <img
              src={selectedCard.url}
              alt={selectedCard.title}
              style={{ width: "100%", borderRadius: "12px", marginBottom: "16px" }}
            />
            <p style={{ fontSize: "1rem", color: "#333" }}>{selectedCard.desc}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Vanguard;
