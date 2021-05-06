import { CountContext } from "./theme-context.js";
import MyButton from "./MyButton";

function Main(props) {
  return (
    <div>
      <CountContext.Consumer>
        {({ context }) => {
          if (context === undefined) {
            throw new Error(
              "CountConsumer must be used within a CountProvider"
            );
          }

          <MyButton value={context} />;
        }}
      </CountContext.Consumer>
      <MyButton value="JONAS ASPEWM" />;
    </div>
  );
}

export default Main;
