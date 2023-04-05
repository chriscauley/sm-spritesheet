/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n//# sourceURL=webpack://client/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ColorSwatch.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ColorSwatch.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    color: Object\n  },\n  computed: {\n    modelValue: {\n      get() {\n        const {\n          palettes\n        } = this.$store.app.state;\n        const value = this.$store.local.resolveColor(this.color, palettes).slice();\n        value[3] = value[3] / 255;\n        return `rgba(${value.join(',')})`;\n      },\n      // this function is throttled to prevent over-rendering of the preview\n      set: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(function (value) {\n        if (value) {\n          value = value.slice(5, -1).split(',').map(Number);\n          value[3] = value[3] * 255;\n        }\n        const {\n          overrides\n        } = this.$store.local.state;\n        overrides[this.color.id] = value;\n        this.$store.local.save(overrides);\n      }, 100)\n    },\n    style() {\n      const {\n        value\n      } = this.color;\n      const {\n        palettes\n      } = this.$store.app.state;\n      const override = this.$store.local.resolveColor(this.color, palettes);\n      return {\n        '--base-color': `rgba(${value})`,\n        '--selected-color': `rgba(${override})`\n      };\n    },\n    options() {\n      return {\n        defaultRepresentation: 'RGBA',\n        components: {\n          preview: true,\n          opacity: true,\n          hue: true,\n          interaction: {\n            hex: true,\n            rgba: true,\n            hsla: true,\n            hsva: true,\n            input: true,\n            clear: true\n          }\n        }\n      };\n    }\n  }\n});\n\n//# sourceURL=webpack://client/./src/components/ColorSwatch.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IngestImage.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IngestImage.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _varia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/varia */ \"./src/varia/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __route: {\n    path: '/app/new-sprite'\n  },\n  data() {\n    return {\n      data_url: null,\n      filename: null\n    };\n  },\n  methods: {\n    change(event) {\n      const file = event.target.files?.[0];\n      if (!file) {\n        return;\n      }\n      var reader = new FileReader();\n      reader.onload = () => {\n        this.filename = file.name;\n        console.log(this.filename);\n        this.data_url = reader.result;\n      };\n      reader.readAsDataURL(file);\n    },\n    load() {\n      const {\n        img\n      } = this.$refs;\n      const {\n        width,\n        height\n      } = img;\n\n      // TODO this should be in a utils file\n      const canvas = document.createElement('canvas');\n      canvas.width = width;\n      canvas.height = height;\n      const ctx = canvas.getContext('2d');\n      ctx.drawImage(img, 0, 0);\n      const img_data = ctx.getImageData(0, 0, width, height);\n      const colors = {};\n      const length = img_data.data.length / 4;\n      for (let i = 0; i < length; i++) {\n        const color = img_data.data.slice(i * 4, (i + 1) * 4);\n        colors[color] = (colors[color] || 0) + 1;\n      }\n      _varia__WEBPACK_IMPORTED_MODULE_1__[\"default\"].skips.forEach(c => {\n        console.log(c, colors[c]);\n        delete colors[c];\n      });\n      console.log(colors);\n    }\n  }\n});\n\n//# sourceURL=webpack://client/./src/components/IngestImage.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PickrInput.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PickrInput.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @simonwep/pickr */ \"./node_modules/@simonwep/pickr/dist/pickr.min.js\");\n/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    options: Object,\n    modelValue: String\n  },\n  emits: ['pickr', 'update:modelValue'],\n  data() {\n    return {\n      pickr: null\n    };\n  },\n  watch: {\n    modelValue(newColor) {\n      this.pickr.setColor(newColor);\n    }\n  },\n  mounted() {\n    this.pickr = new (_simonwep_pickr__WEBPACK_IMPORTED_MODULE_0___default())({\n      el: this.$el,\n      default: this.modelValue,\n      theme: 'nano',\n      components: {\n        preview: true,\n        opacity: true,\n        hue: true,\n        interaction: {\n          hex: true,\n          rgba: true,\n          hsla: true,\n          hsva: true,\n          cmyk: true,\n          input: true,\n          clear: true\n        }\n      },\n      ...this.options\n    });\n    window.PICKR = this.pickr;\n    this.pickr.on('change', color => {\n      const {\n        defaultRepresentation\n      } = this.pickr.options;\n      let value;\n      if (defaultRepresentation === 'HEX') {\n        value = color.toHEXA().toString(0);\n      } else {\n        value = color['to' + defaultRepresentation]().toString(0);\n      }\n      this.$emit('update:modelValue', value);\n    });\n    this.pickr.on('clear', () => this.$emit('update:modelValue', null));\n    this.$emit('pickr', this.pickr);\n  }\n});\n\n//# sourceURL=webpack://client/./src/components/PickrInput.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/LoadingModal.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/LoadingModal.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    tasks: Array\n  },\n  emits: ['done'],\n  data() {\n    return {\n      index: 0\n    };\n  },\n  watch: {\n    tasks: 'reset'\n  },\n  mounted() {\n    this.reset();\n  },\n  methods: {\n    tick() {\n      const next = this.tasks?.[this.index];\n      if (!next) {\n        this.tasks?.length && this.$emit('done');\n        return;\n      }\n      setTimeout(() => {\n        next();\n        this.index++;\n        this.tick();\n      }, 100);\n    },\n    reset() {\n      this.index = 0;\n      this.tick();\n    }\n  }\n});\n\n//# sourceURL=webpack://client/./src/views/EditSprite/LoadingModal.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/PreviewSprite.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/PreviewSprite.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _varia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/varia */ \"./src/varia/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"./src/utils.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    spritesheet: Object\n  },\n  data() {\n    const css = {\n      suit: name => `btn -${this.selected_suit === name ? 'primary' : 'secondary'}`\n    };\n    return {\n      ready: false,\n      selected_suit: 'power-suit',\n      css\n    };\n  },\n  computed: {\n    suits() {\n      const {\n        selected_region\n      } = this;\n      if (!selected_region || _varia__WEBPACK_IMPORTED_MODULE_0__[\"default\"].special_regions[selected_region]) {\n        return null;\n      }\n      return ['power-suit', 'varia-suit', 'gravity-suit'];\n    },\n    selected_region() {\n      return this.$store.local.state.selected_region;\n    },\n    regions() {\n      return Object.entries(_varia__WEBPACK_IMPORTED_MODULE_0__[\"default\"].regions).map(([name, [left, top, width, height]]) => ({\n        style: {\n          position: 'absolute',\n          background: 'rgba(255, 0, 0, 0.5)',\n          top: `${top}px`,\n          left: `${left}px`,\n          width: `${width}px`,\n          height: `${height}px`\n        },\n        id: name,\n        title: name\n      }));\n    },\n    region_src() {\n      const [x, y, width, height] = _varia__WEBPACK_IMPORTED_MODULE_0__[\"default\"].regions[this.selected_region.id];\n      const canvas = document.createElement('canvas');\n      canvas.width = width;\n      canvas.height = height;\n      const ctx = canvas.getContext('2d');\n      ctx.drawImage(this.$refs.img, -x, -y);\n      const image_data = ctx.getImageData(0, 0, width, height);\n      const {\n        palettes\n      } = this.$store.app.state;\n      const {\n        id\n      } = this.selected_region;\n      const overrides = this.$store.local.getOverrides(id, palettes, this.selected_suit);\n      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.replaceColors)(image_data, overrides);\n      ctx.putImageData(image_data, 0, 0);\n      return canvas.toDataURL();\n    }\n  },\n  methods: {\n    imageLoaded() {\n      const canvas = document.createElement('canvas');\n      const {\n        width,\n        height\n      } = this.$refs.img;\n      canvas.width = width;\n      canvas.height = height;\n      const ctx = canvas.getContext('2d');\n      ctx.drawImage(this.$refs.img, 0, 0);\n      this.$store.app.state.palettes = _varia__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extractPalettes(ctx);\n      this.$store.app.state.img = this.$refs.img;\n      this.ready = true;\n    },\n    selectRegion(region) {\n      this.$store.local.save({\n        selected_region: region\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://client/./src/views/EditSprite/PreviewSprite.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ColorSwatch_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ColorSwatch.vue */ \"./src/components/ColorSwatch.vue\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ \"./src/utils.js\");\n/* harmony import */ var _varia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/varia */ \"./src/varia/index.js\");\n/* harmony import */ var _PreviewSprite_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreviewSprite.vue */ \"./src/views/EditSprite/PreviewSprite.vue\");\n/* harmony import */ var _LoadingModal_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoadingModal.vue */ \"./src/views/EditSprite/LoadingModal.vue\");\n/* harmony import */ var _components_IngestImage_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/IngestImage.vue */ \"./src/components/IngestImage.vue\");\n\n\n\n\n\n\n\nconst css = {\n  swatch: ({\n    value\n  }) => ({\n    width: '32px',\n    height: '32px',\n    backgroundColor: `rgba(${value})`\n  })\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'EditSprite',\n  __route: {\n    path: '/app/edit-sprite/:spritesheet_name'\n  },\n  components: {\n    ColorSwatch: _components_ColorSwatch_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    IngestImage: _components_IngestImage_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    LoadingModal: _LoadingModal_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    PreviewSprite: _PreviewSprite_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data() {\n    return {\n      css,\n      ready: null,\n      tasks: null\n    };\n  },\n  computed: {\n    spritesheet() {\n      const {\n        spritesheet_name\n      } = this.$route.params;\n      const {\n        data\n      } = this.$store.spritesheet.state;\n      return data && data[spritesheet_name];\n    }\n  },\n  methods: {\n    savePng() {\n      const {\n        img\n      } = this.$store.app.state;\n      const {\n        width,\n        height\n      } = img;\n      const canvas = document.createElement('canvas');\n      canvas.width = width;\n      canvas.height = height;\n      const ctx = canvas.getContext('2d', {\n        willReadFrequently: true\n      });\n      ctx.drawImage(img, 0, 0);\n      const {\n        palettes\n      } = this.$store.app.state;\n      this.tasks = [];\n      Object.entries(_varia__WEBPACK_IMPORTED_MODULE_3__[\"default\"].regions).forEach(([region_id, [x, y, width, height]]) => {\n        this.tasks.push(() => {\n          const image_data = ctx.getImageData(x, y, width, height);\n          const overrides = this.$store.local.getOverrides(region_id, palettes, this.selected_suit);\n          // TODO actually swapping the colors is very slow and needs to be done server side\n          (0,_utils__WEBPACK_IMPORTED_MODULE_2__.replaceColors)(image_data, overrides);\n          ctx.putImageData(image_data, x, y);\n        });\n      });\n      this.tasks.push(() => {\n        _varia__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawPalettes(ctx, palettes, this.$store.local.state.overrides);\n        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.saveImage)(canvas.toDataURL(), 'out.png');\n      });\n    },\n    saveSpritesheet() {\n      const name = this.spritesheet.name + '.json';\n      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.saveFile)(JSON.stringify(this.$store.local.state, null, 2), name);\n    },\n    savePalette(palette) {\n      let filename = window.prompt('Enter Filename');\n      if (filename) {\n        if (!filename.endsWith('json')) {\n          filename += '.json';\n        }\n        const {\n          palettes\n        } = this.$store.app.state;\n        const colors = palette.colors.map(c => this.$store.local.resolveColor(c, palettes));\n        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.saveFile)(colors, filename);\n      }\n    },\n    loadPalette(event, palette) {\n      const file = event.target.files?.[0];\n      if (!file) {\n        return;\n      }\n      var reader = new FileReader();\n      reader.onload = () => {\n        const new_palette = JSON.parse(reader.result);\n        // TODO copypasta from ColorSwatch.vue\n        const {\n          overrides\n        } = this.$store.local.state;\n        palette.colors.forEach((color, index) => {\n          overrides[color.id] = new_palette[index];\n        });\n        this.$store.local.save(overrides);\n      };\n      reader.readAsText(file);\n    }\n  }\n});\n\n//# sourceURL=webpack://client/./src/views/EditSprite/index.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prepRoute = to => ({\n  to,\n  text: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.startCase)(to)\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __route: {\n    path: '/app'\n  },\n  data() {\n    return {\n      routes: ['/new-sprite/'].map(prepRoute)\n    };\n  }\n});\n\n//# sourceURL=webpack://client/./src/views/HomeView.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/NewSprite.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/NewSprite.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __route: {\n    path: '/app/new-sprite'\n  },\n  computed: {\n    sprites() {\n      const {\n        data\n      } = this.$store.spritesheet.state;\n      return Object.values(data || {}).map(sprite => ({\n        to: `/app/edit-sprite/${sprite.name}`,\n        display: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.startCase)(sprite.name),\n        ...sprite\n      }));\n    }\n  },\n  methods: {\n    change(event) {\n      const file = event.target.files?.[0];\n      if (!file) {\n        return;\n      }\n      var reader = new FileReader();\n      reader.onload = () => {\n        const filename = file.name;\n        const data_url = reader.result;\n        this.$store.local.save({\n          filename,\n          data_url\n        });\n        this.$router.push('/edit-sprite/');\n      };\n      reader.readAsDataURL(file);\n    }\n  }\n});\n\n//# sourceURL=webpack://client/./src/views/NewSprite.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PickrTest.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PickrTest.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  __route: {\n    path: '/pickr-test/'\n  },\n  data() {\n    return {\n      color: '#FF0000',\n      options: {\n        defaultRepresentation: 'HEX',\n        components: {\n          preview: true,\n          opacity: true,\n          hue: true,\n          interaction: {\n            hex: true,\n            rgba: true,\n            hsla: true,\n            hsva: true,\n            input: true,\n            clear: true\n          }\n        }\n      }\n    };\n  }\n});\n\n//# sourceURL=webpack://client/./src/views/PickrTest.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)]);\n}\n\n//# sourceURL=webpack://client/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ColorSwatch.vue?vue&type=template&id=077e3fff":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ColorSwatch.vue?vue&type=template&id=077e3fff ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_pickr_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"pickr-input\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.style)\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_pickr_input, {\n    modelValue: $options.modelValue,\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $options.modelValue = $event),\n    options: $options.options\n  }, null, 8 /* PROPS */, [\"modelValue\", \"options\"])], 4 /* STYLE */);\n}\n\n//# sourceURL=webpack://client/./src/components/ColorSwatch.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IngestImage.vue?vue&type=template&id=9d12f852":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IngestImage.vue?vue&type=template&id=9d12f852 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = [\"src\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"label\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    onChange: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args)),\n    type: \"file\"\n  }, null, 32 /* HYDRATE_EVENTS */), $data.data_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"img\", {\n    key: 0,\n    ref: \"img\",\n    src: $data.data_url,\n    onLoad: _cache[1] || (_cache[1] = (...args) => $options.load && $options.load(...args))\n  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n}\n\n//# sourceURL=webpack://client/./src/components/IngestImage.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PickrInput.vue?vue&type=template&id=351f8789":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PickrInput.vue?vue&type=template&id=351f8789 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, \"woo\");\n}\n\n//# sourceURL=webpack://client/./src/components/PickrInput.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/LoadingModal.vue?vue&type=template&id=ceaec472":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/LoadingModal.vue?vue&type=template&id=ceaec472 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_unrest_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"unrest-modal\");\n  return $props.tasks?.length > $data.index ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_unrest_modal, {\n    key: 0,\n    hide_actions: true,\n    class: \"loading-modal\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Processing... \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.index) + \" / \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.tasks.length), 1 /* TEXT */)]),\n\n    _: 1 /* STABLE */\n  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true);\n}\n\n//# sourceURL=webpack://client/./src/views/EditSprite/LoadingModal.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/PreviewSprite.vue?vue&type=template&id=69e6dfa7":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/PreviewSprite.vue?vue&type=template&id=69e6dfa7 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  key: 0\n};\nconst _hoisted_2 = {\n  key: 0,\n  class: \"btn-group\"\n};\nconst _hoisted_3 = [\"onClick\"];\nconst _hoisted_4 = {\n  class: \"flex gap-2 mb-4\"\n};\nconst _hoisted_5 = [\"src\"];\nconst _hoisted_6 = {\n  class: \"relative\"\n};\nconst _hoisted_7 = [\"src\"];\nconst _hoisted_8 = [\"onClick\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$data.ready && $options.selected_region ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [$options.suits ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.suits, suit => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"button\", {\n      key: suit,\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($data.css.suit(suit)),\n      onClick: $event => $data.selected_suit = suit\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(suit), 11 /* TEXT, CLASS, PROPS */, _hoisted_3);\n  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.selected_region.id) + \" \", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    onClick: _cache[0] || (_cache[0] = $event => $options.selectRegion(null)),\n    class: \"link\"\n  }, \"back\")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n    src: $options.region_src,\n    class: \"-full\"\n  }, null, 8 /* PROPS */, _hoisted_5)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n    ref: \"img\",\n    src: `${$props.spritesheet.folder_url}spritesheet.png`,\n    onLoad: _cache[1] || (_cache[1] = (...args) => $options.imageLoaded && $options.imageLoaded(...args))\n  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_7), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.regions, region => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({\n      key: region.id\n    }, region, {\n      onClick: $event => $options.selectRegion(region)\n    }), null, 16 /* FULL_PROPS */, _hoisted_8);\n  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$options.selected_region]])], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://client/./src/views/EditSprite/PreviewSprite.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/index.vue?vue&type=template&id=d3f31928":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/index.vue?vue&type=template&id=d3f31928 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  key: 0\n};\nconst _hoisted_2 = {\n  class: \"spritesheet-actions\"\n};\nconst _hoisted_3 = {\n  class: \"palette-actions\"\n};\nconst _hoisted_4 = [\"onClick\"];\nconst _hoisted_5 = {\n  class: \"fa fa-upload\"\n};\nconst _hoisted_6 = [\"onChange\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ingest_image = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ingest-image\");\n  const _component_color_swatch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"color-swatch\");\n  const _component_preview_sprite = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"preview-sprite\");\n  const _component_loading_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"loading-modal\");\n  return $options.spritesheet ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ingest_image), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.spritesheet.display) + \" \", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"i\", {\n    class: \"fa fa-save\",\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.saveSpritesheet && $options.saveSpritesheet(...args))\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"i\", {\n    class: \"fa fa-download\",\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.savePng && $options.savePng(...args))\n  })])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.$store.app.state.palettes, palette => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: palette.name,\n      class: \"swatch-list\"\n    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(palette.colors, color => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_color_swatch, {\n        key: color.name,\n        color: color\n      }, null, 8 /* PROPS */, [\"color\"]);\n    }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"i\", {\n      class: \"fa fa-download\",\n      onClick: $event => $options.savePalette(palette)\n    }, null, 8 /* PROPS */, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n      type: \"file\",\n      class: \"invisible-file-input\",\n      onChange: e => $options.loadPalette(e, palette)\n    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_6)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(palette.name), 1 /* TEXT */)])]);\n  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_preview_sprite, {\n    spritesheet: $options.spritesheet\n  }, null, 8 /* PROPS */, [\"spritesheet\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_loading_modal, {\n    tasks: $data.tasks,\n    onDone: _cache[2] || (_cache[2] = $event => $data.tasks = null)\n  }, null, 8 /* PROPS */, [\"tasks\"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true);\n}\n\n//# sourceURL=webpack://client/./src/views/EditSprite/index.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=template&id=9ea40744":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=template&id=9ea40744 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.routes, route => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {\n      key: route.to,\n      to: route.to\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(route.text), 1 /* TEXT */)]),\n\n      _: 2 /* DYNAMIC */\n    }, 1032 /* PROPS, DYNAMIC_SLOTS */, [\"to\"]);\n  }), 128 /* KEYED_FRAGMENT */))]);\n}\n\n//# sourceURL=webpack://client/./src/views/HomeView.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/NewSprite.vue?vue&type=template&id=4b92458a":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/NewSprite.vue?vue&type=template&id=4b92458a ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"sprite-card__list\"\n};\nconst _hoisted_2 = [\"src\"];\nconst _hoisted_3 = {\n  class: \"sprite-card__name\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    onChange: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args)),\n    type: \"file\"\n  }, null, 32 /* HYDRATE_EVENTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.sprites, sprite => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {\n      key: sprite.name,\n      to: sprite.to,\n      class: \"sprite-card\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n        class: \"sprite-card__image\",\n        src: `${sprite.folder_url}thumbnail.png`\n      }, null, 8 /* PROPS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(sprite.display), 1 /* TEXT */)]),\n\n      _: 2 /* DYNAMIC */\n    }, 1032 /* PROPS, DYNAMIC_SLOTS */, [\"to\"]);\n  }), 128 /* KEYED_FRAGMENT */))])]);\n}\n\n//# sourceURL=webpack://client/./src/views/NewSprite.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PickrTest.vue?vue&type=template&id=42b35a59":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PickrTest.vue?vue&type=template&id=42b35a59 ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_pickr_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"pickr-input\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.color = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.color]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_pickr_input, {\n    options: $data.options,\n    modelValue: $data.color,\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.color = $event),\n    onChange: _ctx.change\n  }, null, 8 /* PROPS */, [\"options\", \"modelValue\", \"onChange\"])]);\n}\n\n//# sourceURL=webpack://client/./src/views/PickrTest.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _unrest_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @unrest/vue */ \"./node_modules/@unrest/vue/dist/vue.es.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _components_PickrInput_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PickrInput.vue */ \"./src/components/PickrInput.vue\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store */ \"./src/store/index.js\");\n/* harmony import */ var _simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @simonwep/pickr/dist/themes/nano.min.css */ \"./node_modules/@simonwep/pickr/dist/themes/nano.min.css\");\n/* harmony import */ var _simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _unrest_tailwind_dist_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @unrest/tailwind/dist.css */ \"./node_modules/@unrest/tailwind/dist.css\");\n/* harmony import */ var _unrest_tailwind_dist_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_unrest_tailwind_dist_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_1__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\napp.use(_router__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).use(_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).use(_unrest_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].plugin).component('PickrInput', _components_PickrInput_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).mount('#app');\n\n//# sourceURL=webpack://client/./src/main.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _unrest_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @unrest/vue */ \"./node_modules/@unrest/vue/dist/vue.es.js\");\n/* harmony import */ var _unrest_vue_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @unrest/vue-auth */ \"./node_modules/@unrest/vue-auth/dist/vue-auth.es.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views */ \"./src/views/index.js\");\n\n\n\n\nconst routes = [..._unrest_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadViews(_views__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), ..._unrest_vue_auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"].routes];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.createWebHistory)(),\n  routes\n});\nrouter.beforeEach(_unrest_vue_auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"].checkAuth);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack://client/./src/router.js?");

