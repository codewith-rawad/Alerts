function showSuccess() {
  Swal.fire({
      title: 'Success!',
      text: 'Operation completed successfully.',
      icon: 'success',
      confirmButtonText: 'Great!',
      customClass: {
          popup: 'custom-success-popup', 
          title: 'custom-success-title', 
          confirmButton: 'custom-confirm-button' 
      }
  });
}

function showError() {
  Swal.fire({
      title: 'Error!',
      text: 'An error occurred.',
      icon: 'error',
      confirmButtonText: 'Try again',
      customClass: {
          popup: 'custom-error-popup',
          title: 'custom-error-title',
          confirmButton: 'custom-confirm-button'
      }
  });
}

function showWarning() {
  Swal.fire({
      title: 'Warning!',
      text: 'Be careful with this action.',
      icon: 'warning',
      confirmButtonText: 'Got it',
      customClass: {
          popup: 'custom-warning-popup',
          title: 'custom-warning-title',
          confirmButton: 'custom-confirm-button'
      }
  })
}

function showInfo() {
  Swal.fire({
      title: 'Information',
      text: 'Here is some useful information.',
      icon: 'info',
      confirmButtonText: 'Thanks',
      customClass: {
          popup: 'custom-info-popup',
          title: 'custom-info-title',
          confirmButton: 'custom-confirm-button'
      }
  });
}

function showQuestion() {
  Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to proceed?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      customClass: {
          popup: 'custom-question-popup',
          title: 'custom-question-title',
          confirmButton: 'custom-confirm-button',
          cancelButton: 'custom-cancel-button' 
      }
  });
}
