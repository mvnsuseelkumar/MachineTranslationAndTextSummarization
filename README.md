# Machine Translation and Text Summarization

A full-stack web application that provides machine translation and text summarization services using state-of-the-art AI models. The application features a React frontend with a Flask backend, offering real-time translation between multiple languages and intelligent text summarization.

## 🌟 Features

### Machine Translation

- **Multi-language Support**: Translate between 200+ languages using Facebook's NLLB-200 model
- **Real-time Translation**: Fast translation with the distilled 600M parameter model
- **Language Detection**: Automatic source language detection
- **Popular Language Pairs**: Pre-configured for common language combinations

### Text Summarization

- **Two Model Options**:
  - **Small Model**: CPU-friendly, fast processing (DistilBART)
  - **Large Model**: High-quality summaries (BART Large)
- **Customizable Length**: Set minimum and maximum summary lengths
- **Intelligent Summarization**: Extractive and abstractive summarization

### User Interface

- **Modern React Frontend**: Built with Vite for fast development
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Processing**: Live translation and summarization
- **User-friendly Interface**: Clean, intuitive design

## 🏗️ Project Structure

```
MachineTranslationAndTextSummarization/
├── Backend/                    # Flask API Server
│   ├── app/
│   │   └── app.py             # Main Flask application
│   ├── models/
│   │   ├── machinetranslation.py    # Translation logic
│   │   └── textsummarization.py     # Summarization logic
│   └── venv/                  # Python virtual environment
├── Frontend/                   # React Application
│   ├── src/
│   │   ├── pages/             # React components
│   │   ├── api/               # API client
│   │   └── App.jsx            # Main app component
│   └── package.json           # Node.js dependencies
└── README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites

- **Python 3.8+** (for backend)
- **Node.js 16+** (for frontend)
- **Git** (for cloning the repository)

### Installation & Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/mvnsuseelkumar/MachineTranslationAndTextSummarization.git
cd MachineTranslationAndTextSummarization
```

#### 2. Backend Setup (Flask API)

```bash
# Navigate to backend directory
cd Backend

# Create virtual environment (if not exists)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python app/app.py
```

The backend will be available at `http://127.0.0.1:5000`

#### 3. Frontend Setup (React App)

```bash
# Open a new terminal and navigate to frontend directory
cd Frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 📋 API Endpoints

### Translation Endpoint

- **URL**: `POST /translate`
- **Request Body**:
  ```json
  {
    "text": "Hello, how are you?",
    "src_lang": "eng_Latn",
    "tgt_lang": "hin_Deva"
  }
  ```
- **Response**: Translated text

### Summarization Endpoint

- **URL**: `POST /summarize`
- **Request Body**:
  ```json
  {
    "text": "Your long text here...",
    "model_size": "small",
    "max_length": 150,
    "min_length": 50
  }
  ```
- **Response**: Summarized text

## 🌍 Supported Languages

The translation system supports 200+ languages. Here are some popular language codes:

| Language | Code       | Language   | Code       |
| -------- | ---------- | ---------- | ---------- |
| English  | `eng_Latn` | Hindi      | `hin_Deva` |
| Spanish  | `spa_Latn` | French     | `fra_Latn` |
| German   | `deu_Latn` | Chinese    | `zho_Hans` |
| Arabic   | `arb_Arab` | Japanese   | `jpn_Jpan` |
| Russian  | `rus_Cyrl` | Portuguese | `por_Latn` |

## 🔧 Configuration

### Backend Configuration

- **Model Loading**: Models are loaded once at startup for optimal performance
- **CORS**: Enabled for frontend-backend communication
- **Debug Mode**: Enabled for development

### Frontend Configuration

- **API Base URL**: `http://127.0.0.1:5000` (configurable in `src/api/client.js`)
- **Development Server**: Vite dev server with hot reload

## 📦 Dependencies

### Backend Dependencies

- **Flask**: Web framework
- **Flask-CORS**: Cross-origin resource sharing
- **Transformers**: Hugging Face transformers library
- **Torch**: PyTorch for model inference
- **NumPy**: Numerical computing

### Frontend Dependencies

- **React**: UI library
- **React Router**: Client-side routing
- **Axios**: HTTP client
- **Vite**: Build tool and dev server

## 🛠️ Development

### Running in Development Mode

1. **Start Backend**:

   ```bash
   cd Backend
   venv\Scripts\activate  # Windows
   # source venv/bin/activate  # macOS/Linux
   python app/app.py
   ```

2. **Start Frontend** (in a new terminal):
   ```bash
   cd Frontend
   npm run dev
   ```

### Building for Production

1. **Build Frontend**:

   ```bash
   cd Frontend
   npm run build
   ```

2. **Deploy Backend**:
   ```bash
   cd Backend
   # Deactivate debug mode in app.py
   python app/app.py
   ```

## 🚨 Troubleshooting

### Common Issues

1. **Model Download Issues**:

   - Ensure stable internet connection for initial model download
   - Models are cached after first download

2. **Memory Issues**:

   - Use the "small" model for summarization if experiencing memory issues
   - Close other applications to free up RAM

3. **CORS Errors**:

   - Ensure backend is running on `http://127.0.0.1:5000`
   - Check that Flask-CORS is properly installed

4. **Port Conflicts**:
   - Backend runs on port 5000
   - Frontend runs on port 5173
   - Change ports if conflicts occur

### Performance Tips

- **First Run**: Initial model loading may take 2-3 minutes
- **Subsequent Runs**: Models are cached for faster startup
- **Memory Usage**: Large model requires ~4GB RAM
- **CPU Usage**: Small model is optimized for CPU inference

## 📊 Model Information

### Translation Model

- **Model**: `facebook/nllb-200-distilled-600M`
- **Parameters**: 600M
- **Languages**: 200+
- **Performance**: Optimized for CPU inference

### Summarization Models

- **Small**: `sshleifer/distilbart-cnn-12-6` (CPU-friendly)
- **Large**: `facebook/bart-large-cnn` (High-quality)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Facebook AI Research** for the NLLB-200 model
- **Hugging Face** for the Transformers library
- **React Team** for the excellent frontend framework
- **Flask Team** for the lightweight web framework

## 📞 Support

For issues and questions:

1. Check the troubleshooting section
2. Review the API documentation
3. Open an issue on GitHub

---

**Happy Translating and Summarizing! 🚀**
