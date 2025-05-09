import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  academicVocabulary,
  airportConversations,
  artificialIntelligence,
  askingForFeedback,
  businessMeetings,
  conflictResolution,
  culturalSensitivity,
  customerServiceScenarios,
  cybersecurityVocabulary,
  debateSkills,
  describingExperiences,
  disagreeingPolitely,
  emailEtiquette,
  environmentalIssues,
  eventPlanning,
  explainingProcedures,
  financialEnglish,
  futurePredictions,
  givingFeedback,
  givingPresentations,
  hostingGuests,
  hotelAndTravelBooking,
  immigrationAndCustoms,
  insuranceAndClaims,
  jobInterviews,
  leadershipAndManagement,
  legalConversations,
  makingApologies,
  marketingAndAdvertising,
  medicalEnglish,
  mentalHealthConversations,
  negotiationSkills,
  networkingEvents,
  officeAndAdminVocabulary,
  orderingOnline,
  persuasiveSpeaking,
  phoneAndChatSupport,
  projectManagement,
  remoteWorkEnglish,
  restaurantCafeEnglish,
  resumeAndCVWriting,
  scientificDiscussions,
  shoppingInMalls,
  socialMediaLanguage,
  startupAndEntrepreneurship,
  teamCollaboration,
  technologyAndInnovation,
  techSupportConversations,
  tourGuideEnglish,
  workplaceCommunication,
} from "@/assets/data/expressions/advancedExpressions";
import ShowExpression from "./ShowExpression";

const AdvancedExpressionceController = ({ title }: { title: any }) => {
  switch (title) {
    case "Academic Vocabulary in Use":
      return <ShowExpression sentences={academicVocabulary} />;
    case "Business Meetings":
      return <ShowExpression sentences={businessMeetings} />;
    case "Startup and Entrepreneurship":
      return <ShowExpression sentences={startupAndEntrepreneurship} />;

    case "Marketing and Advertising":
      return <ShowExpression sentences={marketingAndAdvertising} />;
    case "Job Interviews":
      return <ShowExpression sentences={jobInterviews} />;
    case "Resume and CV Writing":
      return <ShowExpression sentences={resumeAndCVWriting} />;
    case "Networking Events":
      return <ShowExpression sentences={networkingEvents} />;
    case "Project Management":
      return <ShowExpression sentences={projectManagement} />;
    case "Workplace Communication":
      return <ShowExpression sentences={workplaceCommunication} />;
    case "Email Etiquette":
      return <ShowExpression sentences={emailEtiquette} />;
    case "Giving Presentations":
      return <ShowExpression sentences={givingPresentations} />;
    case "Customer Service Scenarios":
      return <ShowExpression sentences={customerServiceScenarios} />;
    case "Conflict Resolution":
      return <ShowExpression sentences={conflictResolution} />;
    case "Team Collaboration":
      return <ShowExpression sentences={teamCollaboration} />;
    case "Office and Admin Vocabulary":
      return <ShowExpression sentences={officeAndAdminVocabulary} />;
    case "Leadership and Management":
      return <ShowExpression sentences={leadershipAndManagement} />;
    case "Financial English":
      return <ShowExpression sentences={financialEnglish} />;
    case "Legal Conversations":
      return <ShowExpression sentences={legalConversations} />;
    case "Insurance and Claims":
      return <ShowExpression sentences={insuranceAndClaims} />;
    case "Medical English":
      return <ShowExpression sentences={medicalEnglish} />;
    case "Mental Health Conversations":
      return <ShowExpression sentences={mentalHealthConversations} />;
    case "Hotel and Travel Booking":
      return <ShowExpression sentences={hotelAndTravelBooking} />;
    case "Airport Conversations":
      return <ShowExpression sentences={airportConversations} />;
    case "Immigration and Customs":
      return <ShowExpression sentences={immigrationAndCustoms} />;
    case "Tour Guide English":
      return <ShowExpression sentences={tourGuideEnglish} />;
    case "Restaurant and Café English":
      return <ShowExpression sentences={restaurantCafeEnglish} />;
    case "Shopping in Malls":
      return <ShowExpression sentences={shoppingInMalls} />;
    case "Ordering Online":
      return <ShowExpression sentences={orderingOnline} />;
    case "Tech Support Conversations":
      return <ShowExpression sentences={techSupportConversations} />;
    case "Phone and Chat Support":
      return <ShowExpression sentences={phoneAndChatSupport} />;
    case "Asking for Feedback":
      return <ShowExpression sentences={askingForFeedback} />;
    case "Giving Feedback":
      return <ShowExpression sentences={givingFeedback} />;
    case "Event Planning":
      return <ShowExpression sentences={eventPlanning} />;
    case "Hosting Guests":
      return <ShowExpression sentences={hostingGuests} />;
    case "Describing Experiences":
      return <ShowExpression sentences={describingExperiences} />;
    case "Explaining Procedures":
      return <ShowExpression sentences={explainingProcedures} />;
    case "Making Apologies":
      return <ShowExpression sentences={makingApologies} />;
    case "Disagreeing Politely":
      return <ShowExpression sentences={disagreeingPolitely} />;
    case "Negotiation Skills":
      return <ShowExpression sentences={negotiationSkills} />;
    case "Persuasive Speaking":
      return <ShowExpression sentences={persuasiveSpeaking} />;
    case "Debate Skills":
      return <ShowExpression sentences={debateSkills} />;
    case "Scientific Discussions":
      return <ShowExpression sentences={scientificDiscussions} />;
    case "Environmental Issues":
      return <ShowExpression sentences={environmentalIssues} />;
    case "Technology and Innovation":
      return <ShowExpression sentences={technologyAndInnovation} />;
    case "Social Media Language":
      return <ShowExpression sentences={socialMediaLanguage} />;
    case "Cybersecurity Vocabulary":
      return <ShowExpression sentences={cybersecurityVocabulary} />;
    case "Artificial Intelligence":
      return <ShowExpression sentences={artificialIntelligence} />;
    case "Remote Work English":
      return <ShowExpression sentences={remoteWorkEnglish} />;
    case "Cultural Sensitivity":
      return <ShowExpression sentences={culturalSensitivity} />;
    case "Future Predictions":
      return <ShowExpression sentences={futurePredictions} />;

    default:
      return <Text>Topic not found</Text>;
  }
};

const styles = StyleSheet.create({});

export default AdvancedExpressionceController;
