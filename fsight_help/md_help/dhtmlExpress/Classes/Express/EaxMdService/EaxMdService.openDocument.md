# EaxMdService.openDocument

EaxMdService.openDocument
-


**


# EaxMdService.openDocument


## Синтаксис


openDocument(key: Number, callback: PP.Delegate||function, params);


## Параметры


*key.* Ключ документа экспресс-отчёта, который необходимо открыть;


*callback.* Возвратная функция, которую необходимо вызвать после открытия;


*params.* Параметры, с которыми необходимо открыть объект.


## Описание


Метод openDocument** открывает документ экспресс-отчета в режиме просмотра.


## Комментарии


Метод возвращает объект типа PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Откроем экспресс-отчет с ключом 109 в режиме просмотра, а также обработаем соответствующее событие:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Обработаем событие EaxDocumentOpened
eaxMdService.EaxDocumentOpened.add(function (sender, args) {
    // Получим ключ текущего документа экспресс-отчета
    console.log("Ключ текущего документа экспресс-отчета: " + expressBox.getSource().getKey());
    console.log("Ключ открытого документа экспресс-отчета: " + args.Document.getKey());
});
// Откроем документ экспресс-отчета с ключом 109 в режиме просмотра
eaxMdService.openDocument(109);

После выполнения примера был открыт в режиме просмотра экспресс-отчет с ключом 109. В результате этого было сгенерировано событие [EaxDocumentOpened](EaxMdService.EaxDocumentOpened.htm), которое вывело в консоль браузера ключ текущего и открытого документа экспресс-отчета:


Ключ текущего документа экспресс-отчета: 108

Ключ открытого документа экспресс-отчета: 109


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
