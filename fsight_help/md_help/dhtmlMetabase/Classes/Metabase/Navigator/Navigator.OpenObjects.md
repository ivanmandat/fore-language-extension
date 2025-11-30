# Navigator.OpenObjects

Navigator.OpenObjects
-


# Navigator.OpenObjects


## Синтаксис


OpenObjects: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.Доступны следующие аргументы:


ModuleObject. Метаданные [объекта пользовательского класса](../Metabase/Metabase.getCustomClasses.htm):


-
Class. Идентификатор класса открываемого объекта, элемент перечисления PP.Mb.Ui.[MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm);


-
Data. Метаданные объекта;


-
Url. URL-адрес скрипта, реализующего операции.


Objects. Массив открываемых объектов;


OpenMode. Режим открытия объекта: View - на просмотр, Open - на редактирование.


## Описание


Событие OpenObjects наступает при открытии объекта репозитория.


## Пример


Пример использования события приведен на странице «[Пример создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)».


См. также:


[Navigator](Navigator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
