# IGxDocumentLabel.Name

IGxDocumentLabel.Name
-


# IGxDocumentLabel.Name


## Синтаксис


Name: String;


## Описание


Свойство Name возвращает значение
 подстановки &[NAME], которая может использоваться в штампе маркировки.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «Report_1». В репозитории включен мандатный доступ.
 Уровень безопасности, соответствующий отчету, предусматривает маркировку
 объектов при экспорте и печати.


			Sub UserProc;

Var

    MB: IMetabase;

    Doc: IGxDocument;

    GxLabel: IGxDocumentLabel;

Begin

    MB := MetabaseClass.Active;

    Doc := mb.ItemById("Report_1").Open(Null) As IGxDocument;

    GxLabel := Doc.Label;

    Debug.WriteLine("ФИО, тел: " + GxLabel.Name);

    Debug.WriteLine("Подразделение: " + GxLabel.Department);

End Sub UserProc;


При выполнении примера в консоль будут выведены поля штампа, используемые
 при маркировке.


См. также:


[IGxDocumentLabel](IGxDocumentLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
