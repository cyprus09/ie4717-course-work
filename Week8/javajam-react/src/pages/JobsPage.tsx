import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/Navbar";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must not exceed 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  startDate: z
    .string()
    .refine(date => new Date(date) > new Date(), {
      message: "Start date must be in the future",
    })
    .optional()
    .or(z.literal("")),
  experience: z.string().min(10, "Please provide more details about your experience"),
});

type FormData = z.infer<typeof schema>;

const JobsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log("Form submitted:", data);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="bg-[#F3E8D3] min-h-screen font-sans text-[#4A362A]">
      <Card className="max-w-6xl mx-auto shadow-lg my-8 bg-white border border-[#B08D57]">
        <Link to="/HomePage">
          <CardHeader className="bg-[#8C4B23] text-white rounded-t-md">
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

          {submitSuccess && (
            <Alert className="mb-4 bg-green-100 border-green-400 text-green-700">
              <AlertDescription>Application submitted successfully!</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="name">*Name:</Label>
              <Input {...register("name")} id="name" placeholder="Enter your name here" className="mt-1" />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <Label htmlFor="email">*E-mail:</Label>
              <Input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Enter your Email-ID here"
                className="mt-1"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <Label htmlFor="start-date">Start Date:</Label>
              <Input {...register("startDate")} id="start-date" type="date" className="mt-1" />
              {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>}
            </div>

            <div>
              <Label htmlFor="experience">*Experience:</Label>
              <Textarea
                {...register("experience")}
                id="experience"
                placeholder="Enter your past experience here"
                className="mt-1"
              />
              {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
            </div>

            <div className="flex space-x-4">
              <Button type="button" variant="outline" onClick={() => reset()}>
                Clear
              </Button>
              <Button type="submit" className="bg-[#F1D1B5] text-[#4A362A] hover:bg-[#E4A16B]">
                Apply Now
              </Button>
            </div>
          </form>
        </CardContent>

        <CardFooter className="bg-[#8C4B23] text-white text-center py-4 rounded-b-md">
          <div className="w-full">
            <p className="mb-2">Copyright © 2024 JavaJam Coffee House</p>
            <Button variant="link" className="text-white hover:text-[#F1D1B5] p-0 h-auto">
              mayank@pallai.com
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default JobsPage;
