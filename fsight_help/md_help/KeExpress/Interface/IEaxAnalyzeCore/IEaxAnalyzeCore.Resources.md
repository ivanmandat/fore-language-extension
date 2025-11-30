# IEaxAnalyzeCore.Resources

IEaxAnalyzeCore.Resources
-


# IEaxAnalyzeCore.Resources


## Синтаксис


Resources: [IResourceObject](ModIo.chm::/Interface/IResourceObject/IResourceObject.htm);


## Описание


Свойство Resources определяет
 объект «Ресурсы», используемый для хранения переводов заголовка экспресс-отчёта.


## Комментарии


Свойство актуально, если заголовок отчёта является мультиязычным, т.е. если
 [IEaxAnalyzer.SupportMultiLanguage](../IEaxAnalyzer/IEaxAnalyzer.SupportMultiLanguage.htm) = True.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором OBJ_EAX и объекта «Ресурсы» с идентификатором EAX_RES.


Добавьте ссылки на системные сборки: Express, IO, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    resource: IResourceObject;

	    repObj: IMetabaseObject;

	    report: IEaxAnalyzer;

	Begin

	    mb := MetabaseClass.Active;

	    resource := mb.ItemById("EAX_RES").Bind As IResourceObject;

	    repObj := mb.ItemById("OBJ_EAX").Edit;

	    report := repObj As IEaxAnalyzer;

	    report.Resources := resource;

	    report.SupportMultiLanguage := True;

	    repObj.Save;

	End Sub UserProc;


Результат выполнения примера: заголовок экспресс-отчёта OBJ_EAX преобразован
 в мультиязычный, для хранения переводов используется объект «Ресурсы»
 с идентификатором EAX_RES.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
