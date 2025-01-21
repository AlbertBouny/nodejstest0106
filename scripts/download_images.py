import os
import time
import requests
from pathlib import Path

ACCESS_KEY = 'cQ9WhLPPcypcngf4kBggdcXtopVjcBtseVl1mVyTKAU'

image_config = {
    'home': {
        'hero-bg': 'chinese traditional temple',
        'services-preview': 'meditation zen',
    },
    'culture': {
        'hero': 'taichi symbol',
        'history': 'ancient chinese architecture',
        'concepts': 'yin yang symbol',
        'schools': 'taoist temple',
        'deities': 'chinese deity statue',
        'influence': 'chinese calligraphy',
        'classics': 'ancient chinese book',
        'learning': 'chinese study room',
        'ethics': 'chinese philosophy ethics meditation',
    },
    'arts': {
        'hero': 'feng shui compass',
        'ziwei': 'night sky stars',
        'bazi': 'chinese calendar traditional',
        'relationship': 'chinese red string fate',
        'compatibility': 'chinese wedding ceremony traditional',
        'fengshui': 'chinese garden traditional',
        'naming': 'chinese calligraphy art',
        'dream': 'moon stars night',
        'consultation': 'meditation zen room',
    },
    'services': {
        'hero': 'feng shui consultation',
        'destiny': 'chinese fortune telling',
        'fengshui': 'feng shui interior',
        'relationship': 'chinese matchmaker temple',
        'tools': 'chinese traditional tools compass',
        'consultation': 'chinese master consultation',
        'cases': 'feng shui transformation before after',
    },
    'pricing': {
        'hero': 'chinese meditation practice',
        'starter': 'zen garden peaceful',
        'professional': 'taoist temple meditation',
        'master': 'chinese master teaching',
    },
    'about': {
        'hero': 'chinese traditional culture',
        'team': 'chinese master teaching group',
        'values': 'taoist philosophy symbols',
        'mission': 'chinese temple sunrise',
    },
}

def download_image(query: str, filename: str):
    try:
        # 创建目录（如果不存在）
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        
        # 搜索图片
        search_url = f'https://api.unsplash.com/search/photos'
        params = {
            'query': query,
            'client_id': ACCESS_KEY,
        }
        response = requests.get(search_url, params=params)
        data = response.json()
        
        if data.get('results') and len(data['results']) > 0:
            # 获取图片URL
            image_url = data['results'][0]['urls']['regular']
            
            # 下载图片
            image_response = requests.get(image_url)
            
            # 保存图片
            with open(filename, 'wb') as f:
                f.write(image_response.content)
            
            print(f'Downloaded: {filename}')
        else:
            print(f'No results found for query: {query}')
            
    except Exception as e:
        print(f'Error downloading {filename}: {str(e)}')

def main():
    # 获取项目根目录
    root_dir = Path(__file__).parent.parent
    
    for category, images in image_config.items():
        for name, query in images.items():
            # 构建文件路径
            filename = root_dir / 'public' / 'images' / category / f'{name}.jpg'
            
            # 下载图片
            download_image(query, str(filename))
            
            # 等待一秒以避免速率限制
            time.sleep(1)

if __name__ == '__main__':
    main() 