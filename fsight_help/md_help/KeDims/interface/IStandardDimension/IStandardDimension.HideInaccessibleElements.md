# IStandardDimension.HideInaccessibleElements

IStandardDimension.HideInaccessibleElements
-


# IStandardDimension.HideInaccessibleElements


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

	    Dimens: IStandardDimension;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("TAB_DIM").Edit;

	    Dimens:=MObj As IStandardDimension;

	    Dimens.HideInaccessibleElements:=False;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет отключена опция «Скрывать недоступные
 элементы в справочнике» вычисляемого справочника с идентификатором «TAB_DIM».


См. также:


[IStandardDimension](IStandardDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
