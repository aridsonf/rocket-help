import Colors from "../../theme/Colors";
import Font from "../../theme/Font";

export default {
    view: {
        alignItems: "center" ,
        bg: Colors.base.background
    },
    box: {
        w: "90%",
        h:"100%",
        pt:"6"
    },
    vStack: {
        h: "100%"
    },
    hStackHeading: {
        justifyContent: "space-between",
        alignItems: "center"
    },
    textHeading: {
        color: Colors.base.textBase,
        fontSize: Font.fontSize.md
    },
    hStackButtons: {
        mt: "3",
        space: "2",
        mr: "2"
    },
    boxSelectButtons: {
        w: "50%"
    },
    flatList: {
        mt: "5",
        w: "100%"
    },
    boxSendButton: {
        flexGrow: "1",
        justifyContent: "flex-end"
    },
    endButton: {
        alignSelf: "end", w: "100%" 
    }
}