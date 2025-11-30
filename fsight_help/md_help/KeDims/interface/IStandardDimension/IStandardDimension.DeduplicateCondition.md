# IStandardDimension.DeduplicateCondition

IStandardDimension.DeduplicateCondition
-


# IStandardDimension.DeduplicateCondition


## Синтаксис


DeduplicateCondition: [DimElementDeduplicate](../../Enums/DimElementDeduplicate.htm);


## Описание


Свойство DeduplicateCondition
 определяет метод отбора элементов при удалении дубликатов в справочнике.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dimens: IStandardDimension;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("TAB_DIM").Edit;

	    Dimens := MObj As IStandardDimension;

	    Dimens.DeduplicateCondition := DimElementDeduplicate.Max;

	    Dimens.DeduplicateExpression.AsString := Dimens.Attributes.Id.Id;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для табличного справочника будет установлено
 условие удаления дубликатов по максимальному значению идентификатора.
 Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimension](IStandardDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
