import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Users, Award, Clock, ChefHat, Heart, MessageCircle, Instagram } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Space */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                <img src="/SohunDuaUdang.jpeg"></img>
              </div>
              <div>
                <h1 className="font-serif font-black text-xl text-gray-900">Sohun Dua Udang</h1>
                <p className="text-xs text-gray-600">Mie Sohun Premium</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-900 hover:text-cyan-600 font-medium transition-colors">
                Beranda
              </a>
              <a href="#about" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                Tentang Kami
              </a>
              <a href="#products" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                Produk Kami
              </a>
              <a href="#recipes" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                Resep Sohun
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                Testimoni
              </a>
              <a href="#contact" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                Cara Pesan
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <span className="sr-only">Open menu</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-serif font-black text-4xl lg:text-6xl text-gray-900 leading-tight">
                  Rasakan Seni  <span className="text-cyan-600">Keaslian</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Nikmati sohunnya kami yang premium, baik biru maupun putih, dibuat khusus untuk pecinta cita rasa istimewa. Setiap helai sohun menghadirkan cerita tentang tradisi, kualitas, dan keunggulan kuliner.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-8 py-3">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  <a href='http://shopee.co.id/sohun2udang'> Shop Now</a>
                  
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 font-medium px-8 py-3 bg-transparent"
                >
                  <a href="#recipes">
                    Temukan Resep
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm font-medium text-gray-700">1k+ Customers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm font-medium text-gray-700">Kualitas Premium</span>
                </div>
              </div>
            </div>

            {/* Hero Image Space */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-2xl p-8 shadow-xl">
                <img
                  src="\PhotoSohun\STE00045.jpg"
                  alt="Premium Sohun Dua Udang Glass Noodles"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Floating Banner Space
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">Special Offer</p>
                  <p className="text-xs text-cyan-600">Free Shipping</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-gray-900">Kisah Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             Sebuah warisan cita rasa autentik dan keterampilan tradisional.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-2xl text-gray-900">Lebih dari 25 Tahun Perjalanan Rasa</h3>
              <p className="text-gray-600 leading-relaxed">
                Sejak tahun 1999, Sohun Dua Udang lahir dari tekad seorang wanita yang memulai usahanya dari nol. Dengan bermodalkan pinjaman bank dan semangat yang besar, beliau mulai memproduksi sohun secara sederhana, lalu berkeliling menjualnya dari toko ke toko. Perjalanan dimulai dari Kota Cirebon, kemudian meluas ke Indramayu, Kuningan, hingga akhirnya dikenal luas di daerah Cikampek.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dari langkah kecil itu, Sohun Dua Udang terus tumbuh dan berkembang, tetap setia menjaga kualitas serta cita rasa autentik. Hingga hari ini, Sohun Biru kami telah menjadi pilihan terpercaya dan sangat dikenal di Cikampek.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Misi kami sederhana namun besar: menghadirkan Sohun Dua Udang ke seluruh penjuru Indonesia, agar setiap keluarga dapat merasakan kelezatan sohun premium yang dibuat dengan tradisi, ketekunan, dan sepenuh hati.
              </p>
            </div>
            <div className="relative">
              <img
                src="/traditional-noodle-making-process.png"
                alt="Traditional noodle making process"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-serif font-bold text-lg text-gray-900">Passion</h4>
              <p className="text-gray-600 text-sm">Digerakkan oleh cinta pada cita rasa autentik</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-serif font-bold text-lg text-gray-900">Natural</h4>
              <p className="text-gray-600 text-sm">Bahan alami, tanpa tambahan buatan</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-serif font-bold text-lg text-gray-900">Excellence</h4>
              <p className="text-gray-600 text-sm">Standar kualitas tanpa kompromi</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-serif font-bold text-lg text-gray-900">Tradition</h4>
              <p className="text-gray-600 text-sm">Keahlian tradisional yang terjaga turun-temurun</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-gray-900">Produk Sohun Dua Udang</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Blue Glass Noodles */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-100">
              <CardContent className="p-8">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mb-6 overflow-hidden">
                  <img
                    src="/Biru.jpg"
                    alt="Blue Glass Noodles"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-2xl text-gray-900">Sohun Dua Udang Biru | 300 Gram</h3>
                    {/*<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Premium</Badge>*/}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Sohun Dua Udang varian biru menghadirkan tekstur istimewa dan cita rasa autentik.
                    Dibuat dari tepung sagu pilihan, sohun ini menjadi dasar sempurna untuk berbagai hidangan tradisional Indonesia.
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Keunggulan Utama:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Terbuat dari tepung sagu premium</li>
                      <li>• Tekstur kenyal dan bening sempurna</li>
                      <li>• Cepat matang (3–5 menit)</li>
                      <li>• Bebas gluten dan vegan</li>
                    </ul>
                  </div>

                  {/* Sizes and Pricing */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900 ">Tersedia Ukuran dan Harga:</h4>
                    <div className="flex justify-center grid grid-cols-3 gap-3 ">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="font-medium text-gray-900">300g</p>
                        <p className="text-sm text-cyan-600">Rp 15.999</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="font-medium text-gray-900">1.5kg</p>
                        <p className="text-sm text-cyan-600">Rp 45.000</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white" >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    <a href="https://id.shp.ee/vfYqc9N">Belanja</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* White Glass Noodles */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-100">
              <CardContent className="p-8">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-6 overflow-hidden">
                  <img
                    src="/Putih.jpg"
                    alt="White Glass Noodles"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-2xl text-gray-900">Sohun Dua Udang Putih | 300 Gram</h3>
                    {/* {<Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Classic</Badge>} */}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Sohun Dua Udang – Varian Putih menghadirkan kelembutan dan rasa autentik yang cocok untuk berbagai hidangan. Dibuat dari bahan berkualitas pilihan, 
                    sohun ini memiliki warna putih bening yang cantik dan tekstur yang lembut namun kenyal saat dimasak.
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Keunggulan Utama: </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Terbuat dari bahan berkualitas tinggi</li>
                      <li>• Warna putih bening yang menarik</li>
                      <li>• Cepat matang (3–5 menit)</li>
                      <li>• Bebas gluten dan vegan</li>
                    </ul>
                  </div>

                  {/* Sizes and Pricing */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900 ">Tersedia Ukuran dan Harga:</h4>
                    <div className="flex justify-center grid grid-cols-3 gap-3 ">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="font-medium text-gray-900">300g</p>
                        <p className="text-sm text-cyan-600">Rp 15.999</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="font-medium text-gray-900">1.5kg</p>
                        <p className="text-sm text-cyan-600">Rp 45.000</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white" >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    <a href="https://id.shp.ee/R7qLzjS">Belanja</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bulk Orders */}
          <div className="mt-16 text-center bg-cyan-50 rounded-2xl p-8">
            <h3 className="font-serif font-bold text-2xl text-gray-900 mb-4">Tersedia Pesanan Massal</h3>
            <p className="text-gray-600 mb-6">Cocok untuk restoran, katering, dan distribusi grosir</p>
            <a
                href="https://wa.me/082130958208"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Pesan Melalui Whatsapp
            </a>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section id="recipes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-gray-900">Inspirasi Kuliner</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai cara lezat untuk mengolah sohun premium kami.
            </p>
          </div>

          {/* Cooking Instructions */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h3 className="font-serif font-bold text-2xl text-gray-900 mb-6 text-center">Petunjuk Penyajian</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-medium text-gray-900">Rendam</h4>
                <p className="text-gray-600 text-sm">Rendam sohun dalam air hangat selama 10–15 menit hingga lembut.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-medium text-gray-900">Tiriskan</h4>
                <p className="text-gray-600 text-sm">Tiriskan hingga benar-benar kering dan bilas dengan air dingin."</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-medium text-gray-900">Masak</h4>
                <p className="text-gray-600 text-sm">Tambahkan ke hidangan favorit Anda dan masak selama 2–3 menit.</p>
              </div>
            </div>
          </div>

          {/* Recipe Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/SohunGoreng.jpg"
                    alt="Blue Noodle Soup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-lg text-gray-900">Sohun Goreng</h4>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">10 min</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    A comforting soup with blue glass noodles, vegetables, and aromatic broth
                  </p>
                  <div className="flex items-center space-x-2">
                    <ChefHat className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm text-cyan-600 font-medium">Easy</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-50 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/SohunKuahTelurPedas.jpg"
                    alt="Stir-Fried Glass Noodles"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-lg text-gray-900">Sohun Kuah Telur Pedas</h4>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">10 min</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Quick and healthy stir-fry with white glass noodles and fresh vegetables
                  </p>
                  <div className="flex items-center space-x-2">
                    <ChefHat className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm text-cyan-600 font-medium" ><a href="https://www.youtube.com/watch?v=Ok-TuNrHJQ8"> Easy</a></span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/BaksoKuah.jpg"
                    alt="Cold Noodle Salad"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-lg text-gray-900">Bakso Kuah</h4>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">10 min</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Refreshing cold salad with glass noodles, herbs, and tangy dressing
                  </p>
                  <div className="flex items-center space-x-2">
                    <ChefHat className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm text-cyan-600 font-medium">Easy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-gray-900">Kata pelanggan kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sudah ratusan pelanggan puas memilih dan mempercayai Sohun Dua Udang
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-cyan-600">100+</div>
              <div className="text-gray-600">Pelanggan senang</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-cyan-600">4.9/5</div>
              <div className="text-gray-600">Rating rata-rata di Shopee</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-cyan-600">25+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-black text-cyan-600">99%</div>
              <div className="text-gray-600">Kepuasan Pelanggan</div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-100">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "sohunnya enak kenyal emang sohun biru ini yang lagi di cari2 terimakasih seller🫶"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-cyan-600 font-medium text-sm">f</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">fitriyatusolehah</div>
                    <div className="text-sm text-gray-500">Shopee</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-100">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Penjualnya ramah, begitu pesan langsung dikirim, cuman jasa kirimnya yang bikin deg2an karena gak update status pengiriman tapi tiba2 dah sampe, terimakasih"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-cyan-600 font-medium text-sm">e</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">erohainulbashiroh</div>
                    <div className="text-sm text-gray-500">Shopee</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-100">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "pembelian kedua kalinya karena sounnya bagus dan kenyal rasanya juga enak pengiriman sat set"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-cyan-600 font-medium text-sm">m</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">masbime05</div>
                    <div className="text-sm text-gray-500">Shopee</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif font-black text-3xl lg:text-4xl text-gray-900">Cara Pesan Massal </h2>
            
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-6 gap-6 items-center">
              {/* Step 1 */}
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900">Kontak WhatsApp</h3>
                <p className="text-gray-600 text-sm">Pesan melalui whatsapp apa saja yang dibutuhkan</p>
              </div>

              {/* Enhanced Arrow */}
              <div className="hidden md:flex justify-center items-center">
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-cyan-600 rounded"></div>
                  <div className="w-0 h-0 border-l-8 border-l-cyan-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-white font-bold text-3xl">📍</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900">Berikan Alamat</h3>
                <p className="text-gray-600 text-sm">Silakan berikan alamat bongkar</p>
              </div>

              {/* Enhanced Arrow */}
              <div className="hidden md:flex justify-center items-center">
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-cyan-600 rounded"></div>
                  <div className="w-0 h-0 border-l-8 border-l-cyan-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-white font-bold text-3xl">💰</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900">Check Ongkos</h3>
                <p className="text-gray-600 text-sm">Kami akan melakukan perhitungan ongkos dan total harga</p>
              </div>

              {/* Enhanced Arrow */}
              <div className="hidden md:flex justify-center items-center">
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-cyan-600 rounded"></div>
                  <div className="w-0 h-0 border-l-8 border-l-cyan-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
              </div>

              {/* Step 1 */}
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-white font-bold text-3xl">💳</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900">Pembayaran</h3>
                <p className="text-gray-600 text-sm">Lengkapi pembayaran melalui metode pilihan kamu</p>
              </div>

              {/* Enhanced Arrow */}
              <div className="hidden md:flex justify-center items-center">
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-cyan-600 rounded"></div>
                  <div className="w-0 h-0 border-l-8 border-l-cyan-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-white font-bold text-3xl">📦</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900">Dikirim</h3>
                <p className="text-gray-600 text-sm">Pesan kamu akan dikirim secepatnya</p>
              </div>

              {/* Enhanced Arrow */}
              <div className="hidden md:flex justify-center items-center">
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-cyan-600 rounded"></div>
                  <div className="w-0 h-0 border-l-8 border-l-cyan-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-green-700 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-white font-bold text-3xl">✅</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900">Selesai</h3>
                <p className="text-gray-600 text-sm">Terima kasih atas pembelian Kamu di Sohun Dua Udang.</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12 flex justify-center gap-15">
              {/* Whatsapp */}
              <a
                href="https://wa.me/082130958208"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Pesan Melalui Whatsapp
              </a>
              
              {/* Shopee */}
              <a
                href="https://id.shp.ee/vfYqc9N"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Pesan Melalui Shopee
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                  <img src="/SohunDuaUdang.jpeg"></img>
                  </div>
                <div>
                  <h3 className="font-serif font-black text-lg">Sohun Dua Udang</h3>
                  <p className="text-xs text-gray-400"></p>
                </div>
              </div>
              <p className="text-gray-400 text-sm flex">
                Sejak tahun 1999, Sohun Dua Udang menghadirkan sohun premium yang dibuat dengan memadukan tradisi dan keahlian terbaik. 
              </p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Link</h4>
              <div className="space-y-2 text-sm">
                <a href="#home" className="text-gray-400 hover:text-white transition-colors block">
                  Beranda
                </a>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors block">
                  Tentang Kami
                </a>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors block">
                  Produk Kami
                </a>
                <a href="#recipes" className="text-gray-400 hover:text-white transition-colors block">
                  Resep Sohun
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Kontak</h4>
              <div className="space-y-3">
                <a
                  href="mailto:sohun.2udang@gmail.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">@</span>
                  </div>
                  <span className="text-sm">sohun.2udang@gmail.com</span>
                </a>
                <a
                  href="https://instagram.com/sohun2udang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="https://tiktok.com/@sohunduaudang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                    <span className="text-xs font-bold">T</span>
                  </div>
                  <span className="text-sm">TikTok</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Jam Kerja</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Senin - Sabtu</span>
                  <span>8.00 - 17.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 Sohun Dua Udang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
