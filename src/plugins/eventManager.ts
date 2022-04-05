export default class EventManager {
    private subscribers: { (): void }[] = []

    public addSubscription(subscription: () => void) {
        this.subscribers.push(subscription)
        this.notifySubscriptions()
    }

    public removeSubscription(subscription: () => void) {
        this.subscribers = this.subscribers.filter(
            (sub) => sub !== subscription
        )
        this.notifySubscriptions()
    }

    public notifySubscriptions() {
        this.subscribers.forEach((sub) => sub())
    }
}
