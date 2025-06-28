import { Modal, Pressable, Text, Image } from "react-native";
import check from "../../images/check.png"
import { SuccessModalProps } from "../interfaces/sucessModalProps";

export function SuccessModal({ visible, onClose }: SuccessModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable
        className="flex-1 items-center justify-center bg-black/50"
        onPress={onClose}
      >
        <Pressable
          className="w-[310px] h-[125px] bg-green-100 rounded-lg items-center justify-center"
          onPress={(e) => e.stopPropagation()}
        >
          <Image source={check} className="w-12 h-12 mb-2" />
          <Text className="text-green-800 font-bold text-center">
            Conta registrada com sucesso!
          </Text>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
