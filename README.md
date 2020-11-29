# WinAppDriver

[Microsoft WinAppDriver](https://github.com/Microsoft/WinAppDriver) is a service to support Selenium-like UI Test Automation on Windows Applications. This service supports testing Universal Windows Platform (UWP), Windows Forms (WinForms), Windows Presentation Foundation (WPF), and Classic Windows (Win32) apps on Windows 10 PCs.
[YWinAppDriver](https://github.com/licanhua/YWinAppDriver) is an open source project which implemented WinAppDriver's functionality, and is developed by Canhua Li

# Installation
npm install winappdriver --save-dev

# How to launch WinAppDriver
npx winappdriver 4727
npx winappdriver 10.0.0.10 4725
npx winappdriver 10.0.0.10 4723/wd/hub

# How to launch YWinAppDriver
npx ywinappdriver --urls http://127.0.0.1:4723 --basepath /wd/hub