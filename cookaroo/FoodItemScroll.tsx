import { Text, TouchableOpacity } from "react-native";

export type itemProps = {
  txt: string;
};

const FoodItemScrool = ({ txt = "Burger" }: itemProps) => {
  return (

    <TouchableOpacity style={{ paddingHorizontal: 14,paddingVertical: 10,backgroundColor: "orange",borderRadius: 20,justifyContent: "center",alignItems: "center",marginRight: 12,
      }}
    >
      <Text style={{ color: "white", fontWeight: "600" }}>
        {txt}
      </Text>

    </TouchableOpacity>
    
  );
};

export default FoodItemScrool;
