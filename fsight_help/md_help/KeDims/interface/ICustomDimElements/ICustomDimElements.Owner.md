# ICustomDimElements.Owner

ICustomDimElements.Owner
-


# ICustomDimElements.Owner


## Синтаксис


Owner(Row: Integer): Variant;


## Параметры


Row. Индекс
 строки дочернего элемента.


## Описание


Свойство Owner определяет первичный
 ключ элемента-владельца для элемента, находящегося в указанной строке.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором "CUBE_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Cube: IStandardCube;

	    CustDim: ICustomDimension;

	    DimElems: ICustomDimElements;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CUBE_1").Edit;

	    Cube := MObj As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    DimElems := CustDim.Elements;

	    DimElems.Owner(1) := DimElems.AttributeValue(0, 0);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера элемент, расположенный во второй строке будет
 установлен в качестве дочернего для элемента, расположенного в первой
 строке.


См. также:


[ICustomDimElements](ICustomDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
