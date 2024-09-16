type Props = {
  info: string;
};

const Error = ({ info }: Props) => {
  return (
    <div className="mt-20 text-center">
      <p>Üzgünüz bir hata oluştu</p>
      <p>{info}</p>
    </div>
  );
};

export default Error;
