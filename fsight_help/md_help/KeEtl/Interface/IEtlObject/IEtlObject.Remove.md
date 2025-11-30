# IEtlObject.Remove

IEtlObject.Remove
-


# IEtlObject.Remove


## Синтаксис


Remove;


## Описание


Метод Remove удаляет объект
 задачи ETL.


## Комментарии


Любой объект задачи ETL имеет две связанные между собой составляющие:


	- объект [IEtlObject](IEtlObject.htm);


	- визуальное представление [IWxShape](Andy.chm::/Interface/IWxShape/IWxShape.htm).


Для удаления объекта задачи ETL в первую очередь необходимо удалить
 его визуальное представление.


## Пример


Для выполнения примера в репозитории предполагается наличие задачи ETL
 с идентификатором ETL_TASK, содержащей минимум один объект.


Добавьте ссылки на системные сборки: Andy, Etl, Metabase;


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MbObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    Shape: IWxShape;

	    EtlObj: IEtlObject;

	Begin

	    MB := MetabaseClass.Active;

	    MbObj := MB.ItemById("ETL_TASK").Edit;

	    EtlTask := MbObj As IEtlTask;

	    Shape := EtlTask.Workspace.Shapes.Item(0);

	    Shape.Delete;

	    EtlObj := EtlTask.Item(0);

	    EtlObj.Remove;

	    MbObj.Save;

	End Sub UserProc;


После выполнения примера будет удалён объект с индексом «0» задачи ETL.


См. также:


[IEtlObject](IEtlObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
