# IForeMethods.Clear

IForeMethods.Clear
-


# IForeMethods.Clear


## Синтаксис


		Clear;


## Описание


Метод Clear очищает коллекцию
 пользовательских методов.


## Пример


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    SharedParams: ISharedParams;

		Begin

		    Mb := MetabaseClass.Active;

		    SharedParams := Mb.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

		    SharedParams.Methods.Clear;

		    (SharedParams As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера коллекция пользовательских методов будет очищена.


См. также:


[IForeMethods](IForeMethods.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
