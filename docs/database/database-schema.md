# LocalGo Database Schema

## 1. Overview

LocalGo uses a relational database to manage users, experiences,
availability, bookings, and reviews.

The main entities are:

- Users
- Listings
- Availability
- Bookings
- Reviews


## 2. Users

Stores all LocalGo users.

| Field | Description |
|---|---|
| id | Unique user identifier |
| email | User email |
| password_hash | Hashed password |
| role | DMC, AGENCY, or ADMIN |
| created_at | Account creation date |

### Rules

- Email must be unique.
- Passwords are stored as hashes, not plain text.
- Each user has one role.


## 3. Listings

Stores experiences created by DMC users.

| Field | Description |
|---|---|
| id | Unique listing identifier |
| dmc_id | DMC user who owns the listing |
| title | Experience title |
| description | Experience description |
| location | Experience location |
| type | Experience type |
| price | Experience price |
| created_at | Creation date |
| updated_at | Last update date |

### Relationship

- One DMC can create many listings.
- Each listing belongs to one DMC.


## 4. Availability

Stores the dates and capacity available for each listing.

| Field | Description |
|---|---|
| id | Unique availability identifier |
| listing_id | Related listing |
| date | Available date |
| capacity | Available capacity |

### Relationship

- One listing can have many availability records.
- Each availability record belongs to one listing.


## 5. Bookings

Stores bookings created by Agencies.

| Field | Description |
|---|---|
| id | Unique booking identifier |
| listing_id | Booked listing |
| agency_id | Agency that created the booking |
| booking_date | Requested date |
| group_size | Number of travelers |
| status | Current booking status |
| created_at | Booking creation date |

### Booking Statuses

- REQUESTED
- CONFIRMED
- REJECTED
- COMPLETED
- CANCELLED

### Relationships

- One Agency can create many bookings.
- One listing can have many bookings.
- Each booking belongs to one Agency and one listing.


## 6. Reviews

Stores reviews submitted after completed bookings.

| Field | Description |
|---|---|
| id | Unique review identifier |
| booking_id | Related booking |
| rating | Rating given by the Agency |
| comment | Review comment |
| created_at | Review creation date |

### Rules

- A review is associated with a booking.
- A review can be created after the booking is completed.
- One booking can have one review.


## 7. Entity Relationships

DMC User
    |
    | creates
    v
Listing
    |
    +------< Availability
    |
    +------< Booking >------ Agency User
                |
                v
              Review


## 8. Simplified Business Flow

1. A DMC creates a listing.
2. The DMC defines available dates and capacity.
3. An Agency searches for listings.
4. The Agency checks availability.
5. The Agency creates a booking.
6. The booking starts as REQUESTED.
7. The DMC confirms or rejects the booking.
8. A confirmed booking can eventually become COMPLETED.
9. A completed booking can receive a review.