/***/ }),

/***/ "./src/store/app.js":
/*!**************************!*\
  !*** ./src/store/app.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  const initial = {\n    palettes: null\n  };\n  return {\n    state: (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(initial)\n  };\n});\n\n//# sourceURL=webpack://client/./src/store/app.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local */ \"./src/store/local.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/store/app.js\");\n/* harmony import */ var _spritesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spritesheet */ \"./src/store/spritesheet.js\");\n\n\n\nconst modules = {\n  local: _local__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  app: _app__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  spritesheet: _spritesheet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\nconst store = {\n  install(app) {\n    app.config.globalProperties.$store = store;\n    store._app = app;\n    Object.entries(modules).forEach(([name, module]) => {\n      store[name] = module({\n        store\n      });\n    });\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack://client/./src/store/index.js?");

/***/ }),

/***/ "./src/store/local.js":
/*!****************************!*\
  !*** ./src/store/local.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _unrest_vue_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @unrest/vue-storage */ \"./node_modules/@unrest/vue-storage/dist/vue-storage.es.js\");\n/* harmony import */ var _varia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/varia */ \"./src/varia/index.js\");\n/* harmony import */ var _vec4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/vec4 */ \"./src/vec4.js\");\n\n\n\nconst LS_KEY = 'LOCAL_STORE';\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  const initial = {\n    data_url: null,\n    filename: null,\n    overrides: {},\n    selected_region: null\n  };\n  const storage = (0,_unrest_vue_storage__WEBPACK_IMPORTED_MODULE_0__.ReactiveLocalStorage)({\n    LS_KEY,\n    initial\n  });\n  storage.resolveColor = (color, palettes) => {\n    const override = storage.state.overrides[color.id];\n    if (!override && color.locked) {\n      const base_color = palettes[0].colors[color.index];\n      return storage.resolveColor(base_color, palettes);\n    }\n    return override || color.value;\n  };\n  storage.getOverrides = (region_id, palettes, suit_name = 'power-suit') => {\n    const palette_name = _varia__WEBPACK_IMPORTED_MODULE_1__[\"default\"].special_regions[region_id] || suit_name;\n    const palette = palettes.find(p => p.name === palette_name);\n    const palette_index = palettes.indexOf(palette);\n    const overrides = palette.colors.map((color, index) => {\n      let {\n        value\n      } = color;\n      if (palette_index < 4) {\n        // suits and death\n        value = palettes[0].colors[index].value;\n      }\n      return [value, storage.resolveColor(color, palettes)];\n    });\n    return overrides.filter(o => !_vec4__WEBPACK_IMPORTED_MODULE_2__[\"default\"].equal(o[0], o[1]));\n  };\n  return storage;\n});\n\n//# sourceURL=webpack://client/./src/store/local.js?");

