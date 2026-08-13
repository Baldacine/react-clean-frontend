import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import {
  DropdownContainer,
  DropdownTrigger,
  MenuList,
  MenuItem,
} from "./styles";
import type { DropdownProps } from "./types";

export function Dropdown({ trigger, label, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <DropdownContainer ref={containerRef} onKeyDown={handleKeyDown}>
      <DropdownTrigger
        type="button"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        {trigger}
      </DropdownTrigger>

      {isOpen && (
        <MenuList role="menu">
          {items.map((item) => (
            <li key={item.key}>
              <MenuItem
                type="button"
                role="menuitem"
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
              >
                {item.icon}
                {item.label}
              </MenuItem>
            </li>
          ))}
        </MenuList>
      )}
    </DropdownContainer>
  );
}
