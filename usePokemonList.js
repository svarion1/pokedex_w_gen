import { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


export const usePokemonList = () => {
    const [list, setList] = useState([]);
    const [text, setText] = useState("");

    const onChangeText = useCallback((text) => {
      setText(text);
    }, []);

    const filteredList = useMemo(() => {
        if(!text) {
            return list;
        } else {
            return list.filter((item) => item.name.toLowerCase().startsWith(text.toLowerCase()));
        }
    }, [list, text]);

    useEffect(() => {
        setTimeout(() => {
            setList(pokemons);
        }, 1000);
    }, []);

    return { list, onChangeText, filteredList };
};
