# IUserDimension.HideInaccessibleElements

IUserDimension.HideInaccessibleElements
-


# IUserDimension.HideInaccessibleElements


## Синтаксис


HideInaccessibleElements: Boolean;


## Описание


Свойство HideInaccessibleElements
 определяет состояние опции «Скрывать недоступные элементы в справочнике».
 По умолчанию - True.


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

	    UsDim.HideInaccessibleElements:=False;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет отключена опция «Скрывать недоступные
 элементы в справочнике» вычисляемого справочника с идентификатором USER_DIM.


См. также:


[IUserDimension](IUserDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
