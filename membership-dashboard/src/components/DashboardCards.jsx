function DashboardCards({ members }) {
  const activeMembers = members.filter(
    (member) => member.status === "Active"
  ).length;

  const totalMembers = members.length;

  const prices = {
    Basic: 500,
    Silver: 1000,
    Gold: 1500,
    Platinum: 2500,
  };

  const revenue = members
    .filter((member) => member.status === "Active")
    .reduce(
      (sum, member) => sum + prices[member.membershipType],
      0
    );

  const today = new Date().toDateString();

  const signupsToday = members.filter(
    (member) =>
      new Date(member.createdAt).toDateString() === today
  ).length;

  const cards = [
    {
      title: "Active Members",
      value: activeMembers,
      color: "text-green-400",
    },
    {
      title: "Total Members",
      value: totalMembers,
      color: "text-blue-400",
    },
    {
      title: "Revenue",
      value: `₹${revenue.toLocaleString()}`,
      color: "text-yellow-400",
    },
    {
      title: "Today's Signups",
      value: signupsToday,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white dark:bg-slate-900 rounded-2xl p-5 md:p-6 border border-slate-300 dark:border-slate-800 hover:border-blue-500 transition-colors"
        >
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">{card.title}</p>
          <h2 className={`text-3xl md:text-4xl font-bold mt-3 ${card.color}`}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;