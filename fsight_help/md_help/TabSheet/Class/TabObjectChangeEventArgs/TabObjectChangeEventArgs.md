# TabObjectChangeEventArgs

TabObjectChangeEventArgs
-


# TabObjectChangeEventArgs


Сборка: Tab;


## Описание


Класс TabObjectChangeEventArgs
 предназначен для работы с параметрами событий, возникающих при изменении
 объекта в компоненте [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm).


## Комментарии


При изменении объекта возникают следующие события:


	- [OnAfterObjectChange](../TabSheetBox/TabSheetBox.OnAfterObjectChange.htm). Наступает
	 после изменения объекта;


	- [OnBeforeObjectChange](../TabSheetBox/TabSheetBox.OnBeforeObjectChange.htm). Наступает
	 до изменения объекта.


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateObjectChangeArgs](TabObjectChangeEventArgs.CreateObjectChangeArgs.htm)
		 Конструктор CreateObjectChangeArgs
		 создаёт аргумент события, возникающего при изменении объекта.


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
