import { useIsFocused } from '@react-navigation/native'

const FocusAwareStatusBar = (props) => {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}

const StatusBar = () => {
  return (
    <FocusAwareStatusBar barStyle='dark-content' backgroundColor='#ffffff' />
  )
}

export default StatusBar