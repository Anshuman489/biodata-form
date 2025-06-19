import React from "react";

export default function BiodataForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      fullname: event.target.fullName.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      dob: event.target.dob.value,
      gender: event.target.gender.value,
      addressline1: event.target.address1.value,
      addressline2: event.target.address2.value,
      city: event.target.city.value,
      state: event.target.state.value,
      zip: event.target.zip.value,
      country: event.target.country.value,
      highestDegree: event.target.degree.value,
      university: event.target.university.value,
      graduationYear: Number(event.target.gradYear.value),
      occupation: event.target.occupation.value,
      company: event.target.company.value,
      experienceYears: Number(event.target.exp.value),
      skills: event.target.skills.value,
      hobbies: event.target.hobbies.value,
      bio: event.target.bio.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/userbiodata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        alert("Form submitted successfully!");
      } else {
        const err = await response.json();
        console.error(err);
        alert(err.message);
      }
    } catch (error) {
      console.error("Network / server down:", err);
      alert("Server unreachable. Please try later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700 p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Biodata Form</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 1 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Full Name</label>
              <input
                name="fullName"
                type="text"
                placeholder="Enter full name"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 2 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter email"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 3 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Phone</label>
              <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 4 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Date of Birth</label>
              <input
                name="dob"
                type="date"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 5 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Gender</label>
              <select
                name="gender"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            {/* 6 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Address Line 1</label>
              <input
                name="address1"
                type="text"
                placeholder="Street / P.O. Box"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 7 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Address Line 2</label>
              <input
                name="address2"
                type="text"
                placeholder="Apartment / Suite"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 8 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">City</label>
              <input
                name="city"
                type="text"
                placeholder="City"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 9 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">State / Province</label>
              <input
                name="state"
                type="text"
                placeholder="State"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 10 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">ZIP / Postal Code</label>
              <input
                name="zip"
                type="text"
                placeholder="ZIP code"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 11 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Country</label>
              <input
                name="country"
                type="text"
                placeholder="Country"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 12 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Highest Qualification</label>
              <input
                name="degree"
                type="text"
                placeholder="Degree"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 13 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">University / College</label>
              <input
                name="university"
                type="text"
                placeholder="Institution"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 14 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Graduation Year</label>
              <input
                name="gradYear"
                type="number"
                placeholder="YYYY"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 15 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Occupation</label>
              <input
                name="occupation"
                type="text"
                placeholder="Job title"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 16 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Company</label>
              <input
                name="company"
                type="text"
                placeholder="Company name"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 17 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Years of Experience</label>
              <input
                name="exp"
                type="number"
                placeholder="e.g., 3"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 18 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Key Skills</label>
              <input
                name="skills"
                type="text"
                placeholder="e.g., React, Node"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 19 */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Hobbies / Interests</label>
              <input
                name="hobbies"
                type="text"
                placeholder="e.g., Reading"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 20 */}
            <div className="flex flex-col md:col-span-2">
              <label className="font-medium mb-1">Short Bio</label>
              <textarea
                name="bio"
                rows="3"
                placeholder="Tell us about yourself"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
