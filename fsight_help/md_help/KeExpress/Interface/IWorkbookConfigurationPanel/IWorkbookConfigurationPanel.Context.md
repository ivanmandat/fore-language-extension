# IWorkbookConfigurationPanel.Context

IWorkbookConfigurationPanel.Context
-


# IWorkbookConfigurationPanel.Context


## Синтаксис


Context: [WbkConfigurationPanelContext](../../Enums/WbkConfigurationPanelContext.htm);


## Описание


Свойство Context определяет
 контекст, отображаемый в компоненте.


## Комментарии


Контекст - это набор вкладок компонента WorkbookConfigurationPanel,
 предназначенный для настройки какой-либо части рабочей книги.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:


	- WorkbookConfigurationPanel
	 с наименованием «WorkbookConfigurationPanel1»;


	- WorkbookDocumentViewerBox
	 с наименованием «WorkbookDocumentViewerBox»;


	- UiErAnalyzer с
	 наименованием «UiErAnalyzer1». Данный компонент должен содержать загруженную
	 рабочую книгу базы данных временных рядов и являться источником данных
	 для компонентов «WorkbookConfigurationPanel1» и «WorkbookDocumentViewerBox».


	Sub UserProc;

	Begin

	    WorkbookConfigurationPanel1.Context := WbkConfigurationPanelContext.Factor;

	End Sub UserProc;


В результате выполнения примера в компоненте «WorkbookConfigurationPanel1»
 будет доступен контекст для фактора вычисляемого ряда.


См. также:


[IWorkbookConfigurationPanel](IWorkbookConfigurationPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
