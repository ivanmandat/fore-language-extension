# ITabBeforeObjectAngleChangeEventArgs

ITabBeforeObjectAngleChangeEventArgs
-


# ITabBeforeObjectAngleChangeEventArgs


Сборка: Tab;


## Описание


Интерфейс ITabBeforeObjectAngleChangeEventArgs
 предназначен для работы с параметрами события, возникающего до вращения
 объекта.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [ITabSheetEventArgs](../ITabSheetEventArgs/ITabSheetEventArgs.htm)


           [ITabObjectEventArgs](../ITabObjectEventArgs/ITabObjectEventArgs.htm)


           [ITabObjectChangeEventArgs](../ITabObjectChangeEventArgs/ITabObjectChangeEventArgs.htm)


           ITabBeforeObjectAngleChangeEventArgs


## Комментарии


Данное событие наступило, если значение свойства [ITabObjectChangeEventArgs.Type](../ITabObjectChangeEventArgs/ITabObjectChangeEventArgs.Type.htm),
 возвращаемое параметром Args
 в событии [OnBeforeObjectChange](../../Class/TabSheetBox/TabSheetBox.OnBeforeObjectChange.htm)
 компонента [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm) имеет значение
 [TabObjectChangeType.Angle](../../Enums/TabObjectChangeType.htm).
 Для получения параметров события приведите параметр Args
 к интерфейсу ITabBeforeObjectAngleChangeEventArgs.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](ITabBeforeObjectAngleChangeEventArgs.Cancel.htm)


		 Свойство Cancel
		 определяет, отменять ли вращение объекта.


		 ![](../../Property_Image.gif)
		 [NewValue](ITabBeforeObjectAngleChangeEventArgs.NewValue.htm)


		 Свойство NewValue
		 определяет угол, на который был повёрнут объект.


## Свойства, унаследованные от [ITabObjectChangeEventArgs](../ITabObjectChangeEventArgs/ITabObjectChangeEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Object](../ITabObjectChangeEventArgs/ITabObjectChangeEventArgs.Object.htm)


		 Свойство Object
		 возвращает изменяемый объект.


		 ![](../../Property_Image.gif)
		 [Type](../ITabObjectChangeEventArgs/ITabObjectChangeEventArgs.Type.htm)


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
