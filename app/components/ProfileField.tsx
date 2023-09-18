interface ProfileFieldProps {
  fieldLabel: string;
  fieldValue: string;
}

export default async function ProfileField({
  fieldLabel,
  fieldValue,
}: ProfileFieldProps) {
  return (
    <div className="w-full flex justify-start items-center gap-4">
      <p className="text-lg">{fieldLabel}:</p>
      <input
        type="text"
        className="bg-gray-100 p-2 rounded-lg"
        value={fieldValue}
        readOnly
      ></input>
    </div>
  );
}
