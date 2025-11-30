# IEtlAttachCPEventArgs

IEtlAttachCPEventArgs
-


# IEtlAttachCPEventArgs


Сборка: Etl;


## Описание


Интерфейс IEtlAttachCPEventArgs содержит
 свойства аргумента события, наступающего после перемещения точки соединения
 в компоненте [EtlBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/EtlBox.htm).


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IEtlMoveCPEventArgs](../IEtlMoveCPEventArgs/IEtlMoveCPEventArgs.htm)


           IEtlAttachCPEventArgs


## Комментарии


Свойства данного интерфейса используются в событии [EtlBox.OnAfterMoveCP](../../Class/EtlBox/EtlBox.OnAfterMoveCP.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CPIndexToAttach](IEtlAttachCPEventArgs.CPIndexToAttach.htm)
		 Свойство CPIndexToAttach
		 возвращает индекс точки соединения фигуры, к которой была присоединена
		 точка линии после перемещения.


		 ![](../../Property_Image.gif)
		 [ShapeToAttach](IEtlAttachCPEventArgs.ShapeToAttach.htm)
		 Свойство ShapeToAttach
		 возвращает фигуру, к которой была присоединена точка соединения
		 линии.


## Свойства, унаследованные от [IEtlMoveCPEventArgs](../IEtlMoveCPEventArgs/IEtlMoveCPEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](../IEtlMoveCPEventArgs/IEtlMoveCPEventArgs.Cancel.htm)
		 Свойство Cancel определяет
		 признак запрета перемещения точки соединения линии.


		 ![](../../Property_Image.gif)
		 [CPIndex](../IEtlMoveCPEventArgs/IEtlMoveCPEventArgs.CPIndex.htm)
		 Свойство CPIndex возвращает
		 индекс точки соединения, которую необходимо переместить.


		 ![](../../Property_Image.gif)
		 [Shape](../IEtlMoveCPEventArgs/IEtlMoveCPEventArgs.Shape.htm)
		 Свойство Shape возвращает
		 линию, у которой перемещается точка соединения.


См. также:


[Интерфейсы
 сборки Etl](../KeEtl_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
