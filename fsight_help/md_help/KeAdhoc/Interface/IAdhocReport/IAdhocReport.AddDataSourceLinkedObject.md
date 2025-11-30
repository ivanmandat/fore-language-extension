# IAdhocReport.AddDataSourceLinkedObject

IAdhocReport.AddDataSourceLinkedObject
-


# IAdhocReport.AddDataSourceLinkedObject


## Синтаксис


AddDataSourceLinkedObject(Id: String; Object: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)):
 [IAdhocDataSourceObject](../IAdhocDataSourceObject/IAdhocDataSourceObject.htm);


## Параметры


Id. Идентификатор объекта аналитической
 панели;


Object. Объект репозитория.


## Описание


Метод AddDataSourceLinkedObject
 добавляет блок типа «Экспресс-отчет»,
 «Регламентный отчет» или «Аналитическая панель».


## Комментарии


Для добавления источника данных к визуализаторам используйте свойство
 [IAdhocReport.AddDataSourceObject](IAdhocReport.AddDataSourceObject.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_ADSLO»
 и экспрес-отчета с идентификатором «EXP_ADSLO».


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Dashboard: IAdhocReport;

    DsObjs, DsOdjsL: IAdhocDataSourceObjects;

    i: Integer;

    DsObj: IAdhocDataSourceObject;

    mbo, mbol: IMetabaseObject;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    mbo := mb.ItemById("DASHBOARD_ADSLO").Edit;

    Dashboard := mbo As IAdhocReport;

    // Получаем источники данных аналитической панели

    DsObjs := Dashboard.DataSourceObjects;

    DsOdjsL := Dashboard.DataSourceLinkedObjects;

    DsOdjsL.RemoveById("EXP_ADSLO");

    //Добавляем новый связанный источник данных

    mbol := mb.ItemById("EXP_ADSLO") As IMetabaseObject;

    DsObj := Dashboard.AddDataSourceLinkedObject("EXP_ADSLO", mbol);

    For i := 0 To DsOdjsL.Count - 1 Do

        // Получаем идентификатор источника данных

        DsObj := DsOdjsL.Item(i);

        Debug.WriteLine("идентификатор источника данных " + (i + 1).ToString + " - " + DsObj.Id);

    End For;

    mbo.Save;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены идентификаторы источников данных.
 В аналитическую панель будет добавлен связанный источник данных.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
