// flux-remix/app/routes/_index.tsx
import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/generate-image");
  }, [navigate]);

  return null; // 因为直接跳转，不需要渲染任何内容
}
