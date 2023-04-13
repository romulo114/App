import {CONST as COMMON_CONST} from 'expensify-common/lib/CONST';
import CONST from '../CONST';

/* eslint-disable max-len */
export default {
    common: {
        cancel: 'Cancel',
        yes: 'Yes',
        no: 'No',
        ok: 'OK',
        attachment: 'Attachment',
        to: 'To',
        optional: 'Optional',
        new: 'New',
        search: 'Search',
        next: 'Next',
        goBack: 'Go back',
        add: 'Add',
        resend: 'Resend',
        save: 'Save',
        saveChanges: 'Save changes',
        password: 'Password',
        magicCode: 'Magic code',
        workspaces: 'Workspaces',
        profile: 'Profile',
        payments: 'Payments',
        preferences: 'Preferences',
        view: 'View',
        not: 'Not',
        signIn: 'Sign in',
        continue: 'Continue',
        firstName: 'First name',
        lastName: 'Last name',
        phone: 'Phone',
        phoneNumber: 'Phone number',
        phoneNumberPlaceholder: '(xxx)xxx-xxxx',
        email: 'Email',
        and: 'and',
        details: 'Details',
        privacy: 'Privacy',
        delete: 'Delete',
        archived: 'archived',
        contacts: 'Contacts',
        recents: 'Recents',
        close: 'Close',
        download: 'Download',
        downloading: 'Downloading',
        pin: 'Pin',
        unPin: 'Unpin',
        back: 'Back',
        saveAndContinue: 'Save & continue',
        settings: 'Settings',
        termsOfService: 'Terms of Service',
        expensifyTermsOfService: 'Expensify Terms of Service',
        members: 'Members',
        invite: 'Invite',
        here: 'here',
        date: 'Date',
        dob: 'Date of birth',
        ssnLast4: 'Last 4 digits of SSN',
        ssnFull9: 'Full 9 digits of SSN',
        addressLine: ({lineNumber}) => `Address line ${lineNumber}`,
        personalAddress: 'Personal address',
        companyAddress: 'Company address',
        noPO: 'PO boxes and mail drop addresses are not allowed',
        city: 'City',
        state: 'State',
        stateOrProvince: 'State / Province',
        country: 'Country',
        zip: 'Zip code',
        zipPostCode: 'Zip / Postcode',
        whatThis: "What's this?",
        iAcceptThe: 'I accept the ',
        remove: 'Remove',
        admin: 'Admin',
        dateFormat: 'YYYY-MM-DD',
        send: 'Send',
        notifications: 'Notifications',
        na: 'N/A',
        noResultsFound: 'No results found',
        timePrefix: "It's",
        conjunctionFor: 'for',
        todayAt: 'Today at',
        tomorrowAt: 'Tomorrow at',
        yesterdayAt: 'Yesterday at',
        conjunctionAt: 'at',
        genericErrorMessage:
            'Oops... something went wrong and your request could not be completed. Please try again later.',
        error: {
            invalidAmount: 'Invalid amount',
            acceptTerms: 'You must accept the Terms of Service to continue',
            phoneNumber: `Please enter a valid phone number, with the country code (e.g. ${CONST.EXAMPLE_PHONE_NUMBER})`,
            fieldRequired: 'This field is required.',
            characterLimit: ({limit}) =>
                `Exceeds the maximum length of ${limit} characters`,
            dateInvalid: 'Please enter a valid date',
            invalidCharacter: 'Invalid character',
        },
        comma: 'comma',
        semicolon: 'semicolon',
        please: 'Please',
        contactUs: 'contact us',
        pleaseEnterEmailOrPhoneNumber: 'Please enter an email or phone number',
        fixTheErrors: 'fix the errors',
        inTheFormBeforeContinuing: 'in the form before continuing',
        confirm: 'Confirm',
        reset: 'Reset',
        done: 'Done',
        more: 'More',
        debitCard: 'Debit card',
        payPalMe: 'PayPal.me',
        bankAccount: 'Bank account',
        join: 'Join',
        decline: 'Decline',
        transferBalance: 'Transfer Balance',
        cantFindAddress: "Can't find your address? ",
        enterManually: 'Enter it manually',
        message: 'Message ',
        leaveRoom: 'Leave room',
        you: 'You',
        your: 'your',
        conciergeHelp: 'Please reach out to Concierge for help.',
        maxParticipantsReached: ({count}) =>
            `You've selected the maximum number (${count}) of participants.`,
        youAppearToBeOffline: 'You appear to be offline.',
        thisFeatureRequiresInternet:
            'This feature requires an active internet connection to be used.',
        areYouSure: 'Are you sure?',
        zipCodeExample: 'e.g. 12345, 12345-1234, 12345 1234',
        websiteExample: 'e.g. https://www.expensify.com',
    },
    attachmentPicker: {
        cameraPermissionRequired: 'Camera access',
        expensifyDoesntHaveAccessToCamera:
            "Expensify can't take photos without access to your camera. Tap Settings to update permissions.",
        attachmentError: 'Attachment error',
        errorWhileSelectingAttachment:
            'An error occurred while selecting an attachment, please try again',
        errorWhileSelectingCorruptedImage:
            'An error occurred while selecting a corrupted attachment, please try another file',
        takePhoto: 'Take photo',
        chooseFromGallery: 'Choose from gallery',
        chooseDocument: 'Choose document',
        attachmentTooLarge: 'Attachment too large',
        sizeExceeded: 'Attachment size is larger than 24 MB limit.',
        attachmentTooSmall: 'Attachment too small',
        sizeNotMet: 'Attachment size must be greater than 240 bytes.',
        wrongFileType: 'Attachment is the wrong type',
        notAllowedExtension: 'Attachments must be one of the following types: ',
    },
    avatarCropModal: {
        title: 'Edit photo',
        description:
            'Drag, zoom, and rotate your image to your preferred specifications',
    },
    composer: {
        noExtensionFoundForMimeType: 'No extension found for mime type',
        problemGettingImageYouPasted:
            'There was a problem getting the image you pasted',
    },
    baseUpdateAppModal: {
        updateApp: 'Update app',
        updatePrompt:
            'A new version of this app is available.\nUpdate now or restart the app at a later time to download the latest changes.',
    },
    deeplinkWrapper: {
        launching: 'Launching Expensify',
        redirectedToDesktopApp: "We've redirected you to the desktop app.",
        youCanAlso: 'You can also',
        openLinkInBrowser: 'open this link in your browser',
    },
    validateCodeModal: {
        successfulSignInTitle: 'Abracadabra,\nyou are signed in!',
        successfulSignInDescription:
            'Head back to your original tab to continue.',
        title: 'Here is your magic code',
        description:
            'Please enter the code using the device\nwhere it was originally requested',
        or: ', or',
        signInHere: 'just sign in here',
    },
    iOUConfirmationList: {
        whoPaid: 'Who paid?',
        whoWasThere: 'Who was there?',
        whatsItFor: "What's it for?",
    },
    iOUCurrencySelection: {
        selectCurrency: 'Select a currency',
        allCurrencies: 'All currencies',
    },
    optionsSelector: {
        nameEmailOrPhoneNumber: 'Name, email, or phone number',
    },
    videoChatButtonAndMenu: {
        tooltip: 'Start a Call',
        zoom: 'Zoom',
        googleMeet: 'Google Meet',
    },
    hello: 'Hello',
    phoneCountryCode: '1',
    welcomeText: {
        welcome:
            'Welcome to New Expensify! Enter your phone number or email to continue.',
        welcomeEnterMagicCode: ({login}) =>
            `It's always great to see a new face around here! Please enter the magic code sent to ${login}`,
        phrase2:
            "Money talks. And now that chat and payments are in one place, it's also easy.",
        phrase3:
            'Your payments get to you as fast as you can get your point across.',
        welcomeBack:
            'Welcome back to the New Expensify! Please enter your password.',
        welcomeBackEnterMagicCode: ({login}) =>
            `Welcome back! Please enter the magic code sent to ${login}`,
    },
    reportActionCompose: {
        addAction: 'Actions',
        dropToUpload: 'Drop to upload',
        sendAttachment: 'Send attachment',
        addAttachment: 'Add attachment',
        writeSomething: 'Write something...',
        conciergePlaceholderOptions: [
            'Ask for help!',
            'Ask me anything!',
            'Ask me to book travel!',
            'Ask me what I can do!',
            'Ask me how to pay people!',
            'Ask me how to send an invoice!',
            'Ask me how to scan a receipt!',
            'Ask me how to get a free corporate card!',
        ],
        blockedFromConcierge: 'Communication is barred',
        fileUploadFailed: 'Upload failed. File is not supported.',
        localTime: ({user, time}) => `It's ${time} for ${user}`,
        edited: '(edited)',
        emoji: 'Emoji',
        collapse: 'Collapse',
        expand: 'Expand',
    },
    reportActionContextMenu: {
        copyToClipboard: 'Copy to clipboard',
        copied: 'Copied!',
        copyLink: 'Copy link',
        copyURLToClipboard: 'Copy URL to clipboard',
        copyEmailToClipboard: 'Copy email to clipboard',
        markAsUnread: 'Mark as unread',
        editComment: 'Edit comment',
        deleteComment: 'Delete comment',
        deleteConfirmation: 'Are you sure you want to delete this comment?',
        addReactionTooltip: 'Add Reaction',
    },
    reportActionsView: {
        beginningOfArchivedRoomPartOne: 'You missed the party in ',
        beginningOfArchivedRoomPartTwo: ", there's nothing to see here.",
        beginningOfChatHistoryDomainRoomPartOne: ({domainRoom}) =>
            `Collaboration with everyone at ${domainRoom} starts here! 🎉\nUse `,
        beginningOfChatHistoryDomainRoomPartTwo:
            ' to chat with colleagues, share tips, and ask questions.',
        beginningOfChatHistoryAdminRoomPartOne: ({workspaceName}) =>
            `Collaboration among ${workspaceName} admins starts here! 🎉\nUse `,
        beginningOfChatHistoryAdminRoomPartTwo:
            ' to chat about topics such as workspace configurations and more.',
        beginningOfChatHistoryAnnounceRoomPartOne: ({workspaceName}) =>
            `Collaboration between all ${workspaceName} members starts here! 🎉\nUse `,
        beginningOfChatHistoryAnnounceRoomPartTwo: ({workspaceName}) =>
            ` to chat about anything ${workspaceName} related.`,
        beginningOfChatHistoryUserRoomPartOne:
            'Collaboration starts here! 🎉\nUse this space to chat about anything ',
        beginningOfChatHistoryUserRoomPartTwo: ' related.',
        beginningOfChatHistory:
            'This is the beginning of your chat history with ',
        beginningOfChatHistoryPolicyExpenseChatPartOne:
            'Collaboration between ',
        beginningOfChatHistoryPolicyExpenseChatPartTwo: ' and ',
        beginningOfChatHistoryPolicyExpenseChatPartThree:
            ' starts here! 🎉 This is the place to chat, request money and settle up.',
        chatWithAccountManager: 'Chat with your account manager here',
        sayHello: 'Say hello!',
        usePlusButton:
            '\n\nYou can also use the + button below to send or request money!',
    },
    newMessages: 'New messages',
    reportTypingIndicator: {
        isTyping: 'is typing...',
        areTyping: 'are typing...',
        multipleUsers: 'Multiple users',
    },
    reportArchiveReasons: {
        [CONST.REPORT.ARCHIVE_REASON.DEFAULT]:
            'This chat room has been archived.',
        [CONST.REPORT.ARCHIVE_REASON.ACCOUNT_CLOSED]: ({displayName}) =>
            `This workspace chat is no longer active because ${displayName} closed their account.`,
        [CONST.REPORT.ARCHIVE_REASON.ACCOUNT_MERGED]: ({
            displayName,
            oldDisplayName,
        }) =>
            `This workspace chat is no longer active because ${oldDisplayName} has merged their account with ${displayName}.`,
        [CONST.REPORT.ARCHIVE_REASON.REMOVED_FROM_POLICY]: ({
            displayName,
            policyName,
        }) =>
            `This workspace chat is no longer active because ${displayName} is no longer a member of the ${policyName} workspace.`,
        [CONST.REPORT.ARCHIVE_REASON.POLICY_DELETED]: ({policyName}) =>
            `This workspace chat is no longer active because ${policyName} is no longer an active workspace.`,
    },
    sidebarScreen: {
        fabAction: 'New chat',
        newChat: 'New chat',
        newGroup: 'New group',
        newRoom: 'New room',
        headerChat: 'Chats',
        buttonSearch: 'Search',
        buttonMySettings: 'My settings',
        fabNewChat: 'New chat (Floating action)',
        chatPinned: 'Chat pinned',
        draftedMessage: 'Drafted message',
    },
    iou: {
        amount: 'Amount',
        participants: 'Participants',
        splitBill: 'Split bill',
        requestMoney: 'Request money',
        sendMoney: 'Send money',
        pay: 'Pay',
        viewDetails: 'View details',
        settleExpensify: 'Pay with Expensify',
        settleElsewhere: "I'll settle up elsewhere",
        settlePaypalMe: 'Pay with PayPal.me',
        request: ({amount}) => `Request ${amount}`,
        youowe: ({owner}) => `You owe ${owner}`,
        youpaid: ({owner}) => `You paid ${owner}`,
        owesyou: ({manager}) => `${manager} owes you`,
        paidyou: ({manager}) => `${manager} paid you`,
        split: ({amount}) => `Split ${amount}`,
        send: ({amount}) => `Send ${amount}`,
        noReimbursableExpenses: 'This report has an invalid amount',
        pendingConversionMessage: "Total will update when you're back online",
        error: {
            invalidSplit: 'Split amounts do not equal total amount',
            other: 'Unexpected error, please try again later',
            genericCreateFailureMessage:
                'Unexpected error requesting money, please try again later',
            genericCancelFailureMessage: ({type}) =>
                `Unexpected error ${
                    type === 'decline' ? 'declining' : 'cancelling'
                } the money request, please try again later`,
        },
    },
    notificationPreferences: {
        label: 'Notify me about new messages',
        immediately: 'Immediately',
        daily: 'Daily',
        mute: 'Mute',
    },
    loginField: {
        numberHasNotBeenValidated:
            'The number has not yet been validated. Click the button to resend the validation link via text.',
        emailHasNotBeenValidated:
            'The email has not yet been validated. Click the button to resend the validation link via text.',
    },
    avatarWithImagePicker: {
        uploadPhoto: 'Upload photo',
        removePhoto: 'Remove photo',
        editImage: 'Edit photo',
        imageUploadFailed: 'Image upload failed',
        deleteWorkspaceError:
            'Sorry, there was an unexpected problem deleting your workspace avatar.',
        sizeExceeded: ({maxUploadSizeInMB}) =>
            `The selected image exceeds the maximum upload size of ${maxUploadSizeInMB}MB.`,
        resolutionConstraints: ({
            minHeightInPx,
            minWidthInPx,
            maxHeightInPx,
            maxWidthInPx,
        }) =>
            `Please upload an image larger than ${minHeightInPx}x${minWidthInPx} pixels and smaller than ${maxHeightInPx}x${maxWidthInPx} pixels.`,
        notAllowedExtension: ({allowedExtensions}) =>
            `Profile picture must be one of the following types: ${allowedExtensions.join(
                ', ',
            )}.`,
    },
    profilePage: {
        profile: 'Profile',
        john: 'John',
        doe: 'Doe',
        preferredPronouns: 'Preferred pronouns',
        selectYourPronouns: 'Select your pronouns',
        selfSelectYourPronoun: 'Self-select your pronoun',
        emailAddress: 'Email address',
        setMyTimezoneAutomatically: 'Set my timezone automatically',
        timezone: 'Timezone',
        invalidFileMessage: 'Invalid file. Please try a different image.',
        avatarUploadFailureMessage:
            'An error occurred uploading the avatar, please try again.',
        online: 'Online',
        offline: 'Offline',
        syncing: 'Syncing',
    },
    pronounsPage: {
        pronouns: 'Pronouns',
        isShownOnProfile: 'Your pronouns are shown on your profile.',
    },
    contacts: {
        contactMethod: 'Contact method',
        contactMethods: 'Contact methods',
    },
    pronouns: {
        coCos: 'Co / Cos',
        eEyEmEir: 'E / Ey / Em / Eir',
        faeFaer: 'Fae / Faer',
        heHimHis: 'He / Him / His',
        heHimHisTheyThemTheirs: 'He / Him / His / They / Them / Theirs',
        sheHerHers: 'She / Her / Hers',
        sheHerHersTheyThemTheirs: 'She / Her / Hers / They / Them / Theirs',
        merMers: 'Mer / Mers',
        neNirNirs: 'Ne / Nir / Nirs',
        neeNerNers: 'Nee / Ner / Ners',
        perPers: 'Per / Pers',
        theyThemTheirs: 'They / Them / Theirs',
        thonThons: 'Thon / Thons',
        veVerVis: 'Ve / Ver / Vis',
        viVir: 'Vi / Vir',
        xeXemXyr: 'Xe / Xem / Xyr',
        zeZieZirHir: 'Ze / Zie / Zir / Hir',
        zeHirHirs: 'Ze / Hir',
        callMeByMyName: 'Call me by my name',
    },
    displayNamePage: {
        headerTitle: 'Display name',
        isShownOnProfile: 'Your display name is shown on your profile.',
        john: 'John',
        doe: 'Doe',
    },
    timezonePage: {
        timezone: 'Timezone',
        isShownOnProfile: 'Your timezone is shown on your profile.',
        getLocationAutomatically: 'Automatically determine your location.',
    },
    addSecondaryLoginPage: {
        addPhoneNumber: 'Add phone number',
        addEmailAddress: 'Add email address',
        enterPreferredPhoneNumberToSendValidationLink:
            'Enter your preferred phone number to send a validation link.',
        enterPreferredEmailToSendValidationLink:
            'Enter your preferred email address to send a validation link.',
        sendValidation: 'Send validation',
    },
    initialSettingsPage: {
        about: 'About',
        aboutPage: {
            description:
                'The New Expensify App is built by a community of open source developers from around the world. Help us build the future of Expensify.',
            appDownloadLinks: 'App download links',
            viewKeyboardShortcuts: 'View keyboard shortcuts',
            viewTheCode: 'View the code',
            viewOpenJobs: 'View open jobs',
            reportABug: 'Report a bug',
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
        security: 'Security',
        signOut: 'Sign out',
        signOutConfirmationText:
            "You'll lose any offline changes if you sign-out.",
        versionLetter: 'v',
        readTheTermsAndPrivacy: {
            phrase1: 'Read the',
            phrase2: 'terms of service',
            phrase3: 'and',
            phrase4: 'privacy',
        },
        help: 'Help',
    },
    closeAccountPage: {
        closeAccount: 'Close account',
        reasonForLeavingPrompt:
            'We’d hate to see you go! Would you kindly tell us why, so we can improve?',
        enterMessageHere: 'Enter message here',
        closeAccountWarning: 'Closing your account cannot be undone.',
        closeAccountPermanentlyDeleteData:
            'This will permanently delete all of your unsubmitted expense data and will cancel and decline any outstanding money requests. Are you sure you want to delete the account?',
        enterDefaultContactToConfirm:
            'Please type your default contact method to confirm you wish to close your account. Your default contact method is:',
        enterDefaultContact: 'Enter your default contact method',
        defaultContact: 'Default contact method:',
        enterYourDefaultContactMethod:
            'Please enter your default contact method to close your account.',
    },
    passwordPage: {
        changePassword: 'Change password',
        changingYourPasswordPrompt:
            'Changing your password will update your password for both your Expensify.com and New Expensify accounts.',
        currentPassword: 'Current password',
        newPassword: 'New password',
        newPasswordPrompt:
            'New password must be different than your old password, have at least 8 characters, 1 capital letter, 1 lowercase letter, and 1 number.',
        errors: {
            currentPassword: 'Current password is required',
            newPasswordSameAsOld:
                'New password must be different than your old password',
            newPassword:
                'Your password must have at least 8 characters, 1 capital letter, 1 lowercase letter, and 1 number.',
        },
    },
    passwordConfirmationScreen: {
        passwordUpdated: 'Password updated!',
        allSet: 'You’re all set. Keep your new password safe.',
        gotIt: 'Got it',
    },
    addPayPalMePage: {
        enterYourUsernameToGetPaidViaPayPal:
            'Enter your username to get paid back via PayPal.',
        payPalMe: 'PayPal.me/',
        yourPayPalUsername: 'Your PayPal username',
        addPayPalAccount: 'Add PayPal account',
        growlMessageOnSave: 'Your PayPal username was successfully added',
        formatError: 'Invalid PayPal.me username',
    },
    addDebitCardPage: {
        addADebitCard: 'Add a debit card',
        nameOnCard: 'Name on card',
        debitCardNumber: 'Debit card number',
        expiration: 'Expiration date',
        expirationDate: 'MMYY',
        cvv: 'CVV',
        billingAddress: 'Billing address',
        growlMessageOnSave: 'Your debit card was successfully added',
        expensifyPassword: 'Expensify password',
        error: {
            invalidName: 'Please enter a valid name',
            addressZipCode: 'Please enter a valid zip code',
            debitCardNumber: 'Please enter a valid debit card number',
            expirationDate: 'Please enter a valid expiration date',
            securityCode: 'Please enter a valid security code',
            addressStreet:
                'Please enter a valid billing address that is not a PO Box',
            addressState: 'Please select a state',
            addressCity: 'Please enter a city',
            genericFailureMessage:
                'An error occurred while adding your card, please try again',
            password: 'Please enter your Expensify password',
        },
    },
    paymentsPage: {
        paymentMethodsTitle: 'Payment methods',
        setDefaultConfirmation: 'Make default payment method',
        setDefaultSuccess: 'Default payment method set!',
        deleteAccount: 'Delete Account',
        deleteConfirmation:
            'Are you sure that you want to delete this account?',
        deletePayPalSuccess: 'PayPal.me successfully deleted',
        error: {
            notOwnerOfBankAccount:
                'There was an error setting this bank account as your default payment method.',
            invalidBankAccount: 'This bank account is temporarily suspended.',
            notOwnerOfFund:
                'There was an error setting this card as your default payment method.',
            setDefaultFailure:
                'Something went wrong. Please chat with Concierge for further assistance.',
        },
        addBankAccountFailure:
            'An unexpected error occurred while trying to add your bank account. Please try again.',
    },
    transferAmountPage: {
        transfer: ({amount}) => `Transfer${amount ? ` ${amount}` : ''}`,
        instant: 'Instant (Debit Card)',
        instantSummary: ({rate, minAmount}) =>
            `${rate}% fee (${minAmount} minimum)`,
        ach: '1-3 Business Days (Bank Account)',
        achSummary: 'No fee',
        whichAccount: 'Which Account?',
        fee: 'Fee',
        transferSuccess: 'Transfer successful!',
        transferDetailBankAccount:
            'Your money should arrive in the next 1-3 business days.',
        transferDetailDebitCard: 'Your money should arrive immediately.',
        failedTransfer:
            'Your balance isn’t fully settled. Please transfer to a bank account.',
    },
    chooseTransferAccountPage: {
        chooseAccount: 'Choose Account',
    },
    paymentMethodList: {
        addPaymentMethod: 'Add payment method',
        addNewDebitCard: 'Add new debit card',
        addNewBankAccount: 'Add new bank account',
        accountLastFour: 'Account ending in',
        cardLastFour: 'Card ending in',
        addFirstPaymentMethod:
            'Add a payment method to send and receive payments directly in the app.',
        defaultPaymentMethod: 'Default',
    },
    preferencesPage: {
        receiveRelevantFeatureUpdatesAndExpensifyNews:
            'Receive relevant feature updates and Expensify news',
    },
    priorityModePage: {
        priorityMode: 'Priority mode',
        explainerText:
            'Choose whether to show all chats by default sorted with most recent with pinned items at the top, or #focus on unread pinned items, sorted alphabetically.',
        priorityModes: {
            default: {
                label: 'Most recent',
                description: 'Show all chats sorted by most recent',
            },
            gsd: {
                label: '#focus',
                description: 'Only show unread sorted alphabetically',
            },
        },
    },
    languagePage: {
        language: 'Language',
        languages: {
            en: {
                label: 'English',
            },
            es: {
                label: 'Spanish',
            },
        },
    },
    signInPage: {
        expensifyDotCash: 'New Expensify',
        theCode: 'the code',
        openJobs: 'open jobs',
        heroHeading: 'Split bills\nand chat with friends.',
        heroDescription: {
            phrase1:
                "Money talks. And now that chat and payments are in one place, it's also easy. Your payments get to you as fast as you can get your point across.",
            phrase2: 'The New Expensify is open source. View',
            phrase3: 'the code',
            phrase4: 'View',
            phrase5: 'open jobs',
        },
    },
    termsOfUse: {
        phrase1: 'By logging in, you agree to the',
        phrase2: 'terms of service',
        phrase3: 'and',
        phrase4: 'privacy',
        phrase5:
            'Money transmission is provided by Expensify Payments LLC (NMLS ID:2017010) pursuant to its',
        phrase6: 'licenses',
    },
    validateCodeForm: {
        magicCodeNotReceived: "Didn't receive a magic code?",
        enterAuthenticatorCode: 'Please enter your authenticator code',
        twoFactorCode: 'Two factor code',
        requiredWhen2FAEnabled: 'Required when 2FA is enabled',
        codeSent: 'Magic code sent!',
        error: {
            pleaseFillMagicCode: 'Please enter your magic code',
            incorrectMagicCode: 'Incorrect magic code.',
            pleaseFillTwoFactorAuth: 'Please enter your two factor code',
        },
    },
    passwordForm: {
        pleaseFillOutAllFields: 'Please fill out all fields',
        pleaseFillPassword: 'Please enter your password',
        pleaseFillTwoFactorAuth: 'Please enter your two factor code',
        enterYourTwoFactorAuthenticationCodeToContinue:
            'Enter your two factor authentication code to continue',
        forgot: 'Forgot?',
        twoFactorCode: 'Two factor code',
        requiredWhen2FAEnabled: 'Required when 2FA is enabled',
        error: {
            incorrectPassword: 'Incorrect password. Please try again.',
            incorrectLoginOrPassword:
                'Incorrect login or password. Please try again.',
            incorrect2fa:
                'Incorrect two factor authentication code. Please try again.',
            twoFactorAuthenticationEnabled:
                'You have 2FA enabled on this account. Please sign in using your email or phone number.',
            invalidLoginOrPassword:
                'Invalid login or password. Please try again or reset your password.',
            unableToResetPassword:
                'We were unable to change your password. This is likely due to an expired password reset link in an old password reset email. We have emailed you a new link so you can try again. Check your Inbox and your Spam folder; it should arrive in just a few minutes.',
            noAccess:
                'You do not have access to this application. Please add your GitHub username for access.',
            accountLocked:
                'Your account has been locked after too many unsuccessful attempts. Please try again after 1 hour.',
            fallback: 'Something went wrong. Please try again later.',
        },
    },
    loginForm: {
        phoneOrEmail: 'Phone or email',
        error: {
            invalidFormatEmailLogin:
                'The email entered is invalid. Please fix the format and try again.',
        },
        cannotGetAccountDetails:
            "Couldn't retrieve account details, please try to sign in again.",
    },
    personalDetails: {
        error: {
            containsReservedWord:
                'First name cannot contain the words Expensify or Concierge',
            hasInvalidCharacter: 'Name cannot contain a comma or semicolon',
        },
    },
    privatePersonalDetails: {
        personalDetails: 'Personal details',
        privateDataMessage:
            'These details are used for travel and payments. They are never shown on your public profile.',
        legalName: 'Legal name',
        legalFirstName: 'Legal first name',
        legalLastName: 'Legal last name',
        homeAddress: 'Home address',
        error: {
            dateShouldBeBefore: ({dateString}) =>
                `Date should be before ${dateString}.`,
            dateShouldBeAfter: ({dateString}) =>
                `Date should be after ${dateString}.`,
        },
    },
    resendValidationForm: {
        linkHasBeenResent: 'Link has been re-sent',
        weSentYouMagicSignInLink: ({login, loginType}) =>
            `I've sent a magic sign-in link to ${login}. Please check your ${loginType} to sign in.`,
        resendLink: 'Resend link',
        validationCodeFailedMessage:
            'It looks like there was an error with your validation link or it has expired.',
    },
    detailsPage: {
        localTime: 'Local time',
    },
    newChatPage: {
        createGroup: 'Create group',
    },
    notFound: {
        chatYouLookingForCannotBeFound:
            'The chat you are looking for cannot be found.',
        getMeOutOfHere: 'Get me out of here',
        iouReportNotFound:
            'The payment details you are looking for cannot be found.',
        notHere: "Hmm... it's not here",
        pageNotFound: 'That page is nowhere to be found.',
        noAccess: "You don't have access to this chat",
        goBackHome: 'Go back to Home page',
    },
    setPasswordPage: {
        enterPassword: 'Enter a password',
        setPassword: 'Set password',
        newPasswordPrompt:
            'Your password must have at least 8 characters, 1 capital letter, 1 lowercase letter, and 1 number.',
        passwordFormTitle:
            'Welcome back to the New Expensify! Please set your password.',
        passwordNotSet:
            'We were unable to set your new password. We have sent you a new password link to try again.',
        setPasswordLinkInvalid:
            'This set password link is invalid or has expired. A new one is waiting for you in your email inbox!',
        validateAccount: 'Verify account',
    },
    stepCounter: ({step, total}) => `Step ${step} of ${total}`,
    bankAccount: {
        accountNumber: 'Account number',
        routingNumber: 'Routing number',
        addBankAccount: 'Add bank account',
        chooseAnAccount: 'Choose an account',
        connectOnlineWithPlaid: 'Connect online with Plaid',
        connectManually: 'Connect manually',
        desktopConnection:
            'Note: To connect with Chase, Wells Fargo, Capital One or Bank of America, please click here to complete this process in a browser.',
        yourDataIsSecure: 'Your data is secure',
        toGetStarted:
            'Add a bank account and issue corporate cards, reimburse expenses, collect invoice payments, and pay bills, all from one place.',
        plaidBodyCopy:
            'Give your employees an easier way to pay - and get paid back - for company expenses.',
        checkHelpLine:
            'Your routing number and account number can be found on a check for the account.',
        validateAccountError:
            'In order to finish setting up your bank account, you must validate your account. Please check your email to validate your account, and return here to finish up!',
        hasPhoneLoginError:
            'To add a verified bank account please ensure your primary login is a valid email and try again. You can add your phone number as a secondary login.',
        hasBeenThrottledError:
            'There was an error adding your bank account. Please wait a few minutes and try again.',
        buttonConfirm: 'Got it',
        error: {
            noBankAccountAvailable: 'Sorry, no bank account is available',
            noBankAccountSelected: 'Please choose an account',
            taxID: 'Please enter a valid Tax ID Number',
            website: 'Please enter a valid website',
            zipCode: 'Please enter a valid zip code',
            phoneNumber: 'Please enter a valid phone number',
            companyName: 'Please enter a valid legal business name',
            addressCity: 'Please enter a valid city',
            addressStreet:
                'Please enter a valid street address that is not a PO Box',
            addressState: 'Please select a valid state',
            incorporationDateFuture:
                'Incorporation date cannot be in the future',
            incorporationState: 'Please enter a valid state',
            industryCode:
                'Please enter a valid industry classification code. Must be 6 digits.',
            restrictedBusiness:
                'Please confirm company is not on the list of restricted businesses',
            routingNumber: 'Please enter a valid Routing Number',
            accountNumber: 'Please enter a valid Account Number',
            companyType: 'Please enter a valid Company Type',
            tooManyAttempts:
                'Due to a high number of login attempts, this option has been temporarily disabled for 24 hours. Please try again later or manually enter details instead.',
            address: 'Please enter a valid address',
            dob: 'Please enter a valid date of birth',
            age: 'Must be over 18 years old',
            ssnLast4: 'Please enter valid last 4 digits of SSN',
            firstName: 'Please enter valid first name',
            lastName: 'Please enter valid last name',
            noDefaultDepositAccountOrDebitCardAvailable:
                'Please add a default deposit bank account or debit card',
            validationAmounts:
                'The validation amounts you entered are incorrect. Please double-check your bank statement and try again.',
        },
    },
    addPersonalBankAccountPage: {
        enterPassword: 'Enter Expensify password',
        alreadyAdded: 'This account has already been added.',
        chooseAccountLabel: 'Account',
        successTitle: 'Personal bank account added!',
        successMessage:
            'Congrats, your bank account is set up and ready to receive reimbursements.',
    },
    attachmentView: {
        unknownFilename: 'Unknown filename',
        passwordRequired: 'Please enter a password',
        passwordIncorrect: 'Incorrect password. Please try again.',
        failedToLoadPDF: 'Failed to load PDF file.',
        pdfPasswordForm: {
            title: 'Password protected PDF',
            infoText: 'This PDF is password protected.',
            beforeLinkText: 'Please',
            linkText: 'enter the password',
            afterLinkText: 'to view it.',
            formLabel: 'View PDF',
        },
    },
    messages: {
        errorMessageInvalidPhone: `Please enter a valid phone number without brackets or dashes. If you're outside the US please include your country code (e.g. ${CONST.EXAMPLE_PHONE_NUMBER}).`,
    },
    onfidoStep: {
        acceptTerms:
            'By continuing with the request to activate your Expensify wallet, you confirm that you have read, understand and accept ',
        facialScan: 'Onfido’s Facial Scan Policy and Release',
        tryAgain: 'Try again',
        verifyIdentity: 'Verify identity',
        genericError:
            'There was an error while processing this step. Please try again.',
        cameraPermissionsNotGranted: 'Camera permissions not granted',
        cameraRequestMessage:
            'You have not granted us camera access. We need access to complete verification.',
        originalDocumentNeeded:
            'Please upload an original image of your ID rather than a screenshot or scanned image.',
        documentNeedsBetterQuality:
            'Your ID appears to be damaged or has missing security features. Please upload an original image of an undamaged ID that is entirely visible.',
        imageNeedsBetterQuality:
            "There's an issue with the image quality of your ID. Please upload a new image where your entire ID can be seen clearly.",
        selfieIssue:
            "There's an issue with your selfie/video. Please upload a new selfie/video in real time.",
        selfieNotMatching:
            "Your selfie/video doesn't match your ID. Please upload a new selfie/video where your face can be clearly seen.",
        selfieNotLive:
            "Your selfie/video doesn't appear to be a live photo/video. Please upload a live selfie/video.",
    },
    additionalDetailsStep: {
        headerTitle: 'Additional details',
        helpText:
            'We need to confirm the following information before we can process this payment.',
        helpTextIdologyQuestions:
            'We need to ask you just a few more questions to finish validating your identity.',
        helpLink: 'Learn more about why we need this.',
        legalFirstNameLabel: 'Legal first name',
        legalMiddleNameLabel: 'Legal middle name',
        legalLastNameLabel: 'Legal last name',
        selectAnswer: 'You need to select a response to proceed.',
        ssnFull9Error: 'Please enter a valid 9 digit SSN',
        needSSNFull9:
            "We're having trouble verifying your SSN. Please enter the full 9 digits of your SSN.",
        weCouldNotVerify: 'We could not verify',
        pleaseFixIt: 'Please fix this information before continuing.',
        failedKYCTextBefore:
            "We weren't able to successfully verify your identity. Please try again later and reach out to ",
        failedKYCTextAfter: ' if you have any questions.',
    },
    termsStep: {
        headerTitle: 'Terms and fees',
        haveReadAndAgree: 'I have read and agree to receive ',
        electronicDisclosures: 'electronic disclosures',
        agreeToThe: 'I agree to the',
        walletAgreement: 'Wallet agreement',
        enablePayments: 'Enable payments',
        feeAmountZero: '$0',
        monthlyFee: 'Monthly fee',
        inactivity: 'Inactivity',
        electronicFundsInstantFee: '1.5%',
        noOverdraftOrCredit: 'No overdraft/credit feature.',
        electronicFundsWithdrawal: 'Electronic funds withdrawal',
        standard: 'Standard',
        shortTermsForm: {
            expensifyPaymentsAccount:
                'The Expensify Wallet is issued by The Bancorp Bank.',
            perPurchase: 'Per purchase',
            atmWithdrawal: 'ATM withdrawal',
            cashReload: 'Cash reload',
            inNetwork: 'in-network',
            outOfNetwork: 'out-of-network',
            atmBalanceInquiry: 'ATM balance inquiry',
            inOrOutOfNetwork: '(in-network or out-of-network)',
            customerService: 'Customer service',
            automatedOrLive: '(automated or live agent)',
            afterTwelveMonths: '(after 12 months with no transactions)',
            weChargeOneFee: 'We charge one type of fee.',
            fdicInsurance: 'Your funds are eligible for FDIC insurance.',
            generalInfo:
                'For general information about prepaid accounts, visit',
            conditionsDetails:
                'Find details and conditions for all fees and services by visiting',
            conditionsPhone: 'or calling +1 833-400-0904.',
            instant: '(instant)',
            electronicFundsInstantFeeMin: '(min $0.25)',
        },
        longTermsForm: {
            listOfAllFees: 'A list of all Expensify Wallet fees',
            typeOfFeeHeader: 'Type of fee',
            feeAmountHeader: 'Fee amount',
            moreDetailsHeader: 'More details',
            openingAccountTitle: 'Opening an account',
            openingAccountDetails: 'There is no fee to open an account.',
            monthlyFeeDetails: 'There is no monthly fee.',
            customerServiceTitle: 'Customer service',
            customerServiceDetails: 'There are no customer service fees.',
            inactivityDetails: 'There is no inactivity fee.',
            sendingFundsTitle: 'Sending funds to another account holder',
            sendingFundsDetails:
                'There is no fee to send funds to another account holder using your balance, ' +
                'bank account, or debit card.',
            electronicFundsStandardDetails:
                'There is no fee to transfer funds from your Expensify Wallet ' +
                'to your bank account using the standard option. This transfer usually completes within 1-3 business' +
                ' days.',
            electronicFundsInstantDetails:
                'There is a fee to transfer funds from your Expensify Wallet to ' +
                'your linked debit card using the instant transfer option. This transfer usually completes within ' +
                'several minutes. The fee is 1.5% of the transfer amount (with a minimum fee of $0.25).',
            fdicInsuranceBancorp:
                'Your funds are eligible for FDIC insurance. Your funds will be held at or ' +
                'transferred to The Bancorp Bank, an FDIC-insured institution. Once there, your funds are insured up ' +
                'to $250,000 by the FDIC in the event The Bancorp Bank fails. See',
            fdicInsuranceBancorp2: 'for details.',
            contactExpensifyPayments:
                'Contact Expensify Payments by calling +1 833-400-0904, by email at',
            contactExpensifyPayments2: 'or sign in at',
            generalInformation:
                'For general information about prepaid accounts, visit',
            generalInformation2:
                'If you have a complaint about a prepaid account, call the Consumer Financial ' +
                'Protection Bureau at 1-855-411-2372 or visit',
            printerFriendlyView: 'View printer-friendly version',
            automated: 'Automated',
            liveAgent: 'Live Agent',
            instant: 'Instant',
            electronicFundsInstantFeeMin: 'Min $0.25',
        },
    },
    activateStep: {
        headerTitle: 'Enable payments',
        activatedTitle: 'Wallet activated!',
        activatedMessage:
            'Congrats, your wallet is set up and ready to make payments.',
        checkBackLaterTitle: 'Just a minute...',
        checkBackLaterMessage:
            "We're still reviewing your information. Please check back later.",
        continueToPayment: 'Continue to payment',
        continueToTransfer: 'Continue to transfer',
    },
    companyStep: {
        headerTitle: 'Company information',
        subtitle:
            'Almost done! For security purposes, we need to confirm some information:',
        legalBusinessName: 'Legal business name',
        companyWebsite: 'Company website',
        taxIDNumber: 'Tax ID number',
        taxIDNumberPlaceholder: '9 digits',
        companyType: 'Company type',
        incorporationDate: 'Incorporation date',
        incorporationState: 'Incorporation state',
        industryClassificationCode: 'Industry classification code',
        confirmCompanyIsNot: 'I confirm that this company is not on the',
        listOfRestrictedBusinesses: 'list of restricted businesses',
        incorporationDatePlaceholder: 'Start date (yyyy-mm-dd)',
        incorporationTypes: {
            LLC: 'LLC',
            CORPORATION: 'Corp',
            PARTNERSHIP: 'Partnership',
            COOPERATIVE: 'Cooperative',
            SOLE_PROPRIETORSHIP: 'Sole Proprietorship',
            OTHER: 'Other',
        },
    },
    requestorStep: {
        headerTitle: 'Personal information',
        subtitle: 'Please provide your personal information.',
        learnMore: 'Learn more',
        isMyDataSafe: 'Is my data safe?',
        onFidoConditions:
            'By continuing with the request to add this bank account, you confirm that you have read, understand and accept ',
        isControllingOfficer:
            'I am authorized to use my company bank account for business spend',
        isControllingOfficerError:
            'You must be a controlling officer with authorization to operate the business bank account.',
    },
    validationStep: {
        headerTitle: 'Validate Bank Account',
        buttonText: 'Finish setup',
        maxAttemptsReached:
            'Validation for this bank account has been disabled due to too many incorrect attempts.',
        description:
            'A day or two after you add your account to Expensify we send three (3) transactions to your account. They have a merchant line like "Expensify, Inc. Validation".',
        descriptionCTA:
            'Please enter each transaction amount in the fields below. Example: 1.51.',
        reviewingInfo:
            "Thanks! We're reviewing your information, and will be in touch shortly. Please check your chat with Concierge ",
        forNextSteps: ' for next steps to finish setting up your bank account.',
        letsChatCTA: "Yes, let's chat",
        letsChatText:
            'Thanks for doing that. We need your help verifying a few pieces of information, but we can work this out quickly over chat. Ready?',
        letsChatTitle: "Let's chat!",
        enable2FATitle: 'Prevent fraud, enable two-factor authentication!',
        enable2FAText:
            'We take your security seriously, so please set up two-factor authentication for your account now. That will allow us to dispute Expensify Card digital transactions, and will reduce your risk for fraud.',
        secureYourAccount: 'Secure your account',
    },
    beneficialOwnersStep: {
        additionalInformation: 'Additional information',
        checkAllThatApply: 'Check all that apply, otherwise leave blank.',
        iOwnMoreThan25Percent: 'I own more than 25% of ',
        someoneOwnsMoreThan25Percent: 'Somebody else owns more than 25% of ',
        additionalOwner: 'Additional beneficial owner',
        removeOwner: 'Remove this beneficial owner',
        addAnotherIndividual:
            'Add another individual who owns more than 25% of ',
        agreement: 'Agreement:',
        termsAndConditions: 'terms and conditions',
        certifyTrueAndAccurate:
            'I certify that the information provided is true and accurate',
        error: {
            certify: 'Must certify information is true and accurate',
        },
    },
    reimbursementAccountLoadingAnimation: {
        oneMoment: 'One Moment',
        explanationLine:
            'We’re taking a look at your information. You will be able to continue with next steps shortly.',
    },
    session: {
        offlineMessageRetry:
            "Looks like you're offline. Please check your connection and try again.",
    },
    workspace: {
        common: {
            card: 'Issue cards',
            workspace: 'Workspace',
            edit: 'Edit workspace',
            delete: 'Delete workspace',
            settings: 'General settings',
            reimburse: 'Reimburse expenses',
            bills: 'Pay bills',
            invoices: 'Send invoices',
            travel: 'Book travel',
            members: 'Manage members',
            bankAccount: 'Connect bank account',
            testTransactions: 'Test transactions',
            issueAndManageCards: 'Issue and manage cards',
            reconcileCards: 'Reconcile cards',
            settlementFrequency: 'Settlement frequency',
            deleteConfirmation:
                'Are you sure you want to delete this workspace?',
            growlMessageOnDelete: 'Workspace deleted',
            growlMessageOnDeleteError:
                'This workspace cannot be deleted right now because reports are actively being processed',
            unavailable: 'Unavailable workspace',
        },
        emptyWorkspace: {
            title: 'Create a new workspace',
            subtitle:
                "Workspaces are where you'll chat with your team, reimburse expenses, issue cards, send invoices, pay bills, and more — all in one place.",
        },
        new: {
            newWorkspace: 'New workspace',
            getTheExpensifyCardAndMore: 'Get the Expensify Card and more',
        },
        people: {
            genericFailureMessage:
                'An error occurred removing a user from the workspace, please try again.',
            removeMembersPrompt:
                'Are you sure you want to remove the selected members from your workspace?',
            removeMembersTitle: 'Remove members',
            selectAll: 'Select all',
            error: {
                genericAdd: 'There was a problem adding this workspace member.',
                cannotRemove:
                    'You cannot remove yourself or the workspace owner.',
                genericRemove:
                    'There was a problem removing that workspace member.',
            },
        },
        card: {
            header: 'Unlock free Expensify Cards',
            headerWithEcard: 'Cards are ready!',
            noVBACopy:
                'Connect a bank account to issue Expensify Cards to your workspace members, and access these incredible benefits and more:',
            VBANoECardCopy:
                'Add a work email address to issue unlimited Expensify Cards for your workspace members, as well as all of these incredible benefits:',
            VBAWithECardCopy: 'Access these incredible benefits and more:',
            benefit1: 'Up to 4% cash back',
            benefit2: 'Digital and physical cards',
            benefit3: 'No personal liability',
            benefit4: 'Customizable limits',
            addWorkEmail: 'Add work email address',
            checkingDomain:
                'Hang tight! We are still working on enabling your Expensify Cards. Check back here in a few minutes.',
        },
        reimburse: {
            captureReceipts: 'Capture receipts',
            fastReimbursementsHappyMembers:
                'Fast reimbursements = happy members!',
            kilometers: 'Kilometers',
            miles: 'Miles',
            viewAllReceipts: 'View all receipts',
            reimburseReceipts: 'Reimburse receipts',
            trackDistance: 'Track distance',
            trackDistanceCopy:
                'Set the per mile/km rate and choose a default unit to track.',
            trackDistanceRate: 'Rate',
            trackDistanceUnit: 'Unit',
            unlockNextDayReimbursements: 'Unlock next-day reimbursements',
            captureNoVBACopyBeforeEmail:
                'Ask your workspace members to forward receipts to ',
            captureNoVBACopyAfterEmail:
                ' and download the Expensify App to track cash expenses on the go.',
            unlockNoVBACopy:
                'Connect a bank account to reimburse your workspace members online.',
            fastReimbursementsVBACopy:
                "You're all set to reimburse receipts from your bank account!",
            updateCustomUnitError:
                "Your changes couldn't be saved. The workspace was modified while you were offline, please try again.",
        },
        bills: {
            manageYourBills: 'Manage your bills',
            askYourVendorsBeforeEmail:
                'Ask your vendors to forward their invoices to ',
            askYourVendorsAfterEmail: " and we'll scan them for you to pay.",
            viewAllBills: 'View all bills',
            unlockOnlineBillPayment: 'Unlock online bill payment',
            unlockNoVBACopy:
                'Connect your bank account to pay bills online for free!',
            hassleFreeBills: 'Hassle-free bills!',
            VBACopy: "You're all set to make payments from your bank account!",
        },
        invoices: {
            invoiceClientsAndCustomers: 'Invoice clients and customers',
            invoiceFirstSectionCopy:
                'Send beautiful, professional invoices directly to your clients and customers right from within the Expensify app.',
            viewAllInvoices: 'View all invoices',
            unlockOnlineInvoiceCollection: 'Unlock online invoice collection',
            unlockNoVBACopy:
                'Connect your bank account to accept online payments for invoices - by ACH or credit card - to be deposited straight into your account.',
            moneyBackInAFlash: 'Money back, in a flash!',
            unlockVBACopy:
                "You're all set to accept payments by ACH or credit card!",
            viewUnpaidInvoices: 'View unpaid invoices',
            sendInvoice: 'Send invoice',
        },
        travel: {
            unlockConciergeBookingTravel: 'Unlock Concierge travel booking',
            noVBACopy:
                'Connect your bank account to let workspace members book their flights, hotels, and cars by starting a chat with Concierge.',
            packYourBags: 'Pack your bags!',
            VBACopy:
                'Members with the Expensify card can chat with Concierge to book travel!',
            bookTravelWithConcierge: 'Book travel with Concierge',
        },
        invite: {
            invitePeople: 'Invite new members',
            personalMessagePrompt: 'Add a personal message (optional)',
            genericFailureMessage:
                'An error occurred inviting the user to the workspace, please try again.',
            welcomeNote: ({workspaceName}) =>
                `You have been invited to ${
                    workspaceName || 'a workspace'
                }! Download the Expensify mobile app at use.expensify.com/download to start tracking your expenses.`,
            pleaseEnterValidLogin: `Please ensure the email or phone number is valid (e.g. ${CONST.EXAMPLE_PHONE_NUMBER}).`,
        },
        editor: {
            nameInputLabel: 'Name',
            nameInputHelpText:
                'This is the name you will see on your workspace.',
            nameIsRequiredError:
                'You need to define a name for your workspace.',
            currencyInputLabel: 'Default currency',
            currencyInputHelpText:
                'All expenses on this workspace will be converted to this currency.',
            save: 'Save',
            genericFailureMessage:
                'An error occurred updating the workspace, please try again.',
            avatarUploadFailureMessage:
                'An error occurred uploading the avatar, please try again.',
        },
        bankAccount: {
            continueWithSetup: 'Continue with setup',
            youreAlmostDone:
                "You're almost done setting up your bank account, which will let you issue corporate cards, reimburse expenses, collect invoices, and pay bills all from the same bank account.",
            streamlinePayments: 'Streamline payments',
            oneMoreThing: 'One more thing!',
            allSet: "You're all set!",
            accountDescriptionNoCards:
                'This bank account will be used to reimburse expenses, collect invoices, and pay bills all from the same account.\n\nPlease add a work email address as a secondary login to enable the Expensify Card.',
            accountDescriptionWithCards:
                'This bank account will be used to issue corporate cards, reimburse expenses, collect invoices, and pay bills all from the same account.',
            addWorkEmail: 'Add work email address',
            letsFinishInChat: "Let's finish in chat!",
            almostDone: 'Almost done!',
            disconnectBankAccount: 'Disconnect bank account',
            noLetsStartOver: "No, let's start over",
            startOver: 'Start over',
            yesDisconnectMyBankAccount: 'Yes, disconnect my bank account',
            yesStartOver: 'Yes, start over',
            disconnectYour: 'Disconnect your ',
            bankAccountAnyTransactions:
                ' bank account. Any outstanding transactions for this account will still complete.',
            clearProgress:
                'Starting over will clear the progress you have made so far.',
            areYouSure: 'Are you sure?',
        },
    },
    getAssistancePage: {
        title: 'Get assistance',
        subtitle: "We're here to clear your path to greatness!",
        description: 'Choose from the support options below:',
        chatWithConcierge: 'Chat with Concierge',
        scheduleSetupCall: 'Schedule a setup call',
        questionMarkButtonTooltip: 'Get assistance from our team',
        exploreHelpDocs: 'Explore help docs',
    },
    emojiPicker: {
        skinTonePickerLabel: 'Change default skin tone',
        headers: {
            frequentlyUsed: 'Frequently Used',
            smileysAndEmotion: 'Smileys & Emotion',
            peopleAndBody: 'People & Body',
            animalsAndNature: 'Animals & Nature',
            foodAndDrink: 'Food & Drinks',
            travelAndPlaces: 'Travel & Places',
            activities: 'Activities',
            objects: 'Objects',
            symbols: 'Symbols',
            flags: 'Flags',
        },
    },
    newRoomPage: {
        newRoom: 'New room',
        roomName: 'Room name',
        visibility: 'Visibility',
        restrictedDescription: 'People in your workspace can find this room',
        privateDescription: 'People invited to this room can find it',
        publicDescription: 'Anyone can find this room',
        createRoom: 'Create room',
        roomAlreadyExistsError: 'A room with this name already exists',
        roomNameReservedError:
            'A room on this workspace already uses this name',
        roomNameInvalidError:
            'Room names can only include lowercase letters, numbers and hyphens',
        pleaseEnterRoomName: 'Please enter a room name',
        pleaseSelectWorkspace: 'Please select a workspace',
        renamedRoomAction: ({oldName, newName}) =>
            ` renamed this room from ${oldName} to ${newName}`,
        social: 'social',
        selectAWorkspace: 'Select a workspace',
        growlMessageOnRenameError:
            'Unable to rename policy room, please check your connection and try again.',
        visibilityOptions: {
            restricted: 'Restricted',
            private: 'Private',
            public: 'Public',
            public_announce: 'Public Announce',
        },
    },
    statementPage: {
        generatingPDF:
            "We're generating your PDF right now. Please come back later!",
    },
    keyboardShortcutModal: {
        title: 'Keyboard shortcuts',
        subtitle: 'Save time with these handy keyboard shortcuts:',
        shortcuts: {
            openShortcutDialog: 'Opens the keyboard shortcuts dialog',
            escape: 'Escape dialogs',
            search: 'Open search dialog',
            newGroup: 'New group screen',
            copy: 'Copy comment',
        },
    },
    guides: {
        screenShare: 'Screen share',
        screenShareRequest: 'Expensify is inviting you to a screen share',
    },
    genericErrorPage: {
        title: 'Uh-oh, something went wrong!',
        body: {
            helpTextMobile:
                'Please try closing and reopening the app or switching to',
            helpTextWeb: 'web.',
            helpTextConcierge: 'If the problem persists, reach out to',
        },
        refresh: 'Refresh',
    },
    fileDownload: {
        success: {
            title: 'Downloaded!',
            message: 'Attachment successfully downloaded!',
        },
        generalError: {
            title: 'Attachment Error',
            message: 'Attachment cannot be downloaded',
        },
        permissionError: {
            title: 'Storage access',
            message:
                "Expensify can't save attachments without storage access. Tap Settings to update permissions.",
        },
    },
    desktopApplicationMenu: {
        aboutExpensify: 'About New Expensify',
        updateExpensify: 'Update New Expensify',
        checkForUpdates: 'Check for updates',
        history: 'History',
    },
    historyMenu: {
        forward: 'Forward',
        back: 'Back',
    },
    checkForUpdatesModal: {
        available: {
            title: 'Update Available',
            message:
                "The new version will be available shortly. We'll notify you when we're ready to update.",
            soundsGood: 'Sounds good',
        },
        notAvailable: {
            title: 'Update Not Available',
            message:
                'There is no update available as of now! Check again at a later time.',
            okay: 'Okay',
        },
        error: {
            title: 'Update Check Failed',
            message:
                "We couldn't look for an update. Please check again in a bit!",
        },
    },
    report: {
        genericAddCommentFailureMessage:
            'Unexpected error while posting the comment, please try again later',
    },
    chronos: {
        oooEventSummaryFullDay: ({summary, dayCount, date}) =>
            `${summary} for ${dayCount} ${
                dayCount === 1 ? 'day' : 'days'
            } until ${date}`,
        oooEventSummaryPartialDay: ({summary, timePeriod, date}) =>
            `${summary} from ${timePeriod} on ${date}`,
    },
    footer: {
        features: 'Features',
        expenseManagement: 'Expense Management',
        spendManagement: 'Spend Management',
        expenseReports: 'Expense Reports',
        companyCreditCard: 'Company Credit Card',
        receiptScanningApp: 'Receipt Scanning App',
        billPay: 'Bill Pay',
        invoicing: 'Invoicing',
        CPACard: 'CPA Card',
        payroll: 'Payroll',
        travel: 'Travel',
        resources: 'Resources',
        expensifyApproved: 'ExpensifyApproved!',
        pressKit: 'Press Kit',
        support: 'Support',
        expensifyHelp: 'ExpensifyHelp',
        community: 'Community',
        privacy: 'Privacy',
        learnMore: 'Learn More',
        aboutExpensify: 'About Expensify',
        blog: 'Blog',
        jobs: 'Jobs',
        expensifyOrg: 'Expensify.org',
        investorRelations: 'Investor Relations',
        getStarted: 'Get Started',
        createAccount: 'Create a new account',
        logIn: 'Log in',
    },
    allStates: COMMON_CONST.STATES,
    allCountries: CONST.ALL_COUNTRIES,
};
