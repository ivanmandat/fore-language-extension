# ICustomDimTree.AttributeValue

ICustomDimTree.AttributeValue
-


# ICustomDimTree.AttributeValue


## Синтаксис


AttributeValue(PrimaryKey: Variant; AttributeIndex:
 Integer): Variant;


## Параметры


PrimaryKey. Первичный ключ
 элемента, для которого необходимо определить значение атрибута.


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
 куба с идентификатором «STD_CUBE».


			Sub Main;

Var

    MB: IMetabase;

    Cube: IStandardCube;

    CustDim: ICustomDimension;

    CustDimTree: ICustomDimTree;

    Elems: ICustomDimElements;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

    CustDimTree := CustDim.Tree;

    Elems := CustDim.Elements;

    For i := 0 To Elems.RowCount - 1 Do

        CustDimTree.AttributeValue(Elems.AttributeValue(i, 0), 1) := "Элемент " + i.ToString;

    End For;

    (Cube As IMetabaseObject).Save;

End Sub Main;


После выполнения примера будут изменены наименования всех элементов
 в измерении фактов куба.


См. также:


[ICustomDimTree](ICustomDimTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
