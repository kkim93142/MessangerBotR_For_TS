// These types are defined for MESSANGER BOT

export type MessageType = {
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
    reply: (message: string) => void,
    markAsRead: () => void,
    /**
     * ID of message
     */
    logId: number,
    channelId: number,
};
export type CommandType = {
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
    reply: (message: string) => void,
    markAsRead: () => void,
    /**
     * ID of message
     */
    logId: number,
    channelId: number,
    /**
     * @description Wrong grammar. Actually it's "hasMention".
     */
    isMention: boolean,
    command: string,
    args: string[],
};
export type UserType = {
    name: string,
    avatar: ImageType,
    hash: string | null,
};
export type ImageType = {
    /**
     * Returns the message sender's profile picture encoded to Base64.
     */
    getBase64: () => string,
    /**
     * Returns the message sender's profile picture as android.graphic.Bitmap instance.
     */
    getBitmap: () => android.graphics.Bitmap
};