# ReportBeforeObjectAngleChangeEventArgs

ReportBeforeObjectAngleChangeEventArgs
-


# ReportBeforeObjectAngleChangeEventArgs


Сборка: Report;


## Описание


Класс ReportBeforeObjectAngleChangeEventArgs
 предназначен для работы с параметрами события, возникающего до вращения
 объекта.


## Комментарии


Данное событие наступило, если значение свойства [IReportObjectChangeEventArgs.Type](../../Interface/IReportObjectChangeEventArgs/IReportObjectChangeEventArgs.Type.htm),
 возвращаемое параметром Args в событии [ReportBox.OnBeforeObjectChange](../ReportBox/ReportBox.OnBeforeObjectChange.htm)
 компонента [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm)
 имеет значение [TabObjectChangeType.Angle](TabSheet.chm::/Enums/TabObjectChangeType.htm)
 .


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](ReportBeforeObjectAngleChangeEventArgs.Create.htm)
		 Конструктор Create
		 создаёт аргумент события, возникающего при вращении объекта.


## Конструкторы, унаследованные от [ReportObjectChangeEventArgs](../ReportObjectChangeEventArgs/ReportObjectChangeEventArgs.htm)


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateObjectChangeArgs](../ReportObjectChangeEventArgs/ReportObjectChangeEventArgs.CreateObjectChangeArgs.htm)
		 Конструктор CreateObjectChangeArgs
		 создаёт аргумент события, возникающего при изменении объекта.


## Конструкторы, унаследованные от [ReportEventArgs](../ReportEventArgs/ReportEventArgs.htm)


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateArgs](../ReportEventArgs/ReportEventArgs.CreateArgs.htm)
		 Конструктор CreateArgs
		 создает аргумент событий компонента [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm).


## Свойства объекта класса, унаследованные от [IReportBeforeObjectAngleChangeEventArgs](../../Interface/IReportBeforeObjectAngleChangeEventArgs/IReportBeforeObjectAngleChangeEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](../../Interface/IReportBeforeObjectAngleChangeEventArgs/IReportBeforeObjectAngleChangeEventArgs.Cancel.htm)
		 Свойство Cancel определяет,
		 отменять ли вращение объекта.


		 ![](../../Property_Image.gif)
		 [NewValue](../../Interface/IReportBeforeObjectAngleChangeEventArgs/IReportBeforeObjectAngleChangeEventArgs.NewValue.htm)
		 Свойство NewValue определяет
		 угол, на который был повёрнут объект.


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
