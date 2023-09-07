import React, { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { getAllTags } from "../../../services/foodService";
import TagsMealsList from "../../../components/TagsMealsList/TagsMealsList";

export default function TagsPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (user && user.isAdmin) {
      getAllTags()
        .then((data) => {
          setTags(data);
        })
        .catch((error) => {
          console.error("Error fetching tags:", error);
        });
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  const { filteredTags } = tags.filter((tag) => tag.name !== "All");

  return (
    <>
      <TagsMealsList tags={tags} />
    </>
  );
}
