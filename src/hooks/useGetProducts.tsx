import { useEffect, useState } from "react";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

interface Dish extends DocumentData {
  title: string
  id: string
  description: string
  image: string
  options: string[]
  price: number
}

export const useGetProducts = () => {
  const [products, setProducts] = useState<Dish[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getDocs(collection(db, "products"))
      .then((snapshot) => {
        let results: Dish[] = [];
        snapshot.docs.forEach((product) => {
          let item = product.data() as Dish
          results.push(item);

        });
        setProducts(results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return { products, error, isLoading };
};
