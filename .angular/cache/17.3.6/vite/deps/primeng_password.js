import {
  EyeIcon
} from "./chunk-QT3SKBX4.js";
import {
  InputText,
  InputTextModule
} from "./chunk-IYW4MT4E.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-IZKAFOIY.js";
import {
  TimesIcon
} from "./chunk-W2P6OFVF.js";
import {
  AutoFocus,
  AutoFocusModule
} from "./chunk-MSAHAXKV.js";
import {
  BaseIcon
} from "./chunk-GY2SQE72.js";
import {
  ConnectedOverlayScrollHandler,
  DomHandler
} from "./chunk-LZMSIMQG.js";
import {
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  UniqueComponentId,
  zindexutils
} from "./chunk-DKES6YWA.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-XLEFQRGB.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-7D2USRQO.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Pipe,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-AQMYOWS3.js";
import "./chunk-CBBFLWFT.js";
import "./chunk-J2SOPSV6.js";
import "./chunk-J4B6MK7R.js";

// node_modules/primeng/fesm2022/primeng-icons-eyeslash.mjs
var EyeSlashIcon = class _EyeSlashIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵEyeSlashIcon_BaseFactory;
    return function EyeSlashIcon_Factory(t) {
      return (ɵEyeSlashIcon_BaseFactory || (ɵEyeSlashIcon_BaseFactory = ɵɵgetInheritedFactory(_EyeSlashIcon)))(t || _EyeSlashIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _EyeSlashIcon,
    selectors: [["EyeSlashIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function EyeSlashIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0)(1, "g");
        ɵɵelement(2, "path", 1);
        ɵɵelementEnd();
        ɵɵelementStart(3, "defs")(4, "clipPath", 2);
        ɵɵelement(5, "rect", 3);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        ɵɵadvance();
        ɵɵattribute("clip-path", ctx.pathId);
        ɵɵadvance(3);
        ɵɵproperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeSlashIcon, [{
    type: Component,
    args: [{
      selector: "EyeSlashIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-password.mjs
var _c0 = ["input"];
var _c1 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c2 = (a0) => ({
  value: "visible",
  params: a0
});
var _c3 = (a0) => ({
  width: a0
});
function Password_ng_container_6_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesIcon", 10);
    ɵɵlistener("click", function Password_ng_container_6_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.clear());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-password-clear-icon");
    ɵɵattribute("data-pc-section", "clearIcon");
  }
}
function Password_ng_container_6_3_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_6_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Password_ng_container_6_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Password_ng_container_6_TimesIcon_1_Template, 1, 2, "TimesIcon", 7);
    ɵɵelementStart(2, "span", 8);
    ɵɵlistener("click", function Password_ng_container_6_Template_span_click_2_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.clear());
    });
    ɵɵtemplate(3, Password_ng_container_6_3_Template, 1, 0, null, 9);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.clearIconTemplate);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "clearIcon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.clearIconTemplate);
  }
}
function Password_ng_container_7_ng_container_1_EyeSlashIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "EyeSlashIcon", 12);
    ɵɵlistener("click", function Password_ng_container_7_ng_container_1_EyeSlashIcon_1_Template_EyeSlashIcon_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.onMaskToggle());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "hideIcon");
  }
}
function Password_ng_container_7_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_7_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Password_ng_container_7_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_7_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 12);
    ɵɵlistener("click", function Password_ng_container_7_ng_container_1_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.onMaskToggle());
    });
    ɵɵtemplate(1, Password_ng_container_7_ng_container_1_span_2_1_Template, 1, 0, null, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.hideIconTemplate);
  }
}
function Password_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Password_ng_container_7_ng_container_1_EyeSlashIcon_1_Template, 1, 1, "EyeSlashIcon", 11)(2, Password_ng_container_7_ng_container_1_span_2_Template, 2, 1, "span", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.hideIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.hideIconTemplate);
  }
}
function Password_ng_container_7_ng_container_2_EyeIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "EyeIcon", 12);
    ɵɵlistener("click", function Password_ng_container_7_ng_container_2_EyeIcon_1_Template_EyeIcon_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.onMaskToggle());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "showIcon");
  }
}
function Password_ng_container_7_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Password_ng_container_7_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Password_ng_container_7_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Password_ng_container_7_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 12);
    ɵɵlistener("click", function Password_ng_container_7_ng_container_2_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.onMaskToggle());
    });
    ɵɵtemplate(1, Password_ng_container_7_ng_container_2_span_2_1_Template, 1, 0, null, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.showIconTemplate);
  }
}
function Password_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Password_ng_container_7_ng_container_2_EyeIcon_1_Template, 1, 1, "EyeIcon", 11)(2, Password_ng_container_7_ng_container_2_span_2_Template, 2, 1, "span", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.showIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.showIconTemplate);
  }
}
function Password_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Password_ng_container_7_ng_container_1_Template, 3, 2, "ng-container", 5)(2, Password_ng_container_7_ng_container_2_Template, 3, 2, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.unmasked);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.unmasked);
  }
}
function Password_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Password_div_8_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Password_div_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Password_div_8_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.contentTemplate);
  }
}
function Password_div_8_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵelement(1, "div", 3);
    ɵɵpipe(2, "mapper");
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 16);
    ɵɵtext(4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "meter");
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpipeBind2(2, 6, ctx_r3.meter, ctx_r3.strengthClass))("ngStyle", ɵɵpureFunction1(9, _c3, ctx_r3.meter ? ctx_r3.meter.width : ""));
    ɵɵattribute("data-pc-section", "meterLabel");
    ɵɵadvance(2);
    ɵɵattribute("data-pc-section", "info");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.infoText);
  }
}
function Password_div_8_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Password_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13, 1);
    ɵɵlistener("click", function Password_div_8_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onOverlayClick($event));
    })("@overlayAnimation.start", function Password_div_8_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onAnimationStart($event));
    })("@overlayAnimation.done", function Password_div_8_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onAnimationEnd($event));
    });
    ɵɵtemplate(2, Password_div_8_ng_container_2_Template, 1, 0, "ng-container", 9)(3, Password_div_8_ng_container_3_Template, 2, 1, "ng-container", 14)(4, Password_div_8_ng_template_4_Template, 5, 11, "ng-template", null, 2, ɵɵtemplateRefExtractor)(6, Password_div_8_ng_container_6_Template, 1, 0, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const content_r10 = ɵɵreference(5);
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", "p-password-panel p-component")("@overlayAnimation", ɵɵpureFunction1(10, _c2, ɵɵpureFunction2(7, _c1, ctx_r3.showTransitionOptions, ctx_r3.hideTransitionOptions)));
    ɵɵattribute("data-pc-section", "panel");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.contentTemplate)("ngIfElse", content_r10);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.footerTemplate);
  }
}
var PasswordDirective = class _PasswordDirective {
  document;
  platformId;
  renderer;
  el;
  zone;
  /**
   * Text to prompt password entry. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  promptLabel = "Enter a password";
  /**
   * Text for a weak password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  weakLabel = "Weak";
  /**
   * Text for a medium password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  mediumLabel = "Medium";
  /**
   * Text for a strong password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  strongLabel = "Strong";
  /**
   * Whether to show the strength indicator or not.
   * @group Props
   */
  feedback = true;
  /**
   * Sets the visibility of the password field.
   * @group Props
   */
  set showPassword(show) {
    this.el.nativeElement.type = show ? "text" : "password";
  }
  panel;
  meter;
  info;
  filled;
  scrollHandler;
  documentResizeListener;
  constructor(document2, platformId, renderer, el, zone) {
    this.document = document2;
    this.platformId = platformId;
    this.renderer = renderer;
    this.el = el;
    this.zone = zone;
  }
  ngDoCheck() {
    this.updateFilledState();
  }
  onInput(e) {
    this.updateFilledState();
  }
  updateFilledState() {
    this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
  }
  createPanel() {
    if (isPlatformBrowser(this.platformId)) {
      this.panel = this.renderer.createElement("div");
      this.renderer.addClass(this.panel, "p-password-panel");
      this.renderer.addClass(this.panel, "p-component");
      this.renderer.addClass(this.panel, "p-password-panel-overlay");
      this.renderer.addClass(this.panel, "p-connected-overlay");
      this.meter = this.renderer.createElement("div");
      this.renderer.addClass(this.meter, "p-password-meter");
      this.renderer.appendChild(this.panel, this.meter);
      this.info = this.renderer.createElement("div");
      this.renderer.addClass(this.info, "p-password-info");
      this.renderer.setProperty(this.info, "textContent", this.promptLabel);
      this.renderer.appendChild(this.panel, this.info);
      this.renderer.setStyle(this.panel, "minWidth", `${this.el.nativeElement.offsetWidth}px`);
      this.renderer.appendChild(document.body, this.panel);
    }
  }
  showOverlay() {
    if (this.feedback) {
      if (!this.panel) {
        this.createPanel();
      }
      this.renderer.setStyle(this.panel, "zIndex", String(++DomHandler.zindex));
      this.renderer.setStyle(this.panel, "display", "block");
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          DomHandler.addClass(this.panel, "p-connected-overlay-visible");
          this.bindScrollListener();
          this.bindDocumentResizeListener();
        }, 1);
      });
      DomHandler.absolutePosition(this.panel, this.el.nativeElement);
    }
  }
  hideOverlay() {
    if (this.feedback && this.panel) {
      DomHandler.addClass(this.panel, "p-connected-overlay-hidden");
      DomHandler.removeClass(this.panel, "p-connected-overlay-visible");
      this.unbindScrollListener();
      this.unbindDocumentResizeListener();
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.ngOnDestroy();
        }, 150);
      });
    }
  }
  onFocus() {
    this.showOverlay();
  }
  onBlur() {
    this.hideOverlay();
  }
  onKeyup(e) {
    if (this.feedback) {
      let value = e.target.value, label = null, meterPos = null;
      if (value.length === 0) {
        label = this.promptLabel;
        meterPos = "0px 0px";
      } else {
        var score = this.testStrength(value);
        if (score < 30) {
          label = this.weakLabel;
          meterPos = "0px -10px";
        } else if (score >= 30 && score < 80) {
          label = this.mediumLabel;
          meterPos = "0px -20px";
        } else if (score >= 80) {
          label = this.strongLabel;
          meterPos = "0px -30px";
        }
      }
      if (!this.panel || !DomHandler.hasClass(this.panel, "p-connected-overlay-visible")) {
        this.showOverlay();
      }
      this.renderer.setStyle(this.meter, "backgroundPosition", meterPos);
      this.info.textContent = label;
    }
  }
  testStrength(str) {
    let grade = 0;
    let val;
    val = str.match("[0-9]");
    grade += this.normalize(val ? val.length : 1 / 4, 1) * 25;
    val = str.match("[a-zA-Z]");
    grade += this.normalize(val ? val.length : 1 / 2, 3) * 10;
    val = str.match("[!@#$%^&*?_~.,;=]");
    grade += this.normalize(val ? val.length : 1 / 6, 1) * 35;
    val = str.match("[A-Z]");
    grade += this.normalize(val ? val.length : 1 / 6, 1) * 30;
    grade *= str.length / 8;
    return grade > 100 ? 100 : grade;
  }
  normalize(x, y) {
    let diff = x - y;
    if (diff <= 0)
      return x / y;
    else
      return 1 + 0.5 * (x / (x + y / 4));
  }
  get disabled() {
    return this.el.nativeElement.disabled;
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (DomHandler.hasClass(this.panel, "p-connected-overlay-visible")) {
          this.hideOverlay();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        const window = this.document.defaultView;
        this.documentResizeListener = this.renderer.listen(window, "resize", this.onWindowResize.bind(this));
      }
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  onWindowResize() {
    if (!DomHandler.isTouchDevice()) {
      this.hideOverlay();
    }
  }
  ngOnDestroy() {
    if (this.panel) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      this.unbindDocumentResizeListener();
      this.renderer.removeChild(this.document.body, this.panel);
      this.panel = null;
      this.meter = null;
      this.info = null;
    }
  }
  static ɵfac = function PasswordDirective_Factory(t) {
    return new (t || _PasswordDirective)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PasswordDirective,
    selectors: [["", "pPassword", ""]],
    hostAttrs: [1, "p-inputtext", "p-component", "p-element"],
    hostVars: 2,
    hostBindings: function PasswordDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("input", function PasswordDirective_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        })("focus", function PasswordDirective_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function PasswordDirective_blur_HostBindingHandler() {
          return ctx.onBlur();
        })("keyup", function PasswordDirective_keyup_HostBindingHandler($event) {
          return ctx.onKeyup($event);
        });
      }
      if (rf & 2) {
        ɵɵclassProp("p-filled", ctx.filled);
      }
    },
    inputs: {
      promptLabel: "promptLabel",
      weakLabel: "weakLabel",
      mediumLabel: "mediumLabel",
      strongLabel: "strongLabel",
      feedback: [InputFlags.HasDecoratorInputTransform, "feedback", "feedback", booleanAttribute],
      showPassword: "showPassword"
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordDirective, [{
    type: Directive,
    args: [{
      selector: "[pPassword]",
      host: {
        class: "p-inputtext p-component p-element",
        "[class.p-filled]": "filled"
      }
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    promptLabel: [{
      type: Input
    }],
    weakLabel: [{
      type: Input
    }],
    mediumLabel: [{
      type: Input
    }],
    strongLabel: [{
      type: Input
    }],
    feedback: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showPassword: [{
      type: Input
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    onKeyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var MapperPipe = class _MapperPipe {
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
  static ɵfac = function MapperPipe_Factory(t) {
    return new (t || _MapperPipe)();
  };
  static ɵpipe = ɵɵdefinePipe({
    name: "mapper",
    type: _MapperPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapperPipe, [{
    type: Pipe,
    args: [{
      name: "mapper",
      pure: true
    }]
  }], null, null);
})();
var Password_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Password),
  multi: true
};
var Password = class _Password {
  document;
  platformId;
  renderer;
  cd;
  config;
  el;
  overlayService;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Label of the input for accessibility.
   * @group Props
   */
  label;
  /**
   * Indicates whether the component is disabled or not.
   * @group Props
   */
  disabled;
  /**
   * Text to prompt password entry. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  promptLabel;
  /**
   * Regex value for medium regex.
   * @group Props
   */
  mediumRegex = "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";
  /**
   * Regex value for strong regex.
   * @group Props
   */
  strongRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";
  /**
   * Text for a weak password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  weakLabel;
  /**
   * Text for a medium password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  mediumLabel;
  /**
   * specifies the maximum number of characters allowed in the input element.
   * @group Props
   */
  maxLength;
  /**
   * Text for a strong password. Defaults to PrimeNG I18N API configuration.
   * @group Props
   */
  strongLabel;
  /**
   * Identifier of the accessible input element.
   * @group Props
   */
  inputId;
  /**
   * Whether to show the strength indicator or not.
   * @group Props
   */
  feedback = true;
  /**
   * Id of the element or "body" for document where the overlay should be appended to.
   * @group Props
   */
  appendTo;
  /**
   * Whether to show an icon to display the password as plain text.
   * @group Props
   */
  toggleMask;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Specify automated assistance in filling out password by browser.
   * @group Props
   */
  autocomplete;
  /**
   * Advisory information to display on input.
   * @group Props
   */
  placeholder;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when clear button is clicked.
   * @group Emits
   */
  onClear = new EventEmitter();
  input;
  contentTemplate;
  footerTemplate;
  headerTemplate;
  clearIconTemplate;
  hideIconTemplate;
  showIconTemplate;
  templates;
  overlayVisible = false;
  meter;
  infoText;
  focused = false;
  unmasked = false;
  mediumCheckRegExp;
  strongCheckRegExp;
  resizeListener;
  scrollHandler;
  overlay;
  value = null;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  translationSubscription;
  constructor(document2, platformId, renderer, cd, config, el, overlayService) {
    this.document = document2;
    this.platformId = platformId;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.el = el;
    this.overlayService = overlayService;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        case "hideicon":
          this.hideIconTemplate = item.template;
          break;
        case "showicon":
          this.showIconTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  ngOnInit() {
    this.infoText = this.promptText();
    this.mediumCheckRegExp = new RegExp(this.mediumRegex);
    this.strongCheckRegExp = new RegExp(this.strongRegex);
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.updateUI(this.value || "");
    });
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.overlay = event.element;
        zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
        this.appendContainer();
        this.alignOverlay();
        this.bindScrollListener();
        this.bindResizeListener();
        break;
      case "void":
        this.unbindScrollListener();
        this.unbindResizeListener();
        this.overlay = null;
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        zindexutils.clear(event.element);
        break;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body")
        this.renderer.appendChild(this.document.body, this.overlay);
      else
        this.document.getElementById(this.appendTo).appendChild(this.overlay);
    }
  }
  alignOverlay() {
    if (this.appendTo) {
      this.overlay.style.minWidth = DomHandler.getOuterWidth(this.input.nativeElement) + "px";
      DomHandler.absolutePosition(this.overlay, this.input.nativeElement);
    } else {
      DomHandler.relativePosition(this.overlay, this.input.nativeElement);
    }
  }
  onInput(event) {
    this.value = event.target.value;
    this.onModelChange(this.value);
  }
  onInputFocus(event) {
    this.focused = true;
    if (this.feedback) {
      this.overlayVisible = true;
    }
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    if (this.feedback) {
      this.overlayVisible = false;
    }
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  onKeyUp(event) {
    if (this.feedback) {
      let value = event.target.value;
      this.updateUI(value);
      if (event.code === "Escape") {
        this.overlayVisible && (this.overlayVisible = false);
        return;
      }
      if (!this.overlayVisible) {
        this.overlayVisible = true;
      }
    }
  }
  updateUI(value) {
    let label = null;
    let meter = null;
    switch (this.testStrength(value)) {
      case 1:
        label = this.weakText();
        meter = {
          strength: "weak",
          width: "33.33%"
        };
        break;
      case 2:
        label = this.mediumText();
        meter = {
          strength: "medium",
          width: "66.66%"
        };
        break;
      case 3:
        label = this.strongText();
        meter = {
          strength: "strong",
          width: "100%"
        };
        break;
      default:
        label = this.promptText();
        meter = null;
        break;
    }
    this.meter = meter;
    this.infoText = label;
  }
  onMaskToggle() {
    this.unmasked = !this.unmasked;
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  testStrength(str) {
    let level = 0;
    if (this.strongCheckRegExp.test(str))
      level = 3;
    else if (this.mediumCheckRegExp.test(str))
      level = 2;
    else if (str.length)
      level = 1;
    return level;
  }
  writeValue(value) {
    if (value === void 0)
      this.value = null;
    else
      this.value = value;
    if (this.feedback)
      this.updateUI(this.value || "");
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  bindScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.input.nativeElement, () => {
          if (this.overlayVisible) {
            this.overlayVisible = false;
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        const window = this.document.defaultView;
        this.resizeListener = this.renderer.listen(window, "resize", () => {
          if (this.overlayVisible && !DomHandler.isTouchDevice()) {
            this.overlayVisible = false;
          }
        });
      }
    }
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  containerClass(toggleMask) {
    return {
      "p-password p-component p-inputwrapper": true,
      "p-input-icon-right": toggleMask
    };
  }
  inputFieldClass(disabled) {
    return {
      "p-password-input": true,
      "p-disabled": disabled
    };
  }
  strengthClass(meter) {
    return `p-password-strength ${meter ? meter.strength : ""}`;
  }
  filled() {
    return this.value != null && this.value.toString().length > 0;
  }
  promptText() {
    return this.promptLabel || this.getTranslation(TranslationKeys.PASSWORD_PROMPT);
  }
  weakText() {
    return this.weakLabel || this.getTranslation(TranslationKeys.WEAK);
  }
  mediumText() {
    return this.mediumLabel || this.getTranslation(TranslationKeys.MEDIUM);
  }
  strongText() {
    return this.strongLabel || this.getTranslation(TranslationKeys.STRONG);
  }
  restoreAppend() {
    if (this.overlay && this.appendTo) {
      if (this.appendTo === "body")
        this.renderer.removeChild(this.document.body, this.overlay);
      else
        this.document.getElementById(this.appendTo).removeChild(this.overlay);
    }
  }
  inputType(unmasked) {
    return unmasked ? "text" : "password";
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  clear() {
    this.value = null;
    this.onModelChange(this.value);
    this.writeValue(this.value);
    this.onClear.emit();
  }
  ngOnDestroy() {
    if (this.overlay) {
      zindexutils.clear(this.overlay);
      this.overlay = null;
    }
    this.restoreAppend();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }
  static ɵfac = function Password_Factory(t) {
    return new (t || _Password)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(OverlayService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Password,
    selectors: [["p-password"]],
    contentQueries: function Password_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Password_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
      }
    },
    hostAttrs: [1, "p-element", "p-inputwrapper"],
    hostVars: 8,
    hostBindings: function Password_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-inputwrapper-filled", ctx.filled())("p-inputwrapper-focus", ctx.focused)("p-password-clearable", ctx.showClear)("p-password-mask", ctx.toggleMask);
      }
    },
    inputs: {
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      label: "label",
      disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
      promptLabel: "promptLabel",
      mediumRegex: "mediumRegex",
      strongRegex: "strongRegex",
      weakLabel: "weakLabel",
      mediumLabel: "mediumLabel",
      maxLength: [InputFlags.HasDecoratorInputTransform, "maxLength", "maxLength", numberAttribute],
      strongLabel: "strongLabel",
      inputId: "inputId",
      feedback: [InputFlags.HasDecoratorInputTransform, "feedback", "feedback", booleanAttribute],
      appendTo: "appendTo",
      toggleMask: [InputFlags.HasDecoratorInputTransform, "toggleMask", "toggleMask", booleanAttribute],
      inputStyleClass: "inputStyleClass",
      styleClass: "styleClass",
      style: "style",
      inputStyle: "inputStyle",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autocomplete: "autocomplete",
      placeholder: "placeholder",
      showClear: [InputFlags.HasDecoratorInputTransform, "showClear", "showClear", booleanAttribute],
      autofocus: [InputFlags.HasDecoratorInputTransform, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClear: "onClear"
    },
    features: [ɵɵProvidersFeature([Password_VALUE_ACCESSOR]), ɵɵInputTransformsFeature],
    decls: 9,
    vars: 33,
    consts: [["input", ""], ["overlay", ""], ["content", ""], [3, "ngClass", "ngStyle"], ["pInputText", "", "pAutoFocus", "", 3, "input", "focus", "blur", "keyup", "ngClass", "ngStyle", "value", "autofocus"], [4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], [3, "styleClass", "click", 4, "ngIf"], [1, "p-password-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], [3, "click", "styleClass"], [3, "click", 4, "ngIf"], [3, "click"], [3, "click", "ngClass"], [4, "ngIf", "ngIfElse"], [1, "p-password-meter"], [1, "p-password-info"]],
    template: function Password_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 3);
        ɵɵpipe(1, "mapper");
        ɵɵelementStart(2, "input", 4, 0);
        ɵɵpipe(4, "mapper");
        ɵɵpipe(5, "mapper");
        ɵɵlistener("input", function Password_Template_input_input_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInput($event));
        })("focus", function Password_Template_input_focus_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputFocus($event));
        })("blur", function Password_Template_input_blur_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputBlur($event));
        })("keyup", function Password_Template_input_keyup_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyUp($event));
        });
        ɵɵelementEnd();
        ɵɵtemplate(6, Password_ng_container_6_Template, 4, 3, "ng-container", 5)(7, Password_ng_container_7_Template, 3, 2, "ng-container", 5)(8, Password_div_8_Template, 7, 12, "div", 6);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ɵɵpipeBind2(1, 24, ctx.toggleMask, ctx.containerClass))("ngStyle", ctx.style);
        ɵɵattribute("data-pc-name", "password")("data-pc-section", "root");
        ɵɵadvance(2);
        ɵɵclassMap(ctx.inputStyleClass);
        ɵɵproperty("ngClass", ɵɵpipeBind2(4, 27, ctx.disabled, ctx.inputFieldClass))("ngStyle", ctx.inputStyle)("value", ctx.value)("autofocus", ctx.autofocus);
        ɵɵattribute("label", ctx.label)("aria-label", ctx.ariaLabel)("aria-labelledBy", ctx.ariaLabelledBy)("id", ctx.inputId)("type", ɵɵpipeBind2(5, 30, ctx.unmasked, ctx.inputType))("placeholder", ctx.placeholder)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxLength)("data-pc-section", "input");
        ɵɵadvance(4);
        ɵɵproperty("ngIf", ctx.showClear && ctx.value != null);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.toggleMask);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.overlayVisible);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, InputText, AutoFocus, TimesIcon, EyeSlashIcon, EyeIcon, MapperPipe],
    styles: ["@layer primeng{.p-password{position:relative;display:inline-flex}.p-password-panel{position:absolute;top:0;left:0}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;width:0%;transition:width 1s ease-in-out}.p-fluid .p-password{display:flex}.p-password-input::-ms-reveal,.p-password-input::-ms-clear{display:none}.p-password-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-password .p-icon{cursor:pointer}.p-password-clearable.p-password-mask .p-password-clear-icon{margin-top:unset}.p-password-clearable{position:relative}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Password, [{
    type: Component,
    args: [{
      selector: "p-password",
      template: `
        <div [ngClass]="toggleMask | mapper : containerClass" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'password'" [attr.data-pc-section]="'root'">
            <input
                #input
                [attr.label]="label"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                [attr.id]="inputId"
                pInputText
                [ngClass]="disabled | mapper : inputFieldClass"
                [ngStyle]="inputStyle"
                [class]="inputStyleClass"
                [attr.type]="unmasked | mapper : inputType"
                [attr.placeholder]="placeholder"
                [attr.autocomplete]="autocomplete"
                [value]="value"
                (input)="onInput($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keyup)="onKeyUp($event)"
                [attr.maxlength]="maxLength"
                [attr.data-pc-section]="'input'"
                pAutoFocus
                [autofocus]="autofocus"
            />
            <ng-container *ngIf="showClear && value != null">
                <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-password-clear-icon'" (click)="clear()" [attr.data-pc-section]="'clearIcon'" />
                <span (click)="clear()" class="p-password-clear-icon" [attr.data-pc-section]="'clearIcon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <ng-container *ngIf="toggleMask">
                <ng-container *ngIf="unmasked">
                    <EyeSlashIcon *ngIf="!hideIconTemplate" (click)="onMaskToggle()" [attr.data-pc-section]="'hideIcon'" />
                    <span *ngIf="hideIconTemplate" (click)="onMaskToggle()">
                        <ng-template *ngTemplateOutlet="hideIconTemplate"></ng-template>
                    </span>
                </ng-container>
                <ng-container *ngIf="!unmasked">
                    <EyeIcon *ngIf="!showIconTemplate" (click)="onMaskToggle()" [attr.data-pc-section]="'showIcon'" />
                    <span *ngIf="showIconTemplate" (click)="onMaskToggle()">
                        <ng-template *ngTemplateOutlet="showIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </ng-container>

            <div
                #overlay
                *ngIf="overlayVisible"
                [ngClass]="'p-password-panel p-component'"
                (click)="onOverlayClick($event)"
                [@overlayAnimation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
                (@overlayAnimation.start)="onAnimationStart($event)"
                (@overlayAnimation.done)="onAnimationEnd($event)"
                [attr.data-pc-section]="'panel'"
            >
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                <ng-container *ngIf="contentTemplate; else content">
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </ng-container>
                <ng-template #content>
                    <div class="p-password-meter" [attr.data-pc-section]="'meter'">
                        <div [ngClass]="meter | mapper : strengthClass" [ngStyle]="{ width: meter ? meter.width : '' }" [attr.data-pc-section]="'meterLabel'"></div>
                    </div>
                    <div class="p-password-info" [attr.data-pc-section]="'info'">{{ infoText }}</div>
                </ng-template>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      host: {
        class: "p-element p-inputwrapper",
        "[class.p-inputwrapper-filled]": "filled()",
        "[class.p-inputwrapper-focus]": "focused",
        "[class.p-password-clearable]": "showClear",
        "[class.p-password-mask]": "toggleMask"
      },
      providers: [Password_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: ["@layer primeng{.p-password{position:relative;display:inline-flex}.p-password-panel{position:absolute;top:0;left:0}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;width:0%;transition:width 1s ease-in-out}.p-fluid .p-password{display:flex}.p-password-input::-ms-reveal,.p-password-input::-ms-clear{display:none}.p-password-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-password .p-icon{cursor:pointer}.p-password-clearable.p-password-mask .p-password-clear-icon{margin-top:unset}.p-password-clearable{position:relative}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }, {
    type: ElementRef
  }, {
    type: OverlayService
  }], {
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    promptLabel: [{
      type: Input
    }],
    mediumRegex: [{
      type: Input
    }],
    strongRegex: [{
      type: Input
    }],
    weakLabel: [{
      type: Input
    }],
    mediumLabel: [{
      type: Input
    }],
    maxLength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strongLabel: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    feedback: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    toggleMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    inputStyleClass: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autocomplete: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var PasswordModule = class _PasswordModule {
  static ɵfac = function PasswordModule_Factory(t) {
    return new (t || _PasswordModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PasswordModule,
    declarations: [PasswordDirective, Password, MapperPipe],
    imports: [CommonModule, InputTextModule, AutoFocusModule, TimesIcon, EyeSlashIcon, EyeIcon],
    exports: [PasswordDirective, Password, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, InputTextModule, AutoFocusModule, TimesIcon, EyeSlashIcon, EyeIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, InputTextModule, AutoFocusModule, TimesIcon, EyeSlashIcon, EyeIcon],
      exports: [PasswordDirective, Password, SharedModule],
      declarations: [PasswordDirective, Password, MapperPipe]
    }]
  }], null, null);
})();
export {
  MapperPipe,
  Password,
  PasswordDirective,
  PasswordModule,
  Password_VALUE_ACCESSOR
};
//# sourceMappingURL=primeng_password.js.map