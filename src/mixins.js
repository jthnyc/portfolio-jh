import { css } from 'styled-components';

export default const BtnBorderDrawing = ({ color, hover, width, vertical, horizontal, duration }) => css`
    box-shadow: inset 0 0 0 ${width} ${color};
    color: ${color};
    transition: color ${duration} ${duration}/3;
    position: relative;

    &::before,
    &::after {
        border: 0 solid transparent;
        box-sizing: border-box;
        content: '';
        pointer-events: none;
        position: absolute;
        width: 0; height: 0;
    
        #{${vertical}}: 0; 
        #{${horizontal}}: 0;
    }

    &::before {
        $h-side: if(${horizontal} == 'left', 'right', 'left');
        border-#{$vertical}-width: ${width};
        border-#{$h-side}-width: ${width};
    }

    &::after {
        $v-side: if(${vertical} == 'top', 'bottom', 'top');
        border-#{$v-side}-width: ${width};
        border-#{$horizontal}-width: ${width};
    }

    &:hover {
        color: ${hover};
        
        &::before,
        &::after {
            border-color: ${hover};
            transition: border-color 0s, width ${duration}, height ${duration};
            width: 100%;
            height: 100%;
    }
    
    &::before { transition-delay: 0s, 0s, ${duration}; }
    
    &::after { transition-delay: 0s, ${duration}, 0s; }
    }
`;