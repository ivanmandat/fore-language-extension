# ExpressionService.send

ExpressionService.send
-


# ExpressionService.send


## Синтаксис


send(body: String, callback: PP.Delegate | Function,
 errorCallback: PP.Delegate | Function, contentType: String, urlParams:
 String);


## Параметры


body. Тело запроса к веб-сервису;


callback. Процедура обратного
 вызова;


errorCallback. Процедура обратного
 вызова при ошибке;


contentType. Используемый протокол:


	- application/json. Используется
	 протокол JSON-RPC. По умолчанию;


	- text/xml. Используется
	 протокол SOAP.


urlParams. Параметры URL запроса;


## Описание


Метод send отправляет запрос
 сервису выражений.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TransformDialog](../../../Components/TransformDialog/TransformDialog.htm)
 с наименованием «dialog» (см. «[Пример
 создания компонента TransformDialog](../../../Components/TransformDialog/Example_TransformDialog.htm)»). Получим количество функций
 для простого дерева:


// Создаем сервис выражений
var expService = new PP.Ufe.ExpressionService({
    Metabase: expressBox.getSource().getMetabase()
});
// Получаем количество функций для простого дерева
var body = {
    GetMsInfo: {
        tMb: expressBox.getSource().getMetabase().getConnectionOdId(),
        tArg: {
            pattern: {
                ufeFunctions: "Ts"
            }
        }
    }
};
var func = function(sender, args) {
    var res = JSON.parse(args.ResponseText);
    console.log("Количество формул: " + res.GetMsInfoResult.meta.ufeFunctions.its.Item.length);
}
expService.send(body, func);
В результате в консоль было выведено количество функций для простого
 дерева:


Количество функций: 134


См. также:


[ExpressionService](ExpressionService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
