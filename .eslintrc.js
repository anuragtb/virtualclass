module.exports = {
  env: {
    browser: true,
    es6: true,
    worker: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    virtualclass: 'writable',
    api: 'writable',
    lang: 'writable',
    colorSelector: 'writable',
    dashBoard: 'writable',
    system: 'writable',
    gesture: 'writable',
    ioAdapter: 'writable',
    io: 'writable',
    ioMissingPackets: 'writable',
    ioPingPong: 'writable',
    ioStorage: 'writable',
    LZString: 'writable',
    micTesting: 'writable',
    MultiVideo: 'writable',
    precheck: 'writable',
    progressBar: 'writable',
    response: 'writable',
    roles: 'writable',
    dirtyCorner: 'writable',
    serverData: 'writable',
    settings: 'writable',
    vutil: 'writable',
    videoHost: 'writable',
    wbCommon: 'writable',
    keyBoard: 'writable',
    optimize: 'writable',
    packetQueue: 'writable',
    xhr: 'writable',
    xhrn: 'writable',
    workerIO: 'writable',
    virtualclass : 'writable',
    virtualclassSetting: 'writable',
    wbUser: 'writable',
    axios: 'readonly',
    sdworker: 'writable',
    sworker: 'writable',
    chatContainerEvent: 'writable',
    OrderedList: 'writable',
    receiveFunctions: 'writable',
    firebase: 'writable',
    AskQuestion: 'writable',
    WhiteboardReplay: 'writable',
    WhiteboardUtility: 'writable',
    WhiteboardReplay: 'writable',
    WhiteboardWrapper: 'writable',
    WhiteboardProtocol: 'writable',
    WhiteboardCircle: 'writable',
    WhiteboardCommonShape: 'writable',
    WhiteboardLine: 'writable',
    WhiteboardFreeDrawing: 'writable',
    WhiteboardTriangle: 'writable',
    WhiteboardRectangle: 'writable',
    WhiteboardActiveAll: 'writable',
    WhiteboardText: 'writable',
    OrderedList: 'writable',
    receiveFunctions: 'writable',
    firebase: 'writable',
    AskQuestion: 'writable',
    $: 'writable',
    WhiteboardCursor: 'writable',
    WhiteboardMessage: 'writable',
    fabric: 'writable',
    LiveStream: 'writable',

  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  rules: {
    'max-len': [1, { "code": 120 }],
    'linebreak-style': ["error", "windows"],
   },
};
