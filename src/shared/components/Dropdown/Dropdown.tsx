import { useState, useRef, useEffect } from "react";
import { DropdownContainer, MenuList, MenuItem } from "./styles";
import type { DropdownProps } from "./types";

export function Dropdown({ trigger, items }: DropdownProps) {
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

  return (
    <DropdownContainer ref={containerRef}>
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
        {trigger}
      </div>

      {isOpen && (
        <MenuList>
          {items.map((item) => (
            <MenuItem
              key={item.key}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
            >
              {item.icon}
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </DropdownContainer>
  );
}
