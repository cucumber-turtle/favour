/** Library imports */
import { Text, View, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/** Project imports */
import Styles from '../components/Styles';

const GuideScreen = () => {
    return (
    <View style={Styles.container}>
        <ScrollView>
          <Image
            style={Styles.bigLogo}
            source={require("../../assets/FAVour.png")}
            />
          <Text style={Styles.title}>User guide</Text>
          <Text style={Styles.body}>FAVour (placeholder name) is an app for finding volunteers and
          finding volunteer work. It is a community app which people can use to help with simple
          tasks around their neighbourhoods or wider communities.</Text>
          <View style={Styles.spaceVertical}/>
          <Text style={Styles.header2}>Home page</Text>
          <Text style={Styles.body}>The home page is for browsing Favour entries and viewing them.
            Entries under "New" are newly uploaded. You can view Favours by clicking on the images.
            This will open a small pop-up with all the volunteering information. You can close this
            pop-up by either pressing "close", or tapping away.</Text>
          <Text style={Styles.header2}>Add entry</Text>
          <Text style={Styles.body}>The add entry page is where you can create and upload your own
          Favours! After adding the title, description, and requirements of your Favour entry,
          press "Location". Fill out the relevant address and press "confirm". After confirming,
          your entry will upload. You can now view it in the home page.</Text>
          <Text style={Styles.header2}>Profile</Text>
          <Text style={Styles.body}>The profile page is where you can view and manage your Favour
          account. You will initially have no display name after signing up. You can add or change
          your display name (and email!) by typing inside the boxes and pressing "save changes".
          Your changes will NOT be saved unless you do this. You will need to enter your current
          email and password before the change is accepted. You can also sign out from this page.
          </Text>
        </ScrollView>
    </View>
    );
}

export default GuideScreen;