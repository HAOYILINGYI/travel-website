function searchPlace() {
  const q = document.getElementById('searchInput').value.trim();
  if (!q) { alert('กรุณากรอกคำค้นหา'); return; }
  const cards = document.querySelectorAll('#cards .card');
  let found = false;
  cards.forEach(c => {
    const match = c.innerText.includes(q);
    c.style.display = match ? '' : 'none';
    if (match) found = true;
  });
  if (!found) alert('ไม่พบสถานที่ที่ตรงกับ "' + q + '"');
}
function submitForm() {
  alert('ขอบคุณที่ติดต่อเรา! ทีมงานจะตอบกลับภายใน 24 ชั่วโมง');
  return false;
}
