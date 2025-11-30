# ExpressionService.setExpression

ExpressionService.setExpression
-


# ExpressionService.setExpression


## Синтаксис


setExpression(args: Object, callback: PP.Delegate|Function,
 errCallback: PP.Delegate|Function);


## Параметры


args. Аргументы операции. Объект
 должен содержать следующие поля: reportOdId
 - моникёр экспресс-отчета; reportType
 - вид отчета; transfType - вид
 преобразователя; transfKey - ключ
 преобразователя; serieKey - ключ
 ряда; terms - признак получения
 термов, если для аргумента установлено значение true, то будут возвращены
 добавленные термы; isValid - признак
 проверки добавляемых термов, если для аргумента установлено значение true, то термы будут проверены на
 правильность; formulaString -
 строковое представление формулы; newTermsParams
 - массив параметров новых термов; position
 - позиция вставки новых термов (если для аргумента установлено значение
 -1, то термы не будут добавлены в выражение);


callback. Процедура обратного
 вызова;


errCallback. Процедура обратного
 вызова при ошибке.


## Описание


Метод setExpression отправляет
 запрос на добавление термов для выражения.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TransformDialog](../../../Components/TransformDialog/TransformDialog.htm)
 с наименованием «dialog» (см. «[Пример
 создания компонента TransformDialog](../../../Components/TransformDialog/Example_TransformDialog.htm)»). Получим сервис выражений и
 добавим обработчики событий GetTerms и GetTermsErr. Отправим запрос на
 получение термов из элемента измерения в выражение:


// Получаем сервис выражений
PP.Object.defineProps(PP.Ufe.Ui.TransformDialog, 'ExpService', true);
PP.Object.defineProps(PP.Ufe.Ui.TransformDialog, 'transformations', true);
var expService = dialog.getExpService();
// Добавляем обработчик получения термов сервисом выражений
expService.GetTerms.add(function(sender, args) {
    console.log("Термы получены");
});
// Добавляем обработчик ошибки получения термов сервисом выражений
expService.GetTermsErr.add(function(sender, args) {
    console.log("Ошибка получения термов");
});
// Получаем термы элемента измерения для выражения
var myArgs = {
    isValid: true,
    position: 0,
    reportOdId: expressBox.getSource().getOdId().id,
    reportType: "Eax",
    terms: true,
    transfType: "Calc",
    transfKey: dialog.gettransformations().getTransformations()[0].k,
    newTermParams: [{
        n: "tag",
        v: "eax.sel"
    }, {
        n: "D_SEP",
        v: "30000"
    }]
};
expService.setExpression(myArgs);
В результате в консоль было выведено сообщение о получении термов:


Термы получены


Отправим запрос на получение термов с неправильным ключом преобразователя:


// Получаем термы элемента измерения для выражения
var myArgs = {
    isValid: true,
    position: 0,
    reportOdId: expressBox.getSource().getOdId().id,
    reportType: "Eax",
    terms: true,
    transfType: "Calc",
    transfKey: "key",
    newTermParams: [{
        n: "tag",
        v: "eax.sel"
    }, {
        n: "D_SEP",
        v: "30000"
    }]
};
expService.setExpression(myArgs);
В результате в консоль было выведено об ошибке получения термов:


Ошибка получения термов


См. также:


[ExpressionService](ExpressionService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
