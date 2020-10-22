async function deleteFormHandler(event) {
    event.preventDefault();
    //getting the id from url link
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

      const response = await fetch('/api/posts', {
        method: 'DELETE',
        body: JSON.stringify({
          post_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);