# IMetaRdsLoader.Load

IMetaRdsLoader.Load
-


# IMetaRdsLoader.Load


## Синтаксис


Load(UpdateMode: [UpdateLoadMode](KeSom.chm::/Enums/UpdateLoadMode.htm));


## Параметры


UpdateMode. Режим обновления
 записей в справочнике.


## Описание


Метод Load загружает данные
 из источника в справочник НСИ.


## Пример


Для выполнения примера в репозитории предполагается наличие папки с
 идентификатором MDM и файла Microsoft Excel «C:\data.xls», соответствующего
 следующим требованиям:


	- Файл должен содержать заголовки столбцов.


	- В файле должен присутствовать столбец «Name»,
	 содержащий текстовые данные и не содержащий пустых значений.


	- В файле должен присутствовать столбец «Key», содержащий целочисленные
	 данные.


Добавьте ссылки на системные сборки: Dt, Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    RdsLoader: IMetaRdsLoader;

    ExcelProvider: IDtExcelProvider;

Begin

    // Создаем источник данных для справочника и задаем его параметры

    ExcelProvider := New DtExcelProvider.Create;

    ExcelProvider.DriverVersion := "Excel 8.0";

    ExcelProvider.File := "C:\Data.xls";

    ExcelProvider.HasHeader := True;

    ExcelProvider.Query := "Select * From [Лист1$]";

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Задаем информацию о создаваемом справочнике

    CrInfo := MB.CreateCreateInfo;

    CrInfo.Parent := MB.ItemById("MDM");

    CrInfo.Permanent := True;

    CrInfo.Id := MB.GenerateId("NewDictionary", CrInfo.Parent.Key);

    // Создаем объект для создания справочника НСИ и загрузки в него данных

    RdsLoader := New MetaRdsLoader.Create;

    // Задаем источник данных создаваемого справочника

    RdsLoader.Source := ExcelProvider;

    // Генерируем привязки полей источника данных и создаваемого справочника

    RdsLoader.GenerateBindingsBySource;

    // Создаем справочник

    (RdsLoader.CreateObject(CrInfo) As IMetabaseObject).Save;

    // Выполняем загрузку данных

    RdsLoader.Load(UpdateLoadMode.Insert);

End Sub UserProc;


В результате выполнения примера будет инициализирован объект, используемый
 для создания справочников НСИ и загрузки в них данных. Для создания справочника
 будет указан источник данных и автоматически сгенерированы привязки к
 полям. После этого будет создан справочник и в него будут загружены данные.


См. также:


[IMetaRdsLoader](IMetaRdsLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
