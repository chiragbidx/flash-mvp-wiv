import { render, screen } from "@testing-library/react";
import Overview from "@/components/dashboard/Overview";

describe("Dashboard Overview", () => {
  it("renders all four widgets", () => {
    render(<Overview />);
    expect(screen.getByText(/Active Users/i)).toBeInTheDocument();
    expect(screen.getByText(/Revenue/i)).toBeInTheDocument();
    expect(screen.getByText(/Tasks Completed/i)).toBeInTheDocument();
    expect(screen.getByText(/Enquiries/i)).toBeInTheDocument();
  });
});