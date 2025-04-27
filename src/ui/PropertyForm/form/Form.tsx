import {
  FormContainer,
  InputField,
  Label,
  OptionButton,
  OptionGroup,
  RowContainer,
  SectionTitle,
} from "./Form.styled";
import {
  HouseType,
  PropertyFormState,
  RepairType,
  SaleTimeType,
} from "../FormType";

interface FormProps {
  formState: PropertyFormState;
  updateField: <T extends keyof PropertyFormState>(
    fieldName: T,
    value: PropertyFormState[T]
  ) => void;
}

const Form = ({ formState, updateField }: FormProps) => {
  return (
    <FormContainer>
      <SectionTitle>Основные параметры</SectionTitle>

      <Label>Адрес квартиры</Label>
      <InputField
        type="text"
        placeholder="Адрес"
        value={formState.address}
        onChange={(e) => updateField("address", e.target.value)}
      />

      <RowContainer>
        <div>
          <Label>Площадь квартиры</Label>
          <InputField
            type="text"
            placeholder="Площадь, м²"
            value={formState.area !== null ? formState.area.toString() : ""}
            onChange={(e) =>
              updateField(
                "area",
                e.target.value ? Number(e.target.value) : null
              )
            }
          />
        </div>

        <div>
          <Label>Этаж</Label>
          <InputField
            type="text"
            placeholder="Этаж"
            value={formState.floor !== null ? formState.floor.toString() : ""}
            onChange={(e) =>
              updateField(
                "floor",
                e.target.value ? Number(e.target.value) : null
              )
            }
          />
        </div>

        <div>
          <Label>Количество комнат</Label>
          <InputField
            type="text"
            placeholder="Комнатность"
            value={formState.rooms !== null ? formState.rooms.toString() : ""}
            onChange={(e) =>
              updateField(
                "rooms",
                e.target.value ? Number(e.target.value) : null
              )
            }
          />
        </div>
      </RowContainer>

      <Label>Тип дома</Label>
      <OptionGroup>
        <OptionButton
          type="button"
          selected={formState.houseType === HouseType.BRICK}
          onClick={() => updateField("houseType", HouseType.BRICK)}
        >
          {HouseType.BRICK}
        </OptionButton>
        <OptionButton
          type="button"
          selected={formState.houseType === HouseType.BLOCK}
          onClick={() => updateField("houseType", HouseType.BLOCK)}
        >
          {HouseType.BLOCK}
        </OptionButton>
        <OptionButton
          type="button"
          selected={formState.houseType === HouseType.PANEL}
          onClick={() => updateField("houseType", HouseType.PANEL)}
        >
          {HouseType.PANEL}
        </OptionButton>
        <OptionButton
          type="button"
          selected={formState.houseType === HouseType.OTHER}
          onClick={() => updateField("houseType", HouseType.OTHER)}
        >
          {HouseType.OTHER}
        </OptionButton>
      </OptionGroup>

      <Label>Ремонт</Label>
      <OptionGroup>
        <OptionButton
          type="button"
          selected={formState.repairType === RepairType.NONE}
          onClick={() => updateField("repairType", RepairType.NONE)}
        >
          {RepairType.NONE}
        </OptionButton>
        <OptionButton
          type="button"
          selected={formState.repairType === RepairType.COSMETIC}
          onClick={() => updateField("repairType", RepairType.COSMETIC)}
        >
          {RepairType.COSMETIC}
        </OptionButton>
        <OptionButton
          type="button"
          selected={formState.repairType === RepairType.MODERN}
          onClick={() => updateField("repairType", RepairType.MODERN)}
        >
          {RepairType.MODERN}
        </OptionButton>
      </OptionGroup>

      <Label>Сроки продажи</Label>
      <OptionGroup>
        <OptionButton
          type="button"
          selected={formState.saleTime === SaleTimeType.URGENT}
          onClick={() => updateField("saleTime", SaleTimeType.URGENT)}
        >
          {SaleTimeType.URGENT}
        </OptionButton>
        <OptionButton
          type="button"
          selected={formState.saleTime === SaleTimeType.VERY_SOON}
          onClick={() => updateField("saleTime", SaleTimeType.VERY_SOON)}
        >
          {SaleTimeType.VERY_SOON}
        </OptionButton>
        <OptionButton
          type="button"
          selected={formState.saleTime === SaleTimeType.MONTHS_1_3}
          onClick={() => updateField("saleTime", SaleTimeType.MONTHS_1_3)}
        >
          {SaleTimeType.MONTHS_1_3}
        </OptionButton>
        <OptionButton
          type="button"
          selected={formState.saleTime === SaleTimeType.NO_RUSH}
          onClick={() => updateField("saleTime", SaleTimeType.NO_RUSH)}
        >
          {SaleTimeType.NO_RUSH}
        </OptionButton>
      </OptionGroup>
    </FormContainer>
  );
};

export default Form;
