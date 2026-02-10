import Image from "next/image";

const DataContentThesis: any = [];

for (let i = 1; i <= 46; i += 2) {
   DataContentThesis.push({
      front: (
         <Image
            src={`/thesis/halaman-${i}.webp`}
            alt=""
            fill
            className="object-cover"
         />
      ),
      back: (
         <Image
            src={`/thesis/halaman-${i + 1}.webp`}
            alt=""
            fill
            className="object-cover"
         />
      ),
   });
}

export default DataContentThesis;
