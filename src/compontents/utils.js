/*___ Forms Submit Loading */

function submitLoading(isLoading, submitButton, submitDefaultText) {
  if(isLoading) {
    submitButton.textContent = 'Сохранение...';
  } else {
    submitButton.textContent = submitDefaultText;
  }
}

export { submitLoading }
