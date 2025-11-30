# IAdhocDataSourceObject.Id

IAdhocDataSourceObject.Id
-


# IAdhocDataSourceObject.Id


## Синтаксис


Id:String;


## Описание


Свойство Id определяет идентификатор источника
 данных.


## Комментарии


Для получения источника данных, как объекта репозитория, используйте
 свойство [IAdhocDataSourceObject.SourceObjectDescriptor](IAdhocDataSourceObject.SourceObjectDescriptor.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_ID»
 и экспрес-отчета с идентификатором «EXP_DSOID».


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Dashboard: IAdhocReport;

    DsObjs, DOD: IAdhocDataSourceObjects;

    i: Integer;

    DsObj: IAdhocDataSourceObject;

    mbo, mbos: IMetabaseObject;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    mbo := mb.ItemById("DASHBOARD_ID").Edit;

    Dashboard := mbo As IAdhocReport;

    // Получаем источники данных аналитической панели

    DsObjs := Dashboard.DataSourceObjects;

    DsObjs.RemoveById("EXP_DSOID");

    DsObjs.RemoveById("EXP_DSO");

    //Добавляем источник данных

    mbos := mb.ItemById("EXP_DSOID") As IMetabaseObject;

    DsObj := Dashboard.AddDataSourceObject("EXP_DSOID", mbos);

    // Копируем источник данных

    DsObj := Dashboard.CopyDataSourceObjectEx(DsObj, "EXP_DSO");

    // Удаляем первый источник данных

    DsObjs.Remove(0);

    For i := 0 To DsObjs.Count - 1 Do

        // Получаем имя источника данных

        DsObj := DsObjs.Item(i);

        Debug.WriteLine("имя источника данных " + (i + 1).ToString + " - " + DsObj.SourceObjectDescriptor.Name);

        // Получаем идентификатор источника данных

        Debug.WriteLine("идентификатор источника данных " + (i + 1).ToString + " - " + DsObj.Id);

    End For;

    // Получаем количество источников

    DOD := DsObj.DataSourceObjects;

    Debug.WriteLine("количество источников - " + DOD.Count.ToString);

    mbo.Save;

End Sub UserProc;


В результате выполнения примера в аналитическую панель скопирован источник
 данных и присвоен идентификатор «EXP_DSO»,
 в окно консоли будут выведены количество активных слайдов, имена источников данных,
 идентификаторы источников данных, количество источников.


См. также:


[IAdhocDataSourceObject](IAdhocDataSourceObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
