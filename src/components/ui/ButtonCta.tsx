type Props = {
  label: string;
  baseMessage: string;
  phone?: string;
};

export const ButtonCta = ({
  label,
  baseMessage,
  phone = '573138000536',
}: Props) => {
  const encodedMessage = encodeURIComponent(`${baseMessage} ${label}`);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <div>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <button className="py-4 px-8 inline-block text-white cursor-pointer border-2 border-[#56DDA7] text-sm hover:bg-[#56DDA7] hover:text-black rounded-full font-semibold transition transform duration-300 hover:scale-110">
          {label}
        </button>
      </a>
    </div>
  );
};
