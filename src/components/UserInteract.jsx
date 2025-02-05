import Image from "next/image";

const UserInteract = () => {
  return (
    <div href="/" className="flex cursor-pointer space-x-4">
      <Image
        src="https://nintendo-khodor.surge.sh/E.svg"
        alt="E"
        width={40}
        height={40}
      />
      <div className="max-w-sm text-gray-400">
        <h1 className="text-xs border-b py-1 border-black">
          Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling,
          Mild Language, Mild Blood
        </h1>
        <h1 className="text-xs py-1">Users Interact</h1>
      </div>
    </div>
  );
};

export default UserInteract;
