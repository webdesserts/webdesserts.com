import * as React from "react";
import styled, { css } from "styled-components";
import { RouteComponentProps } from "react-router";
import { layouts, Button, Heading } from "../../common";
import { colors, fonts } from "../../styles";

const Layout = styled(layouts.Default)`
  height: 11in;
  width: 8.5in;

  @media screen {
    background-color: #fefefe;
    border: 1px solid ${colors.liteAlt};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 24px 32px;
  }

  @media print {
    height: auto;
  }
`;

const Paper = styled.div`
  display: grid;
  grid-gap: 16px;
  font-size: 13px;
  line-height: 16px;
  border-radius: 2px;

  @media screen {
    /* The content seems to scale to fit the page when I try to print so it looks more like this: */
    /* how the actual handling works for different browsers and paper sizes is a bit worrisome. */
    transform: scale(.95);
  }

  a[href] {
    color: ${colors.darkAlt};
    text-decoration: underline;
  }

  .contact-line {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
  }

  .content {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr auto;
    grid-gap: 16px;
  }

  .content h2 {
    margin-bottom: 8px;
  }

  .experience ul {
    list-style: square;
    padding-left: 16px;
    margin: 8px 0 16px;
  }

  .location,
  .duration {
    display: inline-block;
  }

  .contact-line > * + *::before,
  .location + .duration::before {
    content: "|";
    margin: 0 8px;
    color: ${colors.liteAlt};
  }

  aside > * + * {
    margin-top: 16px;
  }

  .skillgroup + .skillgroup {
    margin-top: 16px;
  }

  .skillgroup > * + * {
    margin-top: 4px;
  }

  .subgroup > * + * {
    margin-left: 4px;
  }

  .skillgroup li {
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid transparent;
  }

  .skillgroup .know {
    border-color: ${colors.mid};
    font-weight: 500;
  }

  .skillgroup .familiar {
    color: ${colors.mid};
    border-color: ${colors.liteAlt};
  }

  .subgroup {
    display: flex;
    flex-flow: row wrap;
  }

  .social svg {
    width: 16px;
    height: 16px;
    fill: ${colors.darkAlt};
  }

  .social li {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 4px;
    border: 1px solid ${colors.mid};
    font-weight: 700;
    padding: 4px 8px;
    width: 136px;
    border-radius: 4px;
    text-align: right;
  }

  .social li + li {
    margin-top: 4px;
  }

  .details {
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: start;
    align-items: baseline;
    grid-gap: 0 8px;
    margin-top: 8px;
  }
  .label {
    font-style: italic;
  }
  .label::after {
    content: ":";
  }
  .field-item {
    font-weight: 500;
  }

  svg.hidden {
    display: none;
  }

  footer {
    ${fonts.caption}
    color: ${colors.mid};
    margin-top: 32px;
  }
`;

