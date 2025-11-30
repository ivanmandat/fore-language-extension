# IStandardDimension.ReverseOrder

IStandardDimension.ReverseOrder
-


# IStandardDimension.ReverseOrder


## Синтаксис


ReverseOrder: Boolean;


## Описание


Свойство ReverseOrder определяет
 состояние опции «Обратный порядок элементов в справочнике». По умолчанию
 - False.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dimens: IStandardDimension;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("TAB_DIM").Edit;

	    Dimens:=MObj As IStandardDimension;

	    Dimens.ReverseOrder:=True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет включена опция «Обратный порядок элементов
 в справочнике» вычисляемого справочника с идентификатором «TAB_DIM».


См. также:


[IStandardDimension](IStandardDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
