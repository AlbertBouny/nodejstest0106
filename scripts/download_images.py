import os
import requests
import time
from typing import Dict, List

API_KEY = "48167373-9ff0aa78c7b8c9b5e2d35799f"
BASE_URL = "https://pixabay.com/api/"

def create_directories():
    """Create necessary directories if they don't exist"""
    base_path = "public/images"
    dirs = ["banners", "icons", "gallery", "culture", "arts"]
    for dir_name in dirs:
        dir_path = os.path.join(base_path, dir_name)
        os.makedirs(dir_path, exist_ok=True)

def download_image(url: str, save_path: str):
    """Download an image from URL and save it to the specified path"""
    try:
        response = requests.get(url)
        response.raise_for_status()
        with open(save_path, 'wb') as f:
            f.write(response.content)
        print(f"Downloaded: {save_path}")
        time.sleep(0.5)  # Rate limiting
    except Exception as e:
        print(f"Error downloading {url}: {str(e)}")

def search_images(query: str, category: str = None, image_type: str = "photo", orientation: str = "horizontal", per_page: int = 3) -> Dict:
    """Search for images on Pixabay"""
    params = {
        "key": API_KEY,
        "q": query,
        "image_type": image_type,
        "orientation": orientation,
        "per_page": per_page,
        "safesearch": "true",
    }
    if category:
        params["category"] = category

    response = requests.get(BASE_URL, params=params)
    return response.json()

def download_category_images(category_name: str, search_terms: List[str], output_dir: str):
    """Download images for a specific category"""
    for term in search_terms:
        results = search_images(term)
        if results.get("hits"):
            for i, image in enumerate(results["hits"]):
                file_name = f"{term.replace(' ', '_')}_{i+1}.jpg"
                save_path = os.path.join("public/images", output_dir, file_name)
                download_image(image["largeImageURL"], save_path)

def main():
    create_directories()

    # Download banner images
    banner_terms = ["taoist temple", "yin yang symbol", "chinese meditation"]
    download_category_images("banners", banner_terms, "banners")

    # Download icon images
    icon_terms = ["taoism symbol", "bagua symbol", "chinese calligraphy"]
    download_category_images("icons", icon_terms, "icons")

    # Download gallery images
    gallery_terms = ["chinese temple architecture", "taoist ceremony", "chinese art"]
    download_category_images("gallery", gallery_terms, "gallery")

    # Download culture images
    culture_terms = ["ancient chinese scroll", "taoist priest", "chinese philosophy"]
    download_category_images("culture", culture_terms, "culture")

    # Download arts images
    arts_terms = ["bagua compass", "chinese astrology", "feng shui"]
    download_category_images("arts", arts_terms, "arts")

if __name__ == "__main__":
    main() 