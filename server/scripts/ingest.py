import cv2
import os
import json
import urcv

from unrest.utils import JsonCache
TYPE = 'sm:spritesheet'

def split_spritesheet(source):
    DEST = '.media/data/spritesheets'
    sprite_data = JsonCache('static/sprite_data.json')
    with open('../client/src/varia/data.json', 'r') as f:
        data = json.loads(f.read())

    for f in os.listdir(source):
        sprite_name = f.split('/')[-1].split('.')[0]
        dest_dir = os.path.join(DEST, sprite_name)
        if os.path.exists(dest_dir):
            pass # continue
        og_path = os.path.join(source, f)
        image = cv2.imread(og_path, cv2.IMREAD_UNCHANGED)
        os.makedirs(dest_dir, exist_ok=True)
        sprite_data[sprite_name] = {
            'folder': dest_dir,
            'folder_url': dest_dir.replace('.media/', '/media/') + '/',
            'type': TYPE,
            'name': sprite_name,
        }
        for region_name, bounds in data['regions'].items():
            x, y, width, height = bounds
            dest_path = os.path.join(dest_dir, region_name) + '.png'
            cv2.imwrite(dest_path, image[y:y+height,x:x+width])

        # copy original
        cv2.imwrite(os.path.join(dest_dir, 'spritesheet.png'), image)

        # copythumbnail
        thumb_path = og_path.replace('/sprite_sheets/', '/samus_sprites/')
        thumbnail = cv2.imread(thumb_path, cv2.IMREAD_UNCHANGED)
        cv2.imwrite(os.path.join(dest_dir, 'thumbnail.png'), thumbnail)
        print('wrote', dest_dir)

if __name__ == '__main__':
    split_spritesheet('../varia_custom_sprites/sprite_sheets/')