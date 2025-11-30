# ISysSettingsKey

ISysSettingsKey
-


# ISysSettingsKey


Сборка: System;


## Описание


Интерфейс ISysSettingsKey содержит
 свойства и методы для работы с отдельным элементом файла настроек [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).


## Иерархия наследования


ISysSettingsKey


## Комментарии


Параметры корневого элемента можно получить в свойстве [ISysSettings.Root](../ISysSettings/ISysSettings.Root.htm).
 Параметры различных дочерних элементов возвращает метод [ISysSettingsKey.BindKey](ISysSettingsKey.BindKey.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Element](ISysSettingsKey.Element.htm)
		 Свойство Element возвращает
		 XML-представление текущего элемента.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [BindKey](ISysSettingsKey.BindKey.htm)
		 Метод BindKey возвращает
		 параметры указанного элемента с настройками.


См. также:


[Интерфейсы
 сборки System](../System_interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
