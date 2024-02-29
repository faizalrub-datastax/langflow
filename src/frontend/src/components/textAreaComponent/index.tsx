import { useEffect } from "react";
import { editTextModalTitle } from "../../constants/constants";
import { TypeModal } from "../../constants/enums";
import GenericModal from "../../modals/genericModal";
import { TextAreaComponentType } from "../../types/components";
import IconComponent from "../genericIconComponent";
import { Input } from "../ui/input";

export default function TextAreaComponent({
  value,
  onChange,
  disabled,
  editNode = false,
  id = "",
}: TextAreaComponentType): JSX.Element {
  // Clear text area
  useEffect(() => {
    if (disabled && value !== "") {
      onChange("");
    }
  }, [disabled]);

  return (
    <div className={"flex w-full items-center " + (disabled ? "" : "")}>
      <div className="flex w-full items-center" data-testid={"div-" + id}>
        <Input
          id={id}
          data-testid={id}
          value={value}
          disabled={disabled}
          className={editNode ? "input-edit-node w-full" : " w-full"}
          placeholder={"Type something..."}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
        <div>
          <GenericModal
            type={TypeModal.TEXT}
            buttonText="Finish Editing"
            modalTitle={editTextModalTitle}
            value={value}
            setValue={(value: string) => {
              onChange(value);
            }}
          >
            {!editNode && (
              <IconComponent
                id={id}
                name="ExternalLink"
                className={
                  "icons-parameters-comp" +
                  (disabled ? " text-ring" : " hover:text-accent-foreground")
                }
              />
            )}
          </GenericModal>
        </div>
      </div>
    </div>
  );
}
