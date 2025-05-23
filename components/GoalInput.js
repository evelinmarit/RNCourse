import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

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
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={props.onCancel} />
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
		marginBottom: 24,
		borderBottomWidth: 2,
		borderBottomColor: "#cccc",
	},
	textInput: {
		borderWidth: 2,
		borderColor: "#cccc",
		width: "100%",
		padding: 8,
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
