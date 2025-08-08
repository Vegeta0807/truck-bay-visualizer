interface CarIndicatorProps {
  status: 'available' | 'occupied' | 'warning' | 'neutral' | 'inactive';
  size: 'large' | 'medium' | 'small';
  className?: string;
}

export const CarIndicator = ({ status, size, className = "" }: CarIndicatorProps) => {
  const getStatusClass = () => {
    switch (status) {
      case 'available':
        return 'car-status-available';
      case 'occupied':
        return 'car-status-occupied';
      case 'warning':
        return 'car-status-warning';
      case 'neutral':
        return 'car-status-neutral';
      case 'inactive':
        return 'car-status-inactive';
      default:
        return 'car-status-neutral';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'large':
        return 'car-indicator-large';
      case 'medium':
        return 'car-indicator-medium';
      case 'small':
        return 'car-indicator-small';
      default:
        return 'car-indicator-medium';
    }
  };

  // Render different types based on size for better performance and visibility
  const renderCarIndicator = () => {
    const baseClasses = `car-indicator ${getSizeClass()} ${getStatusClass()} ${className}`;

    if (size === 'small') {
      // Simple colored box for very small sizes (tablets) - uses status colors
      return (
        <div
          className={`${baseClasses} car-indicator-box`}
          style={{
            borderRadius: '2px',
          }}
        />
      );
    }

    if (size === 'medium') {
      // Medium detail car shape - using custom car SVG
      return (
        <svg
          viewBox="0 0 30 51"
          className={baseClasses}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2793 0H19.903L22.493 0.622865L25.4057 3.195L26.1316 10.06L26.6514 19.1521L29.3625 19.7749L29.4118 20.5322L26.7007 20.6667L27.2205 44.3989L26.5976 47.6969L24.7291 49.8344L22.6409 50.5424L15.05 50.7082V50.7261L14.9469 50.7082L14.8439 50.7261V50.7082L7.25296 50.5424L5.16481 49.8344L3.29622 47.6969L2.67335 44.3989L3.19316 20.6667L0.5 20.5322L0.549292 19.7749L3.24245 19.1521L3.76225 10.06L4.48817 3.195L7.4009 0.622865L9.9954 0H14.2793ZM13.8267 45.2091H18.9082L22.0225 44.4025L22.3407 42.8879L21.7178 37.6362H19.428L15.8925 37.9902L14.9514 37.9409L14.0104 37.9902L10.4749 37.6362H8.18509L7.56222 42.8879L7.88037 44.4025L10.9946 45.2091H13.8267ZM13.9253 21.6432V21.5939L14.9514 21.6119L15.9776 21.5939V21.6432L18.6035 21.6925L20.9919 22.2123L22.4393 21.9435L23.0621 19.0128L24.2048 15.7148V14.1151L21.8164 13.3892L15.7894 13.304L15.3503 13.3354V13.3892L14.947 13.3712L14.5437 13.3892V13.3354L14.1046 13.304L8.07756 13.3892L5.6892 14.1151V15.7148L6.83186 19.0128L7.45473 21.9435L8.91998 22.2123L11.3083 21.6925L13.9253 21.6432Z"
          />
        </svg>
      );
    }

    // Large size - detailed car SVG using custom car design
    return (
      <svg
        viewBox="0 0 30 51"
        className={baseClasses}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.2793 0H19.903L22.493 0.622865L25.4057 3.195L26.1316 10.06L26.6514 19.1521L29.3625 19.7749L29.4118 20.5322L26.7007 20.6667L27.2205 44.3989L26.5976 47.6969L24.7291 49.8344L22.6409 50.5424L15.05 50.7082V50.7261L14.9469 50.7082L14.8439 50.7261V50.7082L7.25296 50.5424L5.16481 49.8344L3.29622 47.6969L2.67335 44.3989L3.19316 20.6667L0.5 20.5322L0.549292 19.7749L3.24245 19.1521L3.76225 10.06L4.48817 3.195L7.4009 0.622865L9.9954 0H14.2793ZM13.8267 45.2091H18.9082L22.0225 44.4025L22.3407 42.8879L21.7178 37.6362H19.428L15.8925 37.9902L14.9514 37.9409L14.0104 37.9902L10.4749 37.6362H8.18509L7.56222 42.8879L7.88037 44.4025L10.9946 45.2091H13.8267ZM13.9253 21.6432V21.5939L14.9514 21.6119L15.9776 21.5939V21.6432L18.6035 21.6925L20.9919 22.2123L22.4393 21.9435L23.0621 19.0128L24.2048 15.7148V14.1151L21.8164 13.3892L15.7894 13.304L15.3503 13.3354V13.3892L14.947 13.3712L14.5437 13.3892V13.3354L14.1046 13.304L8.07756 13.3892L5.6892 14.1151V15.7148L6.83186 19.0128L7.45473 21.9435L8.91998 22.2123L11.3083 21.6925L13.9253 21.6432Z"
        />
      </svg>
    );
  };

  return renderCarIndicator();
};