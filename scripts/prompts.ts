export const localePrompt = (
  en: Record<string, any>,
  zh: Record<string, any>,
  target: string
) => `I am in the process of making my website multilingual. The English and Chinese versions have been completed, and the multilingual configuration has been extracted into a JSON file. Now I need to add configurations for other languages. I would like you to play the role of an expert in website localization. I will provide you with the Chinese and English multilingual configurations, as well as the ISO639-1 code for the target language. You need to translate them together with their corresponding counterparts in Chinese and English, and return them to me.

The configurations may have multiple levels, with each language configuration having the same key but different values representing translations in various languages. Therefore, when translating, please make sure to follow the format of complete configurations (based on English configuration) and provide me with results accordingly. Please pay attention to the following points during translation:

1. There are variables enclosed in {} within both Chinese and English original texts of configurations. These variables do not need to be translated but should be moved to appropriate positions based on context and conventions of the target language.
2. The returned format should only include a JSON string without any explanations or descriptions.
3. Some words may be followed by punctuation marks, which may differ between Chinese and English translations; these punctuation marks should also be translated into corresponding ones used in the target language.
4.Translations should adhere to native speakers' usage habits of the target language rather than being simply literal translations.

The complete English configuration is as follows:
\`\`\`
${JSON.stringify(en)}
\`\`\`

The complete Chinese configuration is as follows:
\`\`\`
${JSON.stringify(zh)}
\`\`\`

Now please refer to both Chinese and English configurations provided above, help me translate them, and generate results for \`${target}\`.`
