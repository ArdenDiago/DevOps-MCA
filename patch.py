import re

with open('.github/workflows/Lab2.yaml', 'r') as f:
    content = f.read()

# Change permissions
content = content.replace('contents: read', 'contents: write')

# Replace the steps in build-frontend after Build Frontend
old_steps = """      # Create the directory structure that will be deployed
      - name: Prepare GitHub Pages
        run: |
          mkdir -p ../../pages/Labs/Lab2
          cp -r dist/* ../../pages/Labs/Lab2/

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: pages/"""

new_steps = """      - name: Commit and Push to docs folder
        run: |
          # Go back to the root of the repository
          cd ../../../
          
          # Clean old docs and copy the new build
          rm -rf docs/*
          mkdir -p docs
          cp -r Labs/Lab2/frontend/dist/* docs/
          
          # Configure Git
          git config --global user.name "github-actions[bot]"
          git config --global user.email "github-actions[bot]@users.noreply.github.com"
          
          # Add, commit, and push
          git add docs/
          git commit -m "chore: deploy Lab2 build to docs folder [skip ci]" || echo "No changes to commit"
          git push"""

content = content.replace(old_steps, new_steps)

# Remove the 'deploy' job and its dependencies
# The simplest way is to remove from "  # ==========================================\n  # 3. DEPLOY TO GITHUB PAGES"
# up to "  # 4. SUCCESS MESSAGE"

start_idx = content.find("  # 3. DEPLOY TO GITHUB PAGES")
end_idx = content.find("  # ==========================================\n  # 4. SUCCESS MESSAGE")

if start_idx != -1 and end_idx != -1:
    # also remove the separator above DEPLOY TO GITHUB PAGES
    start_idx = content.rfind("  # ==========================================", 0, start_idx)
    content = content[:start_idx] + content[end_idx:]

# Update done-message needs
content = content.replace("needs: deploy", "needs: build-frontend")
content = content.replace("echo \"Your Lab2 has been deployed to GitHub Pages.\"", "echo \"Your Lab2 has been built and saved to the docs folder.\"")

# Update failure handler needs
content = content.replace("""    needs:
      - test-backend
      - build-frontend
      - deploy""", """    needs:
      - test-backend
      - build-frontend""")

with open('.github/workflows/Lab2.yaml', 'w') as f:
    f.write(content)
