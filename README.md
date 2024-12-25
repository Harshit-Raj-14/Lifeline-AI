# LifeLine AI - Emergency Dispatch Call Analyzer AI

**Video Demo  - https://youtu.be/ioTEQsWgA5w?si=IrKra5UmJ2yMOb34**

**Deployed Link - https://lifeline-ai.vercel.app/**

**Dispatcher Analyzer backend - https://lifeline-ai.streamlit.app/**

<hr>

## The Problem We Are Trying to Solve
**_Laerdal Challenge - Emergency Dispatch Conversation/Copilot Al_**

We all know the dispatchers sitting behind those emergency calls play a very important role in providing relief in emergency situations. However, when it comes to new, inexperienced dispatchers, training and reading endless manuals and handbooks just might not work out in real-life emergency scenarios and high-pressure calls with life-death situations. It’s times like these that we all think, *“If only we had a real-time guide in those critical moments!”*

## Our Solution

LifeLine AI helps record those high-stakes emergency calls where quick, decisive actions can save lives. It captures meaningful, deep insights for future review, allowing the dispatcher to analyze their effectiveness in a given situation and identify areas of improvement. The tool highlights their strengths and weaknesses, providing valuable feedback for growth.


## Key Features of LifeLine AI

- **Performance Analyzer**: After each recorded call, LifeLine AI captures and analyzes all aspects of the conversation, providing actionable insights for improvement. Key feedback includes:
  - **Areas for Improvement**: Identifies specific aspects of the dispatcher’s responses that could be improved.
  - **Strengths**: Highlights what the dispatcher did well during the call, reinforcing positive actions.
  - **Self-Reflection**: Provides insights into the dispatcher’s strong and weak points, helping them evaluate their performance.
  - **Caller’s Hidden Emotions**: Analyzes and uncovers the hidden emotions of the caller (victim), offering a deeper understanding of the emotional context.
  - **Scorecards**: Provides detailed scorecards that assess the dispatcher’s performance across different metrics, helping track progress over time.

- **Real-Time Feedback**: Offers continuous feedback during a call or after the conversation, ensuring dispatchers are always learning and improving.

- **Simulation Rehearsals**: Allows new dispatchers to rehearse various high-pressure emergency scenarios in a risk-free environment. This simulated practice helps them gain experience and confidence before handling real-life calls.

- **Training Enhancement**: Provides training sessions and feedback for both new and experienced dispatchers to enhance their performance and ensure evidence-based practices in emergency response.

- **Continuous Improvement**: The system’s feedback loop ensures that dispatchers receive ongoing guidance, fostering skill growth and better decision-making under pressure.

## Simulation Emergency AI caller
Use AI to help generate call based scenarios where the dispatcher gives prompts for a car crash victim or a fire victim etc. The victim call is generated and then the dispatcher responds to the AI generated call. Again the conversation is transcribed and a performance analysis is conducted to give feedback to the dispatcher.

## System Design
![Screenshot 2024-12-25 at 06-27-08 SYSTEM DESIGN - 1920 × 913px](https://github.com/user-attachments/assets/9bc3018a-e864-4f23-8aba-05990bdaab06)

<hr>

## Tech Stack
**React.js, Node.js, Gemini, Python, Streamlit**

## Run the project
**1. Clone/Download this repo.**
```
git clone https://github.com/Harshit-Raj-14/Lifeline-AI.git
```

**2. Run backend part**
```
cd lifeline-ai-backend
```

```
pip install -r requirements.txt
```

**Make a .env file**
```
GOOGLE_API_KEY=your google gemini api key
```

```
streamlit run app.py
```

**3. Run frontend part**
```
cd lifeline-ai-frontend
```
```
npm install
```
```
npm start
```

# PROJECT SNAPS
![Untitled design(1)](https://github.com/user-attachments/assets/ed2be2f7-93cd-425d-b76e-a4685ff1ed3d)

<hr>

![Screenshot 2024-12-24 at 19-46-19 LifeLine AI](https://github.com/user-attachments/assets/139aab53-4894-4f1b-8867-88500553d965)

<hr>

![Screenshot 2024-12-25 at 05-31-40 Streamlit](https://github.com/user-attachments/assets/c8e66063-9759-4e15-b34b-3ee39ce089a2)

<hr>

![340144425-f6304d30-773c-4799-b9a4-2c6ecf2674ab](https://github.com/user-attachments/assets/edee4e65-e670-463f-91f7-669917a25985)

