#  MCC — Medical Care Companion
**Your AI-powered digital health assistant for daily wellness, hydration, and chronic care management.**  
Built with **AWS Bedrock (Claude Sonnet 4.5)**, **Lambda**, **DynamoDB**, **S3**, and **React**.

---

## 🌟 Overview
MCC (Medical Care Companion) is an **AI health assistant** designed to support people managing chronic conditions by providing:
- Empathetic, conversational care between doctor visits  
-  Smart reminders via Amazon SNS (e.g., “Drink water every 2 hours”)  
-  Vital & mood tracking stored securely in DynamoDB and S3  
-  Bedrock AI reasoning powered by **Claude Sonnet 4.5**  
-  A serverless AWS architecture built for scalability and privacy  

---

##  Features
- **Personalized AI Conversations** – Natural, doctor-like dialogue  
- **Hydration & Medication Reminders** – Automated via AWS SNS  
- **Secure Health Logging** – Stored safely in DynamoDB  
- **Cloud-Native Architecture** – Fully serverless on AWS  
- **React Frontend** – Clean chat UI with sound effects and animation  

---

## Architecture
**Tech Stack**
| Layer | Service / Tool | Purpose |
|-------|----------------|----------|
| AI Engine | Amazon Bedrock (Claude 4.5) | Natural health dialogue |
| Backend | AWS Lambda (Python) | Handles AI + SNS logic |
| Database | DynamoDB | Stores user vitals & chat history |
| Storage | Amazon S3 | Saves conversation logs |
| API | Amazon API Gateway | Secure REST endpoint |
| Notifications | Amazon SNS | Health reminders |
| Frontend | React.js | Chat interface |
| Monitoring | CloudWatch | Logs & performance |

---

## Inspiration
The idea came from the gap between **clinical care** and **daily self-management**.  
Many patients forget reminders or feel isolated while managing chronic conditions like hypertension or diabetes.  
MCC bridges that gap — giving users a **friendly digital companion** that reminds, listens, and records their care journey.

---

## How It Works
1. The user types:  
   > “MCC, remind me to take my meds at 8PM.”  
2. API Gateway triggers a **Lambda function** → connects to **Bedrock (Claude Sonnet 4.5)**.  
3. The AI generates a compassionate response and logs it in **DynamoDB**.  
4. If it’s a reminder, **SNS** sends an email/SMS notification.  
5. The **React UI** displays MCC’s warm, human-like messages in real time.  

---

##  Built With
- **Frontend:** React.js, Axios, HTML, CSS  
- **Backend:** Python (AWS Lambda), API Gateway  
- **AI:** Amazon Bedrock — Claude Sonnet 4.5  
- **Database:** DynamoDB  
- **Storage:** Amazon S3  
- **Notifications:** SNS  
- **Monitoring:** CloudWatch  

---

## Setup & Run Locally

### Clone
```bash
git clone https://github.com/CarolineNkan/MCC-HealthCompanion.git
cd MCC-HealthCompanion
