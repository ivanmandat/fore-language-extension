# ITabSheetExporter.Label

ITabSheetExporter.Label
-


# ITabSheetExporter.Label


## Синтаксис


Label: [IGxDocumentLabel](ModDrawing.chm::/Interface/IGxDocumentLabel/IGxDocumentLabel.htm);


## Описание


Свойство Label определяет параметры
 маркировки таблицы. Данное свойство автоматически используется при включенном
 мандатном доступе, в случае если для объекта задана маркировка (уровень
 безопасности).


## Пример


	Class MyLabel: Object, IGxDocumentLabel

	    Function get_UserId: String;

	    Begin

	        Return "MyUserId";

	    End Function get_UserId;

	    Function get_UserName: String;

	    Begin

	        Return "MyUserName";

	    End Function get_UserName;

	    Function get_Scheme: String;

	    Begin

	        Return "MyScheme";

	    End Function get_Scheme;

	    Function get_Mark: String;

	    Begin

	        Return "MyMark";

	    End Function get_Mark;

	    Function get_IsON: Boolean;

	    Begin

	        Return True;

	    End Function get_IsON;

	End Class MyLabel;

	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    Exp: ITabSheetExporter;

	    DocumLab: IGxDocumentLabel;

	Begin

	    MB := MetabaseClass.Active;

	    DocumLab := New MyLabel.Create As IGxDocumentLabel;

	    Rep := MB.ItemById("Reg_rep").Bind As IPrxReport;

	    Tab := Rep.ActiveSheet.Table;

	    Exp := New TabSheetExporter.Create;

	    Exp.TabSheet := Tab;

	    Exp.Label := DocumLab;

	    Exp.ExportToFile("c:\1.xls", "XLS");

	End Sub UserProc;


После выполнения примера активный лист регламентного отчета будет экспортирован
 в файл формата "XLS" и маркирован собственным маркером «MyLabel».


См. также:


[ITabSheetExporter](ITabSheetExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
