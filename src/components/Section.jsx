export default function HomeSection() {
  return (
    <section id="home">
      <header>
        <h1>Muhammad Zidni An' Umillah Haq</h1>
        <p>
          <strong>Selamat Datang di Web Pribadi Saya!</strong>
        </p>
        <p>
          Mahasiswa Pendidikan Ilmu Komputer UPI | Penikmat Musik & Main Gitar | Penggemar Komputasi
        </p>
      </header>
      <hr />
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about">
      <h2>Tentang Saya</h2>
      <article>
        <p>
          Halo! Saya <strong>Muhammad Zidni An' Umillah Haq</strong>, biasa dipanggil Zidni. Saya berusia 19 tahun dan berasal dari Majalaya, Bandung.
        </p>
        <p>
          Saat ini saya sedang menjalani rutinitas sebagai mahasiswa S1 di program studi <em>Pendidikan Ilmu Komputer</em>, Universitas Pendidikan Indonesia (UPI) Bandung.
        </p>
        <p>
          Di luar urusan perkuliahan dan koding dasar, saya sangat menikmati aktivitas bermain gitar, mendengarkan berbagai genre musik, serta menjaga kebugaran fisik lewat olahraga harian. Bagi saya, web ini adalah ruang pribadi sederhana untuk berbagi momen dan hal-hal yang saya sukai.
        </p>
      </article>
      <hr />
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery">
      <h2>Galeri Foto</h2>
      <p>Kumpulan foto kegiatan sehari-hari, hobi, dan momen santai saya:</p>

      <figure>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop"
          alt="Foto Profil Zidni"
          width="300"
        />
        <figcaption>Foto profil pribadi saya.</figcaption>
      </figure>

      <br />

      <figure>
        <img
          src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&auto=format&fit=crop"
          alt="Latihan Bermain Gitar"
          width="300"
        />
        <figcaption>Momen santai sambil latihan gitar di kamar.</figcaption>
      </figure>

      <br />

      <figure>
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop"
          alt="Suasana Kampus UPI"
          width="300"
        />
        <figcaption>Suasana area kampus UPI Bandung tempat saya kuliah.</figcaption>
      </figure>

      <br />

      <figure>
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop"
          alt="Aktivitas Olahraga dan Kebugaran"
          width="300"
        />
        <figcaption>Aktivitas olahraga harian untuk menjaga kebugaran tubuh.</figcaption>
      </figure>
      <hr />
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact">
      <h2>Kontak & Sapa Saya</h2>
      <p>
        Ingin mengobrol, diskusi santai, atau sekadar menyapa? Silakan tinggalkan pesan melalui formulir di bawah ini:
      </p>

      <form action="#" method="post">
        <fieldset>
          <legend>
            <strong>Kirim Pesan</strong>
          </legend>
          <br />

          <label htmlFor="nama">Nama Anda:</label>
          <br />
          <input
            type="text"
            id="nama"
            name="nama"
            placeholder="Tuliskan nama Anda"
            required
          />
          <br />
          <br />

          <label htmlFor="email">Email Anda:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="nama@email.com"
            required
          />
          <br />
          <br />

          <label htmlFor="pesan">Pesan:</label>
          <br />
          <textarea
            id="pesan"
            name="pesan"
            rows={5}
            cols={40}
            placeholder="Tuliskan pesan atau sapaan Anda di sini..."
            required
          ></textarea>
          <br />
          <br />

          <button type="submit">Kirim Pesan</button>
          <button type="reset">Reset</button>
        </fieldset>
      </form>

      <br />

      <h3>Informasi Kontak Lainnya</h3>
      <ul>
        <li>
          <strong>Domisili:</strong> Majalaya / Bandung, Jawa Barat
        </li>
        <li>
          <strong>Status:</strong> Mahasiswa Pendidikan Ilmu Komputer UPI
        </li>
      </ul>
    </section>
  );
}

