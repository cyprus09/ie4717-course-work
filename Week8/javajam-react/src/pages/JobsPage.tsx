import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const JobsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startDate: "",
    experience: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateName = (name: string) => /^[a-zA-Z\s]+$/.test(name);
  const validateEmail = (email: string) => /^[\w.-]+@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+){1,3}\.[a-zA-Z]{2,3}$/.test(email);
  const validateStartDate = (startDate: string) => {
    const date = new Date(startDate);
    return date > new Date();
  };

  const validateForm = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, startDate, experience } = formData;
    const newErrors: { [key: string]: string } = {};

    if (!validateName(name)) newErrors.name = "Name can only contain alphabet characters and spaces.";
    if (!validateEmail(email)) newErrors.email = "Please enter a valid email address!";
    if (startDate && !validateStartDate(startDate)) newErrors.startDate = "Start date cannot be today or in the past.";
    if (!experience) newErrors.experience = "Experience is required.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      // Submit the form data
      console.log("Form submitted:", formData);
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        startDate: "",
        experience: "",
      });
      setErrors({});
    }
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#F3E8D3] min-h-screen font-sans text-[#4A362A]">
      <Card className="max-w-6xl mx-auto shadow-lg my-auto bg-white border border-[#B08D57]">
        <Link to="/HomePage">
          <CardHeader className="bg-[#8C4B23] text-white mx-auto my-auto rounded-md">
            <CardTitle className="text-4xl font-bold text-center">JavaJam Coffee House</CardTitle>
            <CardDescription className="text-center text-[#F1D1B5]">Follow the Winding Road to JavaJam</CardDescription>
          </CardHeader>
        </Link>
        <Navbar />

        <CardContent className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Jobs at JavaJam</h1>
          <p className="text-lg text-gray-600 mb-8">
            Want to work at JavaJam? Fill out the form below to start your application. Required fields are marked with
            an asterisk *
          </p>

          <form onSubmit={validateForm}>
            <div className="mb-4">
              <Label htmlFor="name">*Name:</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name here"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <Label htmlFor="email">*E-mail:</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email-ID here"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <Label htmlFor="start-date">Start Date:</Label>
              <Input
                type="date"
                name="startDate"
                id="start-date"
                value={formData.startDate}
                onChange={handleChange}
                className="mt-1"
              />
              {errors.startDate && <p className="text-red-500">{errors.startDate}</p>}
            </div>

            <div className="mb-4">
              <Label htmlFor="experience">*Experience:</Label>
              <Textarea
                name="experience"
                id="experience"
                required
                placeholder="Enter your past experience here"
                value={formData.experience}
                onChange={handleChange}
                className="mt-1"
              />
              {errors.experience && <p className="text-red-500">{errors.experience}</p>}
            </div>

            <div className="flex space-x-4">
              <Button type="reset" variant="outline">
                Clear
              </Button>
              <Button type="submit">Apply Now</Button>
            </div>
          </form>
        </CardContent>

        <CardContent className="bg-[#8C4B23] text-white text-center py-4 mt-8 rounded-md">
          <p className="mb-2">Copyright © 2024 JavaJam Coffee House</p>
          <Button variant="link" className="text-white hover:text-[#F1D1B5] p-0 h-auto">
            mayank@pallai.com
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobsPage;
