# EtlAttachCPEventArgs

EtlAttachCPEventArgs
-


# EtlAttachCPEventArgs


Сборка: Etl;


## Описание


Класс EtlAttachCPEventArgs реализует
 аргумент события, наступающего после перемещения точки соединения в компоненте
 [EtlBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/EtlBox.htm).


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateArgs](EtlAttachCPEventArgs.CreateArgs.htm)
		 Конструктор CreateArgs
		 создаёт аргумент события, связанного с завершением перемещения
		 точки соединения.


## Конструкторы, унаследованные от [EtlMoveCPEventArgs](../EtlMoveCPEventArgs/EtlMoveCPEventArgs.htm)


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](../EtlMoveCPEventArgs/EtlMoveCPEventArgs.Create.htm)
		 Конструктор Create
		 создаёт аргумент события, связанного с перемещением точки соединения.


## Свойства, унаследованные от [IEtlAttachCPEventArgs](../../Interface/IEtlAttachCPEventArgs/IEtlAttachCPEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CPIndexToAttach](../../Interface/IEtlAttachCPEventArgs/IEtlAttachCPEventArgs.CPIndexToAttach.htm)
		 Свойство CPIndexToAttach
		 возвращает индекс точки соединения фигуры, к которой была присоединена
		 точка линии после перемещения.


		 ![](../../Property_Image.gif)
		 [ShapeToAttach](../../Interface/IEtlAttachCPEventArgs/IEtlAttachCPEventArgs.ShapeToAttach.htm)
		 Свойство ShapeToAttach
		 возвращает фигуру, к которой была присоединена точка соединения
		 линии.


## Свойства, унаследованные от [IEtlMoveCPEventArgs](../../Interface/IEtlMoveCPEventArgs/IEtlMoveCPEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Cancel](../../Interface/IEtlMoveCPEventArgs/IEtlMoveCPEventArgs.Cancel.htm)
		 Свойство Cancel определяет
		 признак запрета перемещения точки соединения линии.


		 ![](../../Property_Image.gif)
		 [CPIndex](../../Interface/IEtlMoveCPEventArgs/IEtlMoveCPEventArgs.CPIndex.htm)
		 Свойство CPIndex возвращает
		 индекс точки соединения, которую необходимо переместить.


		 ![](../../Property_Image.gif)
		 [Shape](../../Interface/IEtlMoveCPEventArgs/IEtlMoveCPEventArgs.Shape.htm)
		 Свойство Shape возвращает
		 линию, у которой перемещается точка соединения.


См. также:


[Классы
 сборки Etl](../KeEtl_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