/***/ }),

/***/ "./src/store/spritesheet.js":
/*!**********************************!*\
  !*** ./src/store/spritesheet.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store => {\n  const state = (0,vue__WEBPACK_IMPORTED_MODULE_2__.reactive)({\n    data: null,\n    get ready() {\n      return !!state.data;\n    }\n  });\n  axios__WEBPACK_IMPORTED_MODULE_0___default().get('/static/sprite_data.json').then(({\n    data\n  }) => {\n    Object.values(data).map(spritesheet => {\n      spritesheet.display = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.startCase)(spritesheet.name);\n    });\n    state.data = data;\n  });\n  return {\n    state\n  };\n});\n\n//# sourceURL=webpack://client/./src/store/spritesheet.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"extractPalette\": function() { return /* binding */ extractPalette; },\n/* harmony export */   \"replaceColors\": function() { return /* binding */ replaceColors; },\n/* harmony export */   \"saveFile\": function() { return /* binding */ saveFile; },\n/* harmony export */   \"saveImage\": function() { return /* binding */ saveImage; }\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst extractPalette = (ctx, {\n  x,\n  y,\n  width,\n  height,\n  skips = []\n}) => {\n  // DEPRECATED: unused funciton, use or delete by March 2023\n  const image_data = ctx.getImageData(x, y, width, height);\n  const data = image_data.data;\n  const size = width * height;\n  const colors = {};\n  for (let i = 0; i < size; i++) {\n    const color = [data[i * 4], data[i * 4 + 1], data[i * 4 + 2], data[i * 4 + 3]];\n    const hash = color.toString();\n    if (!colors[hash]) {\n      colors[hash] = {\n        hash,\n        color,\n        count: 0\n      };\n    }\n    colors[hash].count++;\n  }\n  return Object.values(colors).filter(swatch => !skips.includes(swatch.hash));\n};\nconst saveFile = (text, filename) => {\n  if (typeof text === 'object') {\n    text = JSON.stringify(text);\n  }\n  const anchor = document.createElement('a');\n  anchor.href = 'data:' + 'text/plain' + 'charset=utf-8,' + escape(text);\n  anchor.setAttribute('download', filename);\n  document.body.appendChild(anchor);\n  anchor.click();\n  document.body.removeChild(anchor);\n};\nconst saveImage = (dataurl, filename) => {\n  const anchor = document.createElement('a');\n  anchor.href = dataurl;\n  anchor.setAttribute('download', filename);\n  document.body.appendChild(anchor);\n  anchor.click();\n  document.body.removeChild(anchor);\n};\nconst getPixelMap = image_data => {\n  const pixel_map = {};\n  for (let i = 0; i < image_data.data.length; i++) {\n    const color = image_data.data.slice(i * 4, (i + 1) * 4);\n    const hash = color.toString();\n    if (!pixel_map[hash]) {\n      pixel_map[hash] = [];\n    }\n    pixel_map[hash].push(i);\n  }\n  return pixel_map;\n};\nconst replaceColors = (image_data, overrides) => {\n  const pixel_map = getPixelMap(image_data);\n  overrides.forEach(([color1, color2]) => {\n    pixel_map[color1]?.forEach(index => {\n      image_data.data[4 * index] = color2[0];\n      image_data.data[4 * index + 1] = color2[1];\n      image_data.data[4 * index + 2] = color2[2];\n      image_data.data[4 * index + 3] = color2[3];\n    });\n  });\n};\n\n//# sourceURL=webpack://client/./src/utils.js?");

