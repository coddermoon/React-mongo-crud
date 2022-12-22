import React from 'react';
import { toast } from 'react-hot-toast';


const Form = () => {

  const handleForm = (e) => {

e.preventDefault()

const form = e.target

const name = form.name.value
const service = form.service.value

const data = {
  name,
  service
}

fetch(`https://crud-server-fawn.vercel.app/uploadData`,{
  method: 'POST',
  headers:{
    'content-type':'application/json'
  },
  body: JSON.stringify(data),
})
.then(res=>res.json())
.then(data=>toast.success('added data'))
.catch(err=>console.error(err.message))

  }


    return (
      <div>
       <form onSubmit={handleForm} class="flex shadow-2xl py-10 flex-col px-1 md:px-10 gap-y-5 " action="">
   <input required="true" type="text" name="name" placeholder="Your Name" class="input border rounded border-gray-300 input-bordered bg-transparent w-full p-2"/>
   <select  name="service" required='true' class="select select-bordered py-2 bg-slate-800 w-full ">
   
      <option disabled >Select Sector</option>
      <option>Manufacturing</option>
      <option>Construction materials</option>
      <option>Electronics and Optics</option>
      <option>Food and Beverage</option>
      <option>Bakery confectionery products</option>
      <option>AndBeveragesorra</option>
      <option>Fish &amp; fish</option>
      <option>Meat meat products</option>
      <option>Milk dairy productsica</option>
      <option>Other1</option>
      <option>Sweets &amp; snack</option>
      <option>Furniture</option>
      <option>Bathroom/sauna</option>
      <option>Bedroom</option>
      <option>Childrenâ€™s room</option>
      <option>Kitchen</option>
      <option>Living room</option>
      <option>Office</option>
      <option>Other2 (Furniture)</option>
      <option>Outdoor</option>
      <option>Project furniture</option>
      <option>Machinery</option>
      <option>Machinery equipment/tools</option>
      <option>Manufacture of machinery</option>
      <option>Maritime</option>
      <option>Aluminium and steel workboats</option>
      <option>Boat/Yacht building</option>
      <option>Ship repair and conversion</option>
      <option>Metal structures</option>
      <option>Other3</option>
      <option>Repair and maintenance service</option>
      <option>Metalworking</option>
      <option>Construction of metal structures</option>
      <option>Houses and buildings</option>
      <option>Metal products</option>
      <option>Metal works</option>
      <option>CNC-machining</option>
      <option>Forgings, Fasteners</option>
      <option>Gas, Plasma, Laser cutting</option>
      <option>TIG, Aluminum welding</option>
      <option>Plastic and Rubber</option>
      <option>Packaging</option>
      <option>Plastic goods</option>
      <option>Plastic processing technology</option>
      <option>Blowing</option>
      <option>Moulding</option>
      <option>Plastics welding and processing</option>
      <option>Plastic profiles</option>
      <option>Advertising</option>
      <option>Book/Periodicals printing</option>
      <option>Labelling and packaging printing</option>
      <option>Textile and Clothing</option>
      <option>Clothing</option>
      <option>Textile</option>
      <option>Other4 (Wood)</option>
      <option>Wooden building materials</option>
      <option>Wooden houses</option>
      <option>Other5</option>
      <option>Creative industries</option>
      <option>Energy technology</option>
      <option>Environment</option>
      <option>Service</option>
      <option>Business services</option>
      <option>Information Technology and Telecommunications</option>
      <option>Data processing, Web portals, E-marketing</option>
      <option>Programming, Consultancy</option>
      <option>Software, Hardware</option>
      <option>Telecommunications</option>
      <option>Translation services</option>
      <option>Transport and Logistics</option>
      <option>Air</option>
      <option>Rail</option>
      <option>Road</option>
      <option>Water</option>
   </select>
   <div class="flex items-center gap-2"><input required="true" type="checkbox"  class="checkbox checkbox-primary"/><span class="label-text">Agree the Terms</span></div>
   <button type="submit" class="btn bg-blue-600 py-2 hover:bg-blue-700 w-full">Save</button>
</form>
      </div>
    );
};

export default Form;