# CiviTrack Repository Management Instructions

This document provides step-by-step instructions for managing the CiviTrack repository, including deleting the existing repository and creating a new one with main and dev branches.

## 1. Backup Current Repository

Before deleting the existing repository, ensure you have a complete local backup:

```bash
# Clone the repository if you don't have it locally
git clone https://github.com/your-username/existing-civitrack-repo.git civitrack-backup

# Ensure all branches are fetched
cd civitrack-backup
git fetch --all
```

## 2. Delete Existing Repository

1. Go to your GitHub account and navigate to the repository
2. Click on "Settings" (tab at the top of the repository page)
3. Scroll down to the "Danger Zone" section
4. Click on "Delete this repository"
5. Follow the confirmation steps (type the repository name)

## 3. Create New Repository

1. Click the "+" icon in the top-right corner of GitHub
2. Select "New repository"
3. Enter repository details:
   - Name: `civitrack`
   - Description: "CiviTrack - A civic issue tracking platform"
   - Visibility: Choose public or private as needed
   - Initialize with a README: No
4. Click "Create repository"

## 4. Set Up Local Repository with Main and Dev Branches

```bash
# Navigate to your project directory
cd d:/coding_projects/civiTrack

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit"

# Rename the default branch to main
git branch -M main

# Add the remote repository
git remote add origin https://github.com/your-username/civitrack.git

# Push to the main branch
git push -u origin main

# Create and switch to dev branch
git checkout -b dev

# Push dev branch to remote
git push -u origin dev
```

## 5. Branch Protection Rules

Set up branch protection rules in GitHub:

1. Go to repository "Settings"
2. Click on "Branches" in the left sidebar
3. Under "Branch protection rules", click "Add rule"
4. For the "main" branch:
   - Branch name pattern: `main`
   - Check "Require pull request reviews before merging"
   - Check "Require status checks to pass before merging"
   - Click "Create"
5. Repeat for the "dev" branch with less strict rules if desired

## 6. Workflow Guidelines

### Development Workflow

1. **Feature Development**:
   ```bash
   # Create feature branch from dev
   git checkout dev
   git pull
   git checkout -b feature/your-feature-name
   
   # Make changes and commit
   git add .
   git commit -m "Implement feature X"
   
   # Push feature branch
   git push -u origin feature/your-feature-name
   ```

2. **Create Pull Request**:
   - Go to GitHub repository
   - Click "Pull requests" > "New pull request"
   - Set base branch to `dev` and compare branch to your feature branch
   - Fill in PR details and create

3. **Merge to Dev**:
   - After review and approval, merge the PR into `dev`
   - Delete the feature branch

### Production Deployment

1. **Release to Production**:
   ```bash
   # Create release branch from dev
   git checkout dev
   git pull
   git checkout -b release/v1.x.x
   
   # Make any final adjustments
   git add .
   git commit -m "Prepare release v1.x.x"
   
   # Push release branch
   git push -u origin release/v1.x.x
   ```

2. **Create Pull Request to Main**:
   - Create PR from release branch to `main`
   - After thorough testing and approval, merge to `main`

3. **Tag Release**:
   ```bash
   git checkout main
   git pull
   git tag -a v1.x.x -m "Release v1.x.x"
   git push origin v1.x.x
   ```

## 7. Keeping Branches in Sync

```bash
# Update dev with changes from main (if needed)
git checkout dev
git merge main
git push origin dev

# Update feature branch with latest dev changes
git checkout feature/your-feature-name
git merge dev
git push origin feature/your-feature-name
```

## 8. Troubleshooting

- **Merge Conflicts**: Resolve conflicts locally before pushing
- **Accidental Commits to Main**: Revert the commit and create a proper PR
- **Lost Changes**: Use `git reflog` to find and recover lost commits