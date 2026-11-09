
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  const group=button.dataset.group; const scope=button.closest('section');
  scope.querySelectorAll('.filter').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  scope.querySelectorAll('.card').forEach(card=>card.hidden=group!=='all'&&card.dataset.group!==group);
}));
document.querySelectorAll('[data-print]').forEach(b=>b.addEventListener('click',()=>window.print()));
