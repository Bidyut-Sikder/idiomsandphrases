import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  adjectivesAndOpposites,
  agreeingAndDisagreeing,
  animals,
  apologizing,
  askingForHelp,
  atSchool,
  atTheDoctor,
  atTheMarket,
  atTheRestaurant,
  clothingAndFashion,
  colorsAndShapes,
  commonQuestions,
  conjunctions,
  dailyRoutine,
  describingPeople,
  describingThings,
  directions,
  emotionsAndFeelings,
  environment,
  familyMembers,
  foodAndDrink,
  futurePlans,
  givingOpinions,
  greetings,
  healthAndIllness,
  hobbies,
  holidaysAndCelebrations,
  homeAndFurniture,
  hopesAndDreams,
  inTheClassroom,
  jobsAndWorkplaces,
  makingInvitations,
  makingSuggestions,
  numberMoney,
  occupations,
  onlineCommunication,
  pastEvents,
  phoneConversations,
  prepositions,
  roomsInAHouse,
  schoolSubjects,
  shoppingSentences,
  sports,
  technology,
  tellingStories,
  timeAndDate,
  transportation,
  travelAndPlaces,
  verbsAndActions,
  weather,
} from "@/assets/data/expressions/beginnerExpressions";
import ShowExpression from "./ShowExpression";

const BeginnerExpressionController: React.FC<{ title: string }> = ({ title }) => {
  switch (title) {
    case "Greetings":
      return <ShowExpression sentences={greetings} />;
    case "Common Questions":
      return <ShowExpression sentences={commonQuestions} />;
    case "Number, Money":
      return <ShowExpression sentences={numberMoney} />;
    case "Time and Date":
      return <ShowExpression sentences={timeAndDate} />;
    case "Weather":
      return <ShowExpression sentences={weather} />;
    case "Family Members":
      return <ShowExpression sentences={familyMembers} />;
    case "Occupations":
      return <ShowExpression sentences={occupations} />;
    case "Daily Routine":
      return <ShowExpression sentences={dailyRoutine} />;
    case "Hobbies":
      return <ShowExpression sentences={hobbies} />;
    case "Food and Drink":
      return <ShowExpression sentences={foodAndDrink} />;
    case "Shopping":
      return <ShowExpression sentences={shoppingSentences} />;
    case "Directions":
      return <ShowExpression sentences={directions} />;
    case "Transportation":
      return <ShowExpression sentences={transportation} />;
    case "At School":
      return <ShowExpression sentences={atSchool} />;
    case "In the Classroom":
      return <ShowExpression sentences={inTheClassroom} />;
    case "Health and Illness":
      return <ShowExpression sentences={healthAndIllness} />;
    case "At the Doctor":
      return <ShowExpression sentences={atTheDoctor} />;
    case "At the Market":
      return <ShowExpression sentences={atTheMarket} />;
    case "At the Restaurant":
      return <ShowExpression sentences={atTheRestaurant} />;
    case "Clothing and Fashion":
      return <ShowExpression sentences={clothingAndFashion} />;
    case "Holidays and Celebrations":
      return <ShowExpression sentences={holidaysAndCelebrations} />;
    case "Emotions and Feelings":
      return <ShowExpression sentences={emotionsAndFeelings} />;
    case "Technology":
      return <ShowExpression sentences={technology} />;
    case "Sports":
      return <ShowExpression sentences={sports} />;
    case "Travel and Places":
      return <ShowExpression sentences={travelAndPlaces} />;
    case "Describing People":
      return <ShowExpression sentences={describingPeople} />;
    case "Describing Things":
      return <ShowExpression sentences={describingThings} />;
    case "Animals":
      return <ShowExpression sentences={animals} />;
    case "Environment":
      return <ShowExpression sentences={environment} />;
    case "Colors and Shapes":
      return <ShowExpression sentences={colorsAndShapes} />;
    case "Home and Furniture":
      return <ShowExpression sentences={homeAndFurniture} />;
    case "Rooms in a House":
      return <ShowExpression sentences={roomsInAHouse} />;
    case "Jobs and Workplaces":
      return <ShowExpression sentences={jobsAndWorkplaces} />;
    case "School Subjects":
      return <ShowExpression sentences={schoolSubjects} />;
    case "Verbs and Actions":
      return <ShowExpression sentences={verbsAndActions} />;
    case "Adjectives and Opposites":
      return <ShowExpression sentences={adjectivesAndOpposites} />;
    case "Prepositions":
      return <ShowExpression sentences={prepositions} />;
    case "Conjunctions":
      return <ShowExpression sentences={conjunctions} />;
    case "Making Suggestions":
      return <ShowExpression sentences={makingSuggestions} />;
    case "Asking for Help":
      return <ShowExpression sentences={askingForHelp} />;
    case "Apologizing":
      return <ShowExpression sentences={apologizing} />;
    case "Making Invitations":
      return <ShowExpression sentences={makingInvitations} />;
    case "Agreeing and Disagreeing":
      return <ShowExpression sentences={agreeingAndDisagreeing} />;
    case "Giving Opinions":
      return <ShowExpression sentences={givingOpinions} />;
    case "Telling Stories":
      return <ShowExpression sentences={tellingStories} />;
    case "Future Plans":
      return <ShowExpression sentences={futurePlans} />;
    case "Past Events":
      return <ShowExpression sentences={pastEvents} />;
    case "Hopes and Dreams":
      return <ShowExpression sentences={hopesAndDreams} />;
    case "Phone Conversations":
      return <ShowExpression sentences={phoneConversations} />;
    case "Online Communication":
      return <ShowExpression sentences={onlineCommunication} />;
    default:
      return <Text>Topic not found</Text>;
  }
};

export default BeginnerExpressionController;
