const BASE_URL: String =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export const fetchData = async (contentType: string) => {
  const response = await fetch(`${BASE_URL}/${contentType}`);
  return await response.json();
};

export const fetchSingle = async (contentType: string, id: any) => {
  const response = await fetch(`${BASE_URL}/${contentType}/${id}`);
  return await response.json();
};

export const postData = async (contentType: string, data: any) => {
  console.log(data);
  const response = await fetch(`${BASE_URL}/${contentType}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const updateData = async (contentType: string, id: any, data: any) => {
  const response = await fetch(`${BASE_URL}/${contentType}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const deleteData = async (contentType: string, id: any) => {
  const response = await fetch(`${BASE_URL}/${contentType}/${id}`, {
    method: "DELETE",
  });

  return await response.json();
};

export const login = async (userData: any) => {
  console.log(userData);
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userData.username,
      password: userData.password,
    }),
  });

  if (!response.ok) {
    throw new Error("Login failed!");
  }

  return await response.json();
};
