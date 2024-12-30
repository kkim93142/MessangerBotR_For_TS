//아 영어로 번역하기 귀찮다 ㅁㄴㅇㄹ
declare module Broadcast {
    /**
     * 모든 스크립트를 대상으로 특정 값을 브로드캐스트합니다.
     * 
     * @param broadcastName - 브로드캐스트 이름
     * @param value - 브로드캐스트로 송출할 값 (register()의 인자 task의 인자로 주어짐)
     */
    function send(broadcastName: string, value: any): void;

    /**
     * 특정 브로드캐스트에 대한 리스너를 추가합니다.
     * 
     * @param broadcastName - 리스너를 추가할 브로드캐스트 이름
     * @param task - 리스너로 추가할 함수
     */
    function register(broadcastName: string, task: (value: any) => any): void;

    /**
     * 특정 브로드캐스트에 대한 특정 리스너를 제거합니다.
     * 
     * @param broadcastName - 특정 리스너를 제거할 브로드캐스트 이름
     * @param task - 제거할 리스너
     */
    function unregister(broadcastName: string, task: (value: any) => any): void;

    /**
     * 현재 스크립트의 브로드캐스트에 등록된 모든 리스너를 제거합니다.
     */
    function unregisterAll(): void;
}
