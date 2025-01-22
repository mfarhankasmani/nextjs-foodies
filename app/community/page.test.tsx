
import React from "react";
import { render } from "@testing-library/react";
import CommunityPage from "./page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <div {...props} />;
  },
}));

describe("CommunityPage", () => {
  it("renders the header with correct text", () => {
    const { getByText } = render(<CommunityPage />);
    expect(getByText("One shared passion:")).toBeInTheDocument();
    expect(getByText("Food")).toBeInTheDocument();
    expect(
      getByText("Join our community and share your favorite recipes!")
    ).toBeInTheDocument();
  });

  it("renders the main section with correct text", () => {
    const { getByText } = render(<CommunityPage />);
    expect(getByText("Community Perks")).toBeInTheDocument();
    expect(getByText("Share & discover recipes")).toBeInTheDocument();
    expect(
      getByText("Find new friends & like-minded people")
    ).toBeInTheDocument();
    expect(getByText("Participate in exclusive events")).toBeInTheDocument();
  });
});
