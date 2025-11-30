# EaxMdService.loadDocMd

EaxMdService.loadDocMd
-


**


# EaxMdService.loadDocMd


## Синтаксис


loadDocMd(doc: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm),
 callback);


## Параметры


*doc.* Документ, загружаемый
 в экспресс-отчет.


*callback.* Возвратная
 функция.


## Описание


Метод loadDocMd** загружает
 документ в сервис для работы с экспресс-отчетом.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Создадим новый документ экспресс-отчета
 и загрузим его в сервис для работы с ним:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Создадим новый документ экспресс-отчета
var eaxDocument = eaxMdService.createDocument(0, "New Document");
// Определяем возвратную функцию
var callback = function (sender, args) {
    console.log("В сервис загружен документ экспресс-отчета с ключом " + args.Args.getKey());
};
// Загружаем документ в сервис для работы с экспресс-отчетом
eaxMdService.loadDocMd(eaxDocument, PP.Delegate(callback, this, eaxDocument));

В результате выполнения примера был создан новый документ, и он был
 загружен в сервис для работы с экспресс-отчетом. При этом в консоли браузера
 был выведен ключ нового документа:


В сервис загружен документ экспресс-отчета с ключом
 2695


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
