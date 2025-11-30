# IPredefinedSelectionSchema

IPredefinedSelectionSchema
-


# IPredefinedSelectionSchema


Сборка: Dimensions;


## Описание


Интерфейс IPredefinedSelectionSchema
 используется для работы с предопределенной схемой отметки измерения.


## Иерархия наследования


[IDimSelectionSchema](../IDimSelectionSchema/IDimSelectionSchema.htm)


IPredefinedSelectionSchema


## Комментарии


Предопределенная схема отметки измерения служит для автоматического
 добавления нового элемента измерения в отметку после переоткрытия отчета.


Для получения предопределенной схемы отметки измерения используйте [IDimSelection.PredefinedSchema](../IDimSelection/IDimSelection.PredefinedSchema.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](IPredefinedSelectionSchema.Active.htm)
		 Свойство Active определяет,
		 будет ли использоваться предопределенная схема отметки измерения.


## Свойства, унаследованные от [IDimSelectionSchema](../IDimSelectionSchema/IDimSelectionSchema.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](../IDimSelectionSchema/IDimSelectionSchema.Count.htm)
		 Свойство Count возвращает
		 количество примитивов в схеме отметки справочника.


		 ![](../../Property_Image.gif)
		 [Dimension](../IDimSelectionSchema/IDimSelectionSchema.Dimension.htm)
		 Свойство Dimension
		 определяет структуру измерения, на базе которого строится примитив
		 схемы отметки.


		 ![](../../Property_Image.gif)
		 [Item](../IDimSelectionSchema/IDimSelectionSchema.Item.htm)
		 Свойство Item возвращает
		 объект, содержащий примитив схемы отметки.


## Методы, унаследованные от [IDimSelectionSchema](../IDimSelectionSchema/IDimSelectionSchema.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](../IDimSelectionSchema/IDimSelectionSchema.Add.htm)
		 Метод Add осуществляет
		 добавление примитива в схему отметки справочника.


		 ![](../../Sub_Image.gif)
		 [Clear](../IDimSelectionSchema/IDimSelectionSchema.Clear.htm)
		 Метод Clear осуществляет
		 удаление всех примитивов из схемы отметки справочника.


		 ![](../../Sub_Image.gif)
		 [MoveDown](../IDimSelectionSchema/IDimSelectionSchema.MoveDown.htm)
		 Метод MoveDown осуществляет
		 перемещение указанного примитива на одну позицию вниз.


		 ![](../../Sub_Image.gif)
		 [MoveUp](../IDimSelectionSchema/IDimSelectionSchema.MoveUp.htm)
		 Метод MoveUp осуществляет
		 перемещение примитива в списке на одну позицию вверх.


		 ![](../../Sub_Image.gif)
		 [Process](../IDimSelectionSchema/IDimSelectionSchema.Process.htm)
		 Метод Process применяет
		 схему отметки для указанной отметки элементов и возвращает копию
		 отметки с выделенными элементами.


		 ![](../../Sub_Image.gif)
		 [ProcessInplace](../IDimSelectionSchema/IDimSelectionSchema.ProcessInplace.htm)
		 Метод ProcessInplace
		 применяет схему отметки для указанной отметки элементов.


		 ![](../../Sub_Image.gif)
		 [Remove](../IDimSelectionSchema/IDimSelectionSchema.Remove.htm)
		 Метод Remove осуществляет
		 удаление примитива схемы отметки справочника.


См. также:


[Интерфейсы
 сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
