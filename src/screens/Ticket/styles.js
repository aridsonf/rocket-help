import Colors from "../../theme/Colors";
import Font from "../../theme/Font";

export default {
    mainBox: {
        alignItems: "center" ,
        bg: Colors.base.background
    },
    hStackStatus: {
        w: "100%",
        bg: Colors.base.secondaryShape,
        py: "16px",
        px: "12px",
        alignItems: "center",
        justifyContent: "center",
        mt: "-1"
    },
    textOngoing: {
        ml: "2",
        fontSize: Font.fontSize.md,
        color: Colors.support.secondary
    },
    textFinished: {
        ml: "2",
        fontSize: Font.fontSize.md,
        color: Colors.support.secondary2
    },
    scrollBox: {
        w:"90%",
        h:"93.2%"
    },
    scrollVStack: {
        space: "6",
        py: "6"
    },
    cardIcon: {
        color: Colors.support.primary,
        h: "22px"
    },
    boxEndButton: {
        alignSelf: "end"
    },
    endButton: {
        w: "100%" 
    }
}