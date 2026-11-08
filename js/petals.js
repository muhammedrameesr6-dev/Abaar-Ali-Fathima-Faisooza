/**
 * Luxury Falling Rose Petals Engine
 * Realistic fluttering 3D falling petals with organic motion
 */
(function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'petals-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '999';
  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(canvas);
    initPetals();
  });

  let ctx;
  let width = window.innerWidth;
  let height = window.innerHeight;
  let petals = [];
  const PETAL_COUNT = 24; // Balanced for elegance and 60fps performance on mobile

  const PETAL_COLORS = [
    { start: '#8A1830', end: '#580A1C' }, // Deep Burgundy
    { start: '#A82542', end: '#731227' }, // Rich Crimson
    { start: '#B83552', end: '#861A32' }, // Ruby Rose
    { start: '#C95D75', end: '#982C43' }, // Soft Mauve/Rose
  ];

  class Petal {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -30;
      this.size = Math.random() * 9 + 8; // Size between 8 and 17px
      this.speedY = Math.random() * 0.9 + 0.6; // Gentle fall
      this.speedX = Math.random() * 0.7 - 0.35; // Slight drift
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 1.5;
      this.flip = Math.random() * Math.PI;
      this.flipSpeed = Math.random() * 0.02 + 0.01;
      this.opacity = Math.random() * 0.45 + 0.55;
      this.color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
      this.swayAngle = Math.random() * Math.PI * 2;
      this.swaySpeed = Math.random() * 0.02 + 0.01;
      this.swayAmplitude = Math.random() * 1.2 + 0.6;
    }

    update() {
      this.y += this.speedY;
      this.swayAngle += this.swaySpeed;
      this.x += Math.sin(this.swayAngle) * this.swayAmplitude + this.speedX;
      this.rotation += this.rotationSpeed;
      this.flip += this.flipSpeed;

      if (this.y > height + 25 || this.x < -30 || this.x > width + 30) {
        this.reset();
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.scale(1, Math.cos(this.flip));
      ctx.globalAlpha = this.opacity;

      // Draw graceful curved petal
      const grad = ctx.createLinearGradient(0, -this.size, 0, this.size);
      grad.addColorStop(0, this.color.start);
      grad.addColorStop(1, this.color.end);
      ctx.fillStyle = grad;

      ctx.beginPath();
      ctx.moveTo(0, -this.size);
      ctx.bezierCurveTo(
        this.size * 0.85, -this.size * 0.4,
        this.size * 0.75, this.size * 0.8,
        0, this.size
      );
      ctx.bezierCurveTo(
        -this.size * 0.75, this.size * 0.8,
        -this.size * 0.85, -this.size * 0.4,
        0, -this.size
      );
      ctx.closePath();
      ctx.fill();

      // Subtle center vein highlight
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(0, -this.size * 0.75);
      ctx.quadraticCurveTo(this.size * 0.1, 0, 0, this.size * 0.7);
      ctx.stroke();

      ctx.restore();
    }
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function initPetals() {
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);

    petals = [];
    for (let i = 0; i < PETAL_COUNT; i++) {
      petals.push(new Petal());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < petals.length; i++) {
        petals[i].update();
        petals[i].draw(ctx);
      }
      requestAnimationFrame(animate);
    }
    animate();
  }
})();
