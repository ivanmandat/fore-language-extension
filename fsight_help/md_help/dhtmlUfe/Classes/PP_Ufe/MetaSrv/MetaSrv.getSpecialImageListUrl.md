# MetaSrv.getSpecialImageListUrl

MetaSrv.getSpecialImageListUrl
-


# MetaSrv.getSpecialImageListUrl


## Синтаксис


getSpecialImageListUrl();


## Описание


Метод getSpecialImageListUrl
 возвращает путь к файлу с пиктограммами для дерева метаданных.


## Пример


Для реализации примера необходимо наличие экземпляра класса [MetaTree](../../PP_Ufe_Ui/MetaTree/MetaTree.htm)
 с наименование «metaTree» (см. [Конструктор
 MetaTree](../../PP_Ufe_Ui/MetaTree/Constructor_MetaTree.htm)). Получим путь к файлу с пиктограммами для дерева метаданных:


// Получаем путь к файлу с пиктограммами для дерева метаданных:
console.log("Путь к файлу с пиктограммами: " + metaService.getSpecialImageListUrl());
В результате в консоль был выведен путь к файлу с пиктограммами для
 дерева метаданных:


Путь к файлу с пиктограммами: ../build/img/GlbClsImg16.png


См. также:


[MetaSrv](MetaSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
