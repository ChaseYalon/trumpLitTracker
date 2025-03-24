param(
    [string]$m
)
npx prettier . --write
git add .
git commit -m $m
git push
