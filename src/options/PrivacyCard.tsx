// Settings → Data → Privacy. This release has no configured NimoPilot analytics destination.
import { SettingsCard } from './SettingsCard';
import { t } from '@src/ui/i18n';

export const PRIVACY_URL = 'https://github.com/HackerO112/Nimo-pilot/blob/production/nimopilot-source-import/PRIVACY.md';

export function PrivacyCard() {
  return <SettingsCard title={t('privacy.title')} description={t('privacy.offline')} />;
}