export function Resume(props: RouteComponentProps<{}>) {
  let printButton = <Button onClick={() => print()}>Print Page</Button>

  return (
    <Layout parent={{ path: "/career", name: "Back" }} action={printButton}>
      <Paper>
        <header>
          <Heading size="large" as="h1">
            Michael C. Mullins
          </Heading>
          <ul className="contact-line">
            <li>
              <a href="mailto:michael@webdesserts.com">
                michael@webdesserts.com
              </a>
            </li>
            <li>
              <a href="http://www.webdesserts.com" target="_blank">
                www.webdesserts.com
              </a>
            </li>
          </ul>
        </header>

        <div className="content">
          <section className="experience">
            <Heading size="medium" as="h2">
              Experience
            </Heading>

            <Heading size="small" as="h3">
              Lead UI Designer
            </Heading>
            <div className="company">
              <a
                href="https://www.zeiss.com/meditec/us/products/ophthalmology-optometry/veracity-surgical.html"
                target="_blank"
              >
                Carl Zeiss Meditec Digital Innovations
              </a>
            </div>
            <div className="location">Temple, Texas</div>
            <div className="duration">October 2016 - May 2019</div>
            <ul>
              <li>Continued the work started at Integrity</li>
              <li>Supported the product team in developing user workflows</li>
              <li>
                Developed wireframes and mockups for our larger projects
              </li>
              <li>
                Worked with developers to implement designs and debug layout
                issues
              </li>
              <li>Maintained core UI components</li>
            </ul>

            <Heading size="small" as="h3">
              Web Developer
            </Heading>
            <div className="company">
              <a
                href="https://eyecareleaders.com/integrity-emr/advanced-emr/"
                target="_blank"
              >
                Integrity Digital Solutions LLC
              </a>
            </div>
            <div className="location">Temple, Texas</div>
            <div className="duration">May 2015 - October 2016</div>
            <ul>
              <li>Developed scaffold for the frontend of new product</li>
              <li>Developed the frontend build system</li>
              <li>
                Developed core UI components to be used across our system
              </li>
              <li>Helped clean up layout and design of existing pages</li>
              <li>Advised on UX and UI issues when needed</li>
            </ul>

            <Heading size="small" as="h3">
              Consultant
            </Heading>
            <div className="company">
              <a href="http://www.cgi.com" target="_blank">
                CGI Group Commercial
              </a>
            </div>
            <div className="location">Belton, Texas</div>
            <div className="duration">January 2013 - May 2015</div>
            <ul>
              <li>
                Helped design and develop internal applications for the City
                of San Diego
              </li>
              <li>Created mockups and graphics for application concepts</li>
              <li>
                Acted as the lead frontend developer on several projects
              </li>
              <li>
                Worked to find creative ways to apply modern practices to
                legacy software
              </li>
              <li>Advised on UX and UI issues when needed</li>
            </ul>

            <Heading size="small" as="h3">
              Web Intern
            </Heading>
            <div className="company">
              <a
                href="http://www.nrcs.usda.gov/wps/portal/nrcs/site/tx/home/"
                target="_blank"
              >
                USDA-NRCS
              </a>
            </div>
            <div className="location">Temple, Texas</div>
            <div className="duration">February 2012 - May 2012</div>
            <ul>
              <li>
                Migrated files from an offsite FTP server to their local HTTPS
                server in preparation for a new CMS
              </li>
              <li>
                Taught myself Ruby and wrote a script to do the job for me in
                two weeks
              </li>
              <li>
                Designed the script to move the files, and rewrite links to
                reference their new home
              </li>
              <li>
                Helped Texas become the first site to be migrated to the new
                CMS
              </li>
            </ul>
          </section>

          <aside>
            <section className="education">
              <Heading size="medium" as="h2">
                Education
              </Heading>

              <Heading size="small" as="h3" className="degree">
                Computer Graphic Design
              </Heading>
              <div className="university">
                <a href="http://www.umhb.edu" target="_blank">
                  University of Mary Hardin-Baylor
                </a>
              </div>
              <div className="duration">August 2008 - August 2012</div>
              <div className="details">
                <div className="label">Minor</div>
                <div className="field-item">Art</div>
                <div className="label">GPA</div>
                <div className="field-item">3.32</div>
              </div>
            </section>

            <section className="skills">
              <Heading size="medium" as="h2">
                Skills
              </Heading>

              <div className="skillgroup">
                <ul className="subgroup">
                  <li className="know">HTML</li>
                  <li className="familiar">Markdown</li>
                </ul>
                <ul className="subgroup">
                  <li className="know">CSS</li>
                  <li className="know">Sass</li>
                  <li className="familiar">CSS-Modules</li>
                  <li className="familiar">Styled-Components</li>
                </ul>
                <ul className="subgroup">
                  <li className="know">JavaScript</li>
                  <li className="know">TypeScript</li>
                  <li className="familiar">Rust</li>
                </ul>
              </div>

              <div className="skillgroup">
                <ul className="subgroup">
                  <li className="know">Node.js</li>
                  <li className="know">React</li>
                </ul>
                <ul className="subgroup">
                  <li className="know">Mocha</li>
                  <li className="know">Webpack</li>
                  <li className="familiar">Gulp</li>
                </ul>
              </div>

              <div className="skillgroup">
                <ul className="subgroup">
                  <li className="know">Sketch</li>
                  <li className="know">Figma</li>
                  <li className="familiar">Photoshop</li>
                  <li className="familiar">Illustator</li>
                </ul>
              </div>

              <div className="skillgroup">
                <ul className="subgroup">
                  <li className="know">Unix</li>
                  <li className="know">Vim</li>
                  <li className="know">Git/Github</li>
                </ul>
                <ul className="subgroup">
                  <li className="know">Beaker</li>
                  <li className="familiar">dat://</li>
                </ul>
              </div>
            </section>

            <section className="social">
              <Heading size="medium" as="h2">
                Social
              </Heading>
              <ul>
                <li className="badge">
                  <svg viewBox="0 0 16 16">
                    <use xlinkHref="#icon-github" />
                  </svg>
                  <a href="http://github.com/webdesserts" target="_blank">webdesserts</a>
                </li>
                <li className="badge">
                  <svg viewBox="0 0 16 16">
                    <use xlinkHref="#icon-linkedin" />
                  </svg>
                  <a href="http://linkedin.com/in/mcmullins" target="_blank">/in/mcmullins</a>
                </li>
                <li className="badge">
                  <svg viewBox="0 0 16 16">
                    <use xlinkHref="#icon-twitter" />
                  </svg>
                  <a href="http://twitter.com/@webdesserts" target="_blank">@webdesserts</a>
                </li>
              </ul>
            </section>
          </aside>
        </div>
        <footer>
          This Resumé is maintained at{" "}
          <a href="http://www.webdesserts.com/resume" target="_blank">
            http://www.webdesserts.com/resume
          </a>{" "}
          and is available on{" "}
          <a href="https://beakerbrowser.com/" target="_blank">the p2p web</a>
        </footer>
      </Paper>

      <svg className="hidden">
        <defs>
          <svg id="icon-twitter" viewBox="0 0 25.958 21.151">
            <path d="M17.234,0.575c0.288,0,0.576,0,0.864,0c0.021,0.018,0.046,0.017,0.071,0.02 c1.222,0.119,2.266,0.616,3.132,1.484c0.062,0.062,0.117,0.084,0.207,0.065c1.042-0.223,2.026-0.597,2.952-1.126 c0.035-0.02,0.066-0.051,0.128-0.047c-0.398,1.177-1.124,2.081-2.155,2.748c0.979-0.114,1.913-0.375,2.818-0.759 c-0.029,0.061-0.063,0.113-0.1,0.165c-0.638,0.909-1.4,1.697-2.295,2.356c-0.076,0.056-0.1,0.114-0.097,0.206 c0.043,1.203-0.062,2.394-0.331,3.568c-0.664,2.897-2.029,5.406-4.168,7.482c-0.96,0.931-2.039,1.698-3.23,2.306 c-1.914,0.977-3.954,1.452-6.094,1.524c-1.003,0.034-1.999-0.031-2.988-0.203c-1.848-0.321-3.565-0.983-5.156-1.976 c-0.031-0.019-0.074-0.029-0.089-0.084c0.882,0.102,1.757,0.088,2.63-0.039c0.869-0.126,1.709-0.36,2.517-0.705 c0.808-0.345,1.558-0.784,2.273-1.343c-0.563-0.018-1.081-0.104-1.577-0.289c-1.502-0.559-2.531-1.594-3.087-3.097 c-0.046-0.124-0.041-0.128,0.089-0.105c0.548,0.094,1.096,0.092,1.643,0.002c0.15-0.024,0.302-0.046,0.46-0.107 c-2.885-0.648-4.118-3.302-3.979-5.004C2.364,7.985,3.09,8.2,3.873,8.213C3.868,8.192,3.856,8.185,3.844,8.177 C3.599,8.005,3.368,7.815,3.16,7.6C2.144,6.547,1.651,5.29,1.701,3.825c0.027-0.799,0.244-1.545,0.627-2.244 c0.037-0.068,0.058-0.085,0.115-0.015C2.79,1.99,3.162,2.39,3.556,2.77c1.129,1.088,2.401,1.97,3.818,2.641 c1.681,0.797,3.452,1.245,5.309,1.355c0.115,0.007,0.084-0.055,0.072-0.112c-0.124-0.609-0.137-1.221-0.04-1.835 c0.341-2.147,2.04-3.846,4.184-4.185C17.011,0.618,17.128,0.623,17.234,0.575z" />
          </svg>
          <svg id="icon-linkedin" viewBox="0 0 20.954 20.824">
            <path d="M2.888,0.474c0.328,0,0.641,0.068,0.937,0.197c0.296,0.132,0.555,0.306,0.78,0.52 c0.223,0.217,0.396,0.472,0.52,0.77c0.123,0.295,0.184,0.606,0.184,0.937c0,0.33-0.061,0.639-0.184,0.932 c-0.124,0.29-0.296,0.545-0.52,0.76C4.38,4.805,4.121,4.979,3.825,5.11C3.529,5.243,3.216,5.307,2.888,5.307 c-0.331,0-0.642-0.064-0.934-0.197c-0.29-0.131-0.546-0.305-0.762-0.52c-0.214-0.215-0.388-0.47-0.52-0.76 C0.542,3.537,0.477,3.228,0.477,2.898c0-0.331,0.065-0.642,0.195-0.937c0.132-0.298,0.306-0.553,0.52-0.77 c0.215-0.214,0.472-0.387,0.762-0.52C2.245,0.542,2.557,0.474,2.888,0.474z M4.688,6.741c0.136,0,0.253,0.048,0.361,0.152 c0.106,0.101,0.159,0.223,0.159,0.368V19.83c0,0.134-0.053,0.255-0.159,0.361c-0.108,0.106-0.225,0.159-0.361,0.159H1.123 c-0.134,0-0.255-0.053-0.361-0.159c-0.104-0.106-0.159-0.227-0.159-0.361V7.261c0-0.134,0.055-0.257,0.159-0.363 c0.106-0.103,0.227-0.157,0.361-0.157H4.688L4.688,6.741z M15.177,6.422c1.606,0,2.889,0.404,3.855,1.212 c0.965,0.81,1.446,2.05,1.446,3.722v8.474c0,0.134-0.055,0.255-0.157,0.361c-0.106,0.106-0.229,0.159-0.363,0.159h-3.666 c-0.134,0-0.25-0.053-0.349-0.159c-0.096-0.106-0.144-0.227-0.144-0.361v-7.661c0-0.641-0.117-1.134-0.349-1.472 c-0.233-0.336-0.704-0.507-1.412-0.507c-0.45,0-0.826,0.075-1.131,0.222c-0.303,0.147-0.543,0.348-0.717,0.596 c-0.174,0.25-0.293,0.546-0.359,0.894c-0.07,0.348-0.104,0.719-0.104,1.118v6.81c0,0.134-0.051,0.255-0.157,0.361 c-0.106,0.106-0.225,0.159-0.363,0.159H7.643c-0.136,0-0.257-0.053-0.362-0.159s-0.157-0.227-0.157-0.361V7.261 c0-0.134,0.051-0.257,0.157-0.363c0.106-0.103,0.227-0.157,0.362-0.157h3.461c0.28,0,0.435,0.106,0.468,0.323 c0.036,0.215,0.051,0.419,0.051,0.616c0.482-0.45,1.03-0.772,1.644-0.965C13.881,6.521,14.516,6.422,15.177,6.422z" />
          </svg>
          <svg id="icon-github" viewBox="0 0 23.752 20.55">
            <path d="M23.434,10.587c0,1.946-0.276,3.545-0.832,4.802c-0.553,1.255-1.34,2.243-2.358,2.962 c-1.017,0.717-2.237,1.218-3.654,1.5c-1.417,0.285-2.987,0.424-4.706,0.424c-1.726,0-3.304-0.139-4.732-0.424 c-1.426-0.282-2.645-0.784-3.653-1.5c-1.011-0.718-1.793-1.707-2.349-2.962c-0.555-1.256-0.832-2.856-0.832-4.802 c0-0.956,0.153-1.885,0.464-2.783C1.088,6.907,1.561,6.1,2.197,5.383L2.158,5.331l0.039-0.024C2.064,4.981,1.972,4.643,1.926,4.292 C1.881,3.943,1.859,3.588,1.859,3.231c0-0.209,0.006-0.446,0.023-0.708c0.018-0.262,0.048-0.537,0.1-0.82 c0.052-0.283,0.115-0.549,0.194-0.797c0.082-0.246,0.179-0.455,0.297-0.63H2.57c0.509,0,0.97,0.054,1.384,0.156 c0.414,0.105,0.806,0.25,1.184,0.44c0.373,0.186,0.738,0.403,1.088,0.65C6.578,1.767,6.956,2.02,7.364,2.277 C8.083,2.07,8.828,1.933,9.598,1.867c0.775-0.067,1.535-0.103,2.286-0.103s1.511,0.036,2.278,0.103 c0.765,0.067,1.519,0.203,2.252,0.411c0.393-0.258,0.769-0.511,1.128-0.756c0.358-0.247,0.72-0.464,1.088-0.65 c0.367-0.189,0.755-0.335,1.168-0.44c0.414-0.102,0.876-0.156,1.384-0.156h0.126c0.1,0.167,0.191,0.376,0.268,0.626 c0.082,0.25,0.146,0.518,0.194,0.802c0.052,0.283,0.089,0.558,0.112,0.82c0.026,0.262,0.041,0.499,0.041,0.708 c0,0.358-0.026,0.712-0.077,1.061c-0.05,0.352-0.132,0.69-0.25,1.015v0.024l-0.024,0.052c0.632,0.717,1.102,1.525,1.408,2.422 C23.284,8.702,23.434,9.631,23.434,10.587z M15.826,9.536c-0.65,0-1.302,0.03-1.958,0.091c-0.656,0.058-1.309,0.085-1.958,0.085 c-0.652,0-1.308-0.027-1.966-0.085C9.284,9.566,8.631,9.536,7.978,9.536c-1.352,0-2.445,0.367-3.278,1.091 c-0.835,0.724-1.252,1.798-1.252,3.216c0,1.211,0.268,2.146,0.806,2.804c0.539,0.659,1.226,1.144,2.066,1.452 c0.84,0.308,1.752,0.488,2.74,0.537c0.991,0.052,1.94,0.077,2.849,0.077c0.618,0,1.25-0.008,1.907-0.026 c0.656-0.015,1.294-0.07,1.923-0.155c0.626-0.091,1.22-0.23,1.782-0.427c0.564-0.194,1.053-0.478,1.47-0.846 c0.418-0.364,0.75-0.83,1-1.396c0.252-0.562,0.379-1.25,0.379-2.072c0-0.699-0.112-1.314-0.339-1.845 c-0.226-0.529-0.54-0.973-0.938-1.332c-0.403-0.358-0.877-0.629-1.434-0.808C17.105,9.628,16.496,9.536,15.826,9.536z M6.502,13.331 c0-0.552,0.109-1.022,0.332-1.416c0.22-0.392,0.496-0.586,0.82-0.586c0.324,0,0.602,0.194,0.832,0.586 c0.229,0.394,0.344,0.864,0.344,1.416c0,0.552-0.115,1.018-0.344,1.406c-0.23,0.388-0.508,0.582-0.832,0.582 c-0.324,0-0.6-0.194-0.82-0.582C6.611,14.349,6.502,13.882,6.502,13.331z M11.884,17.962c-0.358,0-0.683-0.121-0.974-0.358 c-0.294-0.238-0.506-0.552-0.64-0.946c-0.05-0.132,0-0.236,0.149-0.312c0.133-0.049,0.235,0.003,0.302,0.162 c0.224,0.635,0.612,0.947,1.164,0.94c0.258,0,0.496-0.086,0.708-0.258c0.212-0.171,0.359-0.399,0.444-0.682 c0.067-0.165,0.176-0.223,0.324-0.162c0.132,0.05,0.188,0.155,0.164,0.312c-0.133,0.394-0.347,0.708-0.64,0.946 C12.593,17.841,12.26,17.962,11.884,17.962z M12.622,15.271c0-0.101-0.074-0.188-0.217-0.264c-0.149-0.076-0.323-0.114-0.521-0.114 c-0.209,0-0.388,0.038-0.53,0.114c-0.149,0.076-0.22,0.162-0.22,0.264c0,0.1,0.071,0.189,0.22,0.268 c0.142,0.079,0.321,0.12,0.53,0.12c0.209,0,0.384-0.041,0.526-0.12C12.552,15.46,12.622,15.371,12.622,15.271z M17.266,13.331 c0-0.552-0.112-1.022-0.336-1.416c-0.227-0.392-0.499-0.586-0.815-0.586c-0.323,0-0.605,0.194-0.84,0.586 c-0.232,0.394-0.35,0.864-0.35,1.416c0,0.552,0.118,1.018,0.35,1.406c0.235,0.388,0.517,0.582,0.84,0.582 c0.324,0,0.599-0.194,0.82-0.582C17.153,14.349,17.266,13.882,17.266,13.331z" />
          </svg>
        </defs>
      </svg>
    </Layout>
  );
}