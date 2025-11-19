// スクロール時に要素をふわっと表示するアニメーション
document.addEventListener('DOMContentLoaded', function() {
  // アニメーション対象の要素を取得
  const animatedElements = document.querySelectorAll(
    '.feature-card, .product-card, .skill-item, .process-step, .stat-item, .about-image, .about-description, .trial-feature, .trial-content, .skills-message'
  );

  // Intersection Observerのオプション
  const observerOptions = {
    root: null, // ビューポートをルートとして使用
    rootMargin: '0px 0px -50px 0px', // 要素が50px見えたら発動
    threshold: 0.1 // 要素の10%が見えたら発動
  };

  // 各セクションがアニメーション済みかどうかを追跡
  let featuresAnimated = false;
  let productsAnimated = false;
  let skillsAnimated = false;
  let processAnimated = false;
  let aboutAnimated = false;
  let trialAnimated = false;

  // Intersection Observerのコールバック関数
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      // 要素がビューポートに入った場合
      if (entry.isIntersecting) {
        // 特徴カードの場合は順番にアニメーション
        if (entry.target.classList.contains('feature-card') && !featuresAnimated) {
          featuresAnimated = true;
          const featureCards = Array.from(
            document.querySelectorAll('.feature-card.fade-in-up-hidden')
          );
          featureCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('fade-in-up');
              observer.unobserve(card);
            }, index * 100); // 各カードを0.1秒ずつずらす
          });
        }
        // 商品カードの場合は順番にアニメーション
        else if (entry.target.classList.contains('product-card') && !productsAnimated) {
          productsAnimated = true;
          const productCards = Array.from(
            document.querySelectorAll('.product-card.fade-in-up-hidden')
          );
          productCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('fade-in-up');
              observer.unobserve(card);
            }, index * 100); // 各カードを0.1秒ずつずらす
          });
        }
        // スキルアイテムの場合は順番にアニメーション
        else if (entry.target.classList.contains('skill-item') && !skillsAnimated) {
          skillsAnimated = true;
          const skillItems = Array.from(
            document.querySelectorAll('.skill-item.fade-in-up-hidden')
          );
          skillItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('fade-in-up');
              observer.unobserve(item);
            }, index * 100); // 各アイテムを0.1秒ずつずらす
          });
        }
        // 参加方法ステップの場合は順番にアニメーション
        else if (entry.target.classList.contains('process-step') && !processAnimated) {
          processAnimated = true;
          const processSteps = Array.from(
            document.querySelectorAll('.process-step.fade-in-up-hidden')
          );
          processSteps.forEach((step, index) => {
            setTimeout(() => {
              step.classList.add('fade-in-up');
              observer.unobserve(step);
            }, index * 100); // 各ステップを0.1秒ずつずらす
          });
        }
        // 統計アイテムの場合は順番にアニメーション
        else if (entry.target.classList.contains('stat-item') && !aboutAnimated) {
          aboutAnimated = true;
          const statItems = Array.from(
            document.querySelectorAll('.stat-item.fade-in-up-hidden')
          );
          statItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('fade-in-up');
              observer.unobserve(item);
            }, index * 100); // 各アイテムを0.1秒ずつずらす
          });
        }
        // 無料体験フィーチャーの場合は順番にアニメーション
        else if (entry.target.classList.contains('trial-feature') && !trialAnimated) {
          trialAnimated = true;
          const trialFeatures = Array.from(
            document.querySelectorAll('.trial-feature.fade-in-up-hidden')
          );
          trialFeatures.forEach((feature, index) => {
            setTimeout(() => {
              feature.classList.add('fade-in-up');
              observer.unobserve(feature);
            }, index * 100); // 各フィーチャーを0.1秒ずつずらす
          });
        }
        // その他の要素（about-image, about-description, trial-content, skills-message）は即座にアニメーション
        else if (
          entry.target.classList.contains('about-image') ||
          entry.target.classList.contains('about-description') ||
          entry.target.classList.contains('trial-content') ||
          entry.target.classList.contains('skills-message')
        ) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      }
    });
  };

  // Intersection Observerを作成
  const observer = new IntersectionObserver(
    observerCallback,
    observerOptions
  );

  // 各要素を監視対象に追加
  animatedElements.forEach((element) => {
    // 初期状態では非表示（CSSクラスで制御）
    element.classList.add('fade-in-up-hidden');
    // 監視を開始
    observer.observe(element);
  });

  // ハンバーガーメニューの開閉
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ハンバーガーボタンのクリックイベント
  hamburger.addEventListener('click', toggleMenu);

  // オーバーレイのクリックイベント
  navOverlay.addEventListener('click', closeMenu);

  // ナビゲーションリンクのクリックイベント（メニューを閉じる）
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
});

