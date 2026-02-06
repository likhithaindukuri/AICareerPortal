export async function analyzeATS(resumeText, jobDescription) {
  const response = await fetch("http://localhost:8081/api/ats/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resumeText,
      jobDescription,
    }),
  });

  if (!response.ok) {
    throw new Error("ATS analysis failed");
  }

  return response.json();
}

