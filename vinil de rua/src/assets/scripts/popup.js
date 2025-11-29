document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o link pelo id ou por texto (compatibilidade)
    const openBtn = document.getElementById('openTerms') || Array.from(document.querySelectorAll('a')).find(a => a.textContent.trim().toLowerCase().includes('termos'));
    const overlay = document.getElementById('popupOverlay');
    const closeBtn = document.getElementById('closePopup');

    console.log('[popup] openBtn found:', openBtn);
    console.log('[popup] overlay found:', !!overlay);

    if (!openBtn) {
        console.warn('[popup] Não achei o elemento #openTerms. Verifique se o link existe ou tem id="openTerms".');
        return;
    }
    if (!overlay) {
        console.warn('[popup] Não achei #popupOverlay no DOM. Cole o HTML do popup no final do body.');
        return;
    }

    // Função para abrir popup
    function openPopup() {
        // Debug: ver quem está sobre o elemento (opcional)
        try {
            const rect = openBtn.getBoundingClientRect();
            const elAtPoint = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
            console.log('[popup] elemento no ponto central do link:', elAtPoint);
        } catch (e) { /* ignore */ }

        overlay.style.display = 'flex';
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // bloqueia scroll da página enquanto popup aberto
    }

    // Função para fechar popup
    function closePopup() {
        overlay.style.display = 'none';
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Garante que o link responda ao clique (fallback para touch)
    openBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openPopup();
    });
    openBtn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openPopup();
        }
    });

    // Fechar ao clicar no botão X
    if (closeBtn) closeBtn.addEventListener('click', closePopup);

    // Fechar ao clicar fora da caixa
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closePopup();
    });

    // Fechar com ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.style.display === 'flex') closePopup();
    });

    // Se o link estiver dentro de algo com pointer-events: none, forçamos pointer-events no link:
    // (isto já está resolvido pelo CSS #openTerms acima, mas deixo aqui como redundância)
    openBtn.style.pointerEvents = 'auto';
    openBtn.setAttribute('tabindex', 0);
});