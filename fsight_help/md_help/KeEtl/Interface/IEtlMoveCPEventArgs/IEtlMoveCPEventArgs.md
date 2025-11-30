# IEtlMoveCPEventArgs

IEtlMoveCPEventArgs
-


# IEtlMoveCPEventArgs


Сборка: Etl;


## Описание


Интерфейс IEtlMoveCPEventArgs
 содержит свойства аргумента события, наступающего перед перемещением точки
 соединения в компоненте [EtlBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/EtlBox.htm).


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           IEtlMoveCPEventArgs


## Комментарии


Свойства данного интерфейса используются в событии [EtlBox.OnBeforeMoveCP](../../Class/EtlBox/EtlBox.OnBeforeMoveCP.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](IEtlMoveCPEventArgs.Cancel.htm)
		 Свойство Cancel определяет
		 признак запрета перемещения точки соединения линии.


		 ![](../../Property_Image.gif)
		 [CPIndex](IEtlMoveCPEventArgs.CPIndex.htm)
		 Свойство CPIndex возвращает
		 индекс точки соединения, которую необходимо переместить.


		 ![](../../Property_Image.gif)
		 [Shape](IEtlMoveCPEventArgs.Shape.htm)
		 Свойство Shape возвращает
		 линию, у которой перемещается точка соединения.


См. также:


[Интерфейсы
 сборки Etl](../KeEtl_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
