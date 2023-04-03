export class Http {
  static async get<Type>(url: string): Promise<Type> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error("Error: ", response);
      }
      const data: Type = await response.json();
      return data;
    } catch (error) {
        console.error(error)
        return Promise.reject();
    }
  }
}
