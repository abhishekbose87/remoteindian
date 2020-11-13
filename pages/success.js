import Helmet from "components/helmet";

const Success = () => (
  <>
    <Helmet title={"Thank you !!"} />
    <div className="flex-col bg-white rounded-lg p-24 justify-center">
      <img
        className="mx-auto md:mx-0 md:mr-6"
        src="https://media.giphy.com/media/jTMSEIupFt19WalYHR/giphy.gif"
      />
      <div className="text-center mt-20">
        <div>I will send you the perks as soon as possible ⚡</div>
        <div>
          If you have any further queries, feel free to email me at abhishek at
          remoteindian.com
        </div>
      </div>
    </div>
  </>
);

export default Success;
