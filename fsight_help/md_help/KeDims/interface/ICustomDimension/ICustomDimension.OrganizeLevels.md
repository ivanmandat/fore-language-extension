# ICustomDimension.OrganizeLevels

ICustomDimension.OrganizeLevels
-


# ICustomDimension.OrganizeLevels


## Синтаксис


OrganizeLevels;


## Описание


Метод OrganizeLevels осуществляет
 автоматическое создание уровней в соответствии с иерархией элементов справочника.


## Комментарии


Создаваемые уровни будут иметь следующие параметры:


	- идентификаторы уровней генерируются в следующем формате:
	 LEVEL1, LEVEL2...LEVELn


	- наименования уровней генерируются в следующем формате:
	 Уровень1, Уровень2...Уровеньn


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE».


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IStandardCube;

    CustDim: ICustomDimension;

    TreeElements: ICustomDimTree;

    v: Variant;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

    TreeElements := CustDim.Tree;

    CustDim.Elements.Clear;

    //Добавление новых элементов

    v := TreeElements.Add(Null);

    TreeElements.Name(v) := "Элемент 1";

    v := TreeElements.Add(v);

    TreeElements.Name(v) := "Элемент 1_1";

    //Создание уровней

    CustDim.OrganizeLevels;

    //Сохранение

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в измерении фактов куба будет изменена структура
 элементов. В соответствии с двумя уровнями иерархии элементов будут созданы
 два уровня измерения.


См. также:


[ICustomDimension](ICustomDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
