import React from 'react';
import { Avatar, Dropdown, Navbar} from 'flowbite-react';

const UserWidget = () => {
	return (
		<Dropdown
						arrowIcon={false}
						inline={true}
						label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
					>
						<Dropdown.Header>
							<span className="block text-sm">
								John Doe
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
