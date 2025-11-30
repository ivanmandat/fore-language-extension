# ITabObjectChangeEventArgs

ITabObjectChangeEventArgs
-


# ITabObjectChangeEventArgs


Сборка: Tab;


## Описание


Интерфейс ITabObjectChangeEventArgs
 предназначен для работы с параметрами событий, возникающих при изменении
 объекта в компоненте [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm).


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


           [ITabObjectEventArgs](../ITabObjectEventArgs/ITabObjectEventArgs.htm)


           ITabObjectChangeEventArgs


## Комментарии


При изменении объекта возникают следующие события:


	- [OnAfterObjectChange](../../Class/TabSheetBox/TabSheetBox.OnAfterObjectChange.htm). Наступает
	 после изменения объекта;


	- [OnBeforeObjectChange](../../Class/TabSheetBox/TabSheetBox.OnBeforeObjectChange.htm). Наступает
	 до изменения объекта.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Object](ITabObjectChangeEventArgs.Object.htm)


		 Свойство Object
		 возвращает изменяемый объект.


		 ![](../../Property_Image.gif)
		 [Type](ITabObjectChangeEventArgs.Type.htm)


		 Свойство Type
		 возвращает тип изменения, которое происходит с объектом.


## Свойства, унаследованные от [ITabObjectEventArgs](../ITabObjectEventArgs/ITabObjectEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Action](../ITabObjectEventArgs/ITabObjectEventArgs.Action.htm)
		 Свойство Action возвращает
		 тип действия, совершенного над объектом таблицы.


		 ![](../../Property_Image.gif)
		 [Object](../ITabObjectEventArgs/ITabObjectEventArgs.Object.htm)
		 Свойство Object возвращает
		 объект, над которым произведено действие.


## Свойства, унаследованные от [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [TabSheet](../ITabSheetEventArgs/ITabSheetEventArgs.TabSheet.htm)
		 Свойство TabSheet возвращает
		 компонент, для которого сгенерировано событие.


См. также:


[Интерфейсы
 сборки Tab](../TabSheet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
