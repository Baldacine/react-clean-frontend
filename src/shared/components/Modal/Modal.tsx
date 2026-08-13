import React, { useEffect, useId, useRef } from "react";
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
} from "./styles";
import type { ModalProps } from "./types";

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  closeLabel = "Close dialog",
  title,
  children,
  footer,
  width,
  height,
  maxWidth,
  maxHeight,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocusedElement?.focus();
    };
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements.item(0);
    const lastElement = focusableElements.item(focusableElements.length - 1);

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement?.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement?.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-label={title ? undefined : closeLabel}
        onKeyDown={handleKeyDown}
        onClick={(e) => e.stopPropagation()}
        $width={width}
        $height={height}
        $maxWidth={maxWidth}
        $maxHeight={maxHeight}
      >
        <ModalHeader>
          <h2 id={titleId}>{title}</h2>
          <CloseButton
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
          >
            &times;
          </CloseButton>
        </ModalHeader>

        <ModalBody>{children}</ModalBody>

        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContainer>
    </Overlay>
  );
};
