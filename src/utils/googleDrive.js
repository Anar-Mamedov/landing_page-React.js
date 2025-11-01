/**
 * Google Drive API ile CV dosyasını fetch eden fonksiyon
 * Klasördeki ilk dosyayı alır (her zaman tek dosya olacağı varsayılır)
 */
export const fetchCVFromGoogleDrive = async () => {
  const API_KEY = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;
  const FOLDER_ID = process.env.REACT_APP_GOOGLE_DRIVE_FOLDER_ID;

  // Eğer API key veya folder ID yoksa, fallback URL döndür
  if (!API_KEY || !FOLDER_ID) {
    console.warn('Google Drive API credentials not found. Using local CV.');
    return process.env.PUBLIC_URL + '/pdfs/cv_new.pdf';
  }

  try {
    // Google Drive API'den klasördeki dosyaları al
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType,webViewLink,webContentLink)&orderBy=modifiedTime desc`
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();

    // Klasörde dosya var mı kontrol et
    if (data.files && data.files.length > 0) {
      const file = data.files[0]; // İlk dosyayı al (en son güncelleneni)

      // PDF dosyası için embedded preview linki oluştur (daha güvenilir)
      const viewUrl = `https://drive.google.com/file/d/${file.id}/preview`;

      console.log('CV loaded from Google Drive:', file.name);
      return viewUrl;
    } else {
      console.warn('No files found in the folder. Using local CV.');
      return process.env.PUBLIC_URL + '/pdfs/cv_new.pdf';
    }
  } catch (error) {
    console.error('Error fetching CV from Google Drive:', error);
    // Hata durumunda local CV'yi kullan
    return process.env.PUBLIC_URL + '/pdfs/cv_new.pdf';
  }
};
