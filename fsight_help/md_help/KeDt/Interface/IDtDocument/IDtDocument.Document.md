# IDtDocument.Document

IDtDocument.Document
-


# IDtDocument.Document


## Синтаксис


Document: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Document определяет
 объект репозитория «[Документ](UiNavObj.chm::/UiNavObj_document.htm)»,
 из которого будет производиться импорт данных.


## Комментарии


В качестве источника для импорта данных из объекта репозитория «Документ» можно выбрать:


	- документы MS Excel (xlsx, xls);


	- текстовые документы (txt, xml);


	- веб-страницы (html);


	- базы данных Microsoft
	 Access, Visual FoxPro, Dbase.


## Пример


Для выполнения примера предполагается наличие задачи ETL с идентификатором
 «ETL» и документа с идентификатором «DOCPROVIDER», являющегося источником
 данных.


Для вывода в окно консоли процесса и результата импорта данных используется
 класс CallBack, описанный в примере метода [IEtlExecutionCallback.OnObject](KeEtl.chm::/Interface/IEtlExecutionCallback/IEtlExecutionCallback.OnObject.htm).


Добавьте ссылки на системные сборки «Metabase», «ETL», «Dt».


			Sub UserProc;

Var

    mb:IMetabase;

    EtlTask: IEtlTask;

    EtlProvider:IEtlPlainDataProvider;

    CB: CallBack;

    TextProvider : IDtTextProvider;

    DocumentProvider : IDtDocument;

Begin

    mb:=MetabaseClass.Active;

    EtlTask:=mb.ItemById("ETL").Edit As IEtlTask;

    //Создание объекта "Импорт из текста"

    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataTextProvider) As IEtlPlainDataProvider;

    EtlProvider := EtlProvider.Edit;

    EtlProvider.Id := "Text_Provider";

    EtlProvider.Name := "Импорт из текста";

    EtlProvider.Description := "Импорт из текста";

    //Настройка источника данных

    TextProvider := EtlProvider.Provider As IDtTextProvider;

    CB:=New CallBack.Create;

    EtlTask.Execute(CB);

    DocumentProvider := TextProvider As IDtDocument;

    If DocumentProvider <> Null Then

        DocumentProvider.Document := MB.ItemById("DOCPROVIDER");

    End If;

    (EtlTask As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будет выполнена выгрузка данных из указанного
 документа.


См. также:


[IDtDocument](IDtDocument.htm)
 | Источник данных «[Репозиторий](uietl.chm::/Desktop/03_ETLObjects/02_Inputs/UiEtl_Inputs_Repo.htm)»


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
