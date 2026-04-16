/**
 * module-context.js
 * Reads ?from= URL parameter and updates the module detail page
 * to reflect the correct parent product context.
 *
 * Usage: add ?from=erp-lite | ?from=erp | ?from=sanerp to module page links.
 */
(function () {
  var params = new URLSearchParams(window.location.search);
  var from = params.get('from');

  var products = {
    'erp-lite': {
      name:        '재무ERPLite',
      href:        'erp-lite.html',
      ctaLabel:    '재무ERPLite 전체 보기',
      entityLabel: '회사명',
      modalDesc:   '재무ERPLite 상담센터에서 고객님께<br>전화를 드리겠습니다.'
    },
    'erp': {
      name:        '재무ERP',
      href:        'erp.html',
      ctaLabel:    '재무ERP 전체 보기',
      entityLabel: '회사명',
      modalDesc:   '재무ERP 가입 상담센터에서 고객님께<br>전화를 드리겠습니다.'
    },
    'sanerp': {
      name:        '산학ERP',
      href:        'sanerp.html',
      ctaLabel:    '산학ERP 전체 보기',
      entityLabel: '기관명',
      modalDesc:   '산학ERP 상담센터에서 고객님께<br>전화를 드리겠습니다.'
    }
  };

  var product = products[from];
  if (!product) return; // no matching ?from= → keep page defaults

  /* 1. Nav active state */
  document.querySelectorAll('nav > ul > li').forEach(function (li) {
    var a = li.querySelector('a');
    if (a && a.getAttribute('href') === product.href) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  });

  /* 2. Breadcrumb product link */
  var bcProduct = document.getElementById('bc-product');
  if (bcProduct) {
    bcProduct.textContent = product.name;
    bcProduct.setAttribute('href', product.href);
  }

  /* 3. CTA "전체 보기" back link */
  var ctaBack = document.getElementById('cta-back');
  if (ctaBack) {
    ctaBack.textContent = product.ctaLabel;
    ctaBack.setAttribute('href', product.href);
  }

  /* 4. Modal logo text */
  var modalLogo = document.querySelector('.modal-logo');
  if (modalLogo) {
    modalLogo.textContent = product.name;
  }

  /* 5. Modal sub-description */
  var modalDesc = document.querySelector('.modal-header > p');
  if (modalDesc) {
    modalDesc.innerHTML = product.modalDesc;
  }

  /* 6. Document title */
  document.title = document.title.replace(/재무ERP|재무ERPLite|산학ERP/, product.name);
})();
