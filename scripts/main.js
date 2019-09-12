// This is a factory function. It returns a new object every time.
const doctor = (name, address, type) => ({
    "doctorName": name,
    "speciality": type,
    "address": address
})

const doctorInfo = doctor("Dr. Moon", "100 Infinity Way", "Pediatrician")
> { "speciality": "Pediatrician", "doctorName": "Dr Moon", "address": "100 Infinity Way" }
console.log(doctor);