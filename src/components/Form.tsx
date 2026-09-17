import { useState, type ChangeEvent } from 'react';

export default function LeadForm() {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (formData: FormData): Promise<void> => {
    if (email) setSubmitted(true);
  };

  return (
    <div className="bg-slate-800 p-8 rounded-xl mt-12 text-center">
      {submitted ? (
        <h3 className="text-green-400 text-xl font-semibold">🎉 Спасибо! Мы свяжемся с вами.</h3>
      ) : (
        <form action={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
          <h3 className="m-0 text-white text-xl font-semibold">Оставьте email для раннего доступа</h3>
          <input 
            type="email" 
            placeholder="Ваш email" 
            value={email}
            onChange={changeEmailHandler}
            className="px-3 py-3 rounded-md border border-slate-700 bg-slate-900 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 px-4 rounded-md border-none cursor-pointer font-bold hover:bg-orange-600 transition-colors"
          >
            Подписаться
          </button>
        </form>
      )}
    </div>
  );
}