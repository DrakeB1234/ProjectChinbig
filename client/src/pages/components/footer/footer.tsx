import Link from 'next/link';

import styles from './footer.module.css';

export default function Footer() {

  return (
      <div className={ 'FlexColCenter ' + styles.FooterContainer }>
        <div className={ 'FlexRowCenter ' + styles.FooterWrap }>
          <div className={ 'FlexCol ' + styles.FooterItem }>
            <h1 className='HeadText UnderLineText'>SocialFunc</h1>
            <h1>&emsp;Socialfunc is a web platform aimed at groups of family and friends to get together and play some fun and interactable games!</h1>
            <div className='FlexRow'>
              <Link href='https://github.com/DrakeB1234/ProjectSocialFunc'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#ffffff' d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></Link>
              <Link href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#348feb' d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg></Link>
              <Link href=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#e64067' d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg> </Link>
            </div>
          </div>
          <div className={ 'FlexCol ' + styles.FooterItem }>
            <Link href='/'>Home</Link>
            <Link href='/games'>Games</Link>
            <Link href='/play'>Join</Link>
            <Link href='/about'>About</Link>
          </div>
        </div>
        <div className={ 'FlexColCenter ' + styles.FooterItem }>
          <h1><Link href='https://socialfunc.com'>Socialfunc</Link></h1>
          <h1>© 2023 Drake Buentello</h1>
          </div>
      </div>
  )
}