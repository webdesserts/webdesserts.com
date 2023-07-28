import * as React from "react";
import styled, { css } from "styled-components";
import { RouteComponentProps } from "react-router";
import { layouts, hrefs } from "../../common";
import { colors, fonts, Button, Heading } from "@webdesserts/ui";

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
    transform: scale(0.95);
  }

  a[href] {
    color: ${colors.darkAlt};
    text-decoration: underline;
  }

  h2 {
    margin-bottom: 16px;
  }

  h3 {
    margin-bottom: 8px;
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
    margin-top: 24px;
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
    grid-gap: 8px;
    font-weight: 700;
    width: 136px;
    justify-content: start;
  }

  .social li + li {
    margin-top: 8px;
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
  let printButton = <Button onClick={() => print()}>Print Page</Button>;

  let link_props = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <Layout parent={{ path: "/career", name: "Back" }} action={printButton}>
      <Paper>
        <header>
          <Heading size="large" as="h1">
            Michael C. Mullins
          </Heading>
          <ul className="contact-line">
            <li>
              <a href={hrefs.personal.email}>michael@webdesserts.com</a>
            </li>
            <li>
              <a href={hrefs.personal.website} {...link_props}>
                {hrefs.personal.website}
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
              Senior Software Developer
            </Heading>
            <div className="company">
              <a
                href="https://www.insurity.com/solutions/insurity-data-analytics-solutions/spatialkey-solutions/"
                {...link_props}
              >
                Insurity Data Analytics Solutions
              </a>
            </div>
            <div className="location">Remote</div>
            <div className="duration">September 2019 - Present</div>
            <ul>
              <li>
                Serving as the lead client developer for our Event Response app
              </li>
              <li>
                Responsible for the architectural direction of the client
                codebase
              </li>
              <li>
                Planning and developing major core features across all apps
              </li>
              <li>Working across teams to negotiate design & implementation</li>
              <li>Working to improve test coverage across our core</li>
              <li>Optimizing and documenting our process</li>
              <li>
                Training new developers on our codebase, product, and process
              </li>
            </ul>

            <Heading size="small" as="h3">
              Lead UI Designer / UI Developer
            </Heading>
            <div className="company">
              <a
                href="https://www.zeiss.com/meditec/us/products/ophthalmology-optometry/veracity-surgical.html"
                {...link_props}
              >
                Carl Zeiss Meditec Digital Innovations
              </a>
            </div>
            <div className="location">Temple, Texas</div>
            <div className="duration">October 2016 - May 2019</div>
            <ul>
              <li>
                Began as a startup where I was one of four starting developers
              </li>
              <li>
                Was responsible for our application's UI and its development
              </li>
              <li>
                Built and maintained our frontend architecture and build system
              </li>
              <li>Built and maintained our core React component library</li>
              <li>Worked with the product team to refine our user workflows</li>
              <li>Developed wireframes and mockups for upcoming features</li>
              <li>
                Guided developers as they implemented and maintained those
                designs
              </li>
            </ul>

            <Heading size="small" as="h3">
              UI Developer
            </Heading>
            <div className="company">
              <a
                href="https://eyecareleaders.com/integrity-emr/advanced-emr/"
                {...link_props}
              >
                Integrity Digital Solutions LLC
              </a>
            </div>
            <div className="location">Temple, Texas</div>
            <div className="duration">May 2015 - October 2016</div>
            <ul>
              <li>Acted as an adviser on UI and UX issues</li>
              <li>Helped train new developers on modern JavaScript and CSS</li>
              <li>Took the existing product and developed a design system</li>
              <li>
                Researched React, Redux, and other tools for an upcoming
                surgical product
              </li>
              <li>
                Helped build out the foundation for what would eventually become
                Veracity Surgical
              </li>
            </ul>

            <Heading size="small" as="h3">
              Consultant
            </Heading>
            <div className="company">
              <a href="http://www.cgi.com" {...link_props}>
                CGI Group Commercial
              </a>
            </div>
            <div className="location">Belton, Texas</div>
            <div className="duration">January 2013 - May 2015</div>
            <ul>
              <li>
                Helped design and develop internal applications for the City of
                San Diego
              </li>
              <li>Created mockups and graphics for new applications</li>
              <li>Acted as the lead frontend developer on several projects</li>
              <li>
                Worked to find creative ways to apply modern practices to legacy
                software
              </li>
              <li>Advised on UI and UX issues when needed</li>
            </ul>

            {/* <Heading size="small" as="h3">
              Web Intern
            </Heading>
            <div className="company">
              <a
                href="http://www.nrcs.usda.gov/wps/portal/nrcs/site/tx/home/" {...link_props}>
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
                Was originally supposed to manually move the files, but taught
                myself Ruby and wrote a script to do the job for me
              </li>
              <li>
                Designed the script to move the files, and rewrite links to
                reference their new home
              </li>
              <li>
                Helped Texas become the first site to be migrated to the new
                CMS
              </li>
            </ul> */}
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
                <a href="http://www.umhb.edu" {...link_props}>
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
                  <li className="know">SVG</li>
                  <li className="know">Markdown</li>
                </ul>
                <ul className="subgroup">
                  <li className="know">CSS</li>
                  <li className="know">Sass</li>
                  <li className="know">CSS Modules</li>
                  <li className="know">Styled Components</li>
                </ul>
                <ul className="subgroup">
                  <li className="know">JavaScript</li>
                  <li className="know">TypeScript</li>
                  <li className="know">React</li>
                </ul>
              </div>

              <div className="skillgroup">
                <ul className="subgroup">
                  <li className="know">Rust</li>
                  <li className="know">Node.js</li>
                </ul>
                <ul className="subgroup">
                  <li className="know">Express</li>
                  <li className="familiar">Serverless</li>
                  <li className="familiar">SQL</li>
                </ul>
                <ul className="subgroup">
                  <li className="know">Webpack</li>
                  <li className="know">Babel</li>
                  <li className="know">Jest</li>
                </ul>
              </div>

              <div className="skillgroup">
                <ul className="subgroup">
                  <li className="know">Figma</li>
                  <li className="familiar">Sketch</li>
                  <li className="familiar">Photoshop</li>
                  <li className="familiar">Illustator</li>
                </ul>
              </div>

              <div className="skillgroup">
                <ul className="subgroup">
                  <li className="know">Unix</li>
                  <li className="know">git://</li>
                </ul>
                <ul className="subgroup">
                  <li className="know">Github</li>
                  <li className="know">Jira</li>
                  <li className="know">Trello</li>
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
                  <a href={hrefs.personal.github} {...link_props}>
                    webdesserts
                  </a>
                </li>
                <li className="badge">
                  <svg viewBox="0 0 16 16">
                    <use xlinkHref="#icon-linkedin" />
                  </svg>
                  <a href={hrefs.personal.linkedin} {...link_props}>
                    /in/webdesserts
                  </a>
                </li>
                <li className="badge">
                  <svg viewBox="0 0 16 16">
                    <use xlinkHref="#icon-at-protocol" />
                  </svg>
                  <a href={hrefs.personal.bluesky} {...link_props}>
                    @webdesserts.com
                  </a>
                </li>
              </ul>
            </section>
          </aside>
        </div>
        <footer>
          This Résumé is maintained at{" "}
          <a href={`${hrefs.personal.website}/resume`} {...link_props}>
            {hrefs.personal.website}
          </a>
        </footer>
      </Paper>

      <svg className="hidden">
        <defs>
          <svg id="icon-linkedin" viewBox="0 0 20.954 20.824">
            <path d="M2.888,0.474c0.328,0,0.641,0.068,0.937,0.197c0.296,0.132,0.555,0.306,0.78,0.52 c0.223,0.217,0.396,0.472,0.52,0.77c0.123,0.295,0.184,0.606,0.184,0.937c0,0.33-0.061,0.639-0.184,0.932 c-0.124,0.29-0.296,0.545-0.52,0.76C4.38,4.805,4.121,4.979,3.825,5.11C3.529,5.243,3.216,5.307,2.888,5.307 c-0.331,0-0.642-0.064-0.934-0.197c-0.29-0.131-0.546-0.305-0.762-0.52c-0.214-0.215-0.388-0.47-0.52-0.76 C0.542,3.537,0.477,3.228,0.477,2.898c0-0.331,0.065-0.642,0.195-0.937c0.132-0.298,0.306-0.553,0.52-0.77 c0.215-0.214,0.472-0.387,0.762-0.52C2.245,0.542,2.557,0.474,2.888,0.474z M4.688,6.741c0.136,0,0.253,0.048,0.361,0.152 c0.106,0.101,0.159,0.223,0.159,0.368V19.83c0,0.134-0.053,0.255-0.159,0.361c-0.108,0.106-0.225,0.159-0.361,0.159H1.123 c-0.134,0-0.255-0.053-0.361-0.159c-0.104-0.106-0.159-0.227-0.159-0.361V7.261c0-0.134,0.055-0.257,0.159-0.363 c0.106-0.103,0.227-0.157,0.361-0.157H4.688L4.688,6.741z M15.177,6.422c1.606,0,2.889,0.404,3.855,1.212 c0.965,0.81,1.446,2.05,1.446,3.722v8.474c0,0.134-0.055,0.255-0.157,0.361c-0.106,0.106-0.229,0.159-0.363,0.159h-3.666 c-0.134,0-0.25-0.053-0.349-0.159c-0.096-0.106-0.144-0.227-0.144-0.361v-7.661c0-0.641-0.117-1.134-0.349-1.472 c-0.233-0.336-0.704-0.507-1.412-0.507c-0.45,0-0.826,0.075-1.131,0.222c-0.303,0.147-0.543,0.348-0.717,0.596 c-0.174,0.25-0.293,0.546-0.359,0.894c-0.07,0.348-0.104,0.719-0.104,1.118v6.81c0,0.134-0.051,0.255-0.157,0.361 c-0.106,0.106-0.225,0.159-0.363,0.159H7.643c-0.136,0-0.257-0.053-0.362-0.159s-0.157-0.227-0.157-0.361V7.261 c0-0.134,0.051-0.257,0.157-0.363c0.106-0.103,0.227-0.157,0.362-0.157h3.461c0.28,0,0.435,0.106,0.468,0.323 c0.036,0.215,0.051,0.419,0.051,0.616c0.482-0.45,1.03-0.772,1.644-0.965C13.881,6.521,14.516,6.422,15.177,6.422z" />
          </svg>
          <svg id="icon-github" viewBox="0 0 23.752 20.55">
            <path d="M23.434,10.587c0,1.946-0.276,3.545-0.832,4.802c-0.553,1.255-1.34,2.243-2.358,2.962 c-1.017,0.717-2.237,1.218-3.654,1.5c-1.417,0.285-2.987,0.424-4.706,0.424c-1.726,0-3.304-0.139-4.732-0.424 c-1.426-0.282-2.645-0.784-3.653-1.5c-1.011-0.718-1.793-1.707-2.349-2.962c-0.555-1.256-0.832-2.856-0.832-4.802 c0-0.956,0.153-1.885,0.464-2.783C1.088,6.907,1.561,6.1,2.197,5.383L2.158,5.331l0.039-0.024C2.064,4.981,1.972,4.643,1.926,4.292 C1.881,3.943,1.859,3.588,1.859,3.231c0-0.209,0.006-0.446,0.023-0.708c0.018-0.262,0.048-0.537,0.1-0.82 c0.052-0.283,0.115-0.549,0.194-0.797c0.082-0.246,0.179-0.455,0.297-0.63H2.57c0.509,0,0.97,0.054,1.384,0.156 c0.414,0.105,0.806,0.25,1.184,0.44c0.373,0.186,0.738,0.403,1.088,0.65C6.578,1.767,6.956,2.02,7.364,2.277 C8.083,2.07,8.828,1.933,9.598,1.867c0.775-0.067,1.535-0.103,2.286-0.103s1.511,0.036,2.278,0.103 c0.765,0.067,1.519,0.203,2.252,0.411c0.393-0.258,0.769-0.511,1.128-0.756c0.358-0.247,0.72-0.464,1.088-0.65 c0.367-0.189,0.755-0.335,1.168-0.44c0.414-0.102,0.876-0.156,1.384-0.156h0.126c0.1,0.167,0.191,0.376,0.268,0.626 c0.082,0.25,0.146,0.518,0.194,0.802c0.052,0.283,0.089,0.558,0.112,0.82c0.026,0.262,0.041,0.499,0.041,0.708 c0,0.358-0.026,0.712-0.077,1.061c-0.05,0.352-0.132,0.69-0.25,1.015v0.024l-0.024,0.052c0.632,0.717,1.102,1.525,1.408,2.422 C23.284,8.702,23.434,9.631,23.434,10.587z M15.826,9.536c-0.65,0-1.302,0.03-1.958,0.091c-0.656,0.058-1.309,0.085-1.958,0.085 c-0.652,0-1.308-0.027-1.966-0.085C9.284,9.566,8.631,9.536,7.978,9.536c-1.352,0-2.445,0.367-3.278,1.091 c-0.835,0.724-1.252,1.798-1.252,3.216c0,1.211,0.268,2.146,0.806,2.804c0.539,0.659,1.226,1.144,2.066,1.452 c0.84,0.308,1.752,0.488,2.74,0.537c0.991,0.052,1.94,0.077,2.849,0.077c0.618,0,1.25-0.008,1.907-0.026 c0.656-0.015,1.294-0.07,1.923-0.155c0.626-0.091,1.22-0.23,1.782-0.427c0.564-0.194,1.053-0.478,1.47-0.846 c0.418-0.364,0.75-0.83,1-1.396c0.252-0.562,0.379-1.25,0.379-2.072c0-0.699-0.112-1.314-0.339-1.845 c-0.226-0.529-0.54-0.973-0.938-1.332c-0.403-0.358-0.877-0.629-1.434-0.808C17.105,9.628,16.496,9.536,15.826,9.536z M6.502,13.331 c0-0.552,0.109-1.022,0.332-1.416c0.22-0.392,0.496-0.586,0.82-0.586c0.324,0,0.602,0.194,0.832,0.586 c0.229,0.394,0.344,0.864,0.344,1.416c0,0.552-0.115,1.018-0.344,1.406c-0.23,0.388-0.508,0.582-0.832,0.582 c-0.324,0-0.6-0.194-0.82-0.582C6.611,14.349,6.502,13.882,6.502,13.331z M11.884,17.962c-0.358,0-0.683-0.121-0.974-0.358 c-0.294-0.238-0.506-0.552-0.64-0.946c-0.05-0.132,0-0.236,0.149-0.312c0.133-0.049,0.235,0.003,0.302,0.162 c0.224,0.635,0.612,0.947,1.164,0.94c0.258,0,0.496-0.086,0.708-0.258c0.212-0.171,0.359-0.399,0.444-0.682 c0.067-0.165,0.176-0.223,0.324-0.162c0.132,0.05,0.188,0.155,0.164,0.312c-0.133,0.394-0.347,0.708-0.64,0.946 C12.593,17.841,12.26,17.962,11.884,17.962z M12.622,15.271c0-0.101-0.074-0.188-0.217-0.264c-0.149-0.076-0.323-0.114-0.521-0.114 c-0.209,0-0.388,0.038-0.53,0.114c-0.149,0.076-0.22,0.162-0.22,0.264c0,0.1,0.071,0.189,0.22,0.268 c0.142,0.079,0.321,0.12,0.53,0.12c0.209,0,0.384-0.041,0.526-0.12C12.552,15.46,12.622,15.371,12.622,15.271z M17.266,13.331 c0-0.552-0.112-1.022-0.336-1.416c-0.227-0.392-0.499-0.586-0.815-0.586c-0.323,0-0.605,0.194-0.84,0.586 c-0.232,0.394-0.35,0.864-0.35,1.416c0,0.552,0.118,1.018,0.35,1.406c0.235,0.388,0.517,0.582,0.84,0.582 c0.324,0,0.599-0.194,0.82-0.582C17.153,14.349,17.266,13.882,17.266,13.331z" />
          </svg>
          <svg id="icon-at-protocol" viewBox="0 0 25 25">
            <path d="M5.45391 5.8H8.51391L13.6139 20H10.5939L9.35391 16.58H4.57391L3.35391 20H0.333906L5.45391 5.8ZM8.83391 14.54L6.97391 8.82L5.05391 14.54H8.83391ZM24.4833 8.38H20.0233V20H17.1033V8.38H12.6233V5.8H24.4833V8.38Z" />
          </svg>
        </defs>
      </svg>
    </Layout>
  );
}
