import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('render sidebar', () => {
        renderWithTranslation(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle sidebar', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');

        fireEvent.click(toggleBtn);

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
