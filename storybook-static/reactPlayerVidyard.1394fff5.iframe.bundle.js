"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[888],{"./node_modules/react-player/lazy/players/Vidyard.js":(__unused_webpack_module,exports,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache();if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_utils=__webpack_require__("./node_modules/react-player/lazy/utils.js"),_patterns=__webpack_require__("./node_modules/react-player/lazy/patterns.js");function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var cache=new WeakMap;return _getRequireWildcardCache=function _getRequireWildcardCache(){return cache},cache}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Vidyard=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Vidyard,_Component);var _super=_createSuper(Vidyard);function Vidyard(){var _this;_classCallCheck(this,Vidyard);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _defineProperty(_assertThisInitialized(_this=_super.call.apply(_super,[this].concat(args))),"callPlayer",_utils.callPlayer),_defineProperty(_assertThisInitialized(_this),"mute",(function(){_this.setVolume(0)})),_defineProperty(_assertThisInitialized(_this),"unmute",(function(){null!==_this.props.volume&&_this.setVolume(_this.props.volume)})),_defineProperty(_assertThisInitialized(_this),"ref",(function(container){_this.container=container})),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Vidyard,[{key:"componentDidMount",value:function componentDidMount(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function load(url){var _this2=this,_this$props=this.props,playing=_this$props.playing,config=_this$props.config,onError=_this$props.onError,onDuration=_this$props.onDuration,id=url&&url.match(_patterns.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,_utils.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then((function(Vidyard){_this2.container&&(Vidyard.api.addReadyListener((function(data,player){_this2.player||(_this2.player=player,_this2.player.on("ready",_this2.props.onReady),_this2.player.on("play",_this2.props.onPlay),_this2.player.on("pause",_this2.props.onPause),_this2.player.on("seek",_this2.props.onSeek),_this2.player.on("playerComplete",_this2.props.onEnded))}),id),Vidyard.api.renderPlayer(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({uuid:id,container:_this2.container,autoplay:playing?1:0},config.options)),Vidyard.api.getPlayerMetadata(id).then((function(meta){_this2.duration=meta.length_in_seconds,onDuration(meta.length_in_seconds)})))}),onError)}},{key:"play",value:function play(){this.callPlayer("play")}},{key:"pause",value:function pause(){this.callPlayer("pause")}},{key:"stop",value:function stop(){window.VidyardV4.api.destroyPlayer(this.player)}},{key:"seekTo",value:function seekTo(amount){this.callPlayer("seek",amount)}},{key:"setVolume",value:function setVolume(fraction){this.callPlayer("setVolume",fraction)}},{key:"setPlaybackRate",value:function setPlaybackRate(rate){this.callPlayer("setPlaybackSpeed",rate)}},{key:"getDuration",value:function getDuration(){return this.duration}},{key:"getCurrentTime",value:function getCurrentTime(){return this.callPlayer("currentTime")}},{key:"getSecondsLoaded",value:function getSecondsLoaded(){return null}},{key:"render",value:function render(){var style={width:"100%",height:"100%",display:this.props.display};return _react.default.createElement("div",{style},_react.default.createElement("div",{ref:this.ref}))}}]),Vidyard}(_react.Component);exports.default=Vidyard,_defineProperty(Vidyard,"displayName","Vidyard"),_defineProperty(Vidyard,"canPlay",_patterns.canPlay.vidyard)}}]);