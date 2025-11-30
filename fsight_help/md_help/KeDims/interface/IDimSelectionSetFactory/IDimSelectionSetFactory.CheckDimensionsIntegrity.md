# IDimSelectionSetFactory.CheckDimensionsIntegrity

IDimSelectionSetFactory.CheckDimensionsIntegrity
-


# IDimSelectionSetFactory.CheckDimensionsIntegrity


## Синтаксис


CheckDimensionsIntegrity(Options: Integer; Value:
 [IDimSelectionSet](../IDimSelectionSet/IDimSelectionSet.htm)):
 Integer;


## Параметры


Options. Параметр зарезервирован
 на будущее.


Value. Комплексная отметка
 справочников.


## Описание


Метод CheckDimensionsIntegrity
 осуществляет проверку построения всех справочников, входящих в указанную
 комплексную отметку.


## Комментарии


При выполнении метода осуществляется проверка построения каждого справочника,
 входящего в отметку. Если при построении возникнет ошибка, то ошибка будет
 проброшена на уровень платформы.


См. также:


[IDimSelectionSetFactory](IDimSelectionSetFactory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
