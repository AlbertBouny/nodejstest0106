import os
import requests
import time

API_KEY = "48167373-9ff0aa78c7b8c9b5e2d35799f"
BASE_URL = "https://pixabay.com/api/"

def download_image(url, save_path):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            with open(save_path, 'wb') as f:
                f.write(response.content)
            print(f"Downloaded: {save_path}")
            return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
    return False

def search_images(query, category, page=1):
    params = {
        'key': API_KEY,
        'q': query,
        'image_type': 'photo',
        'orientation': 'horizontal',
        'category': category,
        'per_page': 6,
        'page': page
    }
    
    response = requests.get(BASE_URL, params=params)
    return response.json()

def download_category_images(category_name, search_terms, base_path):
    os.makedirs(base_path, exist_ok=True)
    
    for term in search_terms:
        results = search_images(term, category_name)
        if 'hits' in results:
            for idx, img in enumerate(results['hits']):
                file_name = f"{term.replace(' ', '_')}_{idx+1}.jpg"
                save_path = os.path.join(base_path, file_name)
                download_image(img['largeImageURL'], save_path)
                time.sleep(0.5)  # Respect rate limits

def main():
    # Culture related images
    culture_terms = {
        'history': ['chinese temple', 'taoist temple', 'ancient chinese architecture'],
        'concepts': ['yin yang symbol', 'chinese philosophy', 'taoist meditation'],
        'schools': ['taoist monastery', 'chinese monastery', 'temple architecture'],
        'deities': ['chinese deity statue', 'temple statue', 'buddha statue'],
        'influence': ['chinese calligraphy', 'chinese painting', 'chinese garden'],
        'ethics': ['meditation nature', 'zen garden', 'peaceful landscape']
    }
    
    for section, terms in culture_terms.items():
        download_category_images('religion', terms, f'public/images/culture/{section}')
    
    # Arts related images
    arts_terms = {
        'ziwei': ['star chart', 'constellation map', 'night sky'],
        'bazi': ['chinese calendar', 'chinese zodiac', 'feng shui elements'],
        'fengshui': ['feng shui compass', 'chinese courtyard', 'balanced garden'],
        'compatibility': ['chinese wedding', 'traditional ceremony', 'harmony symbol'],
        'naming': ['chinese calligraphy art', 'ink brush writing', 'chinese characters'],
        'dream': ['peaceful sleep', 'dream concept', 'night moon']
    }
    
    for section, terms in arts_terms.items():
        download_category_images('arts', terms, f'public/images/arts/{section}')
    
    # Services related images
    services_terms = {
        'tools': ['digital tools', 'online calculator', 'modern technology'],
        'consultation': ['professional consultation', 'expert advice', 'business meeting'],
        'cases': ['success story', 'case study', 'achievement']
    }
    
    for section, terms in services_terms.items():
        download_category_images('business', terms, f'public/images/services/{section}')

if __name__ == "__main__":
    main() 