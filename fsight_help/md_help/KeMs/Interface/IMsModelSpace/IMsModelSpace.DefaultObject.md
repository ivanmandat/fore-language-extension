# IMsModelSpace.DefaultObject

IMsModelSpace.DefaultObject
-


# IMsModelSpace.DefaultObject


## Синтаксис


		DefaultObject: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство DefaultObject определяет
 базу данных временных рядов, в которой будут храниться данные контейнера
 моделирования.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором TSDB.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CrInfo: IMetabaseObjectCreateInfo;

		    MObj: IMetabaseObject;

		    Ms: IMsModelSpace;

		Begin

		    // Получаем репозиторий

		    MB := MetabaseClass.Active;

		    // Задаем базовые свойства контейнера моделирования

		    CrInfo := MB.CreateCreateInfo;

		    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MODELSPACE;

		    CrInfo.Id := mb.GenerateId("MS");

		    CrInfo.Name := "Контейнер моделирования на атрибутах";

		    MObj := MB.CreateObject(CrInfo).Edit;

		    Ms := MObj As IMsModelSpace;

		    // Указываем базу данных временных рядов для хранения данных

		    Ms.Rubricator := MB.ItemById("TSDB");

		    // Задаем даты начала и окончания контейнера моделирования

		    Ms.StartDate := DateTime.Parse("1.1.2000");

		    Ms.EndDate := DateTime.Parse("1.1.2020");

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера будет определена база данных временных
 рядов, в которой будут храниться данные контейнера моделирования.


См. также:


[IMsModelSpace](IMsModelSpace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
