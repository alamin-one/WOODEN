import { shapping, money, support, wallet } from '../../assets/images';

const Condition = () => {
  const card = [
    {
      title: 'Free Shipping',
      description: 'Free Shipping On All Order',
      image: shapping,
    },
    {
      title: 'Money Guarantee',
      description: '30 Day Money Back Guaranteer',
      image: money,
    },
    {
      title: 'Online Support',
      description: 'Contact us 24 hr, 7 days',
      image: support,
    },
    {
      title: 'Secure Paymentg',
      description: 'We ensure secure payment',
      image: wallet,
    },
  ];

  return (
    <section>
      <div className="app-container  py-25  grid grid-cols-2 md:grid-cols-4 gap-5">
        {card.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <img src={item.image} alt={item.image} />
            <div className="text-center mt-2">
              <h4 className="phx">{item.title}</h4>
              <p className="ps text-[13px] text-[#2f3131]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Condition;
