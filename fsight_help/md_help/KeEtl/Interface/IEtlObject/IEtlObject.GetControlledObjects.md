# IEtlObject.GetControlledObjects

IEtlObject.GetControlledObjects
-


# IEtlObject.GetControlledObjects


## Синтаксис


GetControlledObjects: [IMetabaseObjectDescriptors](KeSom.chm::/Interface/IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm);


## Описание


Метод GetControlledObjects возвращает
 коллекцию описаний объектов репозитория, управляемых текущим объектом
 задачи ETL.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL_TASK.


Добавьте ссылки на системные сборки: Etl, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Etl: IEtlTask;

	    EtlObj: IEtlObject;

	    Controlled: IMetabaseObjectDescriptors;

	    MDesc: IMetabaseObjectDescriptor;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Задача ETL

	    Etl := MB.ItemById("ETL_TASK").Edit As IEtlTask;

	    For i := 0 To Etl.Count - 1 Do

	        // Объект задачи ETL

	        EtlObj := Etl.Item(i);

	        // Управляемые объекты

	        Controlled := EtlObj.GetControlledObjects;

	        If Controlled.Count > 0 Then

	            Debug.WriteLine("Объект задачи ETL: " + EtlObj.Name + ". Управляемые объекты:");

	            Debug.Indent;

	            For Each MDesc In Controlled Do

	                Debug.WriteLine(MDesc.Name + '(' + MDesc.Id + ')');

	            End For;

	            Debug.Unindent;

	        End If;

	    End For;

	End Sub UserProc;


При выполнении примера будет осуществлён перебор объектов задачи ETL.
 Если какой-либо объект задачи ETL управляет объектами репозитория, то
 список этих объектов будет выведен в консоль среды разработки.


См. также:


[IEtlObject](IEtlObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
