# ICustomDimElements.AttributeValue

ICustomDimElements.AttributeValue
-


# ICustomDimElements.AttributeValue


## Синтаксис


AttributeValue(Row: Integer; AttributeIndex: Integer):
 Variant;


## Параметры


Row. Индекс строки, в которой
 находится необходимый элемент.


AttributeIndex. Индекс атрибута,
 значение которого необходимо определить.


## Описание


Свойство AttributeValue определяет
 значение указанного атрибута для указанного элемента справочника.


## Комментарии


В конструируемом справочнике, который создается при формировании в кубе
 локального измерения фактов, базовые атрибуты формируются в следующем
 порядке:


		 Индекс
		 Атрибут


		 0
		 Ключ


		 1
		 Наименование


		 2
		 Порядок


Если конструируемый справочник создан при [сохранении](KeExpress.chm::/Interface/IEaxDataAreaHierarchies/IEaxDataAreaHierarchies.SaveToMetabase.htm)
 альтернативной иерархии аналитической области данных, то список и порядок
 атрибутов будет отличаться и будет зависеть от того измерения, для которого
 сохранялась альтернативная иерархия. Индекс необходимого атрибута можно
 вычислить при переборе коллекции атрибутов [ICustomDimension.Attributes](../ICustomDimension/ICustomDimension.Attributes.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором "CUBE_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Cube: IStandardCube;

	    CustDim: ICustomDimension;

	    Elems: ICustomDimElements;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CUBE_1").Edit;

	    Cube := MObj As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    Elems := CustDim.Elements;

	    For i := 0 To Elems.RowCount - 1 Do

	        Elems.AttributeValue(i, 1) := "Элемент " + i.ToString;

	    End For;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будут изменены наименования всех элементов
 в измерении фактов куба.


См. также:


[ICustomDimElements](ICustomDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
