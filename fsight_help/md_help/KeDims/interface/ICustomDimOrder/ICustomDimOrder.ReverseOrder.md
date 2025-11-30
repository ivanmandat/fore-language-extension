# ICustomDimOrder.ReverseOrder

ICustomDimOrder.ReverseOrder
-


# ICustomDimOrder.ReverseOrder


## Синтаксис


ReverseOrder: Boolean;


## Описание


Свойство ReverseOrder определяет
 направление сортировки.


## Комментарии


Допустимые значения свойства:


	- True. Сортировка по
	 убыванию;


	- False. Сортировка по
	 возрастанию.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE».


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IStandardCube;

    CustDim: ICustomDimension;

    CustAtrs: ICustomDimAttributes;

    CustDimOrd: ICustomDimOrders;

    DimOrd: ICustomDimOrder;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

    CustAtrs := CustDim.Attributes;

    CustDimOrd := CustAtrs.Orders;

    DimOrd := CustDimOrd.Item(0);

    If DimOrd.ReverseOrder Then

        DimOrd.ReverseOrder := False;

    Else

        DimOrd.ReverseOrder := True;

    End If;

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будет изменено направление сортировки по первому
 атрибуту из списка сортировки измерения фактов.


См. также:


[ICustomDimOrder](ICustomDimOrder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
