import streamlit as st
import tempfile
import os
import google.generativeai as genai

from dotenv import load_dotenv

load_dotenv()

# Configure Google API key
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=GOOGLE_API_KEY)

def transcribe_audio(audio_file_path):
    model = genai.GenerativeModel("models/gemini-1.5-pro-latest")
    audio_file = genai.upload_file(path=audio_file_path)
    response = model.generate_content(
        [
            "Transcribe the following audio as a conversation between a dispatcher and a caller. Mark the dialogues as dispatcher and caller. Write nothing else.",
            audio_file
        ]
    )
    return response.text

def analyze_performance(transcription):
    model = genai.GenerativeModel("models/gemini-1.5-pro-latest")
    response = model.generate_content(
        [
            "Analyze the transcription of a dispatcher call and provide a performance analysis. Include the following details(only mention the score out of 10 for all these parameters): Overall Call Score, Professionalism, Responsiveness, Clarity, Engagement, Ability to Help and Resolve Emergency Score. Write exaclty what the victim asked for help for. Write about the emotional and mental state of caller. Provide actionable insights that the dispatcher should take. Now write a small Conclusion, Key Insights, and Follow-up Plan. Put everything under proper headings.",
            transcription
        ]
    )
    return response.text

def save_uploaded_file(uploaded_file):
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix='.' + uploaded_file.name.split('.')[-1]) as tmp_file:
            tmp_file.write(uploaded_file.getvalue())
            return tmp_file.name
    except Exception as e:
        st.error(f"Error handling uploaded file: {e}")
        return None

# Streamlit app interface
st.title('Dispatch Call Analyzer')

# Initialize session state for transcription and performance analysis
if "transcription" not in st.session_state:
    st.session_state["transcription"] = None

if "performance" not in st.session_state:
    st.session_state["performance"] = None

audio_file = st.file_uploader("Upload Audio File", type=['wav', 'mp3'])
if audio_file is not None:
    audio_path = save_uploaded_file(audio_file)  # Save the uploaded file and get the path
    st.audio(audio_path)

    if st.button('Process Call'):
        with st.spinner('Processing audio...'):
            st.session_state["transcription"] = transcribe_audio(audio_path)
            st.session_state["performance"] = analyze_performance(st.session_state["transcription"])

# Add toggle buttons for switching between panes
if st.session_state["transcription"] and st.session_state["performance"]:
    pane = st.radio("Choose an output view:", ("Transcription", "Performance Analysis"))

    if pane == "Transcription":
        st.subheader("Transcription Pane")
        st.markdown(st.session_state["transcription"], unsafe_allow_html=True)

    elif pane == "Performance Analysis":
        st.subheader("Performance Analysis Pane")
        st.markdown(st.session_state["performance"], unsafe_allow_html=True)
