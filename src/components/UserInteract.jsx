import Image from "next/image";

const UserInteract = () => {
  return (
    <div href="/" className="flex cursor-pointer space-x-2">
      <Image
        src="https://nintendo-khodor.surge.sh/E.svg"
        alt="E"
        width={50}
        height={50}
      />
      <div className="max-w-sm py-4 text-xs font-semibold text-gray-400">
        <h1 className="border-b border-black py-1">
          Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling,
          Mild Language, Mild Blood
        </h1>
        <h1>Users Interact</h1>
      </div>
    </div>
  );
};

export default UserInteract;
