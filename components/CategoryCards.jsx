import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import categories from "@data/categories";

const CategoryCards = () => {
  return (
    <section className="mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold mb-8">NOS PRODUITS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 lg:mx-4">
          {categories.map((category) => (
            <div key={category.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
              <Link
                href={{
                  pathname: '/produits',
                  query: { category: category.name }
                }}
              >
                <div className="relative w-full h-[200px]">
                <Image
                  className="rounded-t-lg"
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  style={{ objectFit: 'cover' }}
                />
                </div>
              </Link>
              <div className="p-5">
                <Link
                  href={{
                    pathname: '/produits',
                    query: { category: category.name }
                  }}
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{category.name}</h5>
                </Link>
                <p className="mb-3 font-normal text-base text-gray-700">{category.description}</p> 
                <Link
                  href={{
                    pathname: '/produits',
                    query: { category: category.name }
                  }}
                  className="inline-flex items-center px-3 py-2 text-xl font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-hover hover:text-white"
                >
                  En savoir plus
                  <FaArrowRight className="w-4 h-4 ml-2 text-accent" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryCards;
