const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = [
  {
    url: 'https://media.licdn.com/dms/image/v2/D4E0BAQEAgTLCPVBoyg/company-logo_100_100/B4EZgOWOnTGwAQ-/0/1752587365169/gofundme_logo?e=1769040000&v=beta&t=fKx_HQ8CB2nkLrlk72zGV07GnKS_W_r54ilF-M8Uhrc',
    filename: 'gofundme.png'
  },
  {
    url: 'https://media.licdn.com/dms/image/v2/C4E0BAQHvnS8F3Y1ADA/company-logo_100_100/company-logo_100_100/0/1673535094879/sessionboard_logo?e=1756339200&v=beta&t=lLaCm1d2GzutjG90mxn21qWSHaWywNgrqty3AJ3-R20',
    filename: 'sessionboard.png'
  },
  {
    url: 'https://media.licdn.com/dms/image/v2/D4E0BAQEGnCEjBM_zsQ/company-logo_100_100/company-logo_100_100/0/1719628140011/distillery_tech_logo?e=1756339200&v=beta&t=m_IVX4IvXchDnOV2Q9LZbmI8p-3xw8bk0uNBI5YHOo4',
    filename: 'distillery.png'
  },
  {
    url: 'https://media.licdn.com/dms/image/v2/D4D0BAQHupr1U3gIQKA/company-logo_100_100/company-logo_100_100/0/1719839010650/globant_logo?e=1756339200&v=beta&t=uXLlvFX8UI8bfkhihllQu4QRc5O5xQybD3MK-zqrfTI',
    filename: 'globant.png'
  },
  {
    url: 'https://media.licdn.com/dms/image/v2/D4D0BAQEzwK95IQOBZg/company-logo_100_100/company-logo_100_100/0/1714144444384/qubikdigital_logo?e=1758758400&v=beta&t=UZrKEuPGcjuhjNsd4e8ijOWXx1sJFGo-h2kM07u_1fE',
    filename: 'qubik.png'
  }
];

const logosDir = path.join(__dirname, '..', 'public', 'logos');

// Create logos directory if it doesn't exist
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
  console.log('Created logos directory');
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${path.basename(filepath)}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function downloadAll() {
  console.log('Starting download of logos...\n');
  
  for (const logo of logos) {
    const filepath = path.join(logosDir, logo.filename);
    try {
      await downloadImage(logo.url, filepath);
    } catch (error) {
      console.error(`Error downloading ${logo.filename}:`, error.message);
    }
  }
  
  console.log('\nAll downloads completed!');
}

downloadAll();

