import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	}

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/Pingviinid_ja_kosmos.png')} />
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} color={'#b180f0'} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={props.onCancel} color={'#f31282'} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
        padding: 16,
		//marginBottom: 24,
		//borderBottomWidth: 2,
		//borderBottomColor: "#cccc",
        backgroundColor: '#311b6b'
	},
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
	textInput: {
		borderWidth: 2,
		borderColor: "#e4d0ff",
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
		width: "100%",
		padding: 16,
	},
	buttonContainer: {
        marginTop: 16,
		flexDirection: "row",
	},
    button: {
        width: '40%',
        marginHorizontal: 8
    }
});
