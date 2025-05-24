import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EventBusService } from '../../shared/events/EventBus.service';

@Component({
    selector: 'legal-view',
    templateUrl: './legal.html',
    styleUrls: ['./legal.scss'],
    encapsulation: ViewEncapsulation.None
})

export class LegalViewComponent implements OnInit {

    appName: string | null = null;
    typeDoc: string | null = null;
    valid = true;

    languages = [{ id: 'es', label: 'Español' }];
    mainContent: any = {
        simexam: {
            terms: {
                header: { title: 'TERMINOS Y CONDICIONES DE USO', app: 'simexam' },
                sections: [
                    {
                        content: [
                            { text: `Fecha de última actualización: 20 de marzo de 2025` },
                        ]
                    },
                    {
                        title: '1. Bienvenido',
                        content: [
                            { text: `Esta aplicación ha sido desarrollada por <b>SERGAL</b> con el fin de presentar una simulación de examen para cada usuario` },
                            { text: `Es importante que utilices la Aplicación de forma responsable y de acuerdo a los presentes Términos de Uso. También es muy importante que sepas que el uso de la Aplicación implica ciertos riesgos y que <b>SERGAL</b> no asume ninguna responsabilidad por las acciones de los usuarios. La responsabilidad de <b>SERGAL</b> se limita a poner a disposición y mantener en funcionamiento la Aplicación para que sea accedida y utilizada por los usuarios bajo su propio riesgo, de conformidad con los presentes Términos de Uso.` },
                            { text: ` Al utilizar la Aplicación, el usuario acepta cumplir con estos Términos y Condiciones de Uso. Si no estás de acuerdo (o no puedes cumplir) con estos Términos de Uso no podrás usar la Aplicación. El acceso y/o utilización de la Aplicación implica que has leído, entendido y aceptado, sin reservas de ninguna clase, todas y cada una de las siguientes condiciones.` }
                        ]
                    },
                    {
                        title: '2. Uso de la Aplicación',
                        content: [
                            {
                                list: [
                                    {
                                        text: `El acceso a la Aplicación está habilitado para todos los usuarios, ya que no requiere login`
                                    },
                                    {
                                        text: `El uso de la Aplicación no otorga al Usuarios ningún derecho sobre la propiedad
                  intelectual asociada a la misma.` },
                                    {
                                        text: `Queda estrictamente prohibido:`,
                                        list: [
                                            `Interferir en el funcionamiento de la Aplicación.`,
                                            `Acceder a los servicios mediante medios automatizados no autorizados.`,
                                            `Alterar archivos, códigos o configuraciones de la herramienta.`,
                                        ]
                                    },
                                    {
                                        text: `El Usuario es responsable por la veracidad de los datos ingresados y por el uso diligente de su cuenta. El mal uso de la Aplicación podrá dar lugar a la suspensión del acceso.`
                                    },
                                    {
                                        text: `No hagas un uso incorrecto de los Servicios: `,
                                        list: [
                                            `No realizar un enlace profundo al sitio por cualquier motivo, a menos que te autoricemos a hacerlo.`,
                                            `indagar, escanear o testear la vulnerabilidad de cualquier sistema o red, ni violar o eludir cualquier seguridad o medida de autenticación.`,
                                            `falsificar ninguna cabecera TCP/IP ni ninguna parte de la información de la cabecera en ningún correo electrónico o publicación, o de cualquier manera usar los Servicios para enviar información de identificación de la fuente alterada, engañosa o falsa`,
                                            `No interferir, interrumpir, (o intentar hacerlo), el acceso de cualquier usuario, host o red, incluso enviar virus, sobrecargar, inundar, espamear o bombardear a la Aplicación con mensajes.`,
                                            `No puedes reproducir una porción de la base de datos ni crear cuadros o informes relacionados con la porción de la base de datos.`
                                        ]
                                    }
                                ], type: 'alpha'
                            },
                        ]
                    },
                    {
                        title: '3. Funcionalidades',
                        content: [
                            { text: `La Aplicación permite a los Usuarios:` },
                            {
                                list: [
                                    { text: `Crear plantilas de examenes.` },
                                    { text: `Crear simulaciones basadas en las plantillas.` },
                                    { text: `Eliminar, editar plantilals de examenes asi como sus simulaciones.` },
                                    { text: `Crear plantillas de examens mediante el uso de IA` },
                                    { text: `Mostrar estadisticas de las simulaciones de cada examen` },
                                ], class: 'list-default'
                            },
                            { text: ` La Aplicación NO realiza:` },
                            {
                                list: [
                                    { text: `Capturas de pantalla.` },
                                    { text: `Grabación de actividad o productividad.` },
                                    { text: `Seguimiento de ubicación GPS.` },
                                    { text: `Análisis de uso de aplicaciones.` },
                                ], class: 'list-default'
                            },
                        ]
                    },
                    {
                        title: '4. Datos Recopilados',
                        content: [
                            { text: `La Aplicación recoge los siguientes datos personales:` },
                            {
                                list: [
                                    { text: `Nombre y correo de Usuarios.` },
                                    { text: `Dirección IP y datos del dispositivo.` },
                                    { text: `País desde donde se accede` },
                                ], class: 'list-default'
                            },
                            {
                                text: `Los datos se almacenan en la plataforma Firebase de Google, conforme a altos estándares de seguridad. Se conservarán durante el tiempo necesario para cumplir con obligaciones legales.`
                            }
                        ]
                    },
                    {
                        title: '5. Privacidad y Seguridad',
                        content: [
                            { text: `Conforme a lo establecido en la Política de Privacidad.` },
                        ]
                    },
                    {
                        title: '6. Responsabilidad',
                        content: [
                            {
                                list: [
                                    {
                                        text: `El Usuario es responsable por el uso que haga de la Aplicación y la veracidad de la
                información registrada.` },
                                    {
                                        text: `<b>SERGAL</b> no será responsable por interrupciones, fallos técnicos o pérdida de datos por causas externas o fallos de proveedores como Google Firebase. <b>SERGAL</b> no asumirá ninguna responsabilidad, ya sea directa o indirecta, derivada del mal uso de la Aplicación por parte de los usuarios, asumiendo estos, en todo caso, bajo su exclusiva responsabilidad, las consecuencias, daños o acciones que pudieran derivarse del acceso a la Aplicación.`
                                    },
                                    {
                                        text: `La Aplicación se ofrece “tal como está”, sin garantía de funcionamiento ininterrumpido o libre de errores. <b>SERGAL</b> pone a disposición la Aplicación empleando todos los medios técnicos a su alcance para que la misma funcione de forma satisfactoria, pero en ningún
                caso garantiza que la Aplicación estará a disposición libres de todo lo cualquier error u
                omisión, virus, defecto o desperfecto. Usted acepta que puede haber discontinuidad en la
                prestación de la Aplicación, derivada de necesidades puntuales, fallos no controlables
                por <b>SERGAL</b>, mantenimientos, sobrecargas, virus, ataques externos, etc. La
                responsabilidad por una prestación no continuada del Servicio por las razones expuestas
                no podrá ser, en ningún caso, imputable a <b>SERGAL</b>.` },
                                    {
                                        text: `<b>SERGAL</b> no se hace responsable por los daños y perjuicios de toda naturaleza que pudieran derivarse del conocimiento que puedan tener terceros no autorizados de sus
                datos y del uso que hagan del Servicio a través de estos datos, incluyendo ataques de terceros, ataques hackers y/o ciberataques. Al registrarse y hacer uso del Servicio, acepta que los datos que se transmiten por la red de Internet no se benefician de una protección total habida cuenta de que las medidas de seguridad en la red no son inexpugnables.` },
                                ]
                            }
                        ]
                    },
                    {
                        title: '7. Generales',
                        content: [
                            {
                                list: [
                                    {
                                        text: `<b>SERGAL</b> se reserva el derecho de acceder, preservar y divulgar información de tu cuenta
                y contenido en caso de que lo deba hacer por ley o si de buena fe cree que la preservación
                a dicho acceso o la divulgación es razonablemente necesaria para: (i) cumplir con un
                proceso legal; (ii) hacer cumplir estos Términos de Uso; (iii) responder a reclamos sobre
                que cualquier contenido viola los derechos de terceros; o (iv) proteger los derechos, la
                propiedad o la seguridad personal de <b>SERGAL</b>, sus usuarios y el público.` },
                                    {
                                        text: `Nulidad parcial.- En caso de que cualquiera de estos Términos de Uso sea considerado
                inválido o no pasible de ejecución, los Términos de Uso restantes continuarán teniendo
                vigencia. En la medida en que cualquier restricción expresa o implícita no sea permitida
                por la legislación aplicable, esas restricciones expresas o implícitas seguirán vigentes en
                la mayor medida permitida por esa legislación aplicable.` },
                                    {
                                        text: `Extinción del Servicio y los Términos de Uso. Puedes extinguir tu acuerdo legal con
                <b>SERGAL</b> en cualquier momento al desactivar tus cuentas y descontinuar el uso de los
                Servicios. Podemos suspender o eliminar tu cuenta en cualquier momento y sin razón
                alguna, incluso si la prestación de los Servicios que te hacemos ya no resulta
                comercialmente viable o si razonablemente consideramos que has violado estos Términos
                de Uso, entre otras razones.` },
                                    {
                                        text: `<b>SERGAL</b> podrá, en cualquier momento, modificar los presentes Términos de Uso o
                introducir nuevos Términos de Uso ya sea para la totalidad del Servicio o para la utilización
                de contenidos o herramientas concretas, bastando para ello la notificación al usuario a
                través de la Aplicación.` },
                                ]
                            }
                        ]
                    },
                ]
            },
            privacy: {
                header: { title: 'POLÍTICA DE PRIVACIDAD', app: 'SIMEXAM' },
                sections: [
                    {
                        content: [
                            { text: `Fecha de última actualización: 20 de marzo de 2025` },
                        ]
                    },
                    {
                        title: '1. Alcance',
                        content: [
                            { text: `Esta política de privacidad explica cómo procesamos datos personales de usuarios la aplicación: <a href="https://play.google.com/store/apps/details?id=com.simexam.coach.app">SIMEXAM APP</a>.` },
                            { text: `Esta política no aplica a otros tratamientos de datos que hagamos en el marco de nuestra relación contractual. Dicho tratamiento se encuentra sujeto a los términos de las políticas específicas aplicables que has recibido.` },
                        ]
                    },
                    {
                        title: '2. Datos personales que recopilamos',
                        content: [
                            { text: 'Si bien los datos personales que recopilamos varían según tu uso de la Aplicación, podemos recopilar datos personales de ti y de manera automática en las siguientes circunstancias:' },
                            { text: 'Datos personales que recopilamos directamente de ti. Podemos recopilar la siguiente información personal de tu parte:' },
                            {
                                list: [
                                    { text: `Nombre o Apodo.` },
                                    { text: `Correo Electronico.` },
                                    { text: `Registro plantillas generadas por IA o creadas de forma manual.` },
                                    { text: `Otro tipo de información. Podemos recopilar otros datos personales si tu das tu consentimiento o si es razonable según la naturaleza de las circunstancias.`, }
                                ]
                            },
                            { text: `Datos personales recopilados automáticamente. Cuando ingresas a nuestra Aplicación, nosotros y terceros podremos recopilar datos personales, incluso mediante el uso de cookies, tales como:` },
                            {
                                list: [
                                    { text: `Información de tu cooreo electronico.` }
                                ]
                            },
                        ]
                    },
                    {
                        title: '3. Para qué usamos los datos personales',
                        content: [
                            { text: `En general, usamos los datos personales para los siguientes propósitos:` },
                            {
                                list: [
                                    { text: `Brindarte acceso a la Aplicación. Para asignarte un usuario y brindarte acceso a la Aplicación.` },
                                    { text: `Seguridad y protección de derechos. Para proteger la Aplicación y nuestras operaciones comerciales; prevenir y detectar fraudes, actividades y accesos no autorizados, y otros tipos de uso indebido; cuando creemos que es necesario investigar, prevenir o tomar medidas con respecto a actividades ilegales, sospechas de fraude, situaciones que involucren amenazas potenciales a la seguridad o derechos legales de cualquier persona o tercero, o violaciones a nuestros términos o a esta Política.` },
                                ], class: 'list-default'
                            }
                        ]
                    },
                    {
                        title: '4. Divulgación de datos personales',
                        content: [
                            { text: `En general, divulgamos y permitimos que terceros accedan a los datos siguientes:` },
                            {
                                list: [
                                    { text: `Afiliadas corporativas. Podemos divulgar datos de plantillas generadasa usuarios registrados en la aplicacion como parte de nuestras operaciones comerciales globales, y para fines y usos que respeten esta Política.` },
                                    { text: `Procesadores y proveedores de servicios. Podemos divulgar datos a los proveedores que brindan servicios en nuestro nombre, como proveedores de servicios de TI, de alojamiento web, etc.` },
                                    { text: `Otros casos. Podemos divulgar tus datos personales para otros fines, para lo cual lo notificaremos y le solicitaremos el consentimiento cuando sea necesario.` }
                                ], class: 'list-default'
                            },
                        ]
                    },
                    {
                        title: '5. Bases legales',
                        content: [
                            { text: `Tenemos derecho a usar tus datos personales a partir de la necesidad de procesar tus datos para cumplir con una obligación legal.` }
                        ]
                    },
                    {
                        title: '6. Cookies',
                        content: [
                            { text: `Nosotros y otros terceros utilizamos cookies, para recopilar automáticamente información para verificar y autenticar tu usuario para otorgarte acceso a la Aplicación.` },
                            { text: `Cookies. Las "cookies" son identificadores alfanuméricos utilizados para fines de seguimiento. Las cookies habilitadas se utilizan para habilitar un proceso de inicio de sesión más rápido y respaldar la seguridad de la Aplicación.` }
                        ]
                    },
                    {
                        title: '7. Seguridad',
                        content: [
                            { text: `Ninguna transmisión de datos a través de Internet es 100% segura. Por lo tanto, si bien nos esforzamos por proteger tus datos personales, no podemos garantizar la seguridad de la información recopilada.` }
                        ]
                    },
                    {
                        title: '8. Por cuánto tiempo retenemos sus datos personales',
                        content: [
                            { text: `Tus datos personales se conservarán hasta que sea necesario para cumplir con los propósitos y usos para los cuales fueron recopilados según lo establecido en esta Política. Si solicitas que eliminemos sus datos personales de nuestras bases de datos, ten en cuenta que igualmente podemos retener sus datos personales según sea necesario para cumplir con nuestras obligaciones legales, solicitudes regulatorias, resolver disputas y hacer cumplir nuestros acuerdos.` }
                        ]
                    },
                    {
                        title: '9. Qué derechos puede ejercer en relación con el tratamiento de sus datos personales',
                        content: [
                            { text: `Puedes ejercitar los derechos de acceso, rectificación, supresión, portabilidad, limitación del tratamiento y oposición mediante carta dirigida al domicilio social de la compañía, o mediante correo electrónico dirigido a sergio.gallegos@live.com.mx` }
                        ]
                    },
                    {
                        title: '10. Cambios a esta Política',
                        content: [
                            { text: `Si cambiamos o actualizamos nuestra Política, publicaremos esos cambios en esta página. Tu uso continuo de la Aplicación está sujeto a nuestra Política más reciente, publicada aquí. Si realizamos cambios significativos, es posible que publiquemos una notificación en nuestro Aplicación.` }
                        ]
                    },
                    {
                        title: '11. Contacto',
                        content: [
                            { text: `Si tienes alguna duda o inquietud sobre la forma en que procesamos tus datos personales o sobre esta Política, envíenos un correo electrónico a sergio.gallegos@live.com.mx` }
                        ]
                    },
                ]
            }
        }
    }

    currentData: any = null;

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private translate: TranslateService,
        private eventBusService: EventBusService,
        private _title: Title
    ) {
        this._router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {

                this.appName = this._activatedRoute.snapshot.paramMap.get('app');
                this.typeDoc = this._activatedRoute.snapshot.paramMap.get('type');
                this.ngOnInit()
            }
        });
    }

    ngOnInit(): void {
        if (this.appName && this.typeDoc) {
            try {
                const app = this.mainContent[this.appName];
                const type = app[this.typeDoc];
                this.currentData = type;
                this.valid = this.currentData ? true : false;
            } catch (error) {
                console.log('error: ', error);
                this.valid = false;
            }
        }
    }
}
