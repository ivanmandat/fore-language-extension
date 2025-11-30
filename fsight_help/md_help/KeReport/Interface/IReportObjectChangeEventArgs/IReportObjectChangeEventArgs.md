# IReportObjectChangeEventArgs

IReportObjectChangeEventArgs
-


# IReportObjectChangeEventArgs


Сборка: Report;


## Описание


Интерфейс IReportObjectChangeEventArgs
 предназначен для работы с параметрами событий, возникающих при изменении
 объекта в компоненте [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm).


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IReportEventArgs](../IReportEventArgs/IReportEventArgs.htm)


           IReportObjectChangeEventArgs


## Комментарии


При изменении объекта возникают следующие события:


	- [OnAfterObjectChange](../../Class/ReportBox/ReportBox.OnAfterObjectChange.htm).
	 Наступает после изменения объекта;


	- [OnBeforeObjectChange](../../Class/ReportBox/ReportBox.OnBeforeObjectChange.htm).
	 Наступает до изменения объекта.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Object](IReportObjectChangeEventArgs.Object.htm)
		 Свойство Object возвращает
		 изменяемый объект.


		 ![](../../Property_Image.gif)
		 [Type](IReportObjectChangeEventArgs.Type.htm)
		 Свойство Type возвращает
		 тип изменения, которое происходит с объектом.


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
