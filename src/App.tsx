
import React, { useState } from 'react'

const waNumber = '919940885106'
const mapCoords = '12.720141450053367,79.1781610565144'

export default function App() {
  const [lang, setLang] = useState<'ta'|'en'>('ta')
  const [form, setForm] = useState({name:'', phone:'', service:'', note:''})
  const services = ['Income Certificate','Community Certificate','Nativity Certificate','Aadhaar Update','Utility Payments','Other']

  function handleChange(e:any){
    setForm({...form, [e.target.name]: e.target.value})
  }

  function submitBooking(e:any){
    e.preventDefault()
    if(!form.name||!form.phone||!form.service){
      alert(lang==='ta'?'தயவு செய்து எல்லா புலங்களையும் நிரப்பவும்.':'Please fill required fields.')
      return
    }
    const msg = `CSC Onnupuram - Appointment Request\nName: ${encodeURIComponent(form.name)}\nPhone: ${encodeURIComponent(form.phone)}\nService: ${encodeURIComponent(form.service)}\nNote: ${encodeURIComponent(form.note)}`
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`
    window.open(url,'_blank')
    alert(lang==='ta'?'நன்றி! உங்கள் வேண்டுகோள் வாட்ஸ்ஆப்பில் அனுப்பப்படுகிறது.':'Thanks! Booking sent via WhatsApp.')
    setForm({name:'', phone:'', service:'', note:''})
  }

  return (
    <div className="min-h-screen max-w-4xl mx-auto p-6">
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">CSC Onnupuram – Common Service Center</h1>
          <p className="text-sm text-gray-600">{lang==='ta'?'உங்கள் ஊரில் அரசு சேவைகள்':'e-Sevai services at your neighbourhood'}</p>
        </div>
        <div className="space-x-2">
          <button onClick={()=>setLang(lang==='ta'?'en':'ta')} className="px-3 py-1 border rounded">{lang==='ta'?'EN':'தமிழ்'}</button>
          <a className="px-3 py-1 bg-green-600 text-white rounded" href={`tel:+91${waNumber}`}>{lang==='ta'?'அழைப்பு':'Call'}</a>
          <a className="px-3 py-1 border rounded" href={`https://wa.me/${waNumber}`} target="_blank" rel="noreferrer">{lang==='ta'?'WhatsApp':'Chat'}</a>
        </div>
      </header>

      <main>
        <section className="mb-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{lang==='ta'?'சேவைகள்':'Services'}</h2>
          <ul className="list-disc pl-5 mt-2">
            {services.map(s => <li key={s}>{s}</li>)}
          </ul>
        </section>

        <section className="mb-6 grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">{lang==='ta'?'அப்பாயிண்ட் முன்பதிவு':'Book Appointment'}</h3>
            <form onSubmit={submitBooking}>
              <input name="name" value={form.name} onChange={handleChange} placeholder={lang==='ta'?'பெயர்':'Name'} className="w-full border p-2 mb-2 rounded" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder={lang==='ta'?'தொலைபேசி':'Phone'} className="w-full border p-2 mb-2 rounded" />
              <select name="service" value={form.service} onChange={handleChange} className="w-full border p-2 mb-2 rounded">
                <option value="">{lang==='ta'?'சேவை தேர்வு':'Choose service'}</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <textarea name="note" value={form.note} onChange={handleChange} placeholder={lang==='ta'?'குறிப்பு (ঔவு)':'Note (optional)'} className="w-full border p-2 mb-2 rounded"></textarea>
              <div className="flex gap-2">
                <button type="submit" className="flex-1 bg-green-600 text-white p-2 rounded">{lang==='ta'?'சேமி':'Book'}</button>
                <a className="flex-1 border p-2 rounded text-center" href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Need help')}`} target="_blank" rel="noreferrer">{lang==='ta'?'WhatsApp':'Chat'}</a>
              </div>
            </form>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">{lang==='ta'?'சேவை கோரிக்கை':'Service Request'}</h3>
            <form onSubmit={(e)=>e.preventDefault()}>
              <select className="w-full border p-2 mb-2 rounded">
                <option value="">{lang==='ta'?'TN e-Sevai சேவை தேர்வு':'Pick TN e-Sevai service'}</option>
                <option>Income Certificate</option>
                <option>Community Certificate</option>
                <option>Aadhaar Update</option>
              </select>
              <button className="w-full bg-blue-600 text-white p-2 rounded">{lang==='ta'?'அனுப்புக':'Submit'}</button>
            </form>

            <div className="mt-4">
              <h4 className="font-semibold">{lang==='ta'?'புகைப்படங்கள்':'Photo Gallery'}</h4>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="h-20 bg-gray-200 rounded"></div>
                <div className="h-20 bg-gray-200 rounded"></div>
                <div className="h-20 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="mt-4">
              <a className="text-blue-600 underline" href="https://www.tnesevai.tn.gov.in/Default.aspx" target="_blank" rel="noreferrer">{lang==='ta'?'விண்ணப்ப நிலை பார்க':'Check Status'}</a>
            </div>
          </div>
        </section>

        <section className="bg-white p-4 rounded shadow mb-6">
          <h3 className="font-semibold">{lang==='ta'?'எங்கள் CSC பற்றி':'About Our CSC'}</h3>
          <p className="mt-2">{lang==='ta'?'CSC Onnupuram உங்கள் ஊரின் உள்ளூர் அரசு சேவைகள் மையம்.' :'CSC Onnupuram is your local government service center.'}</p>
        </section>

        <section className="bg-white p-4 rounded shadow mb-6">
          <h3 className="font-semibold">{lang==='ta'?'நம்புங்கள்':'Find Us'}</h3>
          <iframe title="map" src={`https://www.google.com/maps?q=${mapCoords}&z=17&output=embed`} className="w-full h-64 border-0"></iframe>
          <p className="mt-2">📞 +91 99408 85106</p>
        </section>
      </main>

      <footer className="text-center mt-6 text-sm text-gray-600">© 2025 CSC Onnupuram — Developed by Vasanth</footer>
    </div>
  )
}
