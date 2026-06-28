import MemberCard from "./MemberCard";

function MemberList({ members, onDelete, onEdit, search }) {
  return (
    <section className={search ? "mt-8" : "mt-16"}>
      {search.trim() === "" &&(
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">
              Recently Added and Updated Members
            </h2>

            <p className="text-slate-400 mt-1">
              Showing {members.length} member{members.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      )}

      {members.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-900">
          <div className="text-6xl mb-5">
            {search ? "🔍" : "📭"}
          </div>

          <h2 className="text-2xl font-bold">
            {search ? "No Matching Members" : "No Members Yet"}
          </h2>

          <p className="text-slate-400 mt-3">
            {search
              ? "Try searching with another name or email."
              : "Click 'Add Member' to create your first member."}
          </p>

        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {members.map((member) => (
            <MemberCard
              key={member._id}
              member={member}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default MemberList;