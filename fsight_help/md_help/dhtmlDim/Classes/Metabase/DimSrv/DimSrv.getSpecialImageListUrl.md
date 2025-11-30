# DimSrv.getSpecialImageListUrl

DimSrv.getSpecialImageListUrl
-


# DimSrv.getSpecialImageListUrl


## Синтаксис


getSpecialImageListUrl();


## Описание


Метод getSpecialImageListUrl
 возвращает путь к файлу с пиктограммами.


## Пример


Для реализации примера необходимо наличие экземпляра класса [DimSrv](DimSrv.htm)
 с наименованием «dimService» (см. [Конструктор
 DimSrv](Constructor_DimSrv.htm)). Получим путь к файлу с пиктограммами:


// Получаем путь к файлу с пиктограммами
console.log("Путь к файлу с пиктограммами: " + dimService.getSpecialImageListUrl());
В результате в консоль был выведен путь к файлу с пиктограммами:


Путь к файлу с пиктограммами: PPService.axd?action=getbin&cache=1&


mon=AOCDHKLJNKIHEOAEILAPNHHHGPFGFNFEALIPKKEPIFEMCGLC!M!$Special!DimensionImageList


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