/***/ }),

/***/ "./src/varia/index.js":
/*!****************************!*\
  !*** ./src/varia/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ \"./src/varia/data.json\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n// constants and functionality relating to varia compatible super-metroid sprite sheets\n\n\nconst varia = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(_data_json__WEBPACK_IMPORTED_MODULE_0__);\nvaria.extractPalettes = ctx => {\n  const x = 378;\n  const y = 1;\n  const width = 8 * 15;\n  const height = 8 * 7;\n  const image_data = ctx.getImageData(x, y, width, height);\n  const palettes = varia.palette_names.map((name, y_index) => ({\n    name,\n    colors: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.range)(15).map(x_index => {\n      const offset = y_index * width * 8 + x_index * 8;\n      const value = Array.from(image_data.data.slice(4 * offset, 4 * (offset + 1)));\n      return {\n        id: `${name}__${x_index}`,\n        index: x_index,\n        value,\n        hash: value.toString(),\n        empty: value[4] === 0,\n        palette: name\n      };\n    })\n  }));\n  const og = palettes[0].colors;\n  palettes.slice(1, 4).forEach(p => p.colors.forEach((c, i) => {\n    c.locked = c.hash === og[i].hash;\n  }));\n  return palettes;\n};\nvaria.drawPalettes = (ctx, palettes, overrides) => {\n  const x = 378;\n  const y = 1;\n  palettes.forEach((palette, y_index) => {\n    palette.colors.forEach((color, x_index) => {\n      if (overrides[color.id]) {\n        ctx.fillStyle = `rgba(${overrides[color.id].join(',')})`;\n        ctx.fillRect(x + x_index * 8, y + y_index * 8, 8, 8);\n      }\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (varia);\n\n//# sourceURL=webpack://client/./src/varia/index.js?");

/***/ }),

