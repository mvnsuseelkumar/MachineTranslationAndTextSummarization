from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

# 1. Load model and tokenizer (only once)
model_name = "facebook/nllb-200-distilled-600M"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

# 2. Translation Function
def translate_text(text, src_lang="eng_Latn", tgt_lang="hin_Deva"):
    """
    Translates text from one language to another using NLLB-200 model.

    Parameters:
        text (str): Input text to translate
        src_lang (str): Source language code (e.g. 'hin_Deva' for Hindi)
        tgt_lang (str): Target language code (e.g. 'eng_Latn' for English)
    
    Returns:
        str: Translated text
    """
    # Set source language for tokenizer
    tokenizer.src_lang = src_lang

    # Tokenize the input text
    inputs = tokenizer(text, return_tensors="pt")

    # Generate translation
    translated_tokens = model.generate(
        **inputs,
        forced_bos_token_id = tokenizer.convert_tokens_to_ids(tgt_lang)
    )

    # Decode to readable text
    translated_text = tokenizer.batch_decode(
        translated_tokens,
        skip_special_tokens=True
    )[0]

    return translated_text

# # 3. Example Translations
# # Hindi → English
# print("Hindi → English:", translate_text("वह स्कूल जा रही है।", "hin_Deva", "eng_Latn"))

# # Telugu → English
# print("Telugu → English:", translate_text("అతను లైబ్రరీకి వెళ్తున్నాడు.", "tel_Telu", "eng_Latn"))

# # English → Hindi
# print("English → Hindi:", translate_text("She is reading a book.", "eng_Latn", "hin_Deva"))
