/**
 * @deprecated I don't know why. but, it's removed now.
 */
declare class sessionManager {
    /**
     * 다른 메신저 앱의 특정 방에 채팅이 왔을 때 메시지를 전송합니다.
     * @param packageName
     * @param room 방의 이름
     * @param action 메시지 전송 구현을 위한 android.app.Notification.Action 객체
     * @returns action 과 앱이 자동 분석한 답장 액션이 모두 null이 아닌지 여부 (boolean)
     */
    public static bindSession(
        packageName: string, 
        room: string, 
        action?: android.app.Notification.Action
    ): boolean;
    public static bindSession(): boolean;
}
//영어 이슈;;