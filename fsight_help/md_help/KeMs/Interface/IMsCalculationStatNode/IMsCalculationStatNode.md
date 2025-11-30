# IMsCalculationStatNode

IMsCalculationStatNode
-


# IMsCalculationStatNode


Сборка: Ms;


## Описание


Интерфейс IMsCalculationStatNode
 предназначен для работы с вершиной [дерева
 статистик расчета](../IMsCalculationStats/IMsCalculationStats.htm).


## Иерархия наследования


[INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


    IMsCalculationStatNode


## Комментарии


В качестве вершин дерева статистик расчета выступают отдельные [стадии
 расчета задачи моделирования](../../Enums/MsProblemCalculationStage.htm). При выполнении расчета фиксируется результат
 каждой стадии: инициализация расчета задачи, загрузка данных, расчет моделей,
 сохранение данных и другие.


Для работы с коллекцией вершин дерева статистик расчета используйте
 интерфейс [IMsCalculationStatNodes](../IMsCalculationStatNodes/IMsCalculationStatNodes.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Children](IMsCalculationStatNode.Children.htm)
		 Свойство Children возвращает
		 дочерние элементы статистики расчета.


		 ![](../../Property_Image.gif)
		 [Parent](IMsCalculationStatNode.Parent.htm)
		 Свойство Parent возвращает
		 родительский элемент статистики расчета.


		 ![](../../Property_Image.gif)
		 [Type](IMsCalculationStatNode.Type.htm)
		 Свойство Type возвращает
		 тип статистики расчета.


		 ![](../../Property_Image.gif)
		 [Value](IMsCalculationStatNode.Value.htm)
		 Свойство Value возвращает
		 значение статистики расчета.


## Свойства, унаследованные от [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](KeSom.chm::/Interface/INamedEntity/INamedEntity.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](KeSom.chm::/Interface/INamedEntity/INamedEntity.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](KeSom.chm::/Interface/INamedEntity/INamedEntity.Name.htm)
		 Свойство Name определяет
		 наименование объекта.


См. также


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
