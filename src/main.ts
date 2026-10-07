import './style.css'

// Bootstrap JS se carga por CDN en index.html y expone `bootstrap` como global
declare const bootstrap: {
    Collapse: { getOrCreateInstance(elemento: Element): { hide(): void } }
}

const raiz = document.documentElement

// =====================================================================
// TEMA CLARO / OSCURO (el tema inicial lo aplica el script de <head>)
// =====================================================================
const btnTema = document.querySelector<HTMLButtonElement>('#btn-tema')!

function pintarTema(): void {
    const oscuro = raiz.getAttribute('data-bs-theme') === 'dark'
    btnTema.setAttribute('aria-pressed', String(oscuro))
}

btnTema.addEventListener('click', () => {
    const nuevo = raiz.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'
    raiz.setAttribute('data-bs-theme', nuevo)
    try { localStorage.setItem('foe-tema', nuevo) } catch { /* modo privado o sin permisos */ }
    pintarTema()
})
pintarTema()

// =====================================================================
// MENU MOVIL: se cierra al elegir una opcion
// =====================================================================
const menu = document.querySelector<HTMLElement>('#menu')!
menu.querySelectorAll<HTMLAnchorElement>('a.nav-link, a.btn').forEach((enlace) => {
    enlace.addEventListener('click', () => {
        if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide()
    })
})

// =====================================================================
// FORMULARIO: validacion de Bootstrap y envio por mailto
// =====================================================================
const form = document.querySelector<HTMLFormElement>('#form-contacto')!

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    if (!form.checkValidity()) {
        evento.stopPropagation()
        form.classList.add('was-validated')
        return
    }
    const campo = (id: string) =>
        document.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`#${id}`)!.value.trim()

    const cuerpo = `Nombre: ${campo('nombre')}\nCorreo: ${campo('correo')}\n\n${campo('mensaje')}`
    const asunto = `Consulta SYS FOE: ${campo('asunto')}`
    window.location.href =
        `mailto:fbarahona280@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
    form.classList.remove('was-validated')
    form.reset()
})

// =====================================================================
// PIE Y BOTON DE VOLVER ARRIBA
// =====================================================================
document.querySelector<HTMLSpanElement>('#anio')!.textContent = String(new Date().getFullYear())

const arriba = document.querySelector<HTMLButtonElement>('#volver-arriba')!
window.addEventListener('scroll', () => {
    arriba.classList.toggle('d-none', window.scrollY <= 400)
}, { passive: true })
arriba.addEventListener('click', () => window.scrollTo({ top: 0 }))
