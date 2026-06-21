type SoundName = 'blue' | 'red' | 'purple' | 'shoot' | 'domain'

export class SoundManager {
  // Sounds temporarily disabled — will be replaced with proper audio files
  play(_name: SoundName): void {}
  haptic(_pattern: number | number[]): void {}
}
