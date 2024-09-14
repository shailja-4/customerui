

document.addEventListener("DOMContentLoaded", () => {
  

  let apiUrl = 'https://fakestoreapi.com/products/1'; 
  
  
  fetch(apiUrl)
      .then(response => response.json())
      .then(product1 => {

        
         
          let productHtml = `
          
              <img src="${product1.image}" alt="${product1.title}">
              <h1>${product1.title}</h1>
              <p><strong>Price:</strong> $${product1.price}</p>
              <p><strong>Category:</strong> ${product1.category}</p>
               <a href="p1.html?productId=1">see more</a>


          `;

          
          document.getElementById('product1').innerHTML = productHtml;
      })
      .catch(error => {
          console.error('Error fetching product:', error);
          document.getElementById('product1').innerHTML = '<p>Error loading product details.</p>';
      });
});

document.addEventListener("DOMContentLoaded", () => {
    
    
    let apiUrl = 'https://fakestoreapi.com/products/2'; 
    
   
    fetch(apiUrl)
        .then(response => response.json())
        .then(product2 => {

           
            
            let productHtml = `
                <img src="${product2.image}" alt="${product2.title}">
                <h1>${product2.title}</h1>
                <p><strong>Price:</strong> $${product2.price}</p>
                <p><strong>Category:</strong> ${product2.category}</p>
               <a href="p1.html?productId=2">see more</a>
  
            `;
  
           
            document.getElementById('product2').innerHTML = productHtml;
        })
        .catch(error => {
            console.error('Error fetching product:', error);
            document.getElementById('product2').innerHTML = '<p>Error loading product details.</p>';
        });
  });

  



  document.addEventListener("DOMContentLoaded", () => {
   
   
    let apiUrl = 'https://fakestoreapi.com/products/3'; 
    
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(product3 => {

            
           
            let productHtml = `
             
                <img src="${product3.image}" alt="${product3.title}">
                <h1>${product3.title}</h1>
                <p><strong>Price:</strong> $${product3.price}</p>
                <p><strong>Category:</strong> ${product3.category}</p>
                <a href="p1.html?productId=3">see more</a>
  
  
            `;
  
            
            document.getElementById('product3').innerHTML = productHtml;
        })
        .catch(error => {
            console.error('Error fetching product:', error);
            document.getElementById('product3').innerHTML = '<p>Error loading product details.</p>';
        });
  });
  


  
  document.addEventListener("DOMContentLoaded", () => {
    
   
    let apiUrl = 'https://fakestoreapi.com/products/4'; 
    
   
    fetch(apiUrl)
        .then(response => response.json())
        .then(product4 => {

            
            
            let productHtml = `
                <img src="${product4.image}" alt="${product4.title}">
                <h1>${product4.title}</h1>
                <p><strong>Price:</strong> $${product4.price}</p>
                <p><strong>Category:</strong> ${product4.category}</p>
                <a href="p1.html?productId=4">see more</a>
  
  
            `;
  
            
            document.getElementById('product4').innerHTML = productHtml;
        })
        .catch(error => {
            console.error('Error fetching product:', error);
            document.getElementById('product4').innerHTML = '<p>Error loading product details.</p>';
        });
  });





  document.addEventListener("DOMContentLoaded", () => {
  

    let apiUrl = 'https://fakestoreapi.com/products/5'; 
    
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(product5 => {
  
          
           
            let productHtml = `
                <img src="${product5.image}" alt="${product5.title}">
                <h1>${product5.title}</h1>
                <p><strong>Price:</strong> $${product5.price}</p>
                <p><strong>Category:</strong> ${product5.category}</p>
                <a href="p1.html?productId=5">see more</a>
  
  
            `;
  
            
            document.getElementById('product5').innerHTML = productHtml;
        })
        .catch(error => {
            console.error('Error fetching product:', error);
            document.getElementById('product5').innerHTML = '<p>Error loading product details.</p>';
        });
  });
  






  document.addEventListener("DOMContentLoaded", () => {
      
      
      let apiUrl = 'https://fakestoreapi.com/products/6'; 
      
     
      fetch(apiUrl)
          .then(response => response.json())
          .then(product6 => {
  
             
              
              let productHtml = `
                  <img src="${product6.image}" alt="${product6.title}">
                  <h1>${product6.title}</h1>
                  <p><strong>Price:</strong> $${product6.price}</p>
                  <p><strong>Category:</strong> ${product6.category}</p>
                  <a href="p1.html?productId=6">see more</a>
    
              `;
    
             
              document.getElementById('product6').innerHTML = productHtml;
          })
          .catch(error => {
              console.error('Error fetching product:', error);
              document.getElementById('product6').innerHTML = '<p>Error loading product details.</p>';
          });
    });









  
    
  
  
  
    document.addEventListener("DOMContentLoaded", () => {
     
     
      let apiUrl = 'https://fakestoreapi.com/products/7'; 
      
      
      fetch(apiUrl)
          .then(response => response.json())
          .then(product7 => {
  
              
             
              let productHtml = `
                  <img src="${product7.image}" alt="${product7.title}">
                  <h2>${product7.title}</h2>
                  <p><strong>Price:</strong> $${product7.price}</p>
                  <p><strong>Category:</strong> ${product7.category}</p>
                  <a href="p1.html?productId=7">see more</a>
    
    
              `;
    
              
              document.getElementById('product7').innerHTML = productHtml;
          })
          .catch(error => {
              console.error('Error fetching product:', error);
              document.getElementById('product7').innerHTML = '<p>Error loading product details.</p>';
          });
    });
    
  


    document.addEventListener("DOMContentLoaded", () => {
      
     
      let apiUrl = 'https://fakestoreapi.com/products/8'; 
      
     
      fetch(apiUrl)
          .then(response => response.json())
          .then(product8 => {
  
              
              
              let productHtml = `
                  <img src="${product8.image}" alt="${product8.title}">
                  <h1>${product8.title}</h1>
                  <p><strong>Price:</strong> $${product8.price}</p>
                  <p><strong>Category:</strong> ${product8.category}</p>
                  <a href="p1.html?productId=8">see more</a>
    
    
              `;
    
              
              document.getElementById('product8').innerHTML = productHtml;
          })
          .catch(error => {
              console.error('Error fetching product:', error);
              document.getElementById('product8').innerHTML = '<p>Error loading product details.</p>';
          });
    });
  



    document.addEventListener("DOMContentLoaded", () => {
      
     
        let apiUrl = 'https://fakestoreapi.com/products/9'; 
        
       
        fetch(apiUrl)
            .then(response => response.json())
            .then(product9 => {
    
                
                
                let productHtml = `
                    <img src="${product9.image}" alt="${product9.title}">
                    <h1>${product9.title}</h1>
                    <p><strong>Price:</strong> $${product9.price}</p>
                    <p><strong>Category:</strong> ${product9.category}</p>
                    <a href="p1.html?productId=9">see more</a>
      
      
                `;
      
                
                document.getElementById('product9').innerHTML = productHtml;
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                document.getElementById('product9').innerHTML = '<p>Error loading product details.</p>';
            });
      });


      document.addEventListener("DOMContentLoaded", () => {
      
     
        let apiUrl = 'https://fakestoreapi.com/products/10'; 
        
       
        fetch(apiUrl)
            .then(response => response.json())
            .then(product10 => {
    
                
                
                let productHtml = `
                    <img src="${product10.image}" alt="${product10.title}">
                    <h1>${product10.title}</h1>
                    <p><strong>Price:</strong> $${product10.price}</p>
                    <p><strong>Category:</strong> ${product10.category}</p>
                    <a href="p1.html?productId=10">see more</a>
      
      
                `;
      
                
                document.getElementById('product10').innerHTML = productHtml;
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                document.getElementById('product10').innerHTML = '<p>Error loading product details.</p>';
            });
      });
    
  
  
  
    

