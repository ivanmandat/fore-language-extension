# ExpressionService.getUfeFunctions

ExpressionService.getUfeFunctions
-


# ExpressionService.getUfeFunctions


## Синтаксис


getUfeFunctions(mode: PP.Ufe.[TransfTreeMode](../../../Enums/PP.Ufe.TransfTreeMode.htm),
 callback: PP.Delegate | Function, errCallback: PP.Delegate | Function);


## Параметры


mode. Вид дерева функций;


callback. Обработчик завершения
 пакетного запроса;


errCallback. Обработчик ошибочного
 завершения пакетного запроса.


## Описание


Метод getUfeFunctions возвращает
 дерево функций для редактора выражений.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TransformDialog](../../../Components/TransformDialog/TransformDialog.htm)
 с наименованием «dialog» (см. «[Пример
 создания компонента TransformDialog](../../../Components/TransformDialog/Example_TransformDialog.htm)»). Получим количество функций
 для простого дерева:


// Получаем сервис выражений
PP.Object.defineProps(PP.Ufe.Ui.TransformDialog, 'ExpService', true);
var expService = dialog.getExpService();
// Получаем количество функций для простого дерева
var func = function(sender, args) {
    var res = JSON.parse(args.ResponseText);
    console.log("Количество функций: " + res.GetMsInfoResult.meta.ufeFunctions.its.Item.length);
};
// Возвращаем дерево функций для редактора выражений
expService.getUfeFunctions(PP.Ufe.TransfTreeMode.Simple, func);
В результате в консоль было выведено количество функций для простого
 дерева:


Количество функций: 134


См. также:


[ExpressionService](ExpressionService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
