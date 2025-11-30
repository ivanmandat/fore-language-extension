# IProcedure.CreateProcedure

IProcedure.CreateProcedure
-


# IProcedure.CreateProcedure


## Синтаксис


CreateProcedure([Options: Integer = 0]);


## Параметры


Options. Зарезервированный
 параметр.


## Описание


Метод CreateProcedure осуществляет
 создание процедуры в базе данных на основе имеющихся метаданных.


## Комментарии


Каждому объекту репозитория «Процедура» соответствует физическая процедура,
 созданная на сервере БД. При создании и сохранении процедуры репозитория
 осуществляется автоматическое создание процедуры на сервере БД.


Данный метод осуществляет создание физической процедуры на сервере по
 имеющемуся описанию процедуры репозитория. Его применение актуально, если
 нету необходимости создания соответствующего объекта в репозитории.


Примечание.
 При создании и сохранении процедуры репозитория вызов данного метода осуществляется
 автоматически.


## Пример 1


Пример создания процедуры в репозитории:


Для выполнения примера предполагается наличие БД репозитория с идентификатором
 «BD». На сервере имеется таблица с физическим именем "Table_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Proc: IProcedure;

	Begin

	    MB := MetabaseClass.Active;

	    //Информация для создания объекта

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_PROCEDURE;

	    CrInfo.Id := "New_Proc_1";

	    CrInfo.Name := "New_Proc_1";

	    CrInfo.Parent := MB.Root;

	    //Создание временного объекта. После изменения параметров процедура будет сохранена

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Proc := MObj As IProcedure;

	    Proc.Database := Mb.ItemById("BD").Bind As IDatabase;

	    Proc.Text("ORCL") :=

	        "As" + #13 + #10 +

	        "Begin" + #13 + #10 +

	        "Insert Into Table_1 values(15,'New');" + #13 + #10 +

	        "End;";

	    Proc.NativeName := "New_Proc_1";

	    //Сохранение процедуры репозитория

	    //При сохранении автоматически будет создана процедура на сервере БД

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создана
 новая процедура. При сохранении объекта репозитория будет создана соответствующая
 процедура на сервере БД.


## Пример 2


Пример создания процедуры на сервере БД без создания соответствующего
 объекта репозитория:


Для выполнения примера предполагается наличие БД репозитория с идентификатором
 «BD». На сервере имеется таблица с физическим именем "Table_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    CrInfo: IMetabaseObjectCreateInfo;

	    Proc: IProcedure;

	Begin

	    MB := MetabaseClass.Active;

	    //Информация для создания объекта

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_PROCEDURE;

	    CrInfo.Id := "New_Proc_1";

	    CrInfo.Name := "New_Proc_1";

	    CrInfo.Parent := MB.Root;

	    //Создание временного объекта. После изменения параметров процедура будет сохранена

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Proc := MObj As IProcedure;

	    Proc.Database := Mb.ItemById("BD").Bind As IDatabase;

	    Proc.Text("ORCL") :=

	        "As" + #13 + #10 +

	        "Begin" + #13 + #10 +

	        "Insert Into Table_1 values(15,'New');" + #13 + #10 +

	        "End;";

	    Proc.NativeName := "New_Proc_1";

	    //Создание физической процедуры на сервере БД

	    //по имеющемуся описанию процедуры репозитория

	    Proc.CreateProcedure;

	End Sub UserProc;


После выполнения примера на сервере в базе данных будет создана новая
 процедура.


См. также:


[IProcedure](IProcedure.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
