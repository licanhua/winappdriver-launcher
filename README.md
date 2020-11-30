[![NPM](https://nodei.co/npm/winappdriver.png)](https://npmjs.org/package/winappdriver)

# WinAppDriver
This is the WinAppDriver and YWinAppDriver launcher. You don't need to remember the full path of WinAppDriver and YWinAppDriver, but launch it easily by `npx winappdriver` or `npx ywinappdriver` 

[Microsoft WinAppDriver](https://github.com/Microsoft/WinAppDriver) is a service to support Selenium-like UI Test Automation on Windows Applications. 

[YWinAppDriver](https://github.com/licanhua/YWinAppDriver) is an open source project which implemented WinAppDriver's functionality, and is developed by Canhua Li


# Installation
npm install winappdriver --save-dev

# How to launch WinAppDriver
```
npx winappdriver
npx winappdriver 4727
npx winappdriver 10.0.0.10 4725
npx winappdriver 10.0.0.10 4723/wd/hub
```
# How to launch YWinAppDriver
```
npx ywinappdriver
npx ywinappdriver --urls http://127.0.0.1:4723 --basepath /wd/hub
```