/***/ "./src/vec4.js":
/*!*********************!*\
  !*** ./src/vec4.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst vec4 = {\n  equal: (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (vec4);\n\n//# sourceURL=webpack://client/./src/vec4.js?");

/***/ }),

/***/ "./src/views/index.js":
/*!****************************!*\
  !*** ./src/views/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HomeView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeView.vue */ \"./src/views/HomeView.vue\");\n/* harmony import */ var _EditSprite_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditSprite/index.vue */ \"./src/views/EditSprite/index.vue\");\n/* harmony import */ var _NewSprite_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewSprite.vue */ \"./src/views/NewSprite.vue\");\n/* harmony import */ var _PickrTest_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PickrTest.vue */ \"./src/views/PickrTest.vue\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  HomeView: _HomeView_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  EditSprite: _EditSprite_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  NewSprite: _NewSprite_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  PickrTest: _PickrTest_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n\n//# sourceURL=webpack://client/./src/views/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./src/css/index.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./src/css/index.css ***!
  \*************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\\n*//*\\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\\n*/\\n\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box; /* 1 */\\n  border-width: 0; /* 2 */\\n  border-style: solid; /* 2 */\\n  border-color: #e5e7eb; /* 2 */\\n}\\n\\n::before,\\n::after {\\n  --tw-content: '';\\n}\\n\\n/*\\n1. Use a consistent sensible line-height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n3. Use a more readable tab size.\\n4. Use the user's configured `sans` font-family by default.\\n5. Use the user's configured `sans` font-feature-settings by default.\\n*/\\n\\nhtml {\\n  line-height: 1.5; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n  -moz-tab-size: 4; /* 3 */\\n  -o-tab-size: 4;\\n     tab-size: 4; /* 3 */\\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"; /* 4 */\\n  font-feature-settings: normal; /* 5 */\\n}\\n\\n/*\\n1. Remove the margin in all browsers.\\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\\n*/\\n\\nbody {\\n  margin: 0; /* 1 */\\n  line-height: inherit; /* 2 */\\n}\\n\\n/*\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n3. Ensure horizontal rules are visible by default.\\n*/\\n\\nhr {\\n  height: 0; /* 1 */\\n  color: inherit; /* 2 */\\n  border-top-width: 1px; /* 3 */\\n}\\n\\n/*\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\nabbr:where([title]) {\\n  -webkit-text-decoration: underline dotted;\\n          text-decoration: underline dotted;\\n}\\n\\n/*\\nRemove the default font size and weight for headings.\\n*/\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\n/*\\nReset links to optimize for opt-in styling instead of opt-out.\\n*/\\n\\na {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n\\n/*\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/*\\n1. Use the user's configured `mono` font family by default.\\n2. Correct the odd `em` font sizing in all browsers.\\n*/\\n\\ncode,\\nkbd,\\nsamp,\\npre {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/*\\nAdd the correct font size in all browsers.\\n*/\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/*\\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\\n*/\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/*\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n3. Remove gaps between table borders by default.\\n*/\\n\\ntable {\\n  text-indent: 0; /* 1 */\\n  border-color: inherit; /* 2 */\\n  border-collapse: collapse; /* 3 */\\n}\\n\\n/*\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n3. Remove default padding in all browsers.\\n*/\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  font-weight: inherit; /* 1 */\\n  line-height: inherit; /* 1 */\\n  color: inherit; /* 1 */\\n  margin: 0; /* 2 */\\n  padding: 0; /* 3 */\\n}\\n\\n/*\\nRemove the inheritance of text transform in Edge and Firefox.\\n*/\\n\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Remove default button styles.\\n*/\\n\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n  -webkit-appearance: button; /* 1 */\\n  background-color: transparent; /* 2 */\\n  background-image: none; /* 2 */\\n}\\n\\n/*\\nUse the modern Firefox focus style for all focusable elements.\\n*/\\n\\n:-moz-focusring {\\n  outline: auto;\\n}\\n\\n/*\\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\\n*/\\n\\n:-moz-ui-invalid {\\n  box-shadow: none;\\n}\\n\\n/*\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/*\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/*\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n[type='search'] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/*\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to `inherit` in Safari.\\n*/\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/*\\nRemoves the default spacing and border for appropriate elements.\\n*/\\n\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\n\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nlegend {\\n  padding: 0;\\n}\\n\\nol,\\nul,\\nmenu {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/*\\nPrevent resizing textareas horizontally by default.\\n*/\\n\\ntextarea {\\n  resize: vertical;\\n}\\n\\n/*\\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\\n2. Set the default placeholder color to the user's configured gray 400 color.\\n*/\\n\\ninput::-moz-placeholder, textarea::-moz-placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\ninput::placeholder,\\ntextarea::placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\n/*\\nSet the default cursor for buttons.\\n*/\\n\\nbutton,\\n[role=\\\"button\\\"] {\\n  cursor: pointer;\\n}\\n\\n/*\\nMake sure disabled buttons don't get the pointer cursor.\\n*/\\n:disabled {\\n  cursor: default;\\n}\\n\\n/*\\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\\n   This can trigger a poorly considered lint error in some tools but is included by design.\\n*/\\n\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block; /* 1 */\\n  vertical-align: middle; /* 2 */\\n}\\n\\n/*\\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\\n*/\\n\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n/* Make elements with the HTML hidden attribute stay hidden by default */\\n[hidden] {\\n  display: none;\\n}\\n\\n*, ::before, ::after {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\n  --tw-ring-offset-shadow: 0 0 #0000;\\n  --tw-ring-shadow: 0 0 #0000;\\n  --tw-shadow: 0 0 #0000;\\n  --tw-shadow-colored: 0 0 #0000;\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n\\n::backdrop {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\n  --tw-ring-offset-shadow: 0 0 #0000;\\n  --tw-ring-shadow: 0 0 #0000;\\n  --tw-shadow: 0 0 #0000;\\n  --tw-shadow-colored: 0 0 #0000;\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n\\n.absolute {\\n  position: absolute;\\n}\\n\\n.relative {\\n  position: relative;\\n}\\n\\n.mb-4 {\\n  margin-bottom: 1rem;\\n}\\n\\n.flex {\\n  display: flex;\\n}\\n\\n.gap-2 {\\n  gap: 0.5rem;\\n}\\n\\n.filter {\\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\\n}\\n\\n.swatch-list {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.swatch-list__swatch {\\n  display: flex;\\n  height: 2rem;\\n  width: 2rem;\\n  align-items: center;\\n  justify-content: center;\\n  --tw-text-opacity: 1;\\n  color: rgb(255 255 255 / var(--tw-text-opacity));\\n    text-shadow: 0 0 2px black;\\n}\\n\\n.swatch-list .palette-actions {\\n  align-items: center;\\n  justify-content: center;\\n  gap: 1rem;\\n  padding-left: 1rem;\\n    display: none;\\n}\\n\\n.swatch-list .palette-actions .fa {\\n  cursor: pointer;\\n}\\n\\n.swatch-list:hover .palette-actions {\\n  display: flex;\\n}\\n\\nimg.-full {\\n  image-rendering: pixelated;\\n  max-width: unset;\\n  min-width: 100%;\\n}\\n\\n.invisible-file-input {\\n  left: -1000px;\\n  opacity: 0;\\n  pointer-events:none;\\n  position: absolute;\\n  top: -1000px\\n}\\n\\n.pcr-app .pcr-interaction .pcr-result {\\n    flex-basis: 70%;\\n    order: 1;\\n  }\\n\\n.pcr-app .pcr-interaction .pcr-clear {\\n    order: 2;\\n  }\\n\\n.pcr-app .pcr-interaction .pcr-type {\\n    order: 3\\n  }\\n\\n.pcr-app .pcr-swatches {\\n  order: 9;\\n  margin: 0.3em 0;\\n}\\n\\n.pickr .pcr-button {\\n  display: block;\\n  border-radius: 0;\\n}\\n\\n.pickr .pcr-button:focus {\\n    box-shadow: unset;\\n    outline: unset;\\n  }\\n\\n.pickr .pcr-button:before {\\n    border-radius: 0;\\n  }\\n\\n.pickr .pcr-button:after {\\n    background: linear-gradient(135deg, var(--base-color) 50%, var(--selected-color) 50%);\\n    border-radius: 0;\\n  }\\n\\n.loading-modal .modal-content {\\n}\\n\\n.sprite-card__list {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 0.5rem;\\n}\\n\\n.sprite-card {\\n  border-radius: 0.5rem;\\n  border-width: 1px;\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\\n  padding: 0.5rem;\\n}\\n\\n.sprite-card:hover {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\\n}\\n\\n.sprite-card__image {\\n    image-rendering: pixelated;\\n    width: 150px;\\n  }\\n\\n.sprite-card__name {\\n    max-width: 150px;\\n    text-align: center;\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://client/./src/css/index.css?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use%5B2%5D");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://client/./src/App.vue?");

