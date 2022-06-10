import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Card, Input, NumberContainer } from "../../components/index";
import {React, useState} from "react";

import Colors from "../../constants/colors";
import { styles } from "./styles";

const StartGame = ({onStartGame}) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState('');
  const [confirmed, setConfirmed] =useState(false);
  const isIOS = Platform.OS==="ios";

  const handlerInputNumber = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };
  
  const handlerClearInput = ()=> {
    setEnteredValue("");
    setConfirmed(false);
  }
  
  const handlerConfirmInput = ()=> {
      const chosenNumber =parseInt(enteredValue)
      if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber >= 99) return;
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue("");
  }

  let confirmedOutput;
  if (confirmed) {
      confirmedOutput = (
        <Card style={styles.summaryContainer}>
            <Text style={styles.subtitle}>Chosen Number</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button style={styles.button}
                    title="Start Game"
                    onPress={()=>onStartGame(selectedNumber)}
                    color={Colors.secondary}
            />
        </Card>
    );
  }
  //   const confirmedOutput = confirmed ? <Text> Chosen number: {selectedNumber}</Text> : null;
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={isIOS ? "position" : "padding"}
      keyboardVerticalOffset={30}
    >
      <TouchableWithoutFeedback
        style={styles.containerTouchable}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ScrollView style={styles.containerScroll}>
          <Text style={styles.title}>▶️ Are you ready to play?</Text>
          <Card style={styles.inputContainer}>
            <Text style={styles.subtitle}>Add a number 👇</Text>
            <Input
              placeholder="Your number"
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={2}
              blurOnSubmit
              onChangeText={handlerInputNumber}
              value={enteredValue}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Clean"
                  onPress={() => handlerClearInput()}
                  color={Colors.primary}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Submit"
                  onPress={() => handlerConfirmInput()}
                  color={Colors.secondary}
                />
              </View>
            </View>
          </Card>
          {confirmedOutput}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StartGame;