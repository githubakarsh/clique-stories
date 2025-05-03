import React, { Children, isValidElement } from 'react';
import Button from '../button/Button';
import cn from 'classnames';

export const ButtonGroup = ({ children, className, variant, size, ...props }) => {
    const validChildren = Children.toArray(children).filter(child =>
        isValidElement(child) && child.type === Button
    );

    const buttonCount = validChildren.length;

    const modifiedChildren = validChildren.map((child, index) => {
        const isFirst = index === 0;
        const isLast = index === buttonCount - 1;

        // Combine class names, giving precedence to the child's original classes
        const baseClasses = "rounded-none";
        const firstClasses = isFirst ? "rounded-l-md" : "";
        const lastClasses = isLast ? "rounded-r-md" : "";

        const extraProps = {
            variant: child.props.variant || variant, // Inherit variant if not specified
            size: child.props.size || size,       // Inherit size if not specified
        };

        const combinedClasses = cn(
            baseClasses,
            firstClasses,
            lastClasses,
            child.props.className // Keep original classes
        );

        return React.cloneElement(child, {
            className: combinedClasses,
            ...extraProps, // Spread inherited variant and size
        });
    });

    return (
        <div
            className={cn("inline-flex", className)}
            role="group"
            {...props}
        >
            {modifiedChildren}
        </div>
    );
};

