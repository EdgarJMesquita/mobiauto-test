import { theme } from "Global/theme";
import {
  Container,
  Input,
  ModalContainer,
  ModalTitle,
  OptionItem,
  OptionText,
  Row,
  Scroll,
  Text,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import useSWR from "swr";
import { useState } from "react";
import ReactNativeModal from "react-native-modal";
import { Dimensions, TouchableOpacity } from "react-native";
import { fetcher } from "Services/api";

export type Option = {
  id: string;
  name: string;
};

type ResponseType = Array<Option> | { years: Array<number> };

type Props = {
  placeholder: string;
  value: Option | null;
  onChange: (option: Option) => void;
  path: string;
  disabled?: boolean;
};

export function Select({
  placeholder,
  value,
  onChange,
  path,
  disabled,
}: Props) {
  const { data, error } = useSWR<ResponseType>(disabled ? null : path, fetcher);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { width, height } = Dimensions.get("window");

  function adapter(data?: ResponseType): Array<Option> {
    if (!data) return [];

    if (Array.isArray(data)) {
      return data;
    }

    return data.years.map((it) => ({ id: it.toString(), name: it.toString() }));
  }

  function closeModal() {
    setOpen(false);
    setSearch("");
  }

  function openModal() {
    setOpen(true);
  }

  function handleOnSelected(option: Option) {
    onChange(option);
    closeModal();
  }

  function handleFilter(option: Option): boolean {
    if (!search) return true;
    if (option.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
      return true;
    }
    return false;
  }

  const adaptedData = adapter(data).filter(handleFilter);

  return (
    <>
      <Container
        onPress={openModal}
        style={{ opacity: disabled ? 0.5 : 1 }}
        disabled={disabled}
      >
        <Text active={!!value}>{value?.name ?? placeholder}</Text>
        <AntDesign
          name="caretdown"
          size={12}
          color={theme.colors.inputOutline}
        />
      </Container>
      <ReactNativeModal
        isVisible={open}
        deviceWidth={width}
        deviceHeight={height}
        style={{ margin: 0, justifyContent: "flex-end" }}
        onModalHide={closeModal}
        onBackdropPress={closeModal}
        avoidKeyboard
        useNativeDriver
      >
        <ModalContainer style={{ height: height * 0.5 }}>
          <Row>
            <ModalTitle>{placeholder}</ModalTitle>
            <TouchableOpacity onPress={closeModal}>
              <AntDesign
                name="closecircleo"
                size={20}
                color={theme.colors.title}
              />
            </TouchableOpacity>
          </Row>
          <Input
            value={search}
            onChangeText={setSearch}
            placeholder={placeholder}
            autoFocus
          />
          <Scroll keyboardShouldPersistTaps="handled">
            {adaptedData.map((it, index) => (
              <OptionItem onPress={() => handleOnSelected(it)} key={index}>
                <OptionText>{it.name}</OptionText>
              </OptionItem>
            ))}
            {!!search && adaptedData.length === 0 && (
              <OptionText style={{ textAlign: "center" }}>
                Não há resultados para "{search}"
              </OptionText>
            )}
            {!!error && !data && (
              <OptionText style={{ textAlign: "center" }}>
                {error?.response?.data?.error || "Algo deu errado"}
              </OptionText>
            )}
          </Scroll>
        </ModalContainer>
      </ReactNativeModal>
    </>
  );
}
