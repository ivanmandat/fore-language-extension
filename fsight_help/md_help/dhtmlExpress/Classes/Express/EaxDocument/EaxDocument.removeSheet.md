# EaxDocument.removeSheet

EaxDocument.removeSheet
-


**


# EaxDocument.removeSheet


## Синтаксис


removeSheet(keyOdId);


## Параметры


*keyOdId.* Ключ или идентификатор
 документа экспресс-отчета.


## Описание


Метод removeSheet** удаляет
 лист документа экспресс-отчета по его ключу или идентификатору.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). В результате выполнения примера
 будут удалены все листы документа экспресс-отчета:


// Получаем документ экспресс-отчета
var eaxDocument = expressBox.getSource();
// Получим массив листов экспресс-отчета
var sheets = eaxDocument.getSheets();
var isRemove = false;
for (var i in sheets) {
    eaxDocument.removeSheet(i);
    isRemove = true;
}
if (isRemove) {
    console.log("Удаление листов документа произведено успешно.");
} else {
    console.log("Документ экспресс-отчета не содержит листов");
}
// Обновим экспресс-отчет
expressBox.refreshAll();

В результате выполнения примера были удалены все листы документа экспресс-отчета,
 о чем свидетельствует выведенное в консоли браузера соответствующее сообщение.


См. также:


[EaxDocument](EaxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
