-- A medical center employs several doctors
-- A doctors can see many patients
-- A patient can be seen by many doctors
-- During a visit, a patient may be diagnosed to have one or more diseases.


CREATE TABLE medical_centers
(
  id SERIAL PRIMARY KEY,
  center_name TEXT NOT NULL,
  address TEXT NOT NULL,
  phone_number TEXT NOT NULL
);

CREATE TABLE doctors
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  specialty TEXT,
  address TEXT NOT NULL,
  phone_number TEXT NOT NULL
);

CREATE TABLE patients
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone_number TEXT NOT NULL
);

CREATE TABLE diseases
(
  id SERIAL PRIMARY KEY,
  disease_name TEXT NOT NULL,
  severity INTEGER,
  description TEXT
);

CREATE TABLE center_employee
(
  id SERIAL PRIMARY KEY,
  center_id INTEGER REFERENCES medical_centers(id),
  employee_id INTEGER REFERENCES doctors(id)
);

CREATE TABLE doctor_patients
(
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id),
  doctor_id INTEGER REFERENCES doctors(id)
);

CREATE TABLE patient_diseases
(
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id),
  disease_id INTEGER REFERENCES diseases(id)
);
