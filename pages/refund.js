import React from "react";
import Wrapper from "@/components/Wrapper";

const Refund = () => (
  <Wrapper>
    <div className="refund-container">
      <h1 className="refund-title">Refund Policy</h1>
      <div className="refund-content">
        <p>
          We want you to be completely satisfied with your purchase. If you are not satisfied for any reason, you can request a refund within <strong>14 days</strong> of your purchase date. No questions asked.
        </p>
        <h2>How to request a refund?</h2>
        <ol>
          <li>Send an email to <a href="mailto:support@wristo.io">support@wristo.io</a> within <strong>14 days</strong> of your purchase.</li>
          <li>Please include your order confirmation, transaction ID, or payment receipt in your email.</li>
          <li>Optionally, you may include a brief reason for your refund request (this helps us improve our service, but is not required).</li>
        </ol>
        <h2>Refund process</h2>
        <ul>
          <li>Once your refund request is received and verified, we will process your refund within <strong>3-5 business days</strong>.</li>
          <li>Refunds will be issued to the original payment method used at the time of purchase.</li>
          <li>Depending on your payment provider, it may take additional time for the funds to appear in your account.</li>
        </ul>
        <h2>Important notes</h2>
        <ul>
          <li>Refund requests made after <strong>14 days</strong> from the date of purchase are generally not accepted, except as required by applicable law.</li>
          <li>We reserve the right to deny refund requests that are fraudulent or abusive.</li>
        </ul>
        <h2>Need help?</h2>
        <p>
          If you have any questions about our refund policy or need assistance, please contact us at <a href="mailto:support@wristo.io">support@wristo.io</a>.
        </p>
      </div>
      <style jsx>{`
        .refund-container {
          max-width: 700px;
          margin: 0 auto;
          padding: 48px 0 64px 0;
        }
        .refund-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #1a2a3a;
          margin-bottom: 18px;
        }
        .refund-content {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 8px #0001;
          padding: 32px 28px 32px 28px;
          color: #222;
          font-size: 1.13rem;
        }
        .refund-content h2 {
          font-size: 1.15rem;
          color: #1a2a3a;
          margin-top: 2em;
          margin-bottom: 10px;
          font-weight: 700;
        }
        .refund-content ul, .refund-content ol {
          margin-left: 1.5em;
          margin-bottom: 1.2em;
        }
        .refund-content li {
          margin-bottom: 0.5em;
        }
        .refund-content a {
          color: #0056b3;
          text-decoration: underline;
        }
        @media (max-width: 600px) {
          .refund-container {
            padding: 24px 0 32px 0;
          }
          .refund-content {
            padding: 18px 8px 18px 8px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  </Wrapper>
);

export default Refund; 