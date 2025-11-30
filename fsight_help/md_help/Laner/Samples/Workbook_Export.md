# Экспорт рабочей книги в различные форматы

Экспорт рабочей книги в различные форматы
-


# Экспорт рабочей книги в различные форматы


Экспорт рабочей книги возможен в следующие форматы: mht, html, pdf,
 xls, xlsx, rtf, emf, pptx.


Для выполнения примера предполагается наличие в репозитории рабочей
 книги с идентификатором «OBJ123», экспорт которой будет осуществлен.


Подключите ссылки на следующие системные сборки:


	- Express;


	- Metabase.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Exp: IEaxAnalyzer;

    Export: IExAnalyzerExporter;

Begin

    MB := MetabaseClass.Active;

    //Открываем рабочую книгу на редактирование

    MObj := MB.ItemById("OBJ123").Edit;

    Exp := MObj As IEaxAnalyzer;

    Export := New ExAnalyzerExporter.Create;

    Export.ExAnalyzer := Exp;

    //Экспортируем рабочую книгу в формат xls

    Export.ExportToFile("C:\Объем ВВП.xls", "XLS");

End Sub UserProc;


После выполнения примера рабочая книга будет сохранена на локальном
 диске в формате xls.


См. также:


[Примеры](Laner_Samples.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
