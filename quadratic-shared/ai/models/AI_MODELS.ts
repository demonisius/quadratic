import type { ModelConfig, ModelKey } from 'quadratic-shared/typesAndSchemasAI';

export const DEFAULT_MODEL: ModelKey = 'bedrock-anthropic:claude:thinking-toggle-off';

export const DEFAULT_GET_CHAT_NAME_MODEL: ModelKey = 'vertexai:gemini-2.0-flash-001';

export const DEFAULT_CODE_EDITOR_COMPLETIONS_MODEL: ModelKey = 'vertexai:gemini-2.0-flash-001';

export const DEFAULT_GET_USER_PROMPT_SUGGESTIONS_MODEL: ModelKey = 'vertexai:gemini-2.0-flash-001';

export const DEFAULT_PDF_IMPORT_MODEL: ModelKey = 'vertexai:gemini-2.5-pro-exp-03-25';

// updating this will force the model to be reset to the default model in local storage
export const DEFAULT_MODEL_VERSION = 9;

export const MODELS_CONFIGURATION: {
  [key in ModelKey]: ModelConfig;
} = {
  'vertexai-anthropic:claude:thinking-toggle-off': {
    model: 'claude-3-5-sonnet-v2@20241022',
    displayName: `claude`,
    temperature: 0,
    max_tokens: 8192,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'vertexai-anthropic',
    promptCaching: true,
    thinkingToggle: false,
  },
  'vertexai-anthropic:claude:thinking-toggle-on': {
    model: 'claude-3-7-sonnet@20250219',
    displayName: `claude`,
    temperature: 0,
    max_tokens: 16000,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'vertexai-anthropic',
    promptCaching: true,
    thinking: true,
    thinkingTemperature: 1,
    thinkingToggle: true,
  },
  'vertexai-anthropic:claude-3-7-sonnet@20250219': {
    model: 'claude-3-7-sonnet@20250219',
    displayName: `claude 3.7 sonnet`,
    temperature: 0,
    max_tokens: 8192,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'vertexai-anthropic',
    promptCaching: true,
  },
  'vertexai-anthropic:claude-3-7-sonnet@20250219:thinking': {
    model: 'claude-3-7-sonnet@20250219',
    displayName: `claude 3.7 sonnet thinking`,
    temperature: 0,
    max_tokens: 16000,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'vertexai-anthropic',
    promptCaching: true,
    thinking: true,
    thinkingTemperature: 1,
  },
  'vertexai-anthropic:claude-3-5-sonnet-v2@20241022': {
    model: 'claude-3-5-sonnet-v2@20241022',
    displayName: `claude 3.5 sonnet`,
    temperature: 0,
    max_tokens: 8192,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'vertexai-anthropic',
    promptCaching: true,
  },
  'vertexai-anthropic:claude-3-5-haiku@20241022': {
    model: 'claude-3-5-haiku@20241022',
    displayName: 'claude 3.5 haiku',
    temperature: 0,
    max_tokens: 8192,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'vertexai-anthropic',
    promptCaching: true,
  },
  'vertexai:gemini-2.5-pro-exp-03-25': {
    model: 'gemini-2.5-pro-exp-03-25',
    displayName: 'gemini 2.5 pro exp',
    temperature: 0,
    max_tokens: 65535,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'vertexai',
    promptCaching: false,
  },
  'vertexai:gemini-2.0-flash-001': {
    model: 'gemini-2.0-flash-001',
    displayName: 'gemini 2.0 flash',
    temperature: 0,
    max_tokens: 8192,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'vertexai',
    promptCaching: false,
  },
  'bedrock-anthropic:claude:thinking-toggle-off': {
    model: 'us.anthropic.claude-3-5-sonnet-20241022-v2:0',
    displayName: `claude`,
    temperature: 0,
    max_tokens: 8192,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: true,
    provider: 'bedrock-anthropic',
    promptCaching: false,
    thinkingToggle: false,
  },
  'bedrock-anthropic:claude:thinking-toggle-on': {
    model: 'us.anthropic.claude-3-7-sonnet-20250219-v1:0',
    displayName: `claude`,
    temperature: 0,
    max_tokens: 16000,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: true,
    provider: 'bedrock-anthropic',
    promptCaching: true,
    thinking: true,
    thinkingTemperature: 1,
    thinkingToggle: true,
  },
  'bedrock-anthropic:us.anthropic.claude-3-7-sonnet-20250219-v1:0': {
    model: 'us.anthropic.claude-3-7-sonnet-20250219-v1:0',
    displayName: `claude 3.7 sonnet`,
    temperature: 0,
    max_tokens: 8192,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'bedrock-anthropic',
    promptCaching: true,
  },
  'bedrock-anthropic:us.anthropic.claude-3-7-sonnet-20250219-v1:0:thinking': {
    model: 'us.anthropic.claude-3-7-sonnet-20250219-v1:0',
    displayName: `claude 3.7 sonnet thinking`,
    temperature: 0,
    max_tokens: 16000,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'bedrock-anthropic',
    promptCaching: true,
    thinking: true,
    thinkingTemperature: 1,
  },
  'bedrock-anthropic:us.anthropic.claude-3-5-sonnet-20241022-v2:0': {
    model: 'us.anthropic.claude-3-5-sonnet-20241022-v2:0',
    displayName: `claude 3.5 sonnet`,
    temperature: 0,
    max_tokens: 8192,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'bedrock-anthropic',
    promptCaching: false,
  },
  'bedrock-anthropic:us.anthropic.claude-3-5-haiku-20241022-v1:0': {
    model: 'us.anthropic.claude-3-5-haiku-20241022-v1:0',
    displayName: 'claude 3.5 haiku',
    temperature: 0,
    max_tokens: 8192,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'bedrock-anthropic',
    promptCaching: true,
  },
  'bedrock:us.deepseek.r1-v1:0': {
    model: 'us.deepseek.r1-v1:0',
    displayName: 'deepseek r1',
    temperature: 0,
    max_tokens: 32768,
    canStream: true,
    canStreamWithToolCalls: false,
    enabled: false,
    provider: 'bedrock',
    promptCaching: false,
  },
  'bedrock:us.meta.llama3-2-90b-instruct-v1:0': {
    model: 'us.meta.llama3-2-90b-instruct-v1:0',
    displayName: 'llama 3.2 90b instruct',
    temperature: 0,
    max_tokens: 2048,
    canStream: true,
    canStreamWithToolCalls: false,
    enabled: false,
    provider: 'bedrock',
    promptCaching: false,
  },
  'bedrock:mistral.mistral-large-2407-v1:0': {
    model: 'mistral.mistral-large-2407-v1:0',
    displayName: 'mistral large 2 (24.07)',
    temperature: 0,
    max_tokens: 8192,
    canStream: true,
    canStreamWithToolCalls: false,
    enabled: false,
    provider: 'bedrock',
    promptCaching: false,
  },
  'anthropic:claude:thinking-toggle-off': {
    model: 'claude-3-5-sonnet-20241022',
    displayName: `claude`,
    temperature: 0,
    max_tokens: 8192,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'anthropic',
    promptCaching: true,
    thinkingToggle: false,
  },
  'anthropic:claude:thinking-toggle-on': {
    model: 'claude-3-7-sonnet-20250219',
    displayName: `claude`,
    temperature: 0,
    max_tokens: 16000,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'anthropic',
    promptCaching: true,
    thinking: true,
    thinkingTemperature: 1,
    thinkingToggle: true,
  },
  'anthropic:claude-3-7-sonnet-20250219': {
    model: 'claude-3-7-sonnet-20250219',
    displayName: 'claude 3.7 sonnet',
    temperature: 0,
    max_tokens: 8192,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'anthropic',
    promptCaching: true,
  },
  'anthropic:claude-3-7-sonnet-20250219:thinking': {
    model: 'claude-3-7-sonnet-20250219',
    displayName: 'claude 3.7 sonnet thinking',
    temperature: 0,
    max_tokens: 16000,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'anthropic',
    promptCaching: true,
    thinking: true,
    thinkingTemperature: 1,
  },
  'anthropic:claude-3-5-sonnet-20241022': {
    model: 'claude-3-5-sonnet-20241022',
    displayName: 'claude 3.5 sonnet',
    temperature: 0,
    max_tokens: 8192,
    canStream: true,
    canStreamWithToolCalls: true,
    promptCaching: true,
    enabled: false,
    provider: 'anthropic',
  },
  'anthropic:claude-3-5-haiku-20241022': {
    model: 'claude-3-5-haiku-20241022',
    displayName: 'claude 3.5 haiku',
    temperature: 0,
    max_tokens: 8192,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'anthropic',
    promptCaching: true,
  },
  'openai:gpt-4.5-preview-2025-02-27': {
    model: 'gpt-4.5-preview-2025-02-27',
    displayName: 'gpt 4.5 preview',
    temperature: 0,
    max_tokens: 4096, // not used for openai
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'openai',
    promptCaching: true, // not used for openai, managed by the api
    strictParams: true,
  },
  'openai:gpt-4o-2024-11-20': {
    model: 'gpt-4o-2024-11-20',
    displayName: 'gpt 4o',
    temperature: 0,
    max_tokens: 4096, // not used for openai
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'openai',
    promptCaching: true, // not used for openai, managed by the api
    strictParams: true,
  },
  'openai:o1-2024-12-17': {
    model: 'o1-2024-12-17',
    displayName: 'o1',
    temperature: 1, // only temperature 1 is supported for o1
    max_tokens: 4096, // not used for openai
    canStream: false, // stream is not supported for o1
    canStreamWithToolCalls: false,
    enabled: false,
    provider: 'openai',
    promptCaching: true, // not used for openai, managed by the api
    strictParams: true,
  },
  'openai:o3-mini-2025-01-31': {
    model: 'o3-mini-2025-01-31',
    displayName: 'o3 mini',
    temperature: 1, // only temperature 1 is supported for o1
    max_tokens: 4096, // not used for openai
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'openai',
    promptCaching: true, // not used for openai, managed by the api
    strictParams: true,
  },
  'xai:grok-2-1212': {
    model: 'grok-2-1212',
    displayName: `grok 2`,
    temperature: 0,
    max_tokens: 4096,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'xai',
    promptCaching: true, // not used for xai
    strictParams: false,
  },
  'xai:grok-beta': {
    model: 'grok-beta',
    displayName: `grok beta`,
    temperature: 0,
    max_tokens: 4096,
    canStream: true,
    canStreamWithToolCalls: true,
    enabled: false,
    provider: 'xai',
    promptCaching: true, // not used for xai
    strictParams: false,
  },
} as const;