/***/ }),

/***/ "./src/components/ColorSwatch.vue":
/*!****************************************!*\
  !*** ./src/components/ColorSwatch.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ColorSwatch_vue_vue_type_template_id_077e3fff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorSwatch.vue?vue&type=template&id=077e3fff */ \"./src/components/ColorSwatch.vue?vue&type=template&id=077e3fff\");\n/* harmony import */ var _ColorSwatch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorSwatch.vue?vue&type=script&lang=js */ \"./src/components/ColorSwatch.vue?vue&type=script&lang=js\");\n/* harmony import */ var _home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ColorSwatch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_ColorSwatch_vue_vue_type_template_id_077e3fff__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/ColorSwatch.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://client/./src/components/ColorSwatch.vue?");

/***/ }),

/***/ "./src/components/IngestImage.vue":
/*!****************************************!*\
  !*** ./src/components/IngestImage.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IngestImage_vue_vue_type_template_id_9d12f852__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IngestImage.vue?vue&type=template&id=9d12f852 */ \"./src/components/IngestImage.vue?vue&type=template&id=9d12f852\");\n/* harmony import */ var _IngestImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IngestImage.vue?vue&type=script&lang=js */ \"./src/components/IngestImage.vue?vue&type=script&lang=js\");\n/* harmony import */ var _home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_IngestImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_IngestImage_vue_vue_type_template_id_9d12f852__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/IngestImage.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://client/./src/components/IngestImage.vue?");

/***/ }),

/***/ "./src/components/PickrInput.vue":
/*!***************************************!*\
  !*** ./src/components/PickrInput.vue ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PickrInput_vue_vue_type_template_id_351f8789__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PickrInput.vue?vue&type=template&id=351f8789 */ \"./src/components/PickrInput.vue?vue&type=template&id=351f8789\");\n/* harmony import */ var _PickrInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PickrInput.vue?vue&type=script&lang=js */ \"./src/components/PickrInput.vue?vue&type=script&lang=js\");\n/* harmony import */ var _home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_PickrInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_PickrInput_vue_vue_type_template_id_351f8789__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/PickrInput.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://client/./src/components/PickrInput.vue?");

/***/ }),

/***/ "./src/views/EditSprite/LoadingModal.vue":
/*!***********************************************!*\
  !*** ./src/views/EditSprite/LoadingModal.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LoadingModal_vue_vue_type_template_id_ceaec472__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingModal.vue?vue&type=template&id=ceaec472 */ \"./src/views/EditSprite/LoadingModal.vue?vue&type=template&id=ceaec472\");\n/* harmony import */ var _LoadingModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingModal.vue?vue&type=script&lang=js */ \"./src/views/EditSprite/LoadingModal.vue?vue&type=script&lang=js\");\n/* harmony import */ var _home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_LoadingModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_LoadingModal_vue_vue_type_template_id_ceaec472__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/EditSprite/LoadingModal.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://client/./src/views/EditSprite/LoadingModal.vue?");

/***/ }),

/***/ "./src/views/EditSprite/PreviewSprite.vue":
/*!************************************************!*\
  !*** ./src/views/EditSprite/PreviewSprite.vue ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PreviewSprite_vue_vue_type_template_id_69e6dfa7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreviewSprite.vue?vue&type=template&id=69e6dfa7 */ \"./src/views/EditSprite/PreviewSprite.vue?vue&type=template&id=69e6dfa7\");\n/* harmony import */ var _PreviewSprite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreviewSprite.vue?vue&type=script&lang=js */ \"./src/views/EditSprite/PreviewSprite.vue?vue&type=script&lang=js\");\n/* harmony import */ var _home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_PreviewSprite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_PreviewSprite_vue_vue_type_template_id_69e6dfa7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/EditSprite/PreviewSprite.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://client/./src/views/EditSprite/PreviewSprite.vue?");

