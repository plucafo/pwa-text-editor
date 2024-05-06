# Just Another Text Editor (JATE)

## Description

Just Another Text Editor (JATE) is a text editor that runs in your web browser. It is built as a progressive web application (PWA) which allows users to install it locally and even use it offline. It uses modern web technologies including IndexedDB for data storage, Service Workers for offline support, and a sleek interface provided by CodeMirror.

## Features

- Code editing in-browser with syntax highlighting.
- Data persistence using IndexedDB to save and retrieve work.
- PWA functionality allows installation on a home screen or desktop.
- Offline functionality supported by Service Workers.

## Installation

To install JATE on your local machine for development and testing purposes, follow the instructions below:

1. Clone the repository:
   ```bash
   git clone https://github.com/plucafo/pwa-text-editor.git
2. Navigate to the project directory
   ```bash
      cd pwa-text-editor
3. Install dependencies
   ```bash
      npm install
4. Build the application
   ```bash
      npm run build
5. Start the server
   ```bash
      npm run start

The application will be available on http://localhost:3000.

## Usage

Once JATE is installed and running, you can open it in a browser via the provided local server URL. The interface provides a simple editor where you can type and edit JavaScript code with syntax highlighting and line numbering. Changes are automatically saved to IndexedDB and persisted across sessions.

### Installing the PWA

To install JATE as a PWA:

- Open the application in your browser.
- Click on the 'Install!' button that appears in the navigation bar to add JATE to your desktop or home screen.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## Contact

[plucaf87@gmail.com](mailto:plucaf87@gmail.com)

[Github Repo](https://github.com/plucafo/pwa-text-editor)