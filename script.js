function likeAnimation() {
    const button = document.querySelector(".like-button");
    button.classList.add("liked");
  
    // Remover animación después de 0.5 segundos
    setTimeout(() => {
      button.classList.remove("liked");
    }, 500);
  }
  