lines = input();

ds = ['M' + l for l in lines.split('M') if l is not '']

for d in ds:
  print('<path d="' + d + '" />')
