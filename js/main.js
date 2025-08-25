document.addEventListener('DOMContentLoaded', function() {
    // 移动端导航菜单切换
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
            // 产品过滤功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的active类
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // 为当前按钮添加active类
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                productCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        const cardCategory = card.getAttribute('data-category');
                        if (cardCategory === filterValue) {
                            card.style.display = 'block';
                            card.style.animation = 'fadeIn 0.5s ease';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // 博客分类过滤功能
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 添加active类到当前按钮
            button.classList.add('active');

            const categoryValue = button.getAttribute('data-category');

            blogCards.forEach(card => {
                if (categoryValue === 'all' || card.getAttribute('data-category') === categoryValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 加载更多文章功能
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // 模拟加载更多文章
            loadMoreBtn.textContent = 'Loading...';
            loadMoreBtn.disabled = true;
            
            setTimeout(() => {
                loadMoreBtn.textContent = 'Load More Articles';
                loadMoreBtn.disabled = false;
                // 这里可以添加实际的加载更多文章的逻辑
                alert('More articles would be loaded here in a real implementation.');
            }, 1500);
        });
    }

    // 博客通讯订阅功能
     const newsletterForm = document.querySelector('.newsletter-form');
     if (newsletterForm) {
         newsletterForm.addEventListener('submit', (e) => {
             e.preventDefault();
             const email = newsletterForm.querySelector('input[type="email"]').value;
             
             if (email) {
                 alert('Thank you for subscribing! You will receive our latest updates.');
                 newsletterForm.reset();
             }
         });
     }

     // 移动端导航菜单切换功能
     const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
     const navLinks = document.querySelector('.nav-links');
     
     if (mobileMenuToggle && navLinks) {
         mobileMenuToggle.addEventListener('click', () => {
             navLinks.classList.toggle('active');
             const icon = mobileMenuToggle.querySelector('i');
             if (navLinks.classList.contains('active')) {
                 icon.classList.remove('fa-bars');
                 icon.classList.add('fa-times');
             } else {
                 icon.classList.remove('fa-times');
                 icon.classList.add('fa-bars');
             }
         });
         
         // 点击导航链接时关闭菜单
         const navLinksItems = navLinks.querySelectorAll('a');
         navLinksItems.forEach(link => {
             link.addEventListener('click', () => {
                 navLinks.classList.remove('active');
                 const icon = mobileMenuToggle.querySelector('i');
                 icon.classList.remove('fa-times');
                 icon.classList.add('fa-bars');
             });
         });
     }
    
    // 添加淡入动画的CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});
    }
    
    // 滚动时导航栏样式变化
    const header = document.querySelector('header');
    let scrollPosition = 0;

    function handleScroll() {
        const currentScroll = window.pageYOffset;
        
        if (header && currentScroll > 100) {
            header.classList.add('scrolled');
        } else if (header) {
            header.classList.remove('scrolled');
        }
        
        scrollPosition = currentScroll;
    }

    window.addEventListener('scroll', handleScroll);
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // 如果在移动端，点击后关闭菜单
                if (window.innerWidth < 768 && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });
    
    // 简单的轮播功能（用于客户评价）
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            if (i === index) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    // 只在移动端启用轮播
    function initTestimonialSlider() {
        if (window.innerWidth < 768 && testimonialItems.length > 1) {
            // 初始显示第一个
            showTestimonial(currentTestimonial);
            
            // 设置自动轮播
            setInterval(() => {
                currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
                showTestimonial(currentTestimonial);
            }, 5000);
        } else {
            // 在桌面端显示所有评价
            testimonialItems.forEach(item => {
                item.style.display = 'block';
            });
        }
    }
    
    // 初始化轮播
    if (testimonialItems.length > 0) {
        initTestimonialSlider();
        
        // 窗口大小改变时重新初始化
        window.addEventListener('resize', initTestimonialSlider);
    }
    
    // 图片懒加载
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // 回退方案
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // 表单验证（如果有联系表单）
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // 简单的邮箱验证
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('error');
                }
            }
            
            if (isValid) {
                // 这里可以添加表单提交逻辑
                // 例如 AJAX 请求或其他处理
                
                // 显示成功消息
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = '您的消息已成功发送，我们将尽快与您联系！';
                
                contactForm.reset();
                contactForm.appendChild(successMessage);
                
                // 3秒后移除成功消息
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
        });
        
        // 实时验证
        const formFields = contactForm.querySelectorAll('input, textarea');
        formFields.forEach(field => {
            field.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.classList.add('error');
                } else {
                    this.classList.remove('error');
                }
                
                // 邮箱验证
                if (this.type === 'email' && this.value.trim()) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(this.value)) {
                        this.classList.add('error');
                    }
                }
            });
        });
    }
});