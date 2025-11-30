# AdhocUserViewForm

AdhocUserViewForm
-


# AdhocUserViewForm


Сборка: Adhoc;


## Описание


Класс AdhocUserViewForm предназначен
 для работы с формой-визуализатором для плагина.


## Комментарии


Форма-визуализатор содержит компоненты, образующие внешний вид плагина,
 и код, описывающий логику работы компонентов в плагине.


Готовая форма-визуализатор должна наследоваться от класса AdhocUserViewForm.


Особенности кода формы-визуализатора:


	- если плагин должен поддерживать хранимые свойства, то создайте
	 реализацию методов [AdhocUserViewForm.SaveSettings](../../Interface/IAdhocUserView/IAdhocUserView.SaveSettings.htm)
	 и [AdhocUserViewForm.LoadSettings](../../Interface/IAdhocUserView/IAdhocUserView.LoadSettings.htm);


	- если плагин должен поддерживать определенные источники данных,
	 то создайте реализацию свойства [AdhocUserViewForm.SupportedSource](../../Interface/IAdhocUserView/IAdhocUserView.SupportedSource.htm)
	 с указанием в нем [ClassId](KeSom.chm::/Enums/MetabaseObjectClass.htm)
	 требуемых источников.


Пример создания плагина приведен в разделе «[Создание плагина](DataAnalysis.chm::/Plugins/Create_Plugin.htm)».


## Свойства объекта класса, унаследованные от [IAdhocUserView](../../Interface/IAdhocUserView/IAdhocUserView.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Source](../../Interface/IAdhocUserView/IAdhocUserView.Source.htm)


		 Свойство Source
		 определяет источник данных плагина.


		 ![](../../Property_Image.gif)
		 [SupportedSource](../../Interface/IAdhocUserView/IAdhocUserView.SupportedSource.htm)


		 Свойство SupportedSource
		 возвращает типы источников данных, поддерживаемых плагином.


## Методы объекта класса, унаследованные от [IAdhocUserView](../../Interface/IAdhocUserView/IAdhocUserView.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [LoadSettings](../../Interface/IAdhocUserView/IAdhocUserView.LoadSettings.htm)


		 Метод LoadSettings
		 загружает настройки плагина из xml.


		 ![](../../Sub_Image.gif)
		 [SaveSettings](../../Interface/IAdhocUserView/IAdhocUserView.SaveSettings.htm)


		 Метод SaveSettings
		 сохраняет настройки плагина в формате xml.


См. также:


[Классы
 сборки Adhoc](../KeAdHoc_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
