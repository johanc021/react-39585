import React from 'react';
import { Avatar, Dropdown} from 'flowbite-react';
import Logo from '../../assets/img/avatar/avatar.svg'

const UserWidget = () => {
	return (
		<Dropdown
			arrowIcon={false}
			inline={true}
			label={<Avatar alt="User settings" img={Logo} rounded={true} />}
		>
			<Dropdown.Header>
				<span className="block text-sm">
					Margaret Brent
				</span>
				<span className="block truncate text-sm font-medium">
					admin@admin.com
				</span>
			</Dropdown.Header>
			<Dropdown.Item>
				Dashboard
			</Dropdown.Item>
			<Dropdown.Item>
				Configuraciones
			</Dropdown.Item>
			<Dropdown.Item>
				Ventas
			</Dropdown.Item>
			<Dropdown.Divider />
			<Dropdown.Item>
				Cerrar Sesión
			</Dropdown.Item>
		</Dropdown>
	);
};

export default UserWidget;
