# EaxDocument.ActiveSheetKey

EaxDocument.ActiveSheetKey
-


**


# EaxDocument.ActiveSheetKey


## Синтаксис


ActiveSheetKey: Number


## Описание


Свойство ActiveSheetKey** содержит ключ активного листа документа экспресс-отчета.


## Комментарии


Значение метода можно установить из JSON и с помощью метода setActiveSheetKey, а возвратить с помощью метода getActiveSheetKey.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим ключ активного листа экспресс-отчета, его наименование и идентификатор:


// Получим ключ активного листа документа
var key = eaxDocument.getActiveSheetKey();
console.log("Ключ активного листа: " + key);
// Получим наименование активного листа
console.log("Наименование листа: " + eaxDocument.getSheetName(key));
// Получим рабочий лист документа по его ключу
var sheet = eaxDocument.getSheet(key);
// Получим идентификатор рабочего листа
console.log("Идентификатор листа: " + sheet.getId());

В результате выполнения примера в консоли браузера были выведен ключ, наименование и идентификатор активного листа экспресс-отчета:


Ключ активного листа: 108

Наименование листа: Динамика показателей по региону

Идентификатор листа: EXP_DYN1


См. также:


[EaxDocument](EaxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
