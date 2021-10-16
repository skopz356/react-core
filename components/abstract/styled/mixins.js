import {css} from 'styled-components/native'

import {ifValue} from '../../../utils'

export const basicMixin = ({
	align,
	justify,
	bgColor,
	margin,
	marginX,
	marginY,
	marginTop,
	marginBottom,
	marginLeft,
	marginRight,
	padding,
	paddingX,
	paddingY,
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight
}) => css`
  align-items: ${ifValue(align, 'center')};
  justify-content: ${ifValue(justify, 'center')};
  ${bgColor &&
  css`
    background-color: ${bgColor};
  `
}
  ${margin &&
  css`
    margin: ${margin};
  `
}
  ${marginX &&
  css`
    margin-right: ${marginX};
    margin-left: ${marginX};
  `
}
  ${marginY &&
  css`
    margin-top: ${marginY};
    margin-bottom: ${marginY};
  `
}
  ${marginTop &&
  css`
    margin-top: ${marginTop};
  `
}
  ${marginBottom &&
  css`
    margin-bottom: ${marginBottom};
  `
}
  ${marginLeft &&
  css`
    margin-left: ${marginLeft};
  `
}

  ${marginRight &&
  css`
    margin-right: ${marginRight};
  `
}

  ${padding &&
  css`
    padding: ${padding};
  `
}
  ${paddingX &&
  css`
    padding-right: ${paddingX};
    padding-left: ${paddingX};
  `
}
  ${paddingY &&
  css`
    padding-top: ${paddingY};
    padding-bottom: ${paddingY};
  `
}
  ${paddingTop &&
  css`
    padding-top: ${paddingTop};
  `
}
  ${marginBottom &&
  css`
    padding-bottom: ${paddingBottom};
  `
}
  ${paddingLeft &&
  css`
    padding-left: ${paddingLeft};
  `
}

  ${paddingRight &&
  css`
    padding-right: ${paddingRight};
  `
}


`
