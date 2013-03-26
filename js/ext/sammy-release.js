function SammyInit()
{
    Sammy(function() {
        this.get('#:action/:item', function() {
            console.log("action=" + this.params.action + " item=" + this.params.item);
        });
    }).run();
}
