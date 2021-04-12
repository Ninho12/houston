"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var palette_1 = tslib_1.__importDefault(require("./palette"));
var variables_1 = tslib_1.__importDefault(require("./variables"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function overrides(pallet) {
    return {
        MuiButton: {
            root: {
                textTransform: 'none',
                padding: '10px 16px',
                height: 40,
                borderRadius: variables_1.default.radius(),
                fontWeight: variables_1.default.fontWeight('semibold'),
                '&:before': {
                    content: '" "',
                    position: 'absolute',
                    left: -4,
                    right: -4,
                    top: -4,
                    bottom: -4,
                    border: '2px solid transparent',
                    transition: '0.3s',
                    borderRadius: variables_1.default.radius(2)
                },
                '&:focus:not(:active):not(:hover):before': {
                    borderColor: variables_1.default.colors.focusLine
                }
            },
            label: {
                fontFamily: variables_1.default.fontFamily,
                lineHeight: variables_1.default.lineHeight('compact'),
                fontSize: variables_1.default.textSize('small')
            },
            sizeSmall: {
                height: 30
            },
            sizeLarge: {
                height: 50
            },
            startIcon: {
                marginRight: 8
            },
            containedPrimary: {
                '&:hover': {
                    backgroundColor: pallet.primary.light
                },
                '&:active': {
                    backgroundColor: pallet.primary.dark
                },
                '&$disabled': {
                    color: pallet.grey[500],
                    backgroundColor: pallet.grey[300]
                }
            },
            outlinedPrimary: {
                borderColor: pallet.primary.lighter,
                '&:before': {
                    left: -5,
                    right: -5,
                    top: -5,
                    bottom: -5
                },
                '&:hover': {
                    backgroundColor: 'transparent'
                },
                '&:active': {
                    borderColor: pallet.primary.dark,
                    color: pallet.primary.dark
                },
                '&$disabled': {
                    color: pallet.grey[300],
                    borderColor: pallet.grey[300]
                }
            },
            text: {
                '&$disabled': {
                    color: pallet.grey[300]
                }
            }
        },
        MuiInputBase: {
            root: {
                fontFamily: variables_1.default.fontFamily,
                '&$disabled': {
                    backgroundColor: pallet.grey['100']
                }
            }
        },
        MuiSelect: {
            select: {
                '&:focus': {
                    backgroundColor: 'transparent'
                }
            },
            selectMenu: {
                height: 45
            },
            iconOutlined: {
                right: 4
            },
            icon: {
                top: 'calc(50% - 14px)'
            }
        },
        MuiOutlinedInput: {
            input: {
                height: 45,
                boxSizing: 'border-box',
                fontSize: variables_1.default.textSize(),
                padding: variables_1.default.spacing(3) + "px " + variables_1.default.spacing(4) + "px"
            },
            inputMultiline: {
                minHeight: 96
            }
        },
        MuiFormHelperText: {
            root: {
                fontFamily: variables_1.default.fontFamily,
                fontSize: variables_1.default.textSize('x-small')
            },
            contained: {
                marginLeft: 2,
                marginRight: 0
            }
        },
        MuiFormControlLabel: {
            root: {
                color: variables_1.default.palette.grey[500],
                fontFamily: variables_1.default.fontFamily
            }
        },
        MuiFormControl: {
            marginNormal: {
                marginTop: variables_1.default.spacing(1),
                marginBottom: variables_1.default.spacing(3)
            }
        },
        MuiFormLabel: {
            root: {
                color: variables_1.default.palette.grey[500],
                fontFamily: variables_1.default.fontFamily
            }
        },
        MuiInputLabel: {
            root: {
                fontFamily: variables_1.default.fontFamily,
                fontSize: variables_1.default.textSize() + 1
            },
            outlined: {
                transform: "translate(" + variables_1.default.spacing(4) + "px, " + (variables_1.default.spacing(4) - 2) + "px) scale(1)"
            },
            shrink: {
                transform: "translate(" + variables_1.default.spacing(4) + "px, -6px) scale(0.70) !important"
            }
        },
        MuiAlertTitle: {
            root: {
                fontWeight: variables_1.default.fontWeight('semibold')
            }
        },
        MuiAlert: {
            root: {
                borderRadius: 4
            },
            icon: {
                alignItems: 'center'
            },
            action: {
                marginRight: 0
            },
            message: {
                fontWeight: variables_1.default.fontWeight('regular')
            },
            standardSuccess: {
                backgroundColor: variables_1.default.palette.success['light']
            },
            standardError: {
                backgroundColor: variables_1.default.palette.error['light']
            },
            standardInfo: {
                backgroundColor: variables_1.default.palette.info['light']
            },
            standardWarning: {
                backgroundColor: variables_1.default.palette.warning['light']
            }
        },
        MuiTableRow: {
            root: {
                '&$selected': {
                    background: 'rgba(177, 177, 177, 0.08)'
                },
                '&$hover': {
                    '&:hover': {
                        background: variables_1.default.palette.grey[100]
                    }
                }
            }
        },
        MuiTableCell: {
            root: {
                padding: '12px 20px',
                borderColor: variables_1.default.palette.grey[200],
                color: variables_1.default.palette.grey[600]
            },
            head: {
                fontWeight: variables_1.default.fontWeight('semibold'),
                color: variables_1.default.palette.grey[600],
                lineHeight: variables_1.default.lineHeight('compact')
            },
            body: {
                color: variables_1.default.palette.grey[600]
            },
            sizeSmall: {
                fontSize: variables_1.default.textSize('small'),
                padding: '8px 12px'
            }
        },
        MuiTableSortLabel: {
            root: {
                color: variables_1.default.palette.grey[600],
                '&:focus': {
                    color: 'inherit'
                },
                '&$active': {
                    color: variables_1.default.palette.grey[600],
                    '&$root': {
                        '&$active': {
                            '& $icon': {
                                color: variables_1.default.palette.grey[600]
                            }
                        }
                    }
                }
            }
        },
        MuiMenuItem: {
            root: {
                fontSize: variables_1.default.textSize('normal'),
                fontWeight: variables_1.default.fontWeight('regular')
            }
        },
        MuiPaginationItem: {
            root: {
                margin: '0 2px',
                minWidth: 30,
                padding: '0 4px',
                fontWeight: variables_1.default.fontWeight('regular')
            }
        },
        MuiPagination: {
            ul: {
                '& li': {
                    '&:first-child, &:last-child': {
                        border: "1px solid " + palette_1.default.grey[300],
                        borderRadius: 4
                    },
                    '&:first-child': {
                        marginRight: 8
                    },
                    '&:last-child': {
                        marginLeft: 8
                    }
                }
            }
        },
        MuiIconButton: {
            colorPrimary: {
                '&:hover, &:focus': {
                    backgroundColor: "" + palette_1.default.grey[200]
                },
                '&:active': {
                    backgroundColor: "" + palette_1.default.grey[300]
                }
            }
        },
        MuiTabs: {
            root: {
                height: 40,
                minHeight: 40,
                borderBottom: "1px solid " + palette_1.default.grey[200]
            },
            scrollButtons: {}
        },
        MuiTabScrollButton: {
            root: {
                color: palette_1.default.primary['main'],
                opacity: 1,
                '&$disabled': {
                    opacity: 1,
                    color: palette_1.default.grey[300]
                }
            }
        },
        MuiTab: {
            root: {
                height: 40,
                minHeight: 40,
                minWidth: '0 !important',
                lineHeight: variables_1.default.lineHeight('normal'),
                fontSize: variables_1.default.textSize('small'),
                fontWeight: variables_1.default.fontWeight('semibold'),
                textTransform: 'none',
                padding: "0px " + variables_1.default.spacing(4) + "px"
            },
            labelIcon: {
                minHeight: 40,
                paddingTop: 0
            },
            wrapper: {
                flexDirection: 'row',
                '& > *:first-child': {
                    marginBottom: '0 !important',
                    maxWidth: 20,
                    maxHeight: 20,
                    marginRight: variables_1.default.spacing(2)
                }
            },
            textColorPrimary: {
                color: palette_1.default.grey[400],
                transition: '0.3s',
                border: '2px solid transparent',
                borderBottom: 'none',
                borderRadius: variables_1.default.radius(1) + "px " + variables_1.default.radius(1) + "px 0 0",
                '& svg': {
                    fill: palette_1.default.grey[500],
                    transition: '0.3s'
                },
                '&:focus': {
                    borderColor: palette_1.default.grey[300]
                },
                '&:hover:not($selected):not(:active)': {
                    color: palette_1.default.primary['light'],
                    '& svg': {
                        fill: palette_1.default.primary['light']
                    }
                },
                '&:active': {
                    color: palette_1.default.primary['dark'],
                    '& svg': {
                        fill: palette_1.default.primary['dark']
                    }
                },
                '&$selected': {
                    color: palette_1.default.primary['main'],
                    '& svg': {
                        fill: palette_1.default.primary['main']
                    }
                },
                '&$disabled': {
                    color: palette_1.default.grey[300],
                    '& svg': {
                        fill: palette_1.default.grey[300]
                    }
                }
            }
        },
        MuiTooltip: {
            tooltip: {
                fontSize: variables_1.default.textSize('x-small'),
                backgroundColor: palette_1.default.grey[600],
                fontWeight: variables_1.default.fontWeight('semibold'),
                letterSpacing: 0
            },
            arrow: {
                color: palette_1.default.grey[600]
            }
        }
    };
}
exports.default = overrides;
