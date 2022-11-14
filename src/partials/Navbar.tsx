import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

// Credit to https://3dicons.co/ for the computer 3D icon
import computer from '../../public/assets/images/computer-dynamic-color.png';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a className="flex" href="/">
        <Logo icon={<img src={computer} width="15%" />} name="Nick Alico" />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts">Blogs</NavMenuItem>
        <NavMenuItem href="https://github.com/nro337">GitHub</NavMenuItem>
        <NavMenuItem href="https://twitter.com/nickalico">Twitter</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
