"use client";

import Widget from "./Widget";

export default function Overview() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Widget
        title="Active Users"
        value="1,283"
        icon={<span role="img" aria-label="users">👥</span>}
        change="+4.8%"
        helperText="Compared to last week"
      />
      <Widget
        title="Revenue"
        value="$34,500"
        icon={<span role="img" aria-label="revenue">💰</span>}
        change="+2.1%"
        helperText="This month"
      />
      <Widget
        title="Tasks Completed"
        value="285"
        icon={<span role="img" aria-label="tasks">✅</span>}
        change="-1.2%"
        helperText="Since yesterday"
      />
      <Widget
        title="Enquiries"
        value="37"
        icon={<span role="img" aria-label="enquiries">📩</span>}
        change="+11.9%"
        helperText="Since last month"
      />
    </section>
  );
}