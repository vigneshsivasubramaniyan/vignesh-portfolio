// Modified Chat Widget Script for Portfolio
(function () {

    const styles = `
        .n8n-chat-widget {
            --chat--color-primary: #00c4f5;
            --chat--color-secondary: #00cdd4;
            --chat--color-background: #F5F0E8;
            --chat--color-font: #111111;
            font-family: 'Space Grotesk', 'Inter', -apple-system, sans-serif;
        }

        .n8n-chat-widget .chat-container {
            position: fixed;
            bottom: 100px;
            right: 20px;
            z-index: 1000;
            display: none;
            width: 360px;
            height: 580px;
            background: var(--chat--color-background);
            border-radius: 4px;
            box-shadow: 7px 7px 0px #111111;
            border: 2px solid #111111;
            overflow: hidden;
            font-family: inherit;
        }

														
						
					   
		 

        .n8n-chat-widget .chat-container.open {
            display: flex;
            flex-direction: column;
        }

        .n8n-chat-widget .brand-header {
            padding: 16px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            background: #111111;
            position: relative;
            border-bottom: 2px solid #333;
        }

        .n8n-chat-widget .close-button {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: #ffffff;
            cursor: pointer;
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.2s;
            font-size: 24px;
            opacity: 0.8;
        }

        .n8n-chat-widget .close-button:hover {
            opacity: 1;
        }

        .n8n-chat-widget .brand-header img {
            width: 36px;
            height: 36px;
            border-radius: 4px;
            border: 1px solid #444;
        }

        .n8n-chat-widget .brand-header span {
            font-size: 15px;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: 0.02em;
        }

        .n8n-chat-widget .new-conversation {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px 20px;
            height: 100%;
            text-align: center;
						
							 
        }

        .n8n-chat-widget .welcome-text {
            font-size: 20px;
            font-weight: 700;
            color: var(--chat--color-font);
            margin-bottom: 24px;
            line-height: 1.3;
            letter-spacing: -0.02em;
        }

        .n8n-chat-widget .new-chat-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            max-width: 280px;
            padding: 14px 24px;
            background: #F5D800;
            color: #111111;
            border: 2px solid #111111;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 700;
            font-family: inherit;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            margin-bottom: 12px;
            box-shadow: 3px 3px 0 #111;
            transition: transform 0.15s, box-shadow 0.15s;
        }

        .n8n-chat-widget .new-chat-btn:hover {
            transform: translate(2px, 2px);
            box-shadow: 1px 1px 0 #111;
        }

        .n8n-chat-widget .message-icon {
            width: 20px;
            height: 20px;
        }

        .n8n-chat-widget .response-text {
            font-size: 13px;
            color: #666;
            margin: 0;
        }

        .n8n-chat-widget .chat-interface {
            display: none;
            flex-direction: column;
            height: 100%;
        }

        .n8n-chat-widget .chat-interface.active {
            display: flex;
        }

        .n8n-chat-widget .chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 16px;
            background: var(--chat--color-background);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .n8n-chat-widget .chat-messages::-webkit-scrollbar {
            width: 4px;
        }

        .n8n-chat-widget .chat-messages::-webkit-scrollbar-thumb {
            background: #F5D800;
            border-radius: 2px;
        }

        .n8n-chat-widget .chat-message {
            padding: 11px 14px;
            border-radius: 4px;
            max-width: 82%;
            word-wrap: break-word;
            font-size: 14px;
            line-height: 1.55;
            animation: messageSlide 0.25s ease-out;
            border: 1px solid #111;
        }

        @keyframes messageSlide {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        .n8n-chat-widget .chat-message.user {
            background: #111111;
            color: #ffffff;
            align-self: flex-end;
            box-shadow: 2px 2px 0 #444;
        }

        .n8n-chat-widget .chat-message.bot {
            background: #ffffff;
            border: 1px solid #ddd;
            color: #111;
            align-self: flex-start;
            box-shadow: 2px 2px 0 #ccc;
        }

        .n8n-chat-widget .chat-input {
            padding: 12px;
            background: var(--chat--color-background);
            border-top: 2px solid #111;
            display: flex;
            gap: 8px;
        }

        .n8n-chat-widget .chat-input textarea {
            flex: 1;
            padding: 10px 12px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background: #fff;
            color: #111;
            resize: none;
            font-family: inherit;
            font-size: 14px;
            outline: none;
        }

        .n8n-chat-widget .chat-input textarea:focus {
            border-color: #111;
        }

        .n8n-chat-widget .chat-input textarea::placeholder {
            color: #999;
        }

        .n8n-chat-widget .chat-input button {
            background: #F5D800;
            color: #111;
            border: 2px solid #111;
            border-radius: 4px;
            padding: 0 16px;
            cursor: pointer;
            font-family: inherit;
            font-weight: 700;
            font-size: 13px;
            letter-spacing: 0.04em;
            box-shadow: 2px 2px 0 #111;
            transition: transform 0.15s, box-shadow 0.15s;
        }

        .n8n-chat-widget .chat-input button:hover {
            transform: translate(1px,1px);
            box-shadow: 1px 1px 0 #111;
        }

        .n8n-chat-widget .chat-toggle {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 64px;
            height: 64px;
            border-radius: 4px;
            background: #F5D800;
            color: #111;
            border: 2px solid #111;
            cursor: pointer;
            box-shadow: 4px 4px 0px #111;
            z-index: 999;
            transition: transform 0.15s, box-shadow 0.15s;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

													 
						
					   
		 

        .n8n-chat-widget .chat-toggle:hover {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0 #111;
        }

        .n8n-chat-widget .chat-toggle svg {
            width: 24px;
            height: 24px;
            fill: currentColor;
        }

        .n8n-chat-widget .chat-footer {
            display: none;
            padding: 10px;
            text-align: center;
            background: var(--chat--color-background);
            border-top: 1px solid #ddd;
        }

        .n8n-chat-widget .chat-footer a {
            color: #666;
            text-decoration: none;
            font-size: 11px;
            transition: color 0.2s;
            font-family: inherit;
        }

        .n8n-chat-widget .chat-footer a:hover {
            color: #111;
        }
	  

        @media (max-width: 768px) {
            .n8n-chat-widget .chat-container {
                width: calc(100% - 20px);
                right: 20px;
                left: 20px;
                height: 600px;
                max-width: 360px;
            }

            .n8n-chat-widget .chat-toggle {
                right: 20px;
                bottom: 20px;
            }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);


    const defaultConfig = {
        webhook: {
            url: 'YOUR_N8N_WEBHOOK_URL',
            route: ''
        },
        branding: {
            logo: 'https://via.placeholder.com/32',
            name: 'AI Assistant',
            welcomeText: 'Hi! How can I help you today?',
            responseTimeText: 'We typically reply within minutes',
            poweredBy: {
                text: 'Powered by n8n',
                link: 'https://n8n.io'
            }
        },
        style: {
            primaryColor: '#3498db',
            secondaryColor: '#2980b9',

            backgroundColor: '#ffffff',
            fontColor: '#2c3e50'
        }
    };


    const config = window.ChatWidgetConfig ? {

        webhook: { ...defaultConfig.webhook, ...window.ChatWidgetConfig.webhook },
        branding: { ...defaultConfig.branding, ...window.ChatWidgetConfig.branding },
        style: { ...defaultConfig.style, ...window.ChatWidgetConfig.style }
    } : defaultConfig;


    if (window.N8NChatWidgetInitialized) return;
    window.N8NChatWidgetInitialized = true;

    let currentSessionId = '';


    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'n8n-chat-widget';







    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';

    const newConversationHTML = `
        <div class="brand-header">
            <img src="${config.branding.logo}" alt="${config.branding.name}">
            <span>${config.branding.name}</span>
            <button class="close-button">×</button>
        </div>
        <div class="new-conversation">
            <h2 class="welcome-text">${config.branding.welcomeText}</h2>
            <button class="new-chat-btn">
                <svg class="message-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/>
                </svg>
                Start Conversation
            </button>
            <p class="response-text">${config.branding.responseTimeText}</p>
        </div>
    `;

    const chatInterfaceHTML = `
        <div class="chat-interface">
            <div class="brand-header">
                <img src="${config.branding.logo}" alt="${config.branding.name}">
                <span>${config.branding.name}</span>
                <button class="close-button">×</button>
            </div>
            <div class="chat-messages"></div>
            <div class="chat-input">
                <textarea placeholder="Type your message..." rows="1"></textarea>
                <button type="submit">Send</button>
            </div>
            <div class="chat-footer">
                <a href="${config.branding.poweredBy.link}" target="_blank">${config.branding.poweredBy.text}</a>
            </div>
        </div>
    `;

    chatContainer.innerHTML = newConversationHTML + chatInterfaceHTML;

    const toggleButton = document.createElement('button');
    toggleButton.className = 'chat-toggle';
    toggleButton.innerHTML = `
        <img src="assets/images/bot.png" style="width:70px;height:70px;">
        `;

    widgetContainer.appendChild(chatContainer);
    widgetContainer.appendChild(toggleButton);
    document.body.appendChild(widgetContainer);

    const newChatBtn = chatContainer.querySelector('.new-chat-btn');
    const chatInterface = chatContainer.querySelector('.chat-interface');
    const messagesContainer = chatContainer.querySelector('.chat-messages');
    const textarea = chatContainer.querySelector('textarea');
    const sendButton = chatContainer.querySelector('button[type="submit"]');

    function generateUUID() {
        return crypto.randomUUID();
    }

    async function startNewConversation() {
        currentSessionId = generateUUID();
        const data = [{
            action: "loadPreviousSession",
            sessionId: currentSessionId,
            route: config.webhook.route,
            metadata: { userId: "" }


        }];

        try {
            const response = await fetch(config.webhook.url, {
                method: 'POST',

                headers: { 'Content-Type': 'application/json' },

                body: JSON.stringify(data)
            });

            const responseData = await response.json();
            chatContainer.querySelector('.brand-header').style.display = 'none';
            chatContainer.querySelector('.new-conversation').style.display = 'none';
            chatInterface.classList.add('active');

            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'chat-message bot';
            botMessageDiv.textContent = Array.isArray(responseData) ? responseData[0].output : responseData.output;
            messagesContainer.appendChild(botMessageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } catch (error) {
            console.error('Error:', error);
            const errorDiv = document.createElement('div');
            errorDiv.className = 'chat-message bot';
            errorDiv.textContent = 'Sorry, I encountered an error. Please try again.';
            messagesContainer.appendChild(errorDiv);
        }
    }

    async function sendMessage(message) {
        const messageData = {
            action: "sendMessage",
            sessionId: currentSessionId,
            route: config.webhook.route,
            chatInput: message,
            metadata: { userId: "" }


        };

        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'chat-message user';
        userMessageDiv.textContent = message;
        messagesContainer.appendChild(userMessageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        try {
            const response = await fetch(config.webhook.url, {
                method: 'POST',

                headers: { 'Content-Type': 'application/json' },

                body: JSON.stringify(messageData)
            });

            const data = await response.json();

            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'chat-message bot';
            botMessageDiv.textContent = Array.isArray(data) ? data[0].output : data.output;
            messagesContainer.appendChild(botMessageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } catch (error) {
            console.error('Error:', error);
            const errorDiv = document.createElement('div');
            errorDiv.className = 'chat-message bot';
            errorDiv.textContent = 'Sorry, I encountered an error. Please try again.';
            messagesContainer.appendChild(errorDiv);
        }
    }

    newChatBtn.addEventListener('click', startNewConversation);

    sendButton.addEventListener('click', () => {
        const message = textarea.value.trim();
        if (message) {
            sendMessage(message);
            textarea.value = '';
        }
    });

    textarea.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const message = textarea.value.trim();
            if (message) {
                sendMessage(message);
                textarea.value = '';
            }
        }
    });

    toggleButton.addEventListener('click', () => {
        chatContainer.classList.toggle('open');
    });


    const closeButtons = chatContainer.querySelectorAll('.close-button');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            chatContainer.classList.remove('open');
        });
    });
})();