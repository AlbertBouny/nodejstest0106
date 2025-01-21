import os
import time
import requests
from pathlib import Path

ACCESS_KEY = "YOUR_UNSPLASH_ACCESS_KEY"

image_config = {
    "home": {
        "hero": {
            "query": "chinese traditional temple architecture",
            "filename": "public/images/home/hero-bg.jpg"
        },
        "services_preview": {
            "query": "chinese meditation zen garden",
            "filename": "public/images/home/services-preview.jpg"
        },
        "team": [
            {
                "query": "asian senior master meditation",
                "filename": "public/images/team/master_1.jpg"
            },
            {
                "query": "chinese traditional medicine doctor",
                "filename": "public/images/team/master_2.jpg"
            },
            {
                "query": "feng shui master consultation",
                "filename": "public/images/team/master_3.jpg"
            }
        ]
    },
    "auth": {
        "login": {
            "query": "chinese ink painting landscape peaceful",
            "filename": "public/images/auth/login-bg.jpg"
        },
        "signup": {
            "query": "chinese calligraphy art meditation",
            "filename": "public/images/auth/signup-bg.jpg"
        }
    },
    "services": {
        "tools": [
            {
                "query": "chinese fortune telling tools",
                "filename": "public/images/services/tools/bazi-calc.jpg"
            },
            {
                "query": "chinese name calligraphy art",
                "filename": "public/images/services/tools/name-analysis.jpg"
            },
            {
                "query": "chinese zodiac fortune telling",
                "filename": "public/images/services/tools/daily-fortune.jpg"
            }
        ],
        "cases": [
            {
                "query": "feng shui home transformation",
                "filename": "public/images/services/cases/fengshui-case-1.jpg"
            },
            {
                "query": "chinese traditional office design",
                "filename": "public/images/services/cases/fengshui-case-2.jpg"
            }
        ]
    },
    "pricing": {
        "hero": {
            "query": "zen garden meditation stone",
            "filename": "public/images/pricing/hero.jpg"
        },
        "tiers": [
            {
                "query": "chinese meditation beginner peaceful",
                "filename": "public/images/pricing/starter.jpg"
            },
            {
                "query": "taichi practice in nature",
                "filename": "public/images/pricing/professional.jpg"
            },
            {
                "query": "chinese master teaching meditation",
                "filename": "public/images/pricing/master.jpg"
            }
        ]
    }
}

def download_image(query, filename):
    try:
        # Create directory if it doesn't exist
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        
        # Construct the Unsplash API URL
        url = f"https://api.unsplash.com/photos/random?query={query}&orientation=landscape"
        headers = {"Authorization": f"Client-ID {ACCESS_KEY}"}
        
        # Get image URL from Unsplash
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            print(f"Error getting image URL for {query}: {response.status_code}")
            return
        
        image_url = response.json()["urls"]["regular"]
        
        # Download the image
        image_response = requests.get(image_url)
        if image_response.status_code != 200:
            print(f"Error downloading image for {query}: {image_response.status_code}")
            return
        
        # Save the image
        with open(filename, "wb") as f:
            f.write(image_response.content)
        
        print(f"Successfully downloaded: {filename}")
        
    except Exception as e:
        print(f"Error downloading {query}: {str(e)}")

def download_all_images():
    for category, items in image_config.items():
        for item_name, item_data in items.items():
            if isinstance(item_data, list):
                for item in item_data:
                    download_image(item["query"], item["filename"])
                    time.sleep(1)  # Rate limiting
            else:
                download_image(item_data["query"], item_data["filename"])
                time.sleep(1)  # Rate limiting

if __name__ == "__main__":
    download_all_images() 