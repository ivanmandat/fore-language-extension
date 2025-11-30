# IAdhocReport.AddNewDataSourceObject

IAdhocReport.AddNewDataSourceObject
-


# IAdhocReport.AddNewDataSourceObject


## Синтаксис


AddNewDataSourceObject(Id: String; CreateInfo: [IMetabaseObjectCreateInfo](KeSom.chm::/Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.htm)):
 [IAdhocDataSourceObject](../IAdhocDataSourceObject/IAdhocDataSourceObject.htm);


## Параметры


Id. Идентификатор объекта аналитической
 панели;


CreateInfo. Объект, содержащий
 параметры создаваемого объекта.


## Описание


Метод AddNewDataSourceObject
 создает и добавляет источник данных.


## Комментарии


Для копирования указанного источника данных используйте метод [IAdhocReport.CopyDataSourceObject](IAdhocReport.CopyDataSourceObject.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_ANDSO».


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Dashboard: IAdhocReport;

    DsObjs: IAdhocDataSourceObjects;

    i: Integer;

    DsObj: IAdhocDataSourceObject;

    mbo: IMetabaseObject;

    mboci: IMetabaseObjectCreateInfo;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    mbo := mb.ItemById("DASHBOARD_ANDSO").Edit;

    Dashboard := mbo As IAdhocReport;

    // Получаем источники данных аналитической панели

    DsObjs := Dashboard.DataSourceObjects;

    DsObjs.RemoveById("NewER");

    //Добавляем новый источник данных

    mboci := mb.CreateCreateInfo;

    mboci.ClassID := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

    mboci.Id := "NewER";

    mboci.Name := "NewER";

    mboci.Parent := mb.ItemById("DASHBOARD_ANDSO");

    DsObj := Dashboard.AddNewDataSourceObject("NewER", mboci);

    For i := 0 To DsObjs.Count - 1 Do

        // Получаем имя источника данных

        DsObj := DsObjs.Item(i);

        Debug.WriteLine("имя источника данных " + (i + 1).ToString + " - " + DsObj.SourceObjectDescriptor.Name);

        // Получаем идентификатор источника данных

        Debug.WriteLine("идентификатор источника данных " + (i + 1).ToString + " - " + DsObj.Id);

    End For;

End Sub UserProc;


В результате выполнения примера в аналитическую панель будет добавлен
 новый источник данных с идентификатором «NewER»,
 в окно консоли будут выведены имена и идентификаторы источников данных.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
