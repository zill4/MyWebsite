/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          rose: colors.rose,
        },
      },
    },
  }
  ```
*/
import {
  faTwitter,
  faTwitch,
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const actions = [
  {
    title: 'Twitter',
    href: 'https://twitter.com/__Zill4__',
    icon: faTwitter,
    iconBackground: 'bg-twitter',
    description: '',
  },
  {
    title: 'Twitch',
    href: 'https://twitch.tv/zill4',
    icon: faTwitch,
    iconBackground: 'bg-twitch',
    description: '',
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/justin.l.troutman',
    icon: faFacebook,
    iconBackground: 'bg-facebook',
    description: '',
  },
  {
    title: 'Github',
    href: 'https://github.com/zill4',
    icon: faGithub,
    iconBackground: 'bg-github',
    description: '',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/justcrisp',
    icon: faLinkedin,
    iconBackground: 'bg-linkedin',
    description: '',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/_zill4_jcr1sp/',
    icon: faInstagram,
    iconBackground: 'bg-instagram',
    description: '',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SocialsPanel() {
  return (
    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'relative group bg-slate-400 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500',
          )}>
          <div>
            <span
              className={classNames(
                action.iconBackground,

                'text-white rounded-lg inline-flex p-3 ',
              )}>
              <FontAwesomeIcon
                icon={action.icon}
                className="h-6 w-6"
                aria-hidden="true"
              />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {/* {action.title} */}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">{action.description}</p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-white group-hover:text-gray-400"
            aria-hidden="true">
            <p className="mt-2 text-sm text-white">{action.title}</p>
          </span>
        </div>
      ))}
    </div>
  )
}
