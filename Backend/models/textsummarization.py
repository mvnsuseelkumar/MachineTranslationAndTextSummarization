from transformers import pipeline

# Pre-load both models for faster repeated use
_models = {
    "small": pipeline("summarization", model="sshleifer/distilbart-cnn-12-6"),
    "large": pipeline("summarization", model="facebook/bart-large-cnn")
}

def summarize_text(text, model_size="small", max_length=None, min_length=None):
    """
    Summarizes the given text using the specified model size.
    
    Args:
        text (str): The text to summarize.
        model_size (str): "small" (CPU-friendly) or "large" (high-quality).
        max_length (int): Maximum length of the summary.
        min_length (int): Minimum length of the summary.
    
    Returns:
        str: The generated summary.
    """
    if model_size not in _models:
        raise ValueError("model_size must be 'small' or 'large'")

    # Set default lengths if not provided
    if max_length is None:
        max_length = 130 if model_size == "small" else 150
    if min_length is None:
        min_length = 30 if model_size == "small" else 50

    summarizer = _models[model_size]
    summary = summarizer(text, max_length=max_length, min_length=min_length, do_sample=False)
    return summary[0]['summary_text']