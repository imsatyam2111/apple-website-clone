import "../../assets/styles/modules/Footer/style.css";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text">
        <p>
          1. The following purchases with Apple Card are ineligible to earn 5%
          back: monthly financing through Apple Card Monthly Installments, Apple
          iPhone Payments, the iPhone Upgrade Program, and wireless carrier
          financing plans;{" "}
          <a href="/#">
            <b>Apple Media Services</b>
          </a>
          ; AppleCare+ monthly payments. Subject to credit approval. Valid only
          on qualifying purchases in U.S. for new Apple Card customers who open
          an account and use it from 12/1/22 to 12/25/22 at Apple Store
          locations, apple.com, the Apple Store app, or by calling
          1-800-MY-APPLE. Accounts opened before 12/1/22 or after 12/25/22 do
          not qualify. New Apple Card users added to an Apple Card Family
          account opened during offer period can earn 5% back on their own
          purchases. For Apple Card Family co-owners and participants, bonus
          Daily Cash will be disbursed within 7 days of your qualifying
          purchase. Not valid for existing Apple Card users who merge their
          Apple Card accounts to become Co-Owners. 5% is total amount of Daily
          Cash that can be earned for qualifying Apple purchases using Apple
          Card. Returning qualified items that were purchased during offer
          period may impact your cash back. 5% savings is earned as Daily Cash
          and transferred to your Apple Cash card when transactions post to your
          Apple Card account. If you do not have an Apple Cash card, Daily Cash
          can be applied by you as a credit on your statement balance. See the{" "}
          <a href="/#">Apple Card Customer Agreement</a> for more details on
          Daily Cash and qualifying transactions. Changes to your account status
          during offer period may delay the fulfillment of your Daily Cash
          bonus.
        </p>
        <p>
          To access and use all the features of Apple Card, you must add Apple
          Card to Wallet on an iPhone or iPad with the latest version of iOS or
          iPadOS. Update to the latest version by going to Settings {">"}{" "}
          General {">"}
          Software Update. Tap Download and Install.
        </p>
        <p>
          Learn more about how Apple Card applications are evaluated at
          <a href="/#">support.apple.com/kb/HT209218.</a>
        </p>
        <p>Available for qualifying applicants in the United States.</p>
        <p>
          Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        </p>
      </div>
      <FooterLinks />
    </div>
  );
};
