export const handlePopupMenu = () => {
    // sidebar
    const sidebar = document.querySelector('.sidebar')
    const tasksBtn = document.getElementById('btn-sidebar-tasks')
    const sidebarBodyCloseBtn = document.getElementById('sidebar-body-close')

    tasksBtn.addEventListener('click', () => {
        tasksBtn.classList.add('active')
        sidebar.classList.add('active')
    })

    sidebarBodyCloseBtn.addEventListener('click', () => {
        sidebar.classList.remove('active')
        tasksBtn.classList.remove('active')
    })

    // dropdowns
    const dropdownBtns = document.querySelectorAll('.dropdown__btn')

    dropdownBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            closePopups()
            let dropdown = btn.closest('.dropdown')

            dropdown.classList.add('active')
            btn.classList.add('active')
        })
    })

    // close all popups and remove btns active class
    const closePopups = () => {
        document
            .querySelectorAll(
                '.dropdown, .dropdown__btn, .sidebar, #btn-sidebar-tasks',
            )
            .forEach((el) => el.classList.remove('active'))
    }

    // close popups when clicking outside
    window.addEventListener('click', ({ target }) => {
        if (!target.closest('.dropdown') && !target.closest('.sidebar')) {
            closePopups()
        }
    })
}

export const handleModalWindows = () => {
    // modal WidgetRemove
    const modalWidgetRemove = document.querySelector('.modal--widget-remove')
    const modalWidgetOpenBtns = document.querySelectorAll('.btn--modal-help')
    const modalWidgetCloseBtn = document.querySelector(
        '#modal-widget-remove-close-btn',
    )

    modalWidgetOpenBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            modalWidgetRemove.style.display = 'flex'
        })
    })

    modalWidgetCloseBtn.addEventListener('click', () => {
        modalWidgetRemove.style.display = 'none'
    })

    // modal help
    const modalHelp = document.querySelector('.modal--help')
    const modalHelpOpenBtn = document.querySelector('#modal-help-open-btn')
    const modalHelpCloseBtn = document.querySelector('#modal-help-close-btn')

    modalHelpOpenBtn.addEventListener('click', () => {
        modalHelp.style.display = 'flex'
    })

    modalHelpCloseBtn.addEventListener('click', () => {
        modalHelp.style.display = 'none'
    })

    window.addEventListener('click', ({ target }) => {
        if (target === modalWidgetRemove) {
            modalWidgetRemove.style.display = 'none'
        } else if (target === modalHelp) {
            modalHelp.style.display = 'none'
        }
    })
}
