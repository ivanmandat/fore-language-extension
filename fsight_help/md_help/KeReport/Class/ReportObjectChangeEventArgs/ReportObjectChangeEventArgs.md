# ReportObjectChangeEventArgs

ReportObjectChangeEventArgs
-


# ReportObjectChangeEventArgs


Сборка: Report;


## Описание


Класс ReportObjectChangeEventArgs
 предназначен для работы с параметрами событий, возникающих при изменении
 объекта в компоненте [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm).


## Комментарии


При изменении объекта возникают следующие события:


	- [OnAfterObjectChange](../ReportBox/ReportBox.OnAfterObjectChange.htm).
	 Наступает после изменения объекта;


	- [OnBeforeObjectChange](../ReportBox/ReportBox.OnBeforeObjectChange.htm).
	 Наступает до изменения объекта.


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateObjectChangeArgs](ReportObjectChangeEventArgs.CreateObjectChangeArgs.htm)
		 Конструктор CreateObjectChangeArgs
		 создаёт аргумент события, возникающего при изменении объекта.


## Конструкторы, унаследованные от [ReportEventArgs](../ReportEventArgs/ReportEventArgs.htm)


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateArgs](../ReportEventArgs/ReportEventArgs.CreateArgs.htm)
		 Конструктор CreateArgs
		 создает аргумент событий компонента [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm).


## Свойства объекта класса, унаследованные от [IReportObjectChangeEventArgs](../../Interface/IReportObjectChangeEventArgs/IReportObjectChangeEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Object](../../Interface/IReportObjectChangeEventArgs/IReportObjectChangeEventArgs.Object.htm)
		 Свойство Object возвращает
		 изменяемый объект.


		 ![](../../Property_Image.gif)
		 [Type](../../Interface/IReportObjectChangeEventArgs/IReportObjectChangeEventArgs.Type.htm)
		 Свойство Type возвращает
		 тип изменения, которое происходит с объектом.


## Свойства объекта класса, унаследованные от [IReportEventArgs](../../Interface/IReportEventArgs/IReportEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Report](../../Interface/IReportEventArgs/IReportEventArgs.Report.htm)
		 Свойство Report возвращает
		 компонент [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm),
		 сгенерировавший какое-либо событие.


		 ![](../../Property_Image.gif)
		 [Sheet](../../Interface/IReportEventArgs/IReportEventArgs.Sheet.htm)
		 Свойство Sheet возвращает
		 лист регламентного отчета, на котором произошло какое-либо событие.


См. также:


[Классы
 сборки Report](../KeReport_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
