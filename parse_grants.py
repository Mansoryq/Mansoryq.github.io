from PyPDF2 import PdfReader
import re
import json

PDF_PATH = '/Users/abylajturganbekov/Desktop/СПИСОК ОБЛАДАТЕЛЕЙ ГРАНТОВ 2025.pdf'

reader = PdfReader(PDF_PATH)
total = len(reader.pages)
print(f"Total pages: {total}")

print("Extracting text...")
all_text = ""
for i in range(total):
    all_text += reader.pages[i].extract_text() + "\n"
    if (i + 1) % 200 == 0:
        print(f"  ...page {i+1}/{total}")

print(f"Total text length: {len(all_text)} chars")

sections = re.split(r'([A-Z]\d{3})\s*[-\u2013]\s*', all_text)

results = {}
for i in range(1, len(sections) - 1, 2):
    code = sections[i]
    content = sections[i + 1]
    
    name_match = re.match(r'(.+?)(?:\n|$)', content.strip())
    name = name_match.group(1).strip() if name_match else "Unknown"
    
    scores = re.findall(r'\b(\d{2,3})\s+\d{3}\s*\n', content)
    int_scores = [int(s) for s in scores if 50 <= int(s) <= 140]
    
    if int_scores:
        if code not in results:
            results[code] = {
                'name': name,
                'min_score': min(int_scores),
                'max_score': max(int_scores),
                'count': len(int_scores)
            }
        else:
            results[code]['min_score'] = min(results[code]['min_score'], min(int_scores))
            results[code]['max_score'] = max(results[code]['max_score'], max(int_scores))
            results[code]['count'] += len(int_scores)

print(f"\nParsed {len(results)} specialties with scores\n")

for code in sorted(results.keys()):
    r = results[code]
    print(f"  {code} {r['name'][:55]:55s} | Min: {r['min_score']:3d} | Max: {r['max_score']:3d} | Grants: {r['count']}")

with open('grant_data_2025.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
print(f"\nSaved to grant_data_2025.json")
