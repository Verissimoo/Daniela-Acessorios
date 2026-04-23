export async function baseClient(payload) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true, data: payload }), 150);
  });
}
