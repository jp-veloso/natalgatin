import { Heart, Gift, Camera, Cat } from 'lucide-react';
import gifEspecial from '../media/makesweet-fe0sya.gif'; // Importa o GIF diretamente
import pic1 from '../media/pic1.jpeg';
import pic2 from '../media/pic2.jpeg';
import pic3 from '../media/pic3.jpeg';

export function UnlockedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
        <div className="text-center">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Meu Dengo</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Você é a pessoa especial que apareceu em minha vida. Cada final de semana 
            com você me lembra o quanto me sinto querido ao seu lado.
          </p>

          <div className="grid grid-cols-1 gap-8">
            {/* Razões para te amar */}
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Razões para gostar de você</h3>
              <ul className="text-left text-gray-700">
                <li>• Seu carinho por mim</li>
                <li>• Sua inteligência me impressiona</li>
                <li>• Sua companhia me faz melhor</li>
                <li>• Você é meu amigo, mais que amigo</li>
              </ul>
            </div>

            {/* GIF personalizado */}
            <div className="bg-pink-50 p-6 rounded-lg">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={gifEspecial} // Usa o GIF importado
                  alt="Nosso GIF especial"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Nossos momentos */}
            <div className="bg-pink-50 p-6 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Camera className="w-6 h-6 text-pink-500" />
                <h3 className="font-semibold text-lg">Eu e você</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img
                  src={pic1}
                  alt="Momento romântico 1"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src={pic2}
                  alt="Momento romântico 2"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src={pic3}
                  alt="Momento romântico 3"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Seção do presente */}
            <div className="bg-gradient-to-r from-pink-100 to-red-100 p-6 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <Cat className="w-12 h-12 text-pink-500 animate-bounce" />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Gift className="w-6 h-6 text-pink-500" />
                <h3 className="font-semibold text-lg">Seu presente especial...</h3>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-lg text-gray-800 mb-2">
                  Eu e você, gostosinhos juntos em
                </p>
                <p className="text-xl font-medium text-pink-600">
                  Uma noite no Motel! 
                </p>
                <p className="text-gray-600 mt-2">
                  Pra gente ficar grudados e podermos fazer tudo o que quisermos ❤️
                </p>
              </div>
            </div>
          </div>

          <p className="text-xl font-medium text-red-500 mt-8">
            Te gosto infinito! ❤️
          </p>
        </div>
      </div>
    </div>
  );
}