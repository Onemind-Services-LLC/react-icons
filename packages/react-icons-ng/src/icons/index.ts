import path from "path";
import camelcase from "camelcase";
import { type IconDefinition } from "../../scripts/_types";
import { glob } from "../../scripts/glob";

export const icons: IconDefinition[] = [
  {
    id: "ai",
    name: "Ant Design Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/ant-design-icons/packages/icons-svg/svg/filled/*.svg"
        ),
        formatter: (name) => `AiFill${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/ant-design-icons/packages/icons-svg/svg/outlined/*.svg"
        ),
        formatter: (name) => `AiOutline${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/ant-design-icons/packages/icons-svg/svg/twotone/*.svg"
        ),
        formatter: (name) => `AiTwotone${name}`,
      },
    ],
    projectUrl: "https://github.com/ant-design/ant-design-icons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "ant-design-icons",
      remoteDir: "packages/icons-svg/svg/",
      url: "https://github.com/ant-design/ant-design-icons.git",
      branch: "master",
      hash: "8b4484603907e6935dca4876f47a6c10b794fcfd",
    },
  },
  {
    id: "bi",
    name: "BoxIcons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/boxicons/svg/regular/*.svg"
        ),
        formatter: (name) => `Bi${name.replace("Bx", "")}`,
      },
      {
        files: path.resolve(__dirname, "../../icons/boxicons/svg/solid/*.svg"),
        formatter: (name) => `BiSolid${name.replace("Bxs", "")}`,
      },
      {
        files: path.resolve(__dirname, "../../icons/boxicons/svg/logos/*.svg"),
        formatter: (name) => `BiLogo${name.replace("Bxl", "")}`,
      },
    ],
    projectUrl: "https://github.com/atisawd/boxicons",
    license: "MIT",
    licenseUrl: "https://github.com/atisawd/boxicons/blob/master/LICENSE",
    source: {
      type: "git",
      localName: "boxicons",
      remoteDir: "svg/",
      url: "https://github.com/atisawd/boxicons.git",
      branch: "master",
      hash: "9ffa9136e8681886bb7bd2145cd4098717ce1c11",
    },
  },
  {
    id: "bs",
    name: "Bootstrap Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/bootstrap/icons/*!(-reverse)-fill.svg"
        ),
        formatter: (name) => `BsFill${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/bootstrap/icons/*-reverse!(-fill).svg"
        ),
        formatter: (name) => `BsReverse${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/bootstrap/icons/*!(-fill|-reverse|reverse-).svg"
        ),
        formatter: (name) => `Bs${name}`,
      },
    ],
    projectUrl: "https://github.com/twbs/icons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "bootstrap",
      remoteDir: "icons/",
      url: "https://github.com/twbs/icons.git",
      branch: "main",
      hash: "388a10f3c6894801f15860cef6546b0ba2663348",
    },
  },
  {
    id: "cg",
    name: "css.gg",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/css.gg/icons/svg/*.svg"),
        formatter: (name) => `Cg${name}`,
      },
    ],
    projectUrl: "https://github.com/astrit/css.gg",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "css.gg",
      remoteDir: "icons/svg/",
      url: "https://github.com/astrit/css.gg.git",
      branch: "master",
      hash: "8a6913598e4e2b10aaf69b9cb7e10e7213828965",
    },
  },
  {
    id: "ci",
    name: "Circum Icons",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/Circum-Icons/svg/*.svg"),
        formatter: (name) => `Ci${name}`.replace(/_/g, "").replace(/&/g, "And"),
      },
    ],
    projectUrl: "https://circumicons.com/",
    license: "MPL-2.0 license",
    licenseUrl:
      "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE",
    source: {
      type: "git",
      localName: "Circum-Icons",
      remoteDir: "svg/",
      url: "https://github.com/Klarr-Agency/Circum-Icons.git",
      branch: "main",
      hash: "fb3e0a97d2a1003d9c87eea94ee3f84f3a011102",
    },
  },
  {
    id: "co",
    name: "Coolicons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/coolicons/coolicons SVG/*/*.svg"
        ),
        formatter: (name) => `Co${name}`,
      },
    ],
    projectUrl: "https://github.com/krystonschwarze/coolicons",
    license: "CC BY 4.0 License",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: {
      type: "git",
      localName: "coolicons",
      remoteDir: "coolicons SVG/",
      url: "https://github.com/krystonschwarze/coolicons.git",
      branch: "master",
      hash: "1a92717b6050b8256465e09a285238a9fa4a1b45",
    },
  },
  {
    id: "fa",
    name: "Font Awesome 5",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/fontawesome/svgs/+(brands|solid)/*.svg"
        ),
        formatter: (name) => `Fa${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/fontawesome/svgs/regular/*.svg"
        ),
        formatter: (name) => `FaReg${name}`,
      },
    ],
    projectUrl: "https://fontawesome.com/",
    license: "CC BY 4.0 License",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: {
      type: "git",
      localName: "fontawesome",
      remoteDir: "svgs/",
      url: "https://github.com/FortAwesome/Font-Awesome.git",
      branch: "5.x",
      hash: "afecf2af5d897b763e5e8e28d46aad2f710ccad6",
    },
  },
  {
    id: "fa6",
    name: "Font Awesome 6",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/fontawesome-6/svgs/+(brands|solid)/*.svg"
        ),
        formatter: (name) => `Fa6${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/fontawesome-6/svgs/regular/*.svg"
        ),
        formatter: (name) => `Fa6Reg${name}`,
      },
    ],
    projectUrl: "https://fontawesome.com/",
    license: "CC BY 4.0 License",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: {
      type: "git",
      localName: "fontawesome-6",
      remoteDir: "svgs/",
      url: "https://github.com/FortAwesome/Font-Awesome.git",
      branch: "6.x",
      hash: "0698449d50f2b95517562295a59d414afc68b369",
    },
  },
  {
    id: "fc",
    name: "Flat Color Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/flat-color-icons/svg/*.svg"
        ),
        formatter: (name) => `Fc${name}`,
        multiColor: true,
      },
    ],
    projectUrl: "https://github.com/icons8/flat-color-icons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "flat-color-icons",
      remoteDir: "svg/",
      url: "https://github.com/icons8/flat-color-icons.git",
      branch: "master",
      hash: "8eccbbbd8b2af1d2c9593e7cfba5ecb0d68ee378",
    },
  },
  {
    id: "fi",
    name: "Feather",
    contents: [
      {
        files: path.resolve(
          path.dirname(require.resolve("feather-icons")),
          "icons/*.svg"
        ),
        formatter: (name) => `Fi${name}`,
      },
    ],
    projectUrl: "https://feathericons.com/",
    license: "MIT",
    licenseUrl: "https://github.com/feathericons/feather/blob/master/LICENSE",
  },
  {
    id: "go",
    name: "Github Octicons icons",
    contents: [
      {
        files: path.resolve(
          path.dirname(require.resolve("@primer/octicons")),
          "build/svg/*-24.svg"
        ),
        formatter: (name) => `Go${name}`.replace("24", ""),
      },
    ],
    projectUrl: "https://octicons.github.com/",
    license: "MIT",
    licenseUrl: "https://github.com/primer/octicons/blob/master/LICENSE",
  },
  {
    id: "gi",
    name: "Game Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/game-icons-inverted/all-icons/*.svg"
        ),
        formatter: (name) => `Gi${name}`,
      },
    ],
    projectUrl: "https://game-icons.net/",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    source: {
      type: "git",
      localName: "game-icons-inverted",
      remoteDir: "all-icons/",
      url: "https://github.com/delacannon/game-icons-inverted.git",
      branch: "master",
      hash: "12920d6565588f0512542a3cb0cdfd36a497f910",
    },
  },
  {
    id: "gr",
    name: "Grommet-Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/grommet-icons/public/img/*.svg"
        ),
        formatter: (name) => `Gr${name}`,
      },
    ],
    projectUrl: "https://github.com/grommet/grommet-icons",
    license: "Apache License Version 2.0",
    licenseUrl: "http://www.apache.org/licenses/",
    source: {
      type: "git",
      localName: "grommet-icons",
      remoteDir: "public/img/",
      url: "https://github.com/grommet/grommet-icons.git",
      branch: "master",
      hash: "4ab254b2aabb687ba734a9be8310e5bcc8e29255",
    },
  },
  {
    id: "hi",
    name: "Heroicons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/heroicons/optimized/24/solid/*.svg"
        ),
        formatter: (name) => `Hi${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/heroicons/optimized/24/outline/*.svg"
        ),
        formatter: (name) => `HiOutline${name}`,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/heroicons/optimized/20/solid/*.svg"
        ),
        formatter: (name) => `HiMini${name}`,
      },
    ],
    projectUrl: "https://github.com/tailwindlabs/heroicons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "heroicons",
      remoteDir: "optimized/",
      url: "https://github.com/tailwindlabs/heroicons.git",
      branch: "master",
      hash: "f64c10b59dcd6417732a984ce4376bed13799485",
    },
  },
  {
    id: "ic",
    name: "Iconoir",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/iconoir/icons/*.svg"),
        formatter: (name) => `Ic${name}`,
      },
    ],
    projectUrl: "https://iconoir.com/",
    license: "MIT",
    licenseUrl: "https://github.com/iconoir-icons/iconoir/blob/main/LICENSE",
    source: {
      type: "git",
      localName: "iconoir",
      remoteDir: "icons/",
      url: "https://github.com/iconoir-icons/iconoir.git",
      branch: "main",
      hash: "23b582a5bd26173b2efac8a574a270dcd4bc55ed",
    },
  },
  {
    id: "im",
    name: "IcoMoon Free",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/icomoon-free/SVG/*.svg"),
        formatter: (name) => `Im${name.slice(3)}`,
      },
    ],
    projectUrl: "https://github.com/Keyamoon/IcoMoon-Free",
    license: "CC BY 4.0 License",
    licenseUrl:
      "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt",
    source: {
      type: "git",
      localName: "icomoon-free",
      remoteDir: "SVG/",
      url: "https://github.com/Keyamoon/IcoMoon-Free.git",
      branch: "master",
      hash: "d006795ede82361e1bac1ee76f215cf1dc51e4ca",
    },
  },
  {
    id: "io5",
    name: "Ionicons 5",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../../../node_modules/ionicons-5/dist/svg/*.svg"
        ),
        formatter: (name) => `Io${name}`,
        processWithSVGO: true,
      },
    ],
    projectUrl: "https://ionicons.com/",
    license: "MIT",
    licenseUrl: "https://github.com/ionic-team/ionicons/blob/master/LICENSE",
  },
  {
    id: "lia",
    name: "Icons8 Line Awesome",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/line-awesome/svg/*.svg"),
        formatter: (name) => `Lia${name}`,
      },
    ],
    projectUrl: "https://icons8.com/line-awesome",
    license: "MIT",
    licenseUrl: "https://github.com/icons8/line-awesome/blob/master/LICENSE.md",
    source: {
      type: "git",
      localName: "line-awesome",
      remoteDir: "svg/",
      url: "https://github.com/icons8/line-awesome.git",
      branch: "master",
      hash: "78a101217707c9b1c4dcf2a821be75684e36307f",
    },
  },
  {
    id: "lu",
    name: "Lucide",
    contents: [
      {
        files: path.resolve(
          path.dirname(require.resolve("lucide-static")),
          "../icons/*.svg"
        ),
        formatter: (name) => `Lu${name}`,
      },
    ],
    projectUrl: "https://lucide.dev/",
    license: "ISC",
    licenseUrl: "https://github.com/lucide-icons/lucide/blob/main/LICENSE",
  },
  {
    id: "mc",
    name: "MingCute icons",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/mingcute/svg/*/*.svg"),
        formatter: (name) => `Mc${name}`,
        processWithSVGO: true,
      },
    ],
    projectUrl: "https://github.com/Richard9394/MingCute.git",
    license: "Apache License Version 2.0",
    licenseUrl: "https://github.com/Richard9394/MingCute/blob/main/LICENSE",
    source: {
      type: "git",
      localName: "mingcute",
      remoteDir: "svg/",
      url: "https://github.com/Richard9394/MingCute.git",
      branch: "main",
      hash: "d5e24a8ed1e6cd1e34603836ee970ce8c9fb77ad",
    },
  },
  {
    id: "md",
    name: "Material Design icons",
    contents: [
      {
        files: async () => {
          const normal = await glob(
            path.resolve(
              __dirname,
              "../../icons/material-design-icons/src/*/*/materialicons/24px.svg"
            )
          );

          const twotone = await glob(
            path.resolve(
              __dirname,
              "../../icons/material-design-icons/src/*/*/materialiconstwotone/24px.svg"
            )
          );
          return [
            ...normal,
            ...twotone.filter(
              (file) => !normal.includes(file.replace("twotone/", "/"))
            ),
          ];
        },
        formatter: (name, file) =>
          `Md${camelcase(
            file.replace(/^.*\/([^/]+)\/materialicons[^/]*\/24px.svg$/i, "$1"),
            { pascalCase: true }
          )}`,
        processWithSVGO: true,
      },
      {
        files: path.resolve(
          __dirname,
          "../../icons/material-design-icons/src/*/*/materialiconsoutlined/24px.svg"
        ),
        formatter: (name, file) =>
          `MdOutline${camelcase(
            file.replace(/^.*\/([^/]+)\/materialicons[^/]*\/24px.svg$/i, "$1"),
            { pascalCase: true }
          )}`,
        processWithSVGO: true,
      },
    ],
    projectUrl: "http://google.github.io/material-design-icons/",
    license: "Apache License Version 2.0",
    licenseUrl:
      "https://github.com/google/material-design-icons/blob/master/LICENSE",
    source: {
      type: "git",
      localName: "material-design-icons",
      remoteDir: "src/",
      url: "https://github.com/google/material-design-icons.git",
      branch: "master",
      hash: "3912baecc97388955ce39f5e26bfb786a70cbe48",
    },
  },
  {
    id: "pi",
    name: "Phosphor Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/phosphor-icons/assets/*/*.svg"
        ),
        formatter: (name) => `Pi${name}`,
      },
    ],
    projectUrl: "https://github.com/phosphor-icons/core",
    license: "MIT",
    licenseUrl: "https://github.com/phosphor-icons/core/blob/main/LICENSE",
    source: {
      type: "git",
      localName: "phosphor-icons",
      remoteDir: "assets/",
      url: "https://github.com/phosphor-icons/core.git",
      branch: "master",
      hash: "c67d7a849f450be1bfe64fd5820471e4019e5ff0",
    },
  },
  {
    id: "ri",
    name: "Remix Icon",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/RemixIcon/icons/*/*.svg"),
        formatter: (name) => `Ri${name}`,
      },
    ],
    projectUrl: "https://github.com/Remix-Design/RemixIcon",
    license: "Apache License Version 2.0",
    licenseUrl: "http://www.apache.org/licenses/",
    source: {
      type: "git",
      localName: "RemixIcon",
      remoteDir: "icons/",
      url: "https://github.com/Remix-Design/RemixIcon.git",
      branch: "master",
      hash: "f88a51b6402562c6c2465f61a3e845115992e4c6",
    },
  },
  {
    id: "rx",
    name: "Radix Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/radix-icons/packages/radix-icons/icons/*.svg"
        ),
        formatter: (name) => `Rx${camelcase(name, { pascalCase: true })}`,
      },
    ],
    projectUrl: "https://icons.radix-ui.com",
    license: "MIT",
    licenseUrl: "https://github.com/radix-ui/icons/blob/master/LICENSE",
    source: {
      type: "git",
      localName: "radix-icons",
      remoteDir: "packages/radix-icons/icons/",
      url: "https://github.com/radix-ui/icons.git",
      branch: "master",
      hash: "1d727240d8efe7585570f9bdc25e9c17296b97e9",
    },
  },
  {
    id: "si",
    name: "Simple Icons",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/simple-icons/icons/*.svg"),
        formatter: (name) => `Si${name}`,
      },
    ],
    projectUrl: "https://simpleicons.org/",
    license: "CC0 1.0 Universal",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: {
      type: "git",
      localName: "simple-icons",
      remoteDir: "icons/",
      url: "https://github.com/simple-icons/simple-icons.git",
      branch: "develop",
      hash: "4ae63bc2e50725eb1500ec95b543a67101bf3bbb",
    },
  },
  {
    id: "sl",
    name: "Simple Line Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/simple-line-icons/src/svgs/*.svg"
        ),
        formatter: (name) => `Sl${name}`,
      },
    ],
    projectUrl: "https://thesabbir.github.io/simple-line-icons/",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "simple-line-icons",
      remoteDir: "src/svgs/",
      url: "https://github.com/thesabbir/simple-line-icons.git",
      branch: "master",
      hash: "f3ed94dd797bdcab52d6f27ba589aea4bb6f3e4d",
    },
  },
  {
    id: "tfi",
    name: "Themify Icons",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/themify-icons/SVG/*.svg"),
        formatter: (name) => `Tfi${name}`,
      },
    ],
    projectUrl: "https://github.com/lykmapipo/themify-icons",
    license: "MIT",
    licenseUrl:
      "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE",
    source: {
      type: "git",
      localName: "themify-icons",
      remoteDir: "SVG/",
      url: "https://github.com/lykmapipo/themify-icons.git",
      branch: "master",
      hash: "9600186b24a7242f0e1e0a186983e6253301bb5d",
    },
  },
  {
    id: "tb",
    name: "Tabler Icons",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/tabler-icons/icons/*.svg"),
        formatter: (name) => `Tb${name}`,
      },
    ],
    projectUrl: "https://github.com/tabler/tabler-icons",
    license: "MIT",
    licenseUrl: "https://opensource.org/licenses/MIT",
    source: {
      type: "git",
      localName: "tabler-icons",
      remoteDir: "icons/",
      url: "https://github.com/tabler/tabler-icons.git",
      branch: "master",
      hash: "81f25c2b96e65379821db381bfa9188e91f908d5",
    },
  },
  {
    id: "ti",
    name: "Typicons",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/typicons/src/svg/*.svg"),
        formatter: (name) => `Ti${name}`,
      },
    ],
    projectUrl: "http://s-ings.com/typicons/",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    source: {
      type: "git",
      localName: "typicons",
      remoteDir: "src/svg/",
      url: "https://github.com/stephenhutchings/typicons.font.git",
      branch: "master",
      hash: "0aa64f6ce8b892a83aeeafa42c74fb9c1f22ec84",
    },
  },
  {
    id: "vsc",
    name: "VS Code Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/vscode-icons/src/icons/*.svg"
        ),
        formatter: (name) => `Vsc${name}`,
      },
    ],
    projectUrl: "https://github.com/microsoft/vscode-codicons",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: {
      type: "git",
      localName: "vscode-icons",
      remoteDir: "src/icons/",
      url: "https://github.com/microsoft/vscode-codicons.git",
      branch: "main",
      hash: "0609c3dfbdb746ebaff26046deb851d01c720fa6",
    },
  },
  {
    id: "wi",
    name: "Weather Icons",
    contents: [
      {
        files: path.resolve(__dirname, "../../icons/weather-icons/svg/*.svg"),
        formatter: (name) => name,
      },
    ],
    projectUrl: "https://erikflowers.github.io/weather-icons/",
    license: "SIL OFL 1.1",
    licenseUrl: "http://scripts.sil.org/OFL",
    source: {
      type: "git",
      localName: "weather-icons",
      remoteDir: "svg/",
      url: "https://github.com/erikflowers/weather-icons.git",
      branch: "master",
      hash: "bb80982bf1f43f2d57f9dd753e7413bf88beb9ed",
    },
  },
];
