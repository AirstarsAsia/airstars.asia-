const fs = require('fs');
const https = require('https');
const path = require('path');

// Get free API key from https://www.pexels.com/api/
const PEXELS_API_KEY = 'YOUR_API_KEY_HERE';

const searches = [
  { query: 'network security', filename: 'network-security.jpg' },
  { query: 'wireless technology', filename: 'wireless-tech.jpg' },
  { query: 'server room', filename: 'server-room.jpg' },
  { query: 'business technology', filename: 'business-tech.jpg' },
  { query: 'cybersecurity', filename: 'cybersecurity.jpg' },
  { query: 'data center', filename: 'data-center.jpg' },
  { query: 'office technology', filename: 'office-tech.jpg' },
  { query: 'computer network', filename: 'computer-network.jpg' },
  { query: 'it support', filename: 'it-support.jpg' }
];

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join('public', filename));
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', reject);
  });
}

async function searchAndDownload(query, filename) {
  const options = {
    hostname: 'api.pexels.com',
    path: `/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
    headers: {
      'Authorization': PEXELS_API_KEY
    }
  };

  return new Promise((resolve, reject) => {
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', async () => {
        try {
          const result = JSON.parse(data);
          if (result.photos && result.photos.length > 0) {
            const imageUrl = result.photos[0].src.large;
            await downloadImage(imageUrl, filename);
          }
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

async function downloadAll() {
  console.log('Starting image downloads...');
  
  for (const search of searches) {
    try {
      await searchAndDownload(search.query, search.filename);
      // Rate limit: wait 1 second between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Error downloading ${search.filename}:`, error.message);
    }
  }
  
  console.log('All downloads complete!');
}

// Uncomment and add your API key to run
// downloadAll();