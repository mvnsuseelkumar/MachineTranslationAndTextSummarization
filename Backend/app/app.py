# Importing The Required Libraries
from flask import Flask, request, jsonify
from flask_cors import CORS
from models.machinetranslation import translate_text
from models.textsummarization import summarize_text


# Creating Flask App
app = Flask(__name__)
CORS(app)

# Creating The Routes

@app.route("/")
def running():
    return jsonify("🚈📍Server Is Running")


# Translating the text
@app.route("/translate", methods=["POST"])
def translate():
    data = request.get_json()
    text = data.get("text")
    src_lang = data.get("src_lang", "eng_Latn")  # default English
    tgt_lang = data.get("tgt_lang", "hin_Deva")  # default Hindi

    translated_text = translate_text(text, src_lang=src_lang, tgt_lang=tgt_lang)
    return jsonify(translated_text)


# Summarizing The text
@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.get_json()
    text = data.get("text")
    model_size = data.get("model_size", "small")  # default to small CPU-friendly model
    max_length = int(data.get("max_length")) if data.get("max_length") else None
    min_length = int(data.get("min_length")) if data.get("min_length") else None

    summarized_text = summarize_text(
        text,
        model_size=model_size,
        max_length=max_length,
        min_length=min_length
    )
    return jsonify(summarized_text)


# Running The App
if __name__ == "__main__":
    app.run(debug=True)
