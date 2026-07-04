# Nano Banan Web Deployment Automation Script
import os
import subprocess
import sys

def run_command(command, description):
    print(f"\n🚀 {description}...")
    try:
        subprocess.run(command, shell=True, check=True, text=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error: {description} failed.")
        return False

def main():
    print("="*60)
    print("      MOVIE APP REACT NATIVE WEB DEPLOYMENT SCRIPT      ")
    print("="*60)
    
    # Step 1: Install Web Dependencies
    if not run_command("npx expo install react-dom react-native-web @expo/metro-runtime", "Installing web dependencies"):
        sys.exit(1)
        
    # Step 2: Build the Web Production Bundle
    if not run_command("npx expo export -p web", "Building project for Web (creating 'dist' folder)"):
        sys.exit(1)
        
    # Step 3: Deploy to Vercel
    print("\n🌐 Starting Vercel deployment...")
    if os.path.exists("dist"):
        if not run_command("vercel ./dist --prod", "Deploying web production bundle to Vercel"):
            sys.exit(1)
        print("\n🎉 SUCCESS! Your application has been successfully deployed as a website!")
        print("You can copy the link next to the 'Production' line in the terminal and share it with anyone.")
    else:
        print("❌ Error: 'dist' folder not found. Something went wrong during the build process.")

if __name__ == '__main__':
    main()