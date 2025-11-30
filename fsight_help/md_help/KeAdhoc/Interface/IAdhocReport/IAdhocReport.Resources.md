# IAdhocReport.Resources

IAdhocReport.Resources
-


# IAdhocReport.Resources


## Синтаксис


Resources: [IResourceObject](ModIo.chm::/Interface/IResourceObject/IResourceObject.htm);


## Описание


Свойство Resources определяет
 объект «Ресурсы», используемый для хранения переводов аналитической панели.


## Комментарии


Свойство актуально, если аналитическая панель является мультиязычной,
 т.е. [IAdhocReport.SupportMultyLanguage](IAdhocReport.SupportMultyLanguage.htm) = True.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «OBJ_ADHOC» и объекта «Ресурсы» с идентификатором
 «ADHOC_RES».


Добавьте ссылки на системные сборки «Metabase», «Adhoc», «Io».


			Sub UserProc;

Var

    mb: IMetabase;

    resource: IResourceObject;

    repObj: IMetabaseObject;

    report: IAdhocReport;

Begin

    mb := MetabaseClass.Active;

    resource := mb.ItemById("ADHOC_RES").Bind As IResourceObject;

    repObj := mb.ItemById("OBJ_ADHOC").Edit;

    report := repObj As IAdhocReport;

    report.Resources := resource;

    report.SupportMultyLanguage := True;

    If report.IsDirty Then

        repObj.Save;

    End If;

End Sub UserProc;


Результат выполнения примера: аналитическая панель «OBJ_ADHOC» преобразована
 в мультиязычную, для хранения переводов используется объект «Ресурсы»
 с идентификатором «ADHOC_RES».


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
