/**
 * Plugin to Replace Default Search Engine External Link with DuckDuckGo
 * @author dqiri
 */

/**
 * @import { KikuPlugin } from "#/plugins/plugin-types";
 */

/**
 * @type { KikuPlugin }
 */
export const plugin = {
  ExternalLinks: (props) => {
    const { html } = props.ctx;

    function DuckDuckGoLink() {
      const url = new URL("https://duckduckgo.com/");

      // Params
      url.searchParams.set("q", props.ctx.$ankiFields.Expression); // search query
      url.searchParams.set("kl", "jp-jp"); // region

      const src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAECUlEQVQ4T22Ue0xTVxzHv6dPKI+2lIIFBYobYrap0OiEZBCmbIsPxAy0WYYYJGxmwsKyhT0Yj2XjoclYhE2NOI1kCiLGsDkjTtwjCLoIrIrbgGJDgQKlPEqBctt779J7oYnJPuef83t8v+eXk5ND8D+YMuMSaAFJJ2JpikQTEQuRiFBm42O4qQGA/U1LUw2kuY/yCgAQ7w6AOTP+OZcA5/wSX0vy2/oqBP4BcE+MgHW7IQ6PArO4gIUH7XB03DIKGSYrqrmnc1XrNTJm6l6ShGp+CTr8UYjjjxtYuH9ntfQMMl0yAlLSMHX+OEVbxzOir3T/6MlzRsP6uDCErutW530eOnnyM5CIGAS/WwKhUIjpc5VY+vPuig2PUK5CSMFXsJ4qd9LWsRRtU3cXZ/T07cS2kA+qU63flYJxzAFCEXz25UC1LxsSiRTuyVGMV78P15hp1QuCQCXUecWYrCnqjaIcLxPjgbidyv05t12TY1jobOOalFVNsItUiAhXcLHLRaP/QQ9k3x4FWJbLefBP3gOhXyDsP13aT4YO6urDKi4eGSvO5ppI9AuQF50Gw7BQKWRekYfxqnws/eW9X27ysJIzGCvJ+YGYC9/8J/D1zA22Cye4mmBbKiILK3H1pgHb4yKxdo2cy584fReHlf/Ccb2ei1dRHy3DdGOdmYyW5s77bNjsP9d6ga/E6qAtPYPh0Vko5L4IFFtBTzwGbZ/G0qNOsLZ7kEUDlqsAs0Qg33sIywMGkJHiQ8uyTQmS2WsrJynVCKu5DqlUCrhtgGEPqAkWi0MuCCSAex5w9AH0Iv9y5LveAjU8CGLO3zssT89ZN3X2S94IQNDJnyFXhwDuaeBROhae+sLeNQXKCoiDPGYE9Dzfq8r+EPY7LTbusjVl9Ucs5bl8BYBPQTU0CTv4YNkMZ1c5MNMDxkmwaGLheAKwLn4iTelZWMpyW8iQPv4VZcY7vzsH+7DU28GLE3dBm/8Fvwdgvfg1HDcvoV/N4HkrgWd58N20HT4b4zF9uS6Dy5hyd9zTfFqXYKk8BmZ+FlCHQ3O8CbV/V0HpE4xZixEDIx0Y1UiQ1e7ENhMgCFBA80kdLBXv9UXOtW/mX7Z+S5RE+6IhKKswYOKbIjD2GShqWpHdqwdNaLAMA4ZhIBKLkGRYht4YjJCCCtgaauYo05Ok6MvdBn5GAEMH4pJEa9a2Bed8LLXfboF7607Uim9gvTwGb0SkYa61AZaOa9gYmwpVcjqmvq+20ZOju7WND+979F4jD55/iPX1rQ3SH9OJI2MgCNZAKPMHwMJl6gdoNyjzIGaunLrFOKm89c0Ph1e1zxh5YAFiOrgljYEgXyAW60SaKAURCkGNGKfgcncTQldqG3t/9QpW+A+5XZowdtaujQAAABBkZUJHRTg1NDM1RkFCQkEwMzU5NWPM5OIAAAAASUVORK5CYII=`;
      return html`<a href=${url.toString()}>
        <img class="size-5 object-contain rounded-xs" src=${src} />
      </a>`;
    }

    return [
      // props.DefaultExternalLinks() [jpdb, jisho, Default]
      props.DefaultExternalLinks()[0], // jpdb
      props.DefaultExternalLinks()[1], // jisho
      DuckDuckGoLink()
      // you can create as many links as you want
    ];
  },
};
