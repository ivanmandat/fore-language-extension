# SysSettings

SysSettings
-


# SysSettings


Сборка: System;


## Описание


Класс SysSettings реализует
 объект, предназначенный для работы с файлом настроек BI-сервера
 - [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).


## Комментарии


При инициализации объекта данного класса, если файл [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm)
 не существует, то он будет создан. Если файл существует, то из него будут
 считаны все настройки. Доступ к содержимому файла можно получить используя
 свойство [ISysSettings.Root](../../Interface/ISysSettings/ISysSettings.Root.htm).


## Свойства объекта класса, унаследованные от [ISysSettings](../../Interface/ISysSettings/ISysSettings.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CriticalLock](../../Interface/ISysSettings/ISysSettings.CriticalLock.htm)
		 Свойство CriticalLock
		 вызывает блокировку текущего экземпляра объекта, используемого
		 для редактирования файла с настройками.


		 ![](../../Property_Image.gif)
		 [Location](../../Interface/ISysSettings/ISysSettings.Location.htm)
		 Свойство Location возвращает
		 место расположения файла настроек [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).


		 ![](../../Property_Image.gif)
		 [Root](../../Interface/ISysSettings/ISysSettings.Root.htm)
		 Свойство Root возвращает
		 параметры элемента «Root» из файла с настройками.


## Методы объекта класса, унаследованные от [ISysSettings](../../Interface/ISysSettings/ISysSettings.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Commit](../../Interface/ISysSettings/ISysSettings.Commit.htm)
		 Метод Commit сохраняет
		 изменения в файле с настройками.


		 ![](../../Sub_Image.gif)
		 [Refresh](../../Interface/ISysSettings/ISysSettings.Refresh.htm)
		 Метод Refresh обновляет
		 информацию в текущем экземпляре объекта, загружая возможные изменения
		 из файла с настройками.


См. также:


[Классы
 сборки System](../System_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
