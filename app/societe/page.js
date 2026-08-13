import Image from "next/image"



const teamMembers = [
    {
      name: 'Marvin McKinney',
      role: 'Founder',
      image: '/home/direction.jpg',
      alt: 'Marvin image',
    },
    {
      name: 'Kathryn Murphy',
      role: 'CTO',
      image: '/home/direction.jpg',
      alt: 'Kathryn image',
    },
    {
      name: 'Jerome Bell',
      role: 'CMO',
      image: '/home/direction.jpg',
      alt: 'Jerome image',
    },
    {
      name: 'Wade Warren',
      role: 'CEO',
      image: '/home/direction.jpg',
      alt: 'Wade image',
    },
    {
      name: 'Leslie Alexander',
      role: 'Customer Support',
      image: '/home/direction.jpg',
      alt: 'Leslie image',
    },
    {
      name: 'Guy Hawkins',
      role: 'HR',
      image: '/home/direction.jpg',
      alt: 'Guy image',
    },
    {
      name: 'Ronald Richards',
      role: 'CO-Founder',
      image: '/home/direction.jpg',
      alt: 'Ronald image',
    },
    {
      name: 'Devon Lane',
      role: 'UI Designer',
      image: '/home/direction.jpg',
      alt: 'Devon image',
    },
    {
      name: 'Dianne Russell',
      role: 'Product Designer',
      image: '/home/direction.jpg',
      alt: 'Dianne image',
    },
  ];

const page = () => {
  return (
    <div className='bg-white'>
        {/* video  */}
        <section className='flex justify-center items-center my-8'>
                <video className='w-full max-w-5xl border-4 border-gray-300 rounded-lg shadow-lg' 
                        autoPlay
                        muted
                        loop
                >
                    <source src='./societe/bois_video.mp4' type='video/mp4'/>
                    Your browser does not support the video tag.
                </video>
        </section>

        {/* À propos de nous */}
        <section className="my-12">
        <h1 className="text-center text-4xl font-bold mb-8">À PROPOS DE NOUS</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
            <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center mb-8 md:mb-0">
            <Image 
                src="/home/habitatservice-logo.jpg" 
                alt="Logo" 
                layout="intrinsic" 
                width={300} // Set the width you need for the logo
                height={200} // Set the height proportional to the width
                className="max-w-full h-auto" 
            />
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center">
            <p className="w-full max-w-full text-center md:text-left">
                La société Habitat et Service est une société à responsabilité limitée, créée en 2008. Son objet principal est la commercialisation, l’import, l’export, et la vente en gros et en détail de Bois et ses dérivés. Elle opère au niveau du marché national, se démarque de la concurrence par sa qualité de service et place le client au centre de ses préoccupations stratégiques.
            </p>
            </div>
        </div>
        </section>

        {/* Notre équipe */}
        {/* <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
            <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-6">Notre équipe</h2>
            
            </div>
            <div className="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full">
            {teamMembers.map((member) => (
                <div key={member.name} className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                <div className="relative mb-5">
                    <Image 
                    src={member.image} 
                    alt={member.alt} 
                    layout="intrinsic" 
                    width={112} // Adjust width as needed
                    height={112} // Adjust height as needed
                    className="rounded-2xl object-cover mx-auto transition-all duration-500 border-2 border-solid border-transparent group-hover:border-accent"
                    />
                </div>
                <h4 className="text-xl text-gray-900 font-semibold mb-2 transition-all duration-500 group-hover:text-accent">
                    {member.name}
                </h4>
                <span className="text-gray-500 block transition-all duration-500 group-hover:text-gray-900">
                    {member.role}
                </span>
                </div>
            ))}
            </div>
        </div>
        </section> */}

        {/* Mot De Directeur */}
        <section className="py-24 bg-accent-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">MOT DE DIRECTEUR</h2>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left Part: Image and Name */}
              <div className="w-full lg:w-1/3 flex flex-col items-center text-center lg:text-left">
                <div className=" relative w-60 h-80 mb-4 rounded-lg overflow-hidden">
                  <Image 
                    src="/home/direc.jpg" 
                    alt="Owner" 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg"
                  />
                </div>
                <div className="w-60 text-xl text-center font-semibold text-accent bg-primary p-2 rounded-lg">
                JAOUAD FATMI
                </div>
              </div>

              {/* Right Part: Paragraph */}
              <div className="w-full lg:w-2/3">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Habitat & Service, qui a plus de 17 ans aujourd&apos;hui, ambitionne de se positionner comme un accompagnateur de l&apos;humain dans un environnement de développement professionnel et personnel en perpétuelle évolution. Nous avons tous en nous les clés de la réussite ou de l&apos;échec liés à l&apos;entrepreneuriat, que l&apos;on idéalise ou confronte en regardant derrière soi pour se rappeler toutes les étapes que l&apos;on a franchies, et devant soi, pour accompagner tous les objectifs que l&apos;on projette d&apos;entreprendre. Il suffit de choisir les bonnes clés et d&apos;user de la seule liberté que nous ayons : faire un choix. Habitat & Service fait aujourd&apos;hui le choix d&apos;être proactif sur la toile et s&apos;en remet à vos clics. C&apos;est le choix du partage, le choix de se mettre à votre écoute, d&apos;accueillir vos critiques, d&apos;être en audit constant envers ses clients et ses fournisseurs, le choix d&apos;alimenter les tendances de notre métier et de se remettre constamment en question tout en gardant une ligne de conduite exemplaire.
                </p>
              </div>
            </div>
          </div>
        </section>


    </div>
  )
}

export default page