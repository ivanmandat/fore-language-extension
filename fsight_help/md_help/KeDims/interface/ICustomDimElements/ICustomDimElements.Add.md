# ICustomDimElements.Add

ICustomDimElements.Add
-


# ICustomDimElements.Add


## Синтаксис


Add: Integer;


## Описание


Метод Add осуществляет добавление
 нового элемента в справочник и возвращает номер строки, в которой он будет
 располагаться.


## Комментарии


Элемент добавляется в конец списка. Значения всех атрибутов не установлены,
 для задания значений используйте свойство [AttributeValue](ICustomDimElements.AttributeValue.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором CUBE.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Cube: IStandardCube;

    CustDim: ICustomDimension;

    DimElems: ICustomDimElements;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    // Получим стандартный куб

    MObj := MB.ItemById("CUBE").Edit;

    Cube := MObj As IStandardCube;

    // Получим структуру измерения фактов куба

    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

    // Получим коллекцию элементов измерения

    DimElems := CustDim.Elements;

    // Добавим новый элемент

    i := DimElems.Add;

    // Определим значения атрибутов для нового элемента

    DimElems.AttributeValue(i, 0) := i;

    DimElems.AttributeValue(i, 1) := "Элемент " + i.ToString;

    DimElems.AttributeValue(i, 2) := i;

    MObj.Save;

End Sub UserProc;


После выполнения примера в измерении фактов куба с идентификатором CUBE
 будет создан один новый элемент.


См. также:


[ICustomDimElements](ICustomDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
