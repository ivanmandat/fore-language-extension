# IDimInstance.BuilderException

IDimInstance.BuilderException
-


# IDimInstance.BuilderException


## Синтаксис


BuilderException: [IException](ForeSys.chm::/Interface/IException/IException.htm);


## Описание


Свойство BuilderException возвращает
 информацию об ошибке, которая может возникнуть при открытии справочника.


## Комментарии


Если открытие справочника прошло удачно, то свойство возвращает значение
 Null.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором "Dim_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dim: IDimInstance;

	Begin

	    MB := MetabaseClass.Active;

	    Dim := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

	    If Dim.BuilderException <> Null Then

	        Dim.BuilderException.ReportError;

	    Else

	        Debug.WriteLine(Dim.Elements.Count);

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлено открытие справочника. Если
 во время открытия возникла какая-либо исключительная ситуация, то информация
 о ней будет выведена на экран. Если открытие прошло удачно, то в консоль
 будет выведено количество элементов справочника.


См. также:


[IDimInstance](IDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
