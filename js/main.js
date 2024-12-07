class SnowEffect {
  constructor() {
    this.container = document.getElementById('snowContainer');

    this.startSnowfall();
  }

  createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const size = Math.random() * 6 + 2;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.top = '-10px';

    const duration = Math.random() * 10 + 5;
    const horizontalMovement = Math.random() * 100 - 50;

    snowflake.animate([
      {
        transform: `translateY(0) translateX(0)`,
        opacity: 0.7
                    },
      {
        transform: `translateY(100vh) translateX(${horizontalMovement}px)`,
        opacity: 0
                    }
                ], {
      duration: duration * 1000,
      easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    });

    this.addTwinkleEffect(snowflake);

    this.container.appendChild(snowflake);

    setTimeout(() => {
      this.container.removeChild(snowflake);
    }, duration * 1000);
  }

  addTwinkleEffect(element) {
    element.animate([
      { opacity: 0.7 },
      { opacity: 0.3 },
      { opacity: 0.7 }
                ], {
      duration: Math.random() * 2000 + 1000,
      iterations: Infinity,
      easing: 'ease-in-out'
    });
  }

  createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    const size = Math.random() * 3 + 1;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    this.container.appendChild(sparkle);

    sparkle.animate([
      {
        transform: 'scale(1) rotate(0deg)',
        opacity: 0.6
                    },
      {
        transform: 'scale(0) rotate(180deg)',
        opacity: 0
                    }
                ], {
      duration: 1000,
      easing: 'ease-out'
    });

    setTimeout(() => {
      this.container.removeChild(sparkle);
    }, 1000);
  }

  startSnowfall() {
    setInterval(() => {
      for (let i = 0; i < 3; i++) {
        this.createSnowflake();
      }
    }, 300);

    setInterval(() => {
      if (Math.random() < 0.3) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        this.createSparkle(x, y);
      }
    }, 500);
  }
}

window.addEventListener('load', () => {
  new SnowEffect();
});
