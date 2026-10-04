# LocalGo Software Requirements

## 1. Introduction

### 1.1 Purpose

LocalGo is a tours and activities marketplace that connects
Destination Management Companies (DMCs) with travel agencies.

DMCs provide and manage local travel experiences such as tours,
transfers, and guides.

Travel agencies use LocalGo to discover these experiences,
check or request availability, and book services for their clients.

LocalGo also includes an AI Trip Planner that creates multi-day
travel plans using listings available on the platform.


### 1.2 User Roles

LocalGo has three main user roles:

- DMC
- Agency
- Admin


---

## 2. Scope

LocalGo includes:

- User authentication and role-based access.
- Experience listing management.
- Experience search and filtering.
- Availability management.
- Booking management and booking status flow.
- Reviews.
- Admin moderation.
- AI-assisted trip planning.


---

## 3. Functional Requirements

### 3.1 Authentication and Authorization

**FR-AUTH-001**  
The system shall allow supported users to authenticate to LocalGo.

**FR-AUTH-002**  
The system shall distinguish between DMC, Agency, and Admin users.

**FR-AUTH-003**  
The system shall restrict protected functionality to authenticated users.

**FR-AUTH-004**  
The system shall restrict role-specific functionality according to
the authenticated user's role.


### 3.2 Experience Listings

**FR-LIST-001**  
The system shall allow an authenticated DMC to create an experience listing.

**FR-LIST-002**  
The system shall allow a DMC to view its own listings.

**FR-LIST-003**  
The system shall allow a DMC to manage its own listings.

**FR-LIST-004**  
The system shall prevent a DMC from managing listings owned by another DMC.

**FR-LIST-005**  
The system shall allow Agencies to view marketplace listings.


### 3.3 Search and Filtering

**FR-SEARCH-001**  
The system shall allow an Agency to search for experiences.

**FR-SEARCH-002**  
The system shall allow an Agency to filter available experiences
using relevant search criteria.

**FR-SEARCH-003**  
The system shall display listings matching the Agency's search criteria.


### 3.4 Availability

**FR-AVAIL-001**  
The system shall allow a DMC to manage availability for its experiences.

**FR-AVAIL-002**  
The system shall associate availability information with the
corresponding experience.

**FR-AVAIL-003**  
The system shall allow an Agency to check or request availability
for an experience.


### 3.5 Bookings

**FR-BOOK-001**  
The system shall allow an Agency to initiate a booking for an experience.

**FR-BOOK-002**  
The system shall associate a booking with the relevant Agency,
DMC, and experience.

**FR-BOOK-003**  
The system shall maintain the current status of a booking.

**FR-BOOK-004**  
The system shall allow authorized users to view bookings relevant
to them.

**FR-BOOK-005**  
The system shall support the defined booking status workflow.


### 3.6 Reviews

**FR-REV-001**  
The system shall support reviews for marketplace experiences.

**FR-REV-002**  
The system shall associate a review with the relevant experience
or booking according to the defined review rules.


### 3.7 Admin Moderation

**FR-ADMIN-001**  
The system shall provide marketplace moderation functionality
for Admin users.

**FR-ADMIN-002**  
The system shall restrict moderation functionality to authorized
Admin users.


### 3.8 AI Trip Planner

**FR-AI-001**  
The system shall provide an AI Trip Planner.

**FR-AI-002**  
The AI Trip Planner shall create multi-day travel plans using
LocalGo listings.

**FR-AI-003**  
The AI Trip Planner shall consider the user's requested dates.

**FR-AI-004**  
The AI Trip Planner shall consider the user's budget.

**FR-AI-005**  
The AI Trip Planner shall consider the user's group requirements.

**FR-AI-006**  
The AI Trip Planner shall check relevant availability through
LocalGo functionality.

**FR-AI-007**  
The AI Trip Planner shall use tool calling to retrieve relevant
LocalGo information.

**FR-AI-008**  
The AI Trip Planner shall not present nonexistent LocalGo listings
as real LocalGo experiences.


---

## 4. Non-Functional Requirements

### 4.1 Security

**NFR-SEC-001**  
Protected functionality shall require authentication.

**NFR-SEC-002**  
Role-based authorization shall be enforced for protected operations.

**NFR-SEC-003**  
Passwords shall not be stored as plain text.

**NFR-SEC-004**  
Application secrets and credentials shall not be committed to
the public repository.

**NFR-SEC-005**  
User input shall be validated before processing.


### 4.2 Usability

**NFR-USA-001**  
The application shall provide understandable feedback for successful
and failed operations.

**NFR-USA-002**  
Forms shall provide understandable validation feedback for invalid input.


### 4.3 Reliability

**NFR-REL-001**  
Invalid requests shall be handled without causing the application
to crash.

**NFR-REL-002**  
Application errors shall be handled consistently.


### 4.4 Maintainability

**NFR-MAIN-001**  
The application shall use TypeScript.

**NFR-MAIN-002**  
The codebase shall be organized into clear and maintainable components.

**NFR-MAIN-003**  
Project documentation shall be maintained with the application.


### 4.5 Accessibility

**NFR-ACC-001**  
Important user flows shall be checked for basic accessibility.


---

## 5. Business Rules

**BR-001**  
LocalGo has three primary user roles: DMC, Agency, and Admin.

**BR-002**  
DMCs provide and manage marketplace experiences.

**BR-003**  
Agencies use marketplace experiences for their clients.

**BR-004**  
Admin users are responsible for marketplace moderation.

**BR-005**  
The AI Trip Planner must use LocalGo platform listings when presenting
experiences as LocalGo experiences.


---

## 6. Technical Constraints

The project shall use the following technologies:

- TypeScript
- React with Vite
- Node.js
- Express
- PostgreSQL
- Playwright
- Jest
- GitHub Actions

The project shall be maintained in a public GitHub repository.


