# TabBeforeObjectRectChangeEventArgs

TabBeforeObjectRectChangeEventArgs
-


# TabBeforeObjectRectChangeEventArgs


Сборка: Tab;


## Описание


Класс TabBeforeObjectRectChangeEventArgs
 предназначен для работы с параметрами события, возникающего до перемещения
 объекта или изменения его размеров.


## Комментарии


Данное событие наступило, если значение свойства [ITabObjectChangeEventArgs.Type](../../Interface/ITabObjectChangeEventArgs/ITabObjectChangeEventArgs.Type.htm),
 возвращаемое параметром Args
 в событии [OnBeforeObjectChange](../TabSheetBox/TabSheetBox.OnBeforeObjectChange.htm)
 компонента [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm) имеет значение
 [TabObjectChangeType.Rect](../../Enums/TabObjectChangeType.htm).


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](TabBeforeObjectRectChangeEventArgs.Create.htm)
		 Конструктор Create
		 создаёт аргумент события, возникающего до перемещения объекта
		 или изменения его размеров.


## Свойства объекта класса, унаследованные от [ITabBeforeObjectRectChangeEventArgs](../../Interface/ITabBeforeObjectRectChangeEventArgs/ITabBeforeObjectRectChangeEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](../../Interface/ITabBeforeObjectRectChangeEventArgs/ITabBeforeObjectRectChangeEventArgs.Cancel.htm)


		 Свойство Cancel
		 определяет, отменять ли перемещение или изменение размеров объекта.


		 ![](../../Property_Image.gif)
		 [NewValue](../../Interface/ITabBeforeObjectRectChangeEventArgs/ITabBeforeObjectRectChangeEventArgs.NewValue.htm)


		 Свойство NewValue
		 определяет новое положение и размер объекта.


## Свойства объекта класса, унаследованные от [ITabObjectChangeEventArgs](../../Interface/ITabObjectChangeEventArgs/ITabObjectChangeEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Object](../../Interface/ITabObjectChangeEventArgs/ITabObjectChangeEventArgs.Object.htm)


		 Свойство Object
		 возвращает изменяемый объект.


		 ![](../../Property_Image.gif)
		 [Type](../../Interface/ITabObjectChangeEventArgs/ITabObjectChangeEventArgs.Type.htm)


		 Свойство Type
		 возвращает тип изменения, которое происходит с объектом.


## Свойства объекта класса, унаследованные от [ITabObjectEventArgs](../../Interface/ITabObjectEventArgs/ITabObjectEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Action](../../Interface/ITabObjectEventArgs/ITabObjectEventArgs.Action.htm)
		 Свойство Action возвращает
		 тип действия, совершенного над объектом таблицы.


		 ![](../../Property_Image.gif)
		 [Object](../../Interface/ITabObjectEventArgs/ITabObjectEventArgs.Object.htm)
		 Свойство Object возвращает
		 объект, над которым произведено действие.


## Свойства объекта класса, унаследованные от [ITabSheetEventArgs](../../Interface/ITabSheetEventArgs/ITabSheetEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [TabSheet](../../Interface/ITabSheetEventArgs/ITabSheetEventArgs.TabSheet.htm)
		 Свойство TabSheet возвращает
		 компонент, для которого сгенерировано событие.


См. также:


[Классы
 сборки Tab](../TabSheet_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
