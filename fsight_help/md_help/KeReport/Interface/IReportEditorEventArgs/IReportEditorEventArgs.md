# IReportEditorEventArgs

IReportEditorEventArgs
-


# IReportEditorEventArgs


Сборка: Report;


## Описание


Интерфейс IReportEditorEventArgs
 содержит свойства аргумента события, возникающего при редактировании текста
 в ячейке.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IReportEventArgs](../IReportEventArgs/IReportEventArgs.htm)


           IReportEditorEventArgs


## Комментарии


Данный аргумент используется при обработке следующих событий:


	- [OnEditorTextChanged](../../Class/ReportBox/ReportBox.OnEditorTextChanged.htm)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Editor](IReportEditorEventArgs.Editor.htm)
		 Свойство Editor возвращает
		 параметры редактора ячейки таблицы.


## Свойства, унаследованные от [IReportEventArgs](../IReportEventArgs/IReportEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Report](../IReportEventArgs/IReportEventArgs.Report.htm)
		 Свойство Report возвращает
		 компонент [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm),
		 сгенерировавший какое-либо событие.


		 ![](../../Property_Image.gif)
		 [Sheet](../IReportEventArgs/IReportEventArgs.Sheet.htm)
		 Свойство Sheet возвращает
		 лист регламентного отчета, на котором произошло какое-либо событие.


См. также:


[Интерфейсы
 сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
