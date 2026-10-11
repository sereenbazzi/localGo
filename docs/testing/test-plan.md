# LocalGo Test Plan

## 1. Features to Test

Testing will cover the main LocalGo features:

- Authentication and role-based access
- DMC experience listings
- Search and filtering
- Availability
- Bookings
- Reviews
- Admin moderation
- AI Trip Planner


## 2. Testing Types

### Unit Testing

Used to test individual functions and business logic.

**Tool:** Jest

### API Testing

APIs will be tested manually and automatically.

Testing will include:

- Successful requests
- Invalid requests
- Authentication
- Authorization
- Input validation
- Response status codes
- Response data

**Manual API Testing:** Postman  
**Automated API Testing:** Supertest


### End-to-End Testing

Used to test complete user flows through the application.

Main flows include:

- DMC manages experiences
- DMC manages availability
- Agency searches for experiences
- Agency checks availability
- Agency creates and tracks bookings
- Agency submits reviews
- Admin performs moderation

**Tool:** Playwright


### AI Testing

Used to test the AI Trip Planner.

Testing will include:

- Real LocalGo listings
- Correct dates
- Availability
- Budget
- Group requirements
- Hallucination checks
- Tool-call correctness
- Prompt-injection scenarios

At least 50 AI evaluation cases will be created.

The LLM will be mocked in CI where required.


## 3. Test Cases

Test cases will be written before implementing the corresponding feature.

Each test case will contain:

- Test Case ID
- Related Requirement
- Preconditions
- Test Steps
- Expected Result
- Status

Status:

- NOT YET IMPLEMENTED
- IMPLEMENTED

Example IDs:

- TC-AUTH-001
- TC-LIST-001
- TC-SEARCH-001
- TC-AVAIL-001
- TC-BOOK-001
- TC-REV-001
- TC-ADMIN-001
- TC-AI-001


## 4. Test Environment

| Area | Technology |
|---|---|
| Frontend | React + Vite + TypeScript |
| Backend | Node.js + Express |
| Database | PostgreSQL |
| Unit Tests | Jest |
| API Tests | Supertest |
| E2E Tests | Playwright |
| CI | GitHub Actions |


## 5. Continuous Integration

GitHub Actions will run the required automated tests.

Pull Requests must not be merged into the main branch when required
CI checks are failing.


## 6. Test Documentation

The project testing documentation will include:

- Test Plan
- Test Cases
- Automated Unit Tests
- Automated API Tests
- Automated E2E Tests
- AI Evaluation Dataset
- AI Evaluation Report
- Final Test Report

