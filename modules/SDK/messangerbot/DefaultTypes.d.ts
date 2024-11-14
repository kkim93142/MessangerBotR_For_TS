declare type MessageType = {
    /**
     * The whole message
     */
    content: string,
    /**
     * The name of room
     */
    room: string,
    /**
     * Sender
     */
    author: UserType,
    isGroupChat: boolean,
    isDebugRoom: boolean,
    packageName: string,
    /**
     * @description Wrong grammar. Actually it's "hasMention".
     */
    isMention: boolean,
    reply: (message: any) => void,
    markAsRead: () => void,
    /**
     * ID of message
     */
    logId: number,
    channelId: number,
};

declare type CommandType = MessageType & {
    command: string,
    args: string[],
};

declare type UserType = {
    name: string,
    avatar: ImageType,
    hash: string | null,
};

declare type ImageType = {
    /**
     * Returns the message sender's profile picture encoded to Base64.
     */
    getBase64: () => string,
    /**
     * Returns the message sender's profile picture as android.graphic.Bitmap instance.
     */
    getBitmap: () => android.graphics.Bitmap
};
