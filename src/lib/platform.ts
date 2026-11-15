export type Platform = 'mac' | 'windows' | 'linux' | 'mobile';
export type DesktopPlatform = Exclude<Platform, 'mobile'>;

type NavigatorWithUserAgentData = Navigator & {
  userAgentData?: { platform?: string; mobile?: boolean };
};

function isMobile(nav: NavigatorWithUserAgentData): boolean {
  if (nav.userAgentData?.mobile || /Android|iPhone|iPad|iPod/i.test(nav.userAgent)) return true;
  // iPadOS reports itself as a Mac, but has touch.
  return /Mac/i.test(nav.userAgent) && nav.maxTouchPoints > 1;
}

export function detectPlatform(): Platform {
  const nav: NavigatorWithUserAgentData = navigator;
  if (isMobile(nav)) return 'mobile';
  const platform = (nav.userAgentData?.platform ?? nav.platform ?? '').toLowerCase();
  if (platform.includes('win') || /Windows/i.test(nav.userAgent)) return 'windows';
  if (platform.includes('mac') || /Mac/i.test(nav.userAgent)) return 'mac';
  return 'linux';
}
