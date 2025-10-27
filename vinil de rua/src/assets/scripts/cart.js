async function sendCartToServer(cart, userId) {
  try {
    const res = await fetch('/src/backend/save_cart.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, cart })
    });
    return await res.json(); // { success: true, orderId: ... } ou { success:false, error: ... }
  } catch (err) {
    return { success: false, error: err.message };
  }
}