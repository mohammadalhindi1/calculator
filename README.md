# 🧮 Calculator

A modern, professional calculator built with vanilla HTML, CSS, and JavaScript. Clean interface with smooth animations and responsive design for all devices.

## ✨ Features

- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Decimal Support**: Full support for decimal numbers
- **Keyboard Support**: Use your keyboard for faster input
  - `0-9`: Enter numbers
  - `+ - * /`: Operators
  - `Enter` or `=`: Calculate result
  - `Backspace`: Delete last digit
  - `Escape`: Clear all
- **Error Handling**: Prevents invalid operations (e.g., division by zero)
- **Modern UI**: Beautiful gradient background with smooth animations
- **Responsive Design**: Perfectly adapts to mobile, tablet, and desktop screens
- **Accessibility**: Color-coded buttons for easy identification
- **Professional Styling**: CSS variables and clean code organization

## 🎨 Design Highlights

- **Gradient Background**: Eye-catching purple gradient
- **Smooth Animations**: Slide-in effect on load and hover effects on buttons
- **Color-Coded Buttons**:
  - 🔵 **Blue**: Operations (+, -, ×, ÷)
  - 🟢 **Green**: Equal (=)
  - 🔴 **Red**: Clear (C)
  - 🟠 **Orange**: Delete (DEL)
  - ⚪ **Light Gray**: Numbers
- **Shadow Effects**: Professional depth and elevation
- **Mobile Optimized**: Responsive breakpoints for all screen sizes

## 🚀 Getting Started

### Quick Start
1. Clone this repository:
   ```bash
   git clone https://github.com/mohammadalhindi1/calculator.git
   cd calculator
   ```

2. Open `index.html` in your web browser
   ```bash
   open index.html
   # or simply double-click the file
   ```

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No dependencies or server required
- Works offline

## 📱 Usage

### Mouse
- Click any button to perform an operation
- See results update in the display field

### Keyboard
| Key | Action |
|-----|--------|
| `0-9` | Enter numbers |
| `+` `-` `*` `/` | Basic operations |
| `Enter` or `=` | Calculate result |
| `.` | Add decimal point |
| `Backspace` | Delete last digit |
| `Escape` | Clear calculator |

### Examples
- **Addition**: `5 + 3 = 8`
- **Multiplication**: `12 × 7 = 84`
- **Division**: `100 ÷ 4 = 25`
- **Decimals**: `3.5 + 2.1 = 5.6`

## 📁 File Structure

```
calculator/
├── index.html      # HTML markup and structure
├── styles.css      # Professional CSS styling
├── script.js       # JavaScript logic and event handling
└── README.md       # This file
```

### index.html
- Semantic HTML5 structure
- Clean button layout with 4x4 grid
- Accessible attributes and labels

### styles.css
- CSS variables for easy customization
- Responsive design with media queries
- Professional animations and transitions
- Gradient effects and shadows

### script.js
- Object-based state management
- Error handling and validation
- Keyboard event listeners
- Floating-point precision correction

## 🎯 Keyboard Shortcuts

**Pro Tip**: Use keyboard shortcuts for faster calculations!

```
Numbers:       0-9
Operations:    + - * /
Calculate:     Enter or =
Delete:        Backspace
Clear All:     Escape
Decimal:       .
```

## 💻 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full Support |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Edge | ✅ Full Support |
| IE 11 | ❌ Not Supported |

## 🎨 Customization

Want to change the colors? Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;      /* Main color */
    --secondary-color: #764ba2;    /* Gradient color */
    --success-color: #51cf66;      /* Equals button */
    --danger-color: #ff6b6b;       /* Clear button */
    --warning-color: #ffa502;      /* Delete button */
}
```

## 🐛 Known Issues

- None at the moment! Please report any bugs you find.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

## 👨‍💻 Author

**Mohammad Alhindi**

## 📞 Support

If you have any questions or need help, feel free to open an issue on GitHub.

---

**Made with ❤️ by Mohammad Alhindi**

⭐ If you find this useful, please consider giving it a star!