document.addEventListener("DOMContentLoaded", () => {
  

    let apiUrl = 'https://fakestoreapi.com/products/11'; 
    
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(product11 => {
  
          
           
            let productHtml = `
            
                <img src="${product11.image}" alt="${product11.title}">
                <h1>${product11.title}</h1>
                <p><strong>Price:</strong> $${product11.price}</p>
                <p><strong>Category:</strong> ${product11.category}</p>
                 <a href="p1.html?productId=11">see more</a>
  
  
            `;
  
            
            document.getElementById('product11').innerHTML = productHtml;
        })
        .catch(error => {
            console.error('Error fetching product:', error);
            document.getElementById('product11').innerHTML = '<p>Error loading product details.</p>';
        });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
      
      
      let apiUrl = 'https://fakestoreapi.com/products/12'; 
      
     
      fetch(apiUrl)
          .then(response => response.json())
          .then(product12 => {
  
             
              
              let productHtml = `
                  <img src="${product12.image}" alt="${product12.title}">
                  <h1>${product12.title}</h1>
                  <p><strong>Price:</strong> $${product12.price}</p>
                  <p><strong>Category:</strong> ${product12.category}</p>
                 <a href="p1.html?productId=12">see more</a>
    
              `;
    
             
              document.getElementById('product12').innerHTML = productHtml;
          })
          .catch(error => {
              console.error('Error fetching product:', error);
              document.getElementById('product12').innerHTML = '<p>Error loading product details.</p>';
          });
    });
  
    
  
  
  
    document.addEventListener("DOMContentLoaded", () => {
     
     
      let apiUrl = 'https://fakestoreapi.com/products/13'; 
      
      
      fetch(apiUrl)
          .then(response => response.json())
          .then(product13 => {
  
              
             
              let productHtml = `
               
                  <img src="${product13.image}" alt="${product13.title}">
                  <h1>${product13.title}</h1>
                  <p><strong>Price:</strong> $${product13.price}</p>
                  <p><strong>Category:</strong> ${product13.category}</p>
                  <a href="p1.html?productId=13">see more</a>
    
    
              `;
    
              
              document.getElementById('product13').innerHTML = productHtml;
          })
          .catch(error => {
              console.error('Error fetching product:', error);
              document.getElementById('product13').innerHTML = '<p>Error loading product details.</p>';
          });
    });
    
  
  
    
    document.addEventListener("DOMContentLoaded", () => {
      
     
      let apiUrl = 'https://fakestoreapi.com/products/14'; 
      
     
      fetch(apiUrl)
          .then(response => response.json())
          .then(product14 => {
  
              
              
              let productHtml = `
                  <img src="${product14.image}" alt="${product14.title}">
                  <h1>${product14.title}</h1>
                  <p><strong>Price:</strong> $${product14.price}</p>
                  <p><strong>Category:</strong> ${product14.category}</p>
                  <a href="p1.html?productId=14">see more</a>
    
    
              `;
    
              
              document.getElementById('product14').innerHTML = productHtml;
          })
          .catch(error => {
              console.error('Error fetching product:', error);
              document.getElementById('product14').innerHTML = '<p>Error loading product details.</p>';
          });
    });
  
  
  
  
  
    document.addEventListener("DOMContentLoaded", () => {
    
  
      let apiUrl = 'https://fakestoreapi.com/products/15'; 
      
      
      fetch(apiUrl)
          .then(response => response.json())
          .then(product15 => {
    
            
             
              let productHtml = `
                  <img src="${product15.image}" alt="${product15.title}">
                  <h1>${product15.title}</h1>
                  <p><strong>Price:</strong> $${product15.price}</p>
                  <p><strong>Category:</strong> ${product15.category}</p>
                  <a href="p1.html?productId=15">see more</a>
    
    
              `;
    
              
              document.getElementById('product15').innerHTML = productHtml;
          })
          .catch(error => {
              console.error('Error fetching product:', error);
              document.getElementById('product15').innerHTML = '<p>Error loading product details.</p>';
          });
    });
    
  
  
  
  
  
  
    document.addEventListener("DOMContentLoaded", () => {
        
        
        let apiUrl = 'https://fakestoreapi.com/products/16'; 
        
       
        fetch(apiUrl)
            .then(response => response.json())
            .then(product16 => {
    
               
                
                let productHtml = `
                    <img src="${product16.image}" alt="${product16.title}">
                    <h1>${product16.title}</h1>
                    <p><strong>Price:</strong> $${product16.price}</p>
                    <p><strong>Category:</strong> ${product16.category}</p>
                    <a href="p1.html?productId=16">see more</a>
      
                `;
      
               
                document.getElementById('product16').innerHTML = productHtml;
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                document.getElementById('product16').innerHTML = '<p>Error loading product details.</p>';
            });
      });
  
  
  
  
  
  
  
  
  
    
      
    
    
    
      document.addEventListener("DOMContentLoaded", () => {
       
       
        let apiUrl = 'https://fakestoreapi.com/products/17'; 
        
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(product17 => {
    
                
               
                let productHtml = `
                    <img src="${product17.image}" alt="${product17.title}">
                    <h2>${product17.title}</h2>
                    <p><strong>Price:</strong> $${product17.price}</p>
                    <p><strong>Category:</strong> ${product17.category}</p>
                    <a href="p1.html?productId=17">see more</a>
      
      
                `;
      
                
                document.getElementById('product17').innerHTML = productHtml;
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                document.getElementById('product17').innerHTML = '<p>Error loading product details.</p>';
            });
      });
      
    
  
  
      document.addEventListener("DOMContentLoaded", () => {
        
       
        let apiUrl = 'https://fakestoreapi.com/products/18'; 
        
       
        fetch(apiUrl)
            .then(response => response.json())
            .then(product18 => {
    
                
                
                let productHtml = `
                    <img src="${product18.image}" alt="${product18.title}">
                    <h1>${product18.title}</h1>
                    <p><strong>Price:</strong> $${product18.price}</p>
                    <p><strong>Category:</strong> ${product18.category}</p>
                    <a href="p1.html?productId=18">see more</a>
      
      
                `;
      
                
                document.getElementById('product18').innerHTML = productHtml;
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                document.getElementById('product18').innerHTML = '<p>Error loading product details.</p>';
            });
      });
    
  
  
  
      document.addEventListener("DOMContentLoaded", () => {
        
       
          let apiUrl = 'https://fakestoreapi.com/products/19'; 
          
         
          fetch(apiUrl)
              .then(response => response.json())
              .then(product19 => {
      
                  
                  
                  let productHtml = `
                      <img src="${product19.image}" alt="${product19.title}">
                      <h1>${product19.title}</h1>
                      <p><strong>Price:</strong> $${product19.price}</p>
                      <p><strong>Category:</strong> ${product19.category}</p>
                      <a href="p1.html?productId=19">see more</a>
        
        
                  `;
        
                  
                  document.getElementById('product19').innerHTML = productHtml;
              })
              .catch(error => {
                  console.error('Error fetching product:', error);
                  document.getElementById('product19').innerHTML = '<p>Error loading product details.</p>';
              });
        });
  
  
        document.addEventListener("DOMContentLoaded", () => {
        
       
          let apiUrl = 'https://fakestoreapi.com/products/20'; 
          
         
          fetch(apiUrl)
              .then(response => response.json())
              .then(product20 => {
      
                  
                  
                  let productHtml = `
                      <img src="${product20.image}" alt="${product20.title}">
                      <h1>${product20.title}</h1>
                      <p><strong>Price:</strong> $${product20.price}</p>
                      <p><strong>Category:</strong> ${product20.category}</p>
                      <a href="p1.html?productId=20">see more</a>
        
        
                  `;
        
                  
                  document.getElementById('product20').innerHTML = productHtml;
              })
              .catch(error => {
                  console.error('Error fetching product:', error);
                  document.getElementById('product20').innerHTML = '<p>Error loading product details.</p>';
              });
        });
      
    
    
    
      
      
    
    
    
      
    
  
  
  
    