# IUserDimension.ReverseOrder

IUserDimension.ReverseOrder
-


# IUserDimension.ReverseOrder


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

	    UsDim: IUserDimension;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("USER_DIM").Edit;

	    UsDim:=MObj As IUserDimension;

	    UsDim.ReverseOrder:=True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет включена опция «Обратный порядок элементов
 в справочнике» вычисляемого справочника с идентификатором USER_DIM.


См. также:


[IUserDimension](IUserDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
