// Modified Chat Widget Script for Portfolio
(function () {

    const styles = `
        .n8n-chat-widget {
            --chat--color-primary: #3498db;
            --chat--color-secondary: #2980b9;
            --chat--color-background: #ffffff;
            --chat--color-font: #2c3e50;
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .n8n-chat-widget .chat-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            display: none;
            width: 360px;
            height: 600px;
            background: var(--chat--color-background);
            border-radius: 16px;
            box-shadow: 0 10px 50px rgba(52, 152, 219, 0.2);
            border: 2px solid #3498db;
            overflow: hidden;
            font-family: inherit;
        }

														
						
					   
		 

        .n8n-chat-widget .chat-container.open {
            display: flex;
            flex-direction: column;
        }

        .n8n-chat-widget .brand-header {
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
            position: relative;
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
            width: 45px;
            height: 45px;
            border-radius: 20%;
            background: #3498db;
        }

        .n8n-chat-widget .brand-header span {
            font-size: 18px;
            font-weight: 600;
            color: #ffffff;
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
            font-size: 24px;
            font-weight: 600;
            color: var(--chat--color-font);
            margin-bottom: 24px;
            line-height: 1.3;
        }

        .n8n-chat-widget .new-chat-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            max-width: 280px;
            padding: 16px 24px;
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: transform 0.3s;
            font-weight: 500;
            font-family: inherit;
            margin-bottom: 12px;
        }

        .n8n-chat-widget .new-chat-btn:hover {
            transform: scale(1.02);
        }

        .n8n-chat-widget .message-icon {
            width: 20px;
            height: 20px;
        }

        .n8n-chat-widget .response-text {
            font-size: 14px;
            color: #5a6c7d;
						 
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
            padding: 20px;
            background: #f8f9fa;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .n8n-chat-widget .chat-messages::-webkit-scrollbar {
            width: 6px;
        }

        .n8n-chat-widget .chat-messages::-webkit-scrollbar-thumb {
            background: #3498db;
            border-radius: 3px;
        }

        .n8n-chat-widget .chat-message {
            padding: 12px 16px;
						  
            border-radius: 12px;
            max-width: 80%;
            word-wrap: break-word;
            font-size: 14px;
            line-height: 1.5;
            animation: messageSlide 0.3s ease-out;
        }

        @keyframes messageSlide {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .n8n-chat-widget .chat-message.user {
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
            color: white;
            align-self: flex-end;
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.2);
						 
        }

        .n8n-chat-widget .chat-message.bot {
            background: #ffffff;
            border: 1px solid #e0e0e0;
            color: var(--chat--color-font);
            align-self: flex-start;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .n8n-chat-widget .chat-input {
            padding: 16px;
            background: var(--chat--color-background);
            border-top: 1px solid #e0e0e0;
            display: flex;
            gap: 8px;
        }

        .n8n-chat-widget .chat-input textarea {
            flex: 1;
            padding: 12px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            background: var(--chat--color-background);
            color: var(--chat--color-font);
            resize: none;
            font-family: inherit;
            font-size: 14px;
            outline: none;
        }

        .n8n-chat-widget .chat-input textarea:focus {
            border-color: #3498db;
        }

        .n8n-chat-widget .chat-input textarea::placeholder {
            color: #5a6c7d;
            opacity: 0.6;
        }

        .n8n-chat-widget .chat-input button {
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
            color: white;
            border: none;
            border-radius: 8px;
            padding: 0 20px;
            cursor: pointer;
            transition: transform 0.2s;
            font-family: inherit;
            font-weight: 500;
        }

        .n8n-chat-widget .chat-input button:hover {
            transform: scale(1.05);
        }

        .n8n-chat-widget .chat-toggle {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            border-radius: 30px;
            background: #3498db;
            color: white;
            border: none;
            cursor: pointer;
            box-shadow: 0 5px 20px rgba(52, 152, 219, 0.4);
            z-index: 999;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }

													 
						
					   
		 

        .n8n-chat-widget .chat-toggle:hover {
            transform: scale(1.1);
            background: #2980b9;
        }

        .n8n-chat-widget .chat-toggle svg {
            width: 24px;
            height: 24px;
            fill: currentColor;
        }

        .n8n-chat-widget .chat-footer {
            display: none;
            padding: 12px;
            text-align: center;
            background: var(--chat--color-background);
            border-top: 1px solid #e0e0e0;
        }

        .n8n-chat-widget .chat-footer a {
            color: #3498db;
            text-decoration: none;
            font-size: 12px;
						 
            transition: opacity 0.2s;
            font-family: inherit;
        }

        .n8n-chat-widget .chat-footer a:hover {
            opacity: 0.8;
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