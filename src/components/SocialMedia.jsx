import Link from "next/link";
import clsx from "clsx";
import { BsFacebook, BsTiktok, BsMap } from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "Maps",
    href: "https://maps.app.goo.gl/UG3qUFrTFGBmcrF3A",
    icon: BsMap,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/prashanti.shikshyasadan",
    icon: BsFacebook,
  },
  {
    title: "Tiktok",
    href: "https://www.tiktok.com/@prashantians_we_for_all?is_from_webapp=1&sender_device=pc",
    icon: BsTiktok,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
