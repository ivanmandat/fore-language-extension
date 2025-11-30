# IRdsAttribute.PredefinedType

IRdsAttribute.PredefinedType
-


# IRdsAttribute.PredefinedType


## Синтаксис


PredefinedType: [RdsPredefinedAttribute](../../Enums/RdsPredefinedAttribute.htm);


## Описание


Свойство PredefinedType возвращает
 назначение системного атрибута.


## Пример


	Sub UserProc;

	Var

	    MB : IMetabase;

	    MbObj : IMetabaseObject;

	    Dic : IRdsDictionary;

	    Att : IRdsAttribute;

	    PType : Integer;

	Begin

	    MB := MetabaseClass.Active;

	    MbObj := MB.ItemByIdNamespace("CREATEATTR", Mb.ItemById("RDSBASE").Key).Bind;

	    Dic := MbObj As IRdsDictionary;

	    Att := Dic.Attributes.FindById("KEY");

	    PType := Att.PredefinedType;

	End Sub UserProc;


После выполнения примера в переменной «PType» будет храниться значение
 типа системного атрибута «KEY».


См. также:


[IRdsAttribute](IRdsAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