/***/ }),

/***/ "./src/views/EditSprite/index.vue":
/*!****************************************!*\
  !*** ./src/views/EditSprite/index.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_d3f31928__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d3f31928 */ \"./src/views/EditSprite/index.vue?vue&type=template&id=d3f31928\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ \"./src/views/EditSprite/index.vue?vue&type=script&lang=js\");\n/* harmony import */ var _home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_index_vue_vue_type_template_id_d3f31928__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/EditSprite/index.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://client/./src/views/EditSprite/index.vue?");

/***/ }),

/***/ "./src/views/HomeView.vue":
/*!********************************!*\
  !*** ./src/views/HomeView.vue ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HomeView_vue_vue_type_template_id_9ea40744__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeView.vue?vue&type=template&id=9ea40744 */ \"./src/views/HomeView.vue?vue&type=template&id=9ea40744\");\n/* harmony import */ var _HomeView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeView.vue?vue&type=script&lang=js */ \"./src/views/HomeView.vue?vue&type=script&lang=js\");\n/* harmony import */ var _home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_HomeView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_HomeView_vue_vue_type_template_id_9ea40744__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/HomeView.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://client/./src/views/HomeView.vue?");

/***/ }),

/***/ "./src/views/NewSprite.vue":
/*!*********************************!*\
  !*** ./src/views/NewSprite.vue ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NewSprite_vue_vue_type_template_id_4b92458a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewSprite.vue?vue&type=template&id=4b92458a */ \"./src/views/NewSprite.vue?vue&type=template&id=4b92458a\");\n/* harmony import */ var _NewSprite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewSprite.vue?vue&type=script&lang=js */ \"./src/views/NewSprite.vue?vue&type=script&lang=js\");\n/* harmony import */ var _home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_NewSprite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_NewSprite_vue_vue_type_template_id_4b92458a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/NewSprite.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://client/./src/views/NewSprite.vue?");

/***/ }),

/***/ "./src/views/PickrTest.vue":
/*!*********************************!*\
  !*** ./src/views/PickrTest.vue ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PickrTest_vue_vue_type_template_id_42b35a59__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PickrTest.vue?vue&type=template&id=42b35a59 */ \"./src/views/PickrTest.vue?vue&type=template&id=42b35a59\");\n/* harmony import */ var _PickrTest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PickrTest.vue?vue&type=script&lang=js */ \"./src/views/PickrTest.vue?vue&type=script&lang=js\");\n/* harmony import */ var _home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_home_chriscauley_projects_spriteo_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_PickrTest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_PickrTest_vue_vue_type_template_id_42b35a59__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/PickrTest.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://client/./src/views/PickrTest.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://client/./src/App.vue?");

/***/ }),

/***/ "./src/components/ColorSwatch.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/components/ColorSwatch.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorSwatch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorSwatch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorSwatch.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ColorSwatch.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://client/./src/components/ColorSwatch.vue?");

/***/ }),

/***/ "./src/components/IngestImage.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/components/IngestImage.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IngestImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IngestImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IngestImage.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IngestImage.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://client/./src/components/IngestImage.vue?");

/***/ }),

/***/ "./src/components/PickrInput.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/PickrInput.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PickrInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PickrInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PickrInput.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PickrInput.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://client/./src/components/PickrInput.vue?");

/***/ }),

/***/ "./src/views/EditSprite/LoadingModal.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/views/EditSprite/LoadingModal.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingModal.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/LoadingModal.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://client/./src/views/EditSprite/LoadingModal.vue?");

/***/ }),

/***/ "./src/views/EditSprite/PreviewSprite.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/views/EditSprite/PreviewSprite.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviewSprite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviewSprite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PreviewSprite.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/PreviewSprite.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://client/./src/views/EditSprite/PreviewSprite.vue?");

/***/ }),

/***/ "./src/views/EditSprite/index.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/views/EditSprite/index.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/index.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://client/./src/views/EditSprite/index.vue?");

/***/ }),

/***/ "./src/views/HomeView.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/views/HomeView.vue?vue&type=script&lang=js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeView.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://client/./src/views/HomeView.vue?");

/***/ }),

/***/ "./src/views/NewSprite.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/views/NewSprite.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewSprite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewSprite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewSprite.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/NewSprite.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://client/./src/views/NewSprite.vue?");

/***/ }),

/***/ "./src/views/PickrTest.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/views/PickrTest.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PickrTest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PickrTest_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PickrTest.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PickrTest.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://client/./src/views/PickrTest.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90\");\n\n\n//# sourceURL=webpack://client/./src/App.vue?");

/***/ }),

/***/ "./src/components/ColorSwatch.vue?vue&type=template&id=077e3fff":
/*!**********************************************************************!*\
  !*** ./src/components/ColorSwatch.vue?vue&type=template&id=077e3fff ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorSwatch_vue_vue_type_template_id_077e3fff__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorSwatch_vue_vue_type_template_id_077e3fff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorSwatch.vue?vue&type=template&id=077e3fff */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ColorSwatch.vue?vue&type=template&id=077e3fff\");\n\n\n//# sourceURL=webpack://client/./src/components/ColorSwatch.vue?");

/***/ }),

/***/ "./src/components/IngestImage.vue?vue&type=template&id=9d12f852":
/*!**********************************************************************!*\
  !*** ./src/components/IngestImage.vue?vue&type=template&id=9d12f852 ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IngestImage_vue_vue_type_template_id_9d12f852__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IngestImage_vue_vue_type_template_id_9d12f852__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IngestImage.vue?vue&type=template&id=9d12f852 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IngestImage.vue?vue&type=template&id=9d12f852\");\n\n\n//# sourceURL=webpack://client/./src/components/IngestImage.vue?");

/***/ }),

/***/ "./src/components/PickrInput.vue?vue&type=template&id=351f8789":
/*!*********************************************************************!*\
  !*** ./src/components/PickrInput.vue?vue&type=template&id=351f8789 ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PickrInput_vue_vue_type_template_id_351f8789__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PickrInput_vue_vue_type_template_id_351f8789__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PickrInput.vue?vue&type=template&id=351f8789 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/PickrInput.vue?vue&type=template&id=351f8789\");\n\n\n//# sourceURL=webpack://client/./src/components/PickrInput.vue?");

/***/ }),

/***/ "./src/views/EditSprite/LoadingModal.vue?vue&type=template&id=ceaec472":
/*!*****************************************************************************!*\
  !*** ./src/views/EditSprite/LoadingModal.vue?vue&type=template&id=ceaec472 ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingModal_vue_vue_type_template_id_ceaec472__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingModal_vue_vue_type_template_id_ceaec472__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingModal.vue?vue&type=template&id=ceaec472 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/LoadingModal.vue?vue&type=template&id=ceaec472\");\n\n\n//# sourceURL=webpack://client/./src/views/EditSprite/LoadingModal.vue?");

/***/ }),

