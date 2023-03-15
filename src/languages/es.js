import CONST from '../CONST';

/* eslint-disable max-len */
export default {
    common: {
        cancel: 'Cancelar',
        yes: 'Si',
        no: 'No',
        ok: 'OK',
        attachment: 'Archivo adjunto',
        to: 'A',
        optional: 'Opcional',
        new: 'Nuevo',
        search: 'Buscar',
        next: 'Siguiente',
        goBack: 'Volver',
        add: 'Agregar',
        resend: 'Reenviar',
        save: 'Guardar',
        saveChanges: 'Guardar cambios',
        password: 'Contraseña',
        magicCode: 'Código mágico',
        workspaces: 'Espacios de trabajo',
        profile: 'Perfil',
        payments: 'Pagos',
        preferences: 'Preferencias',
        view: 'Ver',
        not: 'No',
        signIn: 'Conectarse',
        continue: 'Continuar',
        firstName: 'Nombre',
        lastName: 'Apellidos',
        phone: 'teléfono',
        phoneNumber: 'Número de teléfono',
        phoneNumberPlaceholder: '(prefijo) + (número)',
        email: 'Email',
        and: 'y',
        details: 'Detalles',
        privacy: 'Privacidad',
        delete: 'Eliminar',
        archived: 'archivado',
        contacts: 'Contactos',
        recents: 'Recientes',
        close: 'Cerrar',
        download: 'Descargar',
        downloading: 'Descargando',
        pin: 'Fijar',
        unPin: 'Desfijar',
        back: 'Volver',
        saveAndContinue: 'Guardar y continuar',
        settings: 'Configuración',
        termsOfService: 'Términos de Servicio',
        expensifyTermsOfService: 'Términos de Servicio de Expensify',
        members: 'Miembros',
        invite: 'Invitar',
        here: 'aquí',
        date: 'Fecha',
        dob: 'Fecha de Nacimiento',
        ssnLast4: 'Últimos 4 dígitos de su SSN',
        ssnFull9: 'Los 9 dígitos del SSN',
        addressLine: ({lineNumber}) => `Dirección línea ${lineNumber}`,
        personalAddress: 'Dirección física personal',
        companyAddress: 'Dirección física de la empresa',
        noPO: 'No se aceptan apartados ni direcciones postales',
        city: 'Ciudad',
        state: 'Estado',
        stateOrProvince: 'Estado / Provincia',
        country: 'País',
        zip: 'Código postal',
        zipPostCode: 'Código Postal',
        whatThis: '¿Qué es esto?',
        iAcceptThe: 'Acepto los ',
        remove: 'Eliminar',
        admin: 'Administrador',
        dateFormat: 'AAAA-MM-DD',
        send: 'Enviar',
        notifications: 'Notificaciones',
        na: 'N/A',
        noResultsFound: 'No se han encontrado resultados',
        timePrefix: 'Son las',
        conjunctionFor: 'para',
        todayAt: 'Hoy a las',
        tomorrowAt: 'Mañana a las',
        yesterdayAt: 'Ayer a las',
        conjunctionAt: 'a',
        genericErrorMessage:
            'Ups... algo no ha ido bien y la acción no se pudo completar. Por favor inténtalo más tarde.',
        error: {
            invalidAmount: 'Monto no válido',
            acceptTerms:
                'Debes aceptar los Términos de servicio para continuar',
            phoneNumber: `Ingresa un teléfono válido, incluyendo el código de país (p. ej. ${CONST.EXAMPLE_PHONE_NUMBER})`,
            fieldRequired: 'Este campo es obligatorio.',
            characterLimit: ({limit}) =>
                `Supera el límite de ${limit} caracteres`,
            dateInvalid: 'Ingresa una fecha válida',
            invalidCharacter: 'Caracter invalida',
        },
        comma: 'la coma',
        semicolon: 'el punto y coma',
        please: 'Por favor',
        contactUs: 'contáctenos',
        pleaseEnterEmailOrPhoneNumber:
            'Por favor escribe un email o número de teléfono',
        fixTheErrors: 'corrige los errores',
        inTheFormBeforeContinuing: 'en el formulario antes de continuar',
        confirm: 'Confirmar',
        reset: 'Restablecer',
        done: 'Listo',
        more: 'Más',
        debitCard: 'Tarjeta de débito',
        payPalMe: 'PayPal.me',
        bankAccount: 'Cuenta bancaria',
        join: 'Unirse',
        decline: 'Rechazar',
        transferBalance: 'Transferencia de saldo',
        cantFindAddress: '¿No encuentras tu dirección? ',
        enterManually: 'Ingresar manualmente',
        message: 'Chatear con ',
        leaveRoom: 'Salir de la sala de chat',
        you: 'Tú',
        your: 'tu',
        conciergeHelp: 'Por favor contacta con Concierge para obtener ayuda.',
        maxParticipantsReached: ({count}) =>
            `Has seleccionado el número máximo (${count}) de participantes.`,
        youAppearToBeOffline: 'Parece que estás desconectado.',
        thisFeatureRequiresInternet:
            'Esta función requiere una conexión a Internet activa para ser utilizada.',
        areYouSure: '¿Estás seguro?',
        zipCodeExample: 'p. ej. 12345, 12345-1234, 12345 1234',
        websiteExample: 'p. ej. https://www.expensify.com',
    },
    attachmentPicker: {
        cameraPermissionRequired: 'Permiso para acceder a la cámara',
        expensifyDoesntHaveAccessToCamera:
            'Expensify no puede tomar fotos sin acceso a tu cámara. Haz click en Configuración para actualizar los permisos.',
        attachmentError: 'Error al adjuntar archivo',
        errorWhileSelectingAttachment:
            'Ha ocurrido un error al seleccionar un adjunto, por favor inténtalo de nuevo',
        errorWhileSelectingCorruptedImage:
            'Ha ocurrido un error al seleccionar un adjunto corrupto, por favor inténtalo con otro archivo',
        takePhoto: 'Hacer una foto',
        chooseFromGallery: 'Elegir de la galería',
        chooseDocument: 'Elegir documento',
        attachmentTooLarge: 'Archivo adjunto demasiado grande',
        sizeExceeded: 'El archivo adjunto supera el límite de 24 MB.',
        attachmentTooSmall: 'Archivo adjunto demasiado pequeño',
        sizeNotMet: 'El archivo adjunto debe ser mas grande que 240 bytes.',
        wrongFileType: 'El tipo del archivo adjunto es incorrecto',
        notAllowedExtension:
            'Los archivos adjuntos deben ser de uno de los siguientes tipos: ',
    },
    avatarCropModal: {
        title: 'Editar Foto',
        description:
            'Arrastra, haz zoom y rota tu imagen para que quede como te gusta.',
    },
    composer: {
        noExtensionFoundForMimeType:
            'No se encontró una extension para este tipo de contenido',
        problemGettingImageYouPasted:
            'Ha ocurrido un problema al obtener la imagen que has pegado',
    },
    baseUpdateAppModal: {
        updateApp: 'Actualizar app',
        updatePrompt:
            'Existe una nueva versión de esta aplicación.\nActualiza ahora or reinicia la aplicación más tarde para recibir la última versión.',
    },
    deeplinkWrapper: {
        launching: 'Cargando Expensify',
        redirectedToDesktopApp:
            'Te hemos redirigido a la aplicación de escritorio.',
        youCanAlso: 'También puedes',
        openLinkInBrowser: 'abrir este enlace en tu navegador',
    },
    validateCodeModal: {
        successfulSignInTitle: 'Abracadabra,\n¡sesión iniciada!',
        successfulSignInDescription:
            'Vuelve a la pestaña original para continuar.',
        title: 'Aquí está tu código mágico',
        or: ', ¡o',
        description:
            'Por favor, introduzca el código utilizando el dispositivo\nen el que se solicitó originalmente',
        signInHere: 'simplemente inicia sesión aquí',
    },
    iOUConfirmationList: {
        whoPaid: '¿Quién pago?',
        whoWasThere: '¿Quién asistió?',
        whatsItFor: '¿Para qué es?',
    },
    iOUCurrencySelection: {
        selectCurrency: 'Selecciona una moneda',
        allCurrencies: 'Todas las monedas',
    },
    optionsSelector: {
        nameEmailOrPhoneNumber: 'Nombre, email o número de teléfono',
    },
    videoChatButtonAndMenu: {
        tooltip: 'Iniciar una llamada',
        zoom: 'Zoom',
        googleMeet: 'Google Meet',
    },
    hello: 'Hola',
    phoneCountryCode: '34',
    welcomeText: {
        welcome: 'Con el Nuevo Expensify, chat y pagos son lo mismo.',
        welcomeEnterMagicCode: ({login}) =>
            `¡Siempre es genial ver una cara nueva por aquí! Por favor ingresa el código mágico enviado a ${login}`,
        phrase2:
            'El dinero habla. Y ahora que chat y pagos están en un mismo lugar, es también fácil.',
        phrase3: 'Tus pagos llegan tan rápido como tus mensajes.',
        welcomeBack:
            '¡Bienvenido de vuelta al Nuevo Expensify! Por favor, introduce tu contraseña.',
        welcomeBackEnterMagicCode: ({login}) =>
            `¡Bienvenido de nuevo! Por favor, introduce el código mágico enviado a ${login}`,
    },
    reportActionCompose: {
        addAction: 'Acción',
        dropToUpload: 'Suelta el archivo aquí para compartirlo',
        sendAttachment: 'Enviar adjunto',
        addAttachment: 'Agregar archivo adjunto',
        writeSomething: 'Escribe algo...',
        conciergePlaceholderOptions: [
            '¡Pide ayuda!',
            '¡Pregúntame lo que sea!',
            '¡Pídeme que te reserve un viaje!',
            '¡Pregúntame qué puedo hacer!',
            '¡Pregúntame cómo pagar a la gente!',
            '¡Pregúntame cómo enviar una factura!',
            '¡Pregúntame cómo escanear un recibo!',
            '¡Pregúntame cómo obtener una tarjeta de crédito corporativa gratis!',
        ],
        blockedFromConcierge: 'Comunicación no permitida',
        fileUploadFailed: 'Subida fallida. El archivo no es compatible.',
        localTime: ({user, time}) => `Son las ${time} para ${user}`,
        edited: '(editado)',
        emoji: 'Emoji',
        collapse: 'Colapsar',
        expand: 'Expandir',
    },
    reportActionContextMenu: {
        copyToClipboard: 'Copiar al portapapeles',
        copied: '¡Copiado!',
        copyLink: 'Copiar enlace',
        copyURLToClipboard: 'Copiar URL al portapapeles',
        copyEmailToClipboard: 'Copiar email al portapapeles',
        markAsUnread: 'Marcar como no leído',
        editComment: 'Editar commentario',
        deleteComment: 'Eliminar comentario',
        deleteConfirmation:
            '¿Estás seguro de que quieres eliminar este comentario?',
        addReactionTooltip: 'Añadir una reacción',
    },
    reportActionsView: {
        beginningOfArchivedRoomPartOne: 'Te perdiste la fiesta en ',
        beginningOfArchivedRoomPartTwo: ', no hay nada que ver aquí.',
        beginningOfChatHistoryDomainRoomPartOne: ({domainRoom}) =>
            `Colabora aquí con todos los participantes de ${domainRoom}! 🎉\nUtiliza `,
        beginningOfChatHistoryDomainRoomPartTwo:
            ' para chatear con compañeros, compartir consejos o hacer una pregunta.',
        beginningOfChatHistoryAdminRoomPartOne: ({workspaceName}) =>
            `Este es el lugar para que los administradores de ${workspaceName} colaboren! 🎉\nUsa `,
        beginningOfChatHistoryAdminRoomPartTwo:
            ' para chatear sobre temas como la configuración del espacio de trabajo y mas.',
        beginningOfChatHistoryAnnounceRoomPartOne: ({workspaceName}) =>
            `Este es el lugar para que todos los miembros de ${workspaceName} colaboren! 🎉\nUsa `,
        beginningOfChatHistoryAnnounceRoomPartTwo: ({workspaceName}) =>
            ` para chatear sobre cualquier cosa relacionada con ${workspaceName}.`,
        beginningOfChatHistoryUserRoomPartOne:
            'Este es el lugar para colaborar! 🎉\nUsa este espacio para chatear sobre cualquier cosa relacionada con ',
        beginningOfChatHistoryUserRoomPartTwo: '.',
        beginningOfChatHistory:
            'Aquí comienza tu historial de conversaciones con ',
        beginningOfChatHistoryPolicyExpenseChatPartOne:
            '¡La colaboración entre ',
        beginningOfChatHistoryPolicyExpenseChatPartTwo: ' y ',
        beginningOfChatHistoryPolicyExpenseChatPartThree:
            ' empieza aquí! 🎉 Este es el lugar donde chatear, pedir dinero y pagar.',
        chatWithAccountManager: 'Chatea con tu gestor de cuenta aquí',
        sayHello: '¡Saluda!',
        usePlusButton:
            '\n\n¡También puedes usar el botón + de abajo para enviar o pedir dinero!',
    },
    newMessages: 'Mensajes nuevos',
    reportTypingIndicator: {
        isTyping: 'está escribiendo...',
        areTyping: 'están escribiendo...',
        multipleUsers: 'Varios usuarios',
    },
    reportArchiveReasons: {
        [CONST.REPORT.ARCHIVE_REASON.DEFAULT]:
            'Esta sala de chat ha sido eliminada.',
        [CONST.REPORT.ARCHIVE_REASON.ACCOUNT_CLOSED]: ({displayName}) =>
            `Este chat de espacio de trabajo esta desactivado porque ${displayName} ha cerrado su cuenta.`,
        [CONST.REPORT.ARCHIVE_REASON.ACCOUNT_MERGED]: ({
            displayName,
            oldDisplayName,
        }) =>
            `Este chat de espacio de trabajo esta desactivado porque ${oldDisplayName} ha combinado su cuenta con ${displayName}.`,
        [CONST.REPORT.ARCHIVE_REASON.REMOVED_FROM_POLICY]: ({
            displayName,
            policyName,
        }) =>
            `Este chat de espacio de trabajo esta desactivado porque ${displayName} ha dejado de ser miembro del espacio de trabajo ${policyName}.`,
        [CONST.REPORT.ARCHIVE_REASON.POLICY_DELETED]: ({policyName}) =>
            `Este chat de espacio de trabajo esta desactivado porque el espacio de trabajo ${policyName} se ha eliminado.`,
    },
    sidebarScreen: {
        fabAction: 'Nuevo chat',
        newChat: 'Nuevo chat',
        newGroup: 'Nuevo grupo',
        newRoom: 'Nueva sala de chat',
        headerChat: 'Chats',
        buttonSearch: 'Buscar',
        buttonMySettings: 'Mi configuración',
        fabNewChat: 'Nuevo chat',
        chatPinned: 'Chat fijado',
        draftedMessage: 'Mensaje borrador',
    },
    iou: {
        amount: 'Importe',
        participants: 'Participantes',
        splitBill: 'Dividir factura',
        requestMoney: 'Pedir dinero',
        sendMoney: 'Enviar dinero',
        pay: 'Pagar',
        viewDetails: 'Ver detalles',
        settleExpensify: 'Pagar con Expensify',
        settleElsewhere: 'Voy a pagar de otra forma',
        settlePaypalMe: 'Pagar con PayPal.me',
        request: ({amount}) => `Solicitar ${amount}`,
        youowe: ({owner}) => `Le debes a ${owner}`,
        youpaid: ({owner}) => `Le pagaste a ${owner}`,
        owesyou: ({manager}) => `${manager} te debe`,
        paidyou: ({manager}) => `${manager} te pagó`,
        split: ({amount}) => `Dividir ${amount}`,
        send: ({amount}) => `Enviar ${amount}`,
        noReimbursableExpenses: 'El monto de este informe es inválido',
        pendingConversionMessage: 'El total se actualizará cuando estés online',
        error: {
            invalidSplit: 'La suma de las partes no equivale al monto total',
            other: 'Error inesperado, por favor inténtalo más tarde',
            genericCreateFailureMessage:
                'Error inesperado solicitando dinero, por favor inténtalo más tarde',
            genericCancelFailureMessage: ({type}) =>
                `Error inesperado al ${
                    type === 'decline' ? 'rechazar' : 'cancelar'
                } la solicitud de dinero, por favor inténtalo más tarde`,
        },
    },
    notificationPreferences: {
        label: 'Avisar sobre nuevos mensajes',
        immediately: 'Inmediatamente',
        daily: 'Cada día',
        mute: 'Nunca',
    },
    loginField: {
        numberHasNotBeenValidated:
            'El número no está validado todavía. Haz click en el botón para reenviar el enlace de confirmación via SMS.',
        emailHasNotBeenValidated:
            'El email no está validado todavía. Haz click en el botón para reenviar el enlace de confirmación via email.',
    },
    avatarWithImagePicker: {
        uploadPhoto: 'Subir foto',
        removePhoto: 'Eliminar foto',
        editImage: 'Editar foto',
        imageUploadFailed: 'Error al cargar la imagen',
        deleteWorkspaceError:
            'Lo sentimos, hubo un problema eliminando el avatar de su espacio de trabajo.',
        sizeExceeded: ({maxUploadSizeInMB}) =>
            `La imagen supera el tamaño máximo de ${maxUploadSizeInMB}MB.`,
        resolutionConstraints: ({
            minHeightInPx,
            minWidthInPx,
            maxHeightInPx,
            maxWidthInPx,
        }) =>
            `Por favor, elige una imagen más grande que ${minHeightInPx}x${minWidthInPx} píxeles y más pequeña que ${maxHeightInPx}x${maxWidthInPx} píxeles.`,
        notAllowedExtension: ({allowedExtensions}) =>
            `La foto de perfil debe ser de uno de los siguientes tipos: ${allowedExtensions.join(
                ', ',
            )}.`,
    },
    profilePage: {
        profile: 'Perfil',
        john: 'Juan',
        doe: 'Nadie',
        preferredPronouns: 'Pronombres preferidos',
        selectYourPronouns: 'Selecciona tus pronombres',
        selfSelectYourPronoun: 'Auto-selecciona tu pronombre',
        emailAddress: 'Dirección de email',
        setMyTimezoneAutomatically: 'Configura mi zona horaria automáticamente',
        timezone: 'Zona horaria',
        invalidFileMessage:
            'Archivo inválido. Pruebe con una imagen diferente.',
        avatarUploadFailureMessage:
            'No se pudo subir el avatar. Por favor, inténtalo de nuevo.',
        online: 'En línea',
        offline: 'Desconectado',
        syncing: 'Sincronizando',
    },
    pronounsPage: {
        pronouns: 'Pronombres',
        isShownOnProfile: 'Tus pronombres se muestran en tu perfil.',
    },
    contacts: {
        contactMethod: 'Método de contacto',
        contactMethods: 'Métodos de contacto',
    },
    pronouns: {
        coCos: 'Co / Cos',
        eEyEmEir: 'E / Ey / Em / Eir',
        faeFaer: 'Fae / Faer',
        heHimHis: 'Él',
        heHimHisTheyThemTheirs: 'Él / Ellos',
        sheHerHers: 'Ella',
        sheHerHersTheyThemTheirs: 'Ella / Ellos',
        merMers: 'Mer / Mers',
        neNirNirs: 'Ne / Nir / Nirs',
        neeNerNers: 'Nee / Ner / Ners',
        perPers: 'Per / Pers',
        theyThemTheirs: 'Ellos',
        thonThons: 'Thon / Thons',
        veVerVis: 'Ve / Ver / Vis',
        viVir: 'Vi / Vir',
        xeXemXyr: 'Xe / Xem / Xyr',
        zeZieZirHir: 'Ze / Zie / Zir / Hir',
        zeHirHirs: 'Ze / Hir',
        callMeByMyName: 'Llámame por mi nombre',
    },
    displayNamePage: {
        headerTitle: 'Nombre',
        isShownOnProfile: 'Este nombre es visible en su perfil.',
        john: 'Juan',
        doe: 'Nadie',
    },
    timezonePage: {
        timezone: 'Zona horaria',
        isShownOnProfile: 'Tu zona horaria se muestra en tu perfil.',
        getLocationAutomatically: 'Detecta tu ubicación automáticamente.',
    },
    addSecondaryLoginPage: {
        addPhoneNumber: 'Agregar número de teléfono',
        addEmailAddress: 'Agregar dirección de email',
        enterPreferredPhoneNumberToSendValidationLink:
            'Escribe tu número de teléfono para recibir el enlace de validación.',
        enterPreferredEmailToSendValidationLink:
            'Escribe tu email para recibir el enlace de validación.',
        sendValidation: 'Enviar validación',
    },
    initialSettingsPage: {
        about: 'Acerca de',
        aboutPage: {
            description:
                'La nueva Expensify está creada por una comunidad de desarrolladores de código abierto de todo el mundo. Ayúdanos a construir el futuro de Expensify.',
            appDownloadLinks: 'Enlaces para descargar la App',
            viewKeyboardShortcuts: 'Ver atajos de teclado',
            viewTheCode: 'Ver codigo',
            viewOpenJobs: 'Ver trabajos disponibles',
            reportABug: 'Reporta un error',
        },
        appDownloadLinks: {
            android: {
                label: 'Android',
            },
            ios: {
                label: 'iOS',
            },
            desktop: {
                label: 'macOS',
            },
        },
        security: 'Seguridad',
        signOut: 'Desconectar',
        signOutConfirmationText:
            'Si cierras sesión perderás los cambios hechos mientras estabas desconectado',
        versionLetter: 'v',
        readTheTermsAndPrivacy: {
            phrase1: 'Leer los',
            phrase2: 'términos de servicio',
            phrase3: 'y',
            phrase4: 'privacidad',
        },
        help: 'Ayuda',
    },
    closeAccountPage: {
        closeAccount: 'Cerrar cuenta',
        reasonForLeavingPrompt:
            '¡Lamentamos verte partir! ¿Serías tan amable de decirnos por qué, para que podamos mejorar?',
        enterMessageHere: 'Ingresa el mensaje aquí',
        closeAccountWarning: 'Una vez cerrada tu cuenta no se puede revertir.',
        closeAccountPermanentlyDeleteData:
            'Esta acción eliminará permanentemente toda la información de tus gastos no enviados y cancelará o rechazará cualquier solicitud de dinero pendiente. ¿Estás seguro de que quieres eliminar tu cuenta?',
        enterDefaultContactToConfirm:
            'Por favor escribe tu método de contacto predeterminado para confirmar que deseas eliminar tu cuenta. Tu método de contacto predeterminado es:',
        enterDefaultContact: 'Tu método de contacto predeterminado',
        defaultContact: 'Método de contacto predeterminado:',
        enterYourDefaultContactMethod:
            'Por favor ingresa tu método de contacto predeterminado para cerrar tu cuenta.',
    },
    passwordPage: {
        changePassword: 'Cambiar contraseña',
        changingYourPasswordPrompt:
            'El cambio de contraseña va a afectar tanto a la cuenta de Expensify.com como la de Nuevo Expensify.',
        currentPassword: 'Contraseña actual',
        newPassword: 'Nueva contraseña',
        newPasswordPrompt:
            'La nueva contraseña debe ser diferente de la antigua, tener al menos 8 caracteres, 1 letra mayúscula, 1 letra minúscula y 1 número.',
        errors: {
            currentPassword: 'Contraseña actual es requerido',
            newPasswordSameAsOld:
                'La nueva contraseña tiene que ser diferente de la antigua',
            newPassword:
                'Su contraseña debe tener al menos 8 caracteres, 1 letra mayúscula, 1 letra minúscula y 1 número.',
        },
    },
    passwordConfirmationScreen: {
        passwordUpdated: 'Contraseña actualizada!',
        allSet: 'Todo está listo. Guarda tu contraseña en un lugar seguro.',
        gotIt: 'Ok, entendido',
    },
    addPayPalMePage: {
        enterYourUsernameToGetPaidViaPayPal:
            'Escribe tu nombre de usuario para que otros puedan pagarte a través de PayPal.',
        payPalMe: 'PayPal.me/',
        yourPayPalUsername: 'Tu usuario de PayPal',
        addPayPalAccount: 'Agregar cuenta de PayPal',
        growlMessageOnSave:
            'Su nombre de usuario de PayPal se agregó correctamente',
        formatError: 'Usuario PayPal.me no válido',
    },
    addDebitCardPage: {
        addADebitCard: 'Agregar una tarjeta de débito',
        nameOnCard: 'Nombre en la tarjeta',
        debitCardNumber: 'Numero de la tarjeta de débito',
        expiration: 'Fecha de vencimiento',
        expirationDate: 'MMAA',
        cvv: 'CVV',
        billingAddress: 'Dirección de envio',
        growlMessageOnSave: 'Su tarteja de débito se agregó correctamente',
        expensifyPassword: 'Contraseña de Expensify',
        error: {
            invalidName: 'Por favor ingresa un nombre válido',
            addressZipCode: 'Por favor ingresa un código postal válido',
            debitCardNumber: 'Ingresa un número de tarjeta de débito válido',
            expirationDate:
                'Por favor introduzca una fecha de vencimiento válida',
            securityCode: 'Ingresa un código de seguridad válido',
            addressStreet:
                'Ingresa una dirección de facturación válida que no sea un apartado postal',
            addressState: 'Por favor seleccione un estado',
            addressCity: 'Por favor ingresa una ciudad',
            genericFailureMessage:
                'Se produjo un error al agregar su tarjeta. Vuelva a intentarlo',
            password: 'Por favor ingresa tu contraseña de Expensify',
        },
    },
    paymentsPage: {
        paymentMethodsTitle: 'Métodos de pago',
        setDefaultConfirmation: 'Marcar como método de pago predeterminado',
        setDefaultSuccess: 'Método de pago configurado',
        deleteAccount: 'Eliminar cuenta',
        deleteConfirmation:
            '¿Estás seguro de que quieres eliminar esta cuenta?',
        deletePayPalSuccess: 'PayPal.me eliminada correctamente',
        error: {
            notOwnerOfBankAccount:
                'Ha ocurrido un error al establecer esta cuenta bancaria como tu método de pago predeterminado.',
            invalidBankAccount:
                'Esta cuenta bancaria está temporalmente suspendida.',
            notOwnerOfFund:
                'Ha ocurrido un error al establecer esta tarjeta de crédito como tu método de pago predeterminado.',
            setDefaultFailure: 'No se pudo configurar el método de pago.',
        },
        addBankAccountFailure:
            'Ocurrió un error inesperado al intentar agregar su cuenta bancaria. Inténtalo de nuevo.',
    },
    transferAmountPage: {
        transfer: ({amount}) => `Transferir${amount ? ` ${amount}` : ''}`,
        instant: 'Instante',
        instantSummary: ({rate, minAmount}) =>
            `Tarifa del ${rate}% (${minAmount} mínimo)`,
        ach: '1-3 días laborales',
        achSummary: 'Sin cargo',
        whichAccount: '¿Que cuenta?',
        fee: 'Tarifa',
        transferSuccess: '¡Transferencia exitosa!',
        transferDetailBankAccount:
            'Tu dinero debería llegar en 1-3 días laborables.',
        transferDetailDebitCard: 'Tu dinero debería llegar de inmediato.',
        failedTransfer:
            'Tu saldo no se ha acreditado completamente. Por favor transfiere los fondos a una cuenta bancaria.',
    },
    chooseTransferAccountPage: {
        chooseAccount: 'Elegir cuenta',
    },
    paymentMethodList: {
        addPaymentMethod: 'Agrega método de pago',
        addNewDebitCard: 'Agregar nueva tarjeta de débito',
        addNewBankAccount: 'Agregar nueva cuenta de banco',
        accountLastFour: 'Cuenta con terminación',
        cardLastFour: 'Tarjeta con terminacíon',
        addFirstPaymentMethod:
            'Añade un método de pago para enviar y recibir pagos directamente desde la aplicación.',
        defaultPaymentMethod: 'Predeterminado',
    },
    preferencesPage: {
        receiveRelevantFeatureUpdatesAndExpensifyNews:
            'Recibir noticias sobre Expensify y actualizaciones del producto',
    },
    priorityModePage: {
        priorityMode: 'Modo prioridad',
        explainerText:
            'Elija si desea mostrar por defecto todos los chats ordenados desde el más reciente y con los elementos anclados en la parte superior, o elija el modo #concentración, con los elementos no leídos anclados en la parte superior y ordenados alfabéticamente.',
        priorityModes: {
            default: {
                label: 'Más recientes',
                description:
                    'Mostrar todos los chats ordenados desde el más reciente',
            },
            gsd: {
                label: '#concentración',
                description:
                    'Mostrar sólo los no leídos ordenados alfabéticamente',
            },
        },
    },
    languagePage: {
        language: 'Idioma',
        languages: {
            en: {
                label: 'Inglés',
            },
            es: {
                label: 'Español',
            },
        },
    },
    signInPage: {
        expensifyDotCash: 'Nuevo Expensify',
        theCode: 'el código',
        openJobs: 'trabajos disponibles',
        heroHeading: 'Dividir cuentas\ny chatear con amigos.',
        heroDescription: {
            phrase1:
                'El dinero habla. Y ahora que el chat y los pagos están en un solo lugar, también es fácil. Sus pagos le llegan tan rápido como puede transmitir su punto.',
            phrase2: 'Nuevo Expensify es de código abierto. Vista',
            phrase3: 'el código',
            phrase4: 'Vista',
            phrase5: 'vacantes',
        },
    },
    termsOfUse: {
        phrase1: 'Al iniciar sesión, estás accediendo a los',
        phrase2: 'términos de servicio',
        phrase3: 'y',
        phrase4: 'privacidad',
        phrase5:
            'El envío de dinero es brindado por Expensify Payments LLC (NMLS ID:2017010) de conformidad con sus',
        phrase6: 'licencias',
    },
    validateCodeForm: {
        magicCodeNotReceived: '¿No recibiste un código mágico?',
        enterAuthenticatorCode: 'Por favor ingresa su código de autenticador',
        twoFactorCode: 'Autenticación de 2 factores',
        requiredWhen2FAEnabled: 'Obligatorio cuando A2F está habilitado',
        codeSent: '¡Código mágico enviado!',
        error: {
            pleaseFillMagicCode: 'Por favor, introduce el código mágico',
            incorrectMagicCode: 'Código mágico incorrecto.',
            pleaseFillTwoFactorAuth:
                'Por favor, introduce tu código 2 factores',
        },
    },
    passwordForm: {
        pleaseFillOutAllFields: 'Por favor completa todos los campos',
        pleaseFillPassword: 'Por favor, introduce tu contraseña',
        pleaseFillTwoFactorAuth: 'Por favor, introduce tu código 2 factores',
        enterYourTwoFactorAuthenticationCodeToContinue:
            'Ingresa su código de autenticación de dos factores para continuar',
        forgot: '¿Te has olvidado?',
        twoFactorCode: 'Autenticación de 2 factores',
        requiredWhen2FAEnabled: 'Obligatorio cuando A2F está habilitado',
        error: {
            incorrectPassword:
                'Contraseña incorrecta. Por favor inténtalo de nuevo.',
            incorrectLoginOrPassword:
                'Usuario o clave incorrectos. Por favor inténtalo de nuevo',
            incorrect2fa:
                'Código de autenticación de 2 factores incorrecto. Por favor inténtalo de nuevo',
            twoFactorAuthenticationEnabled:
                'Tienes autenticación de 2 factores activada en esta cuenta. Por favor conéctate usando su email o número de teléfono',
            invalidLoginOrPassword:
                'Usuario o clave incorrectos. Por favor inténtalo de nuevo o resetea tu clave',
            unableToResetPassword:
                'No se pudo cambiar tu clave. Probablemente porque el enlace para resetear la clave ha expirado. Te hemos enviado un nuevo enlace. Chequea tu bandeja de entrada y tu carpeta de Spam',
            noAccess:
                'No tienes acceso a esta aplicación. Por favor agrega tu usuario de GitHub para acceder',
            accountLocked:
                'Tu cuenta ha sido bloqueada tras varios intentos fallidos. Por favor inténtalo otra vez dentro de 1 hora',
            fallback: 'Ha ocurrido un error. Por favor inténtalo mas tarde',
        },
    },
    loginForm: {
        phoneOrEmail: 'Número de teléfono o email',
        error: {
            invalidFormatEmailLogin:
                'El email introducido no es válido. Corrígelo e inténtalo de nuevo.',
        },
        cannotGetAccountDetails:
            'No se pudieron cargar los detalles de tu cuenta, por favor intenta iniciar sesión de nuevo.',
    },
    personalDetails: {
        error: {
            containsReservedWord:
                'El nombre no puede contener las palabras Expensify o Concierge',
            hasInvalidCharacter:
                'El nombre no puede contener una coma o un punto y coma',
        },
    },
    privatePersonalDetails: {
        personalDetails: 'Datos personales',
        privateDataMessage:
            'Estos detalles se utilizan para viajes y pagos. Nunca se mostrarán en su perfil público.',
        legalName: 'Nombre completo',
        legalFirstName: 'Nombre legal',
        legalLastName: 'Apellidos legales',
        homeAddress: 'Domicilio',
        error: {
            dateShouldBeBefore: ({dateString}) =>
                `La fecha debe ser anterior a ${dateString}.`,
            dateShouldBeAfter: ({dateString}) =>
                `La fecha debe ser posterior a ${dateString}.`,
        },
    },
    resendValidationForm: {
        linkHasBeenResent: 'El enlace se ha reenviado',
        weSentYouMagicSignInLink: ({login, loginType}) =>
            `Te he enviado un hiperenlace mágico para iniciar sesión a ${login}. Por favor revisa tu ${loginType}`,
        resendLink: 'Reenviar enlace',
        validationCodeFailedMessage:
            'Parece que hubo un error con el enlace de validación o ha caducado.',
    },
    detailsPage: {
        localTime: 'Hora local',
    },
    newChatPage: {
        createGroup: 'Crear grupo',
    },
    notFound: {
        chatYouLookingForCannotBeFound:
            'El chat que estás buscando no se pudo encontrar.',
        getMeOutOfHere: 'Sácame de aquí',
        iouReportNotFound:
            'Los detalles del pago que estás buscando no se pudieron encontrar.',
        notHere: 'Hmm… no está aquí',
        pageNotFound: 'La página que buscas no existe.',
        noAccess: 'No tienes acceso a este chat',
        goBackHome: 'Volver a la página principal',
    },
    setPasswordPage: {
        enterPassword: 'Escribe una contraseña',
        setPassword: 'Configura tu contraseña',
        newPasswordPrompt:
            'La contraseña debe tener al menos 8 caracteres, 1 letra mayúscula, 1 letra minúscula y 1 número.',
        passwordFormTitle:
            '¡Bienvenido de vuelta al Nuevo Expensify! Por favor, elige una contraseña.',
        passwordNotSet:
            'No se pudo cambiar tu clave. Te hemos enviado un nuevo enlace para que intentes cambiar la clave nuevamente.',
        setPasswordLinkInvalid:
            'El enlace para configurar tu contraseña ha expirado. Te hemos enviado un nuevo enlace a tu correo.',
        validateAccount: 'Verificar cuenta',
    },
    stepCounter: ({step, total}) => `Paso ${step} de ${total}`,
    bankAccount: {
        accountNumber: 'Número de cuenta',
        routingNumber: 'Número de ruta',
        addBankAccount: 'Agregar cuenta bancaria',
        chooseAnAccount: 'Elige una cuenta',
        connectOnlineWithPlaid: 'Conéctate a Plaid online',
        connectManually: 'Conectar manualmente',
        desktopConnection:
            'Para conectarse con Chase, Wells Fargo, Capital One o Bank of America, haga clic aquí para completar este proceso en un navegador.',
        yourDataIsSecure: 'Tus datos están seguros',
        toGetStarted:
            'Añade una cuenta bancaria y emite tarjetas corporativas, reembolsa gastos y cobra y paga facturas, todo desde un mismo lugar.',
        plaidBodyCopy:
            'Ofrezca a sus empleados una forma más sencilla de pagar - y recuperar - los gastos de la empresa.',
        checkHelpLine:
            'Su número de ruta y número de cuenta se pueden encontrar en un cheque de la cuenta bancaria.',
        validateAccountError:
            'Para terminar de configurar tu cuenta bancaria, debes validar tu cuenta de Expensify. Por favor, revisa tu correo electrónico para validar tu cuenta y vuelve aquí para continuar.',
        hasPhoneLoginError:
            'Para agregar una cuenta bancaria verificada, asegúrate de que tu nombre de usuario principal sea un correo electrónico válido y vuelve a intentarlo. Puedes agregar tu número de teléfono como nombre de usuario secundario.',
        hasBeenThrottledError:
            'Se produjo un error al intentar agregar tu cuenta bancaria. Por favor, espera unos minutos e inténtalo de nuevo.',
        buttonConfirm: 'OK',
        error: {
            noBankAccountAvailable:
                'Lo sentimos, no hay ninguna cuenta bancaria disponible',
            noBankAccountSelected: 'Por favor, elige una cuenta bancaria',
            taxID: 'Ingresa un número de identificación fiscal válido',
            website: 'Ingresa un sitio web válido',
            zipCode: 'Ingresa un código postal válido',
            phoneNumber: 'Ingresa un teléfono válido',
            companyName: 'Ingresa un nombre comercial legal válido',
            addressCity: 'Ingresa una ciudad válida',
            addressStreet:
                'Ingresa una calle de dirección válida que no sea un apartado postal',
            addressState: 'Por favor, selecciona un estado',
            incorporationDateFuture:
                'La fecha de incorporación no puede ser futura',
            incorporationState: 'Ingresa un estado válido',
            industryCode:
                'Ingresa un código de clasificación de industria válido',
            restrictedBusiness:
                'Confirma que la empresa no está en la lista de negocios restringidos',
            routingNumber: 'Ingresa un número de ruta válido',
            accountNumber: 'Ingresa un número de cuenta válido',
            companyType: 'Ingresa un tipo de compañía válido',
            tooManyAttempts:
                'Debido a la gran cantidad de intentos de inicio de sesión, esta opción se ha desactivado temporalmente durante 24 horas. Vuelve a intentarlo más tarde o introduzca los detalles manualmente.',
            address: 'Ingresa una dirección válida',
            dob: 'Ingresa una fecha de nacimiento válida',
            age: 'Debe ser mayor de 18 años',
            ssnLast4:
                'Ingresa los últimos 4 dígitos del número de seguro social',
            firstName: 'Ingresa el nombre',
            lastName: 'Ingresa los apellidos',
            noDefaultDepositAccountOrDebitCardAvailable:
                'Por favor agrega una cuenta bancaria para depósitos o una tarjeta de débito',
            validationAmounts:
                'Los montos de validación que ingresaste son incorrectos. Verifica tu cuenta de banco e intenta de nuevo.',
        },
    },
    addPersonalBankAccountPage: {
        enterPassword: 'Escribe tu contraseña de Expensify',
        alreadyAdded: 'Esta cuenta ya ha sido agregada.',
        chooseAccountLabel: 'Cuenta',
        successTitle: '¡Cuenta bancaria personal añadida!',
        successMessage:
            'Enhorabuena, tu cuenta bancaria está lista para recibir reembolsos.',
    },
    attachmentView: {
        unknownFilename: 'Archivo desconocido',
        passwordRequired: 'Por favor introduce tu contraseña',
        passwordIncorrect: 'Contraseña incorrecta. Por favor intenta de nuevo.',
        failedToLoadPDF: 'Hubo un error al intentar cargar el PDF.',
        pdfPasswordForm: {
            title: 'PDF protegido con contraseña',
            infoText: 'Este PDF esta protegido con contraseña.',
            beforeLinkText: 'Por favor',
            linkText: 'introduce la contraseña',
            afterLinkText: 'para verlo.',
            formLabel: 'Ver PDF',
        },
    },
    messages: {
        errorMessageInvalidPhone: `Por favor, introduce un número de teléfono válido sin paréntesis o guiones. Si reside fuera de Estados Unidos, por favor incluye el prefijo internacional (p. ej. ${CONST.EXAMPLE_PHONE_NUMBER}).`,
    },
    onfidoStep: {
        acceptTerms:
            'Al continuar con la solicitud para activar su billetera Expensify, confirma que ha leído, comprende y acepta ',
        facialScan: 'Política y lanzamiento de la exploración facial de Onfido',
        tryAgain: 'Intentar otra vez',
        verifyIdentity: 'Verificar identidad',
        genericError:
            'Hubo un error al procesar este paso. Inténtalo de nuevo.',
        cameraPermissionsNotGranted:
            'No has habilitado los permisos para acceder a la cámara',
        cameraRequestMessage:
            'No has habilitado los permisos para acceder a la cámara. Necesitamos acceso para completar la verificaciôn.',
        originalDocumentNeeded:
            'Por favor, sube una imagen original de tu identificación en lugar de una captura de pantalla o imagen escaneada.',
        documentNeedsBetterQuality:
            'Parece que tu identificación esta dañado o le faltan características de seguridad. Por favor, sube una imagen de tu documento sin daños y que se vea completamente.',
        imageNeedsBetterQuality:
            'Hay un problema con la calidad de la imagen de tu identificación. Por favor, sube una nueva imagen donde el identificación se vea con claridad.',
        selfieIssue:
            'Hay un problema con tu selfie/video. Por favor, sube un nuevo selfie/video grabado en el momento',
        selfieNotMatching:
            'Tu selfie/video no concuerda con tu identificación. Por favor, sube un nuevo selfie/video donde se vea tu cara con claridad.',
        selfieNotLive:
            'Tu selfie/video no parece ser un selfie/video en vivo. Por favor, sube un selfie/video a tiempo real.',
    },
    additionalDetailsStep: {
        headerTitle: 'Detalles adicionales',
        helpText:
            'Necesitamos confirmar la siguiente información antes de que podamos procesar este pago.',
        helpTextIdologyQuestions:
            'Tenemos que preguntarte unas preguntas mas para terminar de verificar tu identidad',
        helpLink: 'Obtenga más información sobre por qué necesitamos esto.',
        legalFirstNameLabel: 'Primer nombre legal',
        legalMiddleNameLabel: 'Segundo nombre legal',
        legalLastNameLabel: 'Apellidos legales',
        selectAnswer: 'Selecciona una respuesta.',
        ssnFull9Error: 'Por favor escribe los 9 dígitos de un SSN válido',
        needSSNFull9:
            'Estamos teniendo problemas para verificar su SSN. Ingresa los 9 dígitos del SSN.',
        weCouldNotVerify: 'No se pudo verificar',
        pleaseFixIt: 'Corrije esta información antes de continuar.',
        failedKYCTextBefore:
            'No se pudo verificar correctamente su identidad. Vuelva a intentarlo más tarde y comuníquese con ',
        failedKYCTextAfter: ' si tiene alguna pregunta.',
    },
    termsStep: {
        headerTitle: 'Condiciones y tarifas',
        haveReadAndAgree: 'He leído y acepto recibir ',
        electronicDisclosures: 'divulgaciones electrónicas',
        agreeToThe: 'Estoy de acuerdo con la ',
        walletAgreement: 'Acuerdo de billetera',
        enablePayments: 'Habilitar pagos',
        feeAmountZero: '$0',
        monthlyFee: 'Cuota mensual',
        inactivity: 'Inactividad',
        electronicFundsInstantFee: '1.5%',
        noOverdraftOrCredit: 'Sin función de sobregiro / crédito',
        electronicFundsWithdrawal: 'Retiro electrónico de fondos',
        standard: 'Estándar',
        shortTermsForm: {
            expensifyPaymentsAccount:
                'La billetera Expensify es emitida por The Bancorp Bank.',
            perPurchase: 'Por compra',
            atmWithdrawal: 'Retiro de cajero automático',
            cashReload: 'Recarga de efectivo',
            inNetwork: 'en la red',
            outOfNetwork: 'fuera de la red',
            atmBalanceInquiry: 'Consulta de saldo de cajero automático',
            inOrOutOfNetwork: '(dentro o fuera de la red)',
            customerService: 'Servicio al cliente',
            automatedOrLive: '(agente automatizado o en vivo)',
            afterTwelveMonths: '(después de 12 meses sin transacciones)',
            weChargeOneFee: 'Cobramos un tipo de tarifa.',
            fdicInsurance:
                'Sus fondos son elegibles para el seguro de la FDIC.',
            generalInfo:
                'Para obtener información general sobre cuentas prepagas, visite',
            conditionsDetails:
                'Encuentra detalles y condiciones para todas las tarifas y servicios visitando',
            conditionsPhone: 'o llamando al +1 833-400-0904.',
            instant: '(instantáneo)',
            electronicFundsInstantFeeMin: '(mínimo $0.25)',
        },
        longTermsForm: {
            listOfAllFees:
                'Una lista de todas las tarifas de la billetera Expensify',
            typeOfFeeHeader: 'Tipo de tarifa',
            feeAmountHeader: 'Importe de la tarifa',
            moreDetailsHeader: 'Más detalles',
            openingAccountTitle: 'Abrir una cuenta',
            openingAccountDetails: 'No hay tarifa para abrir una cuenta.',
            monthlyFeeDetails: 'No hay tarifa mensual.',
            customerServiceTitle: 'Servicio al cliente',
            customerServiceDetails: 'No hay tarifas de servicio al cliente.',
            inactivityDetails: 'No hay tarifa de inactividad.',
            sendingFundsTitle: 'Enviar fondos a otro titular de cuenta',
            sendingFundsDetails:
                'No se aplica ningún cargo por enviar fondos a otro titular de cuenta utilizando su ' +
                'saldo cuenta bancaria o tarjeta de débito',
            electronicFundsStandardDetails:
                'No hay cargo por transferir fondos desde su billetera Expensify ' +
                'a su cuenta bancaria utilizando la opción estándar. Esta transferencia generalmente se completa en' +
                '1-3 negocios días.',
            electronicFundsInstantDetails:
                'Hay una tarifa para transferir fondos desde su billetera Expensify a ' +
                'su tarjeta de débito vinculada utilizando la opción de transferencia instantánea. Esta transferencia ' +
                'generalmente se completa dentro de varios minutos. La tarifa es el 1.5% del monto de la ' +
                'transferencia (con una tarifa mínima de $ 0.25). ',
            fdicInsuranceBancorp:
                'Sus fondos son elegibles para el seguro de la FDIC. Sus fondos se mantendrán en o ' +
                'transferido a The Bancorp Bank, una institución asegurada por la FDIC. Una vez allí, sus fondos ' +
                'están asegurados a $ 250,000 por la FDIC en caso de que The Bancorp Bank quiebre. Ver',
            fdicInsuranceBancorp2: 'para detalles.',
            contactExpensifyPayments:
                'Comuníquese con Expensify Payments llamando al + 1833-400-0904, por correo' +
                'electrónico a',
            contactExpensifyPayments2: 'o inicie sesión en',
            generalInformation:
                'Para obtener información general sobre cuentas prepagas, visite',
            generalInformation2:
                'Si tiene una queja sobre una cuenta prepaga, llame al Consumer Financial Oficina de ' +
                'Protección al 1-855-411-2372 o visite',
            printerFriendlyView: 'Ver versión para imprimir',
            automated: 'Automatizado',
            liveAgent: 'Agente en vivo',
            instant: 'Instantáneo',
            electronicFundsInstantFeeMin: 'Mínimo $0.25',
        },
    },
    activateStep: {
        headerTitle: 'Habilitar pagos',
        activatedTitle: '¡Billetera  activada!',
        activatedMessage:
            'Felicidades, tu Billetera está configurada y lista para hacer pagos.',
        checkBackLaterTitle: 'Un momento...',
        checkBackLaterMessage:
            'Todavía estamos revisando tu información. Por favor, vuelva más tarde.',
        continueToPayment: 'Continuar al pago',
        continueToTransfer: 'Continuar a la transferencia',
    },
    companyStep: {
        headerTitle: 'Información de la empresa',
        subtitle:
            '¡Ya casi estamos! Por motivos de seguridad, necesitamos confirmar la siguiente información:',
        legalBusinessName: 'Nombre comercial legal',
        companyWebsite: 'Página web de la empresa',
        taxIDNumber: 'Número de identificación fiscal',
        taxIDNumberPlaceholder: '9 dígitos',
        companyType: 'Tipo de empresa',
        incorporationDate: 'Fecha de incorporación',
        incorporationState: 'Estado de incorporación',
        industryClassificationCode: 'Código de clasificación industrial',
        confirmCompanyIsNot: 'Confirmo que esta empresa no está en el',
        listOfRestrictedBusinesses: 'lista de negocios restringidos',
        incorporationDatePlaceholder: 'Fecha de inicio (aaaa-mm-dd)',
        incorporationTypes: {
            LLC: 'LLC',
            CORPORATION: 'Corp',
            PARTNERSHIP: 'Sociedad',
            COOPERATIVE: 'Cooperativa',
            SOLE_PROPRIETORSHIP: 'Propietario único',
            OTHER: 'Otra',
        },
    },
    requestorStep: {
        headerTitle: 'Información personal',
        subtitle: 'Dé más información sobre tí.',
        learnMore: 'Más información',
        isMyDataSafe: '¿Están seguros mis datos?',
        onFidoConditions:
            'Al continuar con la solicitud de añadir esta cuenta bancaria, confirma que ha leído, entiende y acepta ',
        isControllingOfficer:
            'Estoy autorizado a utilizar la cuenta bancaria de mi compañía para gastos de empresa',
        isControllingOfficerError:
            'Debe ser un oficial controlador con autorización para operar la cuenta bancaria de la compañía',
    },
    validationStep: {
        headerTitle: 'Validar cuenta bancaria',
        buttonText: 'Finalizar configuración',
        maxAttemptsReached:
            'Se ha inhabilitado la validación de esta cuenta bancaria, debido a demasiados intentos incorrectos.',
        description:
            'Uno o dos días después de agregar su cuenta a Expensify, enviamos tres (3) transacciones a su cuenta. Tienen una línea comercial como "Expensify, Inc. Validation".',
        descriptionCTA:
            'Ingresa el monto de cada transacción en los campos a continuación. Ejemplo: 1.51.',
        reviewingInfo:
            '¡Gracias! Estamos revisando tu información y nos comunicaremos contigo en breve. Consulte su chat con Concierge ',
        forNextSteps:
            ' para conocer los próximos pasos para terminar de configurar su cuenta bancaria.',
        letsChatCTA: 'Sí, vamos a chatear',
        letsChatText:
            'Gracias. Necesitamos tu ayuda para verificar la información, pero podemos hacerlo rápidamente a través del chat. ¿Estás listo?',
        letsChatTitle: '¡Vamos a chatear!',
        enable2FATitle:
            'Evita fraudes, activa la autenticación de dos factores!',
        enable2FAText:
            'Tu seguridad es importante para nosotros, por favor configura ahora la autenticación de dos factores. Eso nos permitirá disputar las transacciones de la Tarjeta Expensify y reducirá tu riesgo de fraude.',
        secureYourAccount: 'Asegura tu cuenta',
    },
    beneficialOwnersStep: {
        additionalInformation: 'Información adicional',
        checkAllThatApply:
            'Marca todos los que apliquen, en caso de que ninguno aplique dejar en blanco.',
        iOwnMoreThan25Percent: 'Soy dueño de mas de 25% de ',
        someoneOwnsMoreThan25Percent: 'Otra persona es dueña de mas de 25% de ',
        additionalOwner: 'Beneficiario efectivo adicional',
        removeOwner: 'Eliminar este beneficiario efectivo',
        addAnotherIndividual:
            'Agregar otra persona que es dueña de mas de 25% de ',
        agreement: 'Acuerdo:',
        termsAndConditions: 'Términos y condiciones',
        certifyTrueAndAccurate: 'Certifico que la información dada es correcta',
        error: {
            certify:
                'Debe certificar que la información es verdadera y precisa',
        },
    },
    reimbursementAccountLoadingAnimation: {
        oneMoment: 'Un Momento',
        explanationLine:
            'Estamos verificando tu información y podrás continuar con los siguientes pasos en unos momentos.',
    },
    session: {
        offlineMessageRetry:
            'Parece que estás desconectado. Por favor chequea tu conexión e inténtalo otra vez',
    },
    workspace: {
        common: {
            card: 'Emitir tarjetas',
            workspace: 'Espacio de trabajo',
            edit: 'Editar espacio de trabajo',
            delete: 'Eliminar espacio de trabajo',
            settings: 'Configuración general',
            reimburse: 'Reembolsar gastos',
            bills: 'Pagar facturas',
            invoices: 'Enviar facturas',
            travel: 'Reservar viaje',
            members: 'Gestionar miembros',
            bankAccount: 'Conectar cuenta bancaria',
            testTransactions: 'Transacciones de prueba',
            issueAndManageCards: 'Emitir y gestionar tarjetas',
            reconcileCards: 'Reconciliar tarjetas',
            settlementFrequency: 'Frecuencia de liquidación',
            growlMessageOnDelete: 'Espacio de trabajo eliminado',
            deleteConfirmation:
                '¿Estás seguro de que quieres eliminar este espacio de trabajo?',
            growlMessageOnDeleteError:
                'No se puede eliminar el espacio de trabajo porque tiene informes que están siendo procesados',
            unavailable: 'Espacio de trabajo no disponible',
        },
        emptyWorkspace: {
            title: 'Crear un nuevo espacio de trabajo',
            subtitle:
                'En los espacios de trabajo es donde puedes chatear con tu equipo, reembolsar gastos, emitir tarjetas, enviar y pagar facturas y mas — todo en un mismo lugar',
        },
        new: {
            newWorkspace: 'Nuevo espacio de trabajo',
            getTheExpensifyCardAndMore: 'Consigue la Tarjeta Expensify y más',
        },
        people: {
            genericFailureMessage:
                'Se ha producido un error al intentar eliminar a un usuario del espacio de trabajo. Por favor inténtalo más tarde.',
            removeMembersPrompt:
                '¿Estás seguro que quieres eliminar a los miembros seleccionados de tu espacio de trabajo?',
            removeMembersTitle: 'Eliminar miembros',
            selectAll: 'Seleccionar todo',
            error: {
                genericAdd:
                    'Ha ocurrido un problema al agregar el miembro al espacio de trabajo',
                cannotRemove:
                    'No puedes eliminarte ni a ti mismo ni al dueño del espacio de trabajo.',
                genericRemove:
                    'Ha ocurrido un problema al eliminar al miembro del espacio de trabajo.',
            },
        },
        card: {
            header: 'Desbloquea Tarjetas Expensify gratis',
            headerWithEcard: '¡Tus tarjetas están listas!',
            noVBACopy:
                'Conecte una cuenta bancaria para emitir tarjetas Expensify a los miembros de su espacio de trabajo y acceda a estos increíbles beneficios y más:',
            VBANoECardCopy:
                'Agrega tu correo electrónico de trabajo para emitir Tarjetas Expensify ilimitadas para los miembros de tu espacio de trabajo y acceder a todas estas increíbles ventajas:',
            VBAWithECardCopy: 'Acceda a estos increíbles beneficios y más:',
            benefit1: 'Hasta un 4% de devolución en tus gastos',
            benefit2: 'Tarjetas digitales y físicas',
            benefit3: 'Sin responsabilidad personal',
            benefit4: 'Límites personalizables',
            addWorkEmail: 'Añadir correo electrónico de trabajo',
            checkingDomain:
                '¡Un momento! Estamos todavía trabajando para habilitar tu Tarjeta Expensify. Vuelve aquí en unos minutos.',
        },
        reimburse: {
            captureReceipts: 'Captura recibos',
            fastReimbursementsHappyMembers:
                '¡Reembolsos rápidos = miembros felices!',
            kilometers: 'Kilómetros',
            miles: 'Millas',
            viewAllReceipts: 'Ver todos los recibos',
            reimburseReceipts: 'Reembolsar recibos',
            trackDistance: 'Medir distancia',
            trackDistanceCopy:
                'Configura la tarifa y unidad usadas para medir distancias.',
            trackDistanceRate: 'Tarifa',
            trackDistanceUnit: 'Unidad',
            unlockNextDayReimbursements: 'Desbloquea reembolsos diarios',
            captureNoVBACopyBeforeEmail:
                'Pide a los miembros de tu espacio de trabajo que envíen recibos a ',
            captureNoVBACopyAfterEmail:
                ' y descarga la App de Expensify para controlar tus gastos en efectivo sobre la marcha.',
            unlockNoVBACopy:
                'Conecta una cuenta bancaria para reembolsar online a los miembros de tu espacio de trabajo.',
            fastReimbursementsVBACopy:
                '¡Todo listo para reembolsar recibos desde tu cuenta bancaria!',
            updateCustomUnitError:
                'Los cambios no han podido ser guardados. El espacio de trabajo ha sido modificado mientras estabas desconectado, por favor inténtalo de nuevo.',
        },
        bills: {
            manageYourBills: 'Gestiona tus facturas',
            askYourVendorsBeforeEmail:
                'Pide a tus proveedores que envíen sus facturas a ',
            askYourVendorsAfterEmail:
                ' y las escanearemos para que las pagues.',
            viewAllBills: 'Ver facturas recibidas',
            unlockOnlineBillPayment: 'Desbloquea el pago de facturas online',
            unlockNoVBACopy:
                '¡Conecta tu cuenta bancaria para pagar tus facturas online de manera gratuita!',
            hassleFreeBills: '¡Facturas sin complicaciones!',
            VBACopy:
                '¡Todo listo para realizar pagos desde tu cuenta bancaria!',
        },
        invoices: {
            invoiceClientsAndCustomers: 'Emite facturas a tus clientes',
            invoiceFirstSectionCopy:
                'Envía facturas detalladas y profesionales directamente a tus clientes desde la app de Expensify.',
            viewAllInvoices: 'Ver facturas emitidas',
            unlockOnlineInvoiceCollection:
                'Desbloquea el cobro de facturas online',
            unlockNoVBACopy:
                'Conecta tu cuenta bancaria para recibir pagos online de facturas - por transferencia o con tarjeta - directamente en tu cuenta.',
            moneyBackInAFlash: '¡Tu dinero de vuelta en un momento!',
            unlockVBACopy:
                '¡Todo listo para recibir pagos por transferencia o con tarjeta!',
            viewUnpaidInvoices: 'Ver facturas emitidas pendientes',
            sendInvoice: 'Enviar factura',
        },
        travel: {
            unlockConciergeBookingTravel:
                'Desbloquea la reserva de viajes con Concierge',
            noVBACopy:
                'Conecta tu cuenta bancaria para permitir a los miembros de tu espacio de trabajo reservar sus vuelos, hoteles y coches empezando una conversación con Concierge.',
            packYourBags: '¡Haz las maletas!',
            VBACopy:
                '¡Miembros con la tarjeta Expensify pueden hablar con Concierge para reservar viajes!',
            bookTravelWithConcierge: 'Reserva viajes con Concierge',
        },
        invite: {
            invitePeople: 'Invitar nuevos miembros',
            personalMessagePrompt: 'Agregar un mensaje personal (Opcional)',
            genericFailureMessage:
                'Se produjo un error al invitar al usuario al espacio de trabajo. Vuelva a intentarlo..',
            welcomeNote: ({workspaceName}) =>
                `¡Has sido invitado a ${workspaceName}! Descargue la aplicación móvil Expensify en use.expensify.com/download para comenzar a rastrear sus gastos.`,
            pleaseEnterValidLogin: `Asegúrese de que el correo electrónico o el número de teléfono sean válidos (p. ej. ${CONST.EXAMPLE_PHONE_NUMBER}).`,
        },
        editor: {
            nameInputLabel: 'Nombre',
            nameInputHelpText:
                'Este es el nombre que verás en tu espacio de trabajo.',
            nameIsRequiredError:
                'Debes definir un nombre para tu espacio de trabajo.',
            currencyInputLabel: 'Moneda por defecto',
            currencyInputHelpText:
                'Todas los gastos en este espacio de trabajo serán convertidos a esta moneda.',
            save: 'Guardar',
            genericFailureMessage:
                'Se produjo un error al guardar el espacio de trabajo. Por favor, inténtalo de nuevo.',
            avatarUploadFailureMessage:
                'No se pudo subir el avatar. Por favor, inténtalo de nuevo.',
        },
        bankAccount: {
            continueWithSetup: 'Continuar con la configuración',
            youreAlmostDone:
                'Casi has acabado de configurar tu cuenta bancaria, que te permitirá emitir tarjetas corporativas, reembolsar gastos y cobrar pagar facturas, todo desde la misma cuenta bancaria.',
            streamlinePayments: 'Optimiza pagos',
            oneMoreThing: '¡Una cosa más!',
            allSet: '¡Todo listo!',
            accountDescriptionNoCards:
                'Esta cuenta bancaria se utilizará para reembolsar gastos y cobrar y pagar facturas, todo desde la misma cuenta.\n\nPor favor, añade un correo electrónico de trabajo como tu nombre de usuario secundario para activar la Tarjeta Expensify.',
            accountDescriptionWithCards:
                'Esta cuenta bancaria se utilizará para emitir tarjetas corporativas, reembolsar gastos y cobrar y pagar facturas, todo desde la misma cuenta.',
            addWorkEmail: 'Añadir correo electrónico de trabajo',
            letsFinishInChat: '¡Continuemos en el chat!',
            almostDone: '¡Casi listo!',
            disconnectBankAccount: 'Desconectar cuenta bancaria',
            noLetsStartOver: 'No, empecemos de nuevo',
            startOver: 'Empezar de nuevo',
            yesDisconnectMyBankAccount: 'Sí, desconecta mi cuenta bancaria',
            yesStartOver: 'Sí, empezar de nuevo',
            disconnectYour: 'Desconecta tu cuenta bancaria de ',
            bankAccountAnyTransactions:
                '. Los reembolsos pendientes serán completados sin problemas.',
            clearProgress:
                'Empezar de nuevo descartará lo completado hasta ahora.',
            areYouSure: '¿Estás seguro?',
        },
    },
    getAssistancePage: {
        title: 'Obtener ayuda',
        subtitle: '¡Estamos aquí para ayudarte!',
        description: 'Elige una de las siguientes opciones:',
        chatWithConcierge: 'Chatear con Concierge',
        scheduleSetupCall: 'Concertar una llamada',
        questionMarkButtonTooltip: 'Obtén ayuda de nuestro equipo',
        exploreHelpDocs: 'Explorar la documentación de ayuda',
    },
    emojiPicker: {
        skinTonePickerLabel: 'Elige el tono de piel por defecto',
        headers: {
            frequentlyUsed: 'Usado frecuentemente',
            smileysAndEmotion: 'Emoticonos y emociones',
            peopleAndBody: 'Personas y Cuerpo',
            animalsAndNature: 'Animales y naturaleza',
            foodAndDrink: 'Alimentos y bebidas',
            travelAndPlaces: 'Viajes y lugares',
            activities: 'Actividades',
            objects: 'Objetos',
            symbols: 'Símbolos',
            flags: 'Banderas',
        },
    },
    newRoomPage: {
        newRoom: 'Nueva sala de chat',
        roomName: 'Nombre de la sala',
        visibility: 'Visibilidad',
        restrictedDescription:
            'Sólo las personas en tu espacio de trabajo pueden encontrar esta sala',
        privateDescription:
            'Sólo las personas que están invitadas a esta sala pueden encontrarla',
        publicDescription: 'Cualquier persona puede unirse a esta sala',
        createRoom: 'Crea una sala de chat',
        roomAlreadyExistsError: 'Ya existe una sala con este nombre',
        roomNameReservedError:
            'Una sala en este espacio de trabajo ya usa este nombre',
        roomNameInvalidError:
            'Los nombres de las salas solo pueden contener minúsculas, números y guiones',
        pleaseEnterRoomName: 'Por favor, escribe el nombre de una sala',
        pleaseSelectWorkspace: 'Por favor, selecciona un espacio de trabajo',
        renamedRoomAction: ({oldName, newName}) =>
            ` cambió el nombre de la sala de ${oldName} a ${newName}`,
        social: 'social',
        selectAWorkspace: 'Seleccionar un espacio de trabajo',
        growlMessageOnRenameError:
            'No se pudo cambiar el nombre del espacio de trabajo, por favor, comprueba tu conexión e inténtalo de nuevo.',
        visibilityOptions: {
            restricted: 'Restringida',
            private: 'Privada',
            public: 'Público',
            public_announce: 'Anuncio Público',
        },
    },
    statementPage: {
        generatingPDF:
            'Estamos generando tu PDF ahora mismo. ¡Por favor, vuelve más tarde!',
    },
    keyboardShortcutModal: {
        title: 'Atajos de teclado',
        subtitle: 'Ahorra tiempo con estos atajos de teclado:',
        shortcuts: {
            openShortcutDialog:
                'Abre el cuadro de diálogo de métodos abreviados de teclado',
            escape: 'Diálogos de escape',
            search: 'Abrir diálogo de búsqueda',
            newGroup: 'Nueva pantalla de grupo',
            copy: 'Copiar comentario',
        },
    },
    guides: {
        screenShare: 'Compartir pantalla',
        screenShareRequest:
            'Expensify te está invitando a compartir la pantalla',
    },
    genericErrorPage: {
        title: '¡Uh-oh, algo salió mal!',
        body: {
            helpTextMobile:
                'Intenta cerrar y volver a abrir la aplicación o cambiar a la',
            helpTextWeb: 'web.',
            helpTextConcierge: 'Si el problema persiste, comunícate con',
        },
        refresh: 'Actualizar',
    },
    fileDownload: {
        success: {
            title: '!Descargado!',
            message: 'Archivo descargado correctamente',
        },
        generalError: {
            title: 'Error en la descarga',
            message: 'No se puede descargar el archivo adjunto',
        },
        permissionError: {
            title: 'Permiso para acceder al almacenamiento',
            message:
                'Expensify no puede guardar los archivos adjuntos sin permiso para acceder al almacenamiento. Haz click en Configuración para actualizar los permisos.',
        },
    },
    desktopApplicationMenu: {
        aboutExpensify: 'Sobre Nuevo Expensify',
        updateExpensify: 'Actualizar Nuevo Expensify',
        checkForUpdates: 'Buscar actualizaciones',
        history: 'Historial',
    },
    historyMenu: {
        forward: 'Adelante',
        back: 'Atrás',
    },
    checkForUpdatesModal: {
        available: {
            title: 'Actualización disponible',
            message:
                'La nueva versión estará disponible dentro de poco. Te notificaremos cuando esté lista.',
            soundsGood: 'Suena bien',
        },
        notAvailable: {
            title: 'Actualización no disponible',
            message:
                'No existe ninguna actualización disponible! Inténtalo de nuevo más tarde.',
            okay: 'Vale',
        },
        error: {
            title: 'Comprobación fallida',
            message:
                'No hemos podido comprobar si existe una actualización. Inténtalo de nuevo más tarde!',
        },
    },
    report: {
        genericAddCommentFailureMessage:
            'Error inesperado al agregar el comentario, por favor inténtalo más tarde',
    },
    chronos: {
        oooEventSummaryFullDay: ({summary, dayCount, date}) =>
            `${summary} por ${dayCount} ${
                dayCount === 1 ? 'día' : 'días'
            } hasta el ${date}`,
        oooEventSummaryPartialDay: ({summary, timePeriod, date}) =>
            `${summary} de ${timePeriod} del ${date}`,
    },
    footer: {
        features: 'Características',
        expenseManagement: 'Gestión de Gastos',
        spendManagement: 'Control de Gastos',
        expenseReports: 'Informes de Gastos',
        companyCreditCard: 'Tarjeta de Crédito de Empresa',
        receiptScanningApp: 'Aplicación de Escaneado de Recibos',
        billPay: 'Pago de Facturas',
        invoicing: 'Facturación',
        CPACard: 'Tarjeta Para Contables',
        payroll: 'Nómina',
        travel: 'Viajes',
        resources: 'Recursos',
        expensifyApproved: 'ExpensifyApproved!',
        pressKit: 'Kit de Prensa',
        support: 'Soporte',
        expensifyHelp: 'ExpensifyHelp',
        community: 'Comunidad',
        privacy: 'Privacidad',
        learnMore: 'Más Información',
        aboutExpensify: 'Acerca de Expensify',
        blog: 'Blog',
        jobs: 'Empleo',
        expensifyOrg: 'Expensify.org',
        investorRelations: 'Relaciones Con Los Inversores',
        getStarted: 'Comenzar',
        createAccount: 'Crear Una Cuenta Nueva',
        logIn: 'Conectarse',
    },
    allStates: {
        AK: {
            stateISO: 'AK',
            stateName: 'Alaska',
        },
        AL: {
            stateISO: 'AL',
            stateName: 'Alabama',
        },
        AR: {
            stateISO: 'AR',
            stateName: 'Arkansas',
        },
        AZ: {
            stateISO: 'AZ',
            stateName: 'Arizona',
        },
        CA: {
            stateISO: 'CA',
            stateName: 'California',
        },
        CO: {
            stateISO: 'CO',
            stateName: 'Colorado',
        },
        CT: {
            stateISO: 'CT',
            stateName: 'Connecticut',
        },
        DE: {
            stateISO: 'DE',
            stateName: 'Delaware',
        },
        FL: {
            stateISO: 'FL',
            stateName: 'Florida',
        },
        GA: {
            stateISO: 'GA',
            stateName: 'Georgia',
        },
        HI: {
            stateISO: 'HI',
            stateName: 'Hawái',
        },
        IA: {
            stateISO: 'IA',
            stateName: 'Iowa',
        },
        ID: {
            stateISO: 'ID',
            stateName: 'Idaho',
        },
        IL: {
            stateISO: 'IL',
            stateName: 'Illinois',
        },
        IN: {
            stateISO: 'IN',
            stateName: 'Indiana',
        },
        KS: {
            stateISO: 'KS',
            stateName: 'Kansas',
        },
        KY: {
            stateISO: 'KY',
            stateName: 'Kentucky',
        },
        LA: {
            stateISO: 'LA',
            stateName: 'Luisiana',
        },
        MA: {
            stateISO: 'MA',
            stateName: 'Massachusetts',
        },
        MD: {
            stateISO: 'MD',
            stateName: 'Maryland',
        },
        ME: {
            stateISO: 'ME',
            stateName: 'Maine',
        },
        MI: {
            stateISO: 'MI',
            stateName: 'Míchigan',
        },
        MN: {
            stateISO: 'MN',
            stateName: 'Minnesota',
        },
        MO: {
            stateISO: 'MO',
            stateName: 'Misuri',
        },
        MS: {
            stateISO: 'MS',
            stateName: 'Misisipi',
        },
        MT: {
            stateISO: 'MT',
            stateName: 'Montana',
        },
        NC: {
            stateISO: 'NC',
            stateName: 'Carolina del Norte',
        },
        ND: {
            stateISO: 'ND',
            stateName: 'Dakota del Norte',
        },
        NE: {
            stateISO: 'NE',
            stateName: 'Nebraska',
        },
        NH: {
            stateISO: 'NH',
            stateName: 'Nuevo Hampshire',
        },
        NJ: {
            stateISO: 'NJ',
            stateName: 'Nueva Jersey',
        },
        NM: {
            stateISO: 'NM',
            stateName: 'Nuevo México',
        },
        NV: {
            stateISO: 'NV',
            stateName: 'Nevada',
        },
        NY: {
            stateISO: 'NY',
            stateName: 'Nueva York',
        },
        OH: {
            stateISO: 'OH',
            stateName: 'Ohio',
        },
        OK: {
            stateISO: 'OK',
            stateName: 'Oklahoma',
        },
        OR: {
            stateISO: 'OR',
            stateName: 'Oregón',
        },
        PA: {
            stateISO: 'PA',
            stateName: 'Pensilvania',
        },
        PR: {
            stateISO: 'PR',
            stateName: 'Puerto Rico',
        },
        RI: {
            stateISO: 'RI',
            stateName: 'Rhode Island',
        },
        SC: {
            stateISO: 'SC',
            stateName: 'Carolina del Sur',
        },
        SD: {
            stateISO: 'SD',
            stateName: 'Dakota del Sur',
        },
        TN: {
            stateISO: 'TN',
            stateName: 'Tennessee',
        },
        TX: {
            stateISO: 'TX',
            stateName: 'Texas',
        },
        UT: {
            stateISO: 'UT',
            stateName: 'Utah',
        },
        VA: {
            stateISO: 'VA',
            stateName: 'Virginia',
        },
        VT: {
            stateISO: 'VT',
            stateName: 'Vermont',
        },
        WA: {
            stateISO: 'WA',
            stateName: 'Washington',
        },
        WI: {
            stateISO: 'WI',
            stateName: 'Wisconsin',
        },
        WV: {
            stateISO: 'WV',
            stateName: 'Virginia Occidental',
        },
        WY: {
            stateISO: 'WY',
            stateName: 'Wyoming',
        },
        DC: {
            stateISO: 'DC',
            stateName: 'District Of Columbia',
        },
    },
    allCountries: {
        AC: 'Isla Ascensión',
        AD: 'Andorra',
        AE: 'Emiratos Árabes Unidos',
        AF: 'Afganistán',
        AG: 'Antigua y Barbuda',
        AI: 'Anguila',
        AL: 'Albania',
        AM: 'Armenia',
        AO: 'Angola',
        AQ: 'Antártida',
        AR: 'Argentina',
        AS: 'Samoa Americana',
        AT: 'Austria',
        AU: 'Australia',
        AW: 'Aruba',
        AX: 'Islas de Åland',
        AZ: 'Azerbaiyán',
        BA: 'Bosnia y Herzegovina',
        BB: 'Barbados',
        BD: 'Bangladesh',
        BE: 'Bélgica',
        BF: 'Burkina Faso',
        BG: 'Bulgaria',
        BH: 'Bahrein',
        BI: 'Burundi',
        BJ: 'Benin',
        BL: 'San Bartolomé',
        BM: 'Islas Bermudas',
        BN: 'Brunéi',
        BO: 'Bolivia',
        BQ: 'Bonaire, San Eustaquio y Saba',
        BR: 'Brazil',
        BS: 'Bahamas',
        BT: 'Bhután',
        BW: 'Botsuana',
        BY: 'Bielorrusia',
        BZ: 'Belice',
        CA: 'Canadá',
        CC: 'Islas Cocos (Keeling)',
        CD: 'República Democrática del Congo',
        CF: 'República Centroafricana',
        CG: 'República del Congo',
        CH: 'Suiza',
        CI: 'Costa de Marfil',
        CK: 'Islas Cook',
        CL: 'Chile',
        CM: 'Camerún',
        CN: 'China',
        CO: 'Colombia',
        CR: 'Costa Rica',
        CU: 'Cuba',
        CV: 'Cabo Verde',
        CW: 'Curazao',
        CX: 'Isla de Navidad',
        CY: 'Chipre',
        CZ: 'República Checa',
        DE: 'Alemania',
        DG: 'Diego García',
        DJ: 'Yibuti',
        DK: 'Dinamarca',
        DM: 'Dominica',
        DO: 'República Dominicana',
        DZ: 'Argelia',
        EA: 'Ceuta y Melilla',
        EC: 'Ecuador',
        EE: 'Estonia',
        EG: 'Egipto',
        EH: 'Sahara Occidental',
        ER: 'Eritrea',
        ES: 'España',
        ET: 'Etiopía',
        EZ: 'Eurozona',
        FI: 'Finlandia',
        FJ: 'Fiyi',
        FK: 'Islas Malvinas',
        FM: 'Micronesia',
        FO: 'Islas Feroe',
        FR: 'Francia',
        GA: 'Gabón',
        GB: 'Reino Unido',
        GD: 'Granada',
        GE: 'Georgia',
        GF: 'Guayana Francesa',
        GG: 'Guernsey',
        GH: 'Ghana',
        GI: 'Gibraltar',
        GL: 'Groenlandia',
        GM: 'Gambia',
        GN: 'Guinea',
        GP: 'Guadeloupe',
        GQ: 'Guinea Ecuatorial',
        GR: 'Greece',
        GS: 'Islas Georgias del Sur y Sandwich del Sur',
        GT: 'Guatemala',
        GU: 'Guam',
        GW: 'Guinea-Bissau',
        GY: 'Guyana',
        HK: 'Hong Kong',
        HN: 'Honduras',
        HR: 'Croacia',
        HT: 'Haiti',
        HU: 'Hungría',
        IC: 'Islas Canarias',
        ID: 'Indonesia',
        IE: 'Irlanda',
        IL: 'Israel',
        IM: 'Isla de Man',
        IN: 'India',
        IO: 'Territorio Británico del Océano Índico',
        IQ: 'Irak',
        IR: 'Irán',
        IS: 'Islandia',
        IT: 'Italia',
        JE: 'Jersey',
        JM: 'Jamaica',
        JO: 'Jordania',
        JP: 'Japón',
        KE: 'Kenia',
        KG: 'Kirguistán',
        KH: 'Camboya',
        KI: 'Kiribati',
        KM: 'Comoras',
        KN: 'San Cristóbal y Nieves',
        KP: 'Corea del Norte',
        KR: 'Corea del Sur',
        KW: 'Kuwait',
        KY: 'Islas Caimán',
        KZ: 'Kazajistán',
        LA: 'Laos',
        LB: 'Líbano',
        LC: 'Santa Lucía',
        LI: 'Liechtenstein',
        LK: 'Sri Lanka',
        LR: 'Liberia',
        LS: 'Lesoto',
        LT: 'Lituania',
        LU: 'Luxemburgo',
        LV: 'Letonia',
        LY: 'Libia',
        MA: 'Marruecos',
        MC: 'Mónaco',
        MD: 'Moldavia',
        ME: 'Montenegro',
        MF: 'San Martín (Francia)',
        MG: 'Madagascar',
        MH: 'Islas Marshall',
        MK: 'Macedônia',
        ML: 'Mali',
        MM: 'Birmania',
        MN: 'Mongolia',
        MO: 'Macao',
        MP: 'Islas Marianas del Norte',
        MQ: 'Martinica',
        MR: 'Mauritania',
        MS: 'Montserrat',
        MT: 'Malta',
        MU: 'Mauritius',
        MV: 'Islas Maldivas',
        MW: 'Malawi',
        MX: 'México',
        MY: 'Malasia',
        MZ: 'Mozambique',
        NA: 'Namibia',
        NC: 'Nueva Caledonia',
        NE: 'Niger',
        NF: 'Isla Norfolk',
        NG: 'Nigeria',
        NI: 'Nicaragua',
        NL: 'Países Bajos',
        NO: 'Noruega',
        NP: 'Nepal',
        NR: 'Nauru',
        NU: 'Niue',
        NZ: 'Nueva Zealand',
        OM: 'Omán',
        PA: 'Panamá',
        PE: 'Perú',
        PF: 'Polinesia Francesa',
        PG: 'Papúa Nueva Guinea',
        PH: 'Filipinas',
        PK: 'Pakistán',
        PL: 'Polonia',
        PM: 'San Pedro y Miquelón',
        PN: 'Islas Pitcairn',
        PR: 'Puerto Rico',
        PS: 'Palestina',
        PT: 'Portugal',
        PW: 'Palau',
        PY: 'Paraguay',
        QA: 'Qatar',
        RE: 'Reunión',
        RO: 'Rumanía',
        RS: 'Serbia',
        RU: 'Rusia',
        RW: 'Ruanda',
        SA: 'Arabia Saudita',
        SB: 'Islas Salomón',
        SC: 'Seychelles',
        SD: 'Sudán',
        SE: 'Suecia',
        SG: 'Singapur',
        SH: 'Santa Elena',
        SI: 'Eslovenia',
        SJ: 'Svalbard y Jan Mayen',
        SK: 'Eslovaquia',
        SL: 'Sierra Leona',
        SM: 'San Marino',
        SN: 'Senegal',
        SO: 'Somalia',
        SR: 'Surinám',
        SS: 'República de Sudán del Sur',
        ST: 'Santo Tomé y Príncipe',
        SV: 'El Salvador',
        SX: 'Sint Maarten',
        SY: 'Siria',
        SZ: 'Swazilandia',
        TA: 'Tristán de Acuña',
        TC: 'Islas Turcas y Caicos',
        TD: 'Chad',
        TF: 'Territorios Australes y Antárticas Franceses',
        TG: 'Togo',
        TH: 'Tailandia',
        TJ: 'Tayikistán',
        TK: 'Tokelau',
        TL: 'Timor Oriental',
        TM: 'Turkmenistán',
        TN: 'Tunez',
        TO: 'Tonga',
        TR: 'Turquía',
        TT: 'Trinidad y Tobago',
        TV: 'Tuvalu',
        TW: 'Taiwán',
        TZ: 'Tanzania',
        UA: 'Ucrania',
        UG: 'Uganda',
        UM: 'Islas Ultramarinas Menores de Estados Unidos',
        UN: 'Naciones Unidas',
        US: 'Estados Unidos de América',
        UY: 'Uruguay',
        UZ: 'Uzbekistan',
        VA: 'Ciudad del Vaticano',
        VC: 'San Vicente y las Granadinas',
        VE: 'Venezuela',
        VG: 'Islas Vírgenes Británicas',
        VI: 'Islas Vírgenes de los Estados Unidos',
        VN: 'Vietnam',
        VU: 'Vanuatu',
        WF: 'Wallis y Futuna',
        WS: 'Samoa',
        XK: 'Kosovo',
        YE: 'Yemen',
        YT: 'Mayotte',
        ZA: 'Sudáfrica',
        ZM: 'Zambia',
        ZW: 'Zimbabue',
    },
};
