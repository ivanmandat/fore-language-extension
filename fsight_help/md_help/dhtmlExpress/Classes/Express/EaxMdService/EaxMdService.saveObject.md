# EaxMdService.saveObject

EaxMdService.saveObject
-


**


# EaxMdService.saveObject


## Синтаксис


saveObject(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm), callback);


## Параметры


*report.* Документ экспресс-отчета, который нужно сохранить;


*callback.* Возвратная функция.


## Описание


Метод saveObject** сохраняет экспресс-отчёт и все его листы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Добавим вручную новый лист документа экспресс-отчета и программно сохраним изменения:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Получим документ экспресс-отчета
var eaxDocument = expressBox.getSource();
// Обработаем событие Saved
eaxMdService.Saved.add(function (sender, args) {
    // Получим ключ текущего документа экспресс-отчета
    console.log("Документ с ключом " + args.Report.getKey() + " сохранен.");
});
// Сохраним документ экспресс-отчета
eaxMdService.saveObject(eaxDocument);

После выполнения примера был сохранен документ экспресс-отчета, о чем в результате срабатывания обработчика события [Saved](EaxMdService.Saved.htm) в консоли браузера было выведено соответствующее сообщение:


Документ с ключом 108 сохранен.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
