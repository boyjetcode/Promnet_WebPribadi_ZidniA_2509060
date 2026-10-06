
export default function MainSection() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}

function HomeSection() {
  return (
    <section id="home">
      <header style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: 0, marginBottom: 0 }}>
        <h2>Selamat Datang di Web Pribadi Saya!</h2>
        <p>Mahasiswa Pendidikan Ilmu Komputer UPI | Penikmat Musik & Main Gitar | Penggemar Komputasi</p>
      </header>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about">
      <h2>Tentang Saya</h2>
      <article>
        <p>Halo! Saya <strong>Muhammad Zidni An' Umillah Haq</strong>, biasa dipanggil Zidni. Saya berusia 19 tahun dan berasal dari Majalaya, Bandung.</p>
        <p>Saat ini saya sedang menjalani rutinitas sebagai mahasiswa S1 di program studi <em>Pendidikan Ilmu Komputer</em>, Universitas Pendidikan Indonesia (UPI) Bandung.</p>
        <p>Di luar urusan perkuliahan dan koding dasar, saya sangat menikmati aktivitas bermain gitar, mendengarkan berbagai genre musik, serta menjaga kebugaran fisik lewat olahraga harian.</p>
      </article>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery">
      <h2>Galeri Foto</h2>
      <p style={{ marginBottom: '15px' }}>Kumpulan foto kegiatan sehari-hari, hobi, dan momen santai saya:</p>

      {/* Tambahan style agar gambar tidak meluber dari kotak */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
        <figure>
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop" alt="Foto Profil" width="250" style={{ borderRadius: '8px' }} />
        </figure>
        <figure>
          <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&auto=format&fit=crop" alt="Main Gitar" width="250" style={{ borderRadius: '8px' }} />
        </figure>
        <figure>
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop" alt="Kampus UPI" width="250" style={{ borderRadius: '8px' }} />
        </figure>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact">
      <h2>Kontak & Sapa Saya</h2>
      <p>Silakan tinggalkan pesan melalui formulir di bawah ini:</p>
      <br />
      <form action="#" method="post">
        <fieldset style={{ border: '1px solid #334155', padding: '20px', borderRadius: '8px', textAlign: 'left' }}>
          <legend style={{ color: '#38bdf8', fontWeight: 'bold', padding: '0 10px' }}>Kirim Pesan</legend>
          
          <label htmlFor="nama">Nama Anda:</label><br />
          <input type="text" id="nama" name="nama" placeholder="Tuliskan nama Anda" style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px' }} required />
          
          <label htmlFor="email">Email Anda:</label><br />
          <input type="email" id="email" name="email" placeholder="nama@email.com" style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px' }} required />
          
          <label htmlFor="pesan">Pesan:</label><br />
          <textarea id="pesan" name="pesan" rows={4} style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px' }} placeholder="Tuliskan pesan..." required></textarea>
          
          <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer', background: '#38bdf8', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Kirim Pesan</button>
        </fieldset>
      </form>
    </section>
  );
}