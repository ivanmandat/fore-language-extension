# ICustomDimOrders.Add

ICustomDimOrders.Add
-


# ICustomDimOrders.Add


## Синтаксис


Add(Attribute: [ICustomDimAttribute](../ICustomDimAttribute/ICustomDimAttribute.htm);
 isReverseOrder: Boolean): Boolean;


## Параметры


Attribute. Атрибут справочника,
 который необходимо добавить в список сортировки.


isReverseOrder. Порядок сортировки,
 который будет установлен.


## Описание


Метод Add осуществляет добавление
 указанного атрибута в список сортировки.


## Комментарии


Допустимые значения для параметра isReverseOrder:


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

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

    CustAtrs := CustDim.Attributes;

    CustDimOrd := CustAtrs.Orders;

    CustDimOrd.Add(CustAtrs.Name, False);

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера в список сортировки будет добавлен атрибут, назначение
 которого - «Наименование». Порядок сортировки по данному атрибуту будет
 установлен по возрастанию.


См. также:


[ICustomDimOrders](ICustomDimOrders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
