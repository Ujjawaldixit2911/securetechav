@echo off
title SecureTech AV - Multi Design Runner
echo ==========================================
echo  STARTING ALL 3 HOME PAGE DESIGNS...
echo ==========================================

echo Starting Design 1 (Port 5001)...
start "Design One (Port 5001)" cmd /k "cd design_one && python app.py"

echo Starting Design 2 (Port 5002)...
start "Design Two (Port 5002)" cmd /k "cd design_two && python app.py"

echo Starting Design 3 (Port 5003)...
start "Design Three (Port 5003)" cmd /k "cd design_three && python app.py"

echo Starting Design 4 (Port 5004)...
start "Design Four (Port 5004)" cmd /k "cd design_four && python app.py"

echo Starting Design 5 (Port 5005 - React)...
start "Design Five (Port 5005 - React)" cmd /k "cd design_five && npm run dev"

echo.
echo ==========================================
echo  ALL SERVERS INITIALIZED!
echo  Please open these links in your browser:
echo  1. Design One (Cyberpunk): http://localhost:5001
echo  2. Design Two (Minimalist): http://localhost:5002
echo  3. Design Three (Bento): http://localhost:5003
echo  4. Design Four (3D Switcher): http://localhost:5004
echo  5. Design Five (Corporate React): http://localhost:5005
echo ==========================================
echo.
pause
