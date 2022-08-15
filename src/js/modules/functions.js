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

    // modal calendar
    const modalCalendar = document.querySelector('.modal--calendar')
    const modalCalendarOpenBtn = document.querySelectorAll(
        '.modal-calendar-open-btn',
    )
    const modalCalendarCloseBtn = document.querySelector(
        '#modal-calendar-close-btn',
    )

    modalCalendarOpenBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            modalCalendar.style.display = 'flex'
        })
    })

    modalCalendarCloseBtn.addEventListener('click', () => {
        modalCalendar.style.display = 'none'
    })

    window.addEventListener('click', ({ target }) => {
        if (target === modalWidgetRemove) {
            modalWidgetRemove.style.display = 'none'
        } else if (target === modalHelp) {
            modalHelp.style.display = 'none'
        } else if (target === modalCalendar) {
            modalCalendar.style.display = 'none'
        }
    })
}

export const openModalTabs = () => {
    const modalTabsBtns = document.querySelectorAll('.btn--tab')
    const modalTabContentBlocks = document.querySelectorAll('.calendar__body')

    modalTabsBtns.forEach((btn) => {
        if (btn.classList.contains('active')) {
            const modalTabContentId = btn.getAttribute('data-tab-content')
            document
                .getElementById(`${modalTabContentId}`)
                .classList.add('active')
        }
        btn.addEventListener('click', () => {
            modalTabsBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            modalTabContentBlocks.forEach((contentBlock) =>
                contentBlock.classList.remove('active'),
            )

            btn.classList.add('active')
            const modalTabContentId = btn.getAttribute('data-tab-content')
            document
                .getElementById(`${modalTabContentId}`)
                .classList.add('active')
        })
    })
}