/***/ "./src/views/EditSprite/PreviewSprite.vue?vue&type=template&id=69e6dfa7":
/*!******************************************************************************!*\
  !*** ./src/views/EditSprite/PreviewSprite.vue?vue&type=template&id=69e6dfa7 ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviewSprite_vue_vue_type_template_id_69e6dfa7__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PreviewSprite_vue_vue_type_template_id_69e6dfa7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PreviewSprite.vue?vue&type=template&id=69e6dfa7 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/PreviewSprite.vue?vue&type=template&id=69e6dfa7\");\n\n\n//# sourceURL=webpack://client/./src/views/EditSprite/PreviewSprite.vue?");

/***/ }),

/***/ "./src/views/EditSprite/index.vue?vue&type=template&id=d3f31928":
/*!**********************************************************************!*\
  !*** ./src/views/EditSprite/index.vue?vue&type=template&id=d3f31928 ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_d3f31928__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_d3f31928__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=d3f31928 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/EditSprite/index.vue?vue&type=template&id=d3f31928\");\n\n\n//# sourceURL=webpack://client/./src/views/EditSprite/index.vue?");

/***/ }),

/***/ "./src/views/HomeView.vue?vue&type=template&id=9ea40744":
/*!**************************************************************!*\
  !*** ./src/views/HomeView.vue?vue&type=template&id=9ea40744 ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeView_vue_vue_type_template_id_9ea40744__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeView_vue_vue_type_template_id_9ea40744__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeView.vue?vue&type=template&id=9ea40744 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=template&id=9ea40744\");\n\n\n//# sourceURL=webpack://client/./src/views/HomeView.vue?");

/***/ }),

/***/ "./src/views/NewSprite.vue?vue&type=template&id=4b92458a":
/*!***************************************************************!*\
  !*** ./src/views/NewSprite.vue?vue&type=template&id=4b92458a ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewSprite_vue_vue_type_template_id_4b92458a__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewSprite_vue_vue_type_template_id_4b92458a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewSprite.vue?vue&type=template&id=4b92458a */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/NewSprite.vue?vue&type=template&id=4b92458a\");\n\n\n//# sourceURL=webpack://client/./src/views/NewSprite.vue?");

/***/ }),

/***/ "./src/views/PickrTest.vue?vue&type=template&id=42b35a59":
/*!***************************************************************!*\
  !*** ./src/views/PickrTest.vue?vue&type=template&id=42b35a59 ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PickrTest_vue_vue_type_template_id_42b35a59__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PickrTest_vue_vue_type_template_id_42b35a59__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PickrTest.vue?vue&type=template&id=42b35a59 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PickrTest.vue?vue&type=template&id=42b35a59\");\n\n\n//# sourceURL=webpack://client/./src/views/PickrTest.vue?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./index.css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./src/css/index.css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"e5113cf2\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://client/./src/css/index.css?");

/***/ }),

/***/ "data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg> ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";
eval("module.exports = \"data:image/svg+xml;utf8, <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 2 2\\\"><path fill=\\\"white\\\" d=\\\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\\\"/><path fill=\\\"gray\\\" d=\\\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\\\"/></svg>\";\n\n//# sourceURL=webpack://client/data:image/svg+xml;utf8,_%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_viewBox=%220_0_2_2%22%3E%3Cpath_fill=%22white%22_d=%22M1,0H2V1H1V0ZM0,1H1V2H0V1Z%22/%3E%3Cpath_fill=%22gray%22_d=%22M0,0H1V1H0V0ZM1,1H2V2H1V1Z%22/%3E%3C/svg%3E?");

/***/ }),

/***/ "data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\" stroke=\"%2342445A\" stroke-width=\"5px\" stroke-linecap=\"round\"><path d=\"M45,45L5,5\"></path><path d=\"M45,5L5,45\"></path></svg>":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" stroke="%2342445A" stroke-width="5px" stroke-linecap="round"><path d="M45,45L5,5"></path><path d="M45,5L5,45"></path></svg> ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";
eval("module.exports = \"data:image/svg+xml;utf8, <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 50 50\\\" stroke=\\\"%2342445A\\\" stroke-width=\\\"5px\\\" stroke-linecap=\\\"round\\\"><path d=\\\"M45,45L5,5\\\"></path><path d=\\\"M45,5L5,45\\\"></path></svg>\";\n\n//# sourceURL=webpack://client/data:image/svg+xml;utf8,_%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_viewBox=%220_0_50_50%22_stroke=%22%252342445A%22_stroke-width=%225px%22_stroke-linecap=%22round%22%3E%3Cpath_d=%22M45,45L5,5%22%3E%3C/path%3E%3Cpath_d=%22M45,5L5,45%22%3E%3C/path%3E%3C/svg%3E?");

/***/ }),

/***/ "./src/varia/data.json":
/*!*****************************!*\
  !*** ./src/varia/data.json ***!
  \*****************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"skips\":[\"0,0,0,0\",\"0,0,127,0\",\"0,0,127,255\"],\"palette_names\":[\"power-suit\",\"varia-suit\",\"gravity-suit\",\"death\",\"crystal-flash\",\"file-select\",\"x-ray-ship\"],\"special_regions\":{\"file-select\":\"file-select\",\"x-ray\":\"x-ray-ship\",\"death-fg\":\"death\",\"death-bg\":\"death\",\"crystal-flash\":\"crystal-flash\"},\"regions\":{\"file-select\":[332,58,212,34],\"cannon-ports\":[408,92,60,50],\"x-ray\":[268,1586,340,92],\"crystal-flash\":[232,2110,412,53],\"death-fg\":[166,2387,544,66],\"death-bg\":[204,2453,468,90],\"loading\":[98,142,680,58],\"standing__up\":[311,200,254,58],\"standing\":[115,258,646,50],\"standing__down\":[345,308,186,58],\"crouching__up\":[159,366,558,58],\"crouching\":[115,424,646,42],\"crouching__down\":[345,466,186,42],\"running\":[18,508,840,50],\"running__up\":[18,558,840,58],\"running__aim\":[18,616,840,50],\"running__down\":[18,666,840,50],\"moonwalk\":[234,716,408,58],\"moonwalk__up\":[234,774,408,58],\"moonwalk__down\":[234,832,408,58],\"jumping\":[0,890,876,348],\"falling\":[209,1238,458,348],\"draygon-grabbed\":[98,1678,680,58],\"hit\":[370,1736,136,58],\"bonk\":[18,1794,840,50],\"spin-jump\":[30,1844,816,50],\"wall-jump\":[328,1894,220,42],\"shine-spark\":[363,1936,152,50],\"screw-attack\":[14,1986,848,38],\"morphing__left\":[98,2024,68,34],\"morphing__right\":[710,2024,68,34],\"ball__still\":[166,2032,544,26],\"ball__roll\":[166,2058,544,26],\"ball__fall\":[166,2084,544,26],\"exhaustion\":[166,2163,544,42],\"stand-up\":[370,2205,136,50],\"grapple\":[0,2255,808,132],\"hang\":[808,2255,68,132]}}');\n\n//# sourceURL=webpack://client/./src/varia/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkclient"] = self["webpackChunkclient"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./src/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;