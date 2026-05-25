<?php
header('Content-Type: application/json');

$dir = 'images/';
$images = [];

// Pastikan folder ada
if (is_dir($dir)) {
    $files = scandir($dir);
    foreach ($files as $file) {
        // Abaikan file . dan ..
        if ($file !== '.' && $file !== '..') {
            $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
            // Cek apakah file adalah gambar
            if (in_array($ext, ['jpg', 'jpeg', 'png', 'gif', 'webp'])) {
                $images[] = $dir . $file; // Masukkan format path "images/namafile.jpg"
            }
        }
    }
}

// Kirim data dalam bentuk JSON agar dibaca JavaScript
echo json_encode($images);
?>