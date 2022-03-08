import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import {brandColors} from '../../components/Core/basicStyles';

//style
import styles from './style';

const Home = () => {
  const [selectedButton, setSelectedButton] = useState<string>('');
  const [testResult, setTestResult] = useState<string>('');
  const onContinue = () => {
    if (testResult) {
      setSelectedButton('');
      setTestResult('');
      return;
    }
    setTestResult(selectedButton === 'Hause' ? 'secondaryLight' : 'lightRed');
  };
  const answerArray = ['folgen', 'Schaf', 'Bereiden', 'Hause'];
  const onSelectHandler = value => () => setSelectedButton(value);
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.container}>
        <View style={styles.containerWrapper}>
          <Text style={styles.subHeaderText}>Fill the missing word.</Text>
          <Text style={styles.headerText}>
            The <Text style={styles.headerMiddle}>{' house '}</Text>is small.
          </Text>
          <View style={styles.testQuestionWrapper}>
            <Text style={styles.middleText}>{' Das '}</Text>
            {selectedButton ? (
              <Button
                disabled
                text={selectedButton}
                buttonStyle={styles.selectedButton}
                active
                isRight={!!(selectedButton === 'Hause' && testResult)}
                isWrong={!!(selectedButton === 'Hause' && testResult)}
              />
            ) : (
              <View style={styles.border} />
            )}
            <Text style={styles.middleText}>{' ist  klein.'}</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <FlatList
              data={answerArray}
              keyExtractor={item => item.key}
              numColumns={2}
              renderItem={({item}) => (
                <Button
                  onPress={onSelectHandler(item)}
                  text={item}
                  selected={item === selectedButton}
                  active={!testResult}
                  disabled={!!testResult}
                />
              )}
            />
          </View>
        </View>
        <View
          style={[
            testResult && styles.bottomModelWrapper,
            {
              backgroundColor: brandColors[testResult],
            },
          ]}>
          {!!testResult && (
            <View style={styles.textCombo}>
              <Text style={styles.modalText}>
                {testResult === 'secondaryLight'
                  ? 'Great Job!'
                  : 'Answer:Hasue'}
              </Text>
              <Image
                source={require('../../assets/flag.png')}
                style={styles.image}
              />
            </View>
          )}
          <TouchableOpacity
            disabled={!selectedButton}
            style={[
              styles.continueButton,
              selectedButton && styles.activeButton,
              testResult && {
                backgroundColor: brandColors.whiteColor,
              },
            ]}
            onPress={onContinue}>
            <Text
              style={[
                styles.buttonText,
                !!testResult && {
                  color: brandColors[testResult],
                },
              ]}>
              {selectedButton && !testResult ? 'CHECK ANSWER' : 'CONTINUE'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
