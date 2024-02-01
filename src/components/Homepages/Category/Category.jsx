import CardComponent from "./Card";
import CustomMsg from "@/components/Homepages/CustomMsg/CustomMsg";
const Category = () => {

  const categoryData= [
  {categoryName: "BEDS & MATTRESES", src: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/11/beds.jpg", path:'#',
w:""},
  {categoryName: "CHAIRS", src: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/11/chairs.jpg", path:'#',
w:""},
  {categoryName: "LIGHTING", src: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/11/lighting.jpg.webp", path:'#'
  ,w:"64px"},
  {categoryName: "STORAGE", 
  src: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/11/storage.jpg.webp", path:'#',w:"72"},
  {categoryName: "ACCENT CHAIRS", src: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/11/accent-chairs.jpg", path:'#',w:"72"},
  {categoryName: "RUGS", src: "https://reydemos.b-cdn.net/frankfurt/wp-content/uploads/sites/15/2019/11/rugs.jpg.webp", path:'#',w:"72"}
  
]

  return <div className="mx-8 py-10 ">

<div className="flex flex-wrap gap-4">
<CustomMsg/>
{categoryData.map((item)=>  <CardComponent key={item.categoryName} data={item} />)}
   
   </div>
</div>
 };

export default Category;
