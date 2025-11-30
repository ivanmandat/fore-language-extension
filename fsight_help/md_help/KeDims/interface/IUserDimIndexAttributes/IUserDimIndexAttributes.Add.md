# IUserDimIndexAttributes.Add

IUserDimIndexAttributes.Add
-


# IUserDimIndexAttributes.Add


## Синтаксис


Add(Value: [IUserDimAttribute](../IUserDimAttribute/IUserDimAttribute.htm));


## Параметры


Value. Атрибут,
 который необходимо добавить в индекс.


## Описание


Метод Add осуществляет добавление
 атрибута, передаваемого посредством параметра Value,
 в индекс.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	    UsDimInds: IUserDimIndexes;

	    UsDimIndex: IUserDimIndex;

	    IndexAtr: IUserDimIndexAttributes;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("USER_DIM").Edit;

	    UsDim := MObj As IUserDimension;

	    UsDimInds := UsDim.Indexes;

	    If UsDimInds.Count <> 0 Then

	        UsDimIndex := UsDimInds.Item(0);

	        IndexAtr := UsDimIndex.Attributes;

	        If IndexAtr.FindByKey(UsDim.Attributes.Order.Key) = Null Then

	            IndexAtr.Add(UsDim.Attributes.Order);

	        End If;

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в первый индекс справочника будет добавлен
 атрибут, назначение которого - Порядок. Идентификатор вычисляемого справочника
 - USER_DIM.


См. также:


[IUserDimIndexAttributes](IUserDimIndexAttributes